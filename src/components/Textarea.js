import "../styles/textarea.css"
import { useTheme } from "../ThemeProvider";
export default function Textarea(){

    const currentTheme= useTheme()
    const themeStyle = document.documentElement.style
    if(currentTheme==="white"){
        themeStyle.setProperty("--textarea-bg","#FFFFFF");
    }
    else if (currentTheme==="blue"){
        themeStyle.setProperty("--textarea-bg","#002B36");
    }
    else if (currentTheme==="dark"){
        themeStyle.setProperty("--textarea-bg","#1E1E1E");
    }
    
    return(
        <main className="textarea">
            text area here
        </main>
    )
}