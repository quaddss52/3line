import { useState, useEffect } from "react";

export default function NewsBanner() {
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
    }, 20000);
  };

  if (isDismissed) return null;

  return (
    <div className="p-3 bg-gray-50  transition-all duration-500 ease-in-out flex items-center justify-center">
      <div
        className={`
          max-w-sm w-full    
          transition-all duration-500 ease-in-out transform
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }
        `}
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-medium text-gray-900">
            New features available!
          </h3>

          <p className="text-gray-500 text-xs ">
            Check out the new dashboard view. Pages now load faster.
          </p>

          <div className="rounded-xl overflow-hidden">
            <img
              src="/images/trending.jpg"
              alt="trending"
              className="w-full h-[100px] xl:h-[120px] object-cover"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleDismiss}
              className="text-gray-500 cursor-pointer text-xs hover:text-gray-700 font-medium transition-colors"
            >
              Dismiss
            </button>
            <button className="text-purple-600 text-xs hover:text-purple-700 font-medium transition-colors">
              What's new?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
