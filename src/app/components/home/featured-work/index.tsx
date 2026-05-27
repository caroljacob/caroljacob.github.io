"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { featureWork } from "../../../../data/portfolio-data";

const FeaturedWork = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const getAssetSrc = (assetPath?: string) => {
        if (!assetPath) return null;
        return encodeURI(assetPath);
    };

    const getPosterSrc = (posterImage?: string) => {
        if (!posterImage) return null;
        return getAssetSrc(`/posters/${posterImage}`);
    };

    const cardAccents = [
        "radial-gradient(circle, rgba(159, 168, 218, 0.72) 0%, rgba(159, 168, 218, 0.28) 42%, transparent 72%)",
        "radial-gradient(circle, rgba(126, 200, 227, 0.72) 0%, rgba(126, 200, 227, 0.28) 42%, transparent 72%)",
        "radial-gradient(circle, rgba(158, 197, 162, 0.72) 0%, rgba(158, 197, 162, 0.28) 42%, transparent 72%)",
        "radial-gradient(circle, rgba(247, 203, 125, 0.72) 0%, rgba(247, 203, 125, 0.28) 42%, transparent 72%)",
        "radial-gradient(circle, rgba(255, 171, 145, 0.72) 0%, rgba(255, 171, 145, 0.28) 42%, transparent 72%)",
        "radial-gradient(circle, rgba(153, 220, 255, 0.72) 0%, rgba(153, 220, 255, 0.28) 42%, transparent 72%)",
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-4 items-start xs:items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Featured work</p>
                            <Button asChild variant={"outline"} className="h-auto">
                                <a href="/CAROL_JACOB_RESUME.pdf" download className="py-3 px-5">
                                    Download Resume
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {featureWork?.map((value: any, index: number) => {
                            const isRightCol = index % 2 === 1;
                            const isActive = activeIndex === index;
                            const cardAccent = cardAccents[index % cardAccents.length];
                            const posterSrc = getPosterSrc(value?.posterImage);
                            const reportPdfSrc = getAssetSrc(value?.reportPdf);

                            return (
                                <div
                                    key={index}
                                    onClick={() => setActiveIndex(isActive ? null : index)}
                                    className={`group relative cursor-pointer overflow-hidden text-left p-3.5 sm:p-6 border-0 bg-transparent focus:outline-none ${isRightCol ? 'md:border-l md:border-primary/10' : ''}`}
                                    role="button"
                                    tabIndex={0}
                                    aria-pressed={isActive}
                                >
                                    <div className="relative min-h-[24rem] sm:min-h-[26rem] overflow-hidden rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(180deg,#f8fbfe_0%,#eef3f8_100%)] shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.01]">
                                        <motion.div
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full blur-3xl"
                                            animate={{ opacity: [0.3, 0.55, 0.3], scale: [0.95, 1.06, 0.95], y: [0, -10, 0] }}
                                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                            style={{ background: cardAccent }}
                                        />
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.68)_0%,rgba(247,250,252,0.95)_100%)]" />

                                        <div className={`relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                            <div className="space-y-4">
                                                <div className="flex items-start justify-between gap-3">
                                                    <div className="space-y-1">
                                                        <span className="text-[11px] tracking-[2px] uppercase text-primary/45">Research project</span>
                                                        <h4 className="leading-tight text-primary">{value?.title}</h4>
                                                    </div>
                                                    <span className="rounded-full border border-primary/10 bg-white px-3 py-1 text-[11px] font-medium text-primary shadow-sm">
                                                        Explore
                                                    </span>
                                                </div>
                                                <p className="text-sm leading-6 text-secondary">{value?.summary}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {value?.highlights?.slice(0, 2)?.map((item: string, highlightIndex: number) => (
                                                        <span key={highlightIndex} className="rounded-full border border-primary/10 bg-white/85 px-3 py-1 text-[11px] text-primary backdrop-blur-sm">
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mt-5 flex items-center justify-between gap-3">
                                                <button
                                                    type="button"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        setActiveIndex(index);
                                                    }}
                                                    className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white"
                                                >
                                                    Read details
                                                </button>
                                                <span className="text-[11px] text-secondary">Click to expand</span>
                                            </div>
                                        </div>

                                        <div className={`absolute inset-0 rounded-[1.75rem] border border-primary/15 bg-[linear-gradient(180deg,#f7fafc_0%,#eef3f8_100%)] p-5 sm:p-6 text-primary shadow-md transition-[opacity,transform] duration-300 ease-out ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                            <div className="scroll-panel flex h-full min-h-0 flex-col gap-5 overflow-y-auto pr-2">
                                                <div className="flex items-center justify-between gap-3 text-primary">
                                                    <span className="text-xs tracking-[2px] uppercase font-semibold">Details</span>
                                                    <button
                                                        type="button"
                                                        onClick={(event) => {
                                                            event.stopPropagation();
                                                            setActiveIndex(null);
                                                        }}
                                                        className="rounded-full border border-primary/10 bg-white px-3 py-1 text-xs text-primary"
                                                    >
                                                        Close
                                                    </button>
                                                </div>

                                                <div className="rounded-[1.25rem] border border-primary/10 bg-white p-4 shadow-sm">
                                                    <h4 className="leading-tight text-primary">{value?.title}</h4>
                                                    <p className="mt-2 text-sm text-primary/70">{value?.timeframe} | {value?.association}</p>
                                                </div>

                                                <div className="rounded-[1.25rem] border border-primary/10 bg-white p-4 shadow-sm">
                                                    <p className="text-sm leading-6 text-primary">{value?.summary}</p>
                                                    <ul className="mt-4 space-y-2">
                                                        {value?.highlights?.map((item: string, highlightIndex: number) => (
                                                            <li key={highlightIndex} className="flex items-start gap-2 text-sm text-primary">
                                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="flex flex-wrap gap-3 pt-1 pb-1">
                                                    {posterSrc ? (
                                                        <a
                                                            href={posterSrc}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            onClick={(event) => event.stopPropagation()}
                                                            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
                                                        >
                                                            Open poster
                                                        </a>
                                                    ) : null}
                                                    {reportPdfSrc ? (
                                                        <a
                                                            href={reportPdfSrc}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            onClick={(event) => event.stopPropagation()}
                                                            className="rounded-full border border-primary/10 bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
                                                        >
                                                            Open PDF
                                                        </a>
                                                    ) : null}
                                                    <button
                                                        type="button"
                                                        onClick={(event) => {
                                                            event.stopPropagation();
                                                            setSelectedItem(value);
                                                        }}
                                                        className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
                                                    >
                                                        Open viewer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {selectedItem ? (
                        (() => {
                            const selectedPosterSrc = getPosterSrc(selectedItem?.posterImage);
                            const selectedReportPdfSrc = getAssetSrc(selectedItem?.reportPdf);

                            return (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSelectedItem(null)}>
                            <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
                                <div className="flex items-center justify-between border-b border-primary/10 px-5 py-4">
                                    <div>
                                        <p className="text-xs tracking-[2px] uppercase text-primary/60">Poster preview</p>
                                        <h4 className="mt-1 leading-tight">{selectedItem?.title}</h4>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedItem(null)}
                                        className="rounded-full border border-primary/10 px-4 py-2 text-sm text-primary hover:bg-primary/5"
                                    >
                                        Close
                                    </button>
                                </div>
                                <div className="grid max-h-[calc(90vh-72px)] grid-cols-1 lg:grid-cols-[1.3fr_0.9fr]">
                                    <div className="relative min-h-[60vh] bg-black/5">
                                        {selectedPosterSrc ? (
                                            <Image
                                                src={selectedPosterSrc}
                                                alt={selectedItem?.title}
                                                fill
                                                className="object-contain p-4"
                                                sizes="(max-width: 1024px) 100vw, 70vw"
                                            />
                                        ) : null}
                                    </div>
                                    <div className="flex flex-col gap-4 overflow-y-auto px-5 py-5">
                                        <p className="text-sm text-secondary">{selectedItem?.timeframe} | {selectedItem?.association}</p>
                                        <p className="text-base text-primary">{selectedItem?.summary}</p>
                                        <ul className="space-y-2">
                                            {selectedItem?.highlights?.map((item: string, highlightIndex: number) => (
                                                <li key={highlightIndex} className="flex items-start gap-2 text-sm text-secondary">
                                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-2">
                                            <a
                                                href={selectedPosterSrc as string}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-white"
                                            >
                                                Open poster in new tab
                                            </a>
                                            {selectedReportPdfSrc ? (
                                                <a
                                                    href={selectedReportPdfSrc}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="ml-3 inline-flex items-center rounded-full border border-primary/10 px-5 py-3 text-sm font-medium text-primary hover:bg-primary/5"
                                                >
                                                    Open PDF report
                                                </a>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            );
                        })()
                    ) : null}

                </div>
            </div>
        </section>
    )
}

export default FeaturedWork