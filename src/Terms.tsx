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

export default function Terms() {
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
                        {t('terms.title')}
                    </motion.h1>

                    <p className="text-center text-gray-400 mb-12">
                        <strong>{t('terms.lastUpdated')}</strong>
                    </p>

                    {/* 1. Acceptance of Terms */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.acceptanceTitle')}</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {t('terms.acceptanceText')}
                        </p>
                    </section>

                    {/* 2. Description of Service */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.descriptionTitle')}</h2>
                        <p className="text-gray-300 mb-3">{t('terms.descriptionIntro')}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('terms.description1')}</li>
                            <li>{t('terms.description2')}</li>
                            <li>{t('terms.description3')}</li>
                            <li>{t('terms.description4')}</li>
                            <li>{t('terms.description5')}</li>
                            <li>{t('terms.description6')}</li>
                            <li>{t('terms.description7')}</li>
                        </ul>
                    </section>

                    {/* 3. Eligibility */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.eligibilityTitle')}</h2>
                        <p className="text-gray-300 leading-relaxed mb-3">
                            {t('terms.eligibilityText')}
                        </p>
                    </section>

                    {/* 4. License Grant and Restrictions */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.licenseTitle')}</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.licenseGrantTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.licenseGrantText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.licenseRestrictionsTitle')}</h3>
                        <p className="text-gray-300 mb-3">{t('terms.licenseRestrictionsIntro')}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('terms.licenseRest1')}</li>
                            <li>{t('terms.licenseRest2')}</li>
                            <li>{t('terms.licenseRest3')}</li>
                            <li>{t('terms.licenseRest4')}</li>
                            <li>{t('terms.licenseRest5')}</li>
                            <li>{t('terms.licenseRest6')}</li>
                            <li>{t('terms.licenseRest7')}</li>
                            <li>{t('terms.licenseRest8')}</li>
                            <li>{t('terms.licenseRest9')}</li>
                            <li>{t('terms.licenseRest10')}</li>
                            <li>{t('terms.licenseRest11')}</li>
                            <li>{t('terms.licenseRest12')}</li>
                        </ul>
                    </section>

                    {/* 5. User Accounts and Data */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.accountsTitle')}</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.accountsCreateTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.accountsCreateText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.accountsDataTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.accountsDataText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.accountsAccuracyTitle')}</h3>
                        <p className="text-gray-300">
                            {t('terms.accountsAccuracyText')}
                        </p>
                    </section>

                    {/* 6. Premium Subscriptions */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.premiumTitle')}</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.premiumTermsTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.premiumTermsText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.premiumPayTitle')}</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                            <li>{t('terms.premiumPay1')}</li>
                            <li>{t('terms.premiumPay2')}</li>
                            <li>{t('terms.premiumPay3')}</li>
                            <li>{t('terms.premiumPay4')}</li>
                            <li>{t('terms.premiumPay5')}</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.premiumTrialTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.premiumTrialText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.premiumPriceTitle')}</h3>
                        <p className="text-gray-300">
                            {t('terms.premiumPriceText')}
                        </p>
                    </section>

                    {/* 7. Intellectual Property Rights */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.ipTitle')}</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.ipOwnershipTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.ipOwnershipText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.ipThirdPartyTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.ipThirdPartyText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.ipUgcTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.ipUgcText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.ipTrademarksTitle')}</h3>
                        <p className="text-gray-300">
                            {t('terms.ipTrademarksText')}
                        </p>
                    </section>

                    {/* 8. Medical Disclaimer */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.medicalTitle')}</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.medicalNotAdviceTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.medicalNotAdviceText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.medicalConsultTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.medicalConsultText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.medicalEmergencyTitle')}</h3>
                        <p className="text-gray-300 mb-3">
                            {t('terms.medicalEmergencyIntro')}
                        </p>

                        <div className="space-y-4 mb-4">
                            <div className="glass-card p-4">
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">{t('terms.medicalSpainTitle')}</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>{t('terms.medicalGenEmergencies')}:</strong> 112</li>
                                    <li><strong>{t('terms.medicalSuicidePrev')}:</strong> {t('terms.medicalSpainSuicide')}</li>
                                    <li><strong>{t('terms.medicalHopePhone')}:</strong> 717 003 717</li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">{t('terms.medicalLatamTitle')}</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>{t('terms.medicalMexico')}:</strong> {t('terms.medicalMexicoDetails')}</li>
                                    <li><strong>{t('terms.medicalArgentina')}:</strong> {t('terms.medicalArgentinaDetails')}</li>
                                    <li><strong>{t('terms.medicalChile')}:</strong> {t('terms.medicalChileDetails')}</li>
                                    <li><strong>{t('terms.medicalColombia')}:</strong> {t('terms.medicalColombiaDetails')}</li>
                                    <li><strong>{t('terms.medicalPeru')}:</strong> {t('terms.medicalPeruDetails')}</li>
                                </ul>
                            </div>

                            <div className="glass-card p-4">
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">{t('terms.medicalUSTitle')}</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li><strong>{t('terms.medicalEmergencies')}:</strong> 911</li>
                                    <li><strong>{t('terms.medicalUSSuicide')}:</strong> 988</li>
                                    <li><strong>{t('terms.medicalUSText')}:</strong> {t('terms.medicalUSTextDetails')}</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-gray-300">
                            {t('terms.medicalNotDesigned')}
                        </p>
                    </section>

                    {/* 9. Disclaimer of Warranties */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.warrantiesTitle')}</h2>
                        <p className="text-gray-300 mb-3">
                            {t('terms.warrantiesIntro')}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                            <li>{t('terms.warranties1')}</li>
                            <li>{t('terms.warranties2')}</li>
                            <li>{t('terms.warranties3')}</li>
                            <li>{t('terms.warranties4')}</li>
                        </ul>
                        <p className="text-gray-300">
                            <strong>{t('terms.warrantiesEUNoticeBold')}:</strong> {t('terms.warrantiesEUNoticeText')}
                        </p>
                    </section>

                    {/* 10. Limitation of Liability */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.liabilityTitle')}</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.liabilityEUNoticeTitle')}</h3>
                        <p className="text-gray-300 mb-3">
                            {t('terms.liabilityEUNoticeIntro')}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                            <li>{t('terms.liabilityEUNotice1')}</li>
                            <li>{t('terms.liabilityEUNotice2')}</li>
                            <li>{t('terms.liabilityEUNotice3')}</li>
                            <li>{t('terms.liabilityEUNotice4')}</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.liabilityExclusionTitle')}</h3>
                        <p className="text-gray-300 mb-3">
                            {t('terms.liabilityExclusionIntro')}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                            <li>{t('terms.liabilityExclusion1')}</li>
                            <li>{t('terms.liabilityExclusion2')}</li>
                            <li>{t('terms.liabilityExclusion3')}</li>
                            <li>{t('terms.liabilityExclusion4')}</li>
                            <li>{t('terms.liabilityExclusion5')}</li>
                        </ul>
                        <p className="text-gray-300 mb-4">
                            {t('terms.liabilityExclusionOutro')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.liabilityMaxTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.liabilityMaxIntro')}
                        </p>
                        <p className="text-gray-300 ml-4">
                            {t('terms.liabilityMaxA')}<br />
                            {t('terms.liabilityMaxB')}
                        </p>
                    </section>

                    {/* 11. Third-Party Services */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.thirdPartyTitle')}</h2>
                        <p className="text-gray-300 mb-4">
                            {t('terms.thirdPartyIntro')}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                            <li>{t('terms.thirdParty1')}</li>
                            <li>{t('terms.thirdParty2')}</li>
                            <li>{t('terms.thirdParty3')}</li>
                        </ul>
                        <p className="text-gray-300">
                            {t('terms.thirdPartyOutro')}
                        </p>
                    </section>

                    {/* 12. Modifications */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.modificationsTitle')}</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.modificationsAppTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.modificationsAppText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.modificationsTermsTitle')}</h3>
                        <p className="text-gray-300">
                            {t('terms.modificationsTermsText')}
                        </p>
                    </section>

                    {/* 13. Termination */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.terminationTitle')}</h2>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.terminationByYouTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.terminationByYouText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.terminationByUsTitle')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('terms.terminationByUsText')}
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-purple-300">{t('terms.terminationEffectTitle')}</h3>
                        <p className="text-gray-300 mb-3">{t('terms.terminationEffectIntro')}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('terms.terminationEffect1')}</li>
                            <li>{t('terms.terminationEffect2')}</li>
                            <li>{t('terms.terminationEffect3')}</li>
                        </ul>
                    </section>

                    {/* 14. Geographic Availability */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.geoTitle')}</h2>
                        <p className="text-gray-300">
                            {t('terms.geoText')}
                        </p>
                    </section>

                    {/* 15. Accessibility */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.accessibilityTitle')}</h2>
                        <p className="text-gray-300">
                            {t('terms.accessibilityText')}
                        </p>
                    </section>

                    {/* 16. Feedback */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.feedbackTitle')}</h2>
                        <p className="text-gray-300">
                            {t('terms.feedbackText')}
                        </p>
                    </section>

                    {/* 17. Apple Specific Terms */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.appleTitle')}</h2>
                        <p className="text-gray-300 mb-3">
                            {t('terms.appleIntro')}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                            <li>{t('terms.apple1')}</li>
                            <li>{t('terms.apple2')}</li>
                            <li>{t('terms.apple3')}</li>
                            <li>{t('terms.apple4')}</li>
                        </ul>
                    </section>

                    {/* 18. Contact Information */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.contactTitle')}</h2>
                        <p className="text-gray-300 mb-4">
                            {t('terms.contactIntro')}
                        </p>
                        <div className="glass-card p-6">
                            <ul className="space-y-2 text-gray-300">
                                <li><strong>{t('terms.contactEmail')}:</strong> <a href="mailto:franciscoclimentb@gmail.com" className="text-accent hover:underline">franciscoclimentb@gmail.com</a></li>
                                <li><strong>{t('terms.contactDeveloper')}:</strong> Francisco Climent</li>
                                <li><strong>{t('terms.contactApp')}:</strong> Lio - Daily Affirmations</li>
                                <li><strong>{t('terms.contactLocation')}:</strong> {t('terms.contactLocationValue')}</li>
                            </ul>
                        </div>
                        <p className="text-gray-300 mt-4">
                            {t('terms.contactEUNotice')}
                        </p>
                    </section>

                    {/* 19. Acknowledgment */}
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('terms.ackTitle')}</h2>
                        <p className="text-gray-300">
                            {t('terms.ackText')}
                        </p>
                    </section>

                    {/* Footer Note */}
                    <div className="border-t border-white/20 pt-8 mt-12">
                        <p className="text-center text-gray-400 text-sm">
                            <strong>{t('terms.lastUpdated')}</strong>
                        </p>
                    </div>

                </div>
            </article>
        </div>
    );
}
