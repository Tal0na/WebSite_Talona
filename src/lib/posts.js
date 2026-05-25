import matter from "gray-matter"

// ✅ Importa todos os .md em build time — compatível com Cloudflare
const postFiles = import.meta.glob("../../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
})

export function getAllPosts() {
  return Object.entries(postFiles).map(([filepath, content]) => {
    const filename = filepath.split("/").pop()
    const slug = filename.replace(/\.md$/, "")
    const { data, content: body } = matter(content)
    return { slug, ...data, content: body }
  })
}

export function getPostBySlug(slug) {
  const entry = Object.entries(postFiles).find(([filepath]) =>
    filepath.endsWith(`/${slug}.md`),
  )
  if (!entry) throw new Error(`Post não encontrado: ${slug}`)
  const { data, content } = matter(entry[1])
  return { slug, ...data, content }
}
