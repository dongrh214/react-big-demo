import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.less'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <div className="header">标题</div>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
);
PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout
