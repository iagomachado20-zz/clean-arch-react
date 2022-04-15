module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!**/*.d.ts'
    ],
    coverageDirectory: 'coverage',
    testEnviroment: 'jsdom',
    transform: {
        '.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|webp|svg|css|scss)$': 'identity-obj-proxy'
    },
    testEnvironment: "jsdom"
}