import Image from "next/image";

export default async function About() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return (
    <div className="items-center justify-center text-center">
      <h1 className="
        mt-20
        text-orange-600
        text-5xl
        font-bold
        italic
        font-serif
        m-20
        leading-relaxed
      ">
        <u>Discover the Fascinating World of AI Artistry – A Collection of Unique and Surreal Images</u>
      </h1>

      <div>
        <Image src="/heart.jpg"
          alt="PINK-HEART"
          width={1200} 
          height={200}
          className="mx-auto rounded-3xl border-4 border-pink-800"
          />
      </div>
    
          <br /><br />
          
          <a href="/about/moreimages" className="
            text-3xl
            text-orange-600
            text-center
            font-bold
            m-16
            ">
            Click here to see more images 📸
          </a> 

          <br /><br /><br /><br />
    </div>  
  );
}
