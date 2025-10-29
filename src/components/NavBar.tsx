import { Link } from "react-router-dom";
const listProds =[
    '1','2','3','4','5'
]
function NavBar() {
  return (
    <div style={{display:"flex", gap:"10px"}}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign Up</Link>

        {listProds.map((prodId)=>(
            <Link key={prodId} to={`/products/${prodId}`}>Product {prodId}</Link>
        ))}

        
    </div>)
  
}
export default NavBar;