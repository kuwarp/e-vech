import React from 'react';
import './Slide.css';
import Carousel from 'react-bootstrap/Carousel';
import sil from '../../assets/silver01.png';
import red from '../../assets/red01.png';
import org from '../../assets/or01.png';
import bl from '../../assets/bl01.png';
import blk from '../../assets/black01.png';

const Slide = () => (
  <Carousel fade className="cr-dash">
    <Carousel.Item>
      <img
        className="cr-dash d-block w-100"
        src={sil}
        alt="Aj Star"
      />
      <Carousel.Caption>
        <h3>Aj Star</h3>
        <p>AJSTAR presenting by Yakuza.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={red}
        alt="Rubic"
      />

      <Carousel.Caption>
        <h3>Rubie</h3>
        <p>RUBIE from Yakuza.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={bl}
        alt="Ck phantom"
      />

      <Carousel.Caption>
        <h3>CK Phantom</h3>
        <p>Yakuza presenting CK PHANTOM.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={org}
        alt="Delta"
      />

      <Carousel.Caption>
        <h3>DELTA</h3>
        <p>Yakuza presenting DELTA.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={blk}
        alt="Poppy"
      />

      <Carousel.Caption>
        <h3>POPPY</h3>
        <p>Yakuza presenting POPPY.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
export default Slide;
