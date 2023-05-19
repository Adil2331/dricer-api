
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import './About.css';

function About() {
  //   const [drivers, setDrivers] = useState([]);
  //   useEffect(() => {
  //     const init = async () => {
  //       const driverList = await fetchData();
  //       setDrivers(driverList);
  //     };
  //     init();
  //   }, []);
  const drivers = JSON.parse(localStorage.getItem('drivers'));
  console.log(drivers);

  return (
    <div className="about">
      <Menu />
      <h1>All Person</h1>
      {drivers.map((driver) => (
        <NavLink
          className="about-link"
          key={driver.driverId}
          to={driver.driverId}
        >
          {driver.givenName}
        </NavLink>
      ))}
    </div>
  );
}

export default About;
