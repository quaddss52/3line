import { jsx, jsxs } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';

function Welcome() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3", children: [
    /* @__PURE__ */ jsx("p", { className: "font-semibold text-xl", children: "Have a fun review!" }),
    /* @__PURE__ */ jsx(Link, { to: "/settings", children: /* @__PURE__ */ jsx("button", { className: "flex items-center cursor-pointer hover:shadow-md hover:bg-purple-600 hover:text-white ease-in-out duration-500 gap-2 w-fit bg-white border rounded-lg text-sm font-medium text-nowrap text-primaary-50 px-5 py-2", children: "View" }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsx(Welcome, {});

export { SplitComponent as component };
//# sourceMappingURL=index-BqczBchK.mjs.map
