import re

with open('src/data/execomData.js', 'r') as f:
    content = f.read()

replacement = r'''\g<0>,
        education: "B.Tech Computer Science Engineering, 2025",
        stats: [
            { value: "15+", label: "Events Organized" },
            { value: "200+", label: "Members Mentored" },
            { value: "₹50k", label: "Funds Raised" }
        ],
        experience: [
            { year: "2023 - Present", role: "Executive Member", organization: "IEDC CCE", description: "Spearheaded multiple campus-wide technical initiatives." },
            { year: "2022 - 2023", role: "Technical Lead", organization: "TinkerHub CCE", description: "Conducted workshops on Web Development and Open Source." }
        ],
        achievements: [
            "Winner of Smart India Hackathon 2023",
            "Top 10 Finalist in Kerala Startup Mission Idea Fest"
        ]'''

new_content = re.sub(r'projects:\s*\[[\s\S]*?\]', replacement, content)

with open('src/data/execomData.js', 'w') as f:
    f.write(new_content)
