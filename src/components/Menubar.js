import vsLogo from '../images/vscode.png'
import {VscChromeMinimize,VscChromeRestore,VscChromeClose} from "react-icons/vsc";
import '../styles/menubar.css'
export default function Menubar({changeTheme}){
    
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
                <li className='theme-color dark' onClick={()=>changeTheme("black")}></li>
                <li><VscChromeMinimize/></li>
                <li><VscChromeRestore/></li>
                <li><VscChromeClose/></li>
            
            </ul>
        </div>
    )
}