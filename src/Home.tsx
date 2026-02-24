import { motion, useScroll, useMotionValueEvent, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Download, Sparkles, Smartphone, CheckCircle, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// --- Background Component ---
const CosmicBackground = () => (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A0A14]">
        {/* CSS Noise Overlay */}
        <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-10"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* Ambient Nebula Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse flex-none" />
        <div className="absolute bottom-[0%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-900/10 rounded-full blur-[100px] mix-blend-screen flex-none" />

        {/* Animated Stars */}
        {[...Array(40)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute bg-white rounded-full shadow-[0_0_4px_#fff]"
                initial={{
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                    opacity: Math.random() * 0.3 + 0.1,
                    scale: Math.random() * 0.3 + 0.2,
                }}
                animate={{
                    opacity: [0.1, 0.5, 0.1],
                    scale: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: Math.random() * 5 + 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 5,
                }}
                style={{ width: Math.random() * 2 + 1, height: Math.random() * 2 + 1 }}
            />
        ))}
    </div>
);

// --- Navbar Component ---
const Navbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 w-[90%] max-w-4xl border border-transparent ${scrolled ? 'glass border-white/10' : 'bg-transparent'}`}
        >
            <div className="flex items-center gap-3">
                <img src="/lio-logoalone.png" alt="Lio Logo" className="w-8 h-8 object-contain drop-shadow-md" />
                <span className="font-bold text-xl tracking-tight text-[#F5F3EE]">Lio</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8A8A93]">
                <a href="#features" className="hover:text-white transition-colors">Características</a>
                <a href="#premium" className="hover:text-white transition-colors">Premium</a>
            </div>

            <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#F5F3EE] text-[#0A0A14] px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:bg-white transition-colors flex items-center gap-2"
            >
                Descargar App
            </motion.button>
        </motion.nav>
    );
};

// --- Features Interactive Cards ---
const AffirmationEngine = () => {
    const fullText = "Merezco la paz que estoy buscando y la felicidad que me propongo cultivar.";
    const [displayedText, setDisplayedText] = useState("");
    const [hasTyped, setHasTyped] = useState(false);

    return (
        <motion.div
            onViewportEnter={() => {
                if (!hasTyped) {
                    let i = 0;
                    const interval = setInterval(() => {
                        setDisplayedText(fullText.slice(0, i));
                        i++;
                        if (i > fullText.length) {
                            clearInterval(interval);
                            setHasTyped(true);
                        }
                    }, 50);
                }
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="glass-card p-8 flex flex-col justify-between h-full relative overflow-hidden group min-h-[350px]"
        >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 rounded-full blur-[70px] transition-all duration-700 group-hover:bg-purple-500/30" />

            <div className="mb-8 relative z-10">
                <div className="w-12 h-12 rounded-[1.2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                    <Sparkles className="text-purple-300" size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-[#F5F3EE] mb-3">El Motor de Afirmaciones</h3>
                <p className="text-[#8A8A93] leading-relaxed max-w-xs text-sm">
                    IA que entiende tu estado de ánimo. Generación de afirmaciones hiper-personalizadas al instante.
                </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative w-full mt-auto shadow-inner">
                <p className="text-xl md:text-2xl italic text-[#F5F3EE] leading-snug min-h-[60px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    "{displayedText}"
                    <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-[2px] h-[1em] bg-purple-400 ml-2 align-middle"
                    />
                </p>
            </div>
        </motion.div>
    );
};

const ConsistencyTracker = () => {
    const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

    return (
        <motion.div className="glass-card p-8 flex flex-col justify-between h-full group hover:border-white/20 transition-colors duration-500 min-h-[350px]">
            <div className="mb-8 relative z-10">
                <div className="w-12 h-12 rounded-[1.2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner text-amber-300">
                    <Activity size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-[#F5F3EE] mb-3">Rastreador de Consistencia</h3>
                <p className="text-[#8A8A93] leading-relaxed text-sm">
                    Visualiza tu consistencia diaria. Cada día es una nueva oportunidad para cultivar tu paz interior.
                </p>
            </div>

            <div className="flex justify-between items-center bg-[#05050A]/40 rounded-2xl p-5 border border-white/5 mt-auto">
                {days.map((day, i) => {
                    const isActive = i <= 3;
                    const isToday = i === 3;
                    return (
                        <div key={i} className="flex flex-col items-center gap-3">
                            <span className="text-xs font-medium tracking-wider text-[#8A8A93]">{day}</span>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, type: "spring", stiffness: 200, damping: 15 }}
                                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 
                                    ${isActive
                                        ? isToday
                                            ? 'bg-amber-100 shadow-[0_0_20px_rgba(253,230,138,0.4)] border-none'
                                            : 'bg-white/10 border border-white/20'
                                        : 'border border-white/5 bg-transparent'}`}
                            >
                                {isActive && !isToday && <CheckCircle size={14} className="text-white/60" />}
                                {isToday && <div className="w-2.5 h-2.5 rounded-full bg-amber-600" />}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

const WidgetEcosystem = () => {
    return (
        <motion.div className="glass-card p-8 flex flex-col md:flex-row items-center gap-10 md:justify-between h-full relative overflow-hidden group">
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-blue-500/20" />

            <div className="mb-0 relative z-10 max-w-sm">
                <div className="w-12 h-12 rounded-[1.2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner text-blue-300">
                    <Smartphone size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-[#F5F3EE] mb-3">Ecosistema de Widgets</h3>
                <p className="text-[#8A8A93] leading-relaxed text-sm">
                    Paz en tu pantalla de inicio. Widgets elegantes que te recuerdan respirar cada vez que desbloqueas tu dispositivo.
                </p>
            </div>

            <div className="relative h-48 w-full md:w-64 flex items-center justify-center pointer-events-none mt-8 md:mt-0">
                {/* Large floating widget */}
                <motion.div
                    animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute z-20 w-48 h-48 glass rounded-3xl p-5 flex flex-col justify-between shadow-2xl border border-white/20"
                >
                    <div className="flex justify-between items-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-indigo-400/20 border border-white/10" />
                        <span className="text-[10px] text-[#8A8A93] uppercase font-semibold">Lio App</span>
                    </div>
                    <p className="text-lg text-[#F5F3EE] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        "Respira profundo. Estás a salvo."
                    </p>
                </motion.div>

                {/* Small background widget */}
                <motion.div
                    animate={{ y: [5, -5, 5], x: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute z-10 -right-4 top-0 w-28 h-28 bg-[#0a0a14]/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col justify-between blur-[1px]"
                >
                    <div className="w-full flex-1 rounded-lg bg-gradient-to-t from-white/10 to-transparent" />
                    <div className="w-2/3 h-2 bg-white/20 rounded-full mt-3" />
                </motion.div>
            </div>
        </motion.div>
    );
};

// --- Custom Cosmic Cursor ---
const CosmicCursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for the cursor trail
    const springX = useSpring(mouseX, { stiffness: 300, damping: 28, mass: 0.5 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 28, mass: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Create a dynamic radial gradient exactly at the cursor position
    const bgBackground = useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, rgba(175, 37, 244, 0.08), transparent 80%)`;

    return (
        <>
            {/* The physical dot on the exact cursor (optional, maybe keep it clean without a dot, but here's the glow) */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
                style={{ background: bgBackground }}
            />
            {/* Soft glowing trail dot */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-50 h-6 w-6 rounded-full bg-purple-400/30 blur-[4px] mix-blend-screen"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
};

export default function Home() {
    return (
        <div className="bg-[#0A0A14] min-h-screen text-[#F5F3EE] font-sans selection:bg-purple-500/30">
            <CosmicCursor />
            <CosmicBackground />
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="relative z-10 min-h-[100dvh] flex flex-col lg:flex-row items-center justify-center px-6 pt-24 pb-12 max-w-7xl mx-auto gap-12 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs font-semibold tracking-wide text-purple-200 uppercase mb-8 shadow-[inset_0_1px_rgba(255,255,255,0.1)]"
                    >
                        <Sparkles size={14} className="text-purple-300" />
                        Potenciado por IA
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight font-medium leading-[1.1] text-[#F5F3EE] mb-6">
                        Tu paz mental <br className="hidden md:block" /> diaria.
                    </h1>

                    <h2 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-300 italic font-light mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Un oasis privado.
                    </h2>

                    <p className="text-lg text-[#8A8A93] max-w-md font-light leading-relaxed mb-10">
                        Transforma tu vida interior con afirmaciones diseñadas a medida, rutinas de consistencia y una estética serena en tu pantalla.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-3 bg-gradient-to-b from-white to-gray-200 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all"
                    >
                        <Download size={20} />
                        Descargar Lio Gratis
                    </motion.button>
                </motion.div>

                {/* Hero Feature Visual - iPhone Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.9, type: "spring", stiffness: 100, damping: 20 }}
                    className="flex-1 w-full max-w-[320px] lg:max-w-[360px] relative perspective-1000"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-indigo-500/20 rounded-[3rem] blur-[80px] -z-10" />

                    <div className="relative aspect-[9/19] bg-[#0A0A14] rounded-[3rem] border-8 border-[#1A1A24] shadow-2xl shadow-black/50 overflow-hidden flex flex-col items-center justify-center p-6 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none">
                        {/* Notch Area */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1A1A24] rounded-b-xl z-20" />

                        <div className="w-full flex-1 flex flex-col justify-center items-center space-y-10 z-10">
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="w-20 h-20 rounded-3xl glass flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] p-4"
                            >
                                <img src="/lio-logoalone.png" className="w-full h-full object-contain" />
                            </motion.div>

                            <div className="w-full max-w-[85%] text-center space-y-2">
                                <p className="text-2xl text-[#F5F3EE] leading-snug drop-shadow-md" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                    "La calma no es un destino. Es cómo decides viajar."
                                </p>
                            </div>
                        </div>

                        {/* Faux Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* --- Features Section --- */}
            <section id="features" className="relative z-10 py-32 px-6 max-w-6xl mx-auto border-t border-white/5 bg-gradient-to-b from-[#0A0A14] to-black/20">
                <div className="text-center mb-20 space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Artefactos de Paz.</h2>
                    <p className="text-[#8A8A93] md:text-lg">Una suite de herramientas diseñadas con precisión para anclar tu mente en el presente.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="md:col-span-3">
                        <AffirmationEngine />
                    </div>
                    <div className="md:col-span-2">
                        <ConsistencyTracker />
                    </div>
                    <div className="md:col-span-5">
                        <WidgetEcosystem />
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="relative z-10 pt-20 pb-10 px-6 bg-[#05050A]">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <img src="/lio-logoalone.png" alt="Lio" className="w-6 h-6 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                        <span className="text-[#8A8A93] font-medium tracking-wide">Lio App</span>
                    </div>

                    <div className="flex gap-10 text-sm font-medium text-[#8A8A93]">
                        {/* Link tags are fine, ensuring they point correctly to privacy and terms */}
                        <Link to="/support" className="hover:text-white transition-colors">Soporte</Link>
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Términos</Link>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-[#5A5A6D]">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>Sistemas Operativos. Lio 2026.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
