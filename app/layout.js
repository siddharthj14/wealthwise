import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WealthWise",
  description: "Turn Spending Into Strategy",
  icons: {
    icon: "/favicon.ico ",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
      >
        <html lang="en" suppressHydrationWarning className={inter.className}>
          <body className="bg-white text-black dark:bg-[#0e0e16] dark:text-white transition-colors duration-300">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            <footer className="bg-blue-50 dark:bg-[#111827] py-12">
              <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
                <p>
                  Copyright © {new Date().getFullYear()} - All Rights Reserved.
                </p>
                <p>
                  Crafted with care by{" "}
                  <a
                    href="https://github.com/siddharthj14"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit my GitHub"
                    className="font-bold text-black dark:text-white hover:underline"
                  >
                    Siddharth
                  </a>
                </p>
              </div>
            </footer>
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
