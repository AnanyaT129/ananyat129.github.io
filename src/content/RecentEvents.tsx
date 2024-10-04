export type RecentEvents = {
  date: string;
  title: string;
  description?: string;
  link?: string;
  location: string;
};

export var RecentEventsList: RecentEvents[] = [
  {
    date: "September 18, 2024",
    title: "Panelist @ National Academies Event",
    link: "/leadership",
    location: "Washington DC",
  },
  {
    date: "September 4, 2024",
    title: "Started my last year of college!",
    location: "Boston, MA",
  },
  {
    date: "August 30, 2024",
    title: "Last day of Tesla internship",
    link: "/workExperience#Tesla",
    location: "Palo Alto, CA",
  },
];
