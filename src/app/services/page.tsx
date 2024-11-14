import Image from "next/image";

export default function Services() {
  return (
    <div className=" items-center justify-center">
      <h1 className="
        text-5xl
        text-orange-600
        text-center
        font-bold
        font-serif
        italic
        mt-20
      ">
        <u>Our Services</u>
      </h1>
      <p className="
        text-3xl
        text-orange-600
        text-center
        font-bold
        m-16
      ">Explore a world of creativity with AI-generated images, where technology meets 
        imagination – We provide these unique and fascinating images for you to enjoy! 🌟
      </p>

      <div className="mt-2">
        <Image 
          src="/aliens.png"
          alt="EGG-WITH-GUITAR"
          width={700} 
          height={700}
          className="mx-auto"  
        />
      </div>
    </div>
  );
}