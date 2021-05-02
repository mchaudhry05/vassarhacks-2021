import {
  HomebaseProvider,
  useClient,
  useEntity,
  useTransact,
} from "homebase-react";
import firebase from "firebase/app";
import debounce from "lodash/debounce";
import Give from "./Give";
import Authenticated from "./Components/Authenticated/Authenticated";
import "./App.css";
import React from "react";

const config = {
  schema: {
    resturant: { uid: { unique: "identity" } },
    menuItem: {
      resturant: { type: "ref" },
    },
  },

  initialData: [
    { menuItem: { user: -1 } },
    { resturant: { id: -1, name: "KFC" } },
  ],
};

const App = () => {
  return (
    <HomebaseProvider config={config}>
      <Authenticated>
        <Give/>
      </Authenticated>
    </HomebaseProvider>
  );
};

export default App;
