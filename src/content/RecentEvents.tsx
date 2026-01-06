export type RecentEvents = {
  date: string;
  title: string;
  description?: string;
  link?: string;
  location: string;
};

export var RecentEventsList: RecentEvents[] = [
  {
    date: "July 7, 2025",
    title: "Started as a Distributed Systems Engineer at Tesla",
    link: "/workExperience#Tesla",
    location: "Palo Alto, CA",
  },
  {
    date: "May 11, 2025",
    title: "Graduated Summa Cum Laude from Northeastern University!",
    location: "Boston, MA",
  },
  {
    date: "September 18, 2024",
    title: "Panelist @ National Academies Event",
    link: "/leadership",
    location: "Washington, DC",
  },
];
