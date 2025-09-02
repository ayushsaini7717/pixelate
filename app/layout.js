import FloatingShapes from "@/components/floating-shapes";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Headers from "@/components/header";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

export const metadata = {
  title: "Pixelate",
  description: "AI Photo Editor",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ClerkProvider appearance={{
              baseTheme: shadesOfPurple
            }}>
              <ConvexClientProvider>
                <main className="bg-slate-900 min-h-[2000px] text-white overflow-x-hidden">
                  <FloatingShapes/>
                  <Toaster richColors/>
                  <Headers/>
                  {children}
                </main>
              </ConvexClientProvider>
            </ClerkProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
