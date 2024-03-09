import { userAgent as actual } from "next/server";

export const userAgentResultMock: ReturnType<typeof actual> = {
  isBot: false,
  ua: "ya",
  browser: {},
  device: {},
  engine: {},
  os: {},
  cpu: {},
};
