import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import arrowright from "../../assets/images/arrow-right.png";

export default function ButtonAppBar() {
  const [first, setfirst] = useState(false);

  return (
    <div>
      <nav className=" bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20 top-0 left-0 ">
        <div
          className=" w-11/12 lg:w-10/12  2xl:w-8/12 ml-auto mr-auto  flex flex-wrap justify-between items-center mx-auto"
          bis_skin_checked="1"
        >
          <a href="" className="flex items-center">
            <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </a>
          <div className="flex md:order-2" bis_skin_checked="1">
            <button
              type="button"
              className="text-primary bg-primary-light   focus:ring-4 focus:outline-none  rounded-3xl text-xs hidden sm:block md:text-sm px-6 py-3 text-center f-f-sm  mr-3 "
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-primary  focus:ring-4 focus:outline-none  rounded-3xl text-xs md:text-sm px-6 py-3 text-center f-f-sm mr-3 md:mr-0 "
            >
              <ul className="inline-flex">
                <li>Get started</li>
                <li>
                  {" "}
                  <img
                    src={arrowright}
                    className="ml-3 mt-1"
                    width="16px"
                    height="16px"
                    alt="Flowbite Logo"
                  />
                </li>
              </ul>
            </button>
            <button
              type="button"
              onClick={() => {
                setfirst(!first);
              }}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              first ? "block" : " hidden"
            }   justify-between items-center w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-3 xl:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white f-f-b bg-primary rounded md:bg-transparent md:text-black md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="ml-0 mt-2 md:mt-0">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-grey    f-f-r text-sm  rounded hover:text-white  hover:bg-primary md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Wallet
                </a>
              </li>
              <li className="ml-0 mt-2 md:mt-0">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-grey    f-f-r text-sm  rounded hover:text-white  hover:bg-primary md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Buy
                </a>
              </li>
              <li className="ml-0 mt-2 md:mt-0">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-grey    f-f-r text-sm  rounded hover:text-white  hover:bg-primary md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Sell
                </a>
              </li>
              <li className="ml-0 mt-2 md:mt-0">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-grey    f-f-r text-sm  rounded hover:text-white  hover:bg-primary md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Send
                </a>
              </li>
              <li className="ml-0 mt-2 md:mt-0">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-grey    f-f-r text-sm  rounded hover:text-white  hover:bg-primary md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Learn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
