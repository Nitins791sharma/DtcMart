import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Sidebar from '../../Components/Sidebar'

import $ from 'jquery';  // Import jQuery
import 'datatables.net-dt/css/dataTables.dataTables.min.css'; // Import DataTables styles
import 'datatables.net';
export default function AdminMaincategory() {
    let [data, setData] = useState([])

    async function deleteRecord(id) {
        if (window.confirm("Are You Sure!!! You Want to Delete that Item : ")) {
            let response = await fetch(`${process.env.REACT_APP_SERVER}/maincategory/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            getAPIData()
        }
    }

    async function getAPIData() {
        let response = await fetch(`${process.env.REACT_APP_SERVER}/maincategory`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        if (response) {
            setData(response)
            setTimeout(()=>{
                $('#DataTable').DataTable()
            },200)
        }
        else
            alert("Something Went Wrong")
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            <div className="conatiner-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary p-2 text-light text-center'>Maincategory <Link to="/admin/maincategory/create"><i className='fa fa-plus float-end text-light'></i></Link></h5>
                        <div className="table-responsive">
                            <table id="DataTable" className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Pic</th>
                                        <th>Active</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <Link to={item.pic} target='_blank' rel='noreferrer'>
                                                        <img src={`${process.env.REACT_APP_SERVER}/${item.pic}`} height={50} width={80} alt="" />
                                                    </Link>
                                                </td>
                                                <td className={item.active ? "text-success" : "text-danger"}>{item.active ? "Yes" : "No"}</td>
                                                <td><Link to={`/admin/maincategory/update/${item.id}`} className='btn btn-success'><i className='fa fa-edit fs-5'></i></Link></td>
                                                <td><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash fs-5'></i></button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
