import 'react-toastify/dist/ReactToastify.css';

import { Box, Button, Heading, Section, Text } from '@radix-ui/themes';
import cx from 'classnames';
import Link from 'next/link';
import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleFormDataChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const url = 'https://formkeep.com/f/be36b12536b6';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        Accept: 'application/javascript',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        toast.success('Form submitted successfully!');
        setFormData(initialFormData);
        setErrors({});
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        toast.error('Error submitting the form. Please try again.');
      });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.cname.trim()) newErrors.cname = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
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
                  className={cx(styles['d-section__form-control-text-input'], {
                    [styles['d-section__form-control-text-input--error']]: errors.cname,
                  })}
                />
                <label htmlFor="cname" className={cx(styles['d-section__form-control-label'])}>
                  Name {errors.cname ? <Text>({errors.cname})</Text> : null}
                </label>
              </Box>
              {/* Email */}
              <Box className={cx(styles['d-section__form-control'])}>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  onChange={handleFormDataChange}
                  className={cx(styles['d-section__form-control-text-input'], {
                    [styles['d-section__form-control-text-input--error']]: errors.email,
                  })}
                />
                <label htmlFor="email" className={cx(styles['d-section__form-control-label'])}>
                  Email {errors.email ? <Text>({errors.email})</Text> : null}
                </label>
              </Box>
              {/* Phone */}
              <Box className={cx(styles['d-section__form-control'])}>
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  onChange={handleFormDataChange}
                  className={cx(styles['d-section__form-control-text-input'], {
                    [styles['d-section__form-control-text-input--error']]: errors.phone,
                  })}
                />
                <label htmlFor="phone" className={cx(styles['d-section__form-control-label'])}>
                  Phone {errors.phone ? <Text>({errors.phone})</Text> : null}
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
                  className={cx(styles['d-section__form-control-text-input'], styles['d-section__form-control-textarea-input'], {
                    [styles['d-section__form-control-text-input--error']]: errors.message,
                  })}
                />
                <label htmlFor="message" className={cx(styles['d-section__form-control-label'])}>
                  Message {errors.message ? <Text>({errors.message})</Text> : null}
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
      <ToastContainer position="bottom-left" />
    </Section>
  );
};

export default ContactFormSection;
