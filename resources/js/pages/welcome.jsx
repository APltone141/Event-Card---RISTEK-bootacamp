import { Head } from '@inertiajs/react';

import EventCard from '../Components/EventCard';

const events = [
    {
        id: 1,
        title: 'Sifest',
        date: '15 Juli 2026',
        description:
            'Festival teknologi terbesar yang menghadirkan inovasi, networking, dan insight dari para expert di industri digital.',
        image_url:
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    },
    {
        id: 2,
        title: 'Hackathon',
        date: '22 Agustus 2026',
        description:
            'Kompetisi coding 48 jam untuk membangun solusi nyata. Tim terbaik akan memenangkan hadiah dan mentorship eksklusif.',
        image_url:
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    },
    {
        id: 3,
        title: 'CTF',
        date: '5 September 2026',
        description:
            'Capture The Flag competition untuk menguji skill keamanan siber. Tantangan reverse engineering, web exploit, dan forensik.',
        image_url:
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
    },
];

export default function Welcome() {
    return (
        <>
            <Head title="Events" />

            <div className="min-h-screen bg-[#FDFDFC] px-6 py-12 text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
                <div className="mx-auto max-w-6xl">
                    <header className="mb-10 text-center">
                        <p className="mb-2 text-sm font-medium tracking-wide text-[#f53003] uppercase dark:text-[#FF4433]">
                            Bootcamp S3
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Upcoming Events
                        </h1>
                        <p className="mx-auto mt-3 max-w-xl text-sm text-[#706f6c] dark:text-[#A1A09A]">
                            Daftar acara teknologi yang akan datang. Data di-render
                            secara statis dari parent component ke{' '}
                            <code className="rounded bg-[#fff2f2] px-1.5 py-0.5 text-xs dark:bg-[#1D0002]">
                                &lt;EventCard /&gt;
                            </code>{' '}
                            via props (Top-Down).
                        </p>
                    </header>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {events.map((event) => (
                            <EventCard
                                key={event.id}
                                title={event.title}
                                date={event.date}
                                description={event.description}
                                image_url={event.image_url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
