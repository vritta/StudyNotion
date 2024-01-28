import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn,children}) => {
  // const navigate = useNavigate();
  // function fun(){
  //   navigate("/about");
  // }
  if(isLoggedIn===true) {
    return children;
  }
  else{
    // navigate("/home");
    return <Navigate to="/login"/>;
    // return <button className='bg-red-200 w-80 h-80' onClick={fun}>Press here</button>
  }
}
export default PrivateRoute
