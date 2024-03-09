import { NextRequest as Actual } from "next/server";

class NextRequest {
  get cookies() {
    return {};
  }

  get geo() {
    return {};
  }

  get ip() {
    return undefined;
  }

  get url() {
    return "";
  }
}

export const NextRequestMock = NextRequest as unknown as typeof Actual;
