import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";


export const CTA = () => {
    return ( <section className="pb-20 relative">
        <Container>
            <div className="relative rounded-2xl overflow-hidden">
                <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                        Level up</span> in life so you can{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">level up</span> in the game.
                    </h1>
                    <Paragraph className="pt-10">
                        FocusForge helps you stay on top of your goals by turning productivity into progress. Set your tasks, earn your gaming time, 
                        and make every completed to-do a win—both in real life and on screen. With built-in accountability and time tracking, 
                        it's the ultimate tool for gamers who want to stay focused without sacrificing what they love.
                    </Paragraph>
                    <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
                        <Button> Get in Touch</Button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    )
};