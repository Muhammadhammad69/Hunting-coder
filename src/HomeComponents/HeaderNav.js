import react from "react";
import Link from "next/link";
import navStyle from "../styles/nav.module.css";

const HeaderNav = ({ pathName }) => {
  // console.dir(document)
  let clickFunction = (event) => {
    const getElements = document.querySelector(".nav-items");
    // console.log(getElements.children.length);
    let ulLength = getElements.children.length;
    let userText = event.target.innerText;
    // console.log(getElements.children[1].childNodes[0].classList);
    let arrClass = getElements.parentElement.classList;
    let flag = false;
    for (let i = 0; i < arrClass.length; i++) {
      if (arrClass[i] === "hidden") {
        flag = true;
      }
    }
    for (let i = 0; i < ulLength; i++) {
      // if (flag) {

      getElements.children[i].childNodes[0].classList.remove(
        "md:text-blue-700"
      );
      getElements.children[i].childNodes[0].classList.remove("bg-blue-700");
      getElements.children[i].childNodes[0].classList.add("hover:bg-gray-100");
      if (userText.trim() === getElements.children[i].innerText.trim()) {
        getElements.children[i].childNodes[0].classList.remove("text-gray-950");
        getElements.children[i].childNodes[0].classList.add("md:text-blue-700");
        getElements.children[i].childNodes[0].classList.remove(
          "hover:bg-gray-100"
        );
        getElements.children[i].childNodes[0].classList.add("bg-blue-700");
      } else {
        getElements.children[i].childNodes[0].classList.add("text-gray-950");
      }
      // } else {

      // getElements.children[i].childNodes[0].classList.replace(
      //   "md:text-blue-700",
      //   "bg-blue-700"
      // );
      // if(userText.trim() === getElements.children[i].innerText.trim()){
      //   getElements.children[i].childNodes[0].classList.add("bg-blue-700");

      // }
      // }
    }
  };
  return (
    <>
      <nav className={`border-gray-200 ${navStyle.nav}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Hunter Blog
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              className={`nav-items font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${navStyle.nav}`}
            >
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 text-gray-950 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:bg-gray-100 md:hover:text-blue-700 md:hover:bg-transparent  `}
                  aria-current="page"
                  onClick={clickFunction}
                >
                  Home
                </Link>
              </li>
              <li className={navStyle.effect}>
                <Link
                  href="/blog"
                  className=" block py-2 px-3 text-gray-950 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent md:bg-transparent "
                  onClick={clickFunction}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 text-gray-950 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent md:bg-transparent"
                  onClick={clickFunction}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-gray-950 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent md:bg-transparent"
                  onClick={clickFunction}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default HeaderNav;
