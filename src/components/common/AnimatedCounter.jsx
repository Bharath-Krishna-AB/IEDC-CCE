import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ value, label }) => {
    const countRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        let numericMatch = value.toString().match(/\d+/);
        if (!numericMatch) {
            // If it's pure text with no numbers, just show it
            if (countRef.current) countRef.current.innerText = value;
            return;
        }
        
        let targetNum = parseInt(numericMatch[0], 10);
        let prefix = value.toString().substring(0, numericMatch.index);
        let suffix = value.toString().substring(numericMatch.index + numericMatch[0].length);

        const obj = { val: 0 };
        
        gsap.to(obj, {
            val: targetNum,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            onUpdate: () => {
                if (countRef.current) {
                    countRef.current.innerText = prefix + Math.floor(obj.val) + suffix;
                }
            }
        });
        
    }, [value]);

    return (
        <div className="fluid-stat-item" ref={containerRef}>
            <div className="fluid-stat-value" ref={countRef}>0</div>
            <div className="fluid-stat-label">{label}</div>
        </div>
    );
};

export default AnimatedCounter;
