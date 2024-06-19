import type React from 'react';

import { getCurrentUser } from "@/lib/appwrite";
import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import type { Models } from "react-native-appwrite";

interface GlobalContextProps {
  user: Models.User<Models.Preferences> | null; // Adjust according to your user model from Appwrite
  setUser:any;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value
const defaultValue: GlobalContextProps = {
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isLoading: true,
  setIsLoading: () => {},
};

const GlobalContext = createContext<GlobalContextProps>(defaultValue);

// Create a custom hook to use the GlobalContext
export const useGlobalContext = () => useContext(GlobalContext);

interface GlobalProviderProps {
  children: ReactNode;
}


const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then((res) => {
      if (res) {
        setUser(res);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    }).catch(error => {
      console.error(error);
      setIsLoading(false);
    });
  }, []);

  const value = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <GlobalContext.Provider value={value} >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
