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
      <body>
        
          
          <Video />
        

      </body>
    </html>
  );
}
