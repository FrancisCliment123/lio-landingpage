import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-[#050511] text-white font-sans overflow-hidden relative selection:bg-accent/30">

            {/* 🌌 Premium Cosmic Background - Matching Landing Page */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Deep Space Gradient Base */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1c4b] via-[#0F1029] to-[#000000]"></div>

                {/* Nebula Glows (Ambient Light) */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] mix-blend-screen"></div>

                {/* Noise Texture for Texture/Film Grain */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }}></div>

                {/* Animated Stars */}
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full shadow-[0_0_2px_#fff]"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
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
                    <img src="/lio-logoalone.png" alt="Lio Logo - Volver al Inicio" className="w-full h-auto" />
                </Link>
            </div>

            <article className="max-w-3xl mx-auto px-6 pb-20 relative z-10">
                <div className="prose prose-lg max-w-none prose-invert">

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
                    >
                        Política de Privacidad de Lio
                    </motion.h1>

                    <p className="text-center text-gray-400 mb-12">
                        <strong>Última actualización:</strong> 12 de febrero de 2026
                    </p>

                    {/* Introduction */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Introducción</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Esta Política de Privacidad describe cómo Lio ("nosotros", "nuestro" o "nos") recopila, usa y comparte información cuando utilizas nuestra aplicación móvil (la "App"). Estamos comprometidos a proteger tu privacidad y ser transparentes sobre nuestras prácticas de datos.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Información que Recopilamos</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">1. Información que Proporcionas Directamente</h3>
                        <p className="text-gray-300 mb-3">Cuando completas el proceso de onboarding, recopilamos:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li><strong>Información básica de perfil:</strong> Nombre y edad</li>
                            <li><strong>Preferencias de afirmaciones:</strong> Categorías que seleccionas y tus afirmaciones preferidas</li>
                            <li><strong>Preferencias de notificaciones:</strong> Si habilitas las notificaciones, frecuencia (notificaciones por día) y ventanas de tiempo preferidas</li>
                            <li><strong>Uso de widgets:</strong> Si instalas el widget de iOS</li>
                            <li><strong>Datos de suscripción premium:</strong> Información sobre tu prueba y estado de suscripción</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6 text-purple-300">2. Información Recopilada Automáticamente</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li><strong>Información del dispositivo:</strong> Plataforma (iOS), versión del sistema operativo y versión de la app</li>
                            <li><strong>Análisis de uso:</strong> Cómo interactúas con la app, recopilado a través de análisis de PostHog</li>
                            <li><strong>Datos de errores y rendimiento:</strong> Información técnica sobre fallos y errores de la app, recopilada a través de Sentry</li>
                            <li><strong>Grabaciones de sesión:</strong> PostHog puede grabar sesiones de usuario para ayudarnos a mejorar la experiencia de la app</li>
                            <li><strong>Información de compra:</strong> Datos de suscripción y pago procesados a través de RevenueCat y los sistemas de pago de Apple</li>
                            <li><strong>Datos de seguimiento de conversión:</strong> Identificadores de dispositivo (IDFA en iOS cuando se otorga permiso) y eventos de la app recopilados a través de TikTok Pixel para medición publicitaria</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6 text-purple-300">3. Información Almacenada Localmente en tu Dispositivo</h3>
                        <p className="text-gray-300 mb-3">Los siguientes datos se almacenan solo en tu dispositivo y no se transmiten a nuestros servidores:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>Datos de seguimiento de racha diaria (actualmente local; futuras actualizaciones pueden sincronizar con servidores backend)</li>
                            <li>Tus afirmaciones favoritas</li>
                            <li>Afirmaciones personalizadas que crees</li>
                            <li>Preferencias detalladas de notificaciones</li>
                            <li>Categorías de afirmación seleccionadas</li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Cómo Usamos tu Información</h2>
                        <p className="text-gray-300 mb-3">Usamos la información recopilada para los siguientes propósitos:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li><strong>Prestación del servicio:</strong> Para proporcionarte afirmaciones y notificaciones personalizadas basadas en tus preferencias</li>
                            <li><strong>Mejora de la app:</strong> Para analizar patrones de uso y mejorar la funcionalidad, diseño y experiencia de usuario de la app</li>
                            <li><strong>Soporte al cliente:</strong> Para responder a tus comentarios y solicitudes de soporte</li>
                            <li><strong>Gestión de suscripciones:</strong> Para procesar y gestionar tu suscripción premium</li>
                            <li><strong>Monitoreo de errores:</strong> Para identificar y corregir problemas técnicos y errores</li>
                            <li><strong>Comunicación:</strong> Para enviarte actualizaciones importantes sobre la app (si has optado por ello)</li>
                        </ul>
                    </section>

                    {/* Third-Party Services */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Servicios de Terceros</h2>
                        <p className="text-gray-300 mb-4">Utilizamos los siguientes servicios de terceros que pueden recopilar información:</p>

                        <div className="space-y-4">
                            <div className="glass-card p-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">RevenueCat</h3>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>Propósito:</strong> Procesamiento de suscripciones y pagos</li>
                                    <li><strong>Datos compartidos:</strong> Identificador de usuario, información de compra, estado de suscripción</li>
                                    <li><strong>Política de privacidad:</strong> <a href="https://www.revenuecat.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a></li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">Supabase</h3>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>Propósito:</strong> Base de datos backend para almacenar respuestas de onboarding y comentarios (implementación futura)</li>
                                    <li><strong>Datos compartidos:</strong> Toda la información de onboarding mencionada anteriormente, asociada con tu ID de usuario de RevenueCat</li>
                                    <li><strong>Política de privacidad:</strong> <a href="https://supabase.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://supabase.com/privacy</a></li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">Sentry</h3>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>Propósito:</strong> Seguimiento de errores y monitoreo de rendimiento</li>
                                    <li><strong>Datos compartidos:</strong> Registros de errores, información del dispositivo, dirección IP y contexto del usuario</li>
                                    <li><strong>Política de privacidad:</strong> <a href="https://sentry.io/privacy/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://sentry.io/privacy/</a></li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">PostHog</h3>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>Propósito:</strong> Análisis de producto y grabación de sesiones</li>
                                    <li><strong>Datos compartidos:</strong> Patrones de uso, interacciones del usuario, repeticiones de sesión, información del dispositivo</li>
                                    <li><strong>Política de privacidad:</strong> <a href="https://posthog.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://posthog.com/privacy</a></li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">Apple App Store</h3>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>Propósito:</strong> Procesamiento de pagos para suscripciones</li>
                                    <li><strong>Datos compartidos:</strong> Información de pago, historial de compras (gestionado directamente por Apple)</li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">TikTok Pixel</h3>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>Propósito:</strong> Seguimiento de conversión y medición publicitaria</li>
                                    <li><strong>Datos compartidos:</strong> Identificadores de dispositivo (IDFA en iOS cuando se otorga permiso), eventos de la app (como instalaciones, compras y eventos personalizados)</li>
                                    <li><strong>Política de privacidad:</strong> <a href="https://www.tiktok.com/legal/privacy-policy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://www.tiktok.com/legal/privacy-policy</a></li>
                                    <li><strong>Exclusión:</strong> Puedes optar por no participar en el seguimiento de TikTok a través de la configuración de Transparencia de Seguimiento de Apps (ATT) de iOS denegando el permiso de seguimiento cuando se te solicite o yendo a Configuración &gt; Privacidad y Seguridad &gt; Seguimiento en tu dispositivo iOS</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Data Retention */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Retención de Datos</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li><strong>Datos de cuenta:</strong> Conservamos tus datos de onboarding mientras uses la app. Puedes solicitar su eliminación en cualquier momento.</li>
                            <li><strong>Datos de análisis:</strong> Los datos de análisis y seguimiento de errores se conservan según las políticas de nuestros proveedores externos (típicamente de 90 días a 2 años).</li>
                            <li><strong>Datos locales:</strong> Los datos almacenados en tu dispositivo permanecen hasta que desinstalas la app o borras los datos de la app.</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Seguridad de Datos</h2>
                        <p className="text-gray-300 mb-3">Implementamos medidas técnicas y organizativas apropiadas para proteger tu información personal, incluyendo:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>Conexiones cifradas (HTTPS/TLS) para toda la transmisión de datos</li>
                            <li>Prácticas de almacenamiento seguro para datos en nuestros servidores</li>
                            <li>Evaluaciones y actualizaciones de seguridad regulares</li>
                            <li>Acceso limitado a datos personales solo por personal autorizado</li>
                        </ul>
                        <p className="text-gray-300 mt-3">
                            Sin embargo, ningún método de transmisión por internet o almacenamiento electrónico es 100% seguro, y no podemos garantizar seguridad absoluta.
                        </p>
                    </section>

                    {/* Your Privacy Rights */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Tus Derechos de Privacidad</h2>
                        <p className="text-gray-300 mb-3">Dependiendo de tu ubicación, puedes tener los siguientes derechos:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li><strong>Acceso:</strong> Solicitar una copia de los datos personales que tenemos sobre ti</li>
                            <li><strong>Corrección:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                            <li><strong>Eliminación:</strong> Solicitar la eliminación de tus datos personales</li>
                            <li><strong>Portabilidad:</strong> Solicitar tus datos en un formato portable</li>
                            <li><strong>Exclusión:</strong> Optar por no participar en análisis y comunicaciones de marketing</li>
                            <li><strong>Exclusión del seguimiento:</strong> Los usuarios de iOS pueden optar por no participar en el seguimiento de conversión de TikTok y otro seguimiento publicitario a través de la configuración de Transparencia de Seguimiento de Apps (ATT) (Configuración &gt; Privacidad y Seguridad &gt; Seguimiento)</li>
                            <li><strong>Retirar consentimiento:</strong> Retirar el consentimiento para el procesamiento de datos cuando nos basamos en el consentimiento</li>
                        </ul>
                        <p className="text-gray-300 mt-3">
                            Para ejercer estos derechos, contáctanos en la dirección de correo electrónico proporcionada a continuación.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Privacidad de Menores</h2>
                        <p className="text-gray-300">
                            La App no está destinada a niños menores de 13 años (o la edad aplicable de consentimiento digital en tu jurisdicción). No recopilamos conscientemente información personal de niños. Si crees que hemos recopilado información de un niño, contáctanos inmediatamente.
                        </p>
                    </section>

                    {/* Push Notifications */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Notificaciones Push</h2>
                        <p className="text-gray-300 mb-3">La app utiliza notificaciones push locales para entregar afirmaciones basadas en tus preferencias. Estas notificaciones son:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>Programadas localmente en tu dispositivo</li>
                            <li>Basadas en las categorías y preferencias que seleccionas</li>
                            <li>Completamente opcionales y se pueden desactivar en cualquier momento a través de la configuración de la app o del dispositivo</li>
                            <li>No se utilizan para enviar mensajes de marketing o publicidad</li>
                        </ul>
                    </section>

                    {/* Changes to This Privacy Policy */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Cambios a esta Política de Privacidad</h2>
                        <p className="text-gray-300 mb-3">Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos de cualquier cambio material mediante:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>Publicación de la nueva Política de Privacidad en la app</li>
                            <li>Actualización de la fecha de "Última actualización"</li>
                            <li>Envío de una notificación (si lo requiere la ley)</li>
                        </ul>
                        <p className="text-gray-300 mt-3">
                            Tu uso continuado de la app después de que los cambios entren en vigencia constituye la aceptación de la política revisada.
                        </p>
                    </section>

                    {/* European Users (GDPR) */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Usuarios Europeos (GDPR)</h2>
                        <p className="text-gray-300 mb-4">
                            Como esta app es operada desde España y dirigida a usuarios en la Unión Europea y América Latina, cumplimos con el Reglamento General de Protección de Datos (GDPR).
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">Tus Derechos GDPR</h3>
                        <p className="text-gray-300 mb-3">Como residente de la UE, tienes los siguientes derechos:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li><strong>Derecho de acceso (Artículo 15):</strong> Obtener confirmación del procesamiento de datos y acceso a tus datos</li>
                            <li><strong>Derecho de rectificación (Artículo 16):</strong> Corregir datos inexactos o incompletos</li>
                            <li><strong>Derecho al olvido (Artículo 17):</strong> Solicitar la eliminación de tus datos ("derecho al olvido")</li>
                            <li><strong>Derecho a la limitación (Artículo 18):</strong> Limitar cómo usamos tus datos</li>
                            <li><strong>Derecho a la portabilidad de datos (Artículo 20):</strong> Recibir tus datos en un formato estructurado y legible por máquina</li>
                            <li><strong>Derecho a oponerse (Artículo 21):</strong> Oponerse al procesamiento basado en intereses legítimos</li>
                            <li><strong>Derecho a retirar el consentimiento:</strong> Retirar el consentimiento en cualquier momento sin afectar el procesamiento previo</li>
                            <li><strong>Derecho a presentar una queja:</strong> Presentar una queja ante la AEPD (Agencia Española de Protección de Datos) en España o tu autoridad supervisora local</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6 text-purple-300">Autoridad de Protección de Datos</h3>
                        <p className="text-gray-300 mb-3">Para usuarios en España, la autoridad supervisora es:</p>
                        <div className="glass-card p-4 text-gray-300">
                            <p className="font-semibold text-white mb-2">AEPD (Agencia Española de Protección de Datos)</p>
                            <ul className="text-sm space-y-1">
                                <li><strong>Sitio web:</strong> <a href="https://www.aepd.es" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://www.aepd.es</a></li>
                                <li><strong>Dirección:</strong> C/ Jorge Juan, 6, 28001 Madrid, España</li>
                                <li><strong>Teléfono:</strong> +34 901 100 099</li>
                            </ul>
                        </div>
                        <p className="text-gray-300 mt-3">
                            Para usuarios en otros países de la UE o América Latina, contacta con tu autoridad local de protección de datos.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Contáctanos</h2>
                        <p className="text-gray-300 mb-4">
                            Si tienes alguna pregunta, inquietud o solicitud relacionada con esta Política de Privacidad o nuestras prácticas de datos, incluido el ejercicio de tus derechos GDPR, contáctanos en:
                        </p>
                        <div className="glass-card p-6">
                            <ul className="space-y-2 text-gray-300">
                                <li><strong>Correo electrónico:</strong> <a href="mailto:franciscoclimentb@gmail.com" className="text-accent hover:underline">franciscoclimentb@gmail.com</a></li>
                                <li><strong>Desarrollador:</strong> Francisco Climent</li>
                                <li><strong>App:</strong> Lio - Daily Affirmations</li>
                                <li><strong>Ubicación:</strong> España</li>
                            </ul>
                        </div>
                        <p className="text-gray-300 mt-4">
                            Para solicitudes relacionadas con GDPR, indica claramente "Solicitud GDPR" en el asunto de tu correo y especifica qué derecho deseas ejercer. Responderemos dentro de un mes desde la recepción de tu solicitud, según lo requiere el GDPR.
                        </p>
                    </section>

                    {/* Cookie Policy */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Política de Cookies</h2>
                        <p className="text-gray-300">
                            La App no utiliza cookies. Sin embargo, nuestros proveedores de análisis externos (PostHog) pueden usar tecnologías similares con fines analíticos. Puedes controlarlas a través de la configuración de tu dispositivo.
                        </p>
                    </section>

                    {/* Footer Note */}
                    <div className="border-t border-white/20 pt-8 mt-12">
                        <p className="text-center text-gray-400 text-sm">
                            <strong>Al usar la app Lio, reconoces que has leído y comprendido esta Política de Privacidad y aceptas la recopilación, uso y compartición de tu información según lo descrito aquí.</strong>
                        </p>
                    </div>

                </div>
            </article>
        </div>
    );
}
