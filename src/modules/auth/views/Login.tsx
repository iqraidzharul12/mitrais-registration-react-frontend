import React from "react";
import { observer } from "mobx-react-lite";
import { LoginForm } from "../components";
import { useHistory } from "react-router-dom";

const Login = observer(() => {
  const history = useHistory();

  return (
    <div>
      <div className="columns is-mobile is-centered">
        <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop">
          <div className="box">
            <p className="is-centered is-size-4">Login</p>
            <div className="card-content has-text-left">
              <LoginForm />
            </div>
            <div className="card-content">
              Don't have an account?{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  history.push("register");
                }}
              >
                sign up here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Login;
