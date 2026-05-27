import Image from "next/image"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72 overflow-hidden rounded-b-[2rem]">
                        <Image src={'/images/hero-sec/new-banner-bg-img.png'} alt="banner-img" width={1080} height={267} className="w-full h-full object-cover" />
                    </div>
                    <div className="border-x border-primary/10 bg-white">
                        <div className="relative max-w-3xl mx-auto px-4 sm:px-7 pt-16 sm:pt-20 pb-8 sm:pb-10">
                            <div className="absolute -top-12 sm:-top-16 left-4 sm:left-7">
                                <Image src={'/images/hero-sec/new-user-img.png'} alt="user-img" width={145} height={145} className="border-4 border-white rounded-full" />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                            </div>
                            <a
                                href="https://hits.seeyoufarm.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Profile hit counter"
                                className="absolute right-4 top-4 sm:right-7 sm:top-7 inline-flex items-center rounded-full border border-primary/10 bg-white/95 px-3 py-2 shadow-sm transition-colors hover:bg-primary/5"
                            >
                                <img
                                    src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcaroljacob.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"
                                    alt="Hits badge"
                                    className="h-5 w-auto"
                                />
                            </a>
                            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                                <div className="flex flex-col gap-3 pt-16 sm:pt-20 text-left">
                                    <div className="space-y-1">
                                        <h1>Carol Jacob</h1>
                                        <p className="text-violet-700 font-normal">B.Tech Biotechnology (2022 – 2026)</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary">
                                        <Image src={'/images/icon/map-icon.svg'} alt="map-icon" width={20} height={20} />
                                        <p>New Delhi</p>
                                    </div>
                                    <p className="max-w-2xl text-secondary">
                                        Dynamic individual with a strong foundation in biosciences and technology, complemented by hands-on laboratory experience.
                                    </p>
                                </div>

                                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 md:gap-3 pt-1">
                                    <a href="tel:+918762117198" className="inline-flex items-center rounded-full border border-primary/10 bg-white px-4 py-2 text-sm text-primary hover:bg-primary/5 transition-colors">(+91) 8762117198</a>
                                    <a href="mailto:caroljacob@karunya.edu.in" className="inline-flex items-center rounded-full border border-primary/10 bg-white px-4 py-2 text-sm text-primary hover:bg-primary/5 transition-colors">caroljacob@karunya.edu.in</a>
                                    <Link
                                        href="https://www.linkedin.com/in/carol-jacob-cj"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="LinkedIn profile"
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/10 bg-white hover:bg-primary/5 transition-colors"
                                    >
                                        <Image src="/images/icon/linkedin-icon.svg" alt="LinkedIn" width={18} height={18} />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

