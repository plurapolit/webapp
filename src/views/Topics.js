import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import NavBar from '../components/Navbar/Navbar';

const styles = {
  container: css({
    maxWidth: 1200,
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 20,
  }),
  topicContainer: css({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 30,
    border: '2px solid orangered',
    width: '100%',
  }),
  topicHeader: {},
};

const Topics = () => {
  const topicsInfo = [
    {
      category: 'Außenpolitik',
      panelCount: 1,
      title: 'Mission in Nordsyrien',
      description:
        'Sollte Deutschland sich an einer militärischen Mission in Nordsyrien mit eigenen Soldaten beteiligen?',
      image:
        'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
    {
      category: 'Klima',
      panelCount: 2,
      title: 'Subventionen für fossile Energieträger',
      description:
        'Sollten die existierenden Subventionen für fossile Energieträger aufgehoben werden?',
      image:
        'https://images.unsplash.com/photo-1523848309072-c199db53f137?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80https://images.unsplash.com/photo-1523848309072-c199db53f137?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
    {
      category: 'Gesellschaft',
      panelCount: 1,
      title: 'Meinungsfreiheit',
      description: 'Ist die Meinungsfreiheit in Deutschland bedroht?',
      image:
        'https://images.unsplash.com/photo-1554703869-5d9a78223f88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PluraPolit | Immer am Puls der Zeit</title>
        <link rel="canonical" href="https://plurapolit.de/topics/" />
        <meta name="description" content="..." />
      </Helmet>
      <NavBar />
      <div {...styles.container}>
        {topicsInfo.map((topic) => (
          <Link to="/this-shit-works/" {...styles.topicContainer}>
            <div {...styles.topicHeader}>
              <h1 {...styles.topicHeadline}>{topic.category}</h1>
              <p {...styles.topicPanelsCount}>{topic.panelCount}</p>
            </div>
            <div {...styles.topicDescription}>
              <h2 {...styles.topicDescHeadline}>{topic.title}</h2>
              <p {...styles.topicDescText}>{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topics;
