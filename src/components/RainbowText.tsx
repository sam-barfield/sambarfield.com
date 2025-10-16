import type { ReactNode } from 'react'

export const RainbowText = ({ children }: { children: ReactNode }) => {
    return (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-500 from-0% via-zinc-500 via-50% to-neutral-800 to-100%">
            {children}
        </span>
    );
}