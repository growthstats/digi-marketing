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

    const tlLeadershipTitle = gsap.timeline({
      scrollTrigger: {
        trigger: '#leadership-title',
        start: 'top 80%',
        end: 'bottom 10%',
        scrub: false,
        markers: false,
        toggleActions: 'play reverse play reverse', // onEnter onLeave onEnterBack onLeaveBack
      },
    });
    tlLeadershipTitle.fromTo(
      '.animate-leadership',
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
            src={'/team-unsplash.jpg'}
            alt="team freestanding letters"
            className={cx(styles['d-section__team-image'])}
            width={585}
            height={390}
          />
        </AspectRatio>
      </Box>
      {/* LEADERSHIP */}
      <Box className={cx(styles['d-section__leadership-container'])}>
        <Box className={cx(styles['d-section__leadership-image-wrapper'])}>
          <Image
            className={cx(styles['d-section__leadership-image'])}
            alt="Image of founder of Growth Stats Avinash Kawade"
            src={'/user-icon-default.avif'}
            width={400}
            height={400}
          />
        </Box>
        <Box className={cx(styles['d-section__leadership-content-wrapper'])}>
          <Heading as="h3" size={'9'} id="leadership-title" className={cx(styles['d-section__leadership-title'], 'animate-leadership')}>
            LEADERSHIP
          </Heading>
          <Text as="p" size={'6'} className={cx(styles['d-section__leadership-text'], 'animate-leadership')}>
            At the helm of affairs is the founder of <Text weight={'bold'}>Growth Stats</Text>;{' '}
            <Text color="teal" weight={'bold'}>
              Mr. Avinash Kawade
            </Text>
            . His envious professional track record of work experience as a{' '}
            <Text weight={'bold'}>Backend Operation (International Business)</Text>,{' '}
            <Text weight={'bold'}>Digital Marketing Executive</Text>, <Text weight={'bold'}>Email marketing executive</Text>,{' '}
            <Text weight={'bold'}>Marketing Associate</Text>, and <Text weight={'bold'}>Sales and Marketing Manager</Text> has helped our
            organization grow at a phenomenal pace. His work experience combined with a determination to deliver excellence, has laid a
            strong foundation for the company. We have a young team of 10 professionals who are experienced and trained to create an online
            impression for your business that is unforgettable and inspiring. Our client servicing executives leave no stone unturned to
            ensure <Text weight={'bold'}>100% Client Satisfaction</Text>.
          </Text>
        </Box>
      </Box>
    </Section>
  );
};

export default TeamSection;
