import React from "react";

const NewsItem =(props)=>{
  
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div>
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://as1.ftcdn.net/v2/jpg/00/36/94/26/1000_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg"
            }
            className="card-img-top"
            alt="Card img cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}"</p>
            <p className="card-text"><small>By {!author?"unknown":author} on {new Date(date).toGMTString()}</small> </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
          
        </div>
       
      </div>

    );
  } 

export default NewsItem;
