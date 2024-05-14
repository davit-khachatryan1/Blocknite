import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the user profile context
interface UserProfile {
    page: string;
    open: boolean;
    updatePage: (name: string, type?: boolean) => void;
    setOpenMenu: (open: boolean) => void;
    scrolling: boolean;
    setScrolling: (open: boolean) => void;
    windowWidth: number;
    windowHeight: number;
    setWindowSize: ({ width, height }: { width: number, height: number }) => void;
}

// Create the context with a default undefined value, properly typed
const StateProviderContext = createContext<UserProfile | undefined>(undefined);

// Helper hook to provide context
export function useStateProvider() {
    const context = useContext(StateProviderContext);
    if (!context) {
        throw new Error('useStateProvider must be used within a StateProvider');
    }
    return context;
}

interface StateProviderProps {
    children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
    const [page, setPage] = useState('');
    const [open, setOpen] = useState(false);
    const [scrolling, setScrolling] = useState(true);
    const [windowSize, setWindow] = useState({ width: window.innerWidth, height: window.innerHeight });

    const updatePage = (id: string, type = true) => {
        setScrolling(type);
        setPage(id);
        (window as any)["pageValue"] = id;
        (window as any)["scrolling"] = type;
    };

    const setWindowSize = (val: { width: number, height: number }) => {
        (window as any)['customWidth'] = val.width;
        (window as any)['customHeight'] = val.height;
        setWindow(val)
    }

    const setOpenMenu = (open: boolean) => {
        setOpen(open);
    };

    return (
        <StateProviderContext.Provider value={{ page, updatePage, setOpenMenu, open, scrolling, setScrolling, windowWidth: windowSize.width, windowHeight: windowSize.height, setWindowSize }}>
            {children}
        </StateProviderContext.Provider>
    );
};