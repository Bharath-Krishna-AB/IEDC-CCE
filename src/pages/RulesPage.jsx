import React from 'react';
import CardSection from '../components/common/CardSection';
import './RulesPage.css';

const RulesPage = () => {
    return (
        <div style={{ paddingTop: '8rem' }}>
            <CardSection>
                <div className="rules-content" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="about-section-heading" style={{ display: 'inline-block' }}>Rules & Regulations</h2>
                    </div>

                    <div style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: '1.8' }}>

                        {/* Rule Block */}
                        <div className="rules-block" style={{ marginBottom: '4rem' }}>
                            <h3 className="rules-heading" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: '700' }}>GENERAL</h3>
                            <p>General rules and regulations are applicable for all members and non-members those who are working with IEDC CCE.</p>
                        </div>

                        {/* Rule Block */}
                        <div className="rules-block" style={{ marginBottom: '4rem' }}>
                            <h3 className="rules-heading" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: '700' }}>IEDC MEMBERSHIP</h3>
                            <p style={{ marginBottom: '1.5rem' }}>IEDC CCE will be open to all existing and graduated students of Christ College of Engineering.</p>
                            <ul className="rules-list" style={{ listStyleType: 'disc', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li>Become a member by filling the application form given at Appendix 1.</li>
                                <li>A fee of ₹100 will be charged for a one year membership.</li>
                                <li>Application forms will be received from students upto 5th semester of B Tech only.</li>
                                <li>Programmes and workshops coordinated and conducted by IEDC can avail 50-50 seats for IEDC and Non-IEDC students.</li>
                                <li>IEDC members will be benefitted with special discounts for paid programs and workshops.</li>
                                <li>IEDC will adopt 3 government schools to enhance their technical capabilities and to give the exposure towards Science and Technology.</li>
                            </ul>
                        </div>

                        {/* Rule Block */}
                        <div className="rules-block" style={{ marginBottom: '4rem' }}>
                            <h3 className="rules-heading" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: '700' }}>FUNDING SUPPORT</h3>
                            <p style={{ marginBottom: '1.5rem' }}>Funding depends on availability of funds, preference of programs and importance of projects. It will be released in 3 stages:</p>

                            <div className="rules-stage-card" style={{ background: '#f8f8fb', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <li><strong style={{ color: 'var(--accent-gold)' }}>Stage 1:</strong> Immediately after approval</li>
                                    <li><strong style={{ color: 'var(--accent-gold)' }}>Stage 2:</strong> After completing 50% of work</li>
                                    <li><strong style={{ color: 'var(--accent-gold)' }}>Stage 3:</strong> After completing proposed result</li>
                                </ul>
                            </div>

                            <p style={{ marginBottom: '2rem' }}>If the funded work wins any cash prize in any competition, it is recommended to pay 50% of prize money to IEDC as an honour. If above mentioned 50% fall short of 'funded amount' a maximum of 'prize money' is enough to return.</p>

                            <div className="rules-level-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                                    <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: '0.5rem' }}>College Level</h4>
                                    <p style={{ color: 'var(--accent-gold)', fontWeight: '600', fontSize: '1.5rem' }}>30-50%</p>
                                </div>
                                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                                    <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: '0.5rem' }}>State Level</h4>
                                    <p style={{ color: 'var(--accent-gold)', fontWeight: '600', fontSize: '1.5rem' }}>30-60%</p>
                                </div>
                                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                                    <h4 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: '0.5rem' }}>National Level</h4>
                                    <p style={{ color: 'var(--accent-gold)', fontWeight: '600', fontSize: '1.5rem' }}>30-80%</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </CardSection>
        </div>
    );
};

export default RulesPage;
