import Link from "next/link";

export default function Banner (){
    return(
        <section className="container banner">
         <h2 className="upper banner__title"> no hidden fees 
         <br></br>
          get unlimited access to all movies and tv shows
         </h2>
         <button className="btn--primary">
          <Link href="/subscribe">subscribe now</Link>
          
         </button>
        </section>
    )
}