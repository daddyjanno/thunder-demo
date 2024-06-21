import Card from '../components/Card'
import { TailwindIndicator } from '../utils/TailwindIndicator'
import { useFetch } from '../utils/hook/useFetch'
import { findAuthor } from '../utils/findAuthor'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const { posts, users, isLoading, error } = useFetch()
    const navigate = useNavigate()

    const handlePostClick = (id) => {
        navigate(`/post/${id}`)
    }

    return (
        <>
            <main className="justify-center">
                {error && <span>{error}</span>}
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
                                        img={
                                            'https://placeholderimage.eu/api/600?filter=greyscale'
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
    )
}

export default Home
