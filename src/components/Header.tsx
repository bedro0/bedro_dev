import githubLogo from "../assets/GitHub_Invertocat_White.svg"
import linkedinLogo from "../assets/linkedin.svg"
import twitchLogo from "../assets/glitch_flat_white.svg"
import emailLogo from "../assets/envelope.svg"

export default function Header() {
    return (
        <nav className="text-green-100 my-8 mx-8 sm:text-3xl text-lg flex justify-between whitespace-nowrap">
            <div>
                <a className="sm:mx-8 mx-1" href="/">bedro.dev</a>
                <a className="sm:mx-8 mx-1 hidden sm:inline" href="/blog">Blog</a>
            </div>
            <div className="flex items-center">
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
            logo: emailLogo

        },
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
                    className="mx-2 hover:cursor-pointer min-w-8 "
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