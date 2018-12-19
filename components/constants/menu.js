import { LINKS } from '../constants/links';

export const MOBILE_MENU = [{
    name: "Developer",
    path: { url: LINKS.devs },
    external: true,
  },{
    name: "Fund",
    path: { url: LINKS.fund }
  },{
    name: "Applications",
    path: { url: LINKS.applications }
  },{
    name: "Resources",
    dropdown: true,
    menuItems: [
      {name: "Token Distribution", url: LINKS.tokenSale, external:true},
      {name: "Whitepaper", url: LINKS.whitepaper, external:true},
      {name: "Github", url: LINKS.github, external:true}
    ]
  },{
    name: "About",
    dropdown: true,
    menuItems: [
      {name: "Company", url: LINKS.aboutPage},
      {name: "Token", url: LINKS.token},
      {name: "Blog", url: LINKS.medium, external:true}
    ]
  },
  ,{
    name: "Go to DDF",
    button: true,
    path: { url: LINKS.ddf, external: true }
    }
];

/*TODO: update path*/
export const HEADER_MENU = [{
    name: "Developer",
    path: "http://developer.mybit.io/",
    external: true,
  },{
    name: "Fund",
    path: LINKS.fund
  },{
    name: "Applications",
    path: LINKS.applications
}];

export const RESOURCES_DROPDOWN = [
  {
    name: "Token Distribution",
    external: true,
    path: LINKS.tokenSale
  },{
    name: "Whitepaper",
    external: true,
    path: "https://mybit.io/whitepaperv2.0"
  },{
    name: "Github",
    external: true,
    path: "https://github.com/MyBitFoundation/",
    external: true
}];

export const ABOUT_DROPDOWN = [
  {
    name: "Company",
    external: false,
    path: LINKS.aboutPage
  },{
    name: "Token",
    external: false,
    path: LINKS.token
  },{
    name: "Blog",
    external: true,
    path: "https://medium.com/mybit-dapp",
    external: true
}];

export const HEADER_MENU_DROPDOWN = [{
    name: "Resources",
    path: LINKS.aboutPage,
    list: RESOURCES_DROPDOWN
  },{
    name: "About",
    path: LINKS.aboutPage,
    list: ABOUT_DROPDOWN
}];


export const HEADER_MENU_LANGUAGE = {
  en: {
    name: "Eng",
  },
  cn: {
    name: "中文",
  }
}

export const HEADER_MENU_BUTTON =
  {
    name: "Go to DDF",
    url: "https://ddf.mybit.io",
    external: true
  }
