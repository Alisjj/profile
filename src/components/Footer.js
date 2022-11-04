import React from "react";

function Footer() {
  return (
    <footer className="my-10 mx-auto w-11/12 border-t pt-10">
      <div className="space-y-5 md:flex md:justify-between items-center">
        <img src="/img/zuri-logo.png" alt="" className="md:hidden" />
        <img src="/img/zuri_desktop.png" alt="" className="hidden md:block" />
        <p className="text-gray-500 font-normal">
          HNG Internship 9 Frontend Task
        </p>
        <img src="/img/I4G.png" alt="" className="md:hidden" />
        <img src="/img/desktoping.png" alt="" className="hidden md:block" />
      </div>
    </footer>
  );
}

export default Footer;
