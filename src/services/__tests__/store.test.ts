import { Store } from "../store";

describe("mobile number store", () => {
  it("positive test", () => {
    const store = new Store();
    store.setMobile("081234567891");
    expect(store.mobile.value).toBe("081234567891");
    expect(store.mobile.error).toBe(false);
    store.setMobile("+6281234567891");
    expect(store.mobile.value).toBe("+6281234567891");
    expect(store.mobile.error).toBe(false);
  });
  it("negative test", () => {
    const store = new Store();
    store.setMobile("");
    expect(store.mobile.value).toBe("");
    expect(store.mobile.error).toBe(true);
    store.setMobile("notamobilenumber");
    expect(store.mobile.value).toBe("notamobilenumber");
    expect(store.mobile.error).toBe(true);
  });
});

describe("first name store", () => {
  it("positive test", () => {
    const store = new Store();
    store.setFirstName("First Name");
    expect(store.firstName.value).toBe("First Name");
    expect(store.firstName.error).toBe(false);
  });
  it("negative test", () => {
    const store = new Store();
    store.setFirstName("");
    expect(store.firstName.value).toBe("");
    expect(store.firstName.error).toBe(true);
  });
});

describe("last name store", () => {
  it("positive test", () => {
    const store = new Store();
    store.setLastName("Last Name");
    expect(store.lastName.value).toBe("Last Name");
    expect(store.lastName.error).toBe(false);
  });
  it("negative test", () => {
    const store = new Store();
    store.setLastName("");
    expect(store.lastName.value).toBe("");
    expect(store.lastName.error).toBe(true);
  });
});

describe("date of birth store", () => {
  it("positive test", () => {
    const store = new Store();
    store.setDateOfBirth("");
    expect(store.dateOfBirth).toBe("");
    store.setDateOfBirth("2000-10-10");
    expect(store.dateOfBirth).toBe("2000-10-10");
  });
});

describe("gender store", () => {
  it("positive test", () => {
    const store = new Store();
    store.setGender("");
    expect(store.gender).toBe("");
    store.setGender("male");
    expect(store.gender).toBe("male");
    store.setGender("female");
    expect(store.gender).toBe("female");
  });
});

describe("email store", () => {
  it("positive test", () => {
    const store = new Store();
    store.setEmail("email@domain.com");
    expect(store.email.value).toBe("email@domain.com");
    expect(store.email.error).toBe(false);
    store.setEmail("email.email@domain.com");
    expect(store.email.value).toBe("email.email@domain.com");
    expect(store.email.error).toBe(false);
    store.setEmail("email2@domain.com");
    expect(store.email.value).toBe("email2@domain.com");
    expect(store.email.error).toBe(false);
    store.setEmail("email2.email@domain.com");
    expect(store.email.value).toBe("email2.email@domain.com");
    expect(store.email.error).toBe(false);
    store.setEmail("email@domain.co");
    expect(store.email.value).toBe("email@domain.co");
    expect(store.email.error).toBe(false);
    store.setEmail("email@domain.net");
    expect(store.email.value).toBe("email@domain.net");
    expect(store.email.error).toBe(false);
  });
  it("negative test", () => {
    const store = new Store();
    store.setEmail("");
    expect(store.email.value).toBe("");
    expect(store.email.error).toBe(true);
    store.setEmail("email@domain");
    expect(store.email.value).toBe("email@domain");
    expect(store.email.error).toBe(true);
    store.setEmail("email@domain.c");
    expect(store.email.value).toBe("email@domain.c");
    expect(store.email.error).toBe(true);
    store.setEmail("@domain.com");
    expect(store.email.value).toBe("@domain.com");
    expect(store.email.error).toBe(true);
    store.setEmail("email@.com");
    expect(store.email.value).toBe("email@.com");
    expect(store.email.error).toBe(true);
  });
});

describe("isRegisterSuccess store", () => {
  it("positive test", () => {
    const store = new Store();
    store.setIsRegisterSuccess(true);
    expect(store.isRegisterSuccess).toBe(true);
    store.setIsRegisterSuccess(false);
    expect(store.isRegisterSuccess).toBe(false);
  });
});
