export default function Logeo ({handlesubmit}) {
    return(
        <>
        <h5>Login</h5>
        <form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </>
    )
}