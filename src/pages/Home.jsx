import React from "react";
import { Tabs, Tab } from "@heroui/react";
import ModuleSection from "../Components/EditorComponent/ModuleSection";
import DesignSection from "../Components/EditorComponent/DesignSection";

const Home = () => {
  return (
    <div className="pt-6 bg-gray-50 min-h-full">
      <div className="container mx-auto px-4">
        <Tabs
          aria-label="Options"
          defaultSelectedKey="Modules"
          // className="mb-6"
          classNames={{
            tabList: "gap-2",
            tab: "px-4 py-2 rounded-full transition-colors data-[selected=true]:bg-white data-[selected=true]:text-black data-[selected=true]:shadow data-[selected=true]:shadow-gray-200 data-[selected=true]:font-semibold data-[hover=true]:text-gray-600",
            tabContent:
              "text-gray-400 font-normal group-data-[selected=true]:text-black group-data-[selected=true]:font-semibold",
          }}
        >
          <Tab key="Modules" title="Modules">
            <ModuleSection />
          </Tab>
          <Tab key="Design" title="Design">
            <DesignSection />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
