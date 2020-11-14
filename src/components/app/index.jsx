import React, { useState, useEffect } from 'react';

// import TopNav from './TopNav';
import Navbar from './Navbar';
import Footer from './Footer';
import ContentList from './ContentList';

import './assets/css/app.scss';

const mdName = 'contentBox';

function App() {
  const [dataState, setDataState] = useState({showScroll: false});

  const [contents, setContents] = useState([]);

  /** */
  const onScrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  /** */
  const checkScrollTop = () => {
    if (!dataState.showScroll && window.pageYOffset > 300) {
      setDataState({...dataState, showScroll: true});
    } else if (dataState.showScroll && window.pageYOffset <= 300){
      setDataState({...dataState, showScroll: false});
    }
  }

  /** */
  // window.addEventListener('scroll', checkScrollTop);

  /** */
  useEffect(() => {
    /**  */
    async function fetchData() {
      let i = 1;

      try {
        do {
          // Fetch data
          let text = await fetch(`./data/${mdName}${i}.md`).then(res => res.text());

          if (text.substr(0, 9) === '<!DOCTYPE') {
            break;
          }

          contents.push({
            id: i,
            text
          });

          i += 1;
        } while (1);
      } catch (error) {
        console.log('error', error);
      }

      // Set state
      setContents([...contents]);
    }

    fetchData();
  }, []);

  return (
    <div>
      {/* Import Top */}
      {/* <TopNav /> */}

      {/* Import Navbar */}
      <Navbar />

      <div className="row main">
        <div className="col-md-3 col-sm-3">
          <div className="content-left">
            <p><a href="/#">#The Flight wer vaeawec awerva werawra wvr</a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>

            {/* {renderContent()} */}
          </div>
        </div>

        {/* Render content */}
        <div className="col-md-6 col-sm-9">
          <div className="content-center">
            <ContentList contents={contents.slice(0, 2)} />
          </div>
        </div>

        <div className="col-md-3 col-sm-12">
          <div className="content-right">
            <h2>What?</h2>
            <p>Chania is a city on the island of Crete.</p>
            <h2>Where?</h2>
            <p>Crete is a Greek island in the Mediterranean Sea.</p>
            <h2>How?</h2>
            <p>You can reach Chania airport from all over Europe.</p>
          </div>
        </div>

        <div className="col-md-12 col-sm-12">
          <div className="content-center ml-25per">
            <ContentList contents={contents.slice(2)}/> 
          </div>
        </div>
      </div>

      {/* Scroll top */}
      <div id="scroll-top" className={dataState.showScroll ? '' : 'dis-none'} onClick={onScrollTop}>
        <i className="fa fa-chevron-circle-up"></i>
      </div>

      {/* Import Footer */}
      <Footer />
    </div>
  );
}

export default App;