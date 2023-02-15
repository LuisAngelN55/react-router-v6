import { useNavigate, useParams } from "react-router-dom"
import { getUser, deleteUser } from "../user";


export const User = () => {

    const { userId } = useParams();
    const navigate = useNavigate();

    
    if(userId) {
      const user = getUser( parseInt(userId) );

      const handleDelete = () => {
        deleteUser( parseInt(userId) );
        navigate("/users");
      }

      if( !user )   {
        return (
        <h2>No User with this id</h2>
      )}

      return (
        <div>
    
          <h2>{ user?.name }</h2>
    
          <div>
            <strong>Phone: </strong> {user?.phone}
          </div>
    
          <div>
            <strong>Website: </strong> {user?.website}
          </div>

          <br />
          <button onClick={handleDelete}>Delete</button>
        
        </div>

      )
    }
  
    return <h1>jnvalksd</h1>

}
