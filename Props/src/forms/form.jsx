import { useState } from 'react';

let Forms = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <form>
        <div className="form-outline mb-4" data-mdb-input-init>
          <input type="email" id="form1Example1" className="form-control" />
          <label className="form-label" htmlFor="form1Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4" data-mdb-input-init>
          <input type="password" id="form1Example2" className="form-control" />
          <label className="form-label" htmlFor="form1Example2">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="form1Example3"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="form1Example3">
                Remember me
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          data-mdb-ripple-init
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default Forms;
