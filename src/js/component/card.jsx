import React from 'react';
import rigoImage from "/workspaces/Mateo_Goni_Landing_page_React/src/img/rigo-baby.jpg"
const Card = () => {
    return (
      <div className="card mt-4 col-md-6 col-lg-3">
  <img src={rigoImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Find out more!</a>
  </div>
</div>
    )
  }
export default Card;