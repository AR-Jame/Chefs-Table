import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const SecendSec = () => {
    const [foodData, setFoodData] = useState([])
    useEffect(() => {
        fetch("rowData.json")
            .then(res => res.json())
            .then(data => setFoodData(data))
    }, [])
    return (
        <div className="space-y-10">
            <h2 className="text-4xl font-lexend font-semibold text-center">Our Racipe</h2>
            <p className="text-center font-lexend text-lg">Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit. Vero, necessitatibus.</p>
            <div className="grid grid-cols-3 w-[65%] gap-4">
                {
                    foodData.map(single => <FoodCard key={single.id} singleData={single} />)
                }
            </div>
        </div>
    );
};

export default SecendSec;