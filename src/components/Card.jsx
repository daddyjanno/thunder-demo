const Card = (props) => {
    return (
        <div>
            <div className="max-w-sm rounded shadow-lg">
                <img className="w-full" src={props.img} alt={props.title} />
                <div className="h-60 px-6 py-4">
                    <div className="mb-2 h-20 overflow-visible">
                        <p className="text-xl font-bold">{props.title}</p>
                    </div>
                    <div>
                        <p className="text-base text-gray-700">{props.desc}</p>
                    </div>
                </div>
                <div className="px-6 pb-2 pt-4">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                        {props.author}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card
