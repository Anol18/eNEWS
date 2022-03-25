import React, { Component } from 'react'
import Newsitem from './Newsitem'
import './news.css'





export default class News extends Component {
 
  
  constructor()
  {
    super();
    this.state ={
      articles: [],
      loading: false,
      page:1

    }
   

  }
  
  
  
  async componentDidMount()
  {
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2022-02-13&sortBy=publishedAt&apiKey=0cfc73773e7b480aba700a275c05a8f6&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
 
    this.setState({articles: parseData.articles,totalResults: parseData.totalResults})
  }
  handlePreviousPage = async()=>{
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-02-13&sortBy=publishedAt&apiKey=0cfc73773e7b480aba700a275c05a8f6&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
 
    
    


    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })
    window.scrollTo(0, 0);

  }

  handleNextPage = async ()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/20))
    {

    }else
    {
      let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-02-13&sortBy=publishedAt&apiKey=0cfc73773e7b480aba700a275c05a8f6&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
 
    
    console.log("Next clicked");


    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles
    })
  
    window.scrollTo(0, 0);
 
}


  }

  render() {
    return (
      <>
      
      <div className='container'>
      
       
      <h2 className='my-3'>eNEWS - Top Headlines</h2>
     
          <div className='row'>
          {this.state.articles.map((element)=>{
        
               return <div className='col-md-4 my-3' key={element.url}>
        <Newsitem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>

      })}
                   
            </div>
            <div className="d-flex justify-content-end">
               </div>

            <div className="container d-flex justify-content-between my-5">
            <button disabled = {this.state.page<=1} type="button" className="btn btn-dark btn1-color" onClick={this.handlePreviousPage}>&larr; Previous</button>
            <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} className="btn btn-dark btn1-color"onClick={this.handleNextPage}>Next &rarr;</button>
            </div>

            
       
     
      </div>
      </>
    )
  }
}