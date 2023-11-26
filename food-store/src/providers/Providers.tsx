import { StoreProvider } from '@/providers/StoreProvider';
import { ReactNode } from 'react';
import { DrawerProvider } from '@/providers/DrawerProviders';

export function Providers({ children }: {children: ReactNode}) {
  return (
      <DrawerProvider>
        <StoreProvider>
          {children}
        </StoreProvider>
      </DrawerProvider>
  );
}