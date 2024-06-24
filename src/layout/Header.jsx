import { useNavigate } from 'react-router-dom'
import { ThemeToggle } from '../components/theme/ThemeToggle'
import { BurgerMenu } from '../components/ui/BurgerMenu'
import { handleClick } from '../utils/backToHome'
import Logo from '../components/ui/Logo'

const Header = () => {
    const navigate = useNavigate()

    return (
        <header className="dark:border-ternary flex flex-row items-center justify-between border-b-2 p-4 sm:justify-between sm:px-12">
            <Logo
                to={'/'}
                src={'../../../public/thunder-logo.webp'}
                alt={'header logo'}
                className={'h-10 cursor-pointer'}
                handleClick={() => handleClick(navigate)}
            />
            <div className="flex gap-4">
                <ThemeToggle />
                <BurgerMenu />
            </div>
        </header>
    )
}

export default Header
