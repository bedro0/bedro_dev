export default function NavBar() {
    return (
        <nav className="text-green-100 my-8 mx-8 sm:text-3xl text-lg flex justify-between">
            <div>
                <a className="sm:mx-8 mx-1" href="/">bedro.dev</a>
                <a className="sm:mx-8 mx-1" href="#projects">Projects</a>
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
            platform: "GitHub",
            url: "https://github.com/bedro0",
            logo: "GitHub_Invertocat_White.svg"
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/bedro0/",
            logo: "InBug-White.png"
        },
        {
            platform: "Twitch",
            url: "https://www.twitch.tv/bedro_dev",
            logo: "glitch_flat_white.svg"
        }
    ]
    return (
        <div className="flex">
            {socials.map(({ platform, url, logo }) => (
                <a
                    className="mx-2 hover:cursor-pointer"
                    key={platform}
                    href={url}>
                    <img
                        className="w-8 mx-0.5"
                        src={`/src/assets/${logo}`}
                        alt={platform}
                    />
                </a>
            ))}
        </div>
    )
}