import LogoSections from "./sections/LogoSections";
import NavBar from "./components/NavBar";
import Hero from "./sections/hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import FeatureCards from "./sections/FeatureCards";

const app = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSections />
            <FeatureCards />

        </>


    )
}

export default app;