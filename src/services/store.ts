import { createContext, useContext } from "react";
import { action, observable } from "mobx";
import { validateEmail, validateMobile, validateRequired } from "../utilities";

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
  @observable errorList = [];
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
  submitRegister() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isRegisterSuccess = true;
    }, 5000);
  }
  @action
  setIsRegisterSuccess(value: boolean) {
    this.isRegisterSuccess = value;
  }
}
const StoreContext = createContext<Store>({} as Store);

export const StoreProvider = StoreContext.Provider;

export const useStore = (): Store => useContext(StoreContext);
