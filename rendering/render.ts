import {
  render as RTLRender,
  RenderOptions as RTLRenderOptions,
  RenderResult,
} from "@testing-library/react";
import { ReactNode } from "react";
import mockRouter from "next-router-mock";

interface RenderOptions extends RTLRenderOptions {
  path?: string;
}

type Render = (ui: ReactNode, options?: RenderOptions) => RenderResult;

const render: Render = (ui, { path, ...options } = {}) => {
  if (path) {
    mockRouter.push(path);
  }

  return RTLRender(ui, options);
};

export { render };
export type { RenderOptions, RenderResult };
