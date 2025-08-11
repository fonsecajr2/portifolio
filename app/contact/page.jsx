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
            className="h-full flex items-center"
        >
            <div className="container mx-auto m-auto"> 
                <div className="flex flex-col xl:flex-row gap-[30px] items-center justify-between h-full">
                    {/* form */}
                    <div className="xl:w-[54%] xl:order-none rounded-xl p-4 flex flex-col gap-4 bg-[#27272c]">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 p-3 bg-[#27272c] rounde-xl">
                            <h3 className="text-3xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60 text-base">
                                Whether you’re building a product or growing a team, I’m ready to collaborate and create something exceptional.
                            </p>

                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            <Textarea className="h-[100px]" placeholder="Type your message here." name="message" required/>

                            {/* button */}
                            <Button size="md" className="max-w-[160px]  bg-green-400 hover:bg-green-500" type="submit">Send message</Button>
                        </form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[62px] xl:h-[62px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[22px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-lg">{item.description}</h3>
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