import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

const Header = () => {
    const [showMenu, setShowMenu] = useState()

    return (
        <header className="flex flex-row items-center justify-between border-b-2 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 p-2 text-white sm:justify-between sm:px-12">
            <Link to="/">
                <img src="../../public/thunder-logo.webp" alt="thunder logo" />
            </Link>
            <nav className='font-semibold"> hidden items-center justify-between gap-4 sm:flex'>
                <Link to="#" className="hover:text-gray-200">
                    Home
                </Link>
                <Link to="#" className="hover:text-gray-200">
                    About
                </Link>
                <Link to="#" className="hover:text-gray-200">
                    Contact
                </Link>
            </nav>
            <nav className="flex flex-col items-end gap-1 font-semibold sm:hidden">
                <button
                    className="text-xl font-bold hover:text-gray-500 sm:hidden"
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
        </header>
    )
}

export default Header
