import PropTypes from 'prop-types';
import CMS from 'netlify-cms-app';
import React from 'react';
import Immutable, { Map, List } from 'immutable';

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: {
      select: '',
      preview: 'test value',
      value: ''
    },
  }

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
    } = this.props;

    const SelectControl = CMS.getWidget('select').control;
    const selectProps = { ...this.props };
    selectProps.field = selectProps.field.set('options',
        Immutable.List([
            { label: 'Image', value: 1 },
            { label: 'Input', value: 2 }
        ])
    );
    selectProps.onChange = (currentValue) => {
      onChange(Object.assign({}, value, {
        select: currentValue
      }))
    };


    const ImageControl = CMS.getWidget('image').control;
    const imageProps = { ...this.props };
 
    imageProps.value = value.image;
    imageProps.onChange = (currentValue) => {
      onChange(Object.assign({}, value, {
        image: currentValue
      }))
    };


    selectProps.value = value.select;

    return (
      <>
        <SelectControl {...selectProps} />
        {value.select === 2 &&
          <input
            type="text"
            id={forID}
            className={classNameWrapper}
            value={value.value || ''}
            onChange={e => onChange(Object.assign({}, value, {test: 'super test', value: e.target.value}))}
          />
        }
        {value.select === 1 &&
          <ImageControl {...imageProps}/>
        }
      </>
    );
  }
}