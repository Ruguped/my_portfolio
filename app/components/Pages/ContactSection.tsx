export default function ContactSection() {
    return (
        <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                <div className="space-y-3">
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                        say hello on{" "}
                        <a
                            className="text-blue-500 hover:underline"
                            href="https://x.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            𝕏
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
