import React from 'react';
import { FormattedMessage } from 'react-intl';
import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';
import Copyright from '../Copyright';

const Footer = () => (
  <Wrapper>
    <section>
      <Copyright />
    </section>

    <section>
      <FormattedMessage
        {...messages.authorMessage}
        values={{
          author: <A href="https://twitter.com/">Felix Wong</A>,
        }}
      />
    </section>
  </Wrapper>
);

export default Footer;
