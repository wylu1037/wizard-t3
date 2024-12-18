"use client";

import Link from "next/link";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { useCreateUser } from "@/lib/hooks/user";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { mutateAsync: signUp } = useCreateUser();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await signUp({
        data: {
          email,
          password,
        },
      });

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      setError(error instanceof Error ? error.message : "注册失败，请重试");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-medium tracking-tight">
          Create your account
        </h1>
        <p className="text-sm text-gray-600/60">
          Welcome back! Please enter your details.
        </p>
      </div>

      <div className="flex overflow-hidden rounded-lg border border-foreground/5 bg-gray-100">
        <Link
          href="/signup"
          className="w-full rounded-md border-[0.5px] border-foreground/10 bg-white px-3 py-1.5 text-center text-sm font-medium shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
        >
          Sign up
        </Link>
        <Link
          href="/signin"
          className="w-full rounded-md px-3 py-1.5 text-center text-sm text-gray-600/60 hover:text-gray-600"
        >
          Log in
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium leading-none">
            Email
          </Label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition-colors placeholder:text-gray-400 hover:border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
            value={email}
            disabled={isLoading}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-sm font-medium leading-none"
          >
            Password
          </Label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition-colors placeholder:text-gray-400 hover:border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
            value={password}
            disabled={isLoading}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Sign up
          </Button>

          <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          <Button
            disabled={isLoading}
            className="flex w-full items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            <FcGoogle size={18} />
            <span>Sign up with Google</span>
          </Button>
        </div>
      </form>

      <div className="text-center text-sm text-gray-600/60">
        Already have an account?{" "}
        <Link href="/signin" className="text-purple-600 hover:text-purple-700">
          Sign in
        </Link>
      </div>
    </div>
  );
}
