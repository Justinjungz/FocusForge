import { Container } from "../shared/Container";
import happy from "../../assets/happy.jpeg";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { Info } from "../cards/Info";

export const AboutUs = () => {
    return ( 
    <section id="about-us"> 
        <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
            <div className="w-full md:w-5/12 lg:w-1/2">
                <div className="w-full h-80 sm:h-96 relative">
                    <img src={happy} alt="Our mission for productivity" className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10" />
                </div>
            </div>
            <div 
             className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
                <Title> About Us </Title>
                <Paragraph>
                    FocusForge transforms how you manage tasks by turning gaming into a motivational reward. 
                    Our platform empowers you to stay focused, finish what matters most, and earn your way back to play — 
                    keeping you accountable and in control of your time.
                </Paragraph>
                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                    <Info title="Mission" description="Our mission is to help individuals overcome procrastination, complete what matters most, and get back to doing what they love.">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="white" 
                            className="w-6 h-6">
                            <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/>
                            <path d="M19 17V5a2 2 0 0 0-2-2H4"/>
                        </svg>

                    </Info>
                    <Info title="Vision" description="Our vision is to help people take control of their time, overcome procrastination, and balance productivity with their hobbies.">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                             viewBox="0 0 24 24" 
                             fill="white"
                             className="w-6 h-6"
                             >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z"/>
                            <circle cx="12" cy="12" r="3" fill="none" stroke="black" strokeWidth={2}/>
                            </svg>

                    </Info>
                </div>
            </div>
        </Container>
    </section>
    )
};