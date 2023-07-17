import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import "./Dog.css";

interface BreedDataProps {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
}

const Dog: React.FC<{ breedData: BreedDataProps }> = ({ breedData }) => {
  const [imageUrl, setImageUrl] = useState("./placeholderimage.svg");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get(
          `https://api.thedogapi.com/v1/images/${breedData.reference_image_id}`
        );
        setImageUrl(response.data.url);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", (error as any).message);
        setIsLoading(false);
      }
    };

    if (breedData.reference_image_id) {
      setIsLoading(true);
      fetchImageData();
    }
  }, [breedData.reference_image_id]);

  return (
    <>
      <div className="dog-data-table">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="accordion-image">
            <img width="150" src={imageUrl} alt={breedData.name} />
          </div>
        )}
        <div>
          <div className="breed-detail">
            <span className="breed-label">Height:</span>{" "}
            <span className="breed-value">
              {breedData.height.metric} cm ({breedData.height.imperial} inches)
            </span>
          </div>
          <div className="breed-detail">
            <span className="breed-label">Weight:</span>{" "}
            <span className="breed-value">
              {breedData.weight.metric} kg ({breedData.weight.imperial} lbs)
            </span>
          </div>
          <div className="breed-detail">
            <span className="breed-label">Bred For:</span>{" "}
            <span className="breed-value">{breedData.bred_for}</span>
          </div>
          <div className="breed-detail">
            <span className="breed-label">Breed Group:</span>{" "}
            <span className="breed-value">{breedData.breed_group}</span>
          </div>
          <div className="breed-detail">
            <span className="breed-label">Life Span:</span>{" "}
            <span className="breed-value">{breedData.life_span}</span>
          </div>
          <div className="breed-detail">
            <span className="breed-label">Temperament:</span>{" "}
            <span className="breed-value">{breedData.temperament}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dog;
