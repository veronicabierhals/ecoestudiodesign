import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const basePath = process.env.NODE_ENV === 'production' ? '/ecoestudiodesign' : '';

  return (
    <div id="portfolio" className="container py-4">
      <div className="row gx-4 gy-4">
        <div className="col-md-4 col-sm-6">
          <Link to="/giovanne">
            <img
              className="img-fluid w-100 rounded-4"
              src={`${basePath}/img/giovanne.jpg`}
              alt="Giovanne"
            />
          </Link>
        </div>
        <div className="col-md-4 col-sm-6">
          <Link to="/refugioDoSol">
            <img
              className="img-fluid w-100 rounded-4"
              src={`${basePath}/img/refugio do sol.jpg`}
              alt="Refugio do Sol"
            />
          </Link>
        </div>
        <div className="col-md-4 col-sm-6">
          <Link to="/laJanda">
            <img
              className="img-fluid w-100 rounded-4"
              src={`${basePath}/img/laJanda/laJandaCapa.png`}
              alt="La Janda"
            />
          </Link>
        </div>
        <div className="col-md-4 col-sm-6">
          <Link to="/humenhuk">
            <img
              className="img-fluid w-100 rounded-4"
              src={`${basePath}/img/humenhuk.png`}
              alt="Humenhuk"
            />
          </Link>
        </div>
        <div className="col-md-4 col-sm-6">
          <Link to="/artComFarinha">
            <img
              className="img-fluid w-100 rounded-4"
              src={`${basePath}/img/art com farinha.jpg`}
              alt="Art com Farinha"
            />
          </Link>
        </div>
        <div className="col-md-4 col-sm-6">
          <Link to="/aline">
            <img
              className="img-fluid w-100 rounded-4"
              src={`${basePath}/img/aline/alineCapa.png`}
              alt="Aline"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
