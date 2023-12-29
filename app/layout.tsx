import Link from "next/link"
import Image from 'next/image'
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lucas Henriques",
  description: "Software enginner",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                  <Link href="/">
                    <div className="rounded flex flex-row items-center">
                      <Image
                        src="https://avatars.githubusercontent.com/u/20709402?v=4"
                        alt="logo"
                        width={30}
                        height={30}
                        style={{ borderRadius: 20, marginRight: 5 }}
                      />
                      / henriques.
                    </div>
                  </Link>
                <nav className="ml-auto text-sm font-medium space-x-6 flex items-center">
                  <Link href="/about">about</Link>
                  <Link href="/portfolio">portfolio</Link>
                  <ModeToggle />
                </nav>
              </div>

            </header>
            <main>{children}</main>

            <div className="mt-16 flex justify-center items-center">
              <p>Created with a lot of ☕ by <a className="underline" href="https://github.com/henriquesss" target="_blank">Lucas Henriques</a></p>
            </div>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
