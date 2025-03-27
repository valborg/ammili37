import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import textstringData from './strings.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "bootstrap/dist/css/bootstrap.min.css";
import { ordalisti } from '../ordalisti'
import { wordlist } from "../wordlist";
import './index.css'

let currLang = 'is'

// þetta gæti verið aðeins of mikið

function getMeAWord() {
  const isl1 = ordalisti[Math.floor(Math.random() * ordalisti.length)]
  const eng1 = wordlist[Math.floor(Math.random() * wordlist.length)]
  return [isl1, eng1]
}

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

  const [showClue, setShowClue] = useState(false)
  const [showWarningButton, setShowWarningButton] = useState(true)
  const [isl1, setIsl1] = useState('')
  const [eng1, setEng1] = useState('')

  function bluePilled() {
    const [isl1, eng1] = getMeAWord()
    setIsl1(isl1)
    setEng1(eng1)
  };
  
  function clueOVision() {
      setShowClue(!showClue)
      setShowWarningButton(!showWarningButton)
  }

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
          <section id="lang" className="lang">
      <Button onClick={setLang} name="textstring" className="skiptaummal"></Button>
      </section>
          <Row >
            <div>
              <h1>Bláir miðar</h1>
              <p className="blaarreglur" name="textstring">blúrg</p>
            </div>
            <div>
                {isl1 && <div className='bluey'>
                  <h1>
                    {isl1} - {eng1}
                    </h1>
                    </div>}
                <Button name="textstring" className="skiptablaum btn-info" onClick={bluePilled}>blabb</Button>
            </div>
          </Row>
          <Row >
            <div>
              <h1>Rauðir miðar</h1>
              <p name="textstring" className="raudarreglur"></p>
            </div>
            {showClue &&
            // <p name="textstring" className="fela"></p> &&
                <Button className="btn-danger" onClick={clueOVision}>
                  {atob(document.location.hash.substring(1)) }
                </Button>
            }
            {showWarningButton &&
                <Button name="textstring" className="synaraudan btn-warning" onClick={clueOVision}>Sýna/Show</Button>
            }
          </Row>
        </Container>
      </section>

      {/* </Container> */}
    </div>
  );
};

export default App;
