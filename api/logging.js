const winston = require('winston');

winston.loggers.add('development', {
  console: {
    level: 'silly',
    colorize: 'true',
    label: 'development'
  },
  file: {
    filename: '.log/MyFuel.log',
    level: 'warn'
  }
});

winston.loggers.add('production', {
  //   Loggly: {
  //     token: 'YOUR_TOKEN',
  //     subdomain: 'YOUR_SUBDOMAIN'
  //   },
  console: {
    level: 'silly',
    colorize: 'true',
    label: 'production'
  },
  file: {
    filename: '.log/MyFuel.log',
    level: 'warn'
  }
});
