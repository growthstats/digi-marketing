import { Box, Button, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Link from 'next/link';
import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';

import styles from './contact-form-section.module.scss';

interface IContactFormSectionProps {}

const ContactFormSection: FC<IContactFormSectionProps> = () => {
  const initialFormData = {
    cname: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleFormDataChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    // console.log(formData);

    // Submit form data to a specific URL
    const url = 'https://formkeep.com/f/be36b12536b6';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      mode: 'no-cors',
      headers: {
        Accept: 'UTF-8',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submission response:', data);
        // Handle response as needed
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        // Handle error as needed
      });
  };

  return (
    <Section className={cx(styles['d-section'])}>
      {/* Form */}
      <Box className={cx(styles['d-section__form-container'])}>
        <Heading as="h3" className={cx(styles['d-section__form-heading'])}>
          Message Us
        </Heading>
        <form onSubmit={handleSubmit} className={cx(styles['d-section__contact-form'])}>
          <Box className={cx(styles['d-section__form-fields-row'])}>
            <Box className={cx(styles['d-section__form-fields-col'])}>
              {/* Name */}
              <Box className={cx(styles['d-section__form-control'])}>
                <input
                  name="cname"
                  type="text"
                  placeholder="Name"
                  onChange={handleFormDataChange}
                  className={cx(styles['d-section__form-control-text-input'])}
                />
                <label htmlFor="cname" className={cx(styles['d-section__form-control-label'])}>
                  Name
                </label>
              </Box>
              {/* Email */}
              <Box className={cx(styles['d-section__form-control'])}>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  onChange={handleFormDataChange}
                  className={cx(styles['d-section__form-control-text-input'])}
                />
                <label htmlFor="email" className={cx(styles['d-section__form-control-label'])}>
                  Email
                </label>
              </Box>
              {/* Phone */}
              <Box className={cx(styles['d-section__form-control'])}>
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  onChange={handleFormDataChange}
                  className={cx(styles['d-section__form-control-text-input'])}
                />
                <label htmlFor="phone" className={cx(styles['d-section__form-control-label'])}>
                  Phone
                </label>
              </Box>
            </Box>
            <Box className={cx(styles['d-section__form-fields-col'])}>
              {/* Message */}
              <Box className={cx(styles['d-section__form-control'], 'h-full')}>
                <textarea
                  name="message"
                  placeholder="Message"
                  onChange={handleFormDataChange}
                  className={cx(styles['d-section__form-control-text-input'], styles['d-section__form-control-textarea-input'])}
                />
                <label htmlFor="message" className={cx(styles['d-section__form-control-label'])}>
                  Message
                </label>
              </Box>
            </Box>
          </Box>
          {/* Submit Form */}
          <Box className={cx(styles['d-section__form-submit-wrapper'])}>
            <Button size={'4'} className={cx(styles['d-section__form-submit'])} type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
      {/* Contact Info */}
      <Box className={cx(styles['d-section__info-container'])}>
        <Box className={cx(styles['d-section__info-row'])}>
          <Box className={cx(styles['d-section__info-col'])}>
            <Heading as="h4" className={cx(styles['d-section__info-title'])}>
              General Inquiries
            </Heading>
            <Box className={cx(styles['d-section__info-link'])}>
              <Link href={'mailto:info@growthstats.com'}>
                <Text as="p" size={'5'}>
                  info@growthstats.com
                </Text>
              </Link>
            </Box>
            <Box className={cx(styles['d-section__info-link'])}>
              <Link href={'tel:876-876-7654'}>
                <Text as="p" size={'5'}>
                  Tel: 876-876-7654
                </Text>
              </Link>
            </Box>
          </Box>
          <Box className={cx(styles['d-section__info-col'])}>
            <Heading as="h4" className={cx(styles['d-section__info-title'])}>
              Location
            </Heading>
            <Box className={cx(styles['d-section__info-address'])}>
              <Text as="p" size={'5'}>
                B.T Kawade Road, Sai Sulochana, opposite to shirke company, Ganesh Nagar, Ghorpadi, Pune, Maharashtra 411036
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default ContactFormSection;
