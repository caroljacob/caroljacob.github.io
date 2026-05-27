import { posterPresentations } from "../../../../data/portfolio-data";
import SectionHeading from "../section-heading";
import SectionBackdrop from "../section-backdrop";

const PosterPresentations = () => {
    return (
        <section>
            <div className="container">
                <SectionBackdrop accent="radial-gradient(circle, rgba(153, 220, 255, 0.34) 0%, rgba(153, 220, 255, 0.12) 36%, transparent 72%)">
                    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <SectionHeading
                            eyebrow="Research output"
                            title="Poster Presentations"
                            description="Key poster work surfaced as compact cards for easier scanning."
                        />
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="max-w-3xl mx-auto px-4 sm:px-7 py-8 grid gap-3 sm:grid-cols-2">
                            {posterPresentations.map((p: string, i: number) => (
                                <div key={i} className="rounded-[1.35rem] border border-primary/10 bg-white px-4 py-4 shadow-sm">
                                    <p className="text-[11px] tracking-[2px] uppercase text-primary/45">Poster {String(i + 1).padStart(2, "0")}</p>
                                    <p className="mt-2 text-sm leading-6 text-primary">{p}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionBackdrop>
            </div>
        </section>
    )
}

export default PosterPresentations;
