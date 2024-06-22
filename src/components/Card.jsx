import { capitalize } from '../utils/capitalizeText'

const Card = (props) => {
    const { id, title, desc, author, handlePostClick } = props
    return (
        <div className="cursor-pointer" onClick={() => handlePostClick(id)}>
            <article className="flex h-80 max-w-sm flex-col items-center justify-center text-pretty rounded shadow-lg">
                <div className="px-6 py-4">
                    <div className="mb-2 h-20 overflow-hidden">
                        <h3 className="line-clamp-2 break-words text-xl font-bold">
                            {capitalize(title)}
                        </h3>
                    </div>
                    <div className="max-h-48 overflow-hidden bg-orange-300">
                        <p className="line-clamp-6 w-auto overflow-hidden text-ellipsis text-base text-gray-700">
                            {capitalize(desc)}
                        </p>
                    </div>
                </div>
                <div className="flex px-6 pb-2 pt-4">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                        <p className="text-center">{author}</p>
                    </span>
                </div>
            </article>
        </div>
    )
}

export default Card
