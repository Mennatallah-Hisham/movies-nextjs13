import MovieCard from "./MovieCard";


export default function Cards ({cards,type}){
  
    return(
        <section className="container ">
        

            <div className="flex">
                {
                   cards.map((card)=>(
                        <MovieCard 
                        type={type}
                        key={card.id}
                        id={card.id}
                         title={card.title?
                        card.title : card.name}
                         vote={card.vote_average}
                        img={card.poster_path}
                            />
                    ))
                }
                

           
            </div>
         
        </section>
    )
}