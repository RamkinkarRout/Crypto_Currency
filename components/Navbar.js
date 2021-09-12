import Image from "next/image";
import logo from "../public/images/logo.png";
import { useSession, signIn, signOut } from "next-auth/client";
export const Navbar = () => {
  const [session] = useSession();

  return (
    <div className="p-4 bg-gray-800 w-full h-20 mb-5">
      {/* ---------------logo------------------- */}
      <div className=" container flex justify-between mx-auto">
        <div className="p-1 flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <h1 className="leading-relaxed tracking-wide text-xl text-gray-200 ">
            <span className="text-blue-500">C</span>ryptoTracker
          </h1>
        </div>
        {/* ---------------searchbar---------------- */}
        <div className="p-1 flex ">
          <input
            type="search"
            placeholder="Search"
            className="p-2 px-5 mr-4 outline-none border-2 border-blue-500 bg-gray-200 hover:bg-gray-300 text-bg-700"
          />

          {session && (
            <img
              className="relative z-10 inline object-cover w-12 h-12 border-2 border-blue-500 rounded-full"
              src={session.user.image}
              alt={"profile Image"}
            />
          )}

          <p
            onClick={!session ? signIn : signOut}
            className="whitespace-nowrap leading-relaxed tracking-wide text-l text-gray-200 text-center font-semibold my-auto p-2 cursor-pointer"
          >
            {session ? `Hello ${session.user.name}` : "Sign In"}
          </p>
        </div>
      </div>
    </div>
  );
};
