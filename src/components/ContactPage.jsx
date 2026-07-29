import { useEffect, useMemo, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import {
  contactChannels,
  socialLinks,
  inquiryTypes,
  responseNotes,
  EMAIL_GENERAL,
} from "../contactContent";
import "./ContactPage.css";

// Drop a form-backend URL here (Formspree, Web3Forms, Getform, your own API)
// and the form POSTs to it. Left empty, it falls back to opening a prefilled
// email in the visitor's mail client so the page is never a dead end.
const FORM_ENDPOINT = "";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  inquiry: "",
  subject: "",
  message: "",
  consent: false,
  company: "", // honeypot - real people never see or fill this
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Please tell me your name.";
  else if (values.name.trim().length < 2) errors.name = "That looks too short.";

  if (!values.email.trim()) errors.email = "An email is needed to reply to you.";
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = "That doesn't look like a valid email address.";

  if (values.phone.trim() && !/^[\d\s+()-]{6,20}$/.test(values.phone.trim()))
    errors.phone = "Use digits, spaces and + ( ) - only.";

  if (!values.inquiry) errors.inquiry = "Pick what this is about.";

  if (!values.subject.trim()) errors.subject = "Add a short subject line.";

  if (!values.message.trim()) errors.message = "The message can't be empty.";
  else if (values.message.trim().length < 30)
    errors.message = "A little more detail gets a much better reply.";

  if (!values.consent) errors.consent = "Please confirm before sending.";

  return errors;
}

// Module-scope so the node is updated in place rather than remounted on every
// keystroke - a remounted role="alert" gets re-announced by screen readers.
function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <span className="ct-err" id={id} role="alert">
      {message}
    </span>
  );
}

export default function ContactPage() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    document.title = "Contact — Arijit Bhattacharyya";
  }, []);

  const routedTo = useMemo(() => {
    const match = inquiryTypes.find((t) => t.v === values.inquiry);
    return match ? match.to : EMAIL_GENERAL;
  }, [values.inquiry]);

  const setField = (key) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [key]: val }));
    if (touched[key]) {
      setErrors(validate({ ...values, [key]: val }));
    }
  };

  const onBlur = (key) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  const mailtoFallback = () => {
    const label =
      inquiryTypes.find((t) => t.v === values.inquiry)?.label || "Enquiry";
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone && `Phone: ${values.phone}`,
      values.organisation && `Organisation: ${values.organisation}`,
      `Regarding: ${label}`,
      "",
      values.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${routedTo}?subject=${encodeURIComponent(
      `[${label}] ${values.subject}`
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Bot filled the hidden field - pretend it worked, send nothing.
    if (values.company) {
      setStatus("sent");
      return;
    }

    const found = validate(values);
    setErrors(found);
    setTouched(
      Object.keys(EMPTY).reduce((acc, k) => ({ ...acc, [k]: true }), {})
    );

    if (Object.keys(found).length) {
      const first = document.querySelector("[aria-invalid='true']");
      first?.focus();
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (!FORM_ENDPOINT) {
      mailtoFallback();
      setStatus("sent");
      setValues(EMPTY);
      setTouched({});
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...values, routedTo, company: undefined }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      setValues(EMPTY);
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  const fieldProps = (key) => ({
    id: `ct-${key}`,
    name: key,
    value: values[key],
    onChange: setField(key),
    onBlur: onBlur(key),
    "aria-invalid": Boolean(errors[key]) || undefined,
    "aria-describedby": errors[key] ? `ct-${key}-err` : undefined,
    className: `ct-input${errors[key] ? " ct-input--bad" : ""}`,
  });

  return (
    <div className="ct">
      <Nav />

      {/* HERO */}
      <header className="ct-hero">
        <div className="ct-inner">
          <div className="ct-kicker">Contact</div>
          <h1 className="ct-hero__title">
            Start a conversation that&rsquo;s <em>worth both our time</em>.
          </h1>
          <p className="ct-hero__desc">
            Speaking invitations, mentoring, investment conversations, media
            requests or collaborations &mdash; send the details and it reaches
            me directly. No assistants, no forms disappearing into a void.
          </p>
        </div>
      </header>

      {/* CHANNELS */}
      <section className="ct-inner ct-channels">
        {contactChannels.map((c, i) => (
          <article className="ct-channel" key={c.k}>
            <span className="ct-channel__idx">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="ct-channel__label">{c.label}</h2>
            {c.href ? (
              <a className="ct-channel__value" href={c.href}>
                {c.value}
              </a>
            ) : (
              <span className="ct-channel__value">{c.value}</span>
            )}
            <p className="ct-channel__note">{c.note}</p>
          </article>
        ))}
      </section>

      {/* FORM + ASIDE */}
      <section className="ct-inner ct-main">
        <div className="ct-form-wrap">
          <div className="ct-shead">
            <div className="ct-shead__num">
              <span>01</span> Send a Message
            </div>
            <h2 className="ct-shead__title">
              Tell me what you&rsquo;re working on.
            </h2>
          </div>

          {status === "sent" ? (
            <div className="ct-sent" role="status">
              <span className="ct-sent__mark" aria-hidden="true">
                &#10003;
              </span>
              <h3>Message on its way.</h3>
              <p>
                {FORM_ENDPOINT
                  ? "Thanks for reaching out — expect a reply within 2–4 working days."
                  : `Your email client should have opened with everything filled in. If it didn't, write to ${routedTo} directly.`}
              </p>
              <button
                type="button"
                className="ct-btn"
                onClick={() => setStatus("idle")}
              >
                Send another
              </button>
            </div>
          ) : (
            <form className="ct-form" onSubmit={onSubmit} noValidate>
              <div className="ct-row">
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-name">
                    Name <span className="ct-req">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="name"
                    {...fieldProps("name")}
                  />
                  <FieldError id="ct-name-err" message={errors.name} />
                </div>

                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-email">
                    Email <span className="ct-req">*</span>
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    {...fieldProps("email")}
                  />
                  <FieldError id="ct-email-err" message={errors.email} />
                </div>
              </div>

              <div className="ct-row">
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-phone">
                    Phone <span className="ct-opt">optional</span>
                  </label>
                  <input type="tel" autoComplete="tel" {...fieldProps("phone")} />
                  <FieldError id="ct-phone-err" message={errors.phone} />
                </div>

                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-organisation">
                    Organisation <span className="ct-opt">optional</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="organization"
                    {...fieldProps("organisation")}
                  />
                </div>
              </div>

              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-inquiry">
                  What is this about? <span className="ct-req">*</span>
                </label>
                <select {...fieldProps("inquiry")}>
                  <option value="">Select a topic...</option>
                  {inquiryTypes.map((t) => (
                    <option value={t.v} key={t.v}>
                      {t.label}
                    </option>
                  ))}
                </select>
                <FieldError id="ct-inquiry-err" message={errors.inquiry} />
              </div>

              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-subject">
                  Subject <span className="ct-req">*</span>
                </label>
                <input type="text" {...fieldProps("subject")} />
                <FieldError id="ct-subject-err" message={errors.subject} />
              </div>

              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-message">
                  Message <span className="ct-req">*</span>
                </label>
                <textarea rows={7} {...fieldProps("message")} />
                <div className="ct-meta">
                  <FieldError id="ct-message-err" message={errors.message} />
                  <span className="ct-count">
                    {values.message.trim().length} characters
                  </span>
                </div>
              </div>

              {/* honeypot: off-screen, hidden from assistive tech */}
              <div className="ct-hp" aria-hidden="true">
                <label htmlFor="ct-company">Company</label>
                <input
                  type="text"
                  id="ct-company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company}
                  onChange={setField("company")}
                />
              </div>

              <div className="ct-field">
                <label className="ct-consent" htmlFor="ct-consent">
                  <input
                    type="checkbox"
                    id="ct-consent"
                    name="consent"
                    checked={values.consent}
                    onChange={setField("consent")}
                    onBlur={onBlur("consent")}
                    aria-invalid={Boolean(errors.consent) || undefined}
                    aria-describedby={
                      errors.consent ? "ct-consent-err" : undefined
                    }
                  />
                  <span>
                    I&rsquo;m happy for my details to be stored so this enquiry
                    can be answered.
                  </span>
                </label>
                <FieldError id="ct-consent-err" message={errors.consent} />
              </div>

              {status === "error" && (
                <p className="ct-alert" role="alert">
                  Something went wrong sending that. Please try again, or email{" "}
                  <a href={`mailto:${routedTo}`}>{routedTo}</a> directly.
                </p>
              )}

              <div className="ct-actions">
                <button
                  type="submit"
                  className="ct-btn ct-btn--primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
                <span className="ct-routed">
                  Goes to <strong>{routedTo}</strong>
                </span>
              </div>
            </form>
          )}
        </div>

        {/* ASIDE */}
        <aside className="ct-aside">
          <div className="ct-card">
            <div className="ct-tag ct-tag--gold">Before you write</div>
            {responseNotes.map((n) => (
              <div className="ct-note" key={n.t}>
                <h3>{n.t}</h3>
                <p>{n.d}</p>
              </div>
            ))}
          </div>

          <div className="ct-card">
            <div className="ct-tag">Elsewhere</div>
            <ul className="ct-socials">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    <span className="ct-socials__label">{s.label}</span>
                    <span className="ct-socials__handle">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <div className="ct-closing">
        <div className="ct-inner ct-closing__row">
          <span className="ct-closing__name">Arijit Bhattacharyya</span>
          <span>Since 1998</span>
          <span>Founder of Virtualinfocom</span>
          <span>Kolkata &middot; Worldwide</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
