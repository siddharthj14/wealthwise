import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <html lang="en" suppressHydrationWarning>
          <head>
            <link rel="icon" href="/logo-sm.png" sizes="any" />
          </head>
          <body className={`${inter.className} bg-white text-black dark:bg-[#0e0e16] dark:text-white transition-colors duration-300`}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-blue-50 dark:bg-[#111827] py-12">
              <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
                <p>Made with 💗 by RoadsideCoder</p>
              </div>
            </footer>
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
