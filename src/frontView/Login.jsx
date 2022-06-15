import React from 'react';
import GoogleAuth from './GoogleAuth';
import { Form, Field} from 'react-final-form'


function Login(props) {

  const onSubmit = async() => {
  
  }

    return (
        <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
      <Form
        onSubmit={onSubmit}
        subscription={{ submitting: true, pristine: true }}
      >
        {({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit} className = "form mt-5">
           
            <div className='p-2'>
              <label className='m-2 form-label'><b>UserName</b></label>
              <Field
                name="username"
                component="input"
                type="text"
                className="form-control"
                placeholder="UserName"
              />
            </div>
         
            <div className='p-2'>
              <label className='m-2 form-label'><b>Password</b></label>
              <Field
                name="password"
                component="input"
                type="password"
                className="form-control"
                placeholder="password"
              />
            </div>
            <div className="buttons p-2">
              <button type="submit" disabled={submitting || pristine} className="btn btn-dark">
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
                className="btn btn-dark ms-2"
              >
                Reset
              </button>
            </div>
           
          </form>
        )}
      </Form>
      </div>
      </div>  
      <GoogleAuth/>    
        </div>
    </div>
    
    );
}


  
export default Login;
