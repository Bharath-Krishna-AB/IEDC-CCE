import re

with open('src/data/execomData.js', 'r') as f:
    content = f.read()

# We want to add skills and projects to each member object.
# Find instances of `socials: { ... }` and append the new fields.

replacement = r'''socials: \1,
        skills: ["Leadership", "Strategic Planning", "Project Management", "Public Speaking"],
        projects: [
            { title: "IEDC Summit 2024", role: "Core Organizer", description: "Led the organizing committee for the annual state-level summit." },
            { title: "Startup Bootcamp", role: "Mentor", description: "Guided 50+ students in transforming their ideas into viable MVPs." }
        ]'''

new_content = re.sub(r'socials:\s*(\{.*?\})', replacement, content)

with open('src/data/execomData.js', 'w') as f:
    f.write(new_content)
