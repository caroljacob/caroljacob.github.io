import { projectOverview } from "../../../../data/portfolio-data";
import SectionHeading from "../section-heading";
import SectionBackdrop from "../section-backdrop";

const SideProjects = () => {
    return (
        <section>
            <div className="container">
                <SectionBackdrop accent="radial-gradient(circle, rgba(255, 204, 128, 0.34) 0%, rgba(255, 204, 128, 0.12) 36%, transparent 72%)">
                    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <SectionHeading
                            eyebrow="Selected experiments"
                            title="Side Projects"
                        />
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="max-w-3xl mx-auto px-4 sm:px-7 py-8 grid gap-3 sm:grid-cols-2">
                            {projectOverview.sideProjects.map((project, index) => (
                                <div key={index} className="rounded-[1.35rem] border border-primary/10 bg-white px-4 py-4 shadow-sm transition-colors hover:border-primary/20 hover:bg-primary/5/30">
                                    <p className="text-[11px] tracking-[2px] uppercase text-primary/45">Project {String(index + 1).padStart(2, "0")}</p>
                                    <h5 className="mt-2 leading-tight text-primary">{project?.name}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionBackdrop>
            </div>
        </section>
    )
}

export default SideProjects;
