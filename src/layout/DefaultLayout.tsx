import React, { Suspense } from "react";
import * as RouterDom from "react-router-dom";
import { Router } from "../config";
import { BrowserRouter } from "react-router-dom";
import { DefaultHeader, DefaultFooter } from ".";

export default function DefaultLayout(props: any) {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center p-5">Loading...</div>
  );
  return (
    <BrowserRouter>
      <section className="hero is-primary is-fullheight">
        <div className="hero-head">
          <DefaultHeader />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <Suspense fallback={loading()}>
              <RouterDom.Switch>
                {Router.map((route, idx) =>
                  route.component ? (
                    <RouterDom.Route
                      key={idx} // eslint-disable-line
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props: any) => <route.component {...props} />}
                    />
                  ) : null
                )}
                <RouterDom.Redirect from="/" to="/register" />
              </RouterDom.Switch>
            </Suspense>
          </div>
        </div>
        <div className="hero-foot">
          <DefaultFooter />
        </div>
      </section>
    </BrowserRouter>
  );
}
