import { capitalize } from '../../utils/capitalizeText'

const Card = (props) => {
    const { post, author } = props

    return (
        <div className="cursor-pointer">
            <article className="flex max-w-sm flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg">
                <img
                    src={`https://picsum.photos/1200/500?random=${post.id}`}
                    alt="article picture"
                />
                <section className="px-6 py-4">
                    <div className="mb-2 h-20 w-full overflow-hidden p-2 drop-shadow-lg">
                        <h2 className="line-clamp-2 break-words text-xl font-bold dark:text-primary">
                            {capitalize(post.title)}
                        </h2>
                    </div>
                    <div className="mb-2 h-36 overflow-hidden">
                        <p className="line-clamp-6 w-auto overflow-hidden text-ellipsis py-1 text-base font-light text-gray-700 dark:text-primary">
                            {capitalize(post.body)}
                        </p>
                    </div>
                    <div className="flex justify-end px-6 pb-2 pt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-ternary px-3 py-1 text-xs font-semibold text-primary">
                            <p className="text-center">{author.name}</p>
                        </span>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Card
