import React from 'react';
import { DXF } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={DXF} />
    </div>
    <div className="para">
      <p>
        YAKUZA is the new age electric vehicle in the category of two wheelers
        developed and produced in India by Maa Luxmi E-Vehicles Pvt. Ltd
      </p>
    </div>
  </div>
);

export default Brand;
