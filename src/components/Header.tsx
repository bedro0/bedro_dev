import logoGithub from "@/assets/GitHub_Invertocat_White.svg"
import logoLinkedIn from "@/assets/linkedin.svg"
import logoTwitch from "@/assets/glitch_flat_white.svg"
import logoEmail from "@/assets/envelope.svg"
import logoLocation from "@/assets/location.svg"
import logoHamburger from "@/assets/hamburger.svg"
import { useEffect, useState } from "react"
export default function Header() {
    const [hamburgerMenuEnabled, setHamburgerMenuEnabled] = useState(false)
    return (
        <nav className="text-foreground my-8 mx-8">
            <div className="flex justify-between whitespace-nowrap">
                <div className="flex">
                    <a className="text-3xl" href="/">bedro.dev</a>
                    <div className="flex items-center">
                        <Location />
                        <div className="hidden md:inline"><Socials /></div>
                    </div>
                </div>
                <div className="hidden lg:inline text-3xl">
                    <a className="sm:mx-8 mx-1" href="/blog">Blog</a>
                    <a className="sm:mx-8 mx-1" href="/about">About</a>
                </div>
                <div className="lg:hidden inline shrink-0">
                    <button
                        onClick={() => {
                            setHamburgerMenuEnabled(!hamburgerMenuEnabled)
                        }}
                    >
                        <img className="h-8 mx-0.5 hover:cursor-pointer" alt="Expand" src={logoHamburger.src} />
                    </button>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="inline md:hidden my-6"><Socials /></div>
                <div></div>
                {hamburgerMenuEnabled && <div>
                    <div className="lg:hidden flex flex-col items-end gap-2 text-xl">
                        <a href="/blog">Blog</a>
                        <a href="/about">About</a>
                    </div>
                </div>}
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
                    className="mr-4 hover:cursor-pointer shrink-0"
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
        <div className="peer flex justify-center items-center px-8 cursor-default min-w-8 lg:text-3xl text-lg">
            <img className="h-8 mr-2"
                src={logoLocation.src}
                alt="Location"
            />
            <p className="font-bold">{city}</p>
        </div>
        <p className="text-xl opacity-0 peer-hover:opacity-100 invisible peer-hover:visible transition-opacity duration-100 ease-in-out absolute bg-primary rounded-lg top-full left-1/2 -translate-x-1/2 translate-y-1/4 p-2">{time}</p>
    </div>
}