import React, { useState } from "react";

const ModuleSection = () => {
  const [showSubscribe, setShowSubscribe] = useState(true);
  const [showShare, setShowShare] = useState(true);
  return (
    <>
      {" "}
      {/* Page Settings Heading */}
      <h2 className="text-m font-bold text-black mb-6">Page Settings</h2>
      {/* Toggle Switches */}
      <div className="flex gap-5">
        {[
          {
            key: "showSubscribe",
            label: "Show subscribe button",
            value: showSubscribe,
            setValue: setShowSubscribe,
          },
          {
            key: "showShare",
            label: "Show share button",
            value: showShare,
            setValue: setShowShare,
          },
          {
            key: "pixDefault",
            label: "Pix default",
            value: false, // Assuming for demo; in real case add [pixDefault, setPixDefault]
            setValue: () => {}, // No-op for now
          },
        ].map((setting) => (
          <div key={setting.key} className="flex items-center gap-2">
            <button
              onClick={() => setting.setValue(!setting.value)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#605BFF] focus:ring-offset-2 ${
                setting.value ? "bg-[#605BFF]" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  setting.value ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <label className="text-base text-gray-900 font-normal">
              {setting.label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default ModuleSection;
