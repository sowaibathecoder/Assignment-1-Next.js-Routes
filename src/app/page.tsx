import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-center text-center">
      <h1 className="
        m-20
        text-orange-600
        text-6xl
        font-bold
        italic
        font-serif
        leading-relaxed
        mb-0
      ">
        <u>Enter the World of AI-Created Wonders, Where Art Meets Innovation</u>
      </h1>
      <div className="mt-2">
        <Image 
          src="/egg-with-guitar.png"
          alt="EGG-WITH-GUITAR"
          width={600} 
          height={600}
          className="mx-auto"  
        />
      </div>
    </div>
  );
}
