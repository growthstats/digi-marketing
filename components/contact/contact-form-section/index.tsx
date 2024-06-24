import { Section } from '@radix-ui/themes';
import cx from 'classnames';
import { FC } from 'react';

import styles from './contact-form-section.module.scss';

interface IContactFormSectionProps {}

const ContactFormSection: FC<IContactFormSectionProps> = () => <Section className={cx(styles['d-section'])}>ContactFormSection</Section>;

export default ContactFormSection;
