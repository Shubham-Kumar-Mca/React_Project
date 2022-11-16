import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleRestaurantPage() {
  const [data, setData] = useState([]);
  const {id} = useParams()
  console.log(id);
  const handelApi = (id)=>{
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`).then(res=>{
      setData(res.data.data);
    }).catch(err=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    handelApi(id)
  },[id])

  return (
    <div data-testid="restaurant-container" className="singResPage">
      <div>
        <h3 data-testid="restaurant-name">{data.name && data.name}</h3>
      </div>
      <div className="container">
      <div data-testid="restaurant-type">Type: {data.type && data.type}</div>
      <div data-testid="restaurant-rating">Rating: {data.rating && data.rating}</div>
      <div data-testid="restaurant-votes">Votes: {data.number_of_votes&&data.number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price: {data.price_starts_from&&data.price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} src = {data.image&&data.image}/>
      </div>
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
