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
  }, []);

  return (
    <div>
      <div className="columns is-mobile is-centered">
        <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop">
          <div className="box">
            <p className="is-centered is-size-4">Registration</p>
            <div className="card-content has-text-left">
              <RegisterForm />
            </div>
            <div className="card-content">
              {store.isRegisterSuccess && (
                <div>
                  <div className="field">
                    <div className="control">
                      <label className="label has-text-centered">
                        Register Success
                      </label>
                    </div>
                  </div>
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
