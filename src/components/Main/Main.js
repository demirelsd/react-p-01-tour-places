import { data } from "../../helpers/data";
import "./Main.scss"

const Main = ({veri}) =>{
    
     return(
        <div className="card-container">
            {veri.map((place) => {
                const {id, title, desc, image} = place;
                return(
                    <div className="cards" key ={id}>
                        <h1 className= "title">{title}</h1>
                        <img src= {image} alt="" />
                        <p className="card-over">{desc}</p>

                    </div>
                )
            }

            )

            }

        </div>
    )
}

export default Main;