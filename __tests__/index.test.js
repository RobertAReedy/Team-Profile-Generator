const index = require("../index");
const testInquirerAnswer = {
    role: "Intern",
    name: "Timbo",
    id: "420",
    email: "email",
    school: "school"
};

test("tests createEmployee", () => {
    const Emp = index.createEmployee(testInquirerAnswer);
    expect(Emp).toEqual(expect.any(Object));
    expect(Emp.getName()).toBe("Timbo");
});

test("tests getInput", () => {
    const answer = index.getInput();
    expect(answer).toEqual(expect.any(Object));
    expect(answer.name).toEqual(expect.any(String));
});

test("tests writeHTML", () => {
    expect(index.writeHTML()).toEqual(expect.any(String));
});