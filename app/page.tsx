import Image from "next/image";
import Login from "./login/page";

export default function Home() {
  return (
    <main className="mx-auto items-center justify-center p-24">
      <Login />
    </main>
  );
}
