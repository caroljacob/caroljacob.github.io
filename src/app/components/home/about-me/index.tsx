import { Badge } from "@/components/ui/badge";
import SectionBackdrop from "../section-backdrop";

const AboutMe = () => {
    const skills = [
        "Phase Contrast Microscopy",
        "Aseptic Techniques",
        "Stem Cell Culture",
        "Microbiology Methods & Antibiotic Testing",
        "Cell Culture Maintenance",
        "Leadership & Teamwork",
        "Event Hosting & Science Outreach",
        "Biomaterials & Biocompatibility",
        "Scientific Writing & Communication",
        "Basic Bioinformatics Concepts",
    ];

    const certifications = [
        "AI in Healthcare",
        "Introduction to Medical Biochemistry",
        "Biomaterials Biocompatibility",
        "Molecular Biology and Biotechnology Principles",
        "Biomaterials for Bioprinting",
        "Preclinical Basics: Toxicity",
        "Bioimaging & Literature",
        "Cell Signalling: Communication at the Molecular Level",
        "Pharmaceutical Project Management",
        "Structural Biology",
        "Diploma in Drug Development",
        "Cardiovascular Pharmacology",
        "Vaccines and the Immune System",
        "Understanding Molecular Biology",
        "Basics of Molecular Genetics",
        "The Fundamentals of Chromatography",
    ];

    return (
        <section>
            <div className="container">
                <SectionBackdrop accent="radial-gradient(circle, rgba(122, 162, 255, 0.34) 0%, rgba(122, 162, 255, 0.12) 36%, transparent 72%)">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About</p>
                            <h5 className="text-secondary font-normal">Detail-oriented and innovative, with proven leadership skills and a commitment to impactful research. Eager to contribute to biotechnology projects that benefit society.</h5>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Skills</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {skills?.map((value, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Certifications</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-secondary">
                                {certifications.map((c, i) => (
                                    <div key={i} className="py-1">• {c}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionBackdrop>
            </div>
        </section>
    )
}

export default AboutMe