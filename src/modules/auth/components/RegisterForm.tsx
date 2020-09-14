import React, { useState } from "react";
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
        <label className="label">First Name</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className={!store.firstName.error ? "input" : "input is-danger"}
            type="text"
            placeholder="First Name"
            disabled={store.isLoading}
            onChange={(e) => store.setFirstName(e.target.value)}
            value={store.firstName.value}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            {!store.firstName.error ? (
              <i className="fa fa-check"></i>
            ) : (
              <i className="fa fa-times"></i>
            )}
          </span>
        </div>
        {store.firstName.error && (
          <p className="help is-danger">This field is mandatory</p>
        )}
      </div>
      <div className="field">
        <label className="label">Last Name</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className={!store.lastName.error ? "input" : "input is-danger"}
            type="text"
            placeholder="Last Name"
            disabled={store.isLoading}
            onChange={(e) => store.setLastName(e.target.value)}
            value={store.lastName.value}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            {!store.lastName.error ? (
              <i className="fa fa-check"></i>
            ) : (
              <i className="fa fa-times"></i>
            )}
          </span>
        </div>
        {store.lastName.error && (
          <p className="help is-danger">This field is mandatory</p>
        )}
      </div>
      <div className="field">
        <label className="label">Date of Birth</label>
        <div className="control">
          <input
            className="input"
            type="date"
            value={store.dateOfBirth}
            onChange={(e) => store.setDateOfBirth(e.target.value)}
            disabled={store.isLoading}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="label">Gender</label>
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="male"
              disabled={store.isLoading}
              onChange={(e) => store.setGender(e.target.value)}
            />
            &nbsp;Male&nbsp;&nbsp;
          </label>
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => store.setGender(e.target.value)}
              disabled={store.isLoading}
            />
            &nbsp;Female
          </label>
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className={!store.email.error ? "input" : "input is-danger"}
            type="email"
            placeholder="email@domain.com"
            disabled={store.isLoading}
            onChange={(e) => store.setEmail(e.target.value)}
            value={store.email.value}
          />
          <span className="icon is-small is-left">
            <i>@</i>
          </span>
          <span className="icon is-small is-right">
            {!store.email.error ? (
              <i className="fa fa-check"></i>
            ) : (
              <i className="fa fa-times"></i>
            )}
          </span>
        </div>
        {store.email.error && (
          <p className="help is-danger">Please enter a valid email address</p>
        )}
      </div>
      <div className="field">
        <div className="control">
          <button
            className="button is-primary is-fullwidth"
            disabled={store.isLoading}
            onClick={() => {
              store.submitRegister();
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
});

export default RegisterForm;
