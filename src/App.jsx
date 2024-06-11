import { ReactTyped } from "react-typed";

const App = () => {
  return (
    <div>
      <h1>
        I am{" "}
        <ReactTyped strings={["Harriet Kemunto","a software developer", "font-end developer"]} typeSpeed={200} loop />
      </h1>
    </div>
  );
};

export default App;