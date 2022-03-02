import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDOM.render(
    <SpeechProvider appId="e3fa1402-fdef-4c6c-82e8-fa470770307c" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
  document.getElementById("root")
);
