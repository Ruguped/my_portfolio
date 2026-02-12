import Image from "next/image";

export default function EducationSection() {
    return (
        <section id="education">
            <div className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-bold">education</h2>
                <div className="rounded-lg flex items-center">
                    <div className="flex-none">
                        <Image
                            src="/rajasthan-university-logo.png"
                            alt="University of Rajasthan"
                            width={48}
                            height={48}
                            className="rounded-full border size-12 object-cover"
                        />
                    </div>
                    <div className="grow ml-4">
                        <div className="flex items-center justify-between gap-x-2">
                            <h3 className="font-semibold text-xs sm:text-sm">
                                university of rajasthan
                            </h3>
                            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap">
                                2023 - 2026
                            </div>
                        </div>
                        <div className="font-sans text-xs text-muted-foreground">
                            bachelor in computer applications (BCA)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
