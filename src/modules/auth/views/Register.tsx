import React from "react";
import { useStore } from "../../../services/store";
import { observer } from "mobx-react-lite";
import { RegisterForm } from "../components";

const Register = observer((props: any) => {
  const store = useStore();

  return (
    <div>
      <div className="columns is-mobile is-centered">
        <div className="column is-full-mobile is-three-quarters-tablet is-half-desktop">
          <div className="box">
            <header className="card-header">
              <p className="card-header-title is-centered is-size-4">
                Registration
              </p>
            </header>
            <div className="card-content has-text-left">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Register;
