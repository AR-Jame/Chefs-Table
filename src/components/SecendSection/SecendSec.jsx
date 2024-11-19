import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import Aside from "./Aside";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SecendSec = () => {

    const [foodData, setFoodData] = useState([])
    useEffect(() => {
        fetch("rowData.json")
            .then(res => res.json())
            .then(data => setFoodData(data))
    }, [])


    const [clickedCard, setClickedCard] = useState([])
    const handleClicked = (clickedCardData) => {
        if (!clickedCard.includes(clickedCardData)) {
            const newArr = [...clickedCard, clickedCardData]
            setClickedCard(newArr)

        }
        else {
            toast.error("You have to select item only once.")
        }
    }

    const [time, setTime] = useState(0)
    const [calories, setCalories] = useState(0)
    const [cookingNow, setCookingNow] = useState([])

    const handlePrepare = (table) => {
        setCookingNow([...cookingNow, table])
        const newArr = clickedCard.filter(cookingNow => table !== cookingNow)
        setClickedCard(newArr)
        setTime(time + table.preparing_time)
        setCalories(calories + table.calories)


    }
    return (
        <div className="space-y-10">
            <h2 className="text-4xl font-lexend font-semibold text-center">Our Racipe</h2>
            <p className="text-center font-lexend text-lg">Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit. Vero, necessitatibus.</p>
            <div className="flex gap-9">
                <div className="grid grid-cols-3 w-[65%] gap-4">
                    {
                        foodData.map(single => <FoodCard handleClicked={handleClicked} key={single.id} singleData={single} />)
                    }
                </div>
                <div className="flex-1">
                    <div>
                        <Aside
                            clickedCard={clickedCard}
                            cookingNow={cookingNow}
                            handlePrepare={handlePrepare}
                            time={time}
                            calories={calories}
                        />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>


    );
};

export default SecendSec;