import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { ThemeToggle } from '../components/theme/ThemeToggle'

const Header = () => {
    const [showMenu, setShowMenu] = useState()

    return (
        <header className="flex flex-row items-center justify-between border-b-2 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 p-2 text-white sm:justify-between sm:px-12">
            <Link to="/">
                <img src="../../public/thunder-logo.webp" alt="thunder logo" />
            </Link>
            <div className="flex gap-4">
                <ThemeToggle />
                <nav className="flex flex-col items-end gap-2 font-semibold sm:flex sm:flex-row-reverse sm:gap-4">
                    <button
                        className="text-xl font-bold hover:text-gray-200"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        {showMenu ? <GrClose /> : <GiHamburgerMenu />}
                    </button>
                    {showMenu && (
                        <>
                            <Link to="#" className="hover:text-gray-200">
                                Home
                            </Link>
                            <Link to="#" className="hover:text-gray-200">
                                About
                            </Link>
                            <Link to="#" className="hover:text-gray-200">
                                Contact
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header
