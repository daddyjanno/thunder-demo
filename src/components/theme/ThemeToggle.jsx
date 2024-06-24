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
        <button onClick={toggleTheme} className="dark:bg-transparent">
            <BsSun className="h-6 w-[1.3rem] dark:hidden dark:bg-transparent" />
            <BsMoon className="s-5 hidden bg-transparent text-secondary hover:text-gray-600 dark:block dark:text-secondary" />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
