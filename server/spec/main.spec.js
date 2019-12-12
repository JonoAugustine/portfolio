const axios = require("axios").default;

const uri = "http://localhost:6920";
const request = data => axios.post(uri, data).catch(e => console.log(e));

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
    const r = await request({});
    return expect(r.data.message).toBe("missing name");
  });

  test("Reject missing subject", async () => {
    const r = await request({ ...mock.valid(), subject: null });
    expect(r.data.message).toBe("missing subject");
  });

  test("Reject missing email", async () => {
    const r = await request({ ...mock.valid(), email: null });
    expect(r.data.message).toBe("missing email");
  });

  test("Reject missing body text", async () => {
    const r = await request({ ...mock.valid(), text: null });
    expect(r.data.message).toBe("missing text");
  });

  test("Accept valid request", async () => {
    const r = await request(mock.valid());
    return expect(r.data.message).toBe("sent");
  });
});
