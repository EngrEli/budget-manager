import { Link } from "react-router-dom";
import "./GetStarted.css"
import getStartedImg from "../img/get-started-img.svg"

const GetStarted = () => {
  return ( 
    <>
      <div className="budget-cont get-started">
        <div className="get-started__cont">
          <img className="get-started__img" src={getStartedImg} alt="" />
          <div className="get-started__top-text">Get Started on</div>
          <h1>Budgetio</h1>
          <p>
            Set everyday budget and save money to <br/> gift yourself at the end!
          </p>
          <Link to="/add">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default GetStarted;