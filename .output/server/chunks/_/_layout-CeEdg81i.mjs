import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { LogOut, XIcon, House, ChartNoAxesColumn, Layers, Flag, UsersRound, LifeBuoy, Settings, Search } from 'lucide-react';
import { Outlet, useLocation, Link } from '@tanstack/react-router';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { c as cn } from './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';

function Logo() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "39",
      height: "38",
      viewBox: "0 0 39 38",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxs("g", { filter: "url(#filter0_dd_21_27254)", children: [
          /* @__PURE__ */ jsxs("g", { "clip-path": "url(#clip0_21_27254)", children: [
            /* @__PURE__ */ jsx("rect", { x: "3", y: "2", width: "32.2254", height: "32", rx: "8", fill: "white" }),
            /* @__PURE__ */ jsx(
              "rect",
              {
                x: "3",
                y: "2",
                width: "32.2254",
                height: "32",
                rx: "8",
                fill: "url(#paint0_linear_21_27254)"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.1127 4.03885C11.3478 4.03885 5.05319 10.2895 5.05319 18C5.05319 25.7106 11.3478 31.9612 19.1127 31.9612C26.8775 31.9612 33.1722 25.7106 33.1722 18C33.1722 10.2895 26.8775 4.03885 19.1127 4.03885ZM4.97498 18C4.97498 10.2466 11.3046 3.96118 19.1127 3.96118C26.9207 3.96118 33.2504 10.2466 33.2504 18C33.2504 25.7535 26.9207 32.0389 19.1127 32.0389C11.3046 32.0389 4.97498 25.7535 4.97498 18Z",
                fill: "#D0D5DD"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.1127 14.0779C16.9312 14.0779 15.1628 15.834 15.1628 18.0002C15.1628 20.1665 16.9312 21.9226 19.1127 21.9226C21.2942 21.9226 23.0627 20.1665 23.0627 18.0002C23.0627 15.834 21.2942 14.0779 19.1127 14.0779ZM15.0845 18.0002C15.0845 15.7911 16.888 14.0002 19.1127 14.0002C21.3374 14.0002 23.1409 15.7911 23.1409 18.0002C23.1409 20.2094 21.3374 22.0002 19.1127 22.0002C16.888 22.0002 15.0845 20.2094 15.0845 18.0002Z",
                fill: "#D0D5DD"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.1127 15.3201C17.6223 15.3201 16.4142 16.5198 16.4142 17.9997C16.4142 19.4796 17.6223 20.6793 19.1127 20.6793C20.603 20.6793 21.8111 19.4796 21.8111 17.9997C21.8111 16.5198 20.603 15.3201 19.1127 15.3201ZM16.336 17.9997C16.336 16.4769 17.5791 15.2424 19.1127 15.2424C20.6462 15.2424 21.8894 16.4769 21.8894 17.9997C21.8894 19.5225 20.6462 20.757 19.1127 20.757C17.5791 20.757 16.336 19.5225 16.336 17.9997Z",
                fill: "#D0D5DD"
              }
            ),
            /* @__PURE__ */ jsx("path", { d: "M19.0735 2H19.1518V34H19.0735V2Z", fill: "#D0D5DD" }),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M35.2253 17.9609L35.2253 18.0386L2.99999 18.0386L2.99999 17.9609L35.2253 17.9609Z",
                fill: "#D0D5DD"
              }
            ),
            /* @__PURE__ */ jsx("path", { d: "M29.7893 2H29.8675V34H29.7893V2Z", fill: "#D0D5DD" }),
            /* @__PURE__ */ jsx("path", { d: "M13.7157 2H13.7939V34H13.7157V2Z", fill: "#D0D5DD" }),
            /* @__PURE__ */ jsx("path", { d: "M24.4314 2H24.5096V34H24.4314V2Z", fill: "#D0D5DD" }),
            /* @__PURE__ */ jsx("path", { d: "M8.35785 2H8.43607V34H8.35785V2Z", fill: "#D0D5DD" }),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M35.2253 28.6016L35.2253 28.6792L2.99999 28.6792L2.99999 28.6016L35.2253 28.6016Z",
                fill: "#D0D5DD"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M35.2253 12.6406L35.2253 12.7183L2.99999 12.7183L2.99999 12.6406L35.2253 12.6406Z",
                fill: "#D0D5DD"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M35.2253 23.2812L35.2253 23.3589L2.99999 23.3589L2.99999 23.2812L35.2253 23.2812Z",
                fill: "#D0D5DD"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M35.2253 7.32031L35.2253 7.39798L2.99999 7.39798L2.99999 7.32031L35.2253 7.32031Z",
                fill: "#D0D5DD"
              }
            ),
            /* @__PURE__ */ jsx("g", { filter: "url(#filter1_dd_21_27254)", children: /* @__PURE__ */ jsx(
              "ellipse",
              {
                cx: "19.1127",
                cy: "18",
                rx: "8.05634",
                ry: "8",
                fill: "url(#paint1_linear_21_27254)"
              }
            ) }),
            /* @__PURE__ */ jsx("foreignObject", { x: "-2", y: "13", width: "42.2253", height: "26", children: /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  backdropFilter: "blur(2.5px)",
                  clipPath: "url(#bgblur_1_21_27254_clip_path)",
                  height: "100%",
                  width: "100%"
                }
              }
            ) }),
            /* @__PURE__ */ jsx("g", { "dataFigmaBg-blurRadius": "5", children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M3 18H35.2254V21.2C35.2254 25.6804 35.2254 27.9206 34.3534 29.6319C33.5864 31.1372 32.3626 32.3611 30.8573 33.1281C29.146 34 26.9058 34 22.4254 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V18Z",
                fill: "white",
                fillOpacity: "0.2"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "3.1",
              y: "2.1",
              width: "32.0254",
              height: "31.8",
              rx: "7.9",
              stroke: "#D0D5DD",
              strokeWidth: "0.2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "filter",
            {
              id: "filter0_dd_21_27254",
              x: "0",
              y: "0",
              width: "38.2253",
              height: "38",
              filterUnits: "userSpaceOnUse",
              colorInterpolationFilters: "sRGB",
              children: [
                /* @__PURE__ */ jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }
                ),
                /* @__PURE__ */ jsx("feOffset", { dy: "1" }),
                /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "1" }),
                /* @__PURE__ */ jsx(
                  "feColorMatrix",
                  {
                    type: "matrix",
                    values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "feBlend",
                  {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_21_27254"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }
                ),
                /* @__PURE__ */ jsx("feOffset", { dy: "1" }),
                /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "1.5" }),
                /* @__PURE__ */ jsx(
                  "feColorMatrix",
                  {
                    type: "matrix",
                    values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "feBlend",
                  {
                    mode: "normal",
                    in2: "effect1_dropShadow_21_27254",
                    result: "effect2_dropShadow_21_27254"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "feBlend",
                  {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_21_27254",
                    result: "shape"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "filter",
            {
              id: "filter1_dd_21_27254",
              x: "8.05634",
              y: "8",
              width: "22.1127",
              height: "22",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [
                /* @__PURE__ */ jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }
                ),
                /* @__PURE__ */ jsx("feOffset", { dy: "1" }),
                /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "1" }),
                /* @__PURE__ */ jsx(
                  "feColorMatrix",
                  {
                    type: "matrix",
                    values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "feBlend",
                  {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_21_27254"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }
                ),
                /* @__PURE__ */ jsx("feOffset", { dy: "1" }),
                /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "1.5" }),
                /* @__PURE__ */ jsx(
                  "feColorMatrix",
                  {
                    type: "matrix",
                    values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "feBlend",
                  {
                    mode: "normal",
                    in2: "effect1_dropShadow_21_27254",
                    result: "effect2_dropShadow_21_27254"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "feBlend",
                  {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_21_27254",
                    result: "shape"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx("clipPath", { id: "bgblur_1_21_27254_clip_path", transform: "translate(2 -13)", children: /* @__PURE__ */ jsx("path", { d: "M3 18H35.2254V21.2C35.2254 25.6804 35.2254 27.9206 34.3534 29.6319C33.5864 31.1372 32.3626 32.3611 30.8573 33.1281C29.146 34 26.9058 34 22.4254 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V18Z" }) }),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint0_linear_21_27254",
              x1: "19.1127",
              y1: "2",
              x2: "19.1127",
              y2: "34",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "white" }),
                /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#D0D5DD" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint1_linear_21_27254",
              x1: "15.0845",
              y1: "26",
              x2: "23.0508",
              y2: "9.95528",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#53389E" }),
                /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#6941C6" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("clipPath", { id: "clip0_21_27254", children: /* @__PURE__ */ jsx("rect", { x: "3", y: "2", width: "32.2254", height: "32", rx: "8", fill: "white" }) })
        ] })
      ]
    }
  );
}
function MenuIcon({ onClick }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      onClick,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3 12.5H17M3 6.5H21M3 18.5H21",
          stroke: "#667085",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function CheckSquare() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16",
          stroke: "#667085",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
const routes = [
  {
    href: "#",
    pathname: "Home",
    icon: /* @__PURE__ */ jsx(House, {}),
    notifs: 0
  },
  {
    href: "#",
    pathname: "Dashboard",
    icon: /* @__PURE__ */ jsx(ChartNoAxesColumn, {}),
    notifs: 10
  },
  {
    href: "#",
    pathname: "Projects",
    icon: /* @__PURE__ */ jsx(Layers, {}),
    notifs: 0
  },
  {
    href: "#",
    pathname: "Tasks",
    icon: /* @__PURE__ */ jsx(CheckSquare, {}),
    notifs: 0
  },
  {
    href: "#",
    pathname: "Reporting",
    icon: /* @__PURE__ */ jsx(Flag, {}),
    notifs: 0
  },
  {
    href: "#",
    pathname: "Users",
    icon: /* @__PURE__ */ jsx(UsersRound, {}),
    notifs: 0
  },
  {
    href: "#",
    pathname: "Support",
    icon: /* @__PURE__ */ jsx(LifeBuoy, {}),
    notifs: 0
  },
  {
    href: "/settings",
    pathname: "Settings",
    icon: /* @__PURE__ */ jsx(Settings, {}),
    notifs: 0
  }
];
function SearchComponent() {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `absolute inset-0 bg-purple-200 rounded-2xl transition-all duration-300 ${isFocused ? "scale-105 opacity-40 blur-sm" : "scale-100 opacity-0"}`
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `relative bg-white rounded-lg border-2 transition-all duration-300 ${isFocused ? "border-purple-300 shadow-md" : "border-purple-200 shadow-sm"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center px-2 py-[8px]", children: [
          /* @__PURE__ */ jsx(
            Search,
            {
              size: 12,
              className: ` mr-2 transition-colors duration-300 ${isFocused ? "text-primary-700" : "text-grey-700"}`
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Olivia Rhye",
              value: searchValue,
              onChange: (e) => setSearchValue(e.target.value),
              onFocus: () => setIsFocused(true),
              onBlur: () => setIsFocused(false),
              className: "flex-1 text-gray-700 placeholder-gray-400 bg-transparent outline-none text-xs"
            }
          )
        ] })
      }
    )
  ] });
}
function NewsBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsDismissed(true);
    }, 300);
    setTimeout(() => {
      setIsDismissed(false);
      setIsVisible(true);
    }, 2e4);
  };
  if (isDismissed) return null;
  return /* @__PURE__ */ jsx("div", { className: "p-3 bg-gray-50  transition-all duration-500 ease-in-out flex items-center justify-center", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `
          max-w-sm w-full    
          transition-all duration-500 ease-in-out transform
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"}
        `,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-gray-900", children: "New features available!" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-xs ", children: "Check out the new dashboard view. Pages now load faster." }),
        /* @__PURE__ */ jsx("div", { className: "rounded-xl overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/trending.jpg",
            alt: "trending",
            className: "w-full h-[100px] xl:h-[120px] object-cover"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleDismiss,
              className: "text-gray-500 cursor-pointer text-xs hover:text-gray-700 font-medium transition-colors",
              children: "Dismiss"
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "text-purple-600 text-xs hover:text-purple-700 font-medium transition-colors", children: "What's new?" })
        ] })
      ] })
    }
  ) });
}
function SidebarContent() {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  return /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex justify-between flex-col justify-between gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsx(SearchComponent, {}),
      routes.map((item, index) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: item.href,
          className: `group px-3 py-2 rounded-lg cursor-pointer w-full font-medium hover:bg-gray-50 transition-all duration-500 ease-in-out flex items-center justify-between text-gray-600 ${currentPath === item.href ? "bg-gray-50" : ""}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "transition-colors", children: item.icon }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: `group-hover:text-black text-xs transition-colors ${currentPath === item.href ? "text-black" : ""}`,
                  children: item.pathname
                }
              )
            ] }),
            item.notifs > 0 && /* @__PURE__ */ jsx("div", { className: "px-2 py-1 text-sm bg-grey-100 text-grey-600 group-hover:bg-black bg-gray-100 transition-all duration-500 ease-in-out rounded-full group-hover:text-white transition-all", children: /* @__PURE__ */ jsx("p", { children: item.notifs }) })
          ]
        },
        index
      ))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(NewsBanner, {}),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center  py-2 border-t justify-between w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "/images/profile.jpg", alt: "profile img", loading: "lazy" }) }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-800 text-sm", children: "Olivia Rhye" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-xs", children: "olivia@untitledui.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(LogOut, { className: "text-gray-500", size: 18 })
      ] })
    ] })
  ] });
}
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SideDrawer({
  isOpen,
  onClose
}) {
  return /* @__PURE__ */ jsx(Sheet, { open: isOpen, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsx(SheetContent, { className: "p-5", children: /* @__PURE__ */ jsx(SidebarContent, {}) }) });
}
function Sidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "h-fit lg:h-full sticky top-0 z-40 shadow-md flex overflow-y-scroll  lg:flex-col justify-between bg-white gap-5 p-5 lg:p-3 xl:p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex w-full justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Logo, {}),
        /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Untitled UI" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:hidden", children: [
        /* @__PURE__ */ jsx(MenuIcon, { onClick: () => setIsDrawerOpen(true) }),
        isDrawerOpen && /* @__PURE__ */ jsx(SideDrawer, { isOpen: isDrawerOpen, onClose: handleCloseDrawer })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:block w-full h-full", children: /* @__PURE__ */ jsx(SidebarContent, {}) })
  ] });
}
const SplitComponent = function RouteComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "h-screen lg:grid bg-gray-100 lg:grid-cols-[20%_1fr]", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsx("main", { className: " p-4  w-full h-full overflow-y-scroll", children: /* @__PURE__ */ jsx(Outlet, {}) })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=_layout-CeEdg81i.mjs.map
