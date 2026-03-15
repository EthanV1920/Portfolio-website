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
    { label: "GitHub", enabled: false, note: "Repository channel" },
    { label: "LinkedIn", enabled: false, note: "Professional signal" },
    { label: "X / Twitter", enabled: false, note: "Broadcast notes" },
    { label: "Email", enabled: false, note: "Direct contact" },
    { label: "Resume", enabled: false, note: "Credential deck" },
  ],
};
