import "./App.css";
import DogBreedSearch from "./DogBreedSearch";

function App() {
  return (
    <div className="App">
      <div>
        <a
          href="https://www.vecteezy.com/vector-art/7559428-spoiled-dog-a-cute-spoiled-dog-logo-illustration"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/dog.jpg" className="logo" alt="Dog logo" />
        </a>
      </div>
      <h1>Dogs 'R' Us</h1>
      <h2>Search for Dogs</h2>
      <DogBreedSearch />
    </div>
  );
}

export default App;
