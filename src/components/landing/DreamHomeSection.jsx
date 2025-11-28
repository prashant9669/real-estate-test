import Carousel from "../Carousel";
import AnimatedWrapper from "../AnimatedWrapper";
import Button from "../Button";
import textbg1 from "../../assets/bg.jpeg";
import { DREAM_HOME_CARDS } from "../../data/landingData";

export default function DreamHomeSection() {
    return (
        <section className="bg-[url('./assets/LAGOS_bg.png')] bg-cover bg-center py-20">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 ml-[100px]"> 
                    <div className="max-w-lg relative text-center"> 
                        <img src={textbg1} alt="" className="absolute w-[180px] -left-[90px] -top-5 -z-1 rounded-[20px]" />
                         <img src={textbg1} alt="" className="absolute w-[180px] -right-10 bottom-5 -z-1 rounded-[20px]" /> 
                         <h2 className="relative z-11111 text-6xl font-medium text-black leading-tight"> 
                            <span className="text-white">Fi</span>nd your{" "} 
                            <span className="text-[#3FD797]">dream home</span> in the city&apos;s heart </h2> 
                            </div> <div className="justify-self-end max-w-md flex flex-col w-[30%]"> 
                                <p className="mt-3 text-xl mb-2 text-end leading-relaxed"> Discover handpicked properties in Lagos's most desirable locations. </p> 
                                <Button className="self-start md:self-end border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2"> View All → 
                                </Button> 
                    </div> 
                </div>

                <Carousel
                    items={DREAM_HOME_CARDS}
                    renderItem={(card) => (
                        <AnimatedWrapper>
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">

                                <div
                                    className="w-full h-[60vh] bg-slate-300 relative bg-cover bg-center"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >



                                    <div className="">
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            {card.badgesTop.map((b) => (
                                                <span
                                                    key={b}
                                                    className="bg-white/95 px-3 py-1 rounded-full text-xs font-semibold shadow-md"
                                                >
                                                    {b}
                                                </span>

                                            ))}
                                        </div>
                                        {/* Content */}
                                        <div className="p-6 absolute bottom-0 bg-black text-white w-full bg-opacity-40 backdrop-blur-sm">
                                            <p className="text-2xl font-medium mb-1">
                                                {card.price}
                                            </p>
                                            <h3 className="text-xl font-medium mb-1">{card.title}</h3>
                                            <p className="text-white-600 text-sm mb-2">{card.location}</p>

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
