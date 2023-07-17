import sortDogBreeds from "./SortDogBreed";

const BreedA = {
  id: 1,
  name: "Breed A",
  height: {
    metric: "20 - 40"
  },
  life_span: "10 - 15 years"
};

const BreedB = {
  id: 2,
  name: "Breed B",
  height: {
    metric: "15 - 30"
  },
  life_span: "8 - 12 years"
};

const BreedC = {
  id: 3,
  name: "Breed C",
  height: {
    metric: "35 - 50"
  },
  life_span: "12 - 18 years"
};

describe("sortDogBreeds", () => {
  const breeds = [BreedA, BreedB, BreedC];

  it("should sort dog breeds by name", () => {
    const sortedBreeds = sortDogBreeds(breeds, "name");
    expect(sortedBreeds).toEqual([BreedA, BreedB, BreedC]);
  });

  it("should sort dog breeds by height", () => {
    const sortedBreeds = sortDogBreeds(breeds, "height");
    expect(sortedBreeds).toEqual([BreedB, BreedA, BreedC]);
  });

  it("should sort dog breeds by lifespan", () => {
    const sortedBreeds = sortDogBreeds(breeds, "lifespan");
    expect(sortedBreeds).toEqual([BreedB, BreedA, BreedC]);
  });

  it("should return unsorted dog breeds if the sort criteria is not recognized", () => {
    const sortedBreeds = sortDogBreeds(breeds, "unknown");
    expect(sortedBreeds).toEqual(breeds);
  });
});
