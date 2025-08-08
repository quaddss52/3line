import Navbar from "@/components/layout/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { existingTabs } from "@/constants/settings";
import RoleSettingsTab from "./components/roleSettings";
export default function RoleSettings() {
  return (
    <div className="flex flex-col gap-5 ">
      <Navbar
        pageTitle="Settings"
        subHeading="Manage your team and preferences here."
      />
      <Tabs defaultValue="roles">
        <div className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="inline-flex items-center bg-white rounded-lg overflow-hidden  p-0 border border-gray-200 min-w-fit">
              {existingTabs.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item.id}
                  className={` px-4 py-2 cursor-pointer text-sm w-full font-medium border rounded-none border-gray-200 bg-white transition-all duration-200 whitespace-nowrap data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50`}
                >
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        <div className="mt-4">
          <TabsContent value="details" className="">
            <h2 className="text-xl font-semibold mb-4">My Details</h2>
          </TabsContent>
          <TabsContent value="profile" className="">
            <h2 className="text-xl font-semibold mb-4">My Profile</h2>
          </TabsContent>
          <TabsContent value="password" className="">
            <h2 className="text-xl font-semibold mb-4">Password</h2>
          </TabsContent>
          <TabsContent value="team" className="">
            <h2 className="text-xl font-semibold mb-4">Team</h2>
          </TabsContent>
          <TabsContent value="plan" className="">
            <h2 className="text-xl font-semibold mb-4">Plan</h2>
          </TabsContent>
          <TabsContent value="roles" className="">
            <RoleSettingsTab />
          </TabsContent>
          <TabsContent value="notifications" className="">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          </TabsContent>
          <TabsContent value="integrations" className="">
            <h2 className="text-xl font-semibold mb-4">Integrations</h2>
          </TabsContent>
          <TabsContent value="api" className="">
            <h2 className="text-xl font-semibold mb-4">Api</h2>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
