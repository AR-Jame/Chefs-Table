import PropTypes from "prop-types";
const WannaCooking = ({tableData, serial, handlePrepare}) => {
    const {recipe_name, preparing_time, calories} = tableData
    return (
            <tbody className="w-full">
                <th>{serial + 1}</th>
                <td className="text-left">{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td><button onClick={()=>handlePrepare(preparing_time)} className="btn font-medium rounded-full bg-[#0BE58A] border-none hover:bg-[#0BE58A]">Preparing</button></td>
            </tbody>
    );
};
WannaCooking.propTypes = {
    tableData: PropTypes.object,
    serial:PropTypes.number,
    handlePrepare:PropTypes.func
}
export default WannaCooking;