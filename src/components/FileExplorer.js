import { VscChevronRight,VscChevronDown } from "react-icons/vsc";
import '../styles/fileexplorer.css'
export default function FileExplorer(){
    return(
        <div className="file-explorer">
            <div><VscChevronDown/> VSCODE</div>
            <ul className="explorer-list">
                <li><VscChevronRight/> node_modules</li>
                <li><VscChevronRight/> public</li>
                <li><VscChevronRight/> src</li>
            </ul>
        </div>
    )
}