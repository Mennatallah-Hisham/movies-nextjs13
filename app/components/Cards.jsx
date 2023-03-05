import MovieCard from "./MovieCard";


export default function Cards (){
    return(
        <section className="container ">
            <div className="txt-center margin-b-m">
                <h1>title</h1>
                <p> sub title</p>
            </div>
            <div className="flex">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            </div>
         
        </section>
    )
}