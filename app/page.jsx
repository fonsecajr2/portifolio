import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Develepor Engineer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Fonseca Junior</span>
            </h1>
            <p>I Excel in coding, problem solving and adapting</p>
            {/* btns */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                className="uppercase flex items-center gap-2"
                variant={"outline"}
                size={"lg"}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}