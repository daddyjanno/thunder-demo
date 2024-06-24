import Card from '../components/ui/Card'
import { TailwindIndicator } from '../utils/TailwindIndicator'
import { useFetch } from '../utils/hook/useFetch'
import { findAuthor } from '../utils/findAuthor'
import { Link } from 'react-router-dom'
import Loader from '../components/ui/Loader'
import Dropdown from '../components/ui/Dropdown'
import { useState } from 'react'

const Home = () => {
    const { posts, users, isLoading, error } = useFetch()
    const [filter, setFilter] = useState('')

    function handleSelect(value) {
        setFilter(value)
    }

    return error ? (
        <div className="flex h-screen items-center justify-center">
            <span>{error}</span>
        </div>
    ) : isLoading ? (
        <Loader />
    ) : posts && users ? (
        <>
            <main className="flex flex-col content-center justify-center gap-4 bg-slate-200 p-4 dark:bg-slate-800">
                <section>
                    <Dropdown
                        data={users}
                        onSelectChange={handleSelect}
                        label={'Filtrer par auteur :'}
                        value={filter}
                    />
                </section>
                <section className="container mx-auto flex content-center justify-center">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                        {filter
                            ? posts
                                  .filter(
                                      (post) => post.userId === Number(filter),
                                  )
                                  .map((post) => {
                                      const author = findAuthor(
                                          post.userId,
                                          users,
                                      )
                                      return (
                                          <Link
                                              to={`/posts/${post.id}`}
                                              key={post.id}
                                          >
                                              <Card
                                                  post={post}
                                                  author={author}
                                              />
                                          </Link>
                                      )
                                  })
                            : posts.map((post) => {
                                  const author = findAuthor(post.userId, users)
                                  return (
                                      <Link
                                          to={`/posts/${post.id}`}
                                          key={post.id}
                                      >
                                          <Card post={post} author={author} />
                                      </Link>
                                  )
                              })}
                    </div>
                </section>
            </main>

            <TailwindIndicator />
        </>
    ) : (
        <Loader />
    )
}

export default Home
