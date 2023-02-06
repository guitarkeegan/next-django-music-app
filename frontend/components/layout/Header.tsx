import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { SyntheticEvent } from "react";

export default function Header() {
  const { user, logout } = useAuth();

  const handleLogout = (e: SyntheticEvent) => {
    e.preventDefault();
    logout();
  };
  return (
    <div
      className="absolute text-white w-screen h-36 flex justify-between items-center px-20 text-lg"
      style={{ backgroundColor: "rgba(104, 134, 109, .7)" }}
    >
      <Link href="/" className="">
        Home
      </Link>
      <div>
        <Link href="/another-page">Another Page</Link>
        {user ? (
          <Link onClick={handleLogout} href="/">
            Logout
          </Link>
        ) : (
          <Link href={"/login"}>Login</Link>
        )}
      </div>
    </div>
  );
}
