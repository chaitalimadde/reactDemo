import './ListUser.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import axios from 'axios';
import {FaMapMarkerAlt} from 'react-icons/fa';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MapWrapper from '../LetCreateMap';
import { NavLink } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const ListUser= ()=>{

    let [responseData, setResponseData] = React.useState('');
    const [show, setShow] = useState(false);
    const [lat, setLat] = useState(10.99835602);
    const [long, setLong] = useState(77.01502627);
    const handleClose = () => setShow(false);
    const handleShow = (e) =>{ setShow(true);
        console.log(e.target.value);
    }

    const formatWithIcon = (col,row) => {
      console.log("user clicked")
      console.log(row);
      setLat(row.address.geo.lat);
      setLong(row.address.geo.lng);
      return(
          <span><FaMapMarkerAlt className='mapColor' onClick={handleShow} /></span>
      )
  }

  const selectRow={
mode:'checkbox'
  }

  const formatWithName = (col,row) =>{
return(
  <NavLink to={'/home/userdetails'} state={{ data: row }}>
          {row.name} </NavLink>
)
  }

   const columns=[
    {
      dataField: 'id',
      text:'ID'
    },
    {
      dataField: 'name',
      text:'Name',
      formatter: formatWithName
    },
    {
      dataField: 'username',
      text:'User Name'
    },
    {
      dataField: 'email',
      text:'Email'
    },
    {
      dataField: 'address.city',
      text:'City'
    },
    {
      dataField: 'address.zipcode',
      text:'Zip-Code'
    },
    {
      dataField: 'map',
      text:'Locate on Map',
      formatter: formatWithIcon,
    }

   ]

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setResponseData(response.data));

    }, [setResponseData, responseData])

// const onItemCheck=(e, item) =>{
//     let tempList = responseData;
//     tempList.map((user) => {
//       if (user.id === item.id) {
//         user.selected = e.target.checked;
//       }
//       return user;
//     });
// }


    return<div className="color">
        <h3>User Manager</h3>
       <BootstrapTable keyField="id" data={responseData} columns={columns} 
       pagination={ paginationFactory({ sizePerPage: 3 }) }
       selectRow={selectRow}
       >
       </BootstrapTable>

       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>See Location on map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{ height: '500px' ,width: '600px' }}>
      
        < MapWrapper lat={lat} long={long}/>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
}


export default ListUser;
