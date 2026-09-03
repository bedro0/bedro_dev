import logoGithub from "@/assets/GitHub_Invertocat_White.svg"
import logoLinkedIn from "@/assets/linkedin.svg"
import logoTwitch from "@/assets/glitch_flat_white.svg"
import logoLocation from "@/assets/location.svg"
import { EnvelopeIcon, ListIcon } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import IconMask from "@/components/IconMask"
import ThemeToggle from "./ThemeToggle"
import { Button } from "./ui/button"
export default function Header() {
    const [hamburgerMenuEnabled, setHamburgerMenuEnabled] = useState(false)
    return (
        <header className="sticky top-0 z-50 py-8 px-8 xl:px-64 bg-accent">
            <nav className="text-foreground">
                <div className="flex justify-between whitespace-nowrap">
                    <div className="flex items-center">
                        <a className="text-3xl" href="/">bedro.dev</a>
                        <div className="flex items-center">
                            <Location />
                            <div className="hidden md:inline"><Socials /></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="hidden lg:inline text-3xl">
                            <a className="sm:mx-8 mx-1" href="/blog">Blog</a>
                            <a className="sm:mx-8 mx-1" href="/about">About</a>
                        </div>
                        <ThemeToggle />
                        <div className="lg:hidden flex shrink-0">
                            <Button
                                variant="outline"
                                size="icon-lg"
                                aria-label="Menu"
                                className="flex items-center"
                                onClick={() => {
                                    setHamburgerMenuEnabled(!hamburgerMenuEnabled)
                                }}
                            >
                                <ListIcon />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="block md:hidden mt-6"><Socials /></div>
                    <div></div>
                    {hamburgerMenuEnabled && <div>
                        <div className="lg:hidden flex flex-col items-end gap-2 text-xl">
                            <a href="/blog">Blog</a>
                            <a href="/about">About</a>
                        </div>
                    </div>}
                </div>
            </nav>
        </header>
    )
}

function Socials() {
    const socials = [
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
        <div className="flex gap-2 items-center justify-center">
            <a className="hover:cursor-pointer shrink-0 flex items-center"
                href="mailto:bedro@loonartech.net"
            >
                <EnvelopeIcon size="48"></EnvelopeIcon>
            </a>
            {socials.map(({ platform, url, logo }) => (
                <a
                    className="hover:cursor-pointer shrink-0 flex items-center"
                    key={platform}
                    href={url}>
                    <RenderLogo src={logo.src} alt={platform + " logo"} className="mx-0.5" />
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

    return <div className="relative text-foreground">
        <div className="peer flex justify-center items-center px-8 cursor-default min-w-8 lg:text-3xl text-lg">
            <RenderLogo src={logoLocation.src} alt="Location" className="mr-2" />
            <p className="font-bold">{city}</p>
        </div>
        <p className="text-xl opacity-0 peer-hover:opacity-100 invisible peer-hover:visible transition-opacity duration-100 ease-in-out absolute z-10 border-2 border-border bg-accent  text-foreground rounded-lg top-full left-1/2 -translate-x-1/2 translate-y-1/4 p-2">{time}</p>
    </div>
}

function RenderLogo({
    src,
    alt,
    className = "",
}: {
    src: string
    alt: string
    className?: string
}) {
    return <IconMask src={src} alt={alt} className={`h-8 w-8 bg-foreground ${className}`} />
}