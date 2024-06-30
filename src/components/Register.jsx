export default function Register({handlesubmit}) {
    return(
        <>
        <h5>Registrate aqui</h5>
        <form className="row g-3 needs-validation" onSubmit={handlesubmit} >
  <div className="">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id=""  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" defaultValue="Otto" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="">
    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
    <div className="">
    <label htmlFor="validationCustom01" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" defaultValue="Mark" required/>
    <div className="valid-feedback">
      Email
    </div>
  </div>
  <div className="">
    <label htmlFor="validationCustom01" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" defaultValue="Mark" required/>
    <div className="valid-feedback">
      Password
    </div>
  </div>
  </div>
  <div className="">
    <div className="form-check">
      <input className="form-check-input" type="checkbox"  id="invalidCheck" required/>
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="">
    <button className="btn btn-primary" type="submit">Submit</button>
  </div>
</form>
        </>
    )
}