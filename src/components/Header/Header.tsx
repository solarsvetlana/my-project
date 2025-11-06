import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import GoogleSignIn from "../google-sign-in";

export default function Header() {
  return (
    <div>
      <nav className="bg-accent p-4">
        <div className="flex space-x-6 justify-center">
          <Link
            href={"/blog"}
            className="text-background hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href={"/about"}
            className="text-background hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href={"/blog/post"}
            className="text-background hover:text-foreground transition-colors"
          >
            Post
          </Link>
          <Link
            href={"/playground/find-play"}
            className="text-background hover:text-foreground transition-colors"
          >
            Playground
          </Link>
          <Link
            href={"/users-client-ver"}
            className="text-background hover:text-foreground transition-colors"
          >
            Users-Client
          </Link>
          <Link
            href={"/users-server-ver"}
            className="text-background hover:text-foreground transition-colors"
          >
            Users-Server
          </Link>
          <Link
            href={"/products-server-version"}
            className="text-background hover:text-foreground transition-colors"
          >
            Products-Server
          </Link>
          <Link
            href={"/products-client-version"}
            className="text-background hover:text-foreground transition-colors"
          >
            Products-Client
          </Link>
          <Link
            href={"/events/new"}
            className="text-background hover:text-foreground transition-colors"
          >
            Create event
          </Link>
          <Link
            href={"/events"}
            className="text-background hover:text-foreground transition-colors"
          >
            Events
          </Link>
          <Link
            href={"/profile"}
            className="text-background hover:text-foreground transition-colors"
          >
            Profile
          </Link>
          <Link
            href={"/todos/new"}
            className="text-background hover:text-foreground transition-colors"
          >
            Add todo
          </Link>
          <Link
            href={"/todos"}
            className="text-background hover:text-foreground transition-colors"
          >
            Todos
          </Link>
          <GoogleSignIn />
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
}
