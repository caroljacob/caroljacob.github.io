import Image from "next/image"
import { experienceData } from "../../../../data/portfolio-data";
import SectionHeading from "../section-heading";
import SectionBackdrop from "../section-backdrop";

const Experience = () => {
    return (
        <section>
            <div className="container">
                <SectionBackdrop accent="radial-gradient(circle, rgba(159, 168, 218, 0.34) 0%, rgba(159, 168, 218, 0.12) 36%, transparent 72%)">
                    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <SectionHeading
                            eyebrow="Professional timeline"
                            title="Experience"
                            description="Roles, scope, and the kind of work I was responsible for across research and training."
                        />
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16 ">
                            {experienceData?.map((value: any, index: any) => {
                                return (
                                    <div
                                        key={index}
                                            className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0">
                                            <Image src={value?.icon} alt="icon" width={32} height={19} />
                                            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-2 md:gap-6 md:items-start">
                                                <div className="min-w-0">
                                                    <h5 className="text-left break-words">{value?.role}</h5>
                                                    <p className="mt-1 text-sm text-secondary">{value?.location}</p>
                                                </div>
                                                {(value?.startYear || value?.endYear) ? (
                                                    <div className="flex items-center md:justify-end gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3 md:shrink-0">
                                                        <div className="w-4 h-2 rounded-sm bg-primary/10" />
                                                        <p className="text-sm xs:text-base text-primary whitespace-normal text-left md:text-right">
                                                            {value?.startYear && value?.endYear && value?.startYear !== value?.endYear
                                                                ? `${value.startYear} – ${value.endYear}`
                                                                : value?.startYear || value?.endYear}
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div className="hidden md:block md:w-24" />
                                                )}
                                        </div>
                                        <ul>
                                            {value?.bulletPoints?.map((point: any, index: any) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2 text-base font-normal text-secondary"
                                                    >
                                                        <span className="w-2.5 h-2.5 text-secondary">•</span>
                                                        {point}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </SectionBackdrop>
            </div>
        </section>

    )
}

export default Experience