import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/ui/Logo'

const Footer = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
        window.scrollTo(0, 0)
    }
    return (
        <footer className="border-card w-full border-t p-2">
            <div className="m-auto w-full max-w-3xl px-2 py-4">
                <div className="flex flex-col">
                    <div className="mx-4 flex justify-between">
                        <div className="flex items-center justify-center">
                            <Logo
                                to={'/'}
                                src={'../../public/thunder-logo.webp'}
                                alt={'footer logo'}
                                className={'h-8 cursor-pointer'}
                                handleClick={handleClick}
                            />
                        </div>
                        <div className="flex flex-col items-end gap-2 text-sm">
                            <Link className="hover:underline" to="#">
                                Privacy
                            </Link>
                            <Link className="hover:underline" to="#">
                                CGV
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center">
                    <p className="text-xs">
                        &copy; {new Date().getFullYear()} Thunder
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
