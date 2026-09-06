export type Job = {
    position: string;
    company: string;
    type: "Full Time" | "Part Time" | "Contract Work" | "Freelance";
    began: string;
    ended: string;
    headline: string;
    accomplishments: string[];
    skills: string[];
    showOnResume?: boolean;
}

export type Project = {
    title: string,
    headline: string,
    created: string,
    accomplishments: string[];
    skills: string[]
}
const jobs: Record<string, Job> = {
    copalion: {
        position: "Full-Stack Developer",
        company: "Copalion Advertising LLC",
        type: "Freelance",
        began: "Feb 2026",
        ended: "Present",
        headline: "Sole outside developer for an advertising agency, responsible for a Next.js/Prisma CRM and two marketing sites.",
        accomplishments: [
            "Built a lead-routing system that delivers qualified leads directly into each partner's own CRM in real time",
            "Designed a notification system that lets each partner choose which of their team members get alerted about new leads",
            "Built a tool that lets partners correct lead-assignment errors themselves, in one click, without contacting support"
        ],
        skills: [
            "Next.js",
            "Tailwind CSS",
            "Prisma",
            "React",
            "TypeScript",
            "PostgreSQL",
            "REST APIs",
            "Webhooks",
            "Real-time Systems",
            "CRM Integration",
            "Full-Stack Development",
            "Node.js"
        ]
    },
    leveldesk: {
        position: "IT Technician",
        company: "Leveldesk",
        type: "Full Time",
        showOnResume: false,
        began: "Aug 2024",
        ended: "Present",
        headline: "Technician at a small MSP managing IT infrastructure for 20+ SMB clients, from single-user offices to 100+ employee organizations.",
        accomplishments: [
            "Built and maintained a library of PowerShell/Bash scripts to automate user management, configuration, and software deployment, turning manual, error-prone runbooks into repeatable tooling",
            "Administered Active Directory, Microsoft 365, and cloud services (Azure/AWS) across multiple client tenants",
            "Root-caused recurring hardware, software, and network issues and shipped permanent fixes instead of workarounds, cutting repeat tickets"
        ],
        skills: [
            "PowerShell",
            "Bash",
            "AWS",
            "Active Directory",
            "Microsoft 365",
            "Azure",
            "Scripting & Automation",
            "Network Administration",
            "Endpoint Management",
            "IT Support",
            "Root Cause Analysis",
            "Multi-Tenant Administration"
        ]
    },
    "bate-transport": {
        position: "IT Specialist",
        company: "BATE Transportation LLC",
        type: "Contract Work",
        showOnResume: false,
        began: "Jul 2020",
        ended: "Jun 2024",
        headline: "Sole IT specialist for a transportation company, running help-desk support, infrastructure, and networking for office and vehicle fleet.",
        accomplishments: [
            "Built and maintained a centralized server with redundancies and backups, achieving 99.9% uptime for business-critical data and shared services",
            "Designed and implemented a SoHo network with full Ethernet connectivity across all workstations for reliable, efficient performance",
            "Equipped fleet vehicles with dual WAN routers and a Dockerized WireGuard VPN, giving drivers continuous data access regardless of location"
        ],
        skills: [
            "Systems Architecture",
            "Containerization",
            "Infrastructure Design",
            "Docker",
            "WireGuard",
            "Server Administration",
            "Backups",
            "VPN",
            "Networking",
            "Self-Hosted Infrastructure",
            "Endpoint Management",
            "Fleet Connectivity"
        ]
    }
}

const projects: Record<string, Project> = {
    "gta-radio": {
        title: "San Andreas Radio",
        headline: "Web-app that recreates the radio from Grand Theft Auto: San Andreas.",
        created: "Dec 2024",
        accomplishments: [
            "Built a custom playback engine to emulate the in-game radio, driven programmatically through MPD (Music Player Daemon)",
            "Designed and implemented a custom scheduling algorithm to avoid repeating audio tracks.",
            "Invented the Randomized Dual-Head Queue, a FIFO-based selection algorithm that keeps playback order varied without ever repeating a track back-to-back",
            "Enforced category- and pacing-aware playback rules (no consecutive DJ lines, songs spaced by filler tracks) to mimic the pacing of the real in-game stations"
        ],
        skills: [
            "Svelte / SvelteKit",
            "Docker",
            "Multimedia",
            "JavaScript",
            "SASS",
            "MPD",
            "Icecast",
        ]
    },
    "qr-you": {
        title: "QR You",
        headline: "Mobile app designed to simplify exchanging contact info using QR codes.",
        created: "May 2026",
        accomplishments: [
            "Built a cross-platform mobile app with TypeScript, React Native, and Expo",
            "Implemented multi-card support, letting users maintain separate contact profiles (e.g. work, personal) and share the appropriate one per QR code",
            "Generated vCard-encoded QR codes that phone camera apps recognize natively, saving a new contact without any manual entry",
            "Evaluated vCard against the more compact MeCard format to balance how much contact info a card carries against QR scan reliability"
        ],
        skills: [
            "React Native",
            "Expo",
            "SQLite",
            "Mobile Development"
        ]
    }
}

export { jobs, projects }