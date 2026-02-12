const skills = [
    "typescript",
    "javascript",
    "react",
    "next.js",
    "tailwind css",
    "node.js",
    "express.js",
    "postgresql",
    "prisma",
    "wagmi",
    "farcaster-frames",
    "solidity",
];

export default function SkillsSection() {
    return (
        <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-bold">skills</h2>
                <div className="flex flex-wrap gap-1">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="inline-flex items-center rounded-md border border-transparent bg-primary text-primary-foreground px-2.5 py-0.5 text-xs font-semibold shadow hover:bg-primary/80 transition-colors"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
