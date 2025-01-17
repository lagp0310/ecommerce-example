export type NavigationCategory = {
  title: string;
  href: string;
  description?: string;
};

export type NavigationLink = {
  title?: React.ReactNode;
  content: React.ReactNode;
  isDropdown?: boolean;
};

export type FooterLink = {
  groupName?: string;
  links: { text: string; url: string }[];
};
