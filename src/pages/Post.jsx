import { useParams } from 'react-router-dom'

const Post = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Post - id:{id}</h1>
        </div>
    )
}

export default Post
