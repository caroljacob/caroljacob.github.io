import { awards, scholarships } from "../../../../data/portfolio-data";

const Awards = () => {
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Awards & Scholarships</p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="max-w-3xl mx-auto px-4 sm:px-7 py-8 grid gap-4">
                            <div>
                                <h5 className="font-semibold">Awards</h5>
                                <div className="mt-2 grid gap-2 text-sm text-secondary">
                                    {awards?.map((a: string, i: number) => (
                                        <div key={i}>• {a}</div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h5 className="font-semibold">Scholarships</h5>
                                <div className="mt-2 grid gap-2 text-sm text-secondary">
                                    {scholarships?.map((s: string, i: number) => (
                                        <div key={i}>• {s}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awards;
