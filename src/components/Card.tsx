import React from "react";
import Image from "next/image";

type propCard = {
  id:number;
  image: string;
  title: string;
  description: string;
};
const Card = ({image, title, description }: propCard) => {
  return (
    <div className="bg-black justify-center p-2 items-center border-2 border-secondary rounded-md  flex flex-col transition-transform hover:scale-105">
      <Image
        src={image || '/images/fallback.jpg'}
        alt={title}
        width={800}
        height={600}
      
        className="h-48 w-full rounded-md mb-4"
      />
    
      <h3 className="font-bold text-2xl text-center py-5">{title}</h3>
      <p className="mb-5 line-clamp-1">{description}</p>
      <div className="flex justify-center items-center ">
        <button className="px-10 py-4 bg-secondary rounded-lg hover:scale-105">Explore Now</button>
       
      </div>
    </div>
  );
};

export default Card;
