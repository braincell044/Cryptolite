import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  return (
    <div>
     <div class="container">
  <div class="row">
    <div class="col-6 col-md-4 col-sm-12 mb-3"> 
      <div class="card p-3">Card 1</div>
    </div>
    <div class="col-6 col-md-4 col-sm-12 mb-3"> 
      <div class="card p-3">Card 2</div>
    </div>
    <div class="col-12 col-md-4 col-sm-12 mb-3 ">
      <div class="card p-3">Card 3</div>
    </div>
    <div class="col-6 col-sm-12 mb-3">
      <div class="card p-3">Card 4</div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Card