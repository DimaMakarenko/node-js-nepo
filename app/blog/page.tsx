'use client';

import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { getAllPosts } from "@/services/getPosts";
import { TPost } from "@/types/index.dt";
import { Metadata } from "next"
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: 'Blog | DM'
}

export default async function Blog() {
  const [posts, setPosts] = useState<TPost[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getAllPosts().then(setPosts).finally(() => setLoading(false))
  }, []);

  return (
    <>
      <h1 className="text-xl font-bold mb-2 text-center">Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> :
        <Posts posts={posts} />
      }
    </>
  )
}
