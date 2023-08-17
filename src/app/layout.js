"use client";

import "./globals.css";
import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { TasksProvider } from "../context/TasksContext";
import { Toaster } from "./Toaster";
import { Nuevo } from "../components/nuevo";
import { Video } from "../components/video"


export const metadata = {
  title: "Tasks App",
};

export default function RootLayout({ children }) {

  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Dancing+Script&family=PT+Serif:ital@1&family=Playfair+Display:ital,wght@1,500&family=Rubik+Vinyl&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        
          
          <Video />
          

      </body>
    </html>
  );
}
