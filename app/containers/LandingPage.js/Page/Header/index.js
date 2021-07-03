
import React from "react"
import { Fade } from '@material-ui/core';
import messages from './messages';
import H2 from 'components/H2';
import H1 from 'components/H1';
import A from 'components/A';

const Header = () => {
    return (
        <div className="section" id="home">
            <div className="container">
                <div className="header-wrapper">
                    <Fade bottom>
                        <H2>
                            <FormattedMessage {...messages.greetingMessage} />
                        </H2>
                    </Fade>
                    <Fade bottom cascade>
                        <div className="heading-wrapper">
                            <H1>
                                <FormattedMessage {...messages.lineOneMessage} />
                            </H1>
                            <H1>
                                <FormattedMessage {...messages.lineTwoMessage} />
                            </H1>
                            <H1>
                                <FormattedMessage {...messages.lineThreeMessage} />
                            </H1>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <p> <FormattedMessage {...messages.bodyMessage} /></p>
                    </Fade>
                    <Fade bottom>
                        <A
                            href={`mailto:${
                                "felix011018@gmail.com"
                                }`}
                            className="primary-btn"
                        >
                            CONNECT WITH ME
            </A>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Header