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

export default function Home() {
  return (
    <main>
      <header className="flex flex-row justify-between p-6 bg-white">
        <Button
          variant="ghost"
          className="flex flex-row space-x-2 items-center p-0"
        >
          <Image src={DiamondSVG} alt="ML logo" /> <span>Back to Home</span>
        </Button>
        <span className="flex items-center">Buy eLoad</span>
        <div className="flex flex-row">
          <Button variant="ghost">Tracking</Button>
          <Button variant="ghost">Help</Button>
        </div>
      </header>

      <section className="flex justify-center m-10">
        <Card className="w-4/5 2xl:w-[750px] p-10">
          <CardHeader>
            <CardTitle>Recipient</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Mobile Number</Label>
                  <Input id="mobile" placeholder="ex. 0917 123 4567" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="network">Network</Label>
                  <Select>
                    <SelectTrigger id="network">
                      <SelectValue placeholder="Select" />
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
          <CardFooter className="flex justify-end space-x-2">
            <Button variant="outline">Back</Button>
            <Button>Next Step</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
