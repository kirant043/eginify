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
import s from './Inner-Header.scss';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Select from 'react-select';
import { Dropdown } from 'semantic-ui-react';

var academicYear = [
  { key: '2016-2017', value: '2016-2017', text: '2016-17' },
  { key: '2015-2016', value: '2015-2016', text: '2015-16' },
  { key: '2014-2015', value: '2014-2015', text: '2014-15' }
];
const testNames = [
  { key: 'All', text: 'All', value: 'All' },
  { key: 'JEE Test Series 1', text: 'JEE Test Series 1', value: 'JEE Test Series 1' },
  { key: 'JEE Test Series 2', text: 'JEE Test Series 2', value: 'JEE Test Series 2' },
  { key: 'JEE Test Series 3', text: 'JEE Test Series 3', value: 'JEE Test Series 3' },
  { key: 'Sample Test', text: 'Sample Test', value: 'Sample Test' },
  { key: 'JEE Test Series 11', text: 'JEE Test Series 1', value: 'JEE Test Series 1' },
  { key: 'Wednesday Surpri… ', text: 'Wednesday Surpri… ', value: 'Wednesday Surpri… ' },
  { key: 'JEE Test Series 4', text: 'JEE Test Series 4', value: 'JEE Test Series 4' }
]
const campusNames = [
  { key: 'All', text: 'All', value: 'All' },
  { key: 'Hyderabad', text: 'Hyderabad', value: 'Hyderabad' },
  { key: 'Vijayawada 1', text: 'Vijayawada 1', value: 'Vijayawada 1' },
  { key: 'Vijayawada 2', text: 'Vijayawada 2', value: 'Vijayawada 2' },
  { key: 'Vijayawada 3', text: 'Vijayawada 3', value: 'Vijayawada 3' }
]
const sectionNames = [
  { key: 'All', text: 'All', value: 'All' },
  { key: 'Section A', text: 'Section A', value: 'Section A' },
  { key: 'Section B', text: 'Section B', value: 'Section B' },
  { key: 'Section C', text: 'Section C', value: 'Section C' },
  { key: 'Section D', text: 'Section D', value: 'Section D' },
  { key: 'Section E', text: 'Section E', value: 'Section E' }
]
const groupNames = [
  { text: 'All', value: 'All', image: { avatar: true, src: 'group-icon.png' }},
  { text: 'Green', value: 'Green', image: { avatar: true, src: 'group-icon.png' }},
  { text: 'Orange', value: 'Orange', image: { avatar: true, src: 'group-icon.png' }},
  { text: 'Red', value: 'Red', image: { avatar: true, src: 'group-icon.png' }},
]
const students = [
  { key: 'All', text: 'All', value: 'All' },
  { key: 'T20', text: 'T20', value: 'T20' },
  { key: 'T100', text: 'T100', value: 'T100' },
  { key: 'T200', text: 'T200', value: 'T200' },
]

function logChange(val) {
  console.log('Selected: ', val);
}

class Innerheader extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
			disabled: false,
			options: testNames,
			value: 'one',
      removeSelected: true
    });
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange = (e, { name, value }) => {
    //console.log(value);
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Row className="show-grid">
            <Col sm={12} md={7}>
              <div className={s.academicYear}>
                <label>Academic Year</label>
                <Dropdown placeholder='Select Year' fluid selection options={academicYear} className={s.academicYearDropDown}/>
              </div>
              <div className={s.headerDropdown}>
                <label>Test Name</label>
                <Dropdown placeholder='Select Test Name' fluid selection options={testNames} className={`${s.topDropdowns} top-dropdown`}/>
              </div>
              <div className={s.headerDropdown}>
                <label>Campus</label>
                <Dropdown placeholder='Select Campus' fluid selection options={campusNames} className={`${s.topDropdowns} top-dropdown`}/>
              </div>
              <div className={s.headerDropdown}>
                <label>Sections</label>
                <Dropdown placeholder='Select Sections' fluid selection options={sectionNames} className={`${s.topDropdowns} top-dropdown`}/>
              </div>
              <div className={s.headerGroupDropdown}>
                <label>Select Group</label>
                <Dropdown placeholder='Group' fluid selection options={groupNames} onChange={this.handleChange} className={`${s.groupDropdown} group-dropdown`}/>
              </div>
            </Col>
            <Col sm={12} md={5}>
              <div className={s.topSubjects}>
                <label>Subjects</label>
                <div className={s.buttons}>
                  <div className={s.buttonsLinks}>
                    <input type="radio" id="radio1" name="radios" value="all" defaultChecked />
                    <label htmlFor="radio1">All</label>
                  </div>
                  <div className={s.buttonsLinks}>
                    <input type="radio" id="radio2" name="radios" value="false" />
                    <label htmlFor="radio2">Physics</label>
                  </div>
                  <div className={s.buttonsLinks}>
                    <input type="radio" id="radio3" name="radios" value="true" />
                    <label htmlFor="radio3">Chemistry</label>
                  </div>
                  <div className={s.buttonsLinks}>
                    <input type="radio" id="radio4" name="radios" value="true" />
                    <label htmlFor="radio4">Maths</label>
                  </div>
                </div>
              </div>
                <div className={s.headerStudentsDropdown}>
                    <label>Students</label>
                    <img src="star.png" className={s.dropdownImage} />
                    <Dropdown placeholder='All' fluid selection options={students} onChange={this.handleChange} className={`${s.studentsDropdown} students-dropdown`}/>
                </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Innerheader);
