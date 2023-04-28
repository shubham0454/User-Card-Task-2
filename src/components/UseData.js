
import React, { useState } from 'react'

const LogicalNot = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
    <div className='text-center'>
        <button 
                onClick={() => setToggle(!toggle)} 
                class="btn btn-primary mb-5">
            Get User Data
        </button>
      </div>
      {toggle && (
         <div>
         <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
   <div className="col">
     <div className="card h-100">
       <img src="https://reqres.in/img/faces/1-image.jpg" className="card-img-top" alt="..."/>
       <div className="card-body">  
         <h5>Name : <span> George Bluth</span></h5>
         <h5 className="card-title"> ID : <span> 1</span></h5>
         <h5 className="card-title">Email : <span> george.bluth@reqres.in</span></h5>
        </div>
        <div className="card-footer">
         <small className="text-body-secondary">Last updated 3 mins ago</small>
       </div>
     </div>
   </div>
   <div className="col">
     <div className="card h-100">
       <img src="https://reqres.in/img/faces/2-image.jpg" className="card-img-top" alt="..."/>
       <div className="card-body">  
         <h5>Name : <span> Janet Weaver</span></h5>
         <h5 className="card-title"> ID : <span> 2</span></h5>
         <h5 className="card-title">Email : <span> janet.weaver@reqres.in</span></h5>
        </div>
       <div className="card-footer">
         <small className="text-body-secondary">Last updated 4 mins ago</small>
       </div>
     </div>
   </div>
   <div className="col">
     <div className="card h-100">
       <img src="https://reqres.in/img/faces/3-image.jpg" className="card-img-top" alt="..."/>
       <div className="card-body">  
         <h5>Name : <span> Emma Wong</span></h5>
         <h5 className="card-title"> ID : <span> 3</span></h5>
         <h5 className="card-title">Email : <span> emma.wong@reqres.in</span></h5>
        </div>
       <div className="card-footer">
         <small className="text-body-secondary">Last updated 6 mins ago</small>
       </div>
     </div>
   </div>
 </div>
 <div className="row row-cols-1 row-cols-md-3 g-4 m-2 ">
   <div className="col">
     <div className="card h-100">
       <img src="https://reqres.in/img/faces/4-image.jpg" className="card-img-top" alt="..."/>
       <div className="card-body">  
         <h5>Name : <span> Eve Holt</span></h5>
         <h5 className="card-title"> ID : <span> 4</span></h5>
         <h5 className="card-title">Email : <span> eve.holt@reqres.in</span></h5>
        </div>
       <div className="card-footer">
         <small className="text-body-secondary">Last updated 8 mins ago</small>
       </div>
     </div>
   </div>
   <div className="col">
     <div className="card h-100">
       <img src="https://reqres.in/img/faces/5-image.jpg" className="card-img-top" alt="..."/>
       <div className="card-body">  
         <h5>Name : <span> Charles Morris</span></h5>
         <h5 className="card-title"> ID : <span> 5</span></h5>
         <h5 className="card-title">Email : <span> charles.morris@reqres.in</span></h5>
        </div>
       <div className="card-footer">
         <small className="text-body-secondary">Last updated 9 mins ago</small>
       </div>
     </div>
   </div>
   <div className="col">
     <div className="card h-100">
       <img src="https://reqres.in/img/faces/6-image.jpg" className="card-img-top" alt="..."/>
       <div className="card-body">  
         <h5>Name : <span> Tracey Ramos</span></h5>
         <h5 className="card-title"> ID : <span> 6</span></h5>
         <h5 className="card-title">Email : <span> tracey.ramos@reqres.in</span></h5>
        </div>
       <div className="card-footer">
         <small className="text-body-secondary">Last updated 9 mins ago</small>
       </div>
     </div>
   </div>
 </div>
       
     </div>
      )}
    </>
  )
}
export default LogicalNot