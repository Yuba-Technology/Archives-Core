/*
 * Jest configuration file for Archives-Core project that defines testing environment
 * and behavior settings.
 *
 * This configuration file sets up the Jest testing framework for the project.
 *
 * Key features:
 * - TypeScript support with ts-jest
 * - Code coverage reporting
 * - Test environment configuration (both node and browser)
 * - Module path mapping (for `@/` => `src/` paths)
 * - Custom test matchers and extensions (to support node/browser tests)
 * - Test file patterns and locations (in `src/`)
 *
 * Copyright (c) 2015-2025 Yuba Technology. All rights reserved.
 * This file is a collaborative effort of the Yuba Technology team
 * and all contributors to the Archives-Core project.
 *
 * Licensed under the AGPLv3 license.
 */

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
