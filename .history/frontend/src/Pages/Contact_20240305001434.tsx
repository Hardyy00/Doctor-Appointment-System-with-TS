const Contact: React.FC = () => {
  return (
    <section className="py-[4rem] w-full text-textColor">
      <form action="" className="mx-auto w-[60%]">
        <div className="contact_row">
          <label htmlFor="email" className="block">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            className="w-full border-2 border-black"
          />
        </div>

        <div className="input-row">
          <label htmlFor="subject" className="block">
            Subject
          </label>
          <input
            type="text"
            placeholder="Let us know how we can help you"
            id="subject"
            name="subject"
          />
        </div>

        <div>
          <label htmlFor="tx" className="block">
            Your message
          </label>
          <textarea name="message" id="tx" cols={30} rows={5}></textarea>
        </div>
      </form>
    </section>
  );
};

export default Contact;
