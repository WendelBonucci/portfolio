import "./globals.css";
import Header from "@/layout/Header/Header";

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
      </body>
    </html>
  );
}