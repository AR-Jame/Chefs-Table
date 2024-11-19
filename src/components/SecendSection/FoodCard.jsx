import { FaSuperpowers } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import PropTypes from "prop-types";
const FoodCard = ({ singleData, handleClicked }) => {
    const { recipe_name, recipe_image, short_description, ingredients,preparing_time, calories } = singleData
    // console.log(ingredients)
    return (
        <div>
            <div className="card bg-base-100 border">
                <figure className="px-6 pt-6">
                    <img
                        src={recipe_image}
                        className="rounded-xl w-[296px] h-[178px] object-contain" />
                </figure>
                <div className="p-6 card-body font-lexend">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className="text-[#878787] text-base">{short_description}</p>
                    <hr className="my-4" />
                    <ul>
                        <p className="font-semibold text-lg">Ingredients</p>
                        {
                            ingredients.map((single, idx) => <li key={idx} className="list-disc font-fira text-[#878787] ml-6">{single}</li>)
                        }
                    </ul>
                    <hr className="my-4"/>
                    <div className="text-[#282828c4] flex justify-center gap-3">
                        <div className="flex gap-2 items-center">
                            <IoMdTime />
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaSuperpowers />
                            <p>{calories} calories</p>
                        </div>
                    </div>
                    <div className="card-actions">
                    <button onClick={()=>handleClicked(singleData)} className="btn font-medium mr-4 rounded-full bg-[#0BE58A] border-none hover:bg-[#0BE58A]">
                        Want to cook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes = {
    singleData: PropTypes.object,
    handleClicked: PropTypes.func
}

export default FoodCard;