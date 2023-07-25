import React, { useState } from 'react';

function RegistrationView() {
  const [inputValues, setInputValue] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [validation, setValidation] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validation;

    //first Name validation
    if (!inputValues.fName.trim()) {
      errors.fName = 'First name is required';
    } else {
      errors.fName = '';
    }
    
    return setValidation(errors);
  };

  return (
    <div>
      <div className='sign-up-form'>
        <form
          id='registrationForm'
          action='/'
          method='POST'
          onSubmit={handleSubmit}
        >
          <div className='form-control'>
            <input
              placeholder='First Name'
              type='string'
              name='fName'
              id='fName'
              className='input-field'
              onChange={(e) => handleChange(e)}
              value={inputValues.fName}
            />
            {validation.fName && <p>{validation.fName}</p>}
            {validation.fName && console.log(validation)}
          </div>
          <div className='form-control'>
            <input
              placeholder='Last Name'
              type='string'
              id='lName'
              name='lName'
              className='input-field'
              onChange={(e) => handleChange(e)}
              value={inputValues.lName}
            />
            {validation.lName && <p>{validation.lName}</p>}
          </div>
          <div className='form-control'>
            <input
              placeholder='email'
              type='email'
              name='email'
              className='input-field'
              onChange={(e) => handleChange(e)}
              value={inputValues.email}
            />
          </div>
          {validation.email && <p>{validation.email}</p>}

          <div className='form-control'>
            <input
              placeholder='password'
              type='password'
              name='password'
              className='input-field'
              onChange={(e) => handleChange(e)}
              value={inputValues.password}
              required
            />
            {validation.password && <p>{validation.password}</p>}
          </div>
          <div className='form-control'>
            <input
              placeholder='confirm password'
              type='password'
              name='confirmPassword'
              className='input-field'
              onChange={(e) => handleChange(e)}
              value={inputValues.confirmPassword}
              required
            />
          </div>
          <button type='submit' id='submit-button'>
            submit
          </button>
          <span className='form-input-login'>
            Already have an account? Login <a href='#'>here</a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default RegistrationView;