import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Support() {
    return (
        <div className="min-h-screen bg-[#050511] text-white font-sans overflow-hidden relative selection:bg-accent/30">

            {/* 🌌 Premium Cosmic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1c4b] via-[#0F1029] to-[#000000]"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] mix-blend-screen"></div>

                {/* Animated Stars */}
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full shadow-[0_0_2px_#fff]"
                        initial={{
                            x: Math.random() * 1000,
                            y: Math.random() * 1000,
                            opacity: Math.random() * 0.5 + 0.1,
                            scale: Math.random() * 0.4 + 0.2,
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

            {/* Content */}
            <div className="flex justify-center py-8 pt-[10vh] relative z-10">
                <Link to="/" className="w-32 lg:w-40 cursor-pointer hover:scale-105 transition-transform">
                    <img src="/lio-logoalone.png" alt="Lio Logo" className="w-full h-auto" />
                </Link>
            </div>

            <main className="max-w-3xl mx-auto px-6 pb-20 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
                >
                    Centro de Soporte
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 mb-12 leading-relaxed"
                >
                    Estamos aquí para ayudarte. Si tienes alguna pregunta, problema técnico o sugerencia sobre Lio, no dudes en contactarnos.
                </motion.p>

                <div className="grid gap-6 md:grid-cols-2">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-purple-300">Contacto Directo</h2>
                        <p className="text-gray-300 mb-4">Envíanos un correo directamente y te responderemos lo antes posible.</p>
                        <a
                            href="mailto:franciscoclimentb@gmail.com"
                            className="text-white font-bold text-lg hover:text-purple-400 transition-colors"
                        >
                            franciscoclimentb@gmail.com
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-purple-300">Preguntas Frecuentes</h2>
                        <p className="text-gray-300">Estamos trabajando en una guía de preguntas frecuentes.</p>
                    </motion.div>
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/5">
                    <p className="text-gray-400 italic">
                        "Tu bienestar es nuestra prioridad. Gracias por formar parte de la comunidad de Lio."
                    </p>
                </div>
            </main>
        </div>
    );
}
