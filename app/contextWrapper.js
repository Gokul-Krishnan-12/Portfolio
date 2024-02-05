'use client';
import Header from '@components/Header';
import { MyContext } from './context';
import { useState } from "react";
export default function ContextWrapper({children}) {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const contextValue = {
          isDarkMode,
          setIsDarkMode};
  return (
    <MyContext.Provider value={contextValue}>
         <body className={!isDarkMode?'light-mode':''}>
          <Header />
          {children}
          </body></MyContext.Provider>
  );
}
