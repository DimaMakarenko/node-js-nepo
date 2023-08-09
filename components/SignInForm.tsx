'use client';

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

export const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    });
    if (response && !response.error) {
      router.push('/profile')
    } else {
      console.error(response)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex flex-col">
      <label>Email</label>
      <input type="email" name="email" required className="border-2 border-blue-500" />
      <label>Password</label>
      <input type="password" name="password" required className="border-2 border-blue-500" />
      <button type="submit" className="p-2 bg-blue-500 text-white mt-3">Sign In</button>
    </form>
  )
}
