import { socials } from "@/lib/socials";
import { brandHoverVars } from "@/lib/color";
import { Button } from "./ui/button";

export default function Connect() {
    return (
        <div className="flex flex-col sm:justify-between gap-8">
            <div className="flex flex-col gap-3 sm:max-w-md">
                <h3 className="text-4xl">About</h3>
                <p className="text-muted-foreground">
                    I'm Badri (bedro), based in NYC.
                    I'm a full-stack developer with a primary focus on backend.
                    Outside of my day job in IT infrastructure, I take on freelance projects.
                    I also build personal projects, which I stream on Twitch.
                </p>
                <a className="w-fit hover:text-sidebar-primary" href="/about">
                    Read more →
                </a>
            </div>
            <div className="flex flex-wrap gap-2">
                <Button size="lg">
                    <a href="#projects">View Projects</a>
                </Button>
                {socials.map(({ platform, url, Logo, hoverColor }) => (
                    <a
                        key={platform}
                        href={url}
                        className={`flex items-center gap-2 bg-accent rounded-full px-4 py-2 transition-colors ${hoverColor ? "hover:text-(--brand-hover-light) dark:hover:text-(--brand-hover-dark)" : "hover:text-sidebar-primary"}`}
                        style={brandHoverVars(hoverColor) as React.CSSProperties}
                        target="_blank"
                    >
                        <Logo size={20} />
                        <span className="text-sm">{platform}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
