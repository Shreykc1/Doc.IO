import "./globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import Provider from "./Provider"
import { ThemeProvider } from "@/components/ThemeProvider"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const Metadata = {
    title: 'Doc.Io',
    description: 'Collabrative editor'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
                variables: {
                    colorPrimary: '#3371FF',
                    fontSize: '16px'
                }
            }}
        >
            <html lang="en" suppressHydrationWarning>
                <body
                    className={cn(
                        "min-h-screen font-sans antialiased",
                        fontSans.variable
                    )}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Provider>
                            {children}
                        </Provider>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    )
}
