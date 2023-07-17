import extractNumericValues from "./ExtractNumericValues";
import DogBreedType from "../types/DogBreedType";

const sortDogBreeds = (breeds: DogBreedType[], sortCriteria: string) => {
  const sortedBreeds = [...breeds];

  sortedBreeds.sort((a, b) => {
    switch (sortCriteria) {
      case "name":
        return a.name.localeCompare(b.name);
      case "height":
        const aHeight = extractNumericValues(a.height.metric);
        const bHeight = extractNumericValues(b.height.metric);
        return aHeight[0] - bHeight[0];
      case "lifespan":
        const aLifespan = extractNumericValues(a.life_span);
        const bLifespan = extractNumericValues(b.life_span);
        return aLifespan[0] - bLifespan[0];
      default:
        return 0;
    }
  });

  return sortedBreeds;
};

export default sortDogBreeds;
