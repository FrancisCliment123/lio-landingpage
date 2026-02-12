import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Sparkles, Share2, Star, CheckCircle, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const float = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }
};

export default function Home() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    return (
        <div className="min-h-screen bg-[#050511] text-white font-sans overflow-hidden relative selection:bg-accent/30">

            {/* 🌌 Premium Cosmic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Deep Space Gradient Base */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1c4b] via-[#0F1029] to-[#000000]"></div>

                {/* Nebula Glows (Ambient Light) */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] mix-blend-screen"></div>

                {/* Noise Texture for Texture/Film Grain */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }}></div>

                {/* Animated Stars */}
                {[...Array(60)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full shadow-[0_0_2px_#fff]"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                            opacity: Math.random() * 0.5 + 0.1,
                            scale: Math.random() * 0.4 + 0.2, // Smaller, more distant stars
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5,
                        }}
                        style={{ width: Math.random() * 2 + 1, height: Math.random() * 2 + 1 }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/10 border-b border-white/5">
                <div className="flex items-center gap-2">
                    {/* Logo Placeholder */}
                    <img src="/lio-logoalone.png" alt="Lio Logo" className="w-8 h-8 object-contain" />
                    <span className="font-bold text-xl tracking-tight">Lio</span>
                </div>
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-all border border-white/10 backdrop-blur-sm">
                    Descargar
                </button>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4">

                {/* Text Content */}
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-16 space-y-6"
                    initial="hidden"
                    animate="visible"
                    style={{ opacity, scale }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-4">
                        <Sparkles size={14} /> <span>Tu Dosis Diaria de Afirmaciones Positivas</span>
                    </motion.div>

                    <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                        Encuentra tu calma. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-hand italic pr-2">Una afirmación</span>
                        a la vez.
                    </motion.h1>

                    <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        Transforma tu mentalidad con afirmaciones personalizadas impulsadas por IA. Calma, claridad y confianza en cada palabra.
                    </motion.p>

                    <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            <Download size={20} />
                            Consíguelo en el App Store
                        </button>
                    </motion.div>
                </motion.div>

                {/* iPhone Mockup with Glow */}
                <motion.div
                    className="relative w-full max-w-[320px] mx-auto perspective-1000"
                    variants={float}
                    animate="animate"
                >
                    {/* Glow Behind Phone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/30 rounded-full blur-[100px] -z-10 animate-pulse-glow"></div>

                    {/* Phone Frame */}
                    <div className="relative bg-black rounded-[50px] border-[8px] border-gray-800 shadow-2xl overflow-hidden aspect-[9/19.5]">
                        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#1a1b4b] to-[#0F1029] flex flex-col items-center justify-between py-12 px-6">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-2xl z-20"></div>

                            {/* App Content */}
                            <div className="w-full flex-1 flex flex-col items-center justify-center space-y-8">
                                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20">
                                    <img src="/lio-logoalone.png" className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(175,37,244,0.8)]" />
                                </div>

                                <div className="glass-card p-6 w-full text-center space-y-4">
                                    <p className="font-hand text-3xl text-white leading-relaxed">
                                        "Merezco todo lo bueno que viene a mi vida."
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20"><Share2 size={18} /></div>
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20"><Star size={18} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Features Grid (Bento) */}
            <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-transparent to-black/20">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-center mb-16"
                    >
                        Diseñado para tu <span className="text-accent">Paz Interior</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">

                        {/* Feature 1: AI-Powered Affirmations - Large Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="col-span-1 md:col-span-2 row-span-2 glass-card p-8 flex flex-col justify-between overflow-hidden relative group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -z-10 group-hover:bg-purple-500/30 transition-colors duration-500"></div>

                            <div className="space-y-4 relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300">
                                    <Sparkles size={24} />
                                </div>
                                <h3 className="text-2xl font-bold">Afirmaciones Impulsadas por IA</h3>
                                <p className="text-gray-400 max-w-sm">Recibe afirmaciones personalizadas cada día, adaptadas a tu momento. Desde confianza hasta calma, cada palabra cuenta.</p>
                            </div>

                            <div className="mt-8 flex gap-3 overflow-hidden">
                                {['Confianza', 'Calma', 'Enfoque', 'Gratitud'].map((tag, i) => (
                                    <div key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm whitespace-nowrap">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Feature 2: Shareable Art */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="col-span-1 glass-card p-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity"></div>
                            <div className="w-full aspect-[4/5] bg-black/40 rounded-lg border border-white/10 p-4 flex items-center justify-center mb-4 rotate-3 hover:rotate-0 transition-transform duration-300">
                                <p className="font-hand text-xl text-white/90">"La paz empieza en mí."</p>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Arte Compartible</h3>
                            <p className="text-sm text-gray-400">Listo para tu Historia.</p>
                        </motion.div>

                        {/* Feature 3: Widgets */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="col-span-1 glass-card p-6 flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold">Widgets de Inicio</h3>
                                <Smartphone size={20} className="text-gray-400" />
                            </div>
                            <p className="text-sm text-gray-400 mb-4">Recordatorios diarios en tu pantalla de inicio.</p>

                            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                                <div className="flex gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-accent/20"></div>
                                    <div className="flex-1 h-8 rounded-lg bg-white/5"></div>
                                </div>
                                <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Premium Section */}
            <section className="relative z-10 py-24 px-4 bg-black/40 border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="text-accent font-bold tracking-widest text-sm uppercase border border-accent/30 px-4 py-1 rounded-full bg-accent/5">Lio +</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
                        Desbloquea la Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 italic font-serif">Lio +</span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        Acceso ilimitado a categorías exclusivas de afirmaciones, prácticas de mindfulness guiadas y diseños de widgets premium.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
                        {[
                            "Afirmaciones Ilimitadas",
                            "Categorías Exclusivas",
                            "Widgets Premium"
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-200">
                                <CheckCircle className="text-accent" size={20} />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold px-8 py-4 rounded-full text-lg shadow-[0_0_20px_rgba(175,37,244,0.3)] hover:shadow-[0_0_30px_rgba(175,37,244,0.5)] transition-shadow">
                        Empieza a Valorarte
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-12 px-4 border-t border-white/5 bg-black/60 backdrop-blur-md">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <img src="/lio-logoalone.png" alt="Lio" className="w-6 h-6 opacity-70" />
                        <span className="text-gray-400 font-medium">Lio App</span>
                    </div>

                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Términos</Link>
                    </div>

                    <div className="text-xs text-gray-600">
                        © 2026 Lio. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
}
