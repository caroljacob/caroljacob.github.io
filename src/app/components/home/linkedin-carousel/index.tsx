"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { linkedInPosts } from "../../../../data/portfolio-data";

type LinkedinPost = {
    id: number;
    title: string;
    dateLabel: string;
    shortDescription: string;
    fullText: string;
    tags: string[];
    mediaType: "image" | "video";
    mediaSrc: string;
    accent: string;
};

const AUTOPLAY_MS = 7000;

const LinkedinCarousel = () => {
    const [posts] = useState<LinkedinPost[]>(linkedInPosts as LinkedinPost[]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [selectedPost, setSelectedPost] = useState<LinkedinPost | null>(null);
    const shouldReduceMotion = useReducedMotion();

    const currentPost = posts[currentIndex];

    const mediaSrc = useMemo(() => {
        if (!currentPost?.mediaSrc) return "";
        return encodeURI(currentPost.mediaSrc);
    }, [currentPost]);

    const progressValue = useMemo(() => {
        if (!posts.length) return 0;
        return ((currentIndex + 1) / posts.length) * 100;
    }, [currentIndex, posts.length]);

    const goToNext = () => {
        if (!posts.length) return;
        setCurrentIndex((prev) => (prev + 1) % posts.length);
    };

    const goToPrev = () => {
        if (!posts.length) return;
        setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
    };

    useEffect(() => {
        if (!isAutoplayEnabled || isHovering || selectedPost || posts.length <= 1) return;

        const timer = setInterval(() => {
            goToNext();
        }, AUTOPLAY_MS);

        return () => clearInterval(timer);
    }, [isAutoplayEnabled, isHovering, selectedPost, posts.length, currentIndex]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") goToNext();
            if (event.key === "ArrowLeft") goToPrev();
            if (event.key === "Escape" && selectedPost) setSelectedPost(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedPost, posts.length]);

    if (!currentPost) return null;

    return (
        <motion.section
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            aria-label="Featured highlights carousel"
        >
            <div className="container">
                <div
                    className="relative overflow-hidden border-x border-primary/10 bg-[linear-gradient(160deg,#fcfcfd_10%,#f7fafb_60%,#f6f9ff_100%)]"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onPointerDown={() => setHasInteracted(true)}
                >
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full blur-3xl"
                        animate={shouldReduceMotion ? undefined : { opacity: [0.24, 0.42, 0.24], scale: [0.95, 1.06, 0.95] }}
                        transition={shouldReduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        style={{ background: currentPost.accent }}
                    />

                    <div className="relative max-w-3xl mx-auto px-4 sm:px-7 py-10 md:py-14 border-b border-primary/10">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Featured Highlights</p>
                                <h3 className="mt-2 text-primary">Research, leadership, and scientific outreach</h3>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsAutoplayEnabled((prev) => !prev)}
                                    className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-2 text-xs text-primary hover:bg-primary/5"
                                    aria-label={isAutoplayEnabled ? "Pause autoplay" : "Enable autoplay"}
                                >
                                    {isAutoplayEnabled ? <Pause size={14} /> : <Play size={14} />}
                                    {isAutoplayEnabled ? "Autoplay on" : "Autoplay off"}
                                </button>
                                <button
                                    type="button"
                                    onClick={goToPrev}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/10 bg-white text-primary hover:bg-primary/5"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                <button
                                    type="button"
                                    onClick={goToNext}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/10 bg-white text-primary hover:bg-primary/5"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative max-w-3xl mx-auto px-4 sm:px-7 py-8 md:py-10">
                        <div className="mb-4 flex items-center justify-between gap-3">
                            <p className="text-sm text-secondary">{currentPost.dateLabel}</p>
                            <p className="text-sm text-secondary">{String(currentIndex + 1).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}</p>
                        </div>

                        <div className="h-1 w-full overflow-hidden rounded-full bg-primary/10">
                            <motion.div
                                className="h-full rounded-full bg-primary"
                                animate={{ width: `${progressValue}%` }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                            />
                        </div>

                        <div className="mt-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentPost.id}
                                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
                                    animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={shouldReduceMotion ? {} : { opacity: 0, y: -10, filter: "blur(4px)" }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                    drag={posts.length > 1 ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.12}
                                    onDragEnd={(_, info) => {
                                        if (info.offset.x > 90) goToPrev();
                                        if (info.offset.x < -90) goToNext();
                                    }}
                                    className="grid gap-6"
                                >
                                    <motion.div
                                        whileHover={shouldReduceMotion ? {} : { scale: 1.005, y: -2 }}
                                        className="group relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_20px_40px_rgba(16,24,40,0.06)]"
                                    >
                                        <div className="relative h-[20rem] sm:h-[26rem] w-full bg-[#f4f7fa]">
                                            {currentPost.mediaType === "video" ? (
                                                <video
                                                    key={mediaSrc}
                                                    src={mediaSrc}
                                                    className="h-full w-full object-cover"
                                                    preload="metadata"
                                                    muted={!hasInteracted}
                                                    autoPlay
                                                    loop
                                                    playsInline
                                                    controls={false}
                                                    aria-label={currentPost.title}
                                                />
                                            ) : (
                                                <Image
                                                    src={mediaSrc}
                                                    alt={currentPost.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 70vw"
                                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                                                    loading="lazy"
                                                />
                                            )}

                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
                                                animate={shouldReduceMotion ? undefined : { opacity: [0.9, 0.75, 0.9] }}
                                                transition={shouldReduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            />
                                        </div>

                                        <div className="p-5 sm:p-6">
                                            <h4 className="leading-tight text-primary">{currentPost.title}</h4>
                                            <p className="mt-3 text-secondary">{currentPost.shortDescription}</p>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {currentPost.tags.map((tag, idx) => (
                                                    <span key={idx} className="rounded-full border border-primary/10 bg-white px-3 py-1 text-xs text-primary">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-5 flex items-center justify-between gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedPost(currentPost)}
                                                    className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white"
                                                    aria-label={`Open full post for ${currentPost.title}`}
                                                >
                                                    Read full post
                                                </button>
                                                <span className="text-xs text-secondary">Drag or use arrows to navigate</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedPost ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                        onClick={() => setSelectedPost(null)}
                        aria-modal="true"
                        role="dialog"
                    >
                        <motion.div
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
                            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                            exit={shouldReduceMotion ? {} : { opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-2xl"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex items-center justify-between border-b border-primary/10 px-5 py-4">
                                <div>
                                    <p className="text-xs tracking-[2px] uppercase text-primary/60">Portfolio Highlight</p>
                                    <h4 className="mt-1 leading-tight text-primary">{selectedPost.title}</h4>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSelectedPost(null)}
                                    className="rounded-full border border-primary/10 px-4 py-2 text-sm text-primary hover:bg-primary/5"
                                    aria-label="Close post modal"
                                >
                                    Close
                                </button>
                            </div>

                            <div className="grid max-h-[calc(92vh-78px)] min-h-0 grid-cols-1 lg:grid-cols-[1.25fr_0.95fr]">
                                <div className="relative min-h-[48vh] bg-[#f6f8fb]">
                                    {selectedPost.mediaType === "video" ? (
                                        <video
                                            src={encodeURI(selectedPost.mediaSrc)}
                                            className="h-full w-full object-contain"
                                            controls
                                            preload="metadata"
                                            playsInline
                                            aria-label={selectedPost.title}
                                        />
                                    ) : (
                                        <Image
                                            src={encodeURI(selectedPost.mediaSrc)}
                                            alt={selectedPost.title}
                                            fill
                                            className="object-contain p-3"
                                            sizes="(max-width: 1024px) 100vw, 70vw"
                                            loading="lazy"
                                        />
                                    )}
                                </div>

                                <div className="min-h-0 px-5 py-5">
                                    <div className="flex h-full min-h-0 flex-col rounded-[1.5rem] border border-primary/10 bg-[linear-gradient(180deg,#ffffff_0%,#fbfcfe_100%)] p-4 sm:p-5 shadow-sm">
                                        <div className="flex items-start justify-between gap-4 border-b border-primary/10 pb-4">
                                            <div>
                                                <p className="text-[11px] tracking-[2px] uppercase text-primary/60">Read full post</p>
                                                <p className="mt-2 text-sm text-secondary">{selectedPost.dateLabel}</p>
                                            </div>
                                            <div className="rounded-full border border-primary/10 bg-white px-3 py-1 text-[11px] tracking-[2px] uppercase text-primary/50">
                                                Scroll
                                            </div>
                                        </div>

                                        <div className="min-h-0 flex-1 overflow-y-auto pr-2 pt-4">
                                            <p className="text-base leading-7 text-primary">{selectedPost.fullText}</p>
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {selectedPost.tags.map((tag: string, idx: number) => (
                                                    <span key={idx} className="rounded-full border border-primary/10 px-3 py-1 text-xs text-primary">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </motion.section>
    );
};

export default LinkedinCarousel;
