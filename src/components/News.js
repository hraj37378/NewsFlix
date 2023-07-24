import React, { useEffect,useState} from "react";
import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props)=>{
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  
   

const capitalize =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
useEffect(() => {
 updateNews();
  document.title=`${capitalize(props.category)}-NewsFlix`;
  }
  // eslint-disable-next-line
 ,[])

 
  const updateNews = async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=4cbc8c21db7f48a4875124fcc85f29ff&page=${
      page
    }&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    setloading(parsedData.loading);
  }
 const handleNextClick = async() => {
  let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=4cbc8c21db7f48a4875124fcc85f29ff&page=${
      page+1
    }&pageSize=${props.pageSize}`;
    setpage(page + 1);
      updateNews();
  };
 const handlePreviousClick =async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=4cbc8c21db7f48a4875124fcc85f29ff&page=${
      page-1
    }&pageSize=${props.pageSize}`;
    setpage(page - 1);
      updateNews();
  };

  
  
    return (
      <>
        <div className="container">
          <h1 className="text-center" style={{ margin: "90px 0px" }}>
            <b>NewsFlix : Top {capitalize(props.category)} Headlines</b> {" "}
          </h1>
        </div>

        <div className="container my-3">
          <div className="row my-2">
            {/* {!this.state.loading && */
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            {/* {this.state.loading && <Spinner />} */}
          </div>

          <div className="container  d-flex justify-content-between">
            <button
              disabled={page <= 1}
              type="button"
              className="btn btn-light "
              onClick={handlePreviousClick}
            >
              &laquo; Previous
            </button>
            <button
              disabled={page >= props.pageSize}
              type="button"
              className="btn btn-dark"
              onClick={handleNextClick}
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "sports",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
