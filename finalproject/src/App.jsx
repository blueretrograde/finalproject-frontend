import "./App.scss";
import Homepage from "./Components/Homepage/Homepage";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className="app">
      <header className="quote">
      <Header />
        <h1 className="quote__heading">I haven't been everywhere, but it's on my list.</h1>
        <Homepage />
      </header>
    </div>
  );
};

export default App;