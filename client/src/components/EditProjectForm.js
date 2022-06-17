import { useMutation } from '@apollo/client'
import React from 'react'
import { useState } from 'react'
import { GET_PROJECT } from '../queries/ProjectQueries'
import swal from 'sweetalert'
import { UPDATE_PROJECT } from '../mutations/ProjectMutations'


export default function EditProjectForm({ project }) {
    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [status, setStatus] = useState('');

    const [updateProject] = useMutation(UPDATE_PROJECT, {
        variables: { id: project.id, name, description, status },
        refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
    })

    const onSubmit = (e) => {
        e.preventDefault();
        if (name === '' || description === '' || status === '') {
            swal('Error', 'Please fill all the fields', 'error')
        } else {
            swal('Success', 'Project updated successfully', 'success')
        }
        updateProject( name, description, status );
    }
    return (
        <div className="mt-5">
            <h3>Update Project Details</h3>
            <form onSubmit={ onSubmit }>
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
                    <textarea className="form-control"
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description">
                    </textarea>

                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Status</label>
                    <select id="status" className="form-select" value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button className="btn btn-primary" type='submit'>
                    Update
                </button>
            </form>
        </div>
    )
}
