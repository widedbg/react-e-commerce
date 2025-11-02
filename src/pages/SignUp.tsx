import { useNavigate } from "react-router-dom";
function SignUp() {
    const navigate = useNavigate();
    function navigateToLogin(){
        navigate('/login');
    }
  return (
    <div>
      <h3>Sign Up Page</h3>
      <div>
        <button onClick={()=>{
            navigateToLogin();

        }}>Signup</button></div>
        <div>
        <button>Login</button></div>
    </div>

  )
}
export default SignUp;