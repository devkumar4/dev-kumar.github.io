import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        ></a>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <Link
                href="https://www.github.com/devkumar4"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent"
                aria-current="page"
              >
                <FaGithub className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/devtwt4/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent"
                aria-current="page"
              >
                <FaLinkedin className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.x.com/dev_twt4"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent"
                aria-current="page"
              >
                <FaXTwitter className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent"
                aria-current="page"
              >
                <IoMdMail className="w-8 h-8" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
