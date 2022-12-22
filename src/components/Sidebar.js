import "../styles/sidebar.css"
import { VscFiles,VscSearch,VscDebugAlt,VscRemoteExplorer,VscExtensions,VscSourceControl,VscAccount,VscSettingsGear} from "react-icons/vsc";
import { useTheme } from "../ThemeProvider";
export default function Sidebar(){
    
    const currentTheme= useTheme()
    if(currentTheme==="white"){
        document.documentElement.style.setProperty("--sidebar-bg","#333333");
        document.documentElement.style.setProperty("--sidebar-color","#858585");
    }
    else if (currentTheme==="blue"){
        document.documentElement.style.setProperty("--sidebar-bg","#003847");
        document.documentElement.style.setProperty("--sidebar-color","#668891");
    }
    else if (currentTheme==="dark"){
        document.documentElement.style.setProperty("--sidebar-bg","#333333");
        document.documentElement.style.setProperty("--sidebar-color","#858585");
    }
    

    return(
        <aside className="sidebar">
            <ul className="upper-list">
                <li><VscFiles/></li>
                <li><VscSearch/></li>
                <li><VscDebugAlt/></li>
                <li><VscSourceControl/></li>
                <li><VscRemoteExplorer/></li>
                <li><VscExtensions/></li>
            </ul>
            <ul className="lower-list">
                <li><VscAccount/></li>
                <li><VscSettingsGear/></li>
            </ul>
        </aside>
    )
}