import { useSelector } from "react-redux";
import { ROLES_FIND } from "../../../../const/user_roles";


const Pagination = ({max, limitPerPage=10, current, roleFilter}) => {
    const { users } = useSelector(state=>state);
    const arr = new Array(Math.ceil(max/limitPerPage));

    return(
        <ul>
            {arr.map((item, index)=>(
                <li
                    key={index}>{index+1}</li>    
            ))}
        </ul>
    );
}
export default Pagination;