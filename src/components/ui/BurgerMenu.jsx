import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const BurgerMenu = () => {
    const [showMenu, setShowMenu] = useState()
    return (
        <nav className="flex flex-col items-center gap-2 font-semibold text-primary sm:flex sm:flex-row-reverse sm:gap-4">
            <button
                className="hover:opacity-9 text-xl font-bold dark:bg-transparent dark:text-secondary"
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

export default BurgerMenu
