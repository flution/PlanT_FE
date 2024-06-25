import React from "react";

const UpperNavbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          {" "}
          {/* 로고에 홈 라우팅 달아둬야함 */}
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6"
            alt="Flowbite Logo"
            style={{ marginLeft: "10px", marginTop: "10px" }}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
      </div>
    </nav>
  );
};

export default UpperNavbar;
