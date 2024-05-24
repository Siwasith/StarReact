import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-neutral-900 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-3 m-4">
        <a href="#" className="flex items-center">
          <svg
            viewBox="0 0 24 24"
            width="40"
            height="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4 md:block h-8 md:h-10"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M9.00068 19.0001C9.00068 19.8401 9.13068 20.6601 9.37068 21.4201C5.53068 20.0901 2.63068 16.5601 2.33068 12.4301C2.03068 8.04012 4.56068 3.94012 8.65068 2.22012C9.71068 1.78012 10.2507 2.10012 10.4807 2.33012C10.7007 2.55012 11.0107 3.08012 10.5707 4.09012C10.1207 5.13012 9.90068 6.23012 9.90068 7.37012C9.91068 9.41012 10.7107 11.3001 12.0107 12.7501C10.1807 14.2101 9.00068 16.4701 9.00068 19.0001Z"
                fill="#fafafa"
              ></path>{" "}
              <path
                opacity="0.4"
                d="M21.21 17.72C19.23 20.41 16.09 21.99 12.74 21.99C12.58 21.99 12.42 21.98 12.26 21.97C11.26 21.93 10.29 21.74 9.37 21.42C9.13 20.66 9 19.84 9 19C9 16.47 10.18 14.21 12.01 12.75C13.48 14.4 15.59 15.47 17.92 15.57C18.55 15.6 19.18 15.55 19.8 15.44C20.92 15.24 21.37 15.66 21.53 15.93C21.7 16.2 21.88 16.79 21.21 17.72Z"
                fill="#fafafa"
              ></path>{" "}
            </g>
          </svg>

          <a
            href="#"
            className="mx-1 md:mx-8 my-4 mr-1 font-black text-white text-2xl md:text-4xl no-underline font-mono"
          >
            Skyroon
          </a>
        </a>

        <div className="relative md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white text-base no-underline px-4 py-3 block rounded-sm mr-5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              className="w-8 h-8"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  opacity="0.4"
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                  fill="#292D32"
                ></path>{" "}
                <path
                  d="M11.9995 10.6899C11.2795 10.6899 10.6895 11.2799 10.6895 11.9999C10.6895 12.7199 11.2795 13.3099 11.9995 13.3099C12.7195 13.3099 13.3095 12.7199 13.3095 11.9999C13.3095 11.2799 12.7195 10.6899 11.9995 10.6899Z"
                  fill="#292D32"
                ></path>{" "}
                <path
                  d="M6.99945 10.6899C6.27945 10.6899 5.68945 11.2799 5.68945 11.9999C5.68945 12.7199 6.27945 13.3099 6.99945 13.3099C7.71945 13.3099 8.30945 12.7199 8.30945 11.9999C8.30945 11.2799 7.71945 10.6899 6.99945 10.6899Z"
                  fill="#292D32"
                ></path>{" "}
                <path
                  d="M16.9995 10.6899C16.2795 10.6899 15.6895 11.2799 15.6895 11.9999C15.6895 12.7199 16.2795 13.3099 16.9995 13.3099C17.7195 13.3099 18.3095 12.7199 18.3095 11.9999C18.3095 11.2799 17.7195 10.6899 16.9995 10.6899Z"
                  fill="#292D32"
                ></path>{" "}
              </g>
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 py-3 w-36 bg-neutral-300 rounded-lg shadow-xl font-bold h-32 ">
              <li className="m-1 flex hover:bg-neutral-200 rounded-lg ">
                <a
                  href="#"
                  className="text-gray-800 text-base no-underline px-4 py-3 block flex items-center text-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        opacity="0.4"
                        d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z"
                        fill="#292D32"
                      ></path>
                      <path
                        d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
                        fill="#292D32"
                      ></path>
                    </g>
                  </svg>
                  Contact
                </a>
              </li>
              <li className="m-1">
                <a
                  href="#"
                  className="text-gray-800 text-base no-underline px-4 py-3 block hover:bg-neutral-200 rounded-lg flex items-center text-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        opacity="0.4"
                        d="M18 3H6C3.79 3 2 4.78 2 6.97V17.03C2 19.22 3.79 21 6 21H18C20.21 21 22 19.22 22 17.03V6.97C22 4.78 20.21 3 18 3Z"
                        fill="#292D32"
                      ></path>
                      <path
                        d="M19 8.75H14C13.59 8.75 13.25 8.41 13.25 8C13.25 7.59 13.59 7.25 14 7.25H19C19.41 7.25 19.75 7.59 19.75 8C19.75 8.41 19.41 8.75 19 8.75Z"
                        fill="#292D32"
                      ></path>
                      <path
                        d="M19 12.75H15C14.59 12.75 14.25 12.41 14.25 12C14.25 11.59 14.59 11.25 15 11.25H19C19.41 11.25 19.75 11.59 19.75 12C19.75 12.41 19.41 12.75 19 12.75Z"
                        fill="#292D32"
                      ></path>
                      <path
                        d="M19 16.75H17C16.59 16.75 16.25 16.41 16.25 16C16.25 15.59 16.59 15.25 17 15.25H19C19.41 15.25 19.75 15.59 19.75 16C19.75 16.41 19.41 16.75 19 16.75Z"
                        fill="#292D32"
                      ></path>
                      <path
                        d="M8.49945 11.7899C9.77523 11.7899 10.8095 10.7557 10.8095 9.47992C10.8095 8.20414 9.77523 7.16992 8.49945 7.16992C7.22368 7.16992 6.18945 8.20414 6.18945 9.47992C6.18945 10.7557 7.22368 11.7899 8.49945 11.7899Z"
                        fill="#292D32"
                      ></path>
                      <path
                        d="M9.29954 13.1098C8.76954 13.0598 8.21954 13.0598 7.68954 13.1098C6.00954 13.2698 4.65954 14.5998 4.49954 16.2798C4.48954 16.4198 4.52954 16.5598 4.62954 16.6598C4.72954 16.7598 4.85954 16.8298 4.99954 16.8298H11.9995C12.1395 16.8298 12.2795 16.7698 12.3695 16.6698C12.4595 16.5698 12.5095 16.4298 12.4995 16.2898C12.3295 14.5998 10.9895 13.2698 9.29954 13.1098Z"
                        fill="#292D32"
                      ></path>
                    </g>
                  </svg>
                  About Me
                </a>
              </li>
            </ul>
          )}
        </div>

        <ul className="hidden md:flex list-none m-0 p-0 font-extrabold">
          <li className="m-1">
            <a
              href="#"
              className="ease-in-out duration-200 text-white text-base no-underline px-5 py-3 block hover:bg-gray-200 hover:text-gray-800 rounded"
            >
              Home
            </a>
          </li>
          <li className="m-1">
            <a
              href="#"
              className="ease-in-out duration-200 text-white text-base no-underline px-5 py-3 block hover:bg-gray-200 hover:text-gray-800 rounded"
            >
              About
            </a>
          </li>
          <li className="m-1">
            <a
              href="#"
              className="ease-in-out duration-200 text-white text-base no-underline px-5 py-3 block hover:bg-gray-200 hover:text-gray-800 rounded"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
