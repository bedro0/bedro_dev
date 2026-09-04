import { Button } from "./ui/button";

export default function Tagline() {
	const tagline =
		"I build backend infrastructure and the systems that keep it running.";
	const role =
		"Full-stack developer focused on backend infrastructure and system design.";
	return <div className="flex flex-col gap-3">
		<h1 className="text-4xl sm:text-5xl leading-tight">{tagline}</h1>
		<p className="text-xl text-muted-foreground">{role}</p>
		<div className="flex gap-3 mt-4">
			<Button size="lg">
				<a href="#projects">View Projects</a>
			</Button>
			<Button size="lg" variant="outline">
				<a href="mailto:bedro@loonartech.net">Get in Touch</a>
			</Button>
		</div>
	</div>
}