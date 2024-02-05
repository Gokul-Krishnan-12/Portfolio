import Header from "@components/Header";
import "@styles/globals.scss";
import ContextWrapper from "./contextWrapper";


export const metadata = {
  title: "Gokul Krishnan",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
     
      <ContextWrapper>
     
          {children}
        
        </ContextWrapper>
     
    </html>
  );
}
