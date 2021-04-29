import React, { useState, useEffect } from 'react'
import { Div, ThemeChangeButton } from './Style'

export const useTheme = ():[ string, () => void] => {
    const [ theme, setTheme ] = useState<string>('')

    useEffect(() => {
        const what = localStorage.getItem('theme')
        if (!what) setTheme('light')
        else setTheme(what)
    }, [])
    
    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return [theme, changeTheme]
}

const DarkMode: React.FC<{changeTheme : () => void}> = ({ changeTheme }) => {
    return (
        <Div>
            <ThemeChangeButton onClick={changeTheme}>Change</ThemeChangeButton>
        </Div>
    )
}

export default DarkMode