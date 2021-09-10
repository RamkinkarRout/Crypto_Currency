import Image from "next/image";
import logo from "../public/images/logo.png";
export const Navbar = () => {
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
            <span className="text-yellow-300">C</span>ryptoTracker
          </h1>
        </div>
        {/* ---------------searchbar---------------- */}
        <div className="p-1 flex">
          <input
            type="search"
            placeholder="Search"
            className="p-2 px-5 mr-2 outline-none bg-gray-200 hover:bg-gray-300 text-bg-700"
          />
          <p className="whitespace-nowrap leading-relaxed tracking-wide text-l text-gray-400 my-auto p-2 cursor-pointer">
            Hello Ramkinakr Rout
          </p>
        </div>
      </div>
    </div>
  );
};
