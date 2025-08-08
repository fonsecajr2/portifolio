"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRef } from "react";
import emaijs from "emailjs-com";

import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const info = [
        {
            icon: <FaPhoneAlt />,
            title: "Phone",
            description: "(+91) 92116 98442",
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            description: "sheltonfonsecad@gmail.com",
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Address",
            description: "Sohna, Haryana, India - 122103",
        },
];

import { motion } from "framer-motion";

export default function page() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emaijs
        .sendForm(
            "service_ib8g1wq",
            "template_d5gsoog",
            form.current,
            "YG7UbkqiRRb-fwmkf",
        )
        .then(
            () => {
                alert("Message sent successfully!");
            },
            (error) => {
                alert("Failed to send message: " + error.text);
            }
        )
    }

    return (
        <motion.section 
            initialinitial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto"> 
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounde-xl">
                            <h3 className="text-4xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60">
                                I’m a backend developer passionate about building fast, secure, and reliable systems. Skilled in TypeScript, Express.js, MongoDB, MySQL, and the MERN stack, I create clean and scalable solutions that power great user experiences.
                            </p>

                            {/* input */}
                            <div className="grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" name="first_name" placeholder="First Name" required/>
                                <Input type="lastname" name="last_name" placeholder="Last Name" required/>
                                <Input type="email" name="email" placeholder="Email Address" required/>
                                <Input type="phone" placeholder="Phone Number"/>
                            </div>

                            {/* select */}
                            <Select name="service">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">UI/UX Design</SelectItem>
                                        <SelectItem value="mst">Logo Design</SelectItem>
                                        <SelectItem value="inf">Info</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* textarea */}
                            <Textarea className="h-[200px]" placeholder="Type your message here." name="message" required/>

                            {/* button */}
                            <Button size="md" className="max-w-40" type="submit">Send message</Button>
                        </form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}