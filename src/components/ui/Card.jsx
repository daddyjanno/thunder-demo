import { capitalize } from '../../utils/capitalizeText'

const Card = (props) => {
    const { post, author } = props

    return (
        <div className="cursor-pointer">
            <article className="flex max-w-sm flex-col items-center justify-center rounded bg-white shadow-lg">
                <section className="px-6 py-4">
                    <div className="mb-2 h-20 content-center overflow-hidden">
                        <h3 className="line-clamp-2 break-words text-xl font-bold">
                            {capitalize(post.title)}
                        </h3>
                    </div>
                    <div className="mb-2 h-36 overflow-hidden">
                        <p className="line-clamp-6 w-auto overflow-hidden text-ellipsis text-base text-gray-700">
                            {capitalize(post.body)}
                        </p>
                    </div>
                    <div className="flex px-6 pb-2 pt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                            <p className="text-center">{author.name}</p>
                        </span>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Card
