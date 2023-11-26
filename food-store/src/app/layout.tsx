import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Navbar from "@/components/navbar/navbar";
import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {StoreProvider} from "@/providers/StoreProvider";
import {Providers} from "@/providers/Providers";
import LeftDrawer from "@/components/left-drawer/left-drawer";
import CustomBackdrop from "@/components/custom-backdrop/custom-backdrop";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Food Store',
  description: 'Home delivery of food products',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="ru">
    <body className="layout-body">
    <Providers>
      <Header/>
      <LeftDrawer/>
      <main className="page container">
        <Navbar/>
        {children}
      </main>
      <Footer/>
      <CustomBackdrop/>
    </Providers>
    </body>
    </html>
  )
}
