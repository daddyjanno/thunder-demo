const Article = (props) => {
    const { post, author } = props
    return (
        <>
            <div className="relative mx-auto min-h-[49rem] max-w-screen-xl p-5 sm:p-10 md:p-16">
                <div className="overflow-hidden bg-slate-200 bg-cover bg-center">
                    <img
                        src="https://picsum.photos/1200/500"
                        alt="article picture"
                    />
                </div>
                <div className="mx-auto max-w-3xl">
                    <div className="mt-3 flex flex-col justify-between rounded-b bg-white leading-normal lg:rounded-b-none lg:rounded-r">
                        <div className="relative top-0 -mt-32 bg-white p-5 sm:p-10">
                            <h1 className="mb-2 text-3xl font-bold text-gray-900">
                                {post.title}
                            </h1>
                            <p className="mt-2 text-xs text-gray-700">
                                Written By:
                                <span className="font-medium text-indigo-600">
                                    {author?.name}
                                </span>
                            </p>
                            <p className="my-5 text-base">{post.body}</p>
                            <h3 className="text-xl font-bold">
                                Texte additionnel pour la mise en page
                            </h3>
                            <p className="my-5 text-base">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Velit tempore dicta cum
                                deserunt quisquam culpa eius dolore corrupti
                                neque ipsa ad blanditiis et dolores, itaque
                                optio eum consequatur officiis possimus rem
                                vitae temporibus fuga molestias! Ex amet
                                quibusdam, adipisci eius nulla minima soluta
                                veritatis pariatur, porro reprehenderit sapiente
                                ipsa magni! Inventore voluptates fugit veniam
                                pariatur consequatur fuga molestias dolores
                                alias molestiae. Cum libero quae ipsa corporis
                                accusamus deserunt facere fugiat excepturi eum
                                asperiores architecto natus, voluptatum
                                perferendis consequuntur voluptas laboriosam
                                distinctio cupiditate ex, corrupti quo atque
                                blanditiis incidunt iste nam. Error ea corporis
                                impedit optio suscipit harum deleniti earum.
                                Laborum optio earum vel cum, veniam delectus
                                maiores! Voluptates porro, at perspiciatis nulla
                                ipsam delectus ratione voluptate harum iste,
                                aliquid autem similique neque, totam quibusdam!
                                Cupiditate, aliquid architecto obcaecati
                                voluptates quasi beatae culpa ipsum earum
                                repellendus nobis vel vitae temporibus aliquam
                                est nulla minus pariatur tempore adipisci odit
                                id, ducimus tenetur sed aspernatur. Quod libero
                                ut facilis, veniam minus culpa officia minima,
                                placeat magni amet assumenda quas non provident,
                                similique illum! Ut reprehenderit vel cumque
                                nesciunt dolorum eligendi aliquam porro quas
                                tenetur, deserunt magni aspernatur minus modi
                                numquam dolore laborum. Quaerat incidunt
                                molestias maiores maxime, modi pariatur nostrum?
                                Ullam, repellat maiores?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article
