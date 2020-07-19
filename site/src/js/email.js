import { Modal } from "./components";

/**
 *
 * @param {*} subject
 * @param {*} name
 * @param {*} text
 * @returns {Promise<*>}
 */
const sendEmail = (email, name, subject, text) => {
  console.log({ email, name, subject, text });
  return fetch({
    url: "https://salty-garden-80295.herokuapp.com/",
    body: {
      email,
      name,
      subject,
      text,
    },
  });
};

// Set submit action
document.getElementById("email_form").onsubmit = (e) => {
  e.preventDefault();

  console.log(e.target);

  const formValues = {};
  // $.each(form.serializeArray(), (_, field) => {
  //   formValues[field.name] = field.value;
  // });

  const danger = (text) => {
    const m = Modal(form, true);
    m.classList.add("danger");
    m.appendChild(text);
  };

  if (!/.+@.+\..+/gi.test(formValues.email)) {
    danger("Please use a valid email");
  } else if (!/.{2,}\s+.{2,}/gi.test(formValues.name)) {
    danger("Please use your full name");
  } else if (!/.{3,}/gi.test(formValues.subject)) {
    danger("Please use a descriptive subject");
  } else if (!/.{5}/gi.test(formValues.text)) {
    danger("Make you message count");
  } else {
    sendEmail(
      formValues.email,
      formValues.name,
      formValues.subject,
      formValues.text
    );
    Modal(form, false, 1000).append("See You Soon");
  }
};
