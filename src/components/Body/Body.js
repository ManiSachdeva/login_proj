import './Body.css';
import Info from '../Info/Info'
import Line from '../Line/Line'
import Login from '../Login/Login'
function Body() {
  return (
    <div>
      <Login input1 = "USERNAME" input2 = "PASSWORD" checkbox = "REMEMBER USER" submitButton = "SIGN IN"/>
      <Line />
      <Info />
    </div>
  );
}
export default Body;
