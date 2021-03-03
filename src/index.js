import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from './store/index';
import {Provider} from 'react-redux';
import Helmet from 'react-helmet';

ReactDOM.render(
  // const direction = useSelector(selectDir);
  // const {i18n} = useTranslation();
  // const [dir, setDir] = useState(i18n.language == 'fa' ? 'rtl' : 'ltr');

  // useEffect(() => {
  //   console.log(direction);
  //   setDir(direction.dir);
  // }, [direction, setDir]);

  <React.StrictMode>
     {/* <Provider store={store}>  */}
      <App />
     {/* </Provider> , */}
  </React.StrictMode>,
  // <Helmet>
  //       <body dir={dir} />
  //       <App/>
  //     </Helmet>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
