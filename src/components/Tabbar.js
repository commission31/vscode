import "../styles/tabbar.css"
import {VscClose} from "react-icons/vsc";
import { useTheme } from "../ThemeProvider";
import { useState } from "react";
export default function Tabbar(){

    const currentTheme= useTheme()
    const themeStyle= document.documentElement.style
    if(currentTheme==="white"){
        themeStyle.setProperty("--tabbar-bg","#ECECEC");
        themeStyle.setProperty("--tabbar-color","#96557C");
        themeStyle.setProperty("--tabbar-select","#ffffff");
        themeStyle.setProperty("--tabbar-close","#E9E9E9");

    }
    else if (currentTheme==="blue"){
        themeStyle.setProperty("--tabbar-bg","#004052");
        themeStyle.setProperty("--tabbar-color","#E2C085");
        themeStyle.setProperty("--tabbar-select","#002B37");
        themeStyle.setProperty("--tabbar-close","#1C3B43");
    }
    else if (currentTheme==="dark"){
        themeStyle.setProperty("--tabbar-bg","#2D2D2D");
        themeStyle.setProperty("--tabbar-color","#E2C085");
        themeStyle.setProperty("--tabbar-select","#1E1E1E");
        themeStyle.setProperty("--tabbar-close","#313232");
    }

    const [fileArr, setFileArr]= useState(["Home.html","About.css","Connect.js"])
    function closeTab(index){
        setFileArr((prevArr)=>{
            prevArr.splice(index,1)
            console.log(prevArr);
            return [...prevArr]
        })
    }
    const [activeTab, setActiveTab]= useState(0)


    const tabList = fileArr.map((file,index)=>{
        return (<li key={index} onClick={()=>setActiveTab(index)} className={activeTab===index? "tab-active":""}>
                    {file} <VscClose className="tab-close" onClick={()=>closeTab(index)}/>
                </li>)
    })

    return(
        <div className="tabbar">
            <ul className="tab-list">
                {tabList}
            </ul>
        </div>
    )
}