import Image from "next/image";

export default function GrantsSection() {
    return (
        <section id="grants">
            <div className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-bold">grants</h2>
                <a
                    className="block cursor-pointer group"
                    href="https://aleo.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="rounded-lg border border-border p-4 flex items-center gap-4">
                        <div className="flex-none">
                            <Image
                                src="/Aleo-logo-400x400.jpg"
                                alt="Aleo"
                                width={48}
                                height={48}
                                className="rounded-full border size-12 object-cover"
                            />
                        </div>
                        <div className="grow">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-sm inline-flex items-center gap-1">
                                    aleo
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </h3>
                                <span className="inline-flex items-center rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">
                                    grant
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                                received an $14k retroactive grant for being an event ambassador at aleo. bridging the gap between developers and the foundation.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}
