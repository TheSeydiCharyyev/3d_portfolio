import LogoSections from "./components/LogoSections";
import NavBar from "./components/NavBar";
import Hero from "./sections/hero"
import ShowcaseSection from "./sections/ShowcaseSection"

const app = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSections />

        </>


    )
}

export default app;