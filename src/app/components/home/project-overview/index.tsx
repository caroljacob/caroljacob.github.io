import { projectOverview } from "../../../../data/portfolio-data";

const ProjectOverview = () => {
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto gap-8 sm:gap-10 px-4 sm:px-7 py-9 md:py-16">
                        <div className="flex items-start justify-between gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Final Year Project</p>
                        </div>

                        <div className="rounded-[1.75rem] border border-primary/10 bg-white p-5 sm:p-6 shadow-sm">
                            <p className="text-xs tracking-[2px] text-primary/60 uppercase">Featured research work</p>
                            <h4 className="mt-3 leading-tight text-primary">
                                {projectOverview.finalYearProject.title}
                            </h4>
                            <p className="mt-4 text-secondary leading-7">
                                {projectOverview.finalYearProject.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {projectOverview.finalYearProject.tags.map((tag: string, index: number) => (
                                    <span key={index} className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-primary">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectOverview