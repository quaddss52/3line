import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { Mail } from "lucide-react";
import { useState } from "react";
export default function EmailConnection() {
  const [emailConnection, setEmailCOnnection] = useState("1");

  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-8 w-full pb-3 border-b ">
      <div className="text-nowrap">
        <p className="font-medium text-sm text-gray-700">Connected email</p>
        <p className="text-sm text-gray-400">Select role account</p>
      </div>
      <RadioGroup
        value={emailConnection}
        onValueChange={(e) => setEmailCOnnection(e)}
        className="w-full"
      >
        <div className="flex gap-2 w-full">
          <RadioGroupItem
            value="1"
            id="r1"
            className="mt-1 data-[state=checked]:border-[#7F56D9] [&>span]:data-[state=checked]:bg-[#7F56D9]"
          />
          <div className="text-sm">
            <Label htmlFor="r1">My account email</Label>
            <p className=" text-gray-400">olivia@untitledui.com</p>
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <RadioGroupItem
            value="2"
            id="r2"
            className="mt-1 data-[state=checked]:border-[#7F56D9] [&>span]:data-[state=checked]:bg-[#7F56D9]"
          />
          <div className="text-sm w-full">
            <Label htmlFor="r2">An alternative email</Label>
            {emailConnection === "2" && (
              <div className="p-2 rounded-lg flex gap-2 items-center w-full text-gray-400  md:w-[70%] border bg-white">
                <Mail />
                <input
                  type="text"
                  className="border-none  outline-none w-full"
                  placeholder="olivia@untitledui.com"
                />
              </div>
            )}
          </div>
        </div>
      </RadioGroup>
    </div>
  );
}
