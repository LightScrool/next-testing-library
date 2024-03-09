import * as Actual from "next/server";

import { NextFetchEventMock } from "./next-fetch-event-mock";
import { NextRequestMock } from "./next-request-mock";
import { NextResponseMock } from "./next-response-mock";
import { UrlPatternMock } from "./url-pattern-mock";
import { userAgentResultMock } from "./user-agent-result-mock";

const nextServerMock: typeof Actual = {
  NextFetchEvent: NextFetchEventMock,
  NextRequest: NextRequestMock,
  NextResponse: NextResponseMock,
  URLPattern: UrlPatternMock,
  userAgent: () => userAgentResultMock,
  userAgentFromString: () => userAgentResultMock,
};

jest.mock("next/server", () => nextServerMock);
