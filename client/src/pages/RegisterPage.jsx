import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// Context
import { AuthContext } from '../auth/AuthContext';

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { register } = useContext(AuthContext);

  const onChange = ({ target }) => {
    const { name, value } = target || {};
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validForm = () => {
    return (
      form.email.length > 0 && form.password.length > 0 && form.name.length > 0
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const { name, email, password } = form || {};
    const registerSuccess = await register(name, email, password);

    if (!registerSuccess) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Register Fail!',
      });
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      className="login100-form validate-form flex-sb flex-w"
    >
      <span className="login100-form-title mb-3">Chat - Registro</span>
      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
          autoComplete="off"
        />
        <span className="focus-input100" />
      </div>
      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
          autoComplete="off"
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
          autoComplete="off"
        />
        <span className="focus-input100" />
      </div>
      <div className="row mb-3">
        <div className="col text-right">
          <Link to="/auth/login" className="txt1">
            already have account?
          </Link>
        </div>
      </div>
      <div className="container-login100-form-btn m-t-17">
        <button disabled={!validForm()} className="login100-form-btn">
          create user
        </button>
      </div>
    </form>
  );
};

export default RegisterPage;
