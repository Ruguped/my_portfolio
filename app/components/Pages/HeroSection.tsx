import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
                <div className="gap-2 flex justify-between">
                    <div className="flex-col flex flex-1 space-y-1.5">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-6xl">
                            hi, pranay here
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            developer & community builder
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/Starship2.jpg"
                            alt="Pranay"
                            width={112}
                            height={112}
                            className="rounded-full border size-28 object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
