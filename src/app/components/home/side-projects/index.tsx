import { projectOverview } from "../../../../data/portfolio-data";

const SideProjects = () => {
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex items-center justify-between gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Side Projects</p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="max-w-3xl mx-auto px-4 sm:px-7 py-8 grid gap-2">
                            {projectOverview.sideProjects.map((project, index) => (
                                <div key={index} className="rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm text-primary shadow-sm">
                                    {project?.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SideProjects;
