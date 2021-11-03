const Intern = require("../lib/intern");

test("tests all properties of created employees", () => {
    const emp = new Intern("Timbo", "420", "@gmail", "school")

    expect(emp.getRole()).toBe("Intern");
    expect(emp.getName()).toBe("Timbo");
    expect(emp.getId()).toBe("420");
    expect(emp.getEmail()).toBe("@gmail");
    expect(emp.getSchool()).toBe("school");
});