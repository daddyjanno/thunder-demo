const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export async function getPosts() {
    try {
        const response = await fetch(POSTS_URL)
        if (!response.ok) {
            throw new Error('Network response was not OK')
        }
        const posts = await response.json()
        return posts
    } catch (error) {
        return { data: null, error: 'Erreur API' }
    }
}

export async function getUsers() {
    try {
        const response = await fetch(USERS_URL)
        if (!response.ok) {
            throw new Error('Network response was not OK')
        }
        const users = await response.json()
        console.log('users', users)
        return users
    } catch (error) {
        return { data: null, error: 'Erreur API' }
    }
}
