import type { ReactNode } from 'react'

export const Pill = ({ children }: { children: ReactNode }) => {
    return (
        <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs bg-muted/40">
            {children}
        </span>
    );
}