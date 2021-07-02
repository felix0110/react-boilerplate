
/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.container.LandingPage.Page.Header';

export default defineMessages({
    greetingMessage: {
        id: `${scope}.greeting.message`,
        defaultMessage: `Hi, I'm Felix Wong ${" "} 👋 `,
    },
    lineOneMessage: {
        id: `${scope}.lineOne.message`,
        defaultMessage: `Building digital`,
    },
    lineTwoMessage: {
        id: `${scope}.lineTwo.message`,
        defaultMessage: `products, brands`,
    },
    lineThreeMessage: {
        id: `${scope}.lineThree.message`,
        defaultMessage: `and experience`,
    },
    bodyMessage: {
        id: `${scope}.body.message`,
        defaultMessage: `and experience`,
    },
    mailMessage: {
        id: `${scope}.mail.message`,
        defaultMessage: `and experience`,
    }
});
