import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";
import "./detail.scss"
import { AiOutlineRollback } from 'react-icons/ai';




function Details() {
    const { beers } = useGlobalContext()
    const id = useParams().id;
    const selectedBeer = beers.find(beer => beer.id == id)
    // console.log(selectedBeer)

    return (
        <div className="detail">
            <nav className="detail-nav">
                <Link to={"/"}>
                    <AiOutlineRollback size="35" />
                </Link>
            </nav>
            <div className="detail-card">
                <p> <span>Brewers_tips: </span>{selectedBeer.brewers_tips}</p>
                <p><span>Contributed_by: </span>{selectedBeer.contributed_by}</p>
                <p><span>Description: </span>{selectedBeer.description}</p>

                <p> <span>First_brewed: </span>{selectedBeer.first_brewed}</p>
                <p>  <span>Volume: </span>{selectedBeer.boil_volume.value} {selectedBeer.boil_volume.unit}</p>
                <h4>Ingrediants: </h4>
                <h5>Malt</h5>
                {(selectedBeer.ingredients.malt).map(m => (
                    <ul>
                        <li>{m.name}</li>
                    </ul>
                ))}
                <h5>Hops</h5>
                {(selectedBeer.ingredients.hops).map(h => (
                    <ul>
                        <li>{h.name}</li>
                    </ul>
                ))}
                <h5>Yeast</h5>
                <ul>
                    <li>{selectedBeer.ingredients.yeast}</li>
                </ul>

            </div>


        </div>
    )
}

export default Details