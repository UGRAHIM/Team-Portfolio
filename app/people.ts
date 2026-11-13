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

export const ibrahim: Person = {
  title: "Ibrahim Kola — Mechanical Lead, APEXION Team 164",
  description: "Mechanical Lead at APEXION for the National Robotics League 2026: designed and built ULTRON's chassis, drivetrain, arm, lift and cargo bay.",
  first: "Ibrahim", last: "Kola", email: "ibrahimkolaa2009@gmail.com", photo: "/ibrahim.png", location: "Bhatkal",
  role: "Mechanical Lead — APEXION, Team\u00a0164",
  intro: "Building APEXION's robot for the National Robotics League 2026. I design in AutoCAD and assemble the mechanisms that make it work.",
  workIntro: "From AutoCAD drawings to a working chassis, arm, lift and cargo bay — designed, assembled and tested.",
  contactLine: "Got a mechanism to build? Let's talk.",
  heroStats: [
    { value: "1", label: "Fully built robot" },
    { value: "3–4", label: "Mechanical tests passed" },
    { value: "164", label: "APEXION team number" },
  ],
  workStats: [
    { value: "1", label: "Robot: ULTRON" },
    { value: "3–4", label: "Mechanical tests" },
    { value: "2026", label: "National Robotics League" },
  ],
  projects: [
    {
      kicker: "Robotics development project",
      title: "ULTRON",
      bullets: [
        "Designed and assembled ULTRON's chassis, wheels and drivetrain.",
        "Developed the robotic arm, lifting mechanism and cargo bay.",
        "Integrated and maintained the robot's mechanical systems.",
        "Ran around 3–4 mechanical tests that verified the mechanisms worked.",
      ],
      chips: ["AutoCAD", "Drivetrain", "Robotic arm"],
    },
    {
      kicker: "National Robotics League 2026",
      title: "APEXION — Team 164",
      bullets: [
        "Lead mechanical design, assembly and development.",
        "Design and build mechanisms for the team's robot.",
        "Select components and keep the mechanics working.",
        "Test the robot for performance and reliability.",
      ],
      chips: ["Mechanical design", "Assembly", "Testing"],
      links: [{ label: "Team site", href: "https://www.teamapexion.com" }],
    },
  ],
  tools: ["AutoCAD", "Robot Assembly", "Chassis", "Drivetrain", "Robotic Arms", "Lifting Mechanisms", "Cargo Bay", "Component Selection", "Mechanical Testing"],
  record: [
    { when: "Sep 2026 — Present", type: "Experience", title: "Mechanical Lead", org: "APEXION — Team 164 · National Robotics League 2026", text: "Leading mechanical design, assembly and development: building mechanisms, selecting components and testing the robot." },
    { when: "Project", type: "Build", title: "ULTRON — Robotics Development Project", org: "AutoCAD", text: "Built the chassis, drivetrain, robotic arm, lift and cargo bay, and verified them in 3–4 mechanical tests." },
    { when: "Present", type: "Education", title: "12th Grade", org: "Anjuman Pre-University College", text: "Currently studying while leading mechanical work for the National Robotics League 2026." },
  ],
  about: [
    "I'm Ibrahim Kola, a 12th-grade student at Anjuman Pre-University College in Bhatkal and the Mechanical Lead of APEXION — Team 164 for the National Robotics League 2026.",
    "I turn designs into hardware. On Project ULTRON I designed and assembled the chassis, wheels and drivetrain, built the robotic arm, lifting mechanism and cargo bay, and tested them until they worked.",
  ],
  skills: ["AutoCAD & Mechanism Design", "Robot Assembly", "Chassis & Drivetrain Systems", "Arms, Lifts & Cargo Bays", "Component Selection & Testing"],
  principles: [
    { title: "Design before you cut", text: "Every part starts as an AutoCAD drawing." },
    { title: "Build it solid", text: "A strong chassis and drivetrain are what everything else stands on." },
    { title: "Test the mechanism", text: "3–4 mechanical tests proved ULTRON's mechanisms actually work." },
    { title: "Keep it running", text: "Maintenance is part of the job. A robot that breaks can't compete." },
  ],
};

export const sinan: Person = {
  title: "Sinan Shabandari — Electrical Lead, APEXION Team 164",
  description: "Electrical Lead at APEXION for the National Robotics League 2026: wiring, motors, sensors and battery management for ULTRON.",
  first: "Sinan", last: "Shabandari", email: "its.sinanofficial.17@gmail.com", photo: "/sinan.png", location: "Bhatkal",
  role: "Electrical Lead — APEXION, Team\u00a0164",
  intro: "Powering APEXION's robot for the National Robotics League 2026. I wire the motors, sensors and batteries that bring it to life.",
  workIntro: "From loose wires to a powered robot — motors, sensors and batteries connected and tested.",
  contactLine: "Need a robot wired up? Let's talk.",
  heroStats: [
    { value: "4–5", label: "Electrical tests passed" },
    { value: "1", label: "Robot wired: ULTRON" },
    { value: "164", label: "APEXION team number" },
  ],
  workStats: [
    { value: "1", label: "Robot wired" },
    { value: "4–5", label: "Electrical tests" },
    { value: "2026", label: "National Robotics League" },
  ],
  projects: [
    {
      kicker: "Robotics development project",
      title: "ULTRON",
      bullets: [
        "Installed and connected DC motors, servo motors and motor controllers.",
        "Integrated sensors into the robot's electrical system.",
        "Managed wiring and battery connections during development.",
        "Ran around 4–5 successful electrical tests that verified the system worked.",
      ],
      chips: ["DC motors", "Servos", "Sensors"],
    },
    {
      kicker: "AI-assisted design support",
      title: "APEXION Design",
      bullets: [
        "Contributed to the team's design work using Canva.",
        "Used ChatGPT to help with design-related tasks.",
        "Supported the team's creative and technical presentation work.",
      ],
      chips: ["Canva", "ChatGPT", "Presentation"],
      links: [{ label: "Team site", href: "https://www.teamapexion.com" }],
    },
  ],
  tools: ["Robot Wiring", "DC Motors", "Servo Motors", "Motor Controllers", "Sensor Integration", "Battery Management", "Electrical Testing", "Canva", "ChatGPT"],
  record: [
    { when: "Sep 2026 — Present", type: "Experience", title: "Electrical Lead", org: "APEXION — Team 164 · National Robotics League 2026", text: "Managing the robot's wiring, motor connections, sensors, batteries and power, and supporting design work with Canva and ChatGPT." },
    { when: "Project", type: "Build", title: "ULTRON — Robotics Development Project", org: "Electrical integration & testing", text: "Connected ULTRON's motors, controllers, sensors and batteries, and verified them in 4–5 successful electrical tests." },
    { when: "Present", type: "Education", title: "11th Grade", org: "Anjuman Pre-University College", text: "Currently studying while leading electrical work for the National Robotics League 2026." },
  ],
  about: [
    "I'm Sinan Shabandari, an 11th-grade student at Anjuman Pre-University College in Bhatkal and the Electrical Lead of APEXION — Team 164 for the National Robotics League 2026.",
    "I handle everything that carries power on our robot. On Project ULTRON I connected the DC motors, servos and motor controllers, integrated the sensors, managed wiring and batteries, and tested it all until it worked.",
  ],
  skills: ["Robot Wiring", "DC & Servo Motors", "Motor Controllers & Sensors", "Battery & Power Management", "Electrical System Testing"],
  principles: [
    { title: "Wire it clean", text: "Tidy wiring is easier to test, fix and trust." },
    { title: "Power with care", text: "Battery connections and power management keep the robot, and the team, safe." },
    { title: "Test every circuit", text: "4–5 electrical tests proved ULTRON's system worked before it competed." },
    { title: "Use smart tools", text: "Canva and ChatGPT help turn ideas into clear designs faster." },
  ],
};

export const musayyib: Person = {
  title: "Mohammed Musayyib — Documentation Head, APEXION Team 164",
  description: "Documentation Head at APEXION for the National Robotics League 2026: engineering notebook, progress logs and technical reports for ULTRON.",
  first: "Mohammed", last: "Musayyib", email: "mmusk2009@gmail.com", photo: "/musayyib.png", location: "Bhatkal",
  role: "Documentation Head — APEXION, Team\u00a0164",
  intro: "Keeping APEXION's engineering record for the National Robotics League 2026. I write the notebook, logs and reports that show how our robot was built.",
  workIntro: "From design to testing — every stage of ULTRON recorded, organized and presented in Canva.",
  contactLine: "Need your engineering process on paper? Let's talk.",
  heroStats: [
    { value: "20–30", label: "Documentation pages" },
    { value: "1", label: "Robot documented: ULTRON" },
    { value: "164", label: "APEXION team number" },
  ],
  workStats: [
    { value: "20–30", label: "Pages written" },
    { value: "4", label: "Stages: design to testing" },
    { value: "2026", label: "National Robotics League" },
  ],
  projects: [
    {
      kicker: "Engineering documentation",
      title: "ULTRON",
      bullets: [
        "Documented ULTRON's design and development process.",
        "Recorded the robot's assembly stages and technical progress.",
        "Kept testing records and documented performance improvements.",
        "Organized project information into structured engineering reports.",
      ],
      chips: ["Canva", "Technical reports", "Testing records"],
    },
    {
      kicker: "Engineering notebook & progress reports",
      title: "APEXION",
      bullets: [
        "Prepared around 20–30 pages of engineering documentation.",
        "Kept progress logs of team activities and development stages.",
        "Organized records that show the team's engineering process.",
        "Supported competition preparation with structured technical reports.",
      ],
      chips: ["Engineering notebook", "Progress logs", "Canva"],
      links: [{ label: "Team site", href: "https://www.teamapexion.com" }],
    },
  ],
  tools: ["Engineering Notebooks", "Technical Reporting", "Progress Logs", "Testing Documentation", "Canva", "Information Management", "Documentation Layout", "Development Tracking"],
  record: [
    { when: "Sep 2026 — Present", type: "Experience", title: "Documentation Head", org: "APEXION — Team 164 · National Robotics League 2026", text: "Maintaining the engineering notebook, progress logs and reports, and presenting the team's engineering workflow in Canva." },
    { when: "Project", type: "Docs", title: "ULTRON — Engineering Documentation", org: "Canva", text: "Documented ULTRON's design, assembly, testing and improvements in structured engineering reports." },
    { when: "Present", type: "Education", title: "12th Grade", org: "Anjuman Pre-University College", text: "Currently studying while leading documentation for the National Robotics League 2026." },
  ],
  about: [
    "I'm Mohammed Musayyib, a 12th-grade student at Anjuman Pre-University College in Bhatkal and the Documentation Head of APEXION — Team 164 for the National Robotics League 2026.",
    "I make sure our work is on record. I keep the engineering notebook and progress logs, and for Project ULTRON I documented every stage, from design and assembly to testing and improvements, in around 20–30 pages of reports.",
  ],
  skills: ["Engineering Notebooks", "Technical Reporting", "Progress Logs & Testing Records", "Canva Documentation Layout", "Information Management"],
  principles: [
    { title: "Record as you go", text: "Progress logs are written during the build, not remembered after it." },
    { title: "Show the process", text: "Judges and teammates should see how the robot was made, not just the result." },
    { title: "Keep it organized", text: "Structured reports make technical information easy to find and follow." },
    { title: "Track every test", text: "Testing records show what changed and why the robot got better." },
  ],
};

export const yaseen: Person = {
  title: "Ahmed Yaseen — Operations & Logistics Coordinator, APEXION Team 164",
  description: "Operations & Logistics Coordinator at APEXION for the National Robotics League 2026: equipment, transport, scheduling and resources for ULTRON.",
  first: "Ahmed", last: "Yaseen", email: "rumzas@gmail.com", photo: "/yaseen.png", location: "Bhatkal",
  role: "Operations & Logistics Coordinator — APEXION, Team\u00a0164",
  intro: "Keeping APEXION running for the National Robotics League 2026. I handle the equipment, transport and schedules so the team can focus on the robot.",
  workIntro: "From components to transport — equipment sourced, schedules set and the team where it needs to be.",
  contactLine: "Need things organized? Let's talk.",
  heroStats: [
    { value: "3–4", label: "Components managed" },
    { value: "164", label: "APEXION team number" },
    { value: "2026", label: "National Robotics League" },
  ],
  workStats: [
    { value: "3–4", label: "Items for ULTRON" },
    { value: "1", label: "Robot supported" },
    { value: "2026", label: "National Robotics League" },
  ],
  projects: [
    {
      kicker: "Equipment & resource management",
      title: "ULTRON",
      bullets: [
        "Helped purchase or manage around 3–4 robot components and equipment items.",
        "Organized the materials and equipment needed for robot development.",
        "Coordinated logistics for robot testing sessions.",
        "Supported the team's operational needs during the project.",
      ],
      chips: ["Procurement", "Equipment", "Logistics"],
    },
    {
      kicker: "Team operations & logistics",
      title: "APEXION",
      bullets: [
        "Arranged transport for team meetings and robot testing sessions.",
        "Coordinated team schedules and shared updates on WhatsApp.",
        "Organized equipment and materials for robotics activities.",
        "Supported competition preparation by coordinating resources.",
      ],
      chips: ["Scheduling", "Transport", "WhatsApp"],
      links: [{ label: "Team site", href: "https://www.teamapexion.com" }],
    },
  ],
  tools: ["Transportation Coordination", "Equipment Management", "Inventory Organization", "Resource Management", "Team Scheduling", "Material Procurement", "Competition Preparation", "WhatsApp"],
  record: [
    { when: "Sep 2026 — Present", type: "Experience", title: "Operations & Logistics Coordinator", org: "APEXION — Team 164 · National Robotics League 2026", text: "Managing equipment and inventory, coordinating transport and schedules, and helping purchase robot components." },
    { when: "Project", type: "Support", title: "ULTRON — Robotics Development Support", org: "Equipment & resource management", text: "Helped source and manage 3–4 components and equipment items, and organized logistics for testing sessions." },
    { when: "Present", type: "Education", title: "12th Grade", org: "Anjuman Pre-University College", text: "Currently studying while running operations for the National Robotics League 2026." },
  ],
  about: [
    "I'm Ahmed Yaseen, a 12th-grade student at Anjuman Pre-University College in Bhatkal and the Operations & Logistics Coordinator of APEXION — Team 164 for the National Robotics League 2026.",
    "I make sure the team has what it needs, when and where it needs it: equipment and inventory, robot components, transport to meetings and testing sessions, and schedules shared over WhatsApp.",
  ],
  skills: ["Transportation Coordination", "Equipment & Inventory Management", "Resource Management", "Team Scheduling", "Material Procurement"],
  principles: [
    { title: "Plan ahead", text: "Transport and schedules are set before the team needs them." },
    { title: "Know the inventory", text: "Knowing what equipment we have saves time at every build session." },
    { title: "Communicate clearly", text: "One clear message keeps the whole team on the same schedule." },
    { title: "Support the build", text: "Operations work so the builders can focus on the robot." },
  ],
};

export const muzayyan: Person = {
  title: "Ahmed Muzayyan — Community Outreach Representative, APEXION Team 164",
  description: "Community Outreach Representative at APEXION for the National Robotics League 2026: robotics awareness visits to 4 schools, reaching 80–90 students.",
  first: "Ahmed", last: "Muzayyan", email: "ahmedmuzayyan17@gmail.com", photo: "/muzayyan.png", location: "Bhatkal",
  role: "Community Outreach Representative — APEXION, Team\u00a0164",
  intro: "Bringing robotics to students in Bhatkal for APEXION at the National Robotics League 2026. I visit schools, run Q&As and get young learners curious about STEM.",
  workIntro: "From classroom Q&As to awareness campaigns — 4 schools visited and 80–90 students reached.",
  contactLine: "Want robotics at your school? Let's talk.",
  heroStats: [
    { value: "4", label: "Schools visited" },
    { value: "80–90", label: "Students reached" },
    { value: "164", label: "APEXION team number" },
  ],
  workStats: [
    { value: "4", label: "Schools" },
    { value: "80–90", label: "Students" },
    { value: "2026", label: "National Robotics League" },
  ],
  projects: [
    {
      kicker: "School outreach initiative",
      title: "Robotics Awareness",
      bullets: [
        "Visited 4 schools to promote robotics and STEM awareness.",
        "Reached around 80–90 students through outreach activities.",
        "Ran interactive Q&A sessions to introduce students to robotics.",
        "Encouraged students to explore technology and engineering.",
      ],
      chips: ["School visits", "Q&A sessions", "Claude"],
    },
    {
      kicker: "Community engagement & promotion",
      title: "APEXION",
      bullets: [
        "Represented APEXION during school visits and community activities.",
        "Helped organize awareness campaigns promoting robotics education.",
        "Shared the team's robotics work with students.",
        "Used Claude to help prepare outreach material.",
      ],
      chips: ["Campaigns", "Public engagement", "STEM promotion"],
      links: [{ label: "Team site", href: "https://www.teamapexion.com" }],
    },
  ],
  tools: ["Community Engagement", "Robotics Awareness", "STEM Promotion", "Student Interaction", "Q&A Sessions", "Awareness Campaigns", "School Outreach", "Claude"],
  record: [
    { when: "Sep 2026 — Present", type: "Experience", title: "Community Outreach Representative", org: "APEXION — Team 164 · National Robotics League 2026", text: "Promoting robotics through school visits and community activities, and representing APEXION at outreach events." },
    { when: "Project", type: "Outreach", title: "Robotics Awareness — School Outreach", org: "4 schools · 80–90 students", text: "Visited schools and ran interactive Q&A sessions to introduce students to robotics and STEM." },
    { when: "Present", type: "Education", title: "12th Grade", org: "Anjuman Pre-University College", text: "Currently studying while leading outreach for the National Robotics League 2026." },
  ],
  about: [
    "I'm Ahmed Muzayyan, a 12th-grade student at Anjuman Pre-University College in Bhatkal and the Community Outreach Representative of APEXION — Team 164 for the National Robotics League 2026.",
    "I take robotics beyond our team. I've visited 4 schools and reached around 80–90 students, running Q&A sessions that introduce them to robotics and encourage them to explore engineering.",
  ],
  skills: ["Community Engagement", "Robotics & STEM Awareness", "Student Q&A Sessions", "Awareness Campaigns", "Outreach Coordination"],
  principles: [
    { title: "Go to them", text: "School visits bring robotics to students who might never see it otherwise." },
    { title: "Make it a conversation", text: "Q&A sessions let students ask what they actually want to know." },
    { title: "Spark curiosity", text: "One good session can start someone on a path into engineering." },
    { title: "Represent the team", text: "At every visit, I'm showing what APEXION stands for." },
  ],
};

export const people: Record<string, Person> = { bassam, rahim, ansar, ahmed, ibrahim, sinan, musayyib, yaseen, muzayyan };
