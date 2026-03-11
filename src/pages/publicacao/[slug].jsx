import { getAllPosts, getPostBySlug } from "../../lib/posts"
import ReactMarkdown from "react-markdown"
import Navbar from "../../app/components/Navbar/NavbarComponent"

export default function PostPage({ post }) {
  if (!post) return null

  return (
    <div className="min-h-screen dark:bg-[#121212] bg-[#f9f9f9] transition-colors duration-300">
      <Navbar />
      
      <main className="container mx-auto p-6 text-black dark:text-white">
        {/* Cabeçalho centralizado - Estilo baseado no seu post5.jsx */}
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="my-10 text-4xl font-bold dark:text-rose-500 text-rose-600">
            {post.titulo}
          </h1>
          
          <div className="text-xl my-4 text-center dark:text-white text-black p-8 bg-zinc-100 dark:bg-zinc-800/40 rounded-xl shadow-sm">
            {post.subtitulo}
          </div>
        </header>

        {/* Conteúdo do Post - Renderizado do Markdown */}
        <article className="mt-8 max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert 
            max-w-none
            prose-p:leading-relaxed prose-p:text-justify
            prose-headings:text-rose-600 dark:prose-headings:text-rose-500
            prose-a:text-blue-500 hover:prose-a:text-blue-600
            prose-strong:text-rose-600 dark:prose-strong:text-rose-400">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  const paths = posts.map((post) => ({ params: { slug: post.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  return { props: { post } }
}