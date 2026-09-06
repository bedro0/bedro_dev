import { stack } from "@/lib/stack";
import { brandHoverVars } from "@/lib/color";

export default function TechStack() {
    return (
        <div>
            <h3 className="text-4xl w-fit">Stack</h3>
            <div className="flex flex-col gap-6 my-8">
                {stack.map(({ label, Icon: CategoryIcon, items }) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                        <div className="flex items-center gap-2 text-muted-foreground shrink-0 sm:w-40">
                            <CategoryIcon size={20} />
                            <p className="text-sm uppercase tracking-wide">{label}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {items.map(({ name, Icon, hex }) => (
                                <div
                                    key={name}
                                    className="flex items-center gap-2 bg-accent rounded-full px-3 py-1.5 hover:text-(--brand-hover-light) dark:hover:text-(--brand-hover-dark) transition-colors hover:cursor-default"
                                    style={brandHoverVars(hex) as React.CSSProperties}
                                >
                                    <Icon size={18} />
                                    <span className="text-sm whitespace-nowrap">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
