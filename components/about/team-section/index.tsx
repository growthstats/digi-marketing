import { AspectRatio, Box, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { FC, useEffect } from 'react';

import styles from './team-section.module.scss';

interface ITeamSectionProps {}

const TeamSection: FC<ITeamSectionProps> = (_props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tlTeamTitle = gsap.timeline({
      scrollTrigger: {
        trigger: '#team-title',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });
    tlTeamTitle.fromTo(
      '.animate-team',
      { opacity: 0, y: 20 }, // from state
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5, stagger: 0.3 }, // to state
    );
  }, []);

  return (
    <Section className={cx(styles['d-section'])}>
      {/* TEAM */}
      <Box className={cx(styles['d-section__team-container'])}>
        <Box className={cx(styles['d-section__team-content'])}>
          <Heading as="h3" size={'9'} id="team-title" className={cx(styles['d-section__team-title'], 'animate-team')}>
            TEAM
          </Heading>
          <Text as="p" size={'6'} className={cx(styles['d-section__team-text'], 'animate-team')}>
            At the core of creating success for our clients is a <Text weight={'bold'}>Creative</Text>, <Text weight={'bold'}>Dynamic</Text>
            , and <Text weight={'bold'}>Skilled</Text> team that enthusiastically delivers on commitments every single time
          </Text>
        </Box>
        <AspectRatio ratio={16 / 5}>
          <Image
            src={'/about/team-bg.webp'}
            alt="team freestanding letters"
            className={cx(styles['d-section__team-image'])}
            width={585}
            height={390}
          />
        </AspectRatio>
      </Box>
    </Section>
  );
};

export default TeamSection;
