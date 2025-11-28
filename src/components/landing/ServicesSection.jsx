import SectionHeader from "../SectionHeader";
import AnimatedWrapper from "../AnimatedWrapper";
import { SERVICES } from "../../data/landingData";
import Button from "../Button";
import Carousel from "../Carousel";

export default function ServicesSection() {
    return (
        <section className="bg-[url('./assets/services.png')] bg-cover bg-center py-20 h-[100vh]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col   md:justify-between gap-6 mb-8 ">
                    <div className="max-w-2xl relative text-start">

                        <h2 className="relative z-11111 text-6xl font-medium text-black leading-tight">
                            <span className="text-[#3FD797]">Reliable Services</span> to Guide Your Investments </h2>
                    </div>
                    <div className="justify-between  flex  w-full">
                        <p className="mt-3 text-xl mb-2 text-start leading-relaxed w-[30%]"> Discover handpicked properties in Lagos's most desirable locations. </p>
                        <Button className="self-start md:self-end border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2"> View All →
                        </Button>
                    </div>
                </div>
                {/* <SectionHeader
                title="Reliable Services to Guide Your Investments"
                subtitle="Essential services designed to make buying, owning, and upgrading property seamless."
            /> */}
                <Carousel
                    items={SERVICES}
                    renderItem={(card) => (
                        <AnimatedWrapper>
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">

                                {/* Image Placeholder */}
                                <div
                                    className="w-full h-[60vh] bg-slate-300 relative bg-cover bg-center"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >
                                    <div className="">
                                        {/* Content */}
                                        <div className="p-6 absolute top-0 text-center text-white w-full 
                                                        backdrop-blur-sm 
                                                        bg-gradient-to-b from-black/60 via-black/30 to-transparent">

                                            
                                            <h3 className="text-4xl font-medium mb-1">{card.title}</h3>
                                            <p className="text-white-600 text-lg mb-2">{card.description}</p>

                                        </div>
                                    </div>



                                </div>


                            </div>
                        </AnimatedWrapper>
                    )}
                />
            </div>
        </section>
    );
}
