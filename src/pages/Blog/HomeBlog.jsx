import { getAllPosts } from "../../lib/posts"
import Link from "next/link"
import Navbar from "../components/Navbar/NavbarComponent"

// ✅ App Router: busca direto no Server Component, sem getStaticProps
export default async function HomeBlog() {
  const posts = getAllPosts() || []
  const temas = [...new Set(posts.map((post) => post.tema))]

  return (
    <div className="min-h-screen bg-gruvbox-light-bg dark:bg-gruvbox-bg transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto py-12 px-6">
        <header className="mb-12 border-b border-gruvbox-light-border dark:border-gruvbox-border pb-8">
          <h1 className="text-4xl font-extrabold">Talona Blog</h1>
          <p className="mt-2">Explorações sobre Linux, Web Dev e automação.</p>
        </header>

        <div className="space-y-12">
          {temas.map((tema) => (
            <section key={tema}>
              <h2 className="text-xl font-semibold uppercase tracking-widest text-gruvbox-red dark:text-gruvbox-red-bright mb-6">
                {tema}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts
                  .filter((post) => post.tema === tema)
                  .map((post) => (
                    <Link key={post.slug} href={`/publicacao/${post.slug}`}>
                      <div
                        className="group p-6 bg-gruvbox-light-bg1 dark:bg-gruvbox-bg1
                        border border-gruvbox-light-border dark:border-gruvbox-border
                        rounded-xl hover:shadow-gruvbox-light dark:hover:shadow-gruvbox-dark
                        transition-all cursor-pointer"
                      >
                        <h3 className="text-xl font-bold group-hover:text-gruvbox-red dark:group-hover:text-gruvbox-red-bright transition-colors">
                          {post.titulo}
                        </h3>
                        <p className="mt-2 text-sm text-gruvbox-light-fg3 dark:text-gruvbox-fg3 line-clamp-2">
                          {post.subtitulo}
                        </p>
                        <div className="mt-4 text-xs font-medium text-gruvbox-light-fg4 dark:text-gruvbox-fg4 uppercase">
                          {post.data}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
