import React from 'react';
import CardSection from '../components/common/CardSection';
import BlurredStagger from '../components/common/BlurredStagger';
import './ActivitiesPage.css';
import { FileText, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ActivitiesPage = () => {
    const reports = [
        { year: '2022-2023', link: 'https://docs.google.com/document/d/1YWzcHlRNvy-vZacnjVBZlkgmJxPgueOPSbKsJrarfZ4' },
        { year: '2021-2022', link: 'https://drive.google.com/file/d/14m_15U75wi752UBVDmQyyNWgzHFPFHH5' },
        { year: '2020-2021', link: 'https://drive.google.com/file/d/1w8_I3hFuaxtq0FOYDnF-HJnzVL2FxBC8' },
        { year: '2019-2020', link: 'https://drive.google.com/file/d/1vM4EmrjKcrgUBBkMnXcGiJWl8TnuHqY7' },
        { year: '2016-2017', link: 'https://drive.google.com/file/d/18phBD_nkgIdEKGPSjERk4kKasTb4QbX_' },
    ];

    return (
        <div style={{ paddingTop: '8rem' }}>
            <CardSection>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="about-section-heading" style={{ display: 'inline-block', marginBottom: '0' }}>
                        <BlurredStagger
                            text="Activities & Reports"
                            scrollBased={false}
                            stagger={0.03}
                            duration={0.45}
                            delay={0.1}
                        />
                    </h2>
                    <motion.p
                        style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                    >
                        Explore our annual reports and recent events
                    </motion.p>
                </div>

                <div className="activities-grid">

                    {/* Reports Column */}
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FileText size={28} color="var(--accent-gold)" /> Annual Reports
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {reports.map((report, index) => (
                                <a key={index} href={report.link} target="_blank" rel="noopener noreferrer" className="report-list-item">
                                    <div className="report-icon-bg">
                                        <FileText size={24} color="var(--accent-gold)" />
                                    </div>
                                    <div style={{ flexGrow: 1 }}>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-primary)' }}>Activity Report</h4>
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{report.year}</span>
                                    </div>
                                    <ArrowRight size={20} color="var(--text-secondary)" className="arrow-icon" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Events Column */}
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <Calendar size={28} color="var(--accent-gold)" /> Recent Events
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="event-list-item">
                                <div className="event-date-box">
                                    <span style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: '1', color: 'var(--accent-gold)' }}>2026</span>
                                    <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>SUMMIT</span>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Campus Compass Recognised at IEDC Summit 2026</h4>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>The CCE student startup powered the IEDC Summit 2026 event map and was recognised at the state-level summit.</p>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem' }}><strong>Team:</strong> Akanksha Rose Jose, Adithya C Shaji, Gauri Rajesh Menon, and Archa S Kumar (S3 CSDS)</p>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0' }}><strong>Mentor:</strong> Aswathy P Sajeev, IEDC CCE Nodal Officer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </CardSection>
        </div>
    );
};

export default ActivitiesPage;
