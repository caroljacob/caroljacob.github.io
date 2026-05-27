import { projectOverview } from "../../../../data/portfolio-data";
import SectionHeading from "../section-heading";
import SectionBackdrop from "../section-backdrop";

const ProjectOverview = () => {
    return (
        <section>
            <div className="container">
                <SectionBackdrop accent="radial-gradient(circle, rgba(158, 197, 162, 0.34) 0%, rgba(158, 197, 162, 0.12) 36%, transparent 72%)">
                    <div className="flex flex-col max-w-3xl mx-auto gap-8 sm:gap-10 px-4 sm:px-7 py-9 md:py-16">
                        <SectionHeading
                            eyebrow="Final year project"
                            title="Project Overview"
                        />

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
                </SectionBackdrop>
            </div>
        </section>
    )
}

export default ProjectOverview