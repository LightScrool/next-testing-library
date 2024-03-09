import { NextFetchEvent as Actual } from "next/server";

class NextFetchEvent {
  sourcePage = "";
}

export const NextFetchEventMock = NextFetchEvent as unknown as typeof Actual;
