import type { Icon } from "@phosphor-icons/react";
import { EnvelopeIcon, FileTextIcon, GithubLogoIcon, LinkedinLogoIcon, TwitchLogoIcon } from "@phosphor-icons/react";

export type Social = {
    platform: string;
    url: string;
    Logo: Icon;
    hoverColor?: string;
};

export const socials: Social[] = [
    {
        platform: "Resume",
        url: "/resume.pdf",
        Logo: FileTextIcon
    },
    {
        platform: "Email",
        url: "mailto:bedro@loonartech.net",
        Logo: EnvelopeIcon,
    },
    {
        platform: "GitHub",
        url: "https://github.com/bedro0",
        Logo: GithubLogoIcon,
        hoverColor: "#181717",
    },
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/bedro0/",
        Logo: LinkedinLogoIcon,
        hoverColor: "#0a66c2",
    },
    {
        platform: "Twitch",
        url: "https://www.twitch.tv/bedro_dev",
        Logo: TwitchLogoIcon,
        hoverColor: "#9146FF",
    },
];
