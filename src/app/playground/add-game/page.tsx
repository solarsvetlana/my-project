import { createCategory } from "@/app/actions/create-category";

const CreateGame = () => {
  return (
    <div>
      <form action={createCategory}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateGame;
