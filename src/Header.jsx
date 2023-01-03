import React, { useContext } from "react"
import { ThemeContext } from "./themeContext"

function Header(props) {
    const contextObj = useContext(ThemeContext)
    return (
        <header className={`${contextObj.theme}-theme`}>
            <h2>{contextObj.theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>

    )
}

export default Header
