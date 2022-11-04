import React from "react";

function Contact() {
  return (
    <div className="bg-white flex flex-col md:min-h-screen md:justify-center md:py-12 px-6 lg:px-8 font-">
      <div className="mt-7 sm:mx-auto">
        <div className="my-12 space-y-5">
          <h2 className="text-4xl font-semibold">Contact Me</h2>
          <p className="text-gray-500 sm:text-xl w-full">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form action="#">
          <div className="space-y-5">
            <div className="space-y-5 md:space-y-0 md:flex md:items-center md:space-x-3">
              <div className="">
                <label htmlFor="" className="text-sm">
                  First Name
                </label>
                <div className="mt-1 p-1">
                  <input
                    className="w-full md:w-[346px] p-3 border border-gray-300 rounded-lg focus:outline-0"
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="Enter your first name."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Last Name
                </label>
                <div className="mt-1 p-1">
                  <input
                    className=" w-full md:w-[346px] p-3 border border-gray-300 rounded-lg focus:outline-0"
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Enter your last name."
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Email
              </label>
              <div className="mt-1 p-1">
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your first name."
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Last Name
              </label>
              <div className="mt-1 p-1">
                {/* <input
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your first name."
                /> */}
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                  placeholder="Send me message and i'll reply you as soon as possible..."
                  name="message"
                  id="message"
                  cols="20"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div class="flex">
              <input
                className="focus:outline-none"
                id="terms-and-privacy"
                name="terms-and-privacy"
                type="checkbox"
              />
              <label
                for="terms-and-privacy"
                class="ml-2 block text-sm text-gray-600"
              >
                You agree to providing your data to who may contact you.
              </label>
            </div>
            <button
              id="btn__submit"
              className="w-full p-3 bg-blue-600 hover:bg-blue-900 ease-in duration-300 text-white font-semibold rounded-lg"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
