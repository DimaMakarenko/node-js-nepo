import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";

export default async function Signin() {
  return (
    <div>
      <h1>Sign In</h1>
      <GoogleButton />
      <SignInForm />
    </div>
  )
}
