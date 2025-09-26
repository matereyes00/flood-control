import { useState, useEffect } from 'react';

const funnyGifs = [
  "https://media.tenor.com/YO_YG_AO9GoAAAAM/chloelmao-vine.gif", 
  "https://media.tenor.com/PXOXwsJKbSYAAAAM/where-you.gif",
  "https://media.tenor.com/4btq4cqzLKYAAAAM/the-office.gif",
  "https://media.tenor.com/OcM1uqgAXagAAAAM/looks-into-the-camera-like-the-office-the-office.gif",
  "https://media.tenor.com/tIJuBC1opesAAAAM/im-waiting-daffy-duck.gif",
  "https://media.tenor.com/9S9aYsgGYakAAAAM/fezzyka9.gif",
  "https://media.tenor.com/LMz_TrIOxV8AAAAM/mr-bean-mrbean.gif"
];

// Helper function to get random GIF
const getRandomGif = () => {
  const randomIndex = Math.floor(Math.random() * funnyGifs.length);
  return funnyGifs[randomIndex];
};

export const UnderConstruction = () => {
  const [currentGif, setCurrentGif] = useState('');

  // Set random GIF when component mounts
  useEffect(() => {
    setCurrentGif(getRandomGif());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <img 
        src={currentGif} 
        alt="Under Construction" 
        className="w-1/2 max-w-md"
      />
      <h1 className="mt-8 text-2xl md:text-4xl font-bold">Page Under Construction</h1>
      <p className="mt-2 text-gray-400">Please check back later!</p>
    </div>
  );
};