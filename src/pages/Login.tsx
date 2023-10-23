import { useState } from "react"
import { PrimaryButton, PrimaryInput } from "../components/ui/primaryFormElem"
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full pt-24 px-6">
      <div className="mb-10">
        <h2 className="text-2xl text-primary font-medium text-center">Sign in to continue</h2>
        <p className="text-center">Don&apos;t have an account? <Link to="/auth/register" className="text-primary hover:underline underline-offset-2">Sign up</Link></p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} action="" className="max-w-[30rem] w-full flex flex-col gap-y-8">
        <PrimaryInput type="email" id="email" label="Email address" name="email" onChange={(e) => setEmail(e.target.value)} value={email}  />
        <PrimaryInput type="password" id="password" label="Password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <PrimaryButton value="Log in" />

        <Link to="" className="ml-auto -mt-3 text-primary hover:text-opacity-60 hover:underline underline-offset-4">Forgot password?</Link>
      </form>
    </div>
  )
}

export default Login