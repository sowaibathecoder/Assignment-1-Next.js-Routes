import Image from "next/image";
export default function Jobs() {
  return (
    <div className="items-center justify-center text-center">
      <h1 className="
        m-20
        text-orange-600
        text-5xl
        font-bold
        italic
        font-serif
        leading-relaxed
        mb-0
      ">
        <u>Looking for a Job? Come Help Us Create the Weirdest AI Art Ever!</u>
      </h1>
      
      <p className="
        text-3xl
        text-orange-600
        text-center
        font-bold
        m-16
      ">Join our team and unleash your creativity to show the world that AI can create funny
         and weird things too! 🤖
      </p>

      <button className="
        bg-pink-600
        text-orange-300 
        w-[200px]
        h-[50px] 
        rounded-2xl 
        text-2xl 
        font-bold
        hover:bg-pink-700
        hover:text-orange-400
        hover:scale-110
        transition-all 
        duration-300
        active:shadow-lg
        active:shadow-orange-400
        "> 
        <a href="/jobs/jobdetails">Join us</a>
      </button>

      <div className="mt-2">
        <Image 
          src="/green.jpg"
          alt="EGG-WITH-GUITAR"
          width={500} 
          height={500}
          className="mx-auto rounded-full mt-20"  
        />
      </div> 
      <br /><br />

    </div>  
  );
}
    
