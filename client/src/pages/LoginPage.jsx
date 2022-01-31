import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

// Context
import { AuthContext } from '../auth/AuthContext';

const LoginPage = () => {
  const [form, setForm] = useState({
    email: localStorage.getItem('email') || '',
    password: '',
    remember: !!localStorage.getItem('email'),
  });

  // Context
  const { login } = useContext(AuthContext);

  const onChange = ({ target }) => {
    const { name, value } = target || {};

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCheck = () => {
    setForm((prev) => ({ ...prev, remember: !prev.remember }));
  };

  const validForm = () => {
    return form.email.length > 0 && form.password.length > 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    form.remember
      ? localStorage.setItem('email', form.email)
      : localStorage.removeItem('email');

    const { email, password } = form || {};
    const loginSuccess = await login(email, password);

    if (!loginSuccess) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login Fail!',
      });
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="login100-form validate-form flex-sb flex-w"
      >
        <span className="login100-form-title mb-3"> Chat </span>
        <div className="wrap-input100 validate-input mb-3">
          <input
            className="input100"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            value={form.email}
            onChange={onChange}
          />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input mb-3">
          <input
            className="input100"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={onChange}
          />
          <span className="focus-input100" />
        </div>
        <div className="row mb-3">
          <div className="col" onClick={() => toggleCheck()}>
            <input
              className="input-checkbox100"
              id="ckb1"
              type="checkbox"
              name="remember"
              autoComplete="off"
              checked={form.remember}
              readOnly
            />
            <label className="label-checkbox100"> Remember Me </label>
          </div>
          <div className="col text-right">
            <Link to="/auth/register" className="txt1">
              No Account?
            </Link>
          </div>
        </div>
        <div className="container-login100-form-btn m-t-17">
          <button disabled={!validForm()} className="login100-form-btn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
