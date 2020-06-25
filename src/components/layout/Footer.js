import React from 'react';
import { Movie } from './../home/Movie';

/* Footer */

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:&nbsp;
            <span className="text-warning font-weight-normal">
              Ramchandra Velip
            </span>
            , Movie Trailers
   
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
