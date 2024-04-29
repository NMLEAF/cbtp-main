import React, { useState } from 'react';
import "./GradeFom.css";
import students from '../../../dummy';

const GradeForm = ({selectedId}) => {

    const student = students.slice().find((student) => student.Id === selectedId);


  return (
    <div className="grade-form-container"><form >
      
    <label>
      Test:
      <input
        type="number"
        name=""
        value={student.test}
       
        required
      />
    </label>
    <br />
    <label>
      Mid exam:
      <input
        type="number"
        name=""
        value={student.mid}
        required
      />
    </label>

    <br />
    <label>
      Final exam:
      <input
        type="number"
        name=""
        value={student.final}
        required
      />
    </label>

    <br />
    <label>
      Assignment :
      <input
        type="number"
        name=""
        value={student.assignment}
        required
      />
    </label>

    <br />
    <label>
      Attendance Mark:
      <input
        type="number"
        name=""
        value={student.attendanceMark}
        required
      />
    </label>
    <br />
    <label>
      Result:
      <input
        type="number"
        name="result"
      
        required
      />
    </label>
    <br />
    <button type="submit">Submit</button>
  </form></div>
    
  );
};

export default GradeForm;