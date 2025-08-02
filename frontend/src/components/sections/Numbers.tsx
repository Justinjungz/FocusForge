import { Container } from "../shared/Container"

export const Numbers = () => {
    return (
        <section
            className="relative mt-12 md:mt-16">
            <Container className="flex justify-center align-center">
                <div
                    className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg
             border border-box-border shadow-lg shadow-box-shadow 
             grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:divide-x divide-box-border">
                    <div className="text-center px-2">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">60,000,000+</h2>
                        <p className="mt-2 text-heading-3 px-5">individuals meet the clinical criteria for gaming disorder</p>
                    </div>
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">20%-25%</h2>
                        <p className="mt-2 text-heading-3">of Adults are chronic procrastinators</p>
                    </div>
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">50%</h2>
                        <p className="mt-2 text-heading-3">of College students are consistently procrastinating</p>
                    </div>
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">80%-95%</h2>
                        <p className="mt-2 text-heading-3">of College students admit to procrastinating</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};