import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section>
            <div className="mx-auto h-[81vh] max-w-screen-xl content-center px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
                        404
                    </h1>

                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        Oups! La page que vous demandez n'existe pas.
                    </p>
                    <Link
                        to={'/'}
                        className="bg-ternary hover:bg-secondary my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white"
                    >
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Error
