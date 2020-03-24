import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={"https://firebasestorage.googleapis.com/v0/b/expensesapp-b91ee.appspot.com/o/Kittipong.jpg?alt=media&token=ca0f01f3-8025-4c78-a605-38666b1986d8"} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Kittipong Milerue (610610570)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/EXPapp-/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
