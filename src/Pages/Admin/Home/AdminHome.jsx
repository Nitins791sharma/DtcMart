import React from 'react'

import Sidebar from '../../Components/Sidebar'
import { Link } from 'react-router-dom'
export default function AdminHome() {
    return (
        <>
            <div className="conatiner-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/img/noimage.png" height={475} width="100%" alt="" />
                            </div>
                            <div className="col-md-6">
                                <h5 className='bg-primary text-light text-center p-2'>Admin</h5>
                                <table className='table table-bordered'>
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>Nitin kumar</td>
                                        </tr>
                                        <tr>
                                            <th>User Name</th>
                                            <td>nitin</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>nitinkumar@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>9999999999</td>
                                        </tr>
                                        <tr>
                                            <th>Role</th>
                                            <td>Admin</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}><Link to="/update-profile" className='btn btn-primary p-2 w-100 btn-sm'>Update Profile</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
