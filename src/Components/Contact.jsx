import React, { useState } from 'react'

const Contact = () => {

  const [data, SetData] = useState({
    Name: "",
    Email: "",
    Number: "",
    msg: ""
  })

  const SetVal = (event) => {

    let name = event.target.name;
    let value = event.target.value;

    SetData((PrevData) => {
      return {
        ...PrevData,
        [name]: value
      }
    })

  }

  const GetDetails = (e) => {
    e.preventDefault();
    alert(`
    Name : ${data.Name}
    Number : ${data.Number}
    Email : ${data.Email}
    Message : ${data.msg}
    `)
  }

  return (
    <>
      <div className="mt-5">
        <h2 className="text-center">Contact Us</h2>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="" onSubmit={GetDetails} className='my-4'>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                  name='Name'
                  onChange={SetVal}
                  value={data.Name}
                  placeholder="Enter Your Name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                  name='Number'
                  onChange={SetVal}
                  value={data.Number}
                  placeholder="Enter Your Phone Number" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                  name='Email'
                  onChange={SetVal}
                  value={data.Email}
                  placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control"
                  name='msg'
                  onChange={SetVal}
                  value={data.msg}
                  id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact
