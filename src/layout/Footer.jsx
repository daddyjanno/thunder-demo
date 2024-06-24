import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
        window.scrollTo(0, 0)
    }
    return (
        <footer className="border-card w-full border-t bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 p-2 text-white">
            <div className="m-auto w-full max-w-3xl px-2 py-4">
                <div className="flex flex-col">
                    <div className="mx-4 flex justify-between">
                        <div className="flex items-center justify-center">
                            <img
                                className="h-8 cursor-pointer"
                                src="../../public/thunder-logo.webp"
                                alt="thunder logo"
                                onClick={handleClick}
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
