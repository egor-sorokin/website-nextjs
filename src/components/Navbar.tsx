import { FC } from 'react';

import LinkStretched from '@/components/LinkStretched';

interface NavbarProps {
  items: Array<{ url: string; text: string }>;
}

const Navbar: FC<NavbarProps> = ({ items = [] }) => {
  const cssClassesLinkStretched = 'navbar__text font-s-12-secondary text-c-mercury-light';

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navbarItems = items.map((item, i) => (
    <li key={i + 1} className="navbar__item">
      <LinkStretched cssClasses={cssClassesLinkStretched} url={item.url} text={item.text} onClick={() => scrollToSection(item.text)} />
    </li>
  ));

  return <ul className="navbar">{navbarItems}</ul>;
};

export default Navbar;
