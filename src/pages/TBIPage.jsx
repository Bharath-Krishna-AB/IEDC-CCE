import React from 'react';
import { motion } from 'framer-motion';
import CardSection from '../components/common/CardSection';
import './TBIPage.css';

const startups = [
    {
        id: 0,
        name: "CAMPUS COMPASS",
        description: "Campus Compass is a smart campus navigation web application developed by the IEDC members of Christ College of Engineering. Designed to make campus navigation simple and convenient, it helps students and visitors find classrooms, rooms, and faculty members with ease. Users can search by class name or room number, explore faculty details and departments, and navigate routes across campus buildings. Making campus exploration easier, faster, and more accessible, Campus Compass ensures that everyone can find their way around campus effortlessly.",
        image: "/startups/campus-compass.jpg"
    },
    {
        id: 1,
        name: "ENGRAVERS",
        description: "Engravers is a 3D designing and printing consultancy started by an innovative young team of IEDC Centre, Christ College of Engineering. This consultancy gives technical solution using creative possibilities of 3D printing. The vibrant team of Engravers is led by Rahul Manohar from the faculty side and Sreehari Babu from the student side who is also the CEO of IEDC Centre. In addition to the 3d printing team, Engravers is also equipped with a team that helps in the designing aspect making Engravers capable of converting an idea into a product.",
        image: "https://images.unsplash.com/photo-1634609243089-b9d29b2b1b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 2,
        name: "HOBBY HUB",
        description: "With the support from Hobby Hub, college students can turn their interests into legitimate businesses. We have helped more than 10+ students get their businesses off the ground. A new way of earning through passion and creativity.",
        image: "https://images.unsplash.com/photo-1513346940221-18f46db008d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 3,
        name: "LEVANTATE LABS",
        description: "A cutting-edge consultancy focusing on IoT solutions and automation. Dedicated to bringing smart technology to everyday life through innovative hardware and software integration.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 4,
        name: "TRAWELL",
        description: "Your ultimate travel companion. Trawell provides customized travel packages and guidance for students and technological enthusiasts looking to explore the world.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
];

const TBIPage = () => {
    return (
        <div style={{ paddingTop: '8rem' }}>
            <CardSection>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="about-section-heading" style={{ display: 'inline-block', marginBottom: '0' }}>Startups</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}>Incubated at IEDC CCE</p>
                </div>

                <div className="tbi-grid">
                    {startups.map((startup, index) => (
                        <motion.div
                            key={startup.id}
                            className="tbi-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={startup.image} alt={startup.name} className="tbi-card-img" />
                            <div className="tbi-card-content">
                                <h3>{startup.name}</h3>
                                <p>{startup.description}</p>
                                <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                                    <button className="btn btn-primary rounded-pill" style={{ padding: '0.6rem 1.4rem' }}>Learn More &rarr;</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </CardSection>
        </div>
    );
};

export default TBIPage;
