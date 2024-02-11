import "@styles/globals.scss";
import ClientWrapper from "./ClientWrapper";


export const metadata = {
  title: "Gokul Krishnan",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body>
     
        <ClientWrapper>
          {children}
        </ClientWrapper>
         
      </body>
    </html>
  );
}
