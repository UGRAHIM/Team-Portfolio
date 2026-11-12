import type { Metadata } from "next";
import Portfolio from "./portfolio";
import { people } from "./people";

// Each student's Vercel project sets STUDENT (e.g. "rahim"). Unset = Bassam.
const person = people[process.env.STUDENT ?? "bassam"] ?? people.bassam;

export const metadata: Metadata = { title: person.title, description: person.description };

export default function Page() {
  return <Portfolio p={person} />;
}
