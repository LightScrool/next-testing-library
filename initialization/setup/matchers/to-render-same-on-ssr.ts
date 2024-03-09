import { render, serverRender } from "../../../rendering";

expect.extend({
  toRenderSameOnSsr(received) {
    let clientResult: ReturnType<typeof render> | null;
    let serverResult: ReturnType<typeof serverRender> | null;

    try {
      clientResult = render(received);
      serverResult = serverRender(received);
    } catch {
      clientResult = null;
      serverResult = null;
    }

    if (!clientResult || !serverResult) {
      return {
        pass: false,
        message: () =>
          `Expected to not throw an error during rendering both on server and client`,
      };
    }

    const clientHTML = clientResult.container.innerHTML;
    const serverHTML = serverResult.container.innerHTML;

    const pass = clientHTML === serverHTML;

    return {
      pass,
      message: () =>
        `Expected ${pass ? "not " : ""}to render same on server and client`,
    };
  },
});

interface CustomMatchers<R = unknown> {
  toRenderSameOnSsr(): R;
}

declare global {
  namespace jest {
    interface Expect extends CustomMatchers {}

    interface Matchers<R> extends CustomMatchers<R> {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export {};
