import React from 'react'
import PropTypes from 'prop-types'

export const HomeSlider = ({ homeData, increment, doubleAsync }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>homeData: {homeData}</h2>
    <button className='btn btn-primary' onClick={increment}>
      Increment
    </button>
      {' '}
    <button className='btn btn-secondary' onClick={doubleAsync}>
      Double (Async)
    </button>
  </div>
);
HomeSlider.propTypes = {
  homeData: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
};

export default HomeSlider
