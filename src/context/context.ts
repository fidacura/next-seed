// src/context/context.js
// e.g.: export const ThemeContext = createAppContext('dark');
// e.g.: export const UserContext = createAppContext({ isLoggedIn: false, username: '' });
// e.g.: export const LanguageContext = createAppContext('en');
// e.g.: export const SettingsContext = createAppContext({ notifications: true, darkMode: false });
// e.g.: export const NavigationContext = createAppContext({ currentPage: 'home' });

import React, { createContext, useContext, ReactNode, useState } from 'react';

// Basic context template 
export function createAppContext<T>(defaultValue: T) {
  const Context = createContext<T>(defaultValue);
  
  function Provider({ children, value = defaultValue }: { 
    children: ReactNode;
    value?: T;
  }) {
    return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    );
  }
  
  function useAppContext() {
    return useContext(Context);
  }
  
  return { Provider, useAppContext };
}