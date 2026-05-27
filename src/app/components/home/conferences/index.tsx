import { conferences } from "../../../../data/portfolio-data";
import SectionHeading from "../section-heading";
import SectionBackdrop from "../section-backdrop";

const Conferences = () => {
    return (
        <section>
            <div className="container">
                <SectionBackdrop accent="radial-gradient(circle, rgba(186, 180, 255, 0.34) 0%, rgba(186, 180, 255, 0.12) 36%, transparent 72%)">
                    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <SectionHeading
                            eyebrow="Public speaking"
                            title="Conferences & Workshops"
                            description="A concise timeline of talks, workshops, and scientific programs."
                        />
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="max-w-3xl mx-auto px-4 sm:px-7 py-8 grid gap-3">
                            {conferences?.map((c: string, i: number) => {
                                const yearMatch = c.match(/\((\d{4})\)$/);
                                const year = yearMatch?.[1] ?? "";
                                const title = yearMatch ? c.replace(/\s*\(\d{4}\)$/, "") : c;

                                return (
                                    <div key={i} className="grid gap-3 rounded-[1.35rem] border border-primary/10 bg-white px-4 py-4 shadow-sm sm:grid-cols-[5.25rem_1fr] sm:items-start">
                                        <div className="inline-flex w-fit items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] tracking-[2px] uppercase text-primary">
                                            {year || "Event"}
                                        </div>
                                        <p className="text-sm leading-6 text-primary">{title}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </SectionBackdrop>
            </div>
        </section>
    )
}

export default Conferences;
