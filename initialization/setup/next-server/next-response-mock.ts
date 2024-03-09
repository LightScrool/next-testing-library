import { NextResponse as Actual } from "next/server";

class NextResponse {
  get cookies() {
    return {};
  }

  static json = () => {
    return new NextResponse();
  };

  static redirect = () => {
    return new NextResponse();
  };

  static rewrite = () => {
    return new NextResponse();
  };

  static next = () => {
    return new NextResponse();
  };
}

export const NextResponseMock = NextResponse as unknown as typeof Actual;
