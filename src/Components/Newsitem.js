import React, { Component } from "react";
import './newsitem.css'

export default class Newsitem extends Component {
  
 
  render() {
    let {title, description, imageUrl,newsUrl} = this.props;
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={imageUrl} alt=""/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-light border border-dark" id="btn-read-more">
              Ream more
            </a>
          </div>
        </div>
      </>
    );
  }
}
