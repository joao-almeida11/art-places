import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col gap-y-5 border border-slate-100 rounded-lg p-6 shadow-lg bg-white">
        <header>
          <h1 className="text-center text-3xl mb-6 font-serif">Sign up</h1>
          <p>Enter your name and email below to create your account:</p>
        </header>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="name">Name</Label>
          <Input type="text" placeholder="Please enter your name" id="name" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Your email: a@example.com"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Please enter your password"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Please enter again the password"
          />
        </div>
        <Button type="submit">Create your account</Button>
        <div className="text-center">
          Do you already have an account?
          <Link href="/login">
            <Button variant="link">Login</Button>{" "}
          </Link>
        </div>
      </main>
    </div>
  );
}
