const typescript = require("@rollup/plugin-typescript");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const replace = require("@rollup/plugin-replace");
const pkg = require("./package.json");

// Check if it is in development mode (determined by the command line parameter -w)
const isDevelopment = process.argv.includes("-w");

const createConfig = (runtime) => ({
    input: "src/index.ts",
    output: {
        file:
            runtime === "node"
                ? "dist/node/index.js"
                : "dist/browser/index.js",
        format: runtime === "node" ? "cjs" : "es",
        sourcemap: true,
    },
    plugins: [
        replace({
            preventAssignment: true,
            values: {
                RUNTIME: JSON.stringify(runtime),
            },
        }),
        typescript({
            tsconfig: "./tsconfig.json",
            declaration: true,
            declarationDir: `./dist/${runtime}`,
            declarationMap: isDevelopment,
        }),
        resolve({
            browser: runtime === "browser",
            preferBuiltins: runtime === "node",
        }),
        commonjs(),
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
        ...(runtime === "node" ? ["fs", "path"] : []),
    ],
});

module.exports = [createConfig("node"), createConfig("browser")];
