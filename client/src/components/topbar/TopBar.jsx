import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css"

export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }

  return (

    <div className="top">
        <div className="topLeft">
        <img className="topLogo" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                   -
                </li> 
                <li className="topListItem">
                    <Link className="link" to="/write">WRITE</Link>
                </li>
            </ul>
        </div>
        
        <div className="topRight">
            <ul className="topList">
                <li className="topListItem" onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
            </ul>
            
            { user ? (
            <Link to="/Settings">
                    <img className="topImg" src={PF + user.profilePic} alt="" />
            </Link>
                ) : ( 
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
            }
            </div>
    </div>
  )
}
