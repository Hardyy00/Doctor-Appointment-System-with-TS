const Contact: React.FC = () => {
  return (
    <section className="py-[4rem]">
      <form action="" className="mx-auto">
        <div className="contact_row">
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Email" name="email" id="email" />
        </div>

        <div className="input-row">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            placeholder="Let us know how we can help you"
            id="subject"
            name="subject"
          />
        </div>

        <div>
          <label htmlFor="tx">Your message</label>
          <textarea name="message" id="tx" cols={30} rows={5}></textarea>
        </div>
      </form>
    </section>
  );
};

export default Contact;
