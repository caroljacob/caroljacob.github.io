import type { ReactNode } from "react";

type SectionBackdropProps = {
    children: ReactNode;
    accent: string;
};

const SectionBackdrop = ({ children, accent }: SectionBackdropProps) => {
    return (
        <div className="relative overflow-hidden border-x border-primary/10 bg-[linear-gradient(160deg,#fcfcfd_10%,#f7fafb_60%,#f6f9ff_100%)]">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full blur-3xl opacity-80"
                style={{ background: accent }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.12)_100%)]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(28,33,43,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(28,33,43,0.025)_1px,transparent_1px)] bg-[size:112px_112px] opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_100%)]"
            />
            <div className="relative">{children}</div>
        </div>
    );
};

export default SectionBackdrop;