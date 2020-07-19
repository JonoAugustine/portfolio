const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

cards.append(...projects.map((p) => ProjectCard(p)));

badges.append(Badge("https://github.com/JonoAugustine", "gitHub"));
badges.append(Badge("https://gitlab.com/JonoAugustine", "gitLab"));
badges.append(
  Badge("https://www.linkedin.com/in/jonathan-augustine-14678b124/", "linkedin")
);

badges.append(Badge("./images/JonoAugustineResume.pdf", "resume"));

/**
 *
 * @param {*} subject
 * @param {*} name
 * @param {*} text
 * @returns {Promise<*>}
 */
const sendEmail = (email, name, subject, text) => {
  console.log({ email, name, subject, text });
  return $.post("https://salty-garden-80295.herokuapp.com/", {
    email,
    name,
    subject,
    text,
  });
};

const submit = () => {
  const formValues = {};
  $.each(form.serializeArray(), (_, field) => {
    formValues[field.name] = field.value;
  });

  if (!/.+@.+\..+/gi.test(formValues.email)) {
    Modal(form, true).addClass("danger").append("Please use a valid email");
  } else if (!/.{2,}\s+.{2,}/gi.test(formValues.name)) {
    Modal(form, true).addClass("danger").append("Please use your full name");
  } else if (!/.{3,}/gi.test(formValues.subject)) {
    Modal(form, true)
      .addClass("danger")
      .append("Please use a descriptive subject");
  } else if (!/.{5}/gi.test(formValues.text)) {
    Modal(form, true).addClass("danger").append("Make you message count");
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
