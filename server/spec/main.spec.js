const axios = require("axios").default;

//const uri = "http://localhost:6920";
const uri = "https://salty-garden-80295.herokuapp.com/";
const request = data => axios.post(uri, data);

const mock = {
  valid: function() {
    return {
      name: "name name",
      email: "email@email.email",
      subject: "subject",
      text: "text text text"
    };
  }
};

describe("Server Request Validation", () => {
  test("Reject empty request", async () => {
    await expect(request({})).rejects;
  });

  test("Reject missing subject", async () => {
    await expect(request({ ...mock.valid(), subject: null })).rejects;
  });

  test("Reject missing email", async () => {
    await expect(request({ ...mock.valid(), email: null })).rejects;
  });

  test("Reject missing body text", async () => {
    await expect(request({ ...mock.valid(), text: null })).rejects;
  });

  test("Accept valid request", async () => {
    const r = await request(mock.valid());
    return expect(r.data.message).toBe("sent");
  });
});
