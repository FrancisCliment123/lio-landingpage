import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Pre-calculate random values for stars to avoid impure renders
const stars = [...Array(40)].map(() => ({
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
    opacity: Math.random() * 0.5 + 0.1,
    scale: Math.random() * 0.4 + 0.2,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
    width: Math.random() * 2 + 1,
    height: Math.random() * 2 + 1
}));

export default function Terms() {
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
                {stars.map((star, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full shadow-[0_0_2px_#fff]"
                        initial={{
                            x: star.x,
                            y: star.y,
                            opacity: star.opacity,
                            scale: star.scale,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
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
                        Términos de Uso de Lio
                    </motion.h1>

                    <p className="text-center text-gray-400 mb-12">
                        <strong>Última actualización:</strong> 12 de febrero de 2026
                    </p>

                    {/* 1. Acceptance of Terms */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">1. Aceptación de los Términos</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Estos Términos de Uso ("Términos") constituyen un acuerdo legalmente vinculante entre usted y Francisco Climent ("nosotros", "nuestro" o "Desarrollador") con respecto al uso de la aplicación móvil Lio ("App"). Al descargar, instalar, acceder o usar la App, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con estos Términos, no use la App.
                        </p>
                    </section>

                    {/* 2. Description of Service */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">2. Descripción del Servicio</h2>
                        <p className="text-gray-300 mb-3">Lio es una aplicación móvil que proporciona:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>Afirmaciones diarias personalizadas impulsadas por IA</li>
                            <li>Seguimiento de rachas para compromiso diario</li>
                            <li>Afirmaciones personalizadas creadas por el usuario</li>
                            <li>Programación de notificaciones personalizables</li>
                            <li>Contenido basado en categorías (Confianza, Calma, Enfoque, Gratitud, etc.)</li>
                            <li>Widgets para la pantalla de inicio</li>
                            <li>Funciones premium disponibles mediante suscripción</li>
                        </ul>
                    </section>

                    {/* 3. Eligibility */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">3. Elegibilidad</h2>
                        <p className="text-gray-300 leading-relaxed mb-3">
                            Debe tener al menos 13 años de edad (o la edad aplicable de consentimiento digital en su jurisdicción) para usar esta App. Al usar la App, usted declara y garantiza que cumple con este requisito de edad. Si es menor de 18 años, declara que ha obtenido el consentimiento de sus padres o tutor para usar esta App.
                        </p>
                    </section>

                    {/* 4. License Grant and Restrictions */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">4. Concesión de Licencia y Restricciones</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">4.1 Licencia</h3>
                        <p className="text-gray-300 mb-4">
                            Sujeto a su cumplimiento de estos Términos, le otorgamos una licencia limitada, no exclusiva, intransferible, no sublicenciable y revocable para descargar, instalar y usar la App en dispositivos que posea o controle, únicamente para su uso personal y no comercial.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">4.2 Restricciones</h3>
                        <p className="text-gray-300 mb-3">Usted acepta NO:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>Modificar, realizar ingeniería inversa, descompilar, desensamblar o crear trabajos derivados de la App</li>
                            <li>Eliminar, alterar u ocultar avisos de propiedad de la App</li>
                            <li>Usar la App para cualquier propósito ilegal, dañino o no autorizado</li>
                            <li>Intentar obtener acceso no autorizado a cualquier parte de la App o sus sistemas</li>
                            <li>Usar scripts automatizados, bots o herramientas similares para acceder a la App</li>
                            <li>Interferir o interrumpir la funcionalidad de la App o sus servidores</li>
                            <li>Reproducir, distribuir, mostrar públicamente o crear trabajos derivados de la App</li>
                            <li>Vender, alquilar, arrendar, sublicenciar o transferir sus derechos de uso de la App</li>
                            <li>Usar la App para dañar a menores de cualquier manera</li>
                            <li>Hacerse pasar por cualquier persona o entidad o declarar falsamente su afiliación</li>
                            <li>Cargar o transmitir virus, malware u otro código malicioso</li>
                            <li>Violar cualquier ley, regulación o derechos de terceros aplicables</li>
                        </ul>
                    </section>

                    {/* 5. User Accounts and Data */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">5. Cuentas de Usuario y Datos</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">5.1 Creación de Cuenta</h3>
                        <p className="text-gray-300 mb-4">
                            La App usa RevenueCat para gestionar cuentas de usuario y suscripciones. Usted es responsable de mantener la confidencialidad de la información de su cuenta y de todas las actividades que ocurran bajo su cuenta.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">5.2 Datos del Usuario</h3>
                        <p className="text-gray-300 mb-4">
                            Usted conserva todos los derechos sobre cualquier contenido que cree dentro de la App (como afirmaciones personalizadas). Al usar la App, nos otorga una licencia para usar, almacenar y procesar sus datos según se describe en nuestra Política de Privacidad. Manejaremos sus datos de acuerdo con las leyes de privacidad aplicables.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">5.3 Exactitud de la Información</h3>
                        <p className="text-gray-300">
                            Usted acepta proporcionar información precisa, actual y completa durante el proceso de onboarding y actualizar dicha información para mantener su precisión.
                        </p>
                    </section>

                    {/* 6. Premium Subscriptions */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">6. Suscripciones Premium</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">6.1 Términos de Suscripción</h3>
                        <p className="text-gray-300 mb-4">
                            Ciertas funciones de la App requieren una suscripción de pago ("Funciones Premium"). Las suscripciones se procesan a través del App Store de Apple y están sujetas a sus términos y condiciones respectivos.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">6.2 Pago</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                            <li>Las suscripciones se cobran a su cuenta del App Store de Apple</li>
                            <li>El pago se cobrará al confirmar la compra</li>
                            <li>Las suscripciones se renuevan automáticamente a menos que se desactive la renovación automática al menos 24 horas antes del final del período actual</li>
                            <li>Se cobrará a su cuenta la renovación dentro de las 24 horas anteriores al final del período actual</li>
                            <li>Puede gestionar o cancelar su suscripción a través de la configuración de su cuenta del App Store</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">6.3 Prueba Gratuita</h3>
                        <p className="text-gray-300 mb-4">
                            Ofrecemos un período de prueba gratuita de 3 días para suscripciones anuales de Funciones Premium. Se le cobrará una vez que finalice el período de prueba a menos que cancele antes de que expire la prueba. Nos reservamos el derecho de modificar o cancelar las ofertas de prueba gratuita en cualquier momento.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">6.4 Cambios en los Precios</h3>
                        <p className="text-gray-300">
                            Nos reservamos el derecho de cambiar los precios de suscripción en cualquier momento. Para los suscriptores existentes, proporcionaremos al menos 30 días de aviso antes de que cualquier aumento de precio entre en vigencia. Los cambios de precio no se aplicarán a su período de suscripción actual si compró antes del cambio.
                        </p>
                    </section>

                    {/* 7. Intellectual Property Rights */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">7. Derechos de Propiedad Intelectual</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">7.1 Propiedad</h3>
                        <p className="text-gray-300 mb-4">
                            La App, incluido todo el contenido, características, funcionalidad, software, diseño, texto, gráficos, logotipos y tecnología subyacente, es propiedad del Desarrollador y está protegida por leyes de derechos de autor, marcas registradas, patentes, secretos comerciales y otras leyes de propiedad intelectual.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">7.2 Contenido de Terceros</h3>
                        <p className="text-gray-300 mb-4">
                            Algunas afirmaciones y contenido en la App pueden provenir de terceros o del dominio público. Respetamos los derechos de propiedad intelectual y esperamos que los usuarios hagan lo mismo.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">7.3 Contenido Generado por el Usuario</h3>
                        <p className="text-gray-300 mb-4">
                            Usted conserva la propiedad total de las afirmaciones personalizadas que cree. El contenido personalizado se almacena localmente en su dispositivo y no nos es transmitido ni accedido por nosotros.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">7.4 Marcas Comerciales</h3>
                        <p className="text-gray-300">
                            "Lio" y los logotipos asociados son marcas comerciales del Desarrollador. No puede usar estas marcas comerciales sin permiso previo por escrito.
                        </p>
                    </section>

                    {/* 8. Medical Disclaimer */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">8. Descargo de Responsabilidad Médica</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">8.1 No es Consejo Médico</h3>
                        <p className="text-gray-300 mb-4">
                            LA APP NO ESTÁ DESTINADA A PROPORCIONAR ASESORAMIENTO MÉDICO, DE SALUD MENTAL O TERAPÉUTICO. Las afirmaciones y el contenido proporcionados son solo para fines informativos y motivacionales y no deben considerarse un sustituto del asesoramiento, diagnóstico o tratamiento médico o de salud mental profesional.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">8.2 Consulte a Profesionales</h3>
                        <p className="text-gray-300 mb-4">
                            Siempre busque el consejo de proveedores de atención médica calificados con preguntas sobre condiciones o tratamientos de salud mental. Nunca ignore el consejo médico profesional ni demore en buscarlo debido al contenido de esta App.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">8.3 Situaciones de Emergencia</h3>
                        <p className="text-gray-300 mb-3">
                            Si está experimentando una emergencia de salud mental o crisis, comuníquese de inmediato con los servicios de emergencia:
                        </p>

                        <div className="space-y-4 mb-4">
                            <div className="glass-card p-4">
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">España</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>Emergencias generales:</strong> 112</li>
                                    <li><strong>Prevención del suicidio:</strong> 024 (Línea de atención a la conducta suicida, disponible 24/7)</li>
                                    <li><strong>Teléfono de la Esperanza:</strong> 717 003 717</li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">América Latina</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>México:</strong> 911 (Emergencias) | 800 290 0024 (Línea de la Vida)</li>
                                    <li><strong>Argentina:</strong> 911 (Emergencias) | 135 (Centro de Asistencia al Suicida)</li>
                                    <li><strong>Chile:</strong> 131 (Emergencias) | 600 360 7777 (Salud Responde)</li>
                                    <li><strong>Colombia:</strong> 123 (Emergencias) | 106 (Línea de atención en crisis)</li>
                                    <li><strong>Perú:</strong> 105 (Emergencias) | 113 (Salud Mental)</li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">Estados Unidos</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>Emergencias:</strong> 911</li>
                                    <li><strong>Suicide & Crisis Lifeline:</strong> 988</li>
                                    <li><strong>Crisis Text Line:</strong> Envía "HELLO" al 741741</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-gray-300">
                            La App no está diseñada para intervención en crisis o apoyo de emergencia en salud mental.
                        </p>
                    </section>

                    {/* 9. Disclaimer of Warranties */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">9. Exención de Garantías</h2>
                        <p className="text-gray-300 mb-3">
                            EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY (SUJETO A LAS LEYES OBLIGATORIAS DE PROTECCIÓN AL CONSUMIDOR PARA CONSUMIDORES DE LA UE), LA APP SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD" SIN GARANTÍAS DE NINGÚN TIPO, YA SEA EXPRESAS O IMPLÍCITAS, INCLUYENDO PERO NO LIMITADO A:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                            <li>Garantías implícitas de comerciabilidad, idoneidad para un propósito particular y no infracción</li>
                            <li>Garantías con respecto a la precisión, confiabilidad o integridad del contenido</li>
                            <li>Garantías de que la App será ininterrumpida, segura o libre de errores</li>
                            <li>Garantías con respecto a los resultados obtenidos del uso de la App</li>
                        </ul>
                        <p className="text-gray-300">
                            <strong>Aviso para Consumidores de la UE:</strong> Si usted es un consumidor de la UE, esta exención no afecta sus derechos legales bajo las leyes de protección al consumidor aplicables, incluyendo derechos a la conformidad del contenido y servicios digitales bajo la Directiva (UE) 2019/770.
                        </p>
                    </section>

                    {/* 10. Limitation of Liability */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">10. Limitación de Responsabilidad</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">10.1 Aviso para Consumidores de la UE</h3>
                        <p className="text-gray-300 mb-3">
                            Para Consumidores de la UE: Nada en estos Términos excluye o limita nuestra responsabilidad por:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                            <li>Muerte o lesiones personales causadas por nuestra negligencia</li>
                            <li>Fraude o declaración fraudulenta</li>
                            <li>Cualquier responsabilidad que no pueda ser excluida o limitada bajo las leyes de protección al consumidor aplicables</li>
                            <li>Incumplimiento de los requisitos de conformidad obligatorios bajo la ley de la UE</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">10.2 Exclusión de Daños (Usuarios no UE o según lo permita la ley)</h3>
                        <p className="text-gray-300 mb-3">
                            Sujeto a la Sección 10.1, no seremos responsables de ningún daño indirecto, incidental, especial, consecuente, punitivo o ejemplar, incluyendo pero no limitado a:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                            <li>Pérdida de beneficios, ingresos o datos</li>
                            <li>Pérdida de buena voluntad o reputación</li>
                            <li>Interrupción del negocio</li>
                            <li>Lesiones personales o angustia emocional (excepto cuando sea causada por nuestra negligencia)</li>
                            <li>Cualquier otra pérdida intangible</li>
                        </ul>
                        <p className="text-gray-300 mb-4">
                            INCLUSO SI SE NOS HA INFORMADO DE LA POSIBILIDAD DE TALES DAÑOS.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">10.3 Responsabilidad Máxima (Sujeto a leyes de consumo obligatorias)</h3>
                        <p className="text-gray-300 mb-4">
                            Sujeto a la Sección 10.1, nuestra responsabilidad total hacia usted por todos los reclamos que surjan de o estén relacionados con estos Términos o su uso de la App no excederá el mayor de:
                        </p>
                        <p className="text-gray-300 ml-4">
                            (a) La cantidad que nos pagó en los doce (12) meses anteriores al reclamo, o<br />
                            (b) Cien euros (€100.00)
                        </p>
                    </section>

                    {/* 11. Third-Party Services */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">11. Servicios de Terceros y Enlaces</h2>
                        <p className="text-gray-300 mb-4">
                            La App se integra y depende de servicios de terceros, incluyendo RevenueCat, Supabase, Sentry, PostHog y TikTok Pixel. No somos responsables de:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                            <li>La disponibilidad, precisión o contenido de los servicios de terceros</li>
                            <li>Las prácticas de privacidad o términos de servicio de terceros</li>
                            <li>Cualquier daño o pérdida causado por servicios de terceros</li>
                        </ul>
                        <p className="text-gray-300">
                            Su uso de servicios de terceros se rige por sus respectivos términos y políticas de privacidad.
                        </p>
                    </section>

                    {/* 12. Modifications */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">12. Modificaciones a la App y los Términos</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">12.1 Cambios en la App</h3>
                        <p className="text-gray-300 mb-4">
                            Nos reservamos el derecho de modificar, suspender o discontinuar la App (o cualquier parte de ella) en cualquier momento, con o sin aviso, por cualquier motivo. No seremos responsables ante usted o terceros por cualquier modificación, suspensión o discontinuación de la App.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">12.2 Cambios en los Términos</h3>
                        <p className="text-gray-300">
                            Podemos revisar estos Términos de vez en cuando. La fecha de "Última actualización" en la parte superior de estos Términos indica cuándo se revisaron por última vez. Los cambios materiales se notificarán a través de la App o por correo electrónico (si se proporciona). Su uso continuado de la App después de que los cambios entren en vigencia constituye la aceptación de los Términos revisados.
                        </p>
                    </section>

                    {/* 13. Termination */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">13. Terminación</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">13.1 Terminación por Usted</h3>
                        <p className="text-gray-300 mb-4">
                            Puede dejar de usar la App y eliminarla de sus dispositivos en cualquier momento. Eliminar la App no cancela automáticamente las suscripciones de pago; debe cancelar a través de la configuración de su cuenta del App Store.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">13.2 Terminación por Nosotros</h3>
                        <p className="text-gray-300 mb-4">
                            Podemos terminar o suspender su acceso a la App inmediatamente, sin previo aviso o responsabilidad, por cualquier motivo, incluido si incumple estos Términos. Al terminar, su derecho a usar la App cesará inmediatamente.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">13.3 Efecto de la Terminación</h3>
                        <p className="text-gray-300 mb-3">Al terminar:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>Todas las licencias otorgadas a usted terminarán inmediatamente</li>
                            <li>Debe cesar todo uso de la App y eliminarla de sus dispositivos</li>
                            <li>Las disposiciones que por su naturaleza deberían sobrevivir a la terminación sobrevivirán, incluidas la propiedad, las exenciones de garantía y las limitaciones de responsabilidad</li>
                        </ul>
                    </section>

                    {/* 14. Geographic Availability */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">14. Disponibilidad Geográfica</h2>
                        <p className="text-gray-300">
                            La App es controlada y operada desde España y está destinada principalmente a usuarios en la Unión Europea, América Latina y Estados Unidos. No hacemos ninguna declaración de que la App sea apropiada o esté disponible para su uso en todas las ubicaciones. El acceso a la App desde territorios donde su contenido es ilegal está prohibido. Los usuarios fuera de estas regiones acceden a la App bajo su propio riesgo y son responsables del cumplimiento de las leyes locales.
                        </p>
                    </section>

                    {/* 15. Accessibility */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">15. Accesibilidad</h2>
                        <p className="text-gray-300">
                            Nos esforzamos por hacer que la App sea accesible para todos los usuarios. Si experimenta alguna dificultad para acceder a cualquier parte de la App, contáctenos y trabajaremos con usted para proporcionar la información o el servicio que busca a través de un método de comunicación alternativo.
                        </p>
                    </section>

                    {/* 16. Feedback */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">16. Comentarios</h2>
                        <p className="text-gray-300">
                            Damos la bienvenida a comentarios, observaciones y sugerencias para mejoras de la App ("Comentarios"). Usted reconoce y acepta que si envía Comentarios, podemos usarlos sin restricción o compensación para usted, y por la presente nos otorga una licencia perpetua, irrevocable, mundial y libre de regalías para usar, modificar e incorporar dichos Comentarios en nuestros productos y servicios.
                        </p>
                    </section>

                    {/* 17. Apple Specific Terms */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">17. Términos Específicos de Apple</h2>
                        <p className="text-gray-300 mb-3">
                            Si accede a la App a través del App Store de Apple, usted reconoce que:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>Estos Términos son entre usted y el Desarrollador, no Apple</li>
                            <li>Apple no tiene obligación de proporcionar servicios de mantenimiento o soporte</li>
                            <li>Apple no es responsable de abordar ningún reclamo relacionado con la App</li>
                            <li>Apple es un beneficiario tercero de estos Términos y puede hacerlos cumplir</li>
                        </ul>
                    </section>

                    {/* 18. Contact Information */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">18. Información de Contacto</h2>
                        <p className="text-gray-300 mb-4">
                            Para preguntas, inquietudes o avisos relacionados con estos Términos, contáctenos en:
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
                            Para consumidores de la UE que ejercen sus derechos legales, indique claramente la naturaleza de su solicitud en el asunto.
                        </p>
                    </section>

                    {/* 19. Acknowledgment */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">19. Reconocimiento</h2>
                        <p className="text-gray-300">
                            AL USAR LA APP, USTED RECONOCE QUE HA LEÍDO ESTOS TÉRMINOS DE USO, LOS ENTIENDE Y ACEPTA ESTAR SUJETO A ELLOS. SI NO ESTÁ DE ACUERDO CON ESTOS TÉRMINOS, NO DEBE ACCEDER NI USAR LA APP.
                        </p>
                    </section>

                    {/* Footer Note */}
                    <div className="border-t border-white/20 pt-8 mt-12">
                        <p className="text-center text-gray-400 text-sm">
                            <strong>Última actualización: 12 de febrero de 2026</strong>
                        </p>
                    </div>

                </div>
            </article>
        </div>
    );
}
