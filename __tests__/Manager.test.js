const Manager = require("../lib/Manager");

test("tests all properties of created employees", () => {
    const emp = new Manager("Timbo", "420", "@gmail", "1337")

    expect(emp.getRole()).toBe("Manager");
    expect(emp.getName()).toBe("Timbo");
    expect(emp.getId()).toBe("420");
    expect(emp.getEmail()).toBe("@gmail");
    expect(emp.getOfficeNumber()).toBe("1337");
});