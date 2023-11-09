import React from 'react';

interface ItemType {
  name: string;
  description: string;
  imageUrl: string;
}

interface GridProps {
  item: ItemType;
}

const Grid: React.FC<GridProps> = ({ item }) => {
  return (
    <div className="rounded-xl card bg-white bg-opacity-20 shadow-lg border-rounded-lg p-4 m-1">
      <img className="rounded-full w-10 h-10" src={`../public/images/${item.imageUrl}`} alt={item.name} />
      <h3 className="my-2">{item.name}</h3>
      <p className="text-sm text-gray-400">{item.description}</p>
    </div>
  );
};

export default Grid;
