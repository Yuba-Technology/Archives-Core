import { hello } from "@/index";

describe("hello", () => {
    it("should be run in Node.js", () => {
        expect(RUNTIME).toBe("node");
    });

    it("should greet with the given name", () => {
        expect(hello("Node.js")).toBe("Hello, Node.js!");
    });
});
