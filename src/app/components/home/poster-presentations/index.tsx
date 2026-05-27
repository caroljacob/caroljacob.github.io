import { posterPresentations } from "../../../../data/portfolio-data";

const PosterPresentations = () => {
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Poster Presentations</p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="max-w-3xl mx-auto px-4 sm:px-7 py-8 grid gap-2">
                            {posterPresentations.map((p: string, i: number) => (
                                <div key={i} className="text-sm text-secondary">• {p}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PosterPresentations;
