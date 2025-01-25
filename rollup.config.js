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
        sourcemap: isDevelopment,
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

// // Automatically read dependencies from package.json
// const external = [
//     ...Object.keys(pkg.dependencies || {}),
//     ...Object.keys(pkg.peerDependencies || {}),
//     // ...Object.keys(pkg.devDependencies || {}),
// ];

// // Shared plugins
// const plugins = [
//     typescript({
//         tsconfig: "./tsconfig.json",
//         declaration: true,
//         declarationMap: isDevelopment, // Only generate source map in development mode (rollup -w)
//         declarationDir: "./dist",
//     }),
//     resolve({
//         browser: true,
//         preferBuiltins: true,
//     }),
//     commonjs(),
// ];

// // Shared output configuration
// const commonOutputConfig = {
//     sourcemap: isDevelopment, // Only generate source map in development mode (rollup -w)
// };

// module.exports = [
//     // CommonJs build (Node.js)
//     {
//         input: "src/index.ts",
//         output: {
//             file: pkg.main || "dist/index.js",
//             format: "cjs",
//             ...commonOutputConfig,
//         },
//         plugins,
//         external,
//     },
//     // ES Module build (Node.js, modern browsers)
//     {
//         input: "src/index.ts",
//         output: {
//             file: pkg.module || "dist/index.esm.js",
//             format: "es",
//             ...commonOutputConfig,
//         },
//         plugins,
//         external,
//     },
// ];
