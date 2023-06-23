import { TPost } from "@/types/index.dt";
import Link from "next/link";

type Props = {
  posts: TPost[]
}

const Posts = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post: any) => <li key={post.id}>
        <Link href={`/blog/${post.id}`}>{post.title}</Link>
      </li>
      )}
    </ul>
  )
}

export { Posts };
