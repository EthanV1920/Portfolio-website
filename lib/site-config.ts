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

export function getTrackedLinkHref(link: LinkItem): string | undefined {
  if (!link.href) {
    return undefined;
  }

  const params = new URLSearchParams({
    label: link.label,
    target: link.href,
  });

  return `/out.html?${params.toString()}`;
}

export const siteConfig: SiteConfig = {
  name: "Ethan Vosburg",
  roles: ["Broadcast Engineer", "Computer Engineer"],
  links: [
    { label: "GitHub", enabled: true, note: "Repository channel", href: "https://github.com/EthanV1920"},
    { label: "LinkedIn", enabled: true, note: "Professional signal", href: "https://www.linkedin.com/in/evosburg/"},
    { label: "Vosburg Productions", enabled: true, note: "Broadcast Worldwide", href: "https://vprovids.com" },
    // { label: "Email", enabled: false, note: "Direct contact" },
    { label: "Resume", enabled: true, note: "Open PDF viewer", href: "/resume.html" },
  ],
};
