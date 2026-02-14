"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const BIRTHDATE = new Date(2004, 9, 25).getTime();
const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000;

export default function HeroSection() {
    const [age, setAge] = useState("");

    useEffect(() => {
        const id = setInterval(() => {
            setAge(((Date.now() - BIRTHDATE) / MS_PER_YEAR).toFixed(9));
        }, 50);
        return () => clearInterval(id);
    }, []);

    return (
        <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
                <div className="gap-2 flex justify-between">
                    <div className="flex-col flex flex-1 space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-6xl sm:mb-6">
                            hi, pranay here
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            on this planet since <span className="font-mono">{age}</span> years
                        </p>
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
                            className="rounded-full border-[2px] border-gray-700 size-28 object-cover sm:w-[150px] sm:h-[150px]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
