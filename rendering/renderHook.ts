import { queries, Queries } from "@testing-library/dom";
import {
  renderHook as RTLRenderHook,
  RenderHookOptions as RTLRenderHookOptions,
  RenderHookResult,
} from "@testing-library/react";
import mockRouter from "next-router-mock";

interface RenderHookOptions<
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
> extends RTLRenderHookOptions<Props, Q, Container, BaseElement> {
  path?: string;
}

const renderHook = <
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
>(
  render: (initialProps: Props) => Result,
  { path, ...options }: RenderHookOptions<Props, Q, Container, BaseElement> = {},
): RenderHookResult<Result, Props> => {
  if (path) {
    mockRouter.push(path);
  }

  return RTLRenderHook(render, options);
};

export { renderHook };
export type { RenderHookOptions, RenderHookResult };
