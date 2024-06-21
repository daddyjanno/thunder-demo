import { useState, useEffect } from 'react'
import { getPosts, getUsers } from '../apiCalls'

export function useFetch() {
    const [posts, setPosts] = useState(null)
    const [users, setUsers] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        async function getDatas() {
            try {
                setLoading(true)
                const posts = await getPosts()
                if (posts.error) {
                    setError(posts.error)
                } else {
                    console.log('posts :', posts)
                    setPosts(posts)
                }
                const users = await getUsers()
                if (users.error) {
                    setError(users.error)
                } else {
                    console.log('users :', users)
                    setUsers(users)
                }
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        getDatas()
    }, [])
    return { posts, users, error, isLoading }
}
