import { createContext, useContext } from "react";
import { action, observable } from "mobx";
import { validateEmail, validateMobile, validateRequired } from "../utilities";
import Axios from "axios";

export class Store {
  @observable isLoading = false;
  @observable mobile = {
    value: "",
    error: false,
  };
  @observable firstName = {
    value: "",
    error: false,
  };
  @observable lastName = {
    value: "",
    error: false,
  };
  @observable dateOfBirth = "";
  @observable gender = "";
  @observable email = {
    value: "",
    error: false,
  };
  @observable error = false;
  @observable errorList: any[] = [];
  @observable isRegisterSuccess = false;

  @action
  setMobile(value: string) {
    let error = false;
    if (!validateMobile(value)) {
      error = true;
    }
    this.mobile = {
      value,
      error,
    };
  }
  @action
  setFirstName(value: string) {
    let error = false;
    if (!validateRequired(value)) {
      error = true;
    }
    this.firstName = {
      value,
      error,
    };
  }
  @action
  setLastName(value: string) {
    let error = false;
    if (!validateRequired(value)) {
      error = true;
    }
    this.lastName = {
      value,
      error,
    };
  }
  @action
  setDateOfBirth(value: string) {
    this.dateOfBirth = value;
  }
  @action
  setGender(value: string) {
    this.gender = value;
  }
  @action
  setEmail(value: string) {
    let error = false;
    if (!validateEmail(value)) {
      error = true;
    }
    this.email = {
      value,
      error,
    };
  }
  @action
  async submitRegister() {
    this.isLoading = true;
    try {
      const body = {
        mobileNumber: this.mobile.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
      };
      const response = await Axios.post("http://localhost:3001/user", body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      this.error = response.data.error;
      this.errorList = response.data.errorMessages;
      this.isRegisterSuccess = true;
    } catch (e) {
      if (e.response && e.response.data) {
        this.error = e.response.data.error;
        this.errorList = e.response.data.errorMessages;
        console.log(e.response.data.errorMessages);
      } else {
        this.error = true;
        this.errorList = ["server error when submitting form"];
        console.log(
          `error when submitting form with error: ${JSON.stringify(e.response)}`
        );
      }
    }
    this.isLoading = false;
  }
  @action
  setIsRegisterSuccess(value: boolean) {
    this.isRegisterSuccess = value;
  }
}
const StoreContext = createContext<Store>({} as Store);

export const StoreProvider = StoreContext.Provider;

export const useStore = (): Store => useContext(StoreContext);
