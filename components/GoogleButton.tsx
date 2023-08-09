'use client';

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export const GoogleButton = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callback') || '/profile';

  return (
    <button onClick={() => signIn('google', { callbackUrl })} className="p-2 text-white bg-blue-500 mt-2">
      Sign In with Google
    </button>
  )
}

