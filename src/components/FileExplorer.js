import { VscChevronRight,VscChevronDown } from "react-icons/vsc";
import '../styles/fileexplorer.css'
import { useTheme } from "../ThemeProvider";
export default function FileExplorer(){
    const currentTheme= useTheme()
    const themeStyle = document.documentElement.style
    if(currentTheme==="white"){
        themeStyle.setProperty("--file-bg","#F3F3F3");
        themeStyle.setProperty("--file-color","#906178");
        themeStyle.setProperty("--file-hover","#E4E6F1");
    }
    else if (currentTheme==="blue"){
        themeStyle.setProperty("--file-bg","#00212B");
        themeStyle.setProperty("--file-color","#ccc");
        themeStyle.setProperty("--file-hover","#003440");
    }
    else if (currentTheme==="dark"){
        themeStyle.setProperty("--file-bg","#252526");
        themeStyle.setProperty("--file-color","#C2CCAC");
        themeStyle.setProperty("--file-hover","#37373D");
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