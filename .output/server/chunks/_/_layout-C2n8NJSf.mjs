import { jsx } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';

function BaseLayout() {
  return /* @__PURE__ */ jsx("div", { className: "h-screen w-full flex justify-center items-center", children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const SplitComponent = BaseLayout;

export { SplitComponent as component };
//# sourceMappingURL=_layout-C2n8NJSf.mjs.map
