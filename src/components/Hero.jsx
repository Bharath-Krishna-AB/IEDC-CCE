import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CardSection from './common/CardSection';
import BlurredStagger from './common/BlurredStagger';
import IEDCButton from './common/IEDCButton';
import './Hero.css';

/* Reusable fade+blur in variant for subtitle/button */
const blurFadeIn = (delay = 0) => ({
    initial: { opacity: 0, filter: 'blur(8px)', y: 10 },
    animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
    transition: { duration: 0.65, ease: 'easeOut', delay },
});

const heroSlides = [
    {
        image: '/images/hero/iedc-top-performer-2026.jpg',
        alt: 'IEDC CCE recognised as a Top Performer at Kerala Startup Mission Startup Summit 2026',
        title: 'Top Performer, 2026',
        description: 'IEDC CCE recognised at the Kerala Startup Mission Startup Summit.',
    },
    {
        image: '/images/hero/campus-compass-team.png',
        alt: 'Campus Compass student startup team presenting their product',
        title: 'Campus Compass',
        description: 'Our student startup team showcasing its campus navigation product.',
    },
];

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

        const timer = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % heroSlides.length);
        }, 6000);

        return () => window.clearInterval(timer);
    }, []);

    const showSlide = (direction) => {
        setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
    };

    return (
        <CardSection className="hero-padding" id="home">
            <div className="hero-container">
                <div className="hero-top-row">

                    {/* Title with BlurredStagger per-character animation */}
                    <div className="hero-title-col">
                        <h1 className="hero-title">
                            <BlurredStagger
                                text="Innovation &"
                                className="hero-stagger-line"
                                scrollBased={false}
                                stagger={0.03}
                                duration={0.5}
                                delay={0.05}
                            />
                            <br />
                            <BlurredStagger
                                text="entrepreneurship"
                                className="hero-stagger-line"
                                scrollBased={false}
                                stagger={0.025}
                                duration={0.5}
                                delay={0.3}
                            />
                        </h1>
                    </div>

                    {/* Right column: CTA + subtitle */}
                    <div className="hero-action-col">
                        {/* Button blur-fades in */}
                        <motion.div
                            className="hero-actions"
                            {...blurFadeIn(0.65)}
                        >
                            <IEDCButton
                                to="/contact"
                                size="lg"
                                icon={<ArrowRight size={16} />}
                                className="hero-join-btn"
                            >
                                Join the Community
                            </IEDCButton>
                        </motion.div>

                        {/* Subtitle blur-fades in slightly after button */}
                        <motion.p
                            className="hero-subtitle"
                            {...blurFadeIn(0.85)}
                        >
                            IEDC CCE is a student-led innovation hub at Christ College of Engineering — fostering entrepreneurship, incubating startups, and empowering the next generation of builders and leaders.
                        </motion.p>
                    </div>
                </div>

                {/* Hero image carousel */}
                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
                    aria-roledescription="carousel"
                    aria-label="IEDC CCE highlights"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            className="hero-slide"
                            key={activeSlide}
                            initial={{ opacity: 0, scale: 1.025 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.75, ease: 'easeInOut' }}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${activeSlide + 1} of ${heroSlides.length}`}
                        >
                            <img src={heroSlides[activeSlide].image} alt="" className="hero-slide-backdrop" aria-hidden="true" />
                            <img src={heroSlides[activeSlide].image} alt={heroSlides[activeSlide].alt} className="hero-main-img" />
                            <div className="hero-slide-caption">
                                <span className="hero-slide-title">{heroSlides[activeSlide].title}</span>
                                <span className="hero-slide-description">{heroSlides[activeSlide].description}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="hero-carousel-controls">
                        <button type="button" className="hero-carousel-arrow" onClick={() => showSlide(-1)} aria-label="Show previous image">
                            <ArrowLeft size={18} />
                        </button>
                        <div className="hero-carousel-dots" role="group" aria-label="Choose a slide">
                            {heroSlides.map((slide, index) => (
                                <button
                                    type="button"
                                    key={slide.image}
                                    className={`hero-carousel-dot${activeSlide === index ? ' is-active' : ''}`}
                                    onClick={() => setActiveSlide(index)}
                                    aria-label={`Show slide ${index + 1}: ${slide.title}`}
                                    aria-current={activeSlide === index ? 'true' : undefined}
                                />
                            ))}
                        </div>
                        <button type="button" className="hero-carousel-arrow" onClick={() => showSlide(1)} aria-label="Show next image">
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </CardSection>
    );
};

export default Hero;
