import { VscChevronRight,VscChevronDown } from "react-icons/vsc";
import '../styles/fileexplorer.css'
import { useTheme } from "../ThemeProvider";
export default function FileExplorer(){
    const currentTheme= useTheme()
    if(currentTheme==="white"){
        document.documentElement.style.setProperty("--file-bg","#F3F3F3");
        document.documentElement.style.setProperty("--file-color","#906178");
        document.documentElement.style.setProperty("--file-hover","#E4E6F1");
    }
    else if (currentTheme==="blue"){
        document.documentElement.style.setProperty("--file-bg","#00212B");
        document.documentElement.style.setProperty("--file-color","#ccc");
        document.documentElement.style.setProperty("--file-hover","#003440");
    }
    else if (currentTheme==="dark"){
        document.documentElement.style.setProperty("--file-bg","#252526");
        document.documentElement.style.setProperty("--file-color","#C2CCAC");
        document.documentElement.style.setProperty("--file-hover","#37373D");
    }
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