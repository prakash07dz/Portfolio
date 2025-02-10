import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const validateForm = (data) => {
    let newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    } else if (data.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (data.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      const validationErrors = validateForm({ [name]: value });

      if (validationErrors[name]) {
        newErrors[name] = validationErrors[name];
      } else {
        delete newErrors[name];
      }

      return newErrors;
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDisabled(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm(
          "service_oit13qn",
          "template_et4kpfn",
          form.current,
          "-bUd4VZ71pjnSYlCM"
        )
        .then(() => {
          setSuccessMessage("Your message has been sent successfully!");
          setIsLoading(false);

          setTimeout(() => setIsDisabled(false), 5000);
        })
        .catch((error) => {
          console.error(error.text);
          setIsLoading(false);
        });

      e.target.reset();
    } else {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center py-20 bg-gray-800 text-white"
    >
      <motion.div
        className="w-full max-w-lg p-8 bg-gray-900 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center">
          Let's Connect!
        </h2>
        <p className="text-gray-400 text-center mt-2 mb-6">
          Have a project in mind? Reach out and let's build something amazing.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 w-full bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleInputChange}
            />

            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 w-full bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="p-3 w-full bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            className={`w-full px-4 py-2 text-white rounded-lg transition-all ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-400"
            }`}
            whileHover={{ scale: isLoading ? 1 : 1.05 }}
            whileTap={{ scale: isLoading ? 1 : 0.95 }}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
