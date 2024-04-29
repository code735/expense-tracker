import React, { createContext, useState, useContext, PropsWithChildren } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const loginHandler = () => {
    setIsAuthenticated(true);
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
  };

  const contextValue: AuthContextType = {
    isAuthenticated,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props?.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;