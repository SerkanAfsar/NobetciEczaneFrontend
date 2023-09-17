import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

const muli = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={muli.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
