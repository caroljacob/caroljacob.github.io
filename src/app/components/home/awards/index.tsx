import { awards, scholarships } from "../../../../data/portfolio-data";
import SectionHeading from "../section-heading";
import SectionBackdrop from "../section-backdrop";

const Awards = () => {
    return (
        <section>
            <div className="container">
                <SectionBackdrop accent="radial-gradient(circle, rgba(247, 203, 125, 0.34) 0%, rgba(247, 203, 125, 0.12) 36%, transparent 72%)">
                    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <SectionHeading
                            eyebrow="Recognition"
                            title="Awards & Scholarships"
                        />
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="max-w-3xl mx-auto px-4 sm:px-7 py-8 grid gap-4 md:grid-cols-2">
                            <div className="rounded-[1.35rem] border border-primary/10 bg-white p-5 shadow-sm">
                                <p className="text-[11px] tracking-[2px] uppercase text-primary/45">Awards</p>
                                <div className="mt-4 grid gap-3 text-sm text-primary">
                                    {awards?.map((a: string, i: number) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>{a}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[1.35rem] border border-primary/10 bg-white p-5 shadow-sm">
                                <p className="text-[11px] tracking-[2px] uppercase text-primary/45">Scholarships</p>
                                <div className="mt-4 grid gap-3 text-sm text-primary">
                                    {scholarships?.map((s: string, i: number) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>{s}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionBackdrop>
            </div>
        </section>
    )
}

export default Awards;
