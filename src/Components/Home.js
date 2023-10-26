import React from "react";
import background from "../Assets/grass.jpg";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  const backgroundImg = {
    position: 'fixed', 
    height: '100vh', 
    width: '100vw', 
    backgroundColor: `rgb(16,16,16, 0.5)`,
  };

  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position: "relative",
    padding: '3rem',
    flexDirection: 'column'
  };

  const box = {
    border: '1px dotted white',
    boxShadow: `inset 0px 0px 400px 110px rgba(0, 0, 0, .5)`,
    padding: `3rem`,
    margin: '2rem',
    maxWidth: '50rem',
  }
  
  const description = {
    fontSize: '1.5rem',
    color: '#dede',
    padding: '1.4rem 0'
  }

  const btnStyle = {
    backgroundColor: "#000",
    border: '1px solid white',
    padding: '0.5rem',
    color: 'white',
    float: 'right'
  };

  const Items = [{
    title: 'Code Websites From Any Where',
    description: 'With this online code editor, you can edit HTML, CSS and JavaScript code, and live preview of site instantly.',
    cta: 'Web Editor Playground',
    link: '/web'
  },{
    title: 'Generate README in Seconds',
    description: ' Online markdown editor, with custom toolbar to help you make your readme easily.',
    cta: 'Markdown Editor ',
    link: '/markdown'
  }]

  return (
    <div>
     <img src={background} alt="fig2" className="shape" style={backgroundImg} />
      <div style={wrapper}>
        {
          Items.map(item => ( <div style={box}>
            <h2 aria-label="heading" style={{ color: "#fff", fontSize: '2.4rem' }}>{item.title}</h2>
            <h5 style={description}>{item.description} </h5>
            <Link style={btnStyle} to={item.link}>
              {item.cta}
            </Link>
          </div>))
        }
      </div>
    </div>
  );
}

export default Home;
