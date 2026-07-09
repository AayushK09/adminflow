'use client';

import Link from 'next/link';
import {
  Home,
  LineChart,
  Package,
  PanelLeft,
  Settings,
  ShoppingCart,
  Users2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { AdminFlowLogo } from '@/components/icons';
import Providers, { useSidebar } from './providers';
import { NavItem } from './nav-item';

export function SidebarLayout({
  children,
  header
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
}) {
  return (
    <Providers>
      <SidebarShell header={header}>{children}</SidebarShell>
    </Providers>
  );
}

function SidebarShell({
  children,
  header
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
}) {
  const { open } = useSidebar();

  return (
    <main className="flex min-h-screen w-full flex-col bg-muted/40">
      <DesktopNav />
      <div
        className="flex flex-col sm:gap-4 sm:py-4 transition-all duration-300"
        style={{ paddingLeft: open ? '224px' : '56px' }}
      >
        <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <MobileNav />
          {header}
        </div>
        <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
          {children}
        </main>
      </div>
    </main>
  );
}

function DesktopNav() {
  const { open, toggle } = useSidebar();

  return (
    <aside
      className="fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background sm:flex transition-all duration-300 overflow-hidden"
      style={{ width: open ? '224px' : '56px' }}
    >
      <nav className="flex flex-col gap-4 px-2 sm:py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-white md:h-8 md:w-8"
          >
            <AdminFlowLogo className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">AdminFlow</span>
          </Link>
          {open && (
            <Button size="icon" variant="ghost" onClick={toggle}>
              <PanelLeft className="h-5 w-5" />
            </Button>
          )}
        </div>
        {!open && (
          <Button size="icon" variant="ghost" onClick={toggle}>
            <PanelLeft className="h-5 w-5" />
          </Button>
        )}

        <NavItem href="#" label="Dashboard">
          <Home className="h-5 w-5 shrink-0" />
        </NavItem>
        <NavItem href="/orders" label="Orders">
          <ShoppingCart className="h-5 w-5 shrink-0" />
        </NavItem>
        <NavItem href="/" label="Products">
          <Package className="h-5 w-5 shrink-0" />
        </NavItem>
        <NavItem href="/customers" label="Customers">
          <Users2 className="h-5 w-5 shrink-0" />
        </NavItem>
        <NavItem href="#" label="Analytics">
          <LineChart className="h-5 w-5 shrink-0" />
        </NavItem>
      </nav>
      <nav className="mt-auto flex flex-col gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5 shrink-0" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          {!open && <TooltipContent side="right">Settings</TooltipContent>}
        </Tooltip>
      </nav>
    </aside>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
              <AdminFlowLogo className="h-5 w-5" />
            </div>
            <span className="font-bold text-foreground">AdminFlow</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
            <Home className="h-5 w-5" /> Dashboard
          </Link>
          <Link href="/orders" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
          </Link>
          <Link href="/" className="flex items-center gap-4 px-2.5 text-foreground">
            <Package className="h-5 w-5" /> Products
          </Link>
          <Link href="/customers" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
            <Users2 className="h-5 w-5" /> Customers
          </Link>
          <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
            <LineChart className="h-5 w-5" /> Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
