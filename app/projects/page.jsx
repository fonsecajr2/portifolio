"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";

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
        category: "Full Stack",
        title: "Project 1",
        description: "A platform that simplifies scheduling between students and teachers with role-based dashboards, appointment booking and management, messaging, and administrative oversight for a smooth, organized experience. Please check the README.md on Github Repo for login details.",
        stack: [{name: "React"}, {name: "Firebase"}, {name: "Vite"}, {name: "Tailwind CSS"}],
        image: "/assets/projects/photo1.png",
        live: "https://student-teacher-appointment-eight.vercel.app/",
        github: "https://github.com/fonsecajr2/Student-Teacher-Appointment",
    },
    {
        num: "02",
        category: "Front-End",
        title: "Project 2",
        description: "A sleek, responsive music player that lets users play, pause, skip tracks, adjust volume, and navigate songs with ease. Displays track details and album art, and allows users to add or upload their own music to a personalized playlist.",
        stack: [{name: "React"}, {name: "Vite"}, {name: "Tailwind CSS"}, {name: "JavaScript"},],
        image: "/assets/projects/photo3.png",
        live: "https://music-player-amber-eight.vercel.app/",
        github: "https://github.com/fonsecajr2/music-player",
    },
    {
        num: "03",
        category: "Front-End",
        title: "Project 3",
        description: "A simple and intuitive task manager that lets users add, complete, delete, and view task details, with automatic saving so tasks remain even after closing the browser.",
        stack: [{name: "React"}, {name: "Uuid"}, {name: "Tailwind CSS"}],
        image: "/assets/projects/photo4.png",
        live: "https://todolist-26zf.vercel.app/",
        github: "https://github.com/fonsecajr2/todolist",
    },
]

export default function Projects() {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[70vh] flex flex-col justify-center py-12 xl:px-0 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    {/* Text Section */}
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            {/* project category */}
                            <h2 className="text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
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
                                <Link href={project.live} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github project button */}
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
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
                    {/* Image Section */}
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[500px] mb-7 mt-4"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* Overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                                            </div>

                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill alt="" className="object-cover"/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}

                            {/* slider buttons */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_32px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[34px] h-[34px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}