import logoGithub from "@/assets/GitHub_Invertocat_White.svg"
import logoLinkedIn from "@/assets/linkedin.svg"
import logoTwitch from "@/assets/glitch_flat_white.svg"
import logoEmail from "@/assets/envelope.svg"
import logoLocation from "@/assets/location.svg"
import { useEffect, useState } from "react"
// Todo add location
export default function Header() {
    return (
        <nav className="text-green-100 my-8 mx-8 sm:text-3xl text-lg flex justify-between whitespace-nowrap">
            <div>
                <a className="sm:mx-8 mx-1" href="/">bedro.dev</a>
                <a className="sm:mx-8 mx-1 hidden sm:inline" href="/blog">Blog</a>
            </div>
            <div className="flex items-center">
                <Location />
                <Socials />
            </div>
        </nav>
    )
}

function Socials() {
    const socials = [
        {
            platform: "Email",
            url: "mailto:bedro@loonartech.net",
            logo: logoEmail

        },
        {
            platform: "GitHub",
            url: "https://github.com/bedro0",
            logo: logoGithub
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/bedro0/",
            logo: logoLinkedIn
        },
        {
            platform: "Twitch",
            url: "https://www.twitch.tv/bedro_dev",
            logo: logoTwitch
        }
    ]
    return (
        <div className="flex items-center justify-center">
            {socials.map(({ platform, url, logo }) => (
                <a
                    className="mx-2 hover:cursor-pointer min-w-8"
                    key={platform}
                    href={url}>
                    <img
                        className="h-8 mx-0.5"
                        src={logo.src}
                        alt={platform + " logo"}
                    />
                </a>
            ))}
        </div>
    )
}

function Location() {
    const [time, setTime] = useState<string | null>(null);
    const city = "NYC"
    const timezone = 'America/New_York';

    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Date().toLocaleString('en-US', {
                    timeZone: timezone,
                    hour: "2-digit",
                    minute: "2-digit"
                })
            );
        };

        updateTime();

        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    })

    return <div className="relative text-white">
        <div className="peer flex justify-center items-center px-8 cursor-default min-w-8">
            <img className="h-8 mr-2"
                src={logoLocation.src}
                alt="Location"
            />
            <p className="font-bold">{city}</p>
        </div>
        <p className="text-xl opacity-0 peer-hover:opacity-100 invisible peer-hover:visible transition-opacity duration-100 ease-in-out absolute bg-green-900 rounded-lg top-full left-1/2 -translate-x-1/2 translate-y-1/4 p-2">{time}</p>
    </div>
}