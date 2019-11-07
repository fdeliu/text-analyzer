import React, { Component } from "react";
import Modal from "./Modal";
import Pagination from './Pagination';

class Main extends Component {
  state = {
    text: "",
    numOfWords: 0,
    repeatedWords: {},
    isAnalyzing: false,
    searchText:"",
    currentPage: 1,
    wordsPerPage: 15
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  handleClick = () => {
    this.setState({isAnalyzing: true})
    const { text } = this.state;
    const numOfWords = text.trim().split(/\s+/).length;
    let counts = {};
    text
      .trim()
      .split(/\s+/)
      .forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
      });
    setTimeout(()=>{
      if(this.state.isAnalyzing){
        const btn = document.getElementById('analyze');
        btn.click();
      }
      this.setState({
        repeatedWords: counts,
        numOfWords,
        isAnalyzing:false
      })
    },1000)
  };
  resetState = () => {
    this.setState({
      text: "",
      numOfWords: 0,
      repeatedWords: {},
      pageNumber:1
    });
  };

  render() {
    const { text, numOfWords, repeatedWords, searchText, currentPage, wordsPerPage } = this.state;
    const indexOfLastWord = currentPage * wordsPerPage;
    const indexOfFirstWord = indexOfLastWord - wordsPerPage;
    const currentWords = Object.keys(repeatedWords);
    const paginate = pageNumber =>  {
      window.location.href="#";
      this.setState({currentPage: pageNumber})
    }

    return (
      <div className="container-fluid py-5">
        <Modal />
        <div className="row">
          <div className="col-md-6 text-center">
            <form>
              <div className="form-group">
                <textarea
                  id="textarea"
                  className="form-control"
                  rows="14"
                  value={text}
                  onChange={this.handleChange}
                  required="required"
                  placeholder="Enter text here...."
                ></textarea>
              </div>
              <br />
              <button
                type="button"
                className="btn btn-primary"
                disabled={text === "" ? true : false}
                id="analyze"
                onClick={this.handleClick}
                data-toggle="modal"
                data-target="#exampleModalCenter"
                style={{backgroundColor:"#2F2FA2"}}
              >
                Analyze Text
              </button>
              <button
                type="reset"
                className="btn btn-danger mx-2"
                id="reset"
                onClick={this.resetState}
              >
                Reset
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col info">
                Total Words: {text === "" ? 0 : numOfWords}
              </div>
              <div className="col input-group py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search word..."
                  value={searchText}
                  onChange={e => this.setState({
                    searchText: e.target.value,
                    currentPage: 1
                  })}
                />
                <div className="input-group-append">
                  <span className="input-group-text"
                  onClick={()=>this.setState({searchText: ""})}
                  style={{cursor:'pointer', color:'red'}}> X </span>
                </div>
              </div>
            </div>
            <table className="table table-striped table-light table-bordered">
              <thead>
                <tr>
                  <th scope="col-md-1">#</th>
                  <th scope="col-md-4">Word:</th>
                  <th scope="col-md-7">Frequency:</th>
                </tr>
              </thead>
              {text ? (
                <tbody>
                  {Object.keys(repeatedWords)
                  .filter( key => key.includes(searchText))
                  .slice(indexOfFirstWord, indexOfLastWord)
                  .map((value,index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{value}</td>
                        <td>{repeatedWords[value]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : null}
            </table>
            <Pagination wordsPerPage={wordsPerPage} 
                        totalWords={currentWords.length} 
                        paginate={paginate}
                        currentPage={currentPage}/>
          </div>
          <div>
         </div>
        </div>
      </div>
    );
  }
}

export default Main;
