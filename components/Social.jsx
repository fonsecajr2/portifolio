import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: ""},
    { icon: <FaLinkedin />, path: ""},
    { icon: <FaYoutube />, path: ""},
    { icon: <FaTwitter />, path: ""},
]

export default function Social() {
    return (
        <div>
        Social component
        </div>
    );
}