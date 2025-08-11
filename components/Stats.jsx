'use client';
import CountUp from "react-countup";

const stats = [
    {
        num: 0.6,
        text: "Years of Experience",
    },
    {
        num: 5,
        text: "Projects Completed",
    },
    {
        num: 5,
        text: "Technologies Mastered",
    },
    {
        num: 160,
        text: "Code Commits",
    },
]

export default function Stats() {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 xl:gap-40 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div 
                                key={index}
                                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            >
                                <CountUp 
                                    end = {item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl font-extrabold xl:text-6xl"
                                />
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}