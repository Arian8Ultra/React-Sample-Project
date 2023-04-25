import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorLayout() {
  let error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <p>Something went wrong.</p>
      <p>
        {
          // @ts-ignore
          error?.message
        }
      </p>
    </div>
  );
}

export default ErrorLayout;
