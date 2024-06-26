import { capitalize } from '../../utils/capitalizeText'

const Article = (props) => {
    const { post, author } = props
    window.scrollTo(0, 0)
    return (
        <>
            <article className="relative mx-auto min-h-[49rem] max-w-screen-xl p-5 dark:bg-black sm:p-10 md:p-16">
                <div className="mx-auto max-w-3xl overflow-hidden bg-cover bg-center lg:max-w-none">
                    <img
                        src={`https://picsum.photos/1200/500?random=${post.id}`}
                        alt="article picture"
                    />
                </div>
                <div className="mx-auto max-w-3xl">
                    <div className="flex flex-col justify-between leading-normal">
                        <div className="relative top-0 bg-primary p-5 drop-shadow-lg dark:bg-quaternary sm:p-10 lg:-mt-32">
                            <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-ternary">
                                {capitalize(post.title)}
                            </h1>
                            <p className="mt-2 text-xs text-gray-700 dark:text-primary">
                                Written By:
                                <span className="font-medium text-indigo-600">
                                    {author?.name}
                                </span>
                            </p>
                            <p className="my-5 text-base">
                                {capitalize(post.body)}
                            </p>
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
            </article>
        </>
    )
}

export default Article
