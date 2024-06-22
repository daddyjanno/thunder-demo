import { Link } from 'react-router-dom'
import Home from './Home'

const Error = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto h-screen max-w-screen-xl content-center px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
                        404
                    </h1>

                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        Oups! La page que vous demandez n'existe pas.
                    </p>
                    <Link
                        to={'/'}
                        className="my-4 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800"
                    >
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Error
