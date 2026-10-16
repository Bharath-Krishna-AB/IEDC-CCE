import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { events, getEventById } from '../data/eventsData';
import CardSection from '../components/common/CardSection';
import BlurredStagger from '../components/common/BlurredStagger';
import IEDCButton from '../components/common/IEDCButton';
import { Calendar, MapPin, Users, User, Mic, Handshake, Instagram } from 'lucide-react';
import './EventDetailPage.css';

const sortedEvents = [...events].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

const FactRow = ({ icon, label, children }) => (
    <div className="event-fact-row">
        <span className="event-fact-icon">{icon}</span>
        <div>
            <span className="event-fact-label">{label}</span>
            <span className="event-fact-value">{children}</span>
        </div>
    </div>
);

const EventDetailPage = () => {
    const { eventId } = useParams();
    const event = getEventById(eventId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [eventId]);

    if (!event) {
        return (
            <div className="event-detail-page">
                <CardSection>
                    <h2>Event not found</h2>
                    <Link to="/events" className="back-link">Back to Events</Link>
                </CardSection>
            </div>
        );
    }

    const index = sortedEvents.findIndex((e) => e.id === event.id);
    const prevEvent = index > 0 ? sortedEvents[index - 1] : null;
    const nextEvent = index < sortedEvents.length - 1 ? sortedEvents[index + 1] : null;

    return (
        <div className="event-detail-page">
            <CardSection>
                <Link to="/events" className="back-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Events
                </Link>

                <div className="event-detail-hero">
                    <div className="event-detail-cover">
                        {event.cover ? (
                            <img src={event.cover} alt={event.title} className="event-detail-cover-img" />
                        ) : (
                            <div
                                className="event-detail-cover-placeholder"
                                style={{ background: `linear-gradient(135deg, ${event.color}, ${event.color}cc)` }}
                            >
                                <span>{event.category}</span>
                            </div>
                        )}
                    </div>
                    <div className="event-detail-hero-text">
                        <div className="event-detail-chips">
                            <span className="event-detail-chip" style={{ backgroundColor: event.color }}>{event.category}</span>
                            {event.series === 'CURIO' && (
                                <span className="event-detail-chip" style={{ backgroundColor: '#111827' }}>CURIO</span>
                            )}
                        </div>
                        <h1 className="event-detail-title">
                            <BlurredStagger text={event.title} duration={0.4} />
                        </h1>
                        {event.subtitle && (
                            <p className="event-detail-subtitle">{event.subtitle}</p>
                        )}
                        <p className="event-detail-dateline">
                            {event.date} &bull; {event.venue}
                        </p>
                    </div>
                </div>

                <div className="event-detail-body">
                    <div className="event-detail-main">
                        <h2 className="event-detail-section-heading">Overview</h2>
                        <p className="event-detail-overview">{event.overview}</p>

                        {event.highlights && event.highlights.length > 0 && (
                            <>
                                <h2 className="event-detail-section-heading">Highlights</h2>
                                <ul className="event-detail-highlights">
                                    {event.highlights.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {event.media && (
                            <IEDCButton href={event.media} size="md" icon={<Instagram size={16} />} className="event-media-btn">
                                View on Instagram
                            </IEDCButton>
                        )}
                    </div>

                    <aside className="event-facts-card">
                        <FactRow icon={<Calendar size={18} />} label="Date">{event.date}</FactRow>
                        <FactRow icon={<MapPin size={18} />} label="Venue">{event.venue}</FactRow>
                        {event.audience && (
                            <FactRow icon={<Users size={18} />} label="Audience">{event.audience}</FactRow>
                        )}
                        {event.facultyCoordinator && (
                            <FactRow icon={<User size={18} />} label="Faculty Coordinator">{event.facultyCoordinator}</FactRow>
                        )}
                        {event.coordinators && event.coordinators.length > 0 && (
                            <FactRow icon={<Users size={18} />} label="Student Coordinators">{event.coordinators.join(', ')}</FactRow>
                        )}
                        {event.resourcePersons && event.resourcePersons.length > 0 && (
                            <FactRow icon={<Mic size={18} />} label="Speakers">{event.resourcePersons.join(', ')}</FactRow>
                        )}
                        {event.partners && event.partners.length > 0 && (
                            <FactRow icon={<Handshake size={18} />} label="In association with">{event.partners.join(', ')}</FactRow>
                        )}
                    </aside>
                </div>

                {event.photos && event.photos.length > 0 && (
                    <div className="event-gallery-section">
                        <h2 className="event-detail-section-heading">Gallery</h2>
                        <div className="event-gallery-grid">
                            {event.photos.map((photo, i) => (
                                <img key={i} src={photo} alt={`${event.title} photo ${i + 1}`} />
                            ))}
                        </div>
                    </div>
                )}

                <div className="event-prevnext">
                    {prevEvent ? (
                        <Link to={`/events/${prevEvent.id}`} className="event-prevnext-link">
                            &larr; {prevEvent.title}
                        </Link>
                    ) : <span />}
                    {nextEvent ? (
                        <Link to={`/events/${nextEvent.id}`} className="event-prevnext-link next">
                            {nextEvent.title} &rarr;
                        </Link>
                    ) : <span />}
                </div>
            </CardSection>
        </div>
    );
};

export default EventDetailPage;
