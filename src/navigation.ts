import {getPermalink, getBlogPermalink, getAsset} from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '全部文章',
      href: getBlogPermalink(),
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    {ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml')},
  ],
  footNote: ``,
};
