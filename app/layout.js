import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "mahdi kamyabi",
  description: "This Website serves as a showcase of my skills, and projects",
  openGraph: {
    images:
      "https://github.com/mahdikamyabi1999/portfolio/blob/main/public/coverGithub.png?raw=true",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          property="og:image"
          content="https://github.com/mahdikamyabi1999/portfolio/blob/main/public/coverGithub.png?raw=true"
        />
        <meta property="og:image:alt" content="portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mahdikamyabi.ir/" />
        <meta
          property="twitter:image"
          content="https://github.com/mahdikamyabi1999/portfolio/blob/main/public/coverGithub.png?raw=true"
        />
      </head>
      <body className={poppins.className}>
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
