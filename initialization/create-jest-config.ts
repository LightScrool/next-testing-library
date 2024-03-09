import { Config as JestConfig } from "jest";
import nextJest from "next/jest";

interface ICreateJestConfigParams extends Omit<JestConfig, "testEnvironment"> {
  dir?: Required<Parameters<typeof nextJest>>[0]["dir"];
}

export const createJestConfig = (
  customConfig: ICreateJestConfigParams = {},
) => {
  const modifiedCustomConfig = {
    ...customConfig,
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
      "<rootDir>/next-testing-library/initialization/setup/index.ts",
      ...(customConfig.setupFilesAfterEnv ?? []),
    ],
  };
  delete modifiedCustomConfig.dir;

  const creator = nextJest({ dir: modifiedCustomConfig.dir });
  return creator(modifiedCustomConfig);
};
