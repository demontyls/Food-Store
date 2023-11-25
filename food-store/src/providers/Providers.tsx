import {StoreProvider} from "@/providers/StoreProvider";
import {ReactNode} from "react";

export function Providers({ children }: {children: ReactNode}) {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  );
}