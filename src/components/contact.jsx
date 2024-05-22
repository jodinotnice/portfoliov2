import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xrgnrypv");

  if (state.succeeded) {
    return <p className="form-message-sent">Merci pour votre message!</p>;
  }

  return (
    <section id="contact">
      <p className="section__text__p1">Contactez Moi</p>
      <h1 className="title">Contact</h1>
      <div className="contact-info-upper-container">
        <form className="container-form" onSubmit={handleSubmit}>
          <div className="form-relative">
            <label htmlFor="name" className="section__text__p1">
              Nom
            </label>
            <input type="text" id="name" name="name" className="input-style" />
          </div>
          <div className="form-relative">
            <label htmlFor="email" className="section__text__p1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-style"
            />
            <ValidationError
              prefix="Email"
              field="Email"
              errors={state.errors}
            />
          </div>
          <div className="form-relative">
            <label htmlFor="message" className="section__text__p1">
              Message
            </label>
            <textarea id="message" name="message" className="input-style-2" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className={`button-form-style ${
              state.submitting ? "button-form-style:disabled" : ""
            }`}
          >
            {state.submitting ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
}
