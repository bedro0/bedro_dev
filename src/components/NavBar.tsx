export default function NavBar() {
    return (
        <nav className="text-green-100 my-8 mx-8 text-3xl flex justify-between">
            <a href="/">bedro.dev</a>
            <div>
                <Socials />
            </div>
        </nav>
    )
}

function Socials() {
    const socials = [
        {
            platform: "GitHub",
            url: "https://github.com/bedro0"
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/bedro0/"
        },
        {
            platform: "Twitch",
            url: "https://www.twitch.tv/bedro_dev"
        }
    ]
    return (
        <div>
            {socials.map(({ platform, url }) => (
                <a
                    className="mx-2"
                    key={platform}
                    href={url}>
                    {platform}
                </a>
            ))}
        </div>
    )
}