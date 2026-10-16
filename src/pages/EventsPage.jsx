import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardSection from '../components/common/CardSection';
import BlurredStagger from '../components/common/BlurredStagger';
import { events, eventCategories } from '../data/eventsData';
import { Calendar } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import './EventsPage.css';

const sortedEvents = [...events].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

const EventsPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredEvents = sortedEvents.filter((event) => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'CURIO') return event.series === 'CURIO';
        return event.category === activeFilter;
    });

    return (
        <div style={{ paddingTop: '8rem' }}>
            <CardSection>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="about-section-heading" style={{ display: 'inline-block', marginBottom: '0' }}>
                        <BlurredStagger
                            text="Events 2026-27"
                            scrollBased={false}
                            stagger={0.03}
                            duration={0.45}
                            delay={0.1}
                        />
                    </h2>
                    <Motion.p
                        style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                    >
                        Workshops, programs and initiatives by IEDC CCE this year
                    </Motion.p>
                </div>

                <div className="events-filter-row">
                    {eventCategories.map((cat) => (
                        <button
                            key={cat}
                            className={`events-filter-chip${activeFilter === cat ? ' active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="events-grid">
                    {filteredEvents.map((event, index) => (
                        <Motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                        >
                            <Link to={`/events/${event.id}`} className="events-card">
                                <div className="events-card-cover">
                                    {event.cover ? (
                                        <img src={event.cover} alt={event.title} className="events-card-img" />
                                    ) : (
                                        <div
                                            className="events-card-placeholder"
                                            style={{ background: `linear-gradient(135deg, ${event.color}, ${event.color}cc)` }}
                                        >
                                            <span>{event.category}</span>
                                        </div>
                                    )}
                                    <div className="events-card-chips">
                                        <span className="events-card-chip">{event.category}</span>
                                        {event.series === 'CURIO' && (
                                            <span className="events-card-chip">CURIO</span>
                                        )}
                                    </div>
                                </div>
                                <div className="events-card-content">
                                    <div className="events-card-date">
                                        <Calendar size={14} /> <span>{event.date}</span>
                                    </div>
                                    <h3 className="events-card-title">{event.title}</h3>
                                    {event.subtitle && (
                                        <p className="events-card-subtitle">{event.subtitle}</p>
                                    )}
                                    <p className="events-card-teaser">{event.teaser}</p>
                                    <span className="events-card-more">Read more &rarr;</span>
                                </div>
                            </Link>
                        </Motion.div>
                    ))}
                </div>
            </CardSection>
        </div>
    );
};

export default EventsPage;
