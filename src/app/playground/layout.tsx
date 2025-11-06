import Link from "next/link";

export default function PlaygroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>
        <Link href={"/playground/find-play"}>Find & Play</Link>
        <Link href={"/playground/games"}>Games</Link>
        <Link href={"/playground/players"}>Players</Link>
        <Link href={"/playground/add-game"}>Add game</Link>
      </nav>
      {children}
    </div>
  );
}
