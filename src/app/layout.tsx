import React from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark antialiased bg-background text-foreground min-h-screen">
      {children}
      <Toaster />
    </div>
  );
}
