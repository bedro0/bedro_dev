import type { ReactNode } from "react";

export type DisplaySectionProps = {
    title: string;
    href: string;
    children: ReactNode;
};

export default function DisplaySection({ title, href, children }: DisplaySectionProps) {
    return <div>
        <a href={href} className="inline-block w-fit hover:text-sidebar-primary"><h3 className="text-4xl">{title}</h3></a>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 my-8">
            {children}
        </div>
    </div>
}
