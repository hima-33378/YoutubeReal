import React from 'react'

function Search() {
  return (
    <>
    <div className='row mt-3'>
            <div className='col-md-9' >
              <div className='row '>
              <div className='col-md-9' >
              <input type="text" placeholder='search' className="form-control" style={{ borderRadius: "30px"}}></input>
              </div>
              <div className='col-md-3 mt-2 ' >
              <i class="fa-solid fa-magnifying-glass size"></i>
              </div>
              </div>  
            </div>
            <div className='col-md-3 '>
           <div className='row'>
                <div className='col-md-6'>
                        <br></br>
                </div>
                <div className='col-md-6'>
                      <div className='row'>
                              <div className='col-md-4 mt-101 size1'>
                              <i class=" fa-solid fa-video-camera size1"></i>
                              </div>
                              <div className='col-md-4'>
                              <i class="fa-solid fa-bell size1"></i>
                              </div>
                              <div className='col-md-4 '>
                              <i class="fa-solid fa-user size1"></i>
                              </div>
                      </div>
                </div>
           </div>
           </div>

        </div>
    </>
  )
}
export default Search;
