import Accordion from "./Accordion";
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
        <Accordion title={breed.name}>
          <Dog breedData={breed} />
        </Accordion>
      ))}
    </>
  );
};

export default DogDisplay;
