import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';

import Wrapper from './Wrapper';
import messages from './messages';
import Copyright from '../Copyright';

function Footer() {
  return (
    <Wrapper>
      <section>
        <Copyright />
      </section>

      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
