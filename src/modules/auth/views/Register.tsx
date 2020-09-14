import React, { useEffect } from "react";
import { useStore } from "../../../services/store";
import { observer } from "mobx-react-lite";
import { RegisterForm } from "../components";
import { useHistory } from "react-router-dom";

const Register = observer(() => {
  const store = useStore();
  const history = useHistory();

  useEffect(() => {
    store.setIsRegisterSuccess(false);
  }, [store]);

  return (
    <div>
      <div className="columns is-mobile is-centered">
        <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop">
          <div className="box">
            <p className="is-size-4">Registration</p>
            <div className="card-content has-text-left">
              {store.error && (
                <div className="content notification has-text-left is-danger">
                  <ul>
                    {store.errorList.length &&
                      store.errorList.map((item) => {
                        return <li className="is-capitalized">{item}</li>;
                      })}
                  </ul>
                </div>
              )}
              {store.isRegisterSuccess && (
                <div className="notification is-success">
                  <label>Register Success</label>
                </div>
              )}
              <RegisterForm />
            </div>
            <div className="card-content">
              {store.isRegisterSuccess && (
                <div>
                  <div className="field">
                    <div className="control">
                      <button
                        className="button is-primary is-fullwidth"
                        onClick={() => {
                          history.push("login");
                        }}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Register;
