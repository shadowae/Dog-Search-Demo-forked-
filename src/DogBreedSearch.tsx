import { useEffect, useState } from "react";
import axios from "axios";
import sortDogBreeds from "./utils/SortDogBreed";
import DogList from "./DogList";

const DogBreedSearch = () => {
  const [userInput, setUserInput] = useState("Grey");
  const [dogBreeds, setDogBreeds] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("name");

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    const fetchDogBreeds = async () => {
      try {
        const response = await axios.get(
          `https://api.thedogapi.com/v1/breeds/search?q=${userInput}`
        );
        setDogBreeds(response.data);
      } catch (error) {
        console.error("Error:", (error as any).message);
      }
    };

    const delayedSearch = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fetchDogBreeds, 1000);
    };

    if (userInput) {
      delayedSearch();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [userInput]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserInput(value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortCriteria(value);
  };

  const sortedDogBreeds = sortDogBreeds(dogBreeds, sortCriteria);

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Search for a dog breed"
      />
      <select value={sortCriteria} onChange={handleSortChange}>
        <option value="name">Sort by Name</option>
        <option value="height">Sort by Height</option>
        <option value="lifespan">Sort by Lifespan</option>
      </select>
      <DogList sortedDogBreeds={sortedDogBreeds} />
    </div>
  );
};

export default DogBreedSearch;
