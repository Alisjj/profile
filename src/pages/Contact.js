import React, { useState } from "react";

function Contact() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreement, setAgreement] = useState(false);

  const name = "Aliyu Sani";

  const handleSubmit = () => {};

  return (
    <div className="bg-white flex flex-col md:min-h-screen md:justify-center px-6 lg:px-8 ">
      <div className="sm:mx-auto">
        <div className="my-12 space-y-5">
          <h2 className="text-4xl font-semibold">Contact Me</h2>
          <p className="text-gray-500 sm:text-xl w-full">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form>
          <div className="space-y-5">
            <div className="space-y-5 md:space-y-0 md:flex md:items-center md:space-x-3">
              <div className="">
                <label htmlFor="" className="text-sm">
                  First Name
                </label>
                <div className="mt-1 p-1">
                  <input
                    className="w-full md:w-[346px] p-3 border border-gray-300 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-400"
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="Enter your first name."
                    value={fName}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Last Name
                </label>
                <div className="mt-1 p-1">
                  <input
                    className=" w-full md:w-[346px] p-3 border border-gray-300 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-400"
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={lName}
                    onChange={(e) => setLname(e.target.value)}
                    placeholder="Enter your last name."
                    required
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  type="text"
                  name=""
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your first name."
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Message
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Send me message and i'll reply you as soon as possible..."
                  name="message"
                  id="message"
                  cols="20"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex">
              <input
                className="focus:outline-none"
                id="terms-and-privacy"
                name="terms-and-privacy"
                type="checkbox"
                value={agreement}
                onChange={(e) => setAgreement(!agreement)}
                checked={agreement}
                required
              />
              <span
                htmlFor="terms-and-privacy"
                className="ml-2 block text-sm text-gray-600"
              >
                You agree to providing your data to {name} who may contact you?
              </span>
            </div>
            <button
              id="btn__submit"
              className="w-full p-3 bg-blue-600 hover:bg-blue-900 ease-in duration-300 text-white font-semibold rounded-lg"
              onSubmit={handleSubmit()}
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
