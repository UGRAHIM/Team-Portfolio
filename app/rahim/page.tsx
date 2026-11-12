import type { Metadata } from "next";
import Portfolio, { type Person } from "../portfolio";

export const metadata: Metadata = {
  title: "Rahim Damudi — Programming Lead, APEXION Team 164",
  description: "Programming Lead at APEXION for the National Robotics League 2026: robot programming, debugging and sensor integration.",
};

const rahim: Person = {
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

export default function Page() {
  return <Portfolio p={rahim} />;
}
