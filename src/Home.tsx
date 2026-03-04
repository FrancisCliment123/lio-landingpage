import { motion, useScroll, useMotionValueEvent, useMotionValue, useSpring, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Download, Sparkles, Smartphone, CheckCircle, Activity, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Pre-calculate random values for stars to avoid impure renders
const stars = [...Array(40)].map(() => ({
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
    opacity: Math.random() * 0.3 + 0.1,
    scale: Math.random() * 0.3 + 0.2,
    duration: Math.random() * 5 + 4,
    delay: Math.random() * 5,
    width: Math.random() * 2 + 1,
    height: Math.random() * 2 + 1
}));

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
        {stars.map((star, i) => (
            <motion.div
                key={i}
                className="absolute bg-white rounded-full shadow-[0_0_4px_#fff]"
                initial={{
                    x: star.x,
                    y: star.y,
                    opacity: star.opacity,
                    scale: star.scale,
                }}
                animate={{
                    opacity: [0.1, 0.5, 0.1],
                    scale: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: star.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: star.delay,
                }}
                style={{ width: star.width, height: star.height }}
            />
        ))}
    </div>
);

// --- Navbar Component ---
const Navbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <motion.nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 w-[90%] max-w-4xl border border-transparent ${scrolled ? 'glass border-white/10' : 'bg-transparent'}`}
        >
            <div className="flex items-center gap-3">
                <img src="/lio-logoalone.png" alt="Lio Logo" className="w-8 h-8 object-contain drop-shadow-md" />
                <span className="font-bold text-xl tracking-tight text-[#F5F3EE]">Lio</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8A8A93]">
                <a href="#features" className="hover:text-white transition-colors">{t('navbar.features')}</a>
                <a href="#premium" className="hover:text-white transition-colors">{t('navbar.premium')}</a>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={toggleLanguage}
                    className="text-sm font-semibold text-[#8A8A93] hover:text-[#F5F3EE] transition-colors uppercase tracking-wider bg-white/5 px-2 py-1 rounded-md border border-white/10"
                >
                    {i18n.language === 'es' ? 'EN' : 'ES'}
                </button>
                <motion.a
                    href="https://apps.apple.com/us/app/lio/id6758862292"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#F5F3EE] text-[#0A0A14] px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:bg-white transition-colors flex items-center gap-2"
                >
                    {t('navbar.download')}
                </motion.a>
            </div>
        </motion.nav>
    );
};

const AnimatedHeroText = () => {
    const { t } = useTranslation();
    const phrases = [
        t('heroPhrases.0'),
        t('heroPhrases.1'),
        t('heroPhrases.2'),
        t('heroPhrases.3')
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 5000); // Cambia cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.p
                key={index}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-2xl text-[#F5F3EE] leading-snug drop-shadow-md absolute w-full"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
                "{phrases[index]}"
            </motion.p>
        </AnimatePresence>
    );
};

// --- Custom Tilt Card Wrapper ---
const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useMotionTemplate`calc(${mouseYSpring} * 15deg)`;
    const rotateY = useMotionTemplate`calc(${mouseXSpring} * -15deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        // Calculate mouse position relative to card center (-0.5 to 0.5)
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`perspective-1000 w-full h-full ${className}`}
        >
            <div
                style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
                className="w-full h-full"
            >
                {children}
            </div>
        </motion.div>
    );
};

// --- Features Interactive Cards ---
const AffirmationEngine = () => {
    const { t } = useTranslation();
    const fullText = t('engineText');
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
                <h3 className="text-2xl font-semibold text-[#F5F3EE] mb-3">{t('home.engineTitle')}</h3>
                <p className="text-[#8A8A93] leading-relaxed max-w-xs text-sm">
                    {t('home.engineDescription')}
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
    const { t } = useTranslation();
    const days = [t('home.days.M'), t('home.days.T'), t('home.days.W'), t('home.days.Th'), t('home.days.F'), t('home.days.S'), t('home.days.Su')];

    return (
        <TiltCard>
            <motion.div className="glass-card p-8 flex flex-col justify-between h-full group hover:border-white/20 transition-colors duration-500 min-h-[350px]">
                <div className="mb-8 relative z-10" style={{ transform: "translateZ(40px)" }}>
                    <div className="w-12 h-12 rounded-[1.2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner text-amber-300">
                        <Activity size={22} />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#F5F3EE] mb-3">{t('home.trackerTitle')}</h3>
                    <p className="text-[#8A8A93] leading-relaxed text-sm">
                        {t('home.trackerDescription')}
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
        </TiltCard>
    );
};

const WidgetEcosystem = () => {
    const { t } = useTranslation();
    return (
        <TiltCard>
            <motion.div className="glass-card p-8 flex flex-col md:flex-row items-center gap-10 md:justify-between h-full relative overflow-hidden group">
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-blue-500/20" />

                <div className="mb-0 relative z-10 max-w-sm" style={{ transform: "translateZ(40px)" }}>
                    <div className="w-12 h-12 rounded-[1.2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner text-blue-300">
                        <Smartphone size={22} />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#F5F3EE] mb-3">{t('home.widgetsTitle')}</h3>
                    <p className="text-[#8A8A93] leading-relaxed text-sm">
                        {t('home.widgetsDescription')}
                    </p>
                </div>

                <div className="relative h-48 w-full md:w-64 flex items-center justify-center pointer-events-none mt-8 md:mt-0" style={{ transform: "translateZ(80px)" }}>
                    {/* Large floating widget */}
                    <motion.div
                        animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute z-20 w-48 h-48 glass rounded-3xl p-5 flex flex-col justify-between shadow-2xl border border-white/20"
                    >
                        <div className="flex justify-between items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-indigo-400/20 border border-white/10" />
                            <span className="text-[10px] text-[#8A8A93] uppercase font-semibold">{t('home.widgetAppName')}</span>
                        </div>
                        <p className="text-lg text-[#F5F3EE] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            {t('home.widgetQuote')}
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
        </TiltCard>
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

// --- Testimonials Section ---
const Testimonials = () => {
    const { t } = useTranslation();
    const reviews = [
        { text: t('reviews.0.text'), author: t('reviews.0.author'), rating: 5 },
        { text: t('reviews.1.text'), author: t('reviews.1.author'), rating: 5 },
        { text: t('reviews.2.text'), author: t('reviews.2.author'), rating: 5 }
    ];

    return (
        <section className="relative z-10 py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-medium tracking-tight text-[#F5F3EE]">{t('home.testimonialsTitle')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((review, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                        key={i}
                        className="glass-card p-8 flex flex-col justify-between"
                    >
                        <div className="flex gap-1 mb-6">
                            {[...Array(review.rating)].map((_, j) => (
                                <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                        <p className="text-[#8A8A93] text-lg leading-relaxed mb-8 italic">"{review.text}"</p>
                        <span className="text-sm font-semibold text-[#F5F3EE] uppercase tracking-wider">{review.author}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// --- Premium Section ---
const PremiumSection = () => {
    const { t } = useTranslation();
    const features = [
        { title: t('premium.feature1Title'), desc: t('premium.feature1Desc') },
        { title: t('premium.feature2Title'), desc: t('premium.feature2Desc') },
        { title: t('premium.feature3Title'), desc: t('premium.feature3Desc') }
    ];

    return (
        <section id="premium" className="relative z-10 py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent blur-3xl -z-10 rounded-[4rem]" />
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="glass-card p-10 md:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden group"
            >
                {/* Premium Glow effect */}
                <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-bl from-amber-500/10 via-purple-500/5 to-transparent blur-[80px] pointer-events-none transition-all duration-700 group-hover:from-amber-500/15 group-hover:via-purple-500/10" />

                <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-semibold tracking-wide text-amber-200 uppercase shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                            <Sparkles size={14} className="text-amber-400" />
                            {t('premium.subtitle')}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#F5F3EE]">
                            {t('premium.title')}
                        </h2>
                        <p className="text-[#8A8A93] text-lg leading-relaxed max-w-md">
                            {t('premium.description')}
                        </p>

                        <div className="pt-6 space-y-5">
                            {features.map((feature, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                                    key={i}
                                    className="flex gap-4 group/item"
                                >
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center transition-colors group-hover/item:border-amber-400/40 group-hover/item:bg-amber-400/20">
                                        <CheckCircle size={14} className="text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-[#F5F3EE] font-medium text-base mb-1">{feature.title}</h4>
                                        <p className="text-[#8A8A93] text-sm leading-relaxed max-w-xs">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full md:w-auto flex flex-col items-center max-w-sm mx-auto p-10 rounded-[2.5rem] bg-[#0A0A14]/80 border border-white/10 shadow-2xl backdrop-blur-md relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2.5rem] pointer-events-none" />

                        <div className="text-center space-y-4 mb-10 relative z-10">
                            <h3 className="text-2xl font-semibold text-[#F5F3EE]">Lio Premium</h3>
                            <div className="flex justify-center items-end gap-1">
                                <span className="text-5xl font-medium text-white tracking-tight">$29.99</span>
                                <span className="text-[#8A8A93] mb-1 font-medium">/ year</span>
                            </div>
                        </div>

                        <motion.a
                            href="https://apps.apple.com/us/app/lio/id6758862292"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full py-4 rounded-full bg-gradient-to-r from-amber-200 to-amber-400 text-[#0A0A14] font-semibold text-lg shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all text-center mb-6 relative z-10 flex items-center justify-center gap-2"
                        >
                            <Sparkles size={18} />
                            {t('premium.cta')}
                        </motion.a>

                        <p className="text-xs text-[#8A8A93] text-center italic relative z-10 max-w-[200px]">
                            {t('premium.price')}
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

// --- Final CTA Section ---
const FinalCTA = () => {
    const { t } = useTranslation();
    return (
        <section className="relative z-10 py-32 px-6">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto glass-card p-16 flex flex-col items-center text-center relative overflow-hidden group"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-indigo-500/10 blur-[100px] transition-all duration-700 group-hover:bg-purple-500/20" />
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#F5F3EE] mb-6 relative z-10">{t('home.ctaTitle')}</h2>
                <p className="text-[#8A8A93] text-lg max-w-lg mb-10 relative z-10">{t('home.ctaDescription')}</p>
                <motion.a
                    href="https://apps.apple.com/us/app/lio/id6758862292"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all"
                >
                    <Download size={20} />
                    {t('home.downloadFree')}
                </motion.a>
                <p className="mt-4 text-xs text-white/50 italic relative z-10">{t('home.ctaNote')}</p>
            </motion.div>
        </section>
    );
};

export default function Home() {
    const { t } = useTranslation();
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
                        {t('home.poweredByAi')}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight font-medium leading-[1.1] text-[#F5F3EE] mb-6"
                        dangerouslySetInnerHTML={{ __html: t('home.heroTitle') }}
                    />

                    <h2 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-300 italic font-light mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {t('home.heroSubtitle')}
                    </h2>

                    <p className="text-lg text-[#8A8A93] max-w-md font-light leading-relaxed mb-10">
                        {t('home.heroDescription')}
                    </p>

                    <div className="flex flex-col items-center lg:items-start">
                        <motion.a
                            href="https://apps.apple.com/us/app/lio/id6758862292"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-3 bg-gradient-to-b from-white to-gray-200 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all"
                        >
                            <Download size={20} />
                            {t('home.downloadFree')}
                        </motion.a>
                        <p className="mt-4 text-xs text-[#8A8A93] italic drop-shadow-md">{t('home.premiumTrial')}</p>
                    </div>
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
                                <img src="/lio-logoalone.png" alt="Lio Logo - Daily Affirmations App" className="w-full h-full object-contain" />
                            </motion.div>

                            <div className="w-full max-w-[85%] text-center space-y-2 h-[100px] flex items-center justify-center relative">
                                <AnimatedHeroText />
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
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight">{t('home.featuresTitle')}</h2>
                    <p className="text-[#8A8A93] md:text-lg">{t('home.featuresSubtitle')}</p>
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

            <PremiumSection />
            <Testimonials />
            <FinalCTA />

            {/* --- Footer --- */}
            <footer className="relative z-10 pt-20 pb-10 px-6 bg-[#05050A]">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <img src="/lio-logoalone.png" alt="Lio" className="w-6 h-6 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                        <span className="text-[#8A8A93] font-medium tracking-wide">{t('home.footerApp')}</span>
                    </div>

                    <div className="flex gap-10 text-sm font-medium text-[#8A8A93]">
                        {/* Link tags are fine, ensuring they point correctly to privacy and terms */}
                        <Link to="/support" className="hover:text-white transition-colors">{t('home.footerSupport')}</Link>
                        <Link to="/privacy" className="hover:text-white transition-colors">{t('home.footerPrivacy')}</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">{t('home.footerTerms')}</Link>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-[#5A5A6D]">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>{t('home.footerRights')}</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
