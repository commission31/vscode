import "../styles/sidebar.css"
import { VscFiles,VscSearch,VscDebugAlt,VscRemoteExplorer,VscExtensions,VscSourceControl,VscAccount,VscSettingsGear} from "react-icons/vsc";
import { useTheme } from "../ThemeProvider";
export default function Sidebar(){
    
    const currentTheme= useTheme()
    const themeStyle = document.documentElement.style
    if(currentTheme==="white"){
        themeStyle.setProperty("--sidebar-bg","#333333");
        themeStyle.setProperty("--sidebar-color","#858585");
    }
    else if (currentTheme==="blue"){
        themeStyle.setProperty("--sidebar-bg","#003847");
        themeStyle.setProperty("--sidebar-color","#668891");
    }
    else if (currentTheme==="dark"){
        themeStyle.setProperty("--sidebar-bg","#333333");
        themeStyle.setProperty("--sidebar-color","#858585");
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