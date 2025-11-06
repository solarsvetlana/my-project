import ChangeTodoStatusBtn from "@/components/change-todo-status-btn";
import DeleteTodoBtn from "@/components/delete-todo-btn";
import { db } from "@/db";
import { todos, users } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-options";
import { asc, eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { cacheTag } from "next/cache";

async function getTodosByUserId(userId: number) {
  "use cache";
  cacheTag("todos");
  return db.query.todos.findMany({
    where: eq(todos.userId, userId),
    orderBy: asc(todos.createdAt),
  });
}

const TodosPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.email) {
    throw Error("Unauthorized");
  }
  const user = await db.query.users.findFirst({
    where: eq(users.email, session.user.email!),
  });

  if (!user) {
    throw new Error("User not found");
  }
  const personalTodos = await getTodosByUserId(user.id);

  return (
    <div>
      <ul>
        {personalTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title}

            <ChangeTodoStatusBtn todo={todo} />
            <DeleteTodoBtn id={todo.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosPage;
