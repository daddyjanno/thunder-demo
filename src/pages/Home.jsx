import Card from '../components/Card'
import { TailwindIndicator } from '../utils/TailwindIndicator'
import { useFetch } from '../utils/hook/useFetch'
import { findAuthor } from '../utils/findAuthor'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'

const Home = () => {
    const { posts, users, isLoading, error } = useFetch()
    const navigate = useNavigate()

    const handlePostClick = (id) => {
        navigate(`/posts/${id}`)
    }

    return error ? (
        <span>{error}</span>
    ) : isLoading ? (
        <Loader />
    ) : posts ? (
        <>
            <main className="justify-center p-4">
                {isLoading && <p>Chargement...</p>}
                {posts && users && (
                    <section className="container mx-auto">
                        <div className="grid grid-cols-3 gap-4">
                            {posts.map((post) => {
                                const author = findAuthor(post.userId, users)
                                return (
                                    <Card
                                        key={post.id}
                                        title={post.title}
                                        desc={post.body}
                                        author={
                                            author ? author.name : 'Unknown'
                                        }
                                        id={post.id}
                                        handlePostClick={handlePostClick}
                                    />
                                )
                            })}
                        </div>
                    </section>
                )}
            </main>
            <TailwindIndicator />
        </>
    ) : (
        <Loader />
    )
}

export default Home
