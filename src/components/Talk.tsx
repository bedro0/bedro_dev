import { socials } from "@/lib/socials";

const email = socials.find((social) => social.platform === "Email")?.url ?? "";

export default function Talk() {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-4xl w-fit">Get in Touch</h3>
            <p className="text-2xl">
                Looking for freelance work or a full-time role, but I'll also take your weird project ideas.
            </p>
            <a className="w-fit text-lg text-sidebar-primary" href={email}>
                {email.replace("mailto:", "")}
            </a>
        </div>
    );
}
