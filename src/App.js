// import './App.css';
import * as React from "react";
import { Admin, Resource,useLocale } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate } from "./sayer/post";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import { UserList } from "./sayer/user";
import Dashboard from "./sayer/dashboard";
import authProvider from "./sayer/authProvider";
import Layout from './sayer/layout';
// import dataProvider from "./sayer/dataProvider";
import i18nProvider from "./sayer/i18nProvider";
// import englishMessages from "ra-language-english";
// import polyglotI18nProvider from "ra-i18n-polyglot";
// import farsiMessages from "ra-language-farsi";
import { createMuiTheme } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import store from './store/index';
// import {Provider} from 'react-redux';
// import {useDispatch} from 'react-redux';
// import { changeDir } from "./store/reducers/dir";
// import {useTranslation} from 'react-i18next';
import {useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import {useSelector} from 'react-redux';
// import {useTranslation} from 'react-i18next';
import { selectDir } from './store/selectors/dirSelector';
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
  direction: "rtl",
});

// const messages = {
//   fa: farsiMessages,
//   en: englishMessages,
// };

// const i18nProvider = polyglotI18nProvider((locale) => messages[locale]);
// // const messages = {
// //   fa: farsiMessages,
// // };

// // const i18nProvider = polyglotI18nProvider((locale) => messages[locale], "fa");
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  const direction = useSelector(selectDir);
  // const {i18n} = useTranslation();
  const locale = useLocale();

  const [dir, setDir] = useState(locale == 'fa' ? 'rtl' : 'ltr');

  useEffect(() => {
    console.log(direction);
    setDir(direction.dir);
  }, [direction, setDir]);

  // const {t, i18n} = useTranslation();

  // const dispatch = useDispatch();

  // const handleClick = (lang) => {
  //   console.log(i18n.language);
  //   if (lang === 'en') {
  //     i18n.changeLanguage('en');
  //   } else if (lang === 'fa') {
  //     i18n.changeLanguage('fa');
  //   }
  //   dispatch(changeDir(lang));
  // };

  return(
   
  // <StylesProvider jss={jss}>
    <Admin
      // theme={theme}
      dashboard={Dashboard}
      // authProvider={authProvider}
      dataProvider={dataProvider}
      // locale="fa"
      i18nProvider={i18nProvider}
      layout={Layout}
      initialState={store}
    >
       <Helmet>
    <body dir={dir} />
  </Helmet>
        {/* <Provider store={store}> */}

      {permissions => [
        // Restrict access to the edit and remove views to admin only
        <Resource
            name="posts"
            list={PostList}
            edit={permissions === 'admin' ? PostEdit : null}
            icon={PostIcon}
        />,
        permissions === 'admin'
            ? <Resource name="categories" list={UserList}  icon={UserIcon} />
            : null,
    ]}
      {/* <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource name="users" list={UserList} icon={UserIcon} /> */}
       {/* </Provider> */}

    </Admin>
  //  </StylesProvider>
   ) };

export default App;
