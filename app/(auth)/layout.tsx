import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import React from "react";
import  "../globals.css"
import { dark } from "@clerk/themes";

export  const   metadata    =   {
    title:"Threads",
    description:"A social media app created using nextjs "
}

const inter = Inter({ subsets: ['latin'] })

export  default function   authLayout({children}:{children:React.ReactNode}){
return  <ClerkProvider      appearance={{
    baseTheme: dark,
  }}>
    <html   lang="en">
        <body   className={`${inter.className}  bg-dark-1`}>
            {children}
        </body>
    </html>
</ClerkProvider>
}