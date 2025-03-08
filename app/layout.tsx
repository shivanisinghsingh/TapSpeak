import "./globals.css";
import type { Metadata } from "next";
import KeyPressAnnouncer from "@/components/KeyPressAnnouncer"; // Import your AI assistant

export const metadata: Metadata = {
  title: "AI Accessibility Tool",
  description: "A multilingual AI-powered accessibility tool",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <KeyPressAnnouncer /> {/* AI Assistant for key announcements */}
        {children} {/* This renders the current page */}
      </body>
    </html>
  );
}
