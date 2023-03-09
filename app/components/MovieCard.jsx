import Link from "next/link";
export default function MovieCard (props){
    const imagePath = "https://image.tmdb.org/t/p/original/";

    let link;
    if(props.type==="movie"){
        link="/movies/";
    }
    else{
        link="/tv/"
    }

    return(
       

        <Link href={`${link}${props.id}`}>

     
        <article className="card movie">
            <img
            src={`${imagePath}${props.img}`}
            width={320} 
            height={420} 
            className="movie__img"
            alt={props.title}/>

            <div className="movie__cont">
            <p className="movie__title txt--lg margin-b-xs"> {props.title}</p>


            </div>
           

<p className="movie__status txt--lg"> {props.vote}</p>

        </article>
        </Link>
    )
}