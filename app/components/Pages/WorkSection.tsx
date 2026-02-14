import Image from "next/image";

interface WorkCardProps {
    logoSrc: string;
    logoAlt: string;
    title: string;
    subtitle: string;
    period: string;
    href: string;
    description?: string;
}

function WorkCard({ logoSrc, logoAlt, title, subtitle, period, href, description }: WorkCardProps) {
    return (
        <a className="block cursor-pointer group" href={href} target="_blank" rel="noopener noreferrer">
            <div className="rounded-lg flex items-center">
                <div className="flex-none">
                    <Image
                        src={logoSrc}
                        alt={logoAlt}
                        width={48}
                        height={48}
                        className="rounded-sm border size-12 object-cover"
                    />
                </div>
                <div className="grow ml-4">
                    <div className="flex items-center justify-between gap-x-2">
                        <h3 className="font-semibold text-xs sm:text-sm inline-flex items-center gap-1">
                            {title}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </h3>
                        <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap">
                            {period}
                        </div>
                    </div>
                    <div className="font-sans text-xs text-muted-foreground">{subtitle}</div>
                </div>
            </div>
        </a>
    );
}

const workData: WorkCardProps[] = [
    {
        logoSrc: "/base-app-icon.png",
        logoAlt: "Base-ecosystem",
        title: "base-ecosystem",
        subtitle: "web3 developer",
        period: "oct 2025 - present",
        href: "https://base.app",
        description: "built base ecosystem mini-apps, API integration, database schemas.",
    },
    {
        logoSrc: "/Aleo-logo-400x400.jpg",
        logoAlt: "Aleo",
        title: "aleo",
        subtitle: "community ambassador",
        period: "jun 2023 - present",
        href: "https://aleo.org",
        description: "hosted ZK meetups, grew communities during incentivized testnet phases.",
    },
    {
        logoSrc: "/playfista_logo.png",
        logoAlt: "PlayFiesta",
        title: "playFiesta",
        subtitle: "software developer",
        period: "may 2025 - dec 2025",
        href: "https://playfista.com",
        description: "building responsive event & gaming interfaces with react and tailwind.",
    },
    {
        logoSrc: "/wrathcode-logo.png",
        logoAlt: "wrathcode",
        title: "wrathcode",
        subtitle: "software developer | intern",
        period: "nov 2024 - may 2025",
        href: "https://wrathcode.com",
        description: "building responsive event & gaming interfaces with react and tailwind.",
    },
];

export default function WorkSection() {
    return (
        <section id="work">
            <div className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-bold">cool places i worked at</h2>
                {workData.map((work) => (
                    <WorkCard key={work.title} {...work} />
                ))}
            </div>
        </section>
    );
}
