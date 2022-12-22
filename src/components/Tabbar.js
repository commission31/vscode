import "../styles/tabbar.css"
import {VscClose} from "react-icons/vsc";
import { useTheme } from "../ThemeProvider";
export default function Tabbar(){

    const currentTheme= useTheme()
    if(currentTheme==="white"){
        document.documentElement.style.setProperty("--tabbar-bg","#ECECEC");
        document.documentElement.style.setProperty("--tabbar-color","#96557C");
        document.documentElement.style.setProperty("--tabbar-select","#ffffff");
    }
    else if (currentTheme==="blue"){
        document.documentElement.style.setProperty("--tabbar-bg","#004052");
        document.documentElement.style.setProperty("--tabbar-color","#E2C085");
        document.documentElement.style.setProperty("--tabbar-select","#002B37");
    }
    else if (currentTheme==="dark"){
        document.documentElement.style.setProperty("--tabbar-bg","#2D2D2D");
        document.documentElement.style.setProperty("--tabbar-color","#E2C085");
        document.documentElement.style.setProperty("--tabbar-select","#1E1E1E");
    }

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