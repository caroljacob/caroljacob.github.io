import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Experience from "./components/home/experience"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import ProjectOverview from "./components/home/project-overview"
import SideProjects from "./components/home/side-projects"
import Conferences from "./components/home/conferences"
import PosterPresentations from "./components/home/poster-presentations"
import Awards from "./components/home/awards"
import LeadershipOutreach from "./components/home/leadership-outreach"
import LinkedinCarousel from "./components/home/linkedin-carousel"

const page = () => {
  return (
    <main>
      <HeroSection/>
      <Divider/>
      <LinkedinCarousel/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      <FeaturedWork/>
      <Divider/>
      <Experience/>
      <Divider/>
      <Education/>
      <Divider/>
      <ProjectOverview/>
      <Divider/>
      <SideProjects/>
      <Divider/>
      <Conferences/>
      <Divider/>
      <PosterPresentations/>
      <Divider/>
      <Awards/>
      <Divider/>
      <LeadershipOutreach/>
      <Divider/>
    </main>
  )
}

export default page