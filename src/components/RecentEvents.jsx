import React from 'react';
import CardSection from './common/CardSection';
import BlurredStagger from './common/BlurredStagger';
import IEDCButton from './common/IEDCButton';
import { motion as Motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import './RecentEvents.css';

const events = [
    {
        id: 1,
        tag: "Achievement",
        date: "IEDC Summit 2026",
        title: "Campus Compass Recognised at IEDC Summit 2026",
        desc: "Our student startup Campus Compass powered the IEDC Summit 2026 Event Map and was recognised by the Government of Kerala and Kerala Startup Mission. Team: Akanksha Rose Jose, Adithya C Shaji, Gauri Rajesh Menon, Archa S Kumar (S3 CSDS). Mentor: Aswathy P Sajeev.",
        img: "/events/campus-compass-summit-2026.jpg",
        fit: "contain"
    },
    {
        id: 2,
        tag: "Summit",
        date: "Oct 15, 2025",
        title: "IEDC Annual Summit 2025",
        desc: "A massive gathering of student entrepreneurs, investors, and industry experts for keynote sessions and networking.",
        img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        tag: "Hackathon",
        date: "Nov 02, 2025",
        title: "Innovators Hack 48H",
        desc: "A 48-hour hardware and software hackathon challenging students to build sustainable tech solutions.",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        tag: "Workshop",
        date: "Nov 20, 2025",
        title: "AI & ML Prototyping",
        desc: "An intensive hands-on workshop focused on training and deploying machine learning models on edge devices.",
        img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        tag: "Pitch Day",
        date: "Dec 05, 2025",
        title: "Seed Fund Pitch 2025",
        desc: "Top 10 incubated student teams pitch their MVPs to a panel of angel investors and grant coordinators.",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&q=80"
    },
];

const RecentEvents = () => {
    return (
        <CardSection id="recent-events">
            <div className="recent-events-gallery-header">
                {/* Major title — BlurredStagger */}
                <h2 className="recent-events-title">
                    <BlurredStagger
                        text="Recent Events & Activities"
                        scrollBased={true}
                        stagger={0.022}
                        duration={0.4}
                        delay={0}
                    />
                </h2>

                {/* Button — slide up */}
                <Motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-8% 0px' }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                >
                    <IEDCButton to="/events" size="md" icon={<ArrowRight size={16} />}>
                        View All Events
                    </IEDCButton>
                </Motion.div>
            </div>

            <div className="gallery-scroll-container">
                {events.map((event, index) => (
                    <Motion.div
                        className="event-gallery-card"
                        key={event.id}
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-5% 0px' }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                    >
                        <div className={`event-img-wrapper${event.fit === 'contain' ? ' event-img-wrapper--contain' : ''}`}>
                            <img src={event.img} alt={event.title} className="event-img" />
                            <div className="event-tag">{event.tag}</div>
                        </div>
                        <div className="event-content">
                            <div className="event-date">
                                <Calendar size={14} /> <span>{event.date}</span>
                            </div>
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-desc">{event.desc}</p>
                        </div>
                    </Motion.div>
                ))}
            </div>
        </CardSection>
    );
};

export default RecentEvents;
