import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { FaUser } from 'react-icons/fa'

export default function AddClientModal() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <>

            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addClientModal">
                <div className="d-flex align-items center">
                    <FaUser className='icon'/>
                    <div>
                        Add Client
                    </div>
                </div>
            </button>


            <div className="modal fade" id="addClientModal" aria-labelledby="addClientModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addClientModalLabel">Add Client</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label"></label>
                                    <input type="text" className="form-control"
                                    id='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label"></label>
                                    <input type="text" className="form-control"
                                    id='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label"></label>
                                    <input type="text" className="form-control"
                                    id='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name" />
                                </div>



                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
