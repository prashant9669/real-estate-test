import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import SectionHeader from "../SectionHeader";
import AnimatedWrapper from "../AnimatedWrapper";
import { TESTIMONIALS } from "../../data/landingData";

import Button from "../Button";


export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const total = TESTIMONIALS.length;

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % total);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + total) % total);
    };

    const progress = ((current + 1) / total) * 100;

    return (
        <section className=" container mx-auto bg-white flex gap-10 text-slate-900 py-16">
            <div className="flex flex-col justify-between max-w-lg px-6">
                <div>
                    <h2 className="text-5xl font-medium text-black leading-tight">
                        Real <span className="text-[#3FD797]">Stories</span>{" "}
                        From Satisfied Clients
                    </h2>

                    <p className="mt-4 text-lg text-slate-600 max-w-lg">
                        Discover trending areas and property values to make smarter
                        investment decisions.
                    </p>

                    <Button className="mt-6 border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2">
                        View All →
                    </Button>
                </div>

                <div className="flex justify-between items-center mt-8">
                    <p className="text-slate-600 flex flex-shrink-0 text-xl">
                        {String(current + 1).padStart(2, "0")} /{" "}
                        {String(total).padStart(2, "0")}
                    </p>

                    <div className="flex items-center gap-4 w-full mx-6">
                        <div className="w-full h-[3px] bg-slate-200 rounded-full">
                            <div
                                className="h-[3px] bg-emerald-500 rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 bg-white/10 border border-white/40 rounded-lg flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-sm"
                        >
                            ←
                        </button>

                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 text-black bg-white/10 border border-white/40 rounded-lg flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-sm"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>


            <div className="max-w-4xl mx-auto px-6">
                {/* VERTICAL CAROUSEL WRAPPER */}
                <div className="overflow-hidden">
                    <div
                        className="flex flex-col transition-transform duration-500"
                        style={{ transform: `translateY(-${current * 100}%)` }}
                    >
                        {TESTIMONIALS.map((testimonial) => (
                            <AnimatedWrapper key={testimonial.name}>
                                <div className="min-h-[220px] bg-slate-50 rounded-xl shadow p-6 border border-slate-200 flex gap-10  justify-between">
                                    {/* Dummy avatar image */}
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-[200px] h-[200px]  object-cover"
                                    />
                                    <div className="flex flex-col justify-between flex-1">
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                            "{testimonial.text}"
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <p className="font-semibold text-sm">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="text-[11px] text-slate-500">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-[11px] text-slate-400">
                                                {testimonial.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedWrapper>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}
