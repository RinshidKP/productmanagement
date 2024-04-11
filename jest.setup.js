export default {
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
    setupFiles: ['./jest.setup.js'],
  };
  
  globalThis.describe = (name, fn) => {
    console.log(`[TEST SUITE] ${name}`);
    fn();
  };
  
  globalThis.it = (name, fn) => {
    console.log(`  [TEST CASE] ${name}`);
    fn();
  };
  