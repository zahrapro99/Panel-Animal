import * as React from "react";
import { forwardRef, memo } from "react";
import { Layout, AppBar, UserMenu, useLocale, useSetLocale } from "react-admin";
import { MenuItem, ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Language from "@material-ui/icons/Language";
import {useDispatch} from 'react-redux';
import { changeDir } from "../store/reducers/dir";
// import {useTranslation} from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  menuItem: {
    color: theme.palette.text.secondary,
  },
  icon: { minWidth: theme.spacing(5) },
}));

const SwitchLanguage = forwardRef((props, ref) => {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const classes = useStyles();
  // const {t, i18n} = useTranslation();

  const dispatch = useDispatch();

  const handleClick = (lang) => {
    // if (lang === 'en') {
    //   i18n.changeLanguage('en');
    // } else if (lang === 'fa') {
    //   i18n.changeLanguage('fa');
    // }
    dispatch(changeDir(lang));
    console.log(changeDir(lang));
  };
  return (
    <MenuItem
      ref={ref}
      className={classes.menuItem}
      onClick={() => {
        setLocale(locale === "en" ? "fa" : "en");
        dispatch(changeDir(locale));
        console.log(changeDir(locale));
        props.onClick();
        // handleClick(locale);
      }}
    >
      <ListItemIcon className={classes.icon}>
        <Language />
      </ListItemIcon>
      Switch Language
    </MenuItem>
  );
});

const MyUserMenu = (props) => (
  <UserMenu {...props}>
    <SwitchLanguage />
  </UserMenu>
);

const MyAppBar = memo((props) => (
  <AppBar {...props} userMenu={<MyUserMenu />} />
));

export default (props) => <Layout {...props} appBar={MyAppBar} />;
