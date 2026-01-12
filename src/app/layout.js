import "./globals.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";

export const metadata = {
  title: "Portfólio - Wendell Bonucci",
  description: "Portfólio pessoal, desenvolvedor",
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