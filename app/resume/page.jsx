"use client";

import { TimerIcon } from "lucide-react";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaPython,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// About data
const about = {
    title: "Software Developer Engineer",
    description: "I excel in coding, problem solving, and adapting to new challenges. My passion for technology drives me to continuously learn and improve my skills.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Fonseca Junior",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 92116 98442",
        },
        {
            fieldName: "Experience",
            fieldValue: "1 Year",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Mozambican",
        },
        {
            fieldName: "Email",
            fieldValue: "sheltonfonsecad@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Portuguese",
        },
    ]
}

// Experiwnce data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "Experience",
    description: "I have worked on various projects, honing my skills in software development and problem-solving. My experience includes working with diverse technologies and collaborating with teams to deliver high-quality solutions.",
    items: [
        {
            company: "Tech Solutions",
            position: "Software Developer",
            duration: "Jan 2022 - Present",
        },
        {
            company: "Tech Solutions",
            position: "Wordpress Developer",
            duration: "Jan 2022 - Present",
        },
        {
            company: "Tech Solutions",
            position: "Web Developer Trainee",
            duration: "Jan 2022 - Present",
        },
        {
            company: "Tech Solutions",
            position: "Web Developer Trainee",
            duration: "Jan 2022 - Present",
        },
        {
            company: "Tech Solutions",
            position: "Web Developer Trainee",
            duration: "Jan 2022 - Present",
        },  
    ]
}

// Education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "I have worked on various projects, honing my skills in software development and problem-solving. My experience includes working with diverse technologies and collaborating with teams to deliver high-quality solutions.",
    items: [
        {
            institution: "Unizambe University",
            degree: "Software Engineering",
            duration: "Jan 2023 - Nov 2023",
        },
        {
            instution: "GD Goenka University",
            degree: "Computer Science and Engineering",
            duration: "Jan 2024 - Present (Graduation Expected: Jul 2027)",
        },
    ]
}

// Skills data
const skills = {
    title: "My Skills",
    description: "my skills that i gain through my carrer",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"; 

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { animate, motion } from "framer-motion";

export default function Resume() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue='experience'
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent className="w-full" value="experience">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="nax-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return(
                                                <li 
                                                    key={index} 
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent className="w-full" value="education">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="nax-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return(
                                                <li 
                                                    key={index} 
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent className="w-full h-full" value="skills">
                            <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                        {
                                            skills.skillList.map((skill, index) => {
                                                return <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="flex bg-[#232329] justify-center h-[150px] w-full rounded xl items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all dutation-300">  
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent className="text-center">
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            }
                                        )}
                                    </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent className="w-full text-center xl:text-left" value="about">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}