import "../styles/sidebar.css"
import { VscFiles,VscSearch,VscDebugAlt,VscRemoteExplorer,VscExtensions,VscSourceControl,VscAccount,VscSettingsGear} from "react-icons/vsc";
export default function Sidebar(){
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