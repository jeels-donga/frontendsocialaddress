import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const MobileViewScreen = () => {
  const location = useLocation();
  const url = `${window.location.origin}${location.pathname}`;
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  const handleOpenInNewTab = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="border-l border-l-gray-300 w-[300px] p-5">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span
            className="text-gray-500 truncate px-3 py-2 bg-[#F4F4F5] rounded-2xl flex-1 min-w-0"
            title={url}
          >
            {url}
          </span>
          <div className="flex rounded-2xl overflow-hidden shrink-0">
            <button
              onClick={handleOpenInNewTab}
              className="border bg-gray-200 p-1.5 border-r border-gray-300 transition-colors rounded-l-2xl"
              title="Open in new tab"
              aria-label="Open in new tab"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
            <button
              onClick={handleCopyUrl}
              className="border bg-gray-200 p-1.5 border-gray-300 transition-colors rounded-r-2xl"
              title={copied ? "Copied!" : "Copy URL"}
              aria-label="Copy URL"
            >
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6.5V4.16683C6 3.23341 6 2.76635 6.18166 2.40983C6.34144 2.09623 6.59623 1.84144 6.90983 1.68166C7.26635 1.5 7.73341 1.5 8.66683 1.5H13.3335C14.2669 1.5 14.7334 1.5 15.0899 1.68166C15.4035 1.84144 15.6587 2.09623 15.8185 2.40983C16.0002 2.76635 16.0002 3.23306 16.0002 4.16648V8.83317C16.0002 9.76659 16.0002 10.2333 15.8185 10.5898C15.6587 10.9034 15.4033 11.1587 15.0897 11.3185C14.7335 11.5 14.2675 11.5 13.3359 11.5H11M6 6.5H3.66683C2.73341 6.5 2.26635 6.5 1.90983 6.68166C1.59623 6.84144 1.34144 7.09623 1.18166 7.40983C1 7.76635 1 8.23341 1 9.16683V13.8335C1 14.7669 1 15.2334 1.18166 15.5899C1.34144 15.9035 1.59623 16.1587 1.90983 16.3185C2.266 16.5 2.73249 16.5 3.66409 16.5H8.33629C9.26789 16.5 9.73373 16.5 10.0899 16.3185C10.4035 16.1587 10.6587 15.9033 10.8185 15.5897C11 15.2335 11 14.7675 11 13.8359V11.5M6 6.5H8.3335C9.26692 6.5 9.73338 6.5 10.0899 6.68166C10.4035 6.84144 10.6587 7.09623 10.8185 7.40983C11 7.766 11 8.2325 11 9.16412L11 11.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {copied && (
          <div className="text-sm text-green-600 text-center">
            URL copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileViewScreen;
