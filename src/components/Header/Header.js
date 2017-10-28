/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Row className="show-grid">
            <Col xs={6} md={4} className="logo-container">
                <img src="group-6.png" className={s.logo} />
            </Col>
            <Col xs={6} md={4} className={s.mainlinks}>
              <ul>
                <li className={s.active}><a href="#">Reports</a></li>
                <li><a href="#">Analysis</a></li>
              </ul>
            </Col>
            <Col xsHidden md={4} className={s.menuRight}>
              <a className={s.topActionButton} href=""><img src="bulb-icon.png" /></a>
              <input type="text" placeholder="Type the analysis, report or student name" className={s.topSearch} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
