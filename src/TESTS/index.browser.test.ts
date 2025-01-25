import { hello } from "@/index";

describe("hello", () => {
    it("should be run in a browser", () => {
        expect(RUNTIME).toBe("browser");
    });

    it("should greet with the given name", () => {
        expect(hello("Browser")).toBe("Hello, Browser!");
    });
});
