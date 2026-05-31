import githubLogo from "../assets/GitHub_Invertocat_White.svg"
import linkedinLogo from "../assets/linkedin.svg"
import twitchLogo from "../assets/glitch_flat_white.svg"
import emailLogo from "../assets/envelope-regular-full.svg"

export default function NavBar() {
    return (
        <nav className="text-green-100 my-8 mx-8 sm:text-3xl text-lg flex justify-between">
            <div>
                <a className="sm:mx-8 mx-1" href="/">bedro.dev</a>
                <a className="sm:mx-8 mx-1 hidden sm:inline" href="#projects">Projects</a>
            </div>
            <div className="flex items-center">
                <Socials />
            </div>
        </nav>
    )
}

function Socials() {
    const emailAddress= "bedro@loonartech.net"
    const socials = [
        {
            platform: "GitHub",
            url: "https://github.com/bedro0",
            logo: githubLogo
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/bedro0/",
            logo: linkedinLogo
        },
        {
            platform: "Twitch",
            url: "https://www.twitch.tv/bedro_dev",
            logo: twitchLogo
        }
    ]
    return (
        <div className="flex items-center justify-center">
            {socials.map(({ platform, url, logo }) => (
                <a
                    className="mx-2 hover:cursor-pointer"
                    key={platform}
                    href={url}>
                    <img
                        className="h-8 mx-0.5"
                        src={logo.src}
                        alt={platform + " logo"}
                    />
                </a>
            ))}
            <a
            className="mx-2 hover:cursor-pointer"
            key="Email"
            href={`mailto:${emailAddress}`}
            >
                <img
                className="h-10 mx-0.5"
                src={emailLogo.src}
                alt="Email"
                >

                </img>
            </a>
        </div>
    )
}