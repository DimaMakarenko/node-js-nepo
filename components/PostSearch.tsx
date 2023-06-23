'use client';

import { getPostsBySearch } from "@/services/getPosts";
import { TPost } from "@/types/index.dt";
import { useState, FormEventHandler } from "react";

type Props = {
  onSearch: (value: TPost[]) => void
}
const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search) || [];
    onSearch(posts)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-3">
      <input type="search" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}
        className="bg-white-50 border border-white-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5" />
      <button type="submit" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Search</button>
    </form>
  )
}

export { PostSearch };
