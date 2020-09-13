import React from "react";
import { useStore } from "../../../services/store";
import { observer } from "mobx-react-lite";

const Login = observer((props: any) => {
  const store = useStore();

  return <div className="animated fadeIn px-5">Login {store.isLoading}</div>;
});

export default Login;
