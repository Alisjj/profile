import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="md:min-h-screen overflow-auto">
      <header className="space-y-7 mb-7 max-w-6xl mx-auto relative mt-10">
        <button className="bb mr-10 absolute right-0">
          <img className="md:hidden" src="/img/share_mobile.png" alt="" />
          <img className="hidden md:block" src="/img/share.png" alt="" />
        </button>
        <div className="flex flex-col items-center space-y-3 mt-16">
          <div className="overflow-hidden relative rounded-full focus:border">
            <img
              id="profile__img"
              className="inset-0 object-cover"
              src="/img/profile-pic.png"
              alt=""
            />
            <div className="absolute inset-0 bg-opacity-50 bg-slate-800">
              <img
                className="absolute top-14 inset-x-8"
                src="/img/camera-01.png"
                alt=""
              />
            </div>
          </div>
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
        </div>
        <div className="flex justify-center pt-16 pb-20 space-x-7 border-b w-11/12 mx-auto">
          <img className="" src="/img/slack.svg" alt="" />
          <img className="" src="/img/git.svg" alt="" />
        </div>
      </main>
      <footer className="my-10 mx-auto w-11/12">
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
    </div>
  );
}

export default App;
