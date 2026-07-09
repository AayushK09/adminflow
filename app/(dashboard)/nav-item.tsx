'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebar } from './providers';

export function NavItem({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { open } = useSidebar();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={clsx(
            'flex h-9 items-center gap-3 rounded-lg px-2 text-muted-foreground transition-colors hover:text-foreground md:h-8',
            { 'bg-accent text-black': pathname === href },
            open ? 'w-full justify-start' : 'w-9 justify-center md:w-8'
          )}
        >
          {children}
          {open && <span className="text-sm font-medium">{label}</span>}
          {!open && <span className="sr-only">{label}</span>}
        </Link>
      </TooltipTrigger>
      {!open && <TooltipContent side="right">{label}</TooltipContent>}
    </Tooltip>
  );
}
