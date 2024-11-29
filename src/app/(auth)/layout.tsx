import type { Metadata } from "next";
import { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="flex justify-center">
          <div className="h-10 w-10 rounded-lg bg-purple-600 p-2">
            <div className="h-full w-full rounded-full bg-white/90" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
