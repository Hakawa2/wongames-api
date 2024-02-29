import Icon from './extensions/icon.png'
import Logo from './extensions/logo.svg'


export default {
  config: {
    auth: {
      logo: Logo
    },
    head: {
      favicon: Icon,
    },
    loacales: [],
    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to Won Games!',
        'Auth.form.welcome.subtitle': 'Log in to your account',
        'app.components.LeftMenu.navbrand.titel': 'Dashboard'
      }
    },
    menu: {
      logo: Icon
    }
  },
  bootstrap() {},
};
