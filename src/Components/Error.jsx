import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
  return (
    <div role="alert">
      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Warning
      </div>
      <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{err.status + " " + err.statusText} </p>
      </div>
    </div>
  );
};

export default Error;