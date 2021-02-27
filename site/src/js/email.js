import { Modal } from "./components";

/**
 *
 * @param {*} subject
 * @param {*} name
 * @param {*} text
 * @returns {Promise<*>}
 */
const sendEmail = (email, name, subject, text) =>
  fetch("https://salty-garden-80295.herokuapp.com/", {
    method: "POST",
    body: JSON.stringify({ email, name, subject, text }),
  });

/**
 * Set submit action
 */
document.getElementById("email_form").onsubmit = (e) => {
  e.preventDefault();

  const formValues = {
    email: e.target[0].value,
    name: e.target[1].value,
    subject: e.target[2].value,
    text: e.target[3].value,
  };

  const danger = (text) => {
    const m = Modal(e.target, true);
    m.classList.add("danger");
    m.append(text);
  };

  if (!/.+@.+\..+/gi.test(formValues.email)) {
    danger("Please use a valid email");
  } else if (!/.{2,}\s+.{2,}/gi.test(formValues.name)) {
    danger("Please use your full name");
  } else if (!/.{3,}/gi.test(formValues.subject)) {
    danger("Please use a descriptive subject");
  } else if (!/.{5,}/gi.test(formValues.text)) {
    danger("Make you message count");
  } else {
    sendEmail(
      formValues.email,
      formValues.name,
      formValues.subject,
      formValues.text
    )
      .then((result) => {
        console.log(result.code);
        Modal(e.target, false, 1000).append("See You Soon");
        e.target.reset();
      })
      .catch(() =>
        danger(
          "An error Occurred. Please try again later. Feel free to open an issue."
        )
      );
  }
};
