import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the type for the user profile context
interface UserProfile {
    page: string;
    open: boolean;
    updatePage: (name: string, type?: boolean) => void;
    setOpenMenu: (open: boolean) => void;
    scrolling: boolean;
    setScrolling: (open: boolean) => void;
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
    const [scrolling, setScrolling] = useState(false);

    const updatePage = (id: string, type = true) => {
        setScrolling(type);
        setPage(id);
        (window as any)["pageValue"] = id;
        (window as any)["scrolling"] = type;
    };


    const setOpenMenu = (open: boolean) => {
        setOpen(open);
    };

    return (
        <StateProviderContext.Provider value={{ page, updatePage, setOpenMenu, open, scrolling, setScrolling }}>
            {children}
        </StateProviderContext.Provider>
    );
};
