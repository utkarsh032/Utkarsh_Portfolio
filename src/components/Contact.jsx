import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// ...
// ...

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.send(
        "utkarsh520", // Your EmailJS service ID
        "template_6h19u0j", // Your EmailJS template ID
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);

      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error("Error sending email:", error);

      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div className={`xl:mt-12 flex flex-col-reverse justify-between xl:flex-row gap-10 overflow-hidden`}>
      {/* Map */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='w-full md:w-1/2 p-8'
      >
        <div className="leading-loose my-8">
          <p className="text-gray-300 mb-4">|| Get In Touch</p>
          <p className="text-gray-100 font-semibold text-4xl">
            If you have any project or need help. Contact me
          </p>
        </div>
        <div className="sm:h-24 sm:w-24 md:h-96 md:w-96 m-auto mt-16 ring-8 rounded-tl-[5rem] rounded-br-[5rem] ">
          <div className="sm:h-24 sm:w-24 md:h-96 md:w-96 aspect-w-16 aspect-h-9 ">
            <iframe
              className="w-full h-full rounded-tl-[5rem] rounded-br-[5rem] invert shadow-2xl"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14245.733069724769!2d79.5041315!3d26.794329599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702869691055!5m2!1sen!2sin"
              title="Google Maps"
            />
          </div>
        </div>


      </motion.div>

      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='w-full md:w-1/2 bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Connect with me</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>

  );
};

export default SectionWrapper(Contact, "contact");
