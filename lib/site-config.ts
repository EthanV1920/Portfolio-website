export type LinkItem = {
  label: string;
  href?: string;
  enabled: boolean;
  note: string;
};

export type SiteConfig = {
  name: string;
  roles: string[];
  links: LinkItem[];
};

export const resumePdfUrl =
  "/resume.pdf";

export const siteConfig: SiteConfig = {
  name: "Ethan Vosburg",
  roles: ["Broadcast Engineer", "Computer Engineer"],
  links: [
      { label: "Company", enabled: true, note: "Broadcast Engineer", href: "https://vprovids.com" },
      { label: "LinkedIn", enabled: true, note: "Work History", href: "https://www.linkedin.com/in/evosburg/"},
    { label: "GitHub", enabled: true, note: "Stuff I Have Done", href: "https://github.com/EthanV1920"},
    // { label: "Email", enabled: false, note: "Direct contact" },
    { label: "Resume", enabled: true, note: "Just a PDF", href: "/resume.html" },
  ],
};
