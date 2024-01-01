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
                  <a target="_blank" href="https://github.com/henriquesss">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 0a12 12 0 0 0-3.792 23.404c.6.12.792-.252.792-.576v-2.004c-3.252.708-3.936-1.536-3.936-1.536-.48-1.176-1.176-1.488-1.176-1.488-.96-.648.072-.636.072-.636 1.068.072 1.632 1.116 1.632 1.116.96 1.704 2.52 1.2 3.132.912.096-.696.36-1.2.648-1.464-2.256-.252-4.608-1.128-4.608-5.04 0-1.116.408-2.028 1.08-2.748-.108-.252-.468-1.296.108-2.7 0 0 .864-.276 2.82 1.044a9.502 9.502 0 0 1 2.496-.336 9.51 9.51 0 0 1 2.496.336c1.956-1.32 2.82-1.044 2.82-1.044.576 1.404.216 2.448.108 2.7.672.72 1.08 1.632 1.08 2.748 0 3.912-2.352 4.788-4.584 5.04.36.324.672.936.672 1.896v2.82c0 .324.192.708.792.576A12 12 0 0 0 12 0z" />
                    </svg>
                  </a>
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
