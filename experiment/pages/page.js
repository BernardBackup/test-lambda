import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const IndexPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesData = [];

        for (let imageNumber = 1; imageNumber <= 26; imageNumber++) {
          const response = await axios.get(`https://query-server.fly.dev/query?contract=first-nft&function=tokenURI&args=[${imageNumber}]`);

          if (response.status === 200) {
            imagesData.push(response.data.json);
          } else {
            console.error(`Failed to fetch image ${imageNumber}:`, response.statusText);
          }
        }

        setImages(imagesData);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Images</h1>
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <Image src={image} alt={`Image ${index + 1}`} width={150} height={150} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .image-container {
          display: flex;
          flex-wrap: wrap;
        }

        .image-wrapper {
          width: 150px;
          height: 150px;
          margin: 5px;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
