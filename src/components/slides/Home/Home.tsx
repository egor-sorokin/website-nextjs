import React, { useRef, useEffect } from 'react';
import { TimelineMax } from 'gsap';

import Switcher from '../../Switcher';
import { attachShowAnimation } from './animation';
import { BUTTON_EXPLORE, SWITCHER_ABOUT } from '@/utils/constants';
import ButtonExplore from '@/components/slides/Home/ButtonExplore';

interface Props {
  person: {
    first_name: string;
    last_name: string;
  } | null;
  toggleAboutSection: () => void;
}

const Home: React.FC<Props> = ({ person, toggleAboutSection = () => {} }) => {
  const homeRef = useRef<HTMLElement | null>(null);
  const homeTween = useRef<TimelineMax | null>(null);

  useEffect(() => {
    if (homeRef.current) {
      homeTween.current = new TimelineMax();
      attachShowAnimation(homeTween.current);
      homeTween.current!.play();
    }
  }, [homeRef]);

  const scrollToProjects = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const startY = window.pageYOffset;
      const endY = element.offsetTop;
      const distance = endY - startY;
      const duration = 500;
      const easing = (t: number) => t<0.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t;
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + easing(progress) * distance);
        if (progress < 1) window.requestAnimationFrame(step);
      };

      window.requestAnimationFrame(step);
    }
  };


  const clickAboutButton = () => {
    toggleAboutSection();
  };

  if (!person) return null;

  return (
    <section
      ref={homeRef}
      id="home"
      className="banner home text-c-mercury-light"
    >
      <h3 className="home__name font-s-36">
        {`${person.first_name} ${person.last_name}`}
      </h3>

      <ButtonExplore
        cssClasses="home__button-explore"
        onClick={scrollToProjects}
      >
        {BUTTON_EXPLORE.text}
      </ButtonExplore>

      <Switcher
        switcherLink={SWITCHER_ABOUT}
        onClick={clickAboutButton}
      />
    </section>
  );
};

export default Home;
