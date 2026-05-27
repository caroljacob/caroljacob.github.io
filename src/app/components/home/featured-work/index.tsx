"use client";
import Image from "next/image";
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
                                    <div className={`relative transition-transform duration-300 ease-out ${isActive ? 'scale-[1.01]' : 'scale-100'}`}>
                                        <div className="relative min-h-[24rem] sm:min-h-[26rem] overflow-hidden rounded-[1.75rem]">
                                            <div className={`absolute inset-0 overflow-hidden rounded-[1.75rem] border border-white/30 bg-white shadow-sm transition-[opacity,transform] duration-300 ease-out ${isActive ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                                                <div className="absolute inset-0">
                                                    {posterSrc ? (
                                                        <Image
                                                            src={posterSrc}
                                                            alt={value?.title}
                                                            fill
                                                            className="object-cover object-center blur-[0.5px] scale-[1.02]"
                                                            sizes="(max-width: 768px) 100vw, 50vw"
                                                        />
                                                    ) : null}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#11161f]/85 via-[#11161f]/55 to-[#11161f]/20" />
                                                </div>

                                                <div className="relative z-[1] flex h-full flex-col justify-end p-4 sm:p-5">
                                                    <div className="glass relative overflow-hidden p-4 sm:p-5 text-white">
                                                        <div className="flex items-start justify-between gap-3">
                                                            <div className="space-y-1">
                                                                <span className="text-[11px] tracking-[2px] uppercase text-white/75">Research project</span>
                                                                <h4 className="leading-tight text-white">{value?.title}</h4>
                                                                <p className="text-xs text-white/75">{value?.timeframe} | {value?.association}</p>
                                                            </div>
                                                            <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                                                                Flip
                                                            </span>
                                                        </div>

                                                        <div className="mt-4 space-y-3">
                                                            <p className="text-sm leading-6 text-white/90 line-clamp-2">{value?.summary}</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {value?.highlights?.slice(0, 2)?.map((item: string, highlightIndex: number) => (
                                                                    <span key={highlightIndex} className="rounded-full bg-white/15 px-3 py-1 text-[11px] text-white backdrop-blur-sm">
                                                                        {item}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                            <div className="flex items-center justify-between gap-3 pt-1">
                                                                <button
                                                                    type="button"
                                                                    onClick={(event) => {
                                                                        event.stopPropagation();
                                                                        setSelectedItem(value);
                                                                    }}
                                                                    className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-medium text-primary shadow-sm"
                                                                >
                                                                    View poster
                                                                </button>
                                                                <span className="text-[11px] text-white/70">Flip for details</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`absolute inset-0 rounded-[1.75rem] border border-primary/15 bg-[linear-gradient(180deg,#eef3f8_0%,#f8fafc_100%)] p-5 sm:p-6 text-primary shadow-md transition-[opacity,transform] duration-300 ease-out ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                                <div className="relative z-[1] flex h-full flex-col gap-5 overflow-y-auto">
                                                    <div className="space-y-4">
                                                        <div className="flex items-center justify-between gap-3 text-primary">
                                                            <span className="text-xs tracking-[2px] uppercase font-semibold">Details</span>
                                                            <span className="rounded-full border border-primary/10 bg-white px-3 py-1 text-xs text-primary">Click to close</span>
                                                        </div>
                                                        <div className="rounded-[1.25rem] border border-primary/10 bg-white p-4 shadow-sm">
                                                            <h4 className="leading-tight text-primary">{value?.title}</h4>
                                                            <p className="mt-2 text-sm text-primary/70">{value?.timeframe} | {value?.association}</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3 rounded-[1.25rem] border border-primary/10 bg-white p-4 shadow-sm">
                                                        <p className="text-sm leading-6 text-primary">{value?.summary}</p>
                                                        <ul className="space-y-2">
                                                            {value?.highlights?.map((item: string, highlightIndex: number) => (
                                                                <li key={highlightIndex} className="flex items-start gap-2 text-sm text-primary">
                                                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-auto flex flex-wrap gap-3 pt-1">
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