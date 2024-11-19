import PropTypes from "prop-types";

const CurrentlyCooking = ({ cookingTable}) => {
    const { recipe_name, preparing_time, calories } = cookingTable
    return (
            <tbody className="w-full">
                <th>1</th>
                <td className="text-left">{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tbody>

    );
};
CurrentlyCooking.propTypes ={
    cookingTable:PropTypes.object
}
export default CurrentlyCooking;