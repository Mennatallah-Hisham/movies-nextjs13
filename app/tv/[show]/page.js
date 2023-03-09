import MovieDetails from "@/app/components/MovieDetails";
import Titles from "@/app/components/Titles";
import Cards from "@/app/components/Cards";
export default  async function show ({params}){
   
    const {show} =params;
    const response= await fetch (`https://api.themoviedb.org/3/tv/${show}?api_key=${process.env.API_KEY}`);
    const details = await response.json();

    const similar =  await fetch (`https://api.themoviedb.org/3/tv/${show}/similar?api_key=${process.env.API_KEY}`);

    const shows = await similar.json();

    const imagePath = "https://image.tmdb.org/t/p/original/";

    return (
        <>
       
        <section className="container moviepg margin-b-l">
            <img  src={`${imagePath}${details.poster_path} `} alt="title" height={400} width={320}/>

            <MovieDetails
            name={details.name}
            overview ={details.overview}
            popularity={details.popularity}
            status={details.status}
            runtime={details.runtime}
        


       
            />
        


        </section>
        
        { shows.results.length===0? <p className="txt txt-center">no smiliar tv shows found</p>
         :
        <section className="container">

            <Titles title="similar tv shows"/>
            <Cards cards={shows.results} type="tvShow" />
        </section>
}
        </>
    )

}