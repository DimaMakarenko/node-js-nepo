'use client';
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog | DM'
}

export default async function Blog() {
  return (
    <>
      <h1 className="text-xl font-bold mb-2 text-center">Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  )
}
