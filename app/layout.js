import Header from "@components/Header";
import "@styles/globals.scss";

export const metadata = {
  title: "Gokul Krishnan",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
