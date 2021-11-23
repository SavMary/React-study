// import logo from './logo.png';
import './app-info.css';
const AppInfo = ({ increased, employees }) => {
    // const logo = require('./logo.png');
    return (
        <div className="app-info">
            <h1>Облік працівників в компанії Pied Piper</h1>
            {/* <img className="logo" src={require('./img/pp.png')} alt="logo"/> */}
            <h2>Загальна кількість працівників: {employees} </h2>
            <h2>Премію отримають: {increased}</h2>
        </div>
    )
}
export default AppInfo;