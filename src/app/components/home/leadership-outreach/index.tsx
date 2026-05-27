import { leadershipAndOutreach } from "../../../../data/portfolio-data";
import SectionHeading from "../section-heading";
import SectionBackdrop from "../section-backdrop";

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
                <SectionBackdrop accent="radial-gradient(circle, rgba(255, 171, 145, 0.34) 0%, rgba(255, 171, 145, 0.12) 36%, transparent 72%)">
                    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <SectionHeading
                            eyebrow="Community work"
                            title="Leadership & Outreach"
                        />
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16 grid gap-4 md:grid-cols-2">
                            {sections.map((section, index) => (
                                <div key={index} className="rounded-[1.35rem] border border-primary/10 bg-white p-5 shadow-sm">
                                    <p className="text-[11px] tracking-[2px] uppercase text-primary/45">{section.title}</p>
                                    <div className="mt-4 grid gap-3">
                                        {section.items?.map((item: string, itemIndex: number) => (
                                            <div key={itemIndex} className="flex items-start gap-2 text-sm text-primary">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionBackdrop>
            </div>
        </section>
    )
}

export default LeadershipOutreach;
