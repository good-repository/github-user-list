import React from 'react';
import PropTypes from 'prop-types';

import { Browser } from './styles';

export default function Repository(repo) {
  const { repository } = repo.route.params

  return <Browser source={{ uri: repository.html_url }} />;
}

Repository.propTypes = {
  route: PropTypes.shape().isRequired,
};