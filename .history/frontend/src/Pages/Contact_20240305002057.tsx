const Contact: React.FC = () => {
  return (
    <section className="py-[4rem] w-full text-textColor">
      <form action="" className="mx-auto w-[50%] flex flex-col gap-[1.5rem] ">
        <div className="contact_row">
          <label htmlFor="email" className="block mb-2 font-[800]">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            className="w-full border-[3px] border-gray outline-none focus:outline-none rounded-lg px-[1rem] py-[0.8rem] tracking-wide focus:border-primaryColor text-[1.1rem] font-[600]"
          />
        </div>

        <div className="input-row">
          <label htmlFor="subject" className="block mb-2 font-[800]">
            Subject
          </label>
          <input
            type="text"
            placeholder="Let us know how we can help you"
            id="subject"
            name="subject"
            className="w-full border-[3px] border-gray outline-none focus:outline-none rounded-lg px-[1rem] py-[0.8rem] tracking-wide focus:border-primaryColor text-[1.1rem] font-[600]"
          />
        </div>

        <div>
          <label htmlFor="tx" className="block mb-2 font-[800]">
            Your message
          </label>
          <textarea
            name="message"
            id="tx"
            cols={30}
            rows={5}
            className="w-full"
            placeholder="Enter your Message"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;