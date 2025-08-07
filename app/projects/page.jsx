"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub} from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Project 1",
        description: "Lorem Ipsum",
        stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Js"}],
        image: "/images/project1.jpg",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "backend",
        title: "Project 2",
        description: "Lorem Ipsum",
        stack: [{name: "ExpressJs"}, {name: "NodeJs"}, {name: "Js"}],
        image: "/images/project2.jpg",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "backend",
        title: "Project 3",
        description: "Lorem Ipsum",
        stack: [{name: "Phyton"}, {name: "Django"}, {name: "Html 5"}],
        image: "/images/project2.jpg",
        live: "",
        github: "",
    },
]

export default function Projects() {
    const [project, setProject] = useState(projects[0]);


    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                                {project.category} project
                            </h2>

                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>

                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {/* remove the comma after the last item */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                })}
                            </ul>

                            {/* border */}
                            <div className="border border-white/20"></div>

                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper></Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}