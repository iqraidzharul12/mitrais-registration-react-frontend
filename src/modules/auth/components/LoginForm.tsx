import React from "react";
import { useStore } from "../../../services/store";
import { observer } from "mobx-react-lite";

const LoginForm = observer(() => {
  const store = useStore();
  return (
    <div>
      <div className="field">
        <label className="label">Mobile Number</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className={!store.mobile.error ? "input" : "input is-danger"}
            type="tel"
            placeholder="Mobile Number"
            disabled={store.isLoading}
            onChange={(e) => store.setMobile(e.target.value)}
            value={store.mobile.value}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-mobile"></i>
          </span>
          <span className="icon is-small is-right">
            {!store.mobile.error ? (
              <i className="fa fa-check"></i>
            ) : (
              <i className="fa fa-times"></i>
            )}
          </span>
        </div>
        {store.mobile.error && (
          <p className="help is-danger">
            Please enter a valid indonesian phone number
          </p>
        )}
      </div>
      <div className="field">
        <div className="control">
          <button
            className="button is-primary is-fullwidth"
            disabled={store.isLoading}
            onClick={() => {}}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
});

export default LoginForm;
