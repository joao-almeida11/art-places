import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col gap-y-5 border border-slate-100 rounded-lg p-6 shadow-lg bg-white">
        <header>
          <h1 className="text-center text-3xl mb-6 font-serif">Login</h1>
          <p>Enter your email below to login to your account:</p>
        </header>
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
        <Button type="submit">Login</Button>
        <div className="text-center">
          Don&apos;t have an account?
          <Link href="/signup">
            <Button variant="link" size="sm">
              Sign up
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
