import Time from "@/app/icons/Time";
import Eye from "@/app/icons/Eye";

export default function MovieDetails (props){
    return(
  <article className="moviepg__details">


            <h1 className="heading--primary">{props.name}</h1>
            <p className="movie__genre txt txt-center margin-b-sm">{props.status}</p>
        
            <div className="flex margin-b-sm">
            <div className="moviepg__stat">
                <Time/>
                <p className="txt--sm">{props.runtime} mins</p>

            </div>
            <div className="moviepg__stat">
                <Eye/>
                <p className="txt--sm ">{props.popularity}views</p>
            </div>

            </div>
        
           


            <p className="txt">
                {props.overview}
            </p>


         
  </article>
    )


}