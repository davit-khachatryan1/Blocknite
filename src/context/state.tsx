import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the user profile context
interface UserProfile {
    page: string;
    updatePage: (name: string, navigate: any) => void;
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

    const updatePage = (id: string, navigate:any) => {
        setPage(id);
        navigate(`#${id}`)
    };

    return (
        <StateProviderContext.Provider value={{ page, updatePage }}>
            {children}
        </StateProviderContext.Provider>
    );
};