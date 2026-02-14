"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const BIRTHDATE = new Date(2004, 9, 25).getTime();
const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000;

// ── Text Scramble Hook ──────────────────────────────────────
// HOW IT WORKS (read this!):
//
// 1. We have an array of phrases: ["pranay here", "rugu builds"]
// 2. The hook cycles through them in a loop.
// 3. For each cycle:
//    a) HOLD phase  → show the current phrase for 2 seconds (nothing happens)
//    b) SCRAMBLE phase → over ~600ms, characters get replaced with random
//       glitch symbols. Each character "locks in" to the NEW phrase's character
//       one by one (left to right, with some randomness).
//
// The scramble works per-character:
//   - We pick a random "lock time" for each character position (between 0 and totalDuration)
//   - On each tick (every 50ms), if elapsed time < lock time → show random glitch char
//   - If elapsed time >= lock time → show the final correct character
//
// That's it! No CSS animations, no libraries. Just swapping a string in state.

const GLITCH_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
const PHRASES = ["pranay here", "rugu builds"];
const HOLD_MS = 4000;      // how long to show the resolved text
const SCRAMBLE_MS = 1000;   // how long the scramble transition takes
const TICK_MS = 20;        // how often we update during scramble

function useScrambleText(phrases: string[], holdMs: number, scrambleMs: number) {
    const [text, setText] = useState(phrases[0]);

    const randomChar = useCallback(() => {
        return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    }, []);

    useEffect(() => {
        let phraseIndex = 0;
        let timeout: ReturnType<typeof setTimeout>;
        let interval: ReturnType<typeof setInterval>;

        function scheduleNext() {
            // After holding, start scramble to NEXT phrase
            timeout = setTimeout(() => {
                phraseIndex = (phraseIndex + 1) % phrases.length;
                const target = phrases[phraseIndex];
                const totalChars = target.length;

                // Pre-compute a random "lock-in frame" for each character
                // Earlier positions tend to lock in earlier (left-to-right feel)
                const totalFrames = Math.ceil(scrambleMs / TICK_MS);
                const lockFrames = Array.from({ length: totalChars }, (_, i) => {
                    // base = proportional to position, + some randomness
                    const base = (i / totalChars) * totalFrames;
                    const jitter = Math.random() * (totalFrames * 0.4);
                    return Math.min(Math.floor(base + jitter), totalFrames);
                });

                let frame = 0;

                interval = setInterval(() => {
                    frame++;
                    let result = "";
                    for (let i = 0; i < totalChars; i++) {
                        if (target[i] === " ") {
                            result += " "; // keep spaces as spaces
                        } else if (frame >= lockFrames[i]) {
                            result += target[i]; // locked in — show real char
                        } else {
                            result += randomChar(); // still scrambling
                        }
                    }
                    setText(result);

                    if (frame >= totalFrames) {
                        clearInterval(interval);
                        setText(target); // ensure final text is exact
                        scheduleNext(); // schedule next cycle
                    }
                }, TICK_MS);
            }, holdMs);
        }

        scheduleNext();

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [phrases, holdMs, scrambleMs, randomChar]);

    return text;
}

export default function HeroSection() {
    const [age, setAge] = useState("");
    const scrambledText = useScrambleText(PHRASES, HOLD_MS, SCRAMBLE_MS);

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
                            hi, <span>{scrambledText}</span>
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
                            className="rounded-full border-2 border-gray-700 size-28 object-cover sm:w-[150px] sm:h-[150px]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
