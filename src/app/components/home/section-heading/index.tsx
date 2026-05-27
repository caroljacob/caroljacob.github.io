import type { ReactNode } from "react";

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    action?: ReactNode;
};

const SectionHeading = ({ eyebrow, title, description, action }: SectionHeadingProps) => {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-1 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <p className="text-[11px] font-medium tracking-[2px] uppercase text-primary/60">{eyebrow}</p>
                </div>
                <h3 className="text-[clamp(1.6rem,2.4vw,2.5rem)] leading-tight tracking-[-0.03em] text-primary">
                    {title}
                </h3>
                {description ? (
                    <p className="max-w-xl text-sm leading-7 text-secondary">
                        {description}
                    </p>
                ) : null}
            </div>
            {action ? <div className="shrink-0">{action}</div> : null}
        </div>
    );
};

export default SectionHeading;