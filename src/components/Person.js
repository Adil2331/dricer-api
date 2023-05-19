import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../data/FetchData';
import './Person.css';

function Person() {
  const drivers = JSON.parse(localStorage.getItem('drivers'));

  const params = useParams();

  const driverOne = drivers.find((driver) => {
    console.log('driver', driver);
    console.log('params', params);
    return driver.driverId === params.driverId && driver;
  });
  console.log('dri', driverOne);

  return (
    <>
      <div className="person">
        <h2>
          Name: {driverOne.givenName} {driverOne.familyName}
        </h2>
        <h2>Date of birth: {driverOne.dateOfBirth}</h2>
        <h3>Nationality: {driverOne.nationality}</h3>
        <a href={driverOne.url} target="_blank">
          Full information can be found here: {driverOne.url}
        </a>
      </div>
      {/* <button className='person-btn'>Back</button> */}
      <Link className="person-btn" to="/about">
        Back
      </Link>
    </>
  );
}

export default Person;
