import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { Container } from "../shared/Container";
import { services } from "../../utility/services-data";
import { Service } from "../cards/Service";

export const Services = () => {
    return <section id="services">
        <Container className="space-y-10 md:space-y-12">
            <div className="text-center max-w3xl mx-auto space-y-4">
                <Title> Our Services</Title>
                <Paragraph>
                    FocusForge offers smart tools that help you set gaming limits, track your productivity, 
                    and unlock game time only after you've earned it—turning your to-do list into a real-life power-up system.
                </Paragraph>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map((service, key) => (
                    <Service 
                    key={key}
                    title={service.title} 
                    description={service.description} 
                    icon={service.icon}
                   />
                ))}
            </div>
        </Container>
    </section>
};