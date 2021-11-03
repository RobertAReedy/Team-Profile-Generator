const Engineer = require("../lib/Engineer");

test("tests all properties of created employees", () => {
    const emp = new Engineer("Timbo", "420", "@gmail", "github")

    expect(emp.getRole()).toBe("Engineer");
    expect(emp.getName()).toBe("Timbo");
    expect(emp.getId()).toBe("420");
    expect(emp.getEmail()).toBe("@gmail");
    expect(emp.getGithub()).toBe("github");
});