import "./globals.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";

export const metadata = {
  title: "Wendell Bonucci - Portfólio",
  description: "Portfólio pessoal, desenvolvedor",
  icons: {
    icon: "/WB.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={''}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}