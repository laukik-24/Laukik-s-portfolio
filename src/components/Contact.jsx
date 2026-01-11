"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    const formData = new FormData(form);
    formData.append("access_key", "5edfd960-d9b9-4302-92f1-f7863192fd8e");

    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Info Submitted!", {
          position: "bottom-right",
          autoClose: 5000,
          theme: "dark",
        });

        // ✅ Reset all inputs + textarea
        form.reset();
      } else {
        toast.error("Submission failed. Try again.", {
          position: "bottom-right",
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Network error. Try again later.", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  return (
    <section id="contact" className="mt-32 mx-auto max-w-7xl px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-6xl font-black scale-y-[0.92]">Get In Touch</h2>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-full items-center">
        {/* LEFT */}
        <div className="hidden lg:flex flex-col justify-center">
          <h3 className="text-6xl font-black leading-tight">Lets Chat.</h3>
          <h3 className="text-6xl font-black leading-tight">
            Tell me about your project.
          </h3>

          <p className="mt-8 text-2xl font-bold text-[#fbbb7a]">
            Let&apos;s create something together.
          </p>

          <div className="mt-12 inline-flex items-center gap-4 border border-[#fbbb7a] rounded-xl px-8 py-4 w-max">
            <FaRegEnvelope className="text-3xl" />
            <div>
              <p className="text-sm">Mail me at</p>
              <p className="font-black text-lg">laukiklanje24@gmail.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="mx-auto w-full max-w-full border border-[#fbbb7a] rounded-2xl px-6 py-10">
          <h3 className="text-2xl font-extrabold text-[#fbbb7a] text-center mb-8">
            Send me a message 🚀
          </h3>

          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="h-16 px-6 rounded-xl bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fbbb7a]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="h-16 px-6 rounded-xl bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fbbb7a]"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="h-16 px-6 rounded-xl bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fbbb7a]"
            />

            <div>
              <p className="mb-3 font-bold">Tell more about your project*</p>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="h-36 w-full px-6 py-4 rounded-xl bg-white/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fbbb7a]"
              />
            </div>

            <button
              type="submit"
              className=" flex mt-4 self-start px-8 py-4 border border-[#fbbb7a] rounded-xl font-bold transition hover:bg-[#f9a24b] hover:text-black">
              Submit Form&nbsp;
              <FaRegPaperPlane className="ml-2 mt-1" />
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
