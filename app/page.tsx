import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { formatIsoData } from '../libs/utils'
import { Post } from '../.contentlayer/generated/types'

export default function Home() {
  const sortedPosts: Post[] = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="prose dark:prose-invert">
      {sortedPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.description} <br/> {formatIsoData(post.date)}</p>
        </article>
      ))}
    </div>
  )
}
