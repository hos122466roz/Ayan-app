import Head from "../components/head/Head";
import cover from "../../../public/image/head/close-up-coal-burning-f-13522851.jpg";

import ContactUsClient from "./ConectUsClient";

const ContactUs = () => {
  return (
    <>
      <Head cover={cover} title="تماس با ما" />
      <ContactUsClient/>
    </>
  );
};
export default ContactUs;
