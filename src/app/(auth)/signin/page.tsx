"use client";

import Link from "next/link";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-medium tracking-tight">
          Log in to your account
        </h1>
        <p className="text-sm text-gray-600/60">
          Welcome back! Please enter your details.
        </p>
      </div>

      <div className="flex overflow-hidden rounded-lg border border-foreground/5 bg-gray-100">
        <Link
          href="/signup"
          className="w-full rounded-md px-3 py-1.5 text-center text-sm text-gray-600/60 hover:text-gray-600"
        >
          Sign up
        </Link>
        <Link
          href="/signin"
          className="w-full rounded-md border-[0.5px] border-foreground/10 bg-background px-3 py-1.5 text-center text-sm font-medium shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
        >
          Log in
        </Link>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium leading-none">
            Email
          </Label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-200 bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-gray-400 hover:border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="password"
              className="text-sm font-medium leading-none"
            >
              Password
            </Label>
          </div>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-200 bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-gray-400 hover:border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
            />
            <Label htmlFor="remember" className="text-sm text-gray-500">
              Remember for 30 days
            </Label>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm text-purple-600 hover:text-purple-700"
          >
            Forgot password
          </Link>
        </div>
      </div>

      <div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Sign in
        </Button>

        <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <Button
          disabled={isLoading}
          className="flex w-full items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          <FcGoogle size={18} />
          <span>Sign in with Google</span>
        </Button>
      </div>

      <div className="text-center text-sm text-gray-600/60">
        Don't have an account?{" "}
        <Link href="/signup" className="text-purple-600 hover:text-purple-700">
          Sign up
        </Link>
      </div>
    </div>
  );
}
