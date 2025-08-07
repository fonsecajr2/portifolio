"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    selectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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
]

export default function page() {
    return (
        <div>
        contact component
        </div>
    );
}