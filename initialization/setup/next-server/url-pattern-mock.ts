import { URLPattern as Actual } from "next/server";

class URLPattern {
  readonly protocol = "";
  readonly username = "";
  readonly password = "";
  readonly hostname = "";
  readonly port = "";
  readonly pathname = "";
  readonly search = "";
  readonly hash = "";

  test() {
    return true;
  }

  exec() {
    return null;
  }
}

export const UrlPatternMock = URLPattern as unknown as typeof Actual;
