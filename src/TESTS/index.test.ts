import { hello } from "@/index";

describe("hello", () => {
    it("should greet with the given name", () => {
        expect(hello("world")).toBe("Hello, world!");
    });
});
