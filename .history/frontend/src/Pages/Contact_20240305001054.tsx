const Contact: React.FC = () => {
  return (
    <section className="">
      <form action="">
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            placeholder="Let us know how we can help you"
            id="subject"
          />
        </div>

        <div>
          <label htmlFor="tx">Your message</label>
          <textarea name="message" id="tx" cols="30" rows="10"></textarea>
        </div>
      </form>
    </section>
  );
};

export default Contact;
