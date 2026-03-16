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

export const siteConfig: SiteConfig = {
  name: "Ethan Vosburg",
  roles: ["Broadcast Engineer", "Computer Engineer"],
  links: [
    { label: "GitHub", enabled: true, note: "Repository channel", href: "https://github.com/EthanV1920"},
    { label: "LinkedIn", enabled: true, note: "Professional signal", href: "https://www.linkedin.com/in/evosburg/"},
    { label: "X / Twitter", enabled: false, note: "Broadcast notes" },
    { label: "Email", enabled: false, note: "Direct contact" },
    { label: "Resume", enabled: false, note: "Credential deck" },
  ],
};
