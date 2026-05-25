import { getAllPosts, getPostBySlug } from "../../../lib/posts"
import ReactMarkdown from "react-markdown"
import Navbar from "../../components/Navbar/NavbarComponent"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  return {
    title: post.titulo,
    description: post.subtitulo,
  }
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return null

  return (
    <div className="min-h-screen bg-gruvbox-light-bg dark:bg-gruvbox-bg transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto p-6">
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="my-10 text-4xl font-bold text-gruvbox-red dark:text-gruvbox-red-bright">
            {post.titulo}
          </h1>
          <div
            className="text-xl my-4 text-center p-8
            bg-gruvbox-light-bg1 dark:bg-gruvbox-bg1
            border border-gruvbox-light-border dark:border-gruvbox-border
            rounded-xl shadow-gruvbox-light dark:shadow-gruvbox-dark"
          >
            {post.subtitulo}
          </div>
        </header>
        <article className="mt-8 max-w-4xl mx-auto">
          <div
            className="prose prose-lg dark:prose-invert max-w-none
            prose-p:leading-relaxed prose-p:text-justify
            prose-headings:text-gruvbox-red dark:prose-headings:text-gruvbox-red-bright
            prose-a:text-gruvbox-blue dark:prose-a:text-gruvbox-blue-bright
            hover:prose-a:text-gruvbox-aqua dark:hover:prose-a:text-gruvbox-aqua-bright
            prose-strong:text-gruvbox-yellow dark:prose-strong:text-gruvbox-yellow-bright
            prose-code:text-gruvbox-green dark:prose-code:text-gruvbox-green-bright
            prose-blockquote:border-gruvbox-red dark:prose-blockquote:border-gruvbox-red-bright
            prose-hr:border-gruvbox-light-border dark:prose-hr:border-gruvbox-border"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  )
}
