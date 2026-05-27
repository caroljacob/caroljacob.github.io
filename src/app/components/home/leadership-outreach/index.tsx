import { leadershipAndOutreach } from "../../../../data/portfolio-data";

const LeadershipOutreach = () => {
    const sections = [
        {
            title: 'Leadership Roles',
            items: leadershipAndOutreach.leadershipRoles,
        },
        {
            title: 'NCC Training & Camps',
            items: leadershipAndOutreach.nccTrainingAndCamps,
        },
        {
            title: 'Competitions & Recognitions',
            items: leadershipAndOutreach.recognitions,
        },
        {
            title: 'Event Hosting & Outreach',
            items: leadershipAndOutreach.outreachAndEvents,
        },
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Leadership & Outreach</p>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16 grid gap-6">
                            {sections.map((section, index) => (
                                <div key={index} className="rounded-[1.5rem] border border-primary/10 bg-white p-5 sm:p-6">
                                    <h5 className="font-semibold">{section.title}</h5>
                                    <div className="mt-3 grid gap-3">
                                        {section.items?.map((item: string, itemIndex: number) => (
                                            <div key={itemIndex} className="flex items-start gap-2 text-sm text-secondary">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeadershipOutreach;
