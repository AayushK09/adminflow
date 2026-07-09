'use client';

import { createContext, useContext, useState } from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';

const SidebarContext = createContext<{
  open: boolean;
  toggle: () => void;
}>({ open: false, toggle: () => {} });

export function useSidebar() {
  return useContext(SidebarContext);
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ open, toggle: () => setOpen((v) => !v) }}>
      <TooltipProvider>{children}</TooltipProvider>
    </SidebarContext.Provider>
  );
}
