'use client';

import { usePosts } from "@/store";
import { useState, FormEventHandler } from "react";

const PostSearch = () => {
  const [search, setSearch] = useState<string>('');
  const getPostsBySearch = usePosts(state => state.getPostsBySearch)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

     await getPostsBySearch(search);
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
