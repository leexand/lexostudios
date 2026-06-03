export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7x1 intems-center justify-between px-6">
                <div className="font-semibold tracking-wide text-slate-100">
                    Lexo Studios
                </div>

                <nav className="hidden gap-8 text-sm text-slate-400 md:flex">
                    <a href="#projects" className="hover:text-white transition">
                        Projects
                    </a>

                    <a href="#about" className="hover:text-white transition">
                        About
                    </a>

                    <a href="#contact" className="hover:text-white transition">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}