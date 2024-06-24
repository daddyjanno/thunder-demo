import { BsMoon, BsSun } from 'react-icons/bs'
import { useState, useEffect } from 'react'

export function ThemeToggle() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html')?.classList.add('dark')
        } else {
            document.querySelector('html')?.classList.remove('dark')
        }
    })

    return (
        <button onClick={toggleTheme}>
            <BsSun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
            <BsMoon className="hidden h-5 w-5 dark:block" />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}