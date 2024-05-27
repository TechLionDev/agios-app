import type { Metadata } from "next";
import { Quicksand as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"

import { cn } from "@/lib/utils";
import { CheckCircle2Icon, CircleXIcon, InfoIcon, LoaderCircleIcon, TriangleAlertIcon } from "lucide-react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Agios",
  description: "A Coptic Calendar App Developed By TechLion Dev"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <ThemeProvider
          attribute='class'
          defaultTheme="light"
          // defaultTheme='system'
          // enableSystem
          // disableTransitionOnChange
        > */}
          <main>{children}</main>
          <Toaster
            closeButton={true}
            icons={{
              success: <CheckCircle2Icon />,
              info: <InfoIcon />,
              warning: <TriangleAlertIcon />,
              error: <CircleXIcon />,
              loading: <LoaderCircleIcon />
            }}
            richColors={true}
          />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
