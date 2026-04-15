import { getAllPosts } from "../../lib/posts";
import Link from "next/link";
import Navbar from "../../app/components/Navbar/NavbarComponent";

export default function HomeBlog({ posts }) {
  const temas = [...new Set(posts.map((post) => post.tema))];

  return (
    <div className="min-h-screen bg-[#f9f9f9] dark:bg-[#121212] transition-colors duration-300">
      <Navbar />

      <main className="container mx-auto py-12 px-6">
        <header className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white">
            Talona Blog
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Explorações sobre Linux, Web Dev e automação.
          </p>
        </header>

        <div className="space-y-12">
          {temas.map((tema) => (
            <section key={tema}>
              {/* Ajustado para Rose-600 / Rose-400 */}
              <h2 className="text-xl font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-6">
                {tema}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts
                  .filter((post) => post.tema === tema)
                  .map((post) => (
                    <Link key={post.slug} href={`/publicacao/${post.slug}`}>
                      <div className="group p-6 bg-white dark:bg-[#1e1e1e] border border-zinc-200 dark:border-zinc-800 rounded-xl hover:shadow-xl transition-all cursor-pointer">
                        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-rose-500 transition-colors">
                          {post.titulo}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                          {post.subtitulo}
                        </p>
                        <div className="mt-4 text-xs font-medium text-zinc-400 uppercase">
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
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts || []
    }
  };
}
