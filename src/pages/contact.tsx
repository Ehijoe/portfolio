import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import ContactForm from '../components/ContactForm';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default ContactPage;

export const Head: HeadFC = () => <title>Contact</title>
