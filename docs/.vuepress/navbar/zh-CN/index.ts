import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  '/zh/',
  {
    text: '烂笔头',
    icon: 'lead-pencil',
    prefix: '/zh/note/',
    children: [
      { text: '软考', icon: 'certificate', link: 'QCCSTP/' },
      { text: 'Web 开发', icon: 'web', link: 'front-end/' },
      { text: '服务端开发', icon: 'server', link: 'back-end/' },
      { text: '软件工具', icon: 'toolbox', link: 'tools/' },
      { text: '软件设计', icon: 'palette', link: 'design/' },
    ],
  },
  { text: '手把手', icon: 'sign-language', link: '/zh/step-by-step/' },
  { text: '链接', icon: 'link-variant', link: '/zh/links/' },
]);
