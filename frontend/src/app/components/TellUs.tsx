import Image from "next/image";
export default function TellUs() {
  return (
    <section className="variant-green">
      <div className="container max-w-[1200px] mx-auto flex content-center items-center p-4 w-full mx-auto space-x-12">
        <div className="text-left basis-1/2">
          <p className="text-7xl poppins-bold">
            Your voice matters and Onetrade rewards it.
          </p>
          <p className="text-xl text-white my-3 inter-normal">
            Share your predictions on sports, politics, and entertainment to
            turn your ideas into earnings. Be smart, stay ahead, and get
            rewarded for being right.
          </p>
        </div>
        <div className="">
          <Image
            className="max-w-full h-auto block mx-auto"
            src={"/img/tell_us.webp"}
            width={500}
            height={100}
            alt="girl"
          />
        </div>
      </div>
    </section>
  );
}
