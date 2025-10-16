import { Intro } from "./Intro";
import { Skills } from "./Skills";

export const Hero = () => {
    return (
        <section id="home" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">            
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
                <Intro />
                <Skills />
            </div>
        </section>
    )
}