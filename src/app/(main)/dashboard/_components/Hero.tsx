import { HeroSvgComponent } from "@/components/hero-image";

export const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center h-dvh flex-col gap-8">
        <HeroSvgComponent />
        <p className="text-3xl">
          It’s the beginning of a legendary sales pipeline
        </p>
        <div className="flex text-2xl justify-center items-center flex-col text-gray-500">
          <p>When you have inbound E-mails </p>
          <p> you’ll see them here</p>
        </div>
      </div>
    </>
  );
};
