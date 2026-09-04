export default function Footer() {
    return <footer className="py-8 px-16 border-t-2 border-border flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <p>&copy; 2026 bedro.dev</p>
        <div className="flex flex-col sm:items-end text-muted-foreground">
            <p>
                Built with{" "}
                <a className="hover:text-sidebar-primary" href="https://astro.build">Astro</a>
                {", "}
                <a className="hover:text-sidebar-primary" href="https://react.dev">React</a>
                {" & "}
                <a className="hover:text-sidebar-primary" href="https://tailwindcss.com">Tailwind CSS</a>
            </p>
            <a className="hover:text-sidebar-primary" href="https://github.com/bedro0/bedro_dev">View Source</a>
        </div>
    </footer>
}