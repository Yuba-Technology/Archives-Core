const BASICS = {
    // *.node.test.ts(x) *.test.ts(x)
    testMatch: [
        "<rootDir>/src/**/*.node.test.(ts|tsx)",
        "<rootDir>/src/**/*.test.(ts|tsx)",
    ],
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
            ...BASICS,
        },
        {
            displayName: "browser",
            testEnvironment: "jsdom",
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
