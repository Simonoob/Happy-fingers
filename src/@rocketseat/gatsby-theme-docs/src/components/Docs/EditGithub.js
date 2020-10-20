/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { MdEdit } from 'react-icons/md';
import { useTheme } from 'emotion-theming';

export default function EditGithub({ githubEditUrl }) {
  const theme = useTheme();

  if (githubEditUrl) {
    return (
      <div></div>
    );
  }
  return null;
}

EditGithub.propTypes = {
  githubEditUrl: PropTypes.string,
};

EditGithub.defaultProps = {
  githubEditUrl: null,
};