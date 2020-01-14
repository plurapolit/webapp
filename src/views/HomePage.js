/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Player from '../components/Player';

const HomePage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        PluraPolit | Immer am Puls der Zeit
      </title>
      <link rel="canonical" href="https://plurapolit.de" />
      <meta
        name="description"
        content="Find out more about Search Guard features for Elasticsearch like LDAP, Active Directory, Kerberos/SPNEGO, JSON web token, audit logging, Kibana SSO, Kibana multitenancy, field-level security, document-level security, read histroy, write history, audit log event routing and many more."
      />
    </Helmet>
    <NavBar />
    <Player />
    <Footer />
  </div>
);

export default HomePage;
