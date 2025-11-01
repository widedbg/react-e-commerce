import { useNavigate } from "react-router-dom";
function SignUp() {
    const navigate = useNavigate();
    function navigateToLogin(){
        navigate('/login');
    }
  return (
    <div>Sign Up Page
        <button onClick={()=>{
            navigateToLogin();

        }}>Signup</button>
        <button>Login</button>
    </div>

  )
}
export default SignUp;