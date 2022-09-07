import photo from './profile.jpg';
import './UserDetails.css';
import { useLocation,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const UserDetails =(props)=>{
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location)
    let name = (location.state.data.name).split(' ');
    let firstName = name[0];
    let lastName = name[1];

    return<div>
<p>welcome to user details page</p>
<div className="row">
    <div className="col-sm-6">
    <img src={photo} alt="data"></img>
    </div>
    <div className="col">
<form>
  <div className="form-group row ">
    <label className="col-sm-2 col-form-label">First Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control " id="firstName" value={firstName}
      disabled ="true" />
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Last Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="lastName" value={lastName}
      disabled ="true" />
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Email </label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="email" value={location.state.data.email}  disabled="true"/>
    </div>
  </div>


  </form>
  </div>
  </div>
  <div className='col-sm-5 back'>
<Button variant="secondary" onClick={() => navigate(-1)}>Back</Button>{' '}
</div>
    </div>

}

export default UserDetails;