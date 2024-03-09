import { render as clientRender } from "../render";
import { renderHook as clientRenderHook } from "../renderHook";

import { getSsrImplementation } from "./get-ssr-implementation";

export const serverRender = getSsrImplementation(clientRender);
export const serverRenderHook = getSsrImplementation(clientRenderHook);
