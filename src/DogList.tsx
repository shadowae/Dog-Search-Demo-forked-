import Accordian from "./Accordian";
import "./DogList.css";
import Dog from "./Dog";

interface PropType {
  sortedDogBreeds: any[];
}

const DogDisplay = (props: PropType) => {
  const { sortedDogBreeds } = props;
  return (
    <>
      {sortedDogBreeds.map((breed) => (
        <Accordian title={breed.name}>
          <Dog breedData={breed} />
        </Accordian>
      ))}
    </>
  );
};

export default DogDisplay;
