import axios from "axios";
import {getAllBeer, detailBeer} from "./cervezasSilce"

export const beer = () => (dispatch) => {
    axios("http://localhost:3001/cervezas")
        .then((res) => dispatch(getAllBeer(res.data)))
        .catch((e) => console.log(e));
};

export const details = (id) => (dispatch) => {
    axios(`http://localhost:3001/cervezas/${id}`)
    .then(res => dispatch(detailBeer(res.data)))
    
    .catch(e=> console.log("Rompo en actions",e))
}
