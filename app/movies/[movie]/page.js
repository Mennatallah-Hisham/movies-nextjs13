
import MovieDetails from "@/app/components/MovieDetails";
import Titles from "@/app/components/Titles";
import Cards from "@/app/components/Cards";
export default  async function movie ({params}){
   
    const {movie} =params;
    const response= await fetch (`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);
    const details = await response.json();
    const similar =  await fetch (`https://api.themoviedb.org/3/movie/${movie}/similar?api_key=${process.env.API_KEY}`);

    const movies = await similar.json();



    const imagePath = "https://image.tmdb.org/t/p/original/";

    return (
        <>
       
        <section className="container moviepg margin-b-l">
            <img  src={`${imagePath}${details.poster_path} `} alt="title" height={400} width={320}/>

            <MovieDetails
            name={details.title}
            overview ={details.overview}
            popularity={details.popularity}
            status={details.status}
            runtime={details.runtime}
        


       
            />
        


        </section>
         <section className="container">

         <Titles title="similar movies"/>
         { movies.results.length===0? <p className="txt txt-center">no smiliar movies found</p>
         :
         <Cards cards={movies.results} type="movie" />
         
        }
         
     </section>
     </>
    )

}