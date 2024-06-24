import { useParams } from 'react-router-dom'
import { useFetch } from '../utils/hook/useFetch'
import Loader from '../components/ui/Loader'
import { useEffect, useState } from 'react'
import Article from '../components/ui/Article'

export default function Post() {
    const { id } = useParams()
    const { posts, users, isLoading, error } = useFetch()
    const [post, setPost] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (posts) {
            const post = posts.find((post) => post.id === Number(id))
            setPost(post)
        }
        if (users) {
            const user = users.find((user) => user.id === post.userId)
            setUser(user)
        }
    }, [posts, users])

    return error ? (
        <div className="flex h-screen items-center justify-center">
            <span>{error}</span>
        </div>
    ) : isLoading ? (
        <Loader />
    ) : posts && users ? (
        <Article post={post} author={user} />
    ) : (
        <Loader />
    )
}
