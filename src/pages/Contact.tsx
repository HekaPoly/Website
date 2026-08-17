import { useState } from 'react';
import { recruitmentForm, contactForm } from '../data/forms';
import { site } from '../data/site';
import { asset } from '../utils/assets';

export default function Contact() {
    const [tab, setTab] = useState<'recrutement' | 'general'>('recrutement');
    const [recForm, setRecForm] = useState<Record<string, string>>({});
    const [genForm, setGenForm] = useState<Record<string, string>>({});
    const [recSent, setRecSent] = useState(false);
    const [genSent, setGenSent] = useState(false);

    const inputClass =
        'w-full px-4 py-3 rounded-xl border border-[#E2DDD5] bg-[#F8F7F3] text-sm focus:outline-none focus:border-[#41699d] transition-colors';

    const renderField = (
        field: (typeof recruitmentForm.fields)[number],
        formState: Record<string, string>,
        setFormState: (s: Record<string, string>) => void,
    ) => (
        <div key={field.id}>
            <label className='block text-xs font-medium text-charcoal mb-2'>
                {field.label}
                {field.required ? ' *' : ''}
            </label>
            {field.type === 'textarea' ? (
                <textarea
                    required={field.required}
                    rows={field.rows ?? 3}
                    value={formState[field.id] ?? ''}
                    onChange={(e) => setFormState({ ...formState, [field.id]: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder={field.placeholder}
                />
            ) : field.type === 'select' ? (
                <select
                    required={field.required}
                    value={formState[field.id] ?? ''}
                    onChange={(e) => setFormState({ ...formState, [field.id]: e.target.value })}
                    className={inputClass}
                >
                    <option value=''>Sélectionner</option>
                    {field.options?.map((o) => (
                        <option
                            key={o.value}
                            value={o.value}
                        >
                            {o.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={field.type}
                    required={field.required}
                    value={formState[field.id] ?? ''}
                    onChange={(e) => setFormState({ ...formState, [field.id]: e.target.value })}
                    className={inputClass}
                    placeholder={field.placeholder}
                />
            )}
        </div>
    );

    return (
        <div className='pt-16'>
            <section className='relative py-20 lg:py-28 border-b border-border overflow-hidden'>
                {/* Background image */}
                <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{
                        backgroundImage:
                            `url('${asset('public/images/team/380406934_305135572284172_3382824170791790552_n-scaled.jpg')}')`,
                        backgroundPosition: 'center 45%',
                    }}
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.82)_0%,rgba(15,23,42,0.65)_38%,rgba(15,23,42,0.28)_68%,transparent_100%)]' />

                {/* Content */}
                <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-10'>
                    <div className='max-w-2xl'>
                        <span
                            className='text-xs font-medium text-heka-yellow uppercase tracking-widest'
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Nous joindre
                        </span>

                        <h1
                            className='text-4xl lg:text-6xl mt-4 mb-6 text-white leading-tight font-bold'
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Travaillons ensemble.
                        </h1>

                        <p className='text-white/80 leading-relaxed max-w-xl'>
                            Vous souhaitez rejoindre Héka ou simplement prendre contact? Choisissez la bonne section
                            ci-dessous.
                        </p>
                    </div>
                </div>
            </section>

            <section className='py-16 bg-white'>
                <div className='max-w-5xl mx-auto px-6 lg:px-10'>
                    <div className='flex gap-2 mb-12 p-1 bg-[#F2EEE8] rounded-xl w-fit'>
                        <button
                            onClick={() => setTab('recrutement')}
                            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${tab === 'recrutement' ? 'bg-white text-charcoal shadow-sm' : 'text-muted hover:text-charcoal'}`}
                        >
                            Recrutement
                        </button>
                        <button
                            onClick={() => setTab('general')}
                            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${tab === 'general' ? 'bg-white text-charcoal shadow-sm' : 'text-muted hover:text-charcoal'}`}
                        >
                            Contact général
                        </button>
                    </div>

                    {tab === 'recrutement' && (
                        <div className='grid lg:grid-cols-2 gap-16'>
                            <div>
                                <h2
                                    className='text-2xl lg:text-3xl text-charcoal mb-4'
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    Rejoindre Héka.
                                </h2>
                                <p className='text-muted text-sm leading-relaxed mb-6'>
                                    Nous cherchons des étudiants motivés, rigoureux et prêts à travailler en équipe sur
                                    des projets qui ont un impact réel.
                                </p>
                                <div className='space-y-3'>
                                    {[
                                        'Expérience pratique sur des prototypes réels',
                                        'Collaboration multidisciplinaire',
                                        'Compétitions interuniversitaires',
                                        'Réseautage avec des partenaires industriels',
                                        'Responsabilités dès la première session',
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className='flex items-center gap-3 text-sm text-muted'
                                        >
                                            <span className='w-4 h-4 rounded-full bg-heka-light flex items-center justify-center shrink-0'>
                                                <span className='w-1.5 h-1.5 rounded-full bg-heka' />
                                            </span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className='mt-8 p-5 rounded-xl bg-heka-light border border-heka-mid'>
                                    <div
                                        className='text-xs font-medium text-heka mb-2'
                                        style={{ fontFamily: 'var(--font-mono)' }}
                                    >
                                        Contact recrutement
                                    </div>
                                    <a
                                        href={`mailto:${site.emailRecruitment}`}
                                        className='text-sm text-heka hover:underline'
                                    >
                                        {site.emailRecruitment}
                                    </a>
                                </div>
                            </div>

                            {recSent ? (
                                <div className='flex items-center justify-center p-12 rounded-2xl bg-heka-light border border-heka-mid'>
                                    <div className='text-center'>
                                        <div className='w-12 h-12 rounded-full bg-heka flex items-center justify-center mx-auto mb-4'>
                                            <svg
                                                className='w-6 h-6 text-white'
                                                fill='none'
                                                stroke='currentColor'
                                                strokeWidth='2.5'
                                                viewBox='0 0 24 24'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M5 13l4 4L19 7'
                                                />
                                            </svg>
                                        </div>
                                        <h3
                                            className='text-lg font-semibold text-charcoal mb-2'
                                            style={{ fontFamily: 'var(--font-display)' }}
                                        >
                                            Candidature reçue
                                        </h3>
                                        <p className='text-sm text-muted'>
                                            Nous vous répondrons dans les prochains jours.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        setRecSent(true);
                                    }}
                                    className='space-y-5'
                                >
                                    <div className='grid sm:grid-cols-2 gap-5'>
                                        {recruitmentForm.fields
                                            .slice(0, 2)
                                            .map((f) => renderField(f, recForm, setRecForm))}
                                    </div>
                                    <div className='grid sm:grid-cols-2 gap-5'>
                                        {recruitmentForm.fields
                                            .slice(2, 4)
                                            .map((f) => renderField(f, recForm, setRecForm))}
                                    </div>
                                    {recruitmentForm.fields.slice(4).map((f) => renderField(f, recForm, setRecForm))}
                                    <button
                                        type='submit'
                                        className='w-full px-6 py-3.5 rounded-xl bg-heka text-white font-semibold text-sm hover:bg-[#2D5585] transition-colors'
                                    >
                                        {recruitmentForm.submitLabel}
                                    </button>
                                </form>
                            )}
                        </div>
                    )}

                    {tab === 'general' && (
                        <div className='grid lg:grid-cols-2 gap-16'>
                            <div>
                                <h2
                                    className='text-2xl lg:text-3xl text-charcoal mb-4'
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    Prendre contact.
                                </h2>
                                <p className='text-muted text-sm leading-relaxed mb-8'>
                                    Pour toute question, demande de collaboration, de partenariat ou de couverture
                                    médiatique.
                                </p>
                                <div className='space-y-4'>
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
                                            href={`mailto:${site.email}`}
                                            className='text-sm text-heka hover:underline'
                                        >
                                            {site.email}
                                        </a>
                                    </div>
                                    <div className='flex items-start gap-3'>
                                        <div className='w-8 h-8 rounded-full bg-heka-light flex items-center justify-center shrink-0 mt-0.5'>
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
                                        <span className='text-sm text-muted leading-relaxed whitespace-pre-line'>
                                            {site.address}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {genSent ? (
                                <div className='flex items-center justify-center p-12 rounded-2xl bg-heka-light border border-heka-mid'>
                                    <div className='text-center'>
                                        <div className='w-12 h-12 rounded-full bg-heka flex items-center justify-center mx-auto mb-4'>
                                            <svg
                                                className='w-6 h-6 text-white'
                                                fill='none'
                                                stroke='currentColor'
                                                strokeWidth='2.5'
                                                viewBox='0 0 24 24'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M5 13l4 4L19 7'
                                                />
                                            </svg>
                                        </div>
                                        <h3
                                            className='text-lg font-semibold text-charcoal mb-2'
                                            style={{ fontFamily: 'var(--font-display)' }}
                                        >
                                            Message envoyé
                                        </h3>
                                        <p className='text-sm text-muted'>
                                            Nous vous répondrons dans les meilleurs délais.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        setGenSent(true);
                                    }}
                                    className='space-y-5'
                                >
                                    <div className='grid sm:grid-cols-2 gap-5'>
                                        {contactForm.fields.slice(0, 2).map((f) => renderField(f, genForm, setGenForm))}
                                    </div>
                                    {contactForm.fields.slice(2).map((f) => renderField(f, genForm, setGenForm))}
                                    <button
                                        type='submit'
                                        className='w-full px-6 py-3.5 rounded-xl bg-heka text-white font-semibold text-sm hover:bg-[#2D5585] transition-colors'
                                    >
                                        {contactForm.submitLabel}
                                    </button>
                                </form>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
