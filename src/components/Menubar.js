import vsLogo from '../images/vscode.png'
import '../styles/menubar.css'
import {VscChromeMinimize,VscChromeRestore,VscChromeClose} from "react-icons/vsc";
import { useTheme } from "../ThemeProvider";
export default function Menubar({changeTheme}){

    const currentTheme= useTheme()
    if(currentTheme==="white"){
        document.documentElement.style.setProperty("--menubar-bg","#DDDDDD");
        document.documentElement.style.setProperty("--menubar-color","#616161");
        document.documentElement.style.setProperty("--menubar-hover","#D2D2D2");
    }
    else if (currentTheme==="blue"){
        document.documentElement.style.setProperty("--menubar-bg","#0E2931");
        document.documentElement.style.setProperty("--menubar-color","#668891");
        document.documentElement.style.setProperty("--menubar-hover","#26393F");
    }
    else if (currentTheme==="dark"){
        document.documentElement.style.setProperty("--menubar-bg","#3C3C3C");
        document.documentElement.style.setProperty("--menubar-color","#A3A3A3");
        document.documentElement.style.setProperty("--menubar-hover","#454646");
    }
    
    return(
        <div className="menubar">
            <ul className="menu-list">
                <li><img src={vsLogo} alt="vsCode" /></li>
                <li>File</li>
                <li>Edit</li>
                <li>Selection</li>
                <li>View</li>
                <li>Go</li>
                <li>Run</li>
                <li>Terminal</li>
                <li>Help</li>
            </ul>
            <ul className="window-option">
                <li className='theme-color light' onClick={()=>changeTheme("white")}></li>
                <li className='theme-color blue' onClick={()=>changeTheme("blue")}></li>
                <li className='theme-color dark' onClick={()=>changeTheme("dark")}></li>
                <li><VscChromeMinimize/></li>
                <li><VscChromeRestore/></li>
                <li><VscChromeClose/></li>
            
            </ul>
        </div>
    )
}