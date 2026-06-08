import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      diagnostics: {
        ignoreCodes: [1343],
      },
    }],
    // Vite uses ES modules, need to transform them
    '^.+\\.m?js$': 'babel-jest',
  },
  moduleNameMapper: {
    // Handle CSS imports
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(png|jpg|jpeg|gif|svg|webp)$': '<rootDir>/__mocks__/fileMock.js',
    // Mock @tanstack/react-start (server-side module)
    '@tanstack/react-start': '<rootDir>/__mocks__/react-start.ts',
    // Mock modules with import.meta (not supported in Jest)
    '^@/lib/supabase$': '<rootDir>/__mocks__/supabase.ts',
    '^@/lib/turnstile$': '<rootDir>/__mocks__/turnstile.ts',
    '^@/lib/analytics$': '<rootDir>/__mocks__/analytics.ts',
    // Alias @/ to src
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};

export default config;
