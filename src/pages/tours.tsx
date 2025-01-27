import Card from "../components/cards";
import Portillo from '../assets/portillo.jpeg';
import CityTour from '../assets/cityTour.jpeg';
import '../css/pages/tours.css'

import toursData from '../json/tours.json';

import { useState, useEffect } from 'react';

type Itours = {
  nome?: string;
  imagem?: string;
  horario?: string;
  vestuario?: string;
};

function Tours() {
  const [tours, setTours] = useState<Itours[]>([]);

  useEffect(() => {
    setTours(toursData)
  }, []);

  return (
    <>
      <div className="section bg-tertiary text-left">
        {
          
        }
        <div className="text-center text-primary">
          <h1>As Aventuras Andinas Mais Queridas</h1>
          <div className="d-flex center">
            <Card background='bg-secondary text-secondary'>
              <img className="img" src={Portillo}></img>
              <h3>Portillo e laguna</h3>
            </Card>
            <Card background='bg-secondary text-secondary'>
              <img className="img" src={CityTour}></img>
              <h3>City Tour</h3>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tours;