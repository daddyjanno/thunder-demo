import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'

export const BurgerMenu = () => {
    const [showMenu, setShowMenu] = useState()
    return (
        <nav className="text-primary flex flex-col items-center gap-2 font-semibold sm:flex sm:flex-row-reverse sm:gap-4">
            <button
                className="hover:opacity-9 dark:text-secondary text-xl font-bold dark:bg-transparent"
                onClick={() => setShowMenu(!showMenu)}
            >
                {showMenu ? <GrClose /> : <GiHamburgerMenu />}
            </button>
            {showMenu && (
                <>
                    <Link to="#" className="hover:underline">
                        Home
                    </Link>
                    <Link to="#" className="hover:underline">
                        About
                    </Link>
                    <Link to="#" className="hover:underline">
                        Contact
                    </Link>
                </>
            )}
        </nav>
    )
}
