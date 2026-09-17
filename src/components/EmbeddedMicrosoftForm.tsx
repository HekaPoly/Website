interface EmbeddedMicrosoftFormProps {
    src: string;
    title: string;
    heightClassName?: string;
}

export default function EmbeddedMicrosoftForm({
    src,
    title,
    heightClassName = 'h-[800px] lg:h-[900px]',
}: EmbeddedMicrosoftFormProps) {
    return (
        <div>
            <div className='overflow-hidden rounded-2xl border border-border bg-white'>
                <iframe
                    src={src}
                    title={title}
                    loading='lazy'
                    className={`w-full border-0 ${heightClassName}`}
                />
            </div>
            <a
                href={src}
                target='_blank'
                rel='noreferrer'
                className='mt-3 inline-block text-sm text-heka hover:underline'
            >
                Ouvrir le formulaire dans un nouvel onglet
            </a>
        </div>
    );
}
