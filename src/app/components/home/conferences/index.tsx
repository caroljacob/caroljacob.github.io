import { conferences } from "../../../../data/portfolio-data";

const Conferences = () => {
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Conferences & Workshops</p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="max-w-3xl mx-auto px-4 sm:px-7 py-8 grid gap-2">
                            {conferences?.map((c: string, i: number) => (
                                <div key={i} className="text-sm text-secondary">• {c}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Conferences;
