import { LINKS } from './links';
import TelegramIcon  from '../../static/svgs/social/telegram-1.svg';
import MediumIcon  from '../../static/svgs/social/medium.svg';
import FacebookIcon  from '../../static/svgs/social/facebook-white.svg';
import RedditIcon  from '../../static/svgs/social/reddit-white.svg';
import TwitterIcon  from '../../static/svgs/social/twitter-white.svg';

export const FOOTER_SECTIONS = [
  {
    title: 'Products',
    className: 'products',
    isContentNode: true,
    links:[{
        title: 'SDK',
        url: LINKS.devs,
        newTab: true,
      }, {
        title: 'MyBit Go',
        // inactive: true,
        url: LINKS.mybitGo,
        newTab: true,
      }, {
        title: 'Other dApps',
        // inactive: true,
        url: LINKS.applications,
        newTab: false,
      }
    ]
  },
  {
    title: 'Resources',
    className: 'resources',
    isContentNode: true,
    links: [
      {
        title: 'Token Distribution',
        url: LINKS.tokenSale,
        newTab: true,
      },
      {
        title: 'Whitepaper',
        url: LINKS.whitepaper,
        newTab: true,
      },
      {
        title: 'Github',
        url: LINKS.github,
        newTab: true,
      },
    ]
  },
  {
    title: 'About',
    isContentNode: true,
    className: 'about',
    links: [
      {
        title: 'Company',
        url: LINKS.aboutPage,
        newTab: false,
      },
      {
        title: 'Token',
        url: LINKS.token,
        newTab: false,
      },
      {
        title: 'Blog',
        url: LINKS.medium,
        newTab: true,
      },
      {
        title: 'Contact',
        url: LINKS.contact,
        newTab: true,
      }]
  },
  {
    title: 'Social Media',
    className: 'socialMedia',
    isContentNode: true,
    links: [
    {
      title: 'Telegram',
      url: LINKS.telegram,
      newTab: true,
    },
    {
      title: 'Medium',
      url: LINKS.medium,
      newTab: true,
    },
    {
     title: 'Facebook',
     url: LINKS.facebook,
     newTab: true,
    },
    {
      title: 'Reddit',
      url: LINKS.reddit,
      newTab: true,
    },
    {
      title: 'Twitter',
      url: LINKS.twitter,
        newTab: true,
    }]
  }
];

export const SOCIALS_LIST = [
  { id: 1, name: 'telegram', url: LINKS.telegram},
  { id: 2, name: 'medium', url: LINKS.medium},
  { id: 3, name: 'facebook',  url: LINKS.facebook},
  { id: 4, name: 'reddit', url: LINKS.reddit},
  { id: 5, name: 'twitter', url: LINKS.twitter},
]

export const SOCIALS_ICONS = {
  telegram: <TelegramIcon />,
  medium: <MediumIcon />,
  facebook: <FacebookIcon />,
  reddit: <RedditIcon />,
  twitter: <TwitterIcon />
}
