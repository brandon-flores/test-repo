import Image from "next/image";
import { Button } from "@/components/ui/button";
import DiamondSVG from "@/assets/diamond.svg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <header className="flex flex-row justify-between p-6 bg-white">
        <Button
          variant="ghost"
          className="flex flex-row space-x-3 items-center p-0"
        >
          <Image src={DiamondSVG} alt="ML logo" />{" "}
          <span className="text-sm">Back to Home</span>
        </Button>
        <span className="flex items-center text-2xl font-bold">Buy eLoad</span>
        <div className="flex flex-row space-x-5">
          <Button variant="ghost" className="text-sm p-2">
            Tracking
          </Button>
          <Button variant="ghost" className="text-sm p-2">
            Help
          </Button>
        </div>
      </header>

      <section className="mx-4 flex justify-center m-10 md:mx-0">
        <Card className="w-full lg:w-4/5 2xl:w-[750px] p-10 rounded-none shadow-none border-none">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-md">Recipient</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col mb-4 md:w-1/2 w-full">
                  <Label htmlFor="name" className="mb-2">
                    Mobile Number
                  </Label>
                  <Input id="mobile" placeholder="ex. 0917 123 4567" />
                </div>
                <div className="flex flex-col md:w-1/2 w-full mt-0">
                  <Label htmlFor="network" className="mb-2">
                    Network
                  </Label>
                  <Select>
                    <SelectTrigger id="network">
                      <SelectValue placeholder="Select Network" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="globe">Globe</SelectItem>
                      <SelectItem value="smart">Smart</SelectItem>
                      <SelectItem value="dito">Dito</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <Separator className="m-0 my-10" />
          <CardFooter className="flex justify-end space-x-2 p-0">
            <Button variant="ghost">Back</Button>
            <Button>Next Step</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
