'use client'
import { createContext, ReactNode, useState } from 'react';

const defaultValue = {};

export interface IDrawerProvider {
    showLeftDrawer: boolean;
    setShowLeftDrawer: (value : boolean) => void;
}

export const DrawerContext = createContext<IDrawerProvider>(defaultValue as IDrawerProvider);

export const DrawerProvider = ({children}: { children: ReactNode }) => {
    return (
        <DrawerContext.Provider value={useDrawerProvider()}>
            {children}
        </DrawerContext.Provider>
    )
}

export const useDrawerProvider = ():IDrawerProvider => {
    const [showLeftDrawer, setShowLeftDrawer] = useState(false);

    return {
        showLeftDrawer,
        setShowLeftDrawer
    }
}

