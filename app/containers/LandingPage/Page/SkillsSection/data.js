import { FormattedMessage } from 'react-intl';
import React from 'react';
import htmlIcon from '../../../../images/icon/html.svg';
import cssIcon from '../../../../images/icon/css.svg';
import reactIcon from '../../../../images/icon/react.svg';
import jsIcon from '../../../../images/icon/javascript.svg';
import designIcon from '../../../../images/icon/design.svg';
import codeIcon from '../../../../images/icon/code.svg';
import messages from './messages';

const data = [
  {
    id: 1,
    img: htmlIcon,
    para: <FormattedMessage {...messages.paraOneMessage} />,
  },
  {
    id: 2,
    img: cssIcon,
    para: <FormattedMessage {...messages.paraTwoMessage} />,
  },
  {
    id: 3,
    img: jsIcon,
    para: <FormattedMessage {...messages.paraThreeMessage} />,
  },
  {
    id: 4,
    img: reactIcon,
    para: <FormattedMessage {...messages.paraFourMessage} />,
  },
  {
    id: 5,
    img: designIcon,
    para: <FormattedMessage {...messages.paraFiveMessage} />,
  },
  {
    id: 6,
    img: codeIcon,
    para: <FormattedMessage {...messages.paraSixMessage} />,
  },
];

export default data;
