const BASICS = {
    preset: "ts-jest",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};

module.exports = {
    projects: [
        {
            displayName: "node",
            testEnvironment: "node",
            globals: {
                RUNTIME: "node",
            },
            // *.node.test.ts(x), *.test.ts(x)
            testMatch: [
                "<rootDir>/src/**/*.node.test.(ts|tsx)",
                "<rootDir>/src/**/*(?<!browser).test.(ts|tsx)",
            ],
            ...BASICS,
        },
        {
            displayName: "browser",
            testEnvironment: "jsdom",
            globals: {
                RUNTIME: "browser",
            },
            // *.browser.test.ts(x), *.test.ts(x)
            testMatch: [
                "<rootDir>/src/**/*.browser.test.(ts|tsx)",
                "<rootDir>/src/**/*(?<!node).test.(ts|tsx)",
            ],
            ...BASICS,
        },
    ],
    transform: {
        "^.+\\.ts$": [
            "ts-jest",
            {
                useESM: true,
            },
        ],
        "^.+\\.tsx$": [
            "ts-jest",
            {
                useESM: true,
            },
        ],
    },
    extensionsToTreatAsEsm: [".ts", ".tsx"],

    // Coverage
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov", "html"],
    coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
};
