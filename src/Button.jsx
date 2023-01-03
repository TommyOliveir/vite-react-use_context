import React, { useContext } from "react"
import { ThemeContext } from "./themeContext"

function Button(props) {
    //You can destructure also the contextObj object like  {theme, toggletheme}
    const contextObj =  useContext( ThemeContext)
    return (
        <button onClick={contextObj.toggleTheme} className={`${contextObj.theme}-theme`}>Switch Theme</button>
    )
}

export default Button
