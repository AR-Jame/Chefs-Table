import PropTypes from "prop-types";
import WannaCooking from "./WannaCooking";
import CurrentlyCooking from "./CurrentlyCooking";
const Aside = ({ clickedCard, handlePrepare, cookingNow, time, calories}) => {

    return (
        <div className="border rounded-3xl p-5">
            <div>
                <h3 className="font-lexend text-center font-semibold text-2xl">Want to cook: {clickedCard.length}</h3>
                <hr className="my-4" />
            </div>
            <div>
                <table className="font-fira w-full text-center space-y-4">
                    <tr className="text-[#878787]">
                        <th className="w-[10%]"></th>
                        <th className="w-[22%] textle">Name</th>
                        <th className="w-[22%]">Time</th>
                        <th className="w-[22%]">Calories</th>
                        <th className="w-[24%]"></th>
                    </tr>
                    {
                        clickedCard.map((table, idx) => <WannaCooking
                            handlePrepare={() => handlePrepare(table)}
                            serial={idx} key={table.id}
                            tableData={table} />)

                    }
                </table>
            </div>
            <div>
                <div className="mt-10">
                    <h3 className="font-lexend text-center font-semibold text-2xl">Currently cooking: {cookingNow.length}</h3>
                    <hr className="my-4" />
                </div>
                <div>
                    <table className="font-fira w-full text-center">
                        <tr className="text-[#878787]">
                            <th className="w-[10%]"></th>
                            <th className="w-[30%] textle">Name</th>
                            <th className="w-[30%]">Time</th>
                            <th className="w-[30%]">Calories</th>
                        </tr>
                        {
                            cookingNow.map(cookingTable => <CurrentlyCooking
                                cookingTable={cookingTable}
                                key={cookingTable.id}
                            />)
                        }
                        <tr>
                            <th></th>
                            <th></th>
                            <th className="font-medium font-lexend">Total Time: <br /> {time} minutes</th>
                            <th className="font-medium font-lexend">Total Time: <br /> {calories} calories</th>
                        </tr>
                    </table>

                </div>

            </div>
        </div>
    );
};
Aside.propTypes = {
    clickedCard: PropTypes.array,
    handlePrepare: PropTypes.func,
    cookingNow: PropTypes.array,
    time: PropTypes.number,
    calories: PropTypes.number
}
export default Aside;