import type { Person } from "./portfolio";

// One entry per student. Every fact comes from that student's resume.
export const bassam: Person = {
  title: "Bassam Hussain — Team Captain, APEXION Team 164",
  description: "Robotics team captain leading a 9-member team at APEXION for the National Robotics League 2026.",
  first: "Bassam", last: "Hussain", email: "bassamhussainakrami10@gmail.com", photo: "/headshot.png", location: "Bhatkal",
  role: "Team Captain — APEXION, Team 164",
  intro: "Leading a 9-member robotics team at the National Robotics League 2026. I design in AutoCAD and keep the build on track.",
  workIntro: "From AutoCAD design to a fully built robot — coordinated, tested and documented.",
  contactLine: "Building something with robots? Let's talk.",
  heroStats: [
    { value: "9", label: "Team members led" },
    { value: "164", label: "APEXION team number" },
    { value: "5–6", label: "Test rounds on ULTRON" },
  ],
  workStats: [
    { value: "1", label: "Fully built robot" },
    { value: "5–6", label: "Tests run" },
    { value: "2026", label: "National Robotics League" },
  ],
  projects: [
    {
      kicker: "Robotics development project",
      title: "ULTRON",
      bullets: [
        "Contributed to the robot's design using AutoCAD.",
        "Coordinated development activities throughout the project.",
        "Supported the successful completion of a fully built robot.",
        "Helped coordinate a project that went through 5–6 tests.",
      ],
      chips: ["AutoCAD", "Robot design", "Coordination"],
    },
    {
      kicker: "National Robotics League 2026",
      title: "APEXION — Team 164",
      bullets: [
        "Lead a 9-member robotics team and oversee project activities.",
        "Assign responsibilities and coordinate robot development.",
        "Organize meetings and manage project workflows.",
        "Supervise technical documentation and team coordination.",
      ],
      chips: ["Team leadership", "Project management", "Documentation"],
    },
  ],
  tools: ["AutoCAD", "Robot Design", "Project Management", "Team Leadership", "Task Delegation", "Technical Documentation", "Team Coordination"],
  record: [
    { when: "Sep 2026 — Present", type: "Experience", title: "Team Captain", org: "APEXION — Team 164 · National Robotics League 2026", text: "Leading a 9-member team: assigning responsibilities, organizing meetings, managing workflows and supervising technical documentation." },
    { when: "Project", type: "Build", title: "ULTRON — Robotics Development Project", org: "AutoCAD", text: "Contributed to the robot design and coordinated development through 5–6 tests to a fully built robot." },
    { when: "2026 — 27", type: "Education", title: "12th Grade", org: "Anjuman Pre-University College", text: "Currently studying while captaining the team for the National Robotics League 2026." },
  ],
  about: [
    "I'm Bassam Hussain, a 12th-grade student at Anjuman Pre-University College in Bhatkal and the team captain of APEXION — Team 164 for the National Robotics League 2026.",
    "My job is to keep a 9-member team moving: assigning responsibilities, running meetings, managing workflows and supervising documentation — while contributing to robot design in AutoCAD, as I did on Project ULTRON.",
  ],
  skills: ["Team Leadership & Coordination", "Project Management", "AutoCAD & Robot Design", "Task Delegation & Organization", "Technical Documentation"],
  principles: [
    { title: "Clear ownership", text: "Every task gets an owner. Assigning responsibilities is how nine people move as one team." },
    { title: "Design first", text: "Ideas get drawn in AutoCAD before anything gets built." },
    { title: "Test, then test again", text: "ULTRON went through 5–6 tests before it was done. Testing is part of the build." },
    { title: "Write it down", text: "Good documentation keeps the whole team on the same page." },
  ],
};

export const rahim: Person = {
  title: "Rahim Damudi — Programming Lead, APEXION Team 164",
  description: "Programming Lead at APEXION for the National Robotics League 2026: robot programming, debugging and sensor integration.",
  first: "Rahim", last: "Damudi", email: "rahimdamudi@gmail.com", photo: "/rahim.png", location: "Bhatkal",
  role: "Programming Lead — APEXION, Team 164",
  intro: "Programming APEXION's robot for the National Robotics League 2026. I write, test and debug the code that makes it move.",
  workIntro: "From first OpMode to game objectives met — programmed, tested and debugged in Python and C++.",
  contactLine: "Stuck on code? Let's debug it together.",
  heroStats: [
    { value: "3–4", label: "OpModes built" },
    { value: "164", label: "APEXION team number" },
    { value: "2", label: "Languages: Python & C++" },
  ],
  workStats: [
    { value: "1", label: "Robot programmed" },
    { value: "3–4", label: "OpModes tested" },
    { value: "2026", label: "National Robotics League" },
  ],
  projects: [
    {
      kicker: "Robotics development project",
      title: "ULTRON",
      bullets: [
        "Developed and tested around 3–4 robot OpModes to accomplish game objectives.",
        "Achieved the intended game objectives through programming and testing.",
        "Fixed inverted turning and slow movement through code changes.",
        "Kept improving the robot's performance through debugging and optimization.",
      ],
      chips: ["Python", "C++", "VS Code"],
    },
    {
      kicker: "National Robotics League 2026",
      title: "APEXION — Team 164",
      bullets: [
        "Develop and debug robot control programs to meet competition objectives.",
        "Integrate sensors and troubleshoot robotic systems.",
        "Test and refine robot performance through code modifications.",
        "Manage programming responsibilities for the team.",
      ],
      chips: ["Robot programming", "Sensor integration", "Debugging"],
      links: [{ label: "Team site", href: "https://www.teamapexion.com" }],
    },
  ],
  tools: ["Python", "C++", "VS Code", "Robot Programming", "Sensor Integration", "Debugging", "Testing", "Performance Optimization"],
  record: [
    { when: "Sep 2026 — Present", type: "Experience", title: "Programming Lead", org: "APEXION — Team 164 · National Robotics League 2026", text: "Developing and debugging robot control programs, integrating sensors and refining performance through code." },
    { when: "Project", type: "Build", title: "ULTRON — Robotics Development Project", org: "Python · C++ · VS Code", text: "Built and tested 3–4 OpModes, fixed inverted turning and slow movement, and got ULTRON meeting its game objectives." },
    { when: "Present", type: "Education", title: "11th Grade", org: "Anjuman Pre-University College", text: "Currently studying while leading programming for the National Robotics League 2026." },
  ],
  about: [
    "I'm Rahim Damudi, an 11th-grade student at Anjuman Pre-University College in Bhatkal and the Programming Lead of APEXION — Team 164 for the National Robotics League 2026.",
    "I write the code that drives our robot: control programs, sensor integration and a lot of debugging. On Project ULTRON I built and tested OpModes, fixed its inverted turning and slow movement, and got it hitting its game objectives.",
  ],
  skills: ["Python & C++", "Robot Programming", "Sensor Integration", "Debugging & Troubleshooting", "Testing & Performance Optimization"],
  principles: [
    { title: "Test every change", text: "Code isn't done until it's run on the robot. Every change gets tested." },
    { title: "Fix the cause", text: "Inverted turning and slow movement were fixed in the code, not worked around." },
    { title: "Keep optimizing", text: "Working is the start. Then it gets faster and more reliable." },
    { title: "Help others", text: "Happy to help anyone stuck on coding, debugging or a programming project." },
  ],
};

export const ansar: Person = {
  title: "Mohammed Ansar — Social Media Manager, APEXION Team 164",
  description: "Social Media Manager at APEXION for the National Robotics League 2026: reels, video editing and graphic design.",
  first: "Mohammed", last: "Ansar", email: "ansar.armar2009@gmail.com", photo: "/ansar.png", location: "Bhatkal",
  role: "Social Media Manager — APEXION, Team\u00a0164",
  intro: "Telling APEXION's story at the National Robotics League 2026. I edit the reels, design the posts and write the captions.",
  workIntro: "From robot builds to Instagram reels — edited in CapCut, designed in Canva and posted to @apexion.nrl.",
  contactLine: "Need content that gets seen? Let's talk.",
  heroStats: [
    { value: "6,000", label: "Views on one reel" },
    { value: "131", label: "Instagram followers" },
    { value: "164", label: "APEXION team number" },
  ],
  workStats: [
    { value: "~13", label: "Reels, videos & posts" },
    { value: "6K", label: "Top reel views" },
    { value: "2026", label: "National Robotics League" },
  ],
  projects: [
    {
      kicker: "Social media & digital promotion",
      title: "APEXION",
      bullets: [
        "Created around 13 reels, videos and promotional posts.",
        "Produced an Instagram reel that reached 6,000 views.",
        "Manage content for @apexion.nrl, an account with 131 followers.",
        "Promote APEXION's participation in the National Robotics League 2026.",
      ],
      chips: ["CapCut", "Canva", "Instagram"],
      links: [{ label: "Instagram", href: "https://www.instagram.com/apexion.nrl/" }],
    },
    {
      kicker: "Robotics project promotion",
      title: "ULTRON",
      bullets: [
        "Create promotional content showcasing the ULTRON robot.",
        "Edit videos highlighting robot development and team activities.",
        "Design graphics and captions to communicate project updates.",
      ],
      chips: ["Video editing", "Graphic design", "Captions"],
      links: [{ label: "Team site", href: "https://www.teamapexion.com" }],
    },
  ],
  tools: ["CapCut", "Canva", "Instagram", "Reels", "Video Editing", "Graphic Design", "Caption Writing", "Content Creation"],
  record: [
    { when: "Sep 2026 — Present", type: "Experience", title: "Social Media Manager", org: "APEXION — Team 164 · National Robotics League 2026", text: "Managing the team's social media: Instagram reels, promotional videos, graphics and captions about the team and its robots." },
    { when: "Project", type: "Content", title: "APEXION — Social Media & Digital Promotion", org: "CapCut · Canva · @apexion.nrl", text: "Around 13 reels, videos and posts, including a reel that reached 6,000 views." },
    { when: "Present", type: "Education", title: "11th Grade", org: "Anjuman Pre-University College", text: "Currently studying while running APEXION's social media for the National Robotics League 2026." },
  ],
  about: [
    "I'm Mohammed Ansar, an 11th-grade student at Anjuman Pre-University College in Bhatkal and the Social Media Manager of APEXION — Team 164 for the National Robotics League 2026.",
    "I make the team's work visible: editing reels and videos in CapCut, designing posts in Canva and writing captions about our robots and team activities. One of my reels reached 6,000 views.",
  ],
  skills: ["Video Editing (CapCut)", "Graphic Design (Canva)", "Instagram Management", "Reels Creation", "Caption Writing & Digital Promotion"],
  principles: [
    { title: "Show the build", text: "The best content is the real work: the robot, the team and the progress." },
    { title: "Hook fast", text: "A reel has a second to grab attention. The edit is built around that." },
    { title: "Stay consistent", text: "Regular posts keep the team's story going all season." },
    { title: "Words matter", text: "A good caption tells people what they're looking at and why it matters." },
  ],
};

export const ahmed: Person = {
  title: "Ahmed Sayeed — General Support Member, APEXION Team 164",
  description: "APEXION's Trailblazer Award candidate for the National Robotics League 2026: led the 120+ page team portfolio and supported ULTRON's design.",
  first: "Ahmed", last: "Sayeed", email: "asayeeddam@gmail.com", photo: "/ahmed.png", location: "Bhatkal",
  role: "General Support Member — APEXION, Team\u00a0164",
  intro: "APEXION's Trailblazer Award candidate for the National Robotics League 2026. I led our 120+ page portfolio and help the robot and team get competition-ready.",
  workIntro: "From a 120+ page competition portfolio to ULTRON's exterior — designed, organized and ready for competition.",
  contactLine: "Putting a team's story on paper? Let's talk.",
  heroStats: [
    { value: "120+", label: "Portfolio pages led" },
    { value: "164", label: "APEXION team number" },
    { value: "2026", label: "Trailblazer Award candidate" },
  ],
  workStats: [
    { value: "120+", label: "Portfolio pages" },
    { value: "1", label: "Robot exterior improved" },
    { value: "2026", label: "National Robotics League" },
  ],
  projects: [
    {
      kicker: "NRL 2026 team portfolio",
      title: "APEXION Portfolio",
      bullets: [
        "Led overall development of the team's 120+ page competition portfolio.",
        "Managed the portfolio's content, design and completion.",
        "Used Canva to create and present the portfolio.",
        "Contributed extensively to APEXION's competition documentation.",
      ],
      chips: ["Canva", "Portfolio design", "Documentation"],
      links: [{ label: "Team site", href: "https://www.teamapexion.com" }],
    },
    {
      kicker: "Robotics development project",
      title: "ULTRON",
      bullets: [
        "Contributed to improving ULTRON's exterior design.",
        "Supported robot development and testing.",
        "Helped organize equipment and prepare for competition.",
      ],
      chips: ["Exterior design", "Testing support", "Competition prep"],
    },
  ],
  tools: ["Canva", "Portfolio Development", "Exterior Robot Design", "Testing Support", "Technical Documentation", "Competition Preparation", "Team Support", "Project Coordination"],
  record: [
    { when: "Sep 2026 — Present", type: "Experience", title: "General Support Member", org: "APEXION — Team 164 · National Robotics League 2026", text: "Leading the team portfolio, supporting robot development and testing, helping teammates and preparing equipment and materials for competition." },
    { when: "2026", type: "Award", title: "Trailblazer Award Candidate", org: "National Robotics League 2026", text: "Selected to represent APEXION for the NRL 2026 Trailblazer Award." },
    { when: "Project", type: "Build", title: "APEXION — NRL 2026 Team Portfolio", org: "Canva · teamapexion.com", text: "Led the 120+ page competition portfolio from content and design through to completion." },
    { when: "Present", type: "Education", title: "12th Grade", org: "Anjuman Pre-University College", text: "Currently studying while supporting APEXION for the National Robotics League 2026." },
  ],
  about: [
    "I'm Ahmed Sayeed, a 12th-grade student at Anjuman Pre-University College in Bhatkal and a General Support Member of APEXION — Team 164. I was selected to represent the team for the NRL 2026 Trailblazer Award.",
    "I led our 120+ page competition portfolio in Canva, helped improve ULTRON's exterior design, and keep the team ready for competition: supporting testing, organizing equipment and preparing materials.",
  ],
  skills: ["Canva & Portfolio Development", "Exterior Robot Design", "Testing Support", "Technical Documentation", "Competition Preparation"],
  principles: [
    { title: "Document everything", text: "120+ pages exist because every part of the season got written down." },
    { title: "Design matters", text: "From the portfolio to ULTRON's exterior, how it looks shapes how it's understood." },
    { title: "Be ready early", text: "Equipment organized and materials prepared before competition day." },
    { title: "Support the team", text: "Whatever teammates need, technical or organizational, I help get it done." },
  ],
};

export const people: Record<string, Person> = { bassam, rahim, ansar, ahmed };
