import React from "react";
import { useStore } from "../../../services/store";
import { observer } from "mobx-react-lite";

const RegisterForm = observer((props: any) => {
  const store = useStore();

  return (
    <div>
      <div className="field">
        <label className="label">Mobile Number</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="tel"
            placeholder="Mobile Number"
            value="bulma"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help is-success">This username is available</p>
      </div>
    </div>
  );
});

export default RegisterForm;
