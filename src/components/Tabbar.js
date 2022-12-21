import "../styles/tabbar.css"
import {VscClose} from "react-icons/vsc";
export default function Tabbar(){
    return(
        <div className="tabbar">
            <ul className="tab-list">
                <li><p>Home.html</p> <VscClose/></li>
                <li><p>About.css</p> <VscClose/></li>
                <li><p>Connect.js</p> <VscClose/></li>
            </ul>
        </div>
    )
}