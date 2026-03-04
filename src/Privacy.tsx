import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

export default function Privacy() {
    const { t } = useTranslation();
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
                        {t('privacy.title')}
                    </motion.h1>

                    <p className="text-center text-gray-400 mb-12">
                        {t('privacy.lastUpdated')}
                    </p>

                    {/* Introduction */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.introTitle')}</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {t('privacy.introText')}
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.infoCollectTitle')}</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('privacy.infoDirectTitle')}</h3>
                        <p className="text-gray-300 mb-3">{t('privacy.infoDirectIntro')}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('privacy.infoDirectBasic')}</li>
                            <li>{t('privacy.infoDirectPrefs')}</li>
                            <li>{t('privacy.infoDirectNotifs')}</li>
                            <li>{t('privacy.infoDirectWidget')}</li>
                            <li>{t('privacy.infoDirectPremium')}</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6 text-purple-300">{t('privacy.infoAutoTitle')}</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('privacy.infoAutoDevice')}</li>
                            <li>{t('privacy.infoAutoAnalytics')}</li>
                            <li>{t('privacy.infoAutoCrash')}</li>
                            <li>{t('privacy.infoAutoSession')}</li>
                            <li>{t('privacy.infoAutoPurchase')}</li>
                            <li>{t('privacy.infoAutoAds')}</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6 text-purple-300">{t('privacy.infoLocalTitle')}</h3>
                        <p className="text-gray-300 mb-3">{t('privacy.infoLocalIntro')}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('privacy.infoLocalStreak')}</li>
                            <li>{t('privacy.infoLocalFavs')}</li>
                            <li>{t('privacy.infoLocalCustom')}</li>
                            <li>{t('privacy.infoLocalNotifPrefs')}</li>
                            <li>{t('privacy.infoLocalCategories')}</li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.howUseTitle')}</h2>
                        <p className="text-gray-300 mb-3">{t('privacy.howUseIntro')}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('privacy.howUseService')}</li>
                            <li>{t('privacy.howUseImprove')}</li>
                            <li>{t('privacy.howUseSupport')}</li>
                            <li>{t('privacy.howUseSubs')}</li>
                            <li>{t('privacy.howUseErrors')}</li>
                            <li>{t('privacy.howUseComms')}</li>
                        </ul>
                    </section>

                    {/* Third-Party Services */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.thirdPartyTitle')}</h2>
                        <p className="text-gray-300 mb-4">{t('privacy.thirdPartyIntro')}</p>

                        <div className="space-y-4">
                            <div className="glass-card p-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">{t('privacy.tpRevenueCatTitle')}</h3>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>{t('privacy.tpRevenueCatPurpose')}</li>
                                    <li>{t('privacy.tpRevenueCatData')}</li>
                                    <li>{t('privacy.tpRevenueCatPrivacy')} <a href="https://www.revenuecat.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a></li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">{t('privacy.tpSupabaseTitle')}</h3>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>{t('privacy.tpSupabasePurpose')}</li>
                                    <li>{t('privacy.tpSupabaseData')}</li>
                                    <li>{t('privacy.tpSupabasePrivacy')} <a href="https://supabase.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://supabase.com/privacy</a></li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">{t('privacy.tpSentryTitle')}</h3>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>{t('privacy.tpSentryPurpose')}</li>
                                    <li>{t('privacy.tpSentryData')}</li>
                                    <li>{t('privacy.tpSentryPrivacy')} <a href="https://sentry.io/privacy/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://sentry.io/privacy/</a></li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">{t('privacy.tpPostHogTitle')}</h3>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>{t('privacy.tpPostHogPurpose')}</li>
                                    <li>{t('privacy.tpPostHogData')}</li>
                                    <li>{t('privacy.tpPostHogPrivacy')} <a href="https://posthog.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://posthog.com/privacy</a></li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">{t('privacy.tpAppleTitle')}</h3>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>{t('privacy.tpApplePurpose')}</li>
                                    <li>{t('privacy.tpAppleData')}</li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2">{t('privacy.tpTikTokTitle')}</h3>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>{t('privacy.tpTikTokPurpose')}</li>
                                    <li>{t('privacy.tpTikTokData')}</li>
                                    <li>{t('privacy.tpTikTokPrivacy')} <a href="https://www.tiktok.com/legal/privacy-policy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://www.tiktok.com/legal/privacy-policy</a></li>
                                    <li>{t('privacy.tpTikTokOptOut')}</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Data Retention */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.retentionTitle')}</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('privacy.retentionAccount')}</li>
                            <li>{t('privacy.retentionAnalytics')}</li>
                            <li>{t('privacy.retentionLocal')}</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.securityTitle')}</h2>
                        <p className="text-gray-300 mb-3">{t('privacy.securityIntro')}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('privacy.securityTls')}</li>
                            <li>{t('privacy.securityStorage')}</li>
                            <li>{t('privacy.securityAudits')}</li>
                            <li>{t('privacy.securityAccess')}</li>
                        </ul>
                        <p className="text-gray-300 mt-3">
                            {t('privacy.securityWarning')}
                        </p>
                    </section>

                    {/* Your Privacy Rights */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.rightsTitle')}</h2>
                        <p className="text-gray-300 mb-3">{t('privacy.rightsIntro')}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('privacy.rightsAccess')}</li>
                            <li>{t('privacy.rightsCorrect')}</li>
                            <li>{t('privacy.rightsDelete')}</li>
                            <li>{t('privacy.rightsPortable')}</li>
                            <li>{t('privacy.rightsOptOutAds')}</li>
                            <li>{t('privacy.rightsOptOutTracking')}</li>
                            <li>{t('privacy.rightsWithdrawConsent')}</li>
                        </ul>
                        <p className="text-gray-300 mt-3">
                            {t('privacy.rightsContact')}
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.childrenTitle')}</h2>
                        <p className="text-gray-300">
                            {t('privacy.childrenText')}
                        </p>
                    </section>

                    {/* Push Notifications */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.pushTitle')}</h2>
                        <p className="text-gray-300 mb-3">{t('privacy.pushIntro')}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('privacy.pushLocal')}</li>
                            <li>{t('privacy.pushBased')}</li>
                            <li>{t('privacy.pushOptional')}</li>
                            <li>{t('privacy.pushNoAds')}</li>
                        </ul>
                    </section>

                    {/* Changes to This Privacy Policy */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.changesTitle')}</h2>
                        <p className="text-gray-300 mb-3">{t('privacy.changesIntro')}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('privacy.changesPost')}</li>
                            <li>{t('privacy.changesDate')}</li>
                            <li>{t('privacy.changesNotify')}</li>
                        </ul>
                        <p className="text-gray-300 mt-3">
                            {t('privacy.changesAccept')}
                        </p>
                    </section>

                    {/* European Users (GDPR) */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.gdprTitle')}</h2>
                        <p className="text-gray-300 mb-4">
                            {t('privacy.gdprIntro')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('privacy.gdprRightsTitle')}</h3>
                        <p className="text-gray-300 mb-3">{t('privacy.gdprRightsIntro')}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('privacy.gdprAccess')}</li>
                            <li>{t('privacy.gdprRectify')}</li>
                            <li>{t('privacy.gdprForget')}</li>
                            <li>{t('privacy.gdprRestrict')}</li>
                            <li>{t('privacy.gdprPortable')}</li>
                            <li>{t('privacy.gdprObject')}</li>
                            <li>{t('privacy.gdprWithdraw')}</li>
                            <li>{t('privacy.gdprComplain')}</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6 text-purple-300">{t('privacy.gdprAuthorityTitle')}</h3>
                        <p className="text-gray-300 mb-3">{t('privacy.gdprAuthorityIntro')}</p>
                        <div className="glass-card p-4 text-gray-300">
                            <p className="font-semibold text-white mb-2">{t('privacy.gdprAepdTitle')}</p>
                            <ul className="text-sm space-y-1">
                                <li>{t('privacy.gdprAepdWeb')} <a href="https://www.aepd.es" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://www.aepd.es</a></li>
                                <li>{t('privacy.gdprAepdAddress')}</li>
                                <li>{t('privacy.gdprAepdPhone')}</li>
                            </ul>
                        </div>
                        <p className="text-gray-300 mt-3">
                            {t('privacy.gdprAuthorityOutro')}
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.contactTitle')}</h2>
                        <p className="text-gray-300 mb-4">
                            {t('privacy.contactIntro')}
                        </p>
                        <div className="glass-card p-6">
                            <ul className="space-y-2 text-gray-300">
                                <li>{t('privacy.contactEmail')} <a href="mailto:franciscoclimentb@gmail.com" className="text-accent hover:underline">franciscoclimentb@gmail.com</a></li>
                                <li>{t('privacy.contactDev')}</li>
                                <li>{t('privacy.contactApp')}</li>
                                <li>{t('privacy.contactLoc')}</li>
                            </ul>
                        </div>
                        <p className="text-gray-300 mt-4">
                            {t('privacy.contactDetails')}
                        </p>
                    </section>

                    {/* Cookie Policy */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('privacy.cookiesTitle')}</h2>
                        <p className="text-gray-300">
                            {t('privacy.cookiesText')}
                        </p>
                    </section>

                    {/* Footer Note */}
                    <div className="border-t border-white/20 pt-8 mt-12">
                        <p className="text-center text-gray-400 text-sm">
                            <strong>{t('privacy.footerNote')}</strong>
                        </p>
                    </div>

                </div>
            </article>
        </div>
    );
}
