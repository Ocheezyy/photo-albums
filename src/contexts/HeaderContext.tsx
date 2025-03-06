import { createContext, useContext } from "react";

type HeaderData = {
    title: string;
    showBack: boolean;
};

const HeaderContext = createContext<HeaderData | null>(null);

export const HeaderDataProvider = ({ children, value }: { children: React.ReactNode; value: HeaderData }) => {
    return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
  };
  
export const useHeaderData = () => {
    const context = useContext(HeaderContext);
    if (!context) {
        throw new Error("useHeaderData must be used within a HeaderDataProvider");
    }
    
    return context;
};