import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import textstringData from './strings.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "bootstrap/dist/css/bootstrap.min.css";

let currLang = 'is'

function skiptaUmTungumal() {
    const collection = document.getElementsByName("textstring")
    for (const item of collection) {
        const identifier = item.className.split(' ')[0]
        const replacement = textstringData[currLang][identifier]
        document.getElementsByClassName(identifier)[0].innerHTML = replacement
    }
    currLang = currLang === 'is' ? 'en' : 'is'
 }

const App = () => {
    const [currLang, setLang] = useState('is')
  useEffect(() => {
    skiptaUmTungumal();
  }, [currLang]);

  return (
    <div className="App">
      {/* <Container fluid > */}
      <section id="main" className="App-main">
        <Container>
          <div data-toggle="collapse" data-target="#adal" aria-expanded="true" aria-controls="adal" id="gull" className="card-header" role="tab">
            <h1>Gullna umslagið</h1>
          </div>
          <div  className="collapse show" id="adal" aria-labelledby="gull">
            <p name="textstring" className="adalreglur">blerg</p>
          </div>
          <Row >
            <div>
              <h1>Bláir miðar</h1>
              <p className="blaarreglur" name="textstring">blúrg</p>
            </div>
            <div>
                <p name="textstring" className="blarmidi" ></p>
                <Button name="textstring" className="skiptablaum btn-info">blabb</Button>
            </div>
          </Row>
          <Row >
            <div>
              <h1>Rauðir miðar</h1>
              <p name="textstring" className="raudarreglur"></p>
            </div>
            <div>
                <p name="textstring" className="raudurmidi" ></p>
                <Button name="textstring" className="synaraudan btn-warning"></Button>
            </div>
          </Row>
        </Container>
      </section>
      <section id="lang" className="lang">
      <Button onClick={setLang} name="textstring" className="skiptaummal"></Button>
      </section>
      {/* </Container> */}
    </div>
  );
};

export default App;
