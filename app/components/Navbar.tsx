"use client"; // Marks this as a Client Component

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession(); 
  return (
    <header className="px-6 py-4 bg-white shadow-md font-sans">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
     
        <Link href="/">
          <Image 
            src="https://th.bing.com/th/id/OIP.TfHnP1QoPAsmYhnlBcRH2QHaHa?w=179&h=180&c=7&pcl=1b1a19&r=0&o=5&pid=1.7" 
            alt="Fire Extinguisher Logo" 
            width={40} 
            height={60} 
            className="cursor-pointer"
          />
        </Link>

        <div className="flex items-center gap-6">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span className="text-gray-700 hover:text-blue-600 transition-all cursor-pointer">
                  Create
                </span>
              </Link>
              
              <Link href={`/user/${session.user.id}`} className="flex items-center gap-3">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full border border-gray-300"
                  />
                )}
                <span className="text-gray-700 font-medium hover:text-blue-600 transition-all">
                  {session.user.name}
                </span>
              </Link>

              <button 
                onClick={() => signOut()} 
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
<button
  onClick={() => signIn("github")}
  className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all"
>
  <span>Login with GitHub</span>
</button>


              <Link href="/login">
                <span className="text-gray-700 hover:text-blue-600 transition-all cursor-pointer">
                  Login
                </span>
              </Link>

              <Link href="/signup">
                <span className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition-all cursor-pointer">
                  Signup
                </span>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
