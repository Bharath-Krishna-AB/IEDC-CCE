import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, GraduationCap, Lightbulb, ExternalLink, ArrowRight } from 'lucide-react';
import CardSection from '../components/common/CardSection';
import BlurredStagger from '../components/common/BlurredStagger';
import IEDCButton from '../components/common/IEDCButton';
import './NISPPage.css';

const pillars = [
    {
        icon: Wallet,
        title: 'Innovation Fund',
        summary: 'At least 1% of the institution\'s annual budget is earmarked for innovation and startups.',
        points: [
            'Covers prototyping materials, testing and patent filing',
            'Supports pre-incubation programmes on campus',
        ],
    },
    {
        icon: GraduationCap,
        title: 'Academic Flexibility',
        summary: 'Student founders can balance their venture with their degree.',
        points: [
            'Up to 20% attendance relaxation for startup work and investor pitches',
            'Academic break of 1-2 semesters to work full-time on an incubated startup',
            'Startup prototypes or business models can be evaluated in place of mini/major projects',
        ],
    },
    {
        icon: Lightbulb,
        title: 'IP Ownership',
        summary: 'Clear rules on who owns what you build.',
        points: [
            'No institutional funds or facilities used: you own the IP entirely',
            'Significant use of campus funding or infrastructure: IP is co-owned, with the institution holding a 2% to 9.5% share on commercialisation',
        ],
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-5% 0px' },
    transition: { duration: 0.5, ease: 'easeOut', delay },
});

const NISPPage = () => (
    <div style={{ paddingTop: '8rem' }}>
        <CardSection>
            <div className="nisp-header">
                <span className="nisp-eyebrow">Institutional Policy</span>
                <h1 className="about-section-heading nisp-title">
                    <BlurredStagger text="National Innovation & Startup Policy" scrollBased={false} stagger={0.02} duration={0.45} delay={0.1} />
                </h1>
                <motion.p className="nisp-subtitle" {...fadeUp(0.4)}>
                    Nurturing innovation, intellectual property and entrepreneurship on campus. Christ College of Engineering implements NISP in line with the Ministry of Education's Innovation Cell, AICTE and UGC guidelines.
                </motion.p>
            </div>

            <motion.div className="nisp-vision" {...fadeUp(0.1)}>
                <h2 className="nisp-section-title">Our Vision</h2>
                <p>
                    A self-sustaining entrepreneurial ecosystem that encourages creative thinking, breaks academic silos, and empowers students and faculty to turn ideas into viable, high-impact enterprises.
                </p>
            </motion.div>

            <h2 className="nisp-section-title nisp-pillars-heading">What the policy means for you</h2>
            <div className="nisp-pillars">
                {pillars.map(({ icon: Icon, title, summary, points }, i) => (
                    <motion.article className="nisp-pillar" key={title} {...fadeUp(i * 0.1)}>
                        <div className="nisp-pillar-icon"><Icon size={22} /></div>
                        <h3>{title}</h3>
                        <p className="nisp-pillar-summary">{summary}</p>
                        <ul>
                            {points.map((p) => <li key={p}>{p}</li>)}
                        </ul>
                    </motion.article>
                ))}
            </div>

            <motion.div className="nisp-footer-row" {...fadeUp(0.1)}>
                <a
                    href="https://mic.gov.in/assets/doc/startup_policy_2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nisp-doc-link"
                >
                    <ExternalLink size={18} />
                    <span>Read the national NISP framework (MIC, PDF)</span>
                </a>
                <div className="nisp-cta">
                    <p>Have a startup idea or want to use these provisions? Talk to IEDC CCE.</p>
                    <IEDCButton to="/contact" size="md" icon={<ArrowRight size={16} />}>Contact Us</IEDCButton>
                </div>
            </motion.div>
        </CardSection>
    </div>
);

export default NISPPage;
