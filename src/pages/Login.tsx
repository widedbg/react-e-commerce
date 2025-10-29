import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    function navigateToSignup(){
        navigate('/sign-up');
    }
  return (
    <div>Login Page
        <button onClick={()=>{
            navigateToSignup();

        }}>Login</button>
        <button>Signup</button>
    </div>

  )
}
export default Login;