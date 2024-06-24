import { capitalize } from '../../utils/capitalizeText'

const Card = (props) => {
    const { post, author } = props
    const randomNumber = Math.floor(Math.random() * 100)

    return (
        <div className="cursor-pointer">
            <article className="flex max-w-sm flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg">
                <img
                    src={`https://picsum.photos/400/200?random=${randomNumber}`}
                    alt="article picture"
                />
                <section className="dark:bg-quaternary rounded-xl px-6 py-4">
                    <div className="dark:bg-ternary mb-2 h-20 w-full overflow-hidden p-2 drop-shadow-lg">
                        <h2 className="dark:text-primary line-clamp-2 break-words text-xl font-bold">
                            {capitalize(post.title)}
                        </h2>
                    </div>
                    <div className="mb-2 h-36 overflow-hidden">
                        <p className="dark:text-primary line-clamp-6 w-auto overflow-hidden text-ellipsis py-1 text-base font-light text-gray-700">
                            {capitalize(post.body)}
                        </p>
                    </div>
                    <div className="flex justify-end px-6 pb-2 pt-4">
                        <span className="bg-ternary text-primary mb-2 mr-2 inline-block rounded-full px-3 py-1 text-xs font-semibold">
                            <p className="text-center">{author.name}</p>
                        </span>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Card
