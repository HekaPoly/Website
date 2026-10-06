import EmbeddedMicrosoftForm from '../components/EmbeddedMicrosoftForm';
import { microsoftFormUrls } from '../data/forms';
import { partners, PARTNERSHIP_REASONS } from '../data/partners';
import { site } from '../data/site';
import { asset } from '../utils/assets';
import { useLocale } from '../i18n';

export default function Partners() {
    const { t, translateData } = useLocale();
    const localizedPartners = translateData(partners, 'partner');
    const localizedReasons = translateData(PARTNERSHIP_REASONS, 'partnerReason');
    const localizedSite = translateData(site, 'site');
    return (
        <div className='pt-16'>
            <section className='relative py-20 lg:py-28 border-b border-border overflow-hidden'>
                <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{
                        backgroundImage: `url('${asset('public/images/team/4cc53130-ecc2-4901-9329-c58d022b59fa.jpg')}')`,
                        backgroundPosition: 'center 45%',
                    }}
                />
                <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.82)_0%,rgba(15,23,42,0.65)_38%,rgba(15,23,42,0.28)_68%,transparent_100%)]' />
                <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='max-w-2xl'>
                        <span
                            className='text-xs font-medium text-heka-yellow uppercase tracking-widest'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            {t('nav.partners')}
                        </span>
                        <h1
                            className='text-4xl lg:text-6xl mt-4 mb-6 text-white leading-tight font-bold'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            {t('partners.heroTitle')}
                        </h1>
                        <p className='text-white/80 leading-relaxed max-w-xl'>
                            {t('partners.heroText')}
                        </p>
                        <div className='flex flex-wrap justify-start gap-3 mt-8'>
                            <a
                                href={asset('public/documents/HEKA_2026-2027.pdf')}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 rounded-lg bg-heka-yellow px-5 py-3 text-sm font-semibold text-charcoal shadow-lg hover:bg-[#f6d27e] transition-colors'
                            >
                                <svg
                                    className='w-4 h-4'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M12 16V4m0 12l-4-4m4 4l4-4M5 20h14'
                                    />
                                </svg>
                                {t('partners.presentationFr')}
                            </a>
                            <a
                                href={asset('public/documents/HEKA_2026-2027_EN.pdf')}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 rounded-lg border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors'
                            >
                                <svg
                                    className='w-4 h-4'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M12 16V4m0 12l-4-4m4 4l4-4M5 20h14'
                                    />
                                </svg>
                                {t('partners.presentationEn')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='mb-12'>
                        <span
                            className='text-xs font-medium text-muted uppercase tracking-widest'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            {t('partners.why')}
                        </span>
                        <h2
                            className='text-3xl lg:text-4xl mt-3 text-charcoal'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            {t('partners.whyTitle')}
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {localizedReasons.map((item, i) => (
                            <div
                                key={i}
                                className='p-7 rounded-2xl border border-border hover:border-heka-mid transition-colors'
                            >
                                <div className='w-7 h-7 rounded-full bg-heka-light flex items-center justify-center mb-4'>
                                    <span
                                        className='text-xs text-heka'
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className='font-semibold text-charcoal mb-2 text-sm'>{t(`partnerReason.${i}.title`)}</h3>
                                <p className='text-xs text-muted leading-relaxed'>{t(`partnerReason.${i}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='py-20 bg-cream'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='mb-10'>
                        <span
                            className='text-xs font-medium text-muted uppercase tracking-widest'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            {t('partners.current')}
                        </span>
                        <h2
                            className='text-2xl lg:text-3xl mt-2 text-charcoal'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            {t('partners.currentTitle')}
                        </h2>
                    </div>
                    {partners.length > 0 ? (
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
                            {localizedPartners.map((partner) => (
                                <a
                                    key={partner.id}
                                    href={partner.website || '#'}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='h-24 rounded-xl border border-border bg-white flex items-center justify-center hover:border-heka-mid transition-colors p-4'
                                >
                                    {partner.logo ? (
                                        <img
                                            src={asset(partner.logo)}
                                            alt={partner.name}
                                            className='max-h-12 max-w-full object-contain'
                                        />
                                    ) : (
                                        <span className='text-sm font-medium text-muted text-center'>
                                            {partner.name}
                                        </span>
                                    )}
                                </a>
                            ))}
                        </div>
                    ) : (
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className='h-24 rounded-xl border border-dashed border-border bg-white flex items-center justify-center text-xs text-muted text-center p-4'
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    Logo partenaire
                                    <br />
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                    <p
                        className='text-xs text-[#C8C3BB]'
                        style={{ fontFamily: 'var(--font-mono)' }}
                    >
                        {t('partners.logoNote')}
                    </p>
                </div>
            </section>

            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='grid lg:grid-cols-2 gap-16'>
                        <div>
                            <span
                                className='text-xs font-medium text-muted uppercase tracking-widest'
                                style={{ fontFamily: 'var(--font-mono)' }}
                            >
                                {t('partners.contact')}
                            </span>
                            <h2
                                className='text-3xl lg:text-4xl mt-3 mb-6 text-charcoal'
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {t('partners.contactTitle')}
                            </h2>
                            <p className='text-muted leading-relaxed mb-8 text-sm'>
                                {t('partners.contactText')}
                            </p>
                            <div className='space-y-4 text-sm'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-8 h-8 rounded-full bg-heka-light flex items-center justify-center shrink-0'>
                                        <svg
                                            className='w-4 h-4 text-heka'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                            />
                                        </svg>
                                    </div>
                                    <a
                                        href={`mailto:${localizedSite.emailPartnership}`}
                                        className='text-heka hover:underline'
                                    >
                                        {localizedSite.emailPartnership}
                                    </a>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='w-8 h-8 rounded-full bg-heka-light flex items-center justify-center shrink-0'>
                                        <svg
                                            className='w-4 h-4 text-heka'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                                            />
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                                            />
                                        </svg>
                                    </div>
                                    <span className='text-muted'>Polytechnique Montréal, Montréal (Québec)</span>
                                </div>
                            </div>
                        </div>
                        <EmbeddedMicrosoftForm
                            src={microsoftFormUrls.partnership}
                            title={t('forms.partnershipTitle')}
                            heightClassName='h-[800px] lg:h-[900px]'
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
