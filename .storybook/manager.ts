import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    appBg: '#0f0717',
    brandImage: '/static/boilerplate-logo-white.svg',
    textColor: '#fff'
  })
});
