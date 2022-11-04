import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="md:min-h-screen overflow-auto">
      <header className="space-y-7 mb-7 max-w-6xl mx-auto relative mt-10">
        <button className="bb mr-10 absolute right-0">
          <img className="md:hidden" src="/img/share_mobile.png" alt="" />
          <img className="hidden md:block" src="/img/share.png" alt="" />
        </button>
        <div className="flex flex-col items-center space-y-3 mt-16">
          <div className="group overflow-hidden relative rounded-full focus:border w-24 h-24 bs"></div>
          <h3 className="font-bold text-lg">Annette Black</h3>
        </div>
      </header>
      <main>
        <div className="flex flex-col justify-center items-center mx-auto max-w-screen-2xl text-center space-y-5">
          <Button
            id="twitter"
            link="https://twitter.com/AliyuAlsajjad"
            name="Twitter Link"
          />
          <Button
            id="btn__zuri"
            link="https://training.zuri.team/"
            name="Zuri Team"
          />
          <Button
            id="pitch"
            name="Zuri Books"
            link="https://books.zuri.team/design-rules"
          />
          <Button
            id="books"
            link="https://books.zuri.team/python-for-beginners?ref-id=aliyusani"
            name="Python Books"
          />
          <Button
            id="book__python"
            link="https://background.zuri.team"
            name="Background Check for Coders"
          />
          <Button
            id="book__design"
            link="https://books.zuri.team/design-rules"
            name="Design Books"
          />
          <Link
            id="contact"
            className="bg-gray-200 hover:bg-gray-300 py-6 w-11/12 rounded-md"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-center pt-16 pb-20 space-x-7 w-11/12 mx-auto">
          <img className="" src="/img/slack.svg" alt="" />
          <img className="" src="/img/git.svg" alt="" />
        </div>
      </main>
    </div>
  );
}

export default Home;
