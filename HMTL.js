import React, { Component } from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import { renderToString } from 'react-dom/server';

class Html extends Component {
  render () {
    const {
      title,
    } = this.props;

    const root = renderToString(
      <ReactPhoneInput defaultCountry={'us'} />,
    );

    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <title>{title}</title>
        </head>
        <body>

          <div id="root" dangerouslySetInnerHTML={{__html: root}}/>
        </body>
      </html>
    );
  }
}

export const renderPage = () => {
  const html = renderToString(
    <Html title='React Phone Input 2'/>
  );
return `<!DOCTYPE html>${html}`;
};
