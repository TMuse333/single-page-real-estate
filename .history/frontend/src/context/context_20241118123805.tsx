"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the type for the context value
interface GeneralContextType {

  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  heroInView: boolean;
  setHeroInView: React.Dispatch<React.SetStateAction<boolean>>;
  
  
}

// Create the context
export const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

// Create a provider component
export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize the value state


  // Detect mobile devices
  const [isMobile, setIsMobile] = useState<boolean>(true);

const [heroInView, setHeroInView] = useState(true)





  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 865);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  useEffect(() => {
    console.log('is mobile', isMobile);
  }, [isMobile]);

  const contextValue = {

    isMobile,
    setIsMobile,
    heroInView, setHeroInView
   
  };

  return <GeneralContext.Provider value={contextValue}>{children}</GeneralContext.Provider>;
};

export const useGeneralContext = (): GeneralContextType => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error('useGeneralContext must be used within a ContextProvider');
  }
  return context;
};