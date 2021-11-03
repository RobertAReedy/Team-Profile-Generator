const Employee = require("../lib/Employee");

test("tests all properties of created employees", () => {
    const emp = new Employee("Timbo", "420", "@gmail")

    expect(emp.getRole()).toBe("Employee");
    expect(emp.getName()).toBe("Timbo");
    expect(emp.getId()).toBe("420");
    expect(emp.getEmail()).toBe("@gmail");
});