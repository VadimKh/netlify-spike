import PropTypes from 'prop-types';
import React from 'react';

export default function Preview({ value }) {
  const select = value.select;
  if(!value)
    return null;

  switch (select) {
      case 1:
        return <img src={value.image} />
      case 2: 
        return <div>{ value.test } + { value.value } + { value.select }</div>
  }
}

Preview.propTypes = {
  value: PropTypes.node,
};
