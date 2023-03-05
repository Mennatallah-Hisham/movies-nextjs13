import Image from "next/image";
import Time from "@/app/icons/Time";
import Eye from "@/app/icons/Eye";
export default function movie (){

    return (
        <section className="container">
            <Image   src="/images/card.jfif"   alt="title" height={400} width={320}/>
            <div>
            <h1 className="heading--primary">movie</h1>
            <p className="movie__genre txt">horror / comedy / action</p>
            <div className="flex">
                <Time/>
                <p> 100 mins</p>

            </div>
            <div>
                <Eye/>
                <p>45552</p>
            </div>


            <p className="txt">overview
            If the segment is static (default), the output of the request will be cached and revalidated (if configured) alongside the rest of the segment. If the segment is dynamic, the output of the request will not be cached and will be re-fetched on every request when the segment is rendered.
            </p>


            </div>


        </section>
    )

}