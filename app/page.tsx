import Portfolio, { type Person } from "./portfolio";

const bassam: Person = {
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

export default function Page() {
  return <Portfolio p={bassam} />;
}
