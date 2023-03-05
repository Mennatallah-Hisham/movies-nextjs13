import Image from "next/image"
export default function MovieCard (){

    return(
        <article className="card movie">
            <Image 
            src="/images/card.jfif"  
            width={320} 
            height={320} 
            alt="movie"/>
            <div className="movie__cont">
            <p className="movie__title txt--lg margin-b-xs"> movie title</p>
            
            <p className="movie__genre txt">horror / comedy / action</p>

            </div>
           

<p className="movie__status txt--lg"> status</p>

        </article>
    )
}