'use client';

import { createContext, useContext, useRef } from 'react';

interface AppContextType {
  appointmentRef: React.RefObject<HTMLDivElement> | null;
}

const AppContext = createContext<AppContextType | null>(null);

function AppProvider({ children }: { children: React.ReactNode }) {
  const appointmentRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppContext.Provider value={{ appointmentRef }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
}

export { AppProvider, useAppContext };
