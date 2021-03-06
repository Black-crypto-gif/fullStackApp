import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_CLIENT } from '../mutations/ClientMutation'
import { GET_CLIENTS } from '../queries/ClientQuery'
import { FaUser } from 'react-icons/fa'
import swal from 'sweetalert'


export default function AddClientModal() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: { name, email, phone },
        update(cache, { data: { addClient } }) {
            const { clients} = cache.readQuery({ query: GET_CLIENTS });
            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: clients.concat([addClient]) }
            })
        }
    })
    const onSubmit = (e) =>{
        e.preventDefault();
        if(name ==='' || email === '' || phone === ''){
            swal('Error', 'Please fill all the fields', 'error')
        }
        else{
            swal('Success', 'Client added successfully', 'success')
        }
        addClient(name, email, phone);
        setName('');
        setEmail('');
        setPhone('');
    }
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
                            <form onSubmit={onSubmit}>
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
                                    id='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label"></label>
                                    <input type="tel" className="form-control"
                                    id='phone'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Phone" />
                                </div>
                                <button type="submit"
                                data-bs-dismiss="modal" className="btn btn-secondary">
                                    Submit
                                </button>



                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
