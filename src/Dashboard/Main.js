import React from "react";
import "./main.css";
import note from "./notes.png";
import Id from "./id-card.png";
import poetry from "./poetry.png";
import claims from "./refund.png";
function Main() {
  return (
    <>
      <div>
        <h1 className = "msg">WELCOME  TOLU </h1>
        
      </div>
      <div className='mainwrapper'>
        <div className='sub-mainwrapper1'>
          <div className='wrapper1'>
            <div className='sub-wrapper1'>
              <a href='https://www.youtube.com' className='itenary'>
               Total Number of Submitted Claims
              </a>
              <br />
              <Image />
            </div>
            <h3 className='item-quantity'>15</h3>
          </div>
          <div className='wrapper1'>
            <div className='sub-wrapper1'>
              <a href='https://www.youtube.com' className='itenary'>
                Total Number of Principals
              </a>
              <br />
              <Image />
            </div>
            <h3 className='item-quantity'>1105</h3>
          </div>
          <div className='wrapper1'>
            <div className='sub-wrapper1'>
              <a href='https://www.youtube.com' className='itenary'>
                Claims
              </a>
              <br />
              <Image4 />
            </div>
            <h3 className='item-quantity'>2</h3>
          </div>
          
        </div>
        <div className='sub-mainwrapper2'>
          <div className='wrapper2'>
            <div className='sub-wrapper2'>
              <a href='https://www.youtube.com' className='itenary'>
                Claims not vetted
              </a>
              <br />
              <Imagee />
            </div>
            <h3 className='item-quantity'>312</h3>
          </div>
          <div className='wrapper2'>
            <div className='sub-wrapper2'>
              <a href='https://www.youtube.com' className='itenary'>
                Total Number of Dependants
              </a>
              <br />
              <Image2 />
            </div>
            <h3 className='item-quantity'>3</h3>
          </div>
          <div className='wrapper2'>
            <div className='sub-wrapper2'>
              <a href='https://www.youtube.com' className='itenary'>
                Search Enrollee
              </a>
              <br />
              <Image3 />
            </div>
            <h3 className='item-quantity'>18</h3>
          </div>
          
        </div>
      </div>
    </>
  );
}

const Image = () => {
  return <img src={note} alt='' className='img2' />;
};

const Imagee = () => {
  return <img src={note} alt='' className='img3' />;
};

const Image2 = () => {
  return <img src={Id} alt='' className='img4' />;
};

const Image3 = () => {
  return <img src={poetry} alt='' className='img5' />;
};

const Image4 = () => {
  return <img src={claims} alt='' className='img6' />;
};

export default Main;
