import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/fonsecajr2/"},
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/fonseca-jr/"},
    { icon: <FaYoutube />, path: ""},
    { icon: <FaTwitter />, path: "https://x.com/fnsc2k19"},
]

export default function Social({containerStyle, iconStyle}) {
    return (
        <div className={containerStyle}>
            {socials.map((item, index) =>{
                return (
                    <Link key={index} href={item.path} className={iconStyle} target="_blank">
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    );
}