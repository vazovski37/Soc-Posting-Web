import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
export const Navbar = () => {
    const [ user ] = useAuthState(auth);
    
    const signUserOut = async () =>{
        await signOut(auth)
    }
    
    return(
        <div className="navbar">
            <div className="links">
                <Link to='/' > home</Link>
            {!user ?(<Link to='/login' > login</Link>)
            :
            (<Link to='/createpost' >post</Link>)}
            </div>
        
        <div className="user">
            {
                user && (
                    <>
                    <p>{user?.displayName}</p>
                    <img src={user?.photoURL || ""}/>
                    <button onClick={signUserOut} > log out </button>

                    </>
                )

            }
        </div>
        
        </div>
    )
}