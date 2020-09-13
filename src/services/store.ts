import { createContext, useContext } from "react";
import { observable } from "mobx";

export class Store {
  @observable isLoading = false;
}
const StoreContext = createContext<Store>({} as Store);

export const StoreProvider = StoreContext.Provider;

export const useStore = (): Store => useContext(StoreContext);
