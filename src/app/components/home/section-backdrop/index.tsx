import type { ReactNode } from "react";

type SectionBackdropProps = {
    children: ReactNode;
    accent: string;
};

const SectionBackdrop = ({ children, accent }: SectionBackdropProps) => {
    return (
        <div className="relative overflow-hidden border-x border-primary/10 bg-[linear-gradient(160deg,#f8fbff_0%,#f2f7ff_44%,#edf4fb_72%,#f7fbff_100%)]">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full blur-3xl opacity-95"
                style={{ background: accent }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.06)_100%)]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(28,33,43,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(28,33,43,0.035)_1px,transparent_1px)] bg-[size:108px_108px] opacity-55 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"
            />
            <div className="relative">{children}</div>
        </div>
    );
};

export default SectionBackdrop;