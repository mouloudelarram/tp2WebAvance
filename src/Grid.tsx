import React from 'react';

interface ItemType {
    name: string;
    description: string;
    imageUrl: string;
}

interface GridProps {
    gridKey: number; // Changed from key to gridKey
    item: ItemType;
}

const Grid: React.FC<GridProps> = ({gridKey, item}) => {
    if (gridKey == 4) {
        return (
            <div className={`flex grid-item grid-item-${gridKey}`}>
                <div>
                    <h3 className="my-2">{item.name}</h3>
                    <p className="text-left text-sm text-gray-400">{item.description}</p>
                </div>
                <img className="text-right mx-auto rounded-full w-20 h-20 " src={`../public/images/${item.imageUrl}`}
                     alt={item.name}/>
            </div>
        );
    } else if (gridKey == 3) {
        return (
            <div className={`grid-item grid-item-${gridKey}`}>
                <img className="mx-auto w-1/3 m-1" src={`../public/images/${item.imageUrl}`} alt={item.name}/>
                <h3 className="my-2">{item.name}</h3>
                <p className="text-left text-sm text-gray-400">{item.description}</p>
            </div>
        );
    } else {
        return (
            <div className={`grid-item grid-item-${gridKey}`}>
                <img className="rounded-full w-10 h-10" src={`../public/images/${item.imageUrl}`} alt={item.name}/>
                <h3 className="my-2">{item.name}</h3>
                <p className="text-left text-sm text-gray-400">{item.description}</p>
            </div>
        );
    }
};
export default Grid;
