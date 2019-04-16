const {
    defaults
} = require('jest-config');
// const esModules = ['[thir-party-lib]'].join('|');
const esModules = [].join('|');

module.exports = {
    reporters: ["default", ["jest-junit", {
        "outputDirectory": "./coverage/ngx-cookie-service/test-reports-junit",
        "outputName": "./test-results.xml",
    }]],
    coverageDirectory: "<rootDir>/coverage/ngx-cookie-service",
    coverageReporters: ["json", "html", "cobertura"],
    globals: {
        "ts-jest": {
            "allowSyntheticDefaultImports": true
        }
    },
    transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
    collectCoverage: true,

    transform: {
        "^.+\\.js$": "babel-jest"
    },
    collectCoverageFrom: ["library/ngx-cookie-service/src/lib/**/*.{ts,tsx}", "!library/ngx-cookie-service/src/lib/**/*.module.{ts,tsx}", "!**/node_modules/**", "!**/lib/json/**"]
};
