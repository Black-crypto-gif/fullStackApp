import React from 'react'
import { FaTrash } from 'react-icons/fa'
import  { useMutation } from '@apollo/client'
import { DELETE_CLIENTS } from '../mutations/ClientMutation'
import { GET_CLIENTS } from '../queries/ClientQuery'

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENTS,{
      variables:{id:client.id},
      /* refetchQueries:[{
            query:GET_CLIENTS
      }] */
      update(cache,
        {data:{deleteClient}}){
        const {clients} = cache.readQuery({query:GET_CLIENTS})
        cache.writeQuery({
            query:GET_CLIENTS,
            data:{ clients: clients.filter(c=>c.id !== deleteClient.id) }
        })
        }
  });
  return (
    <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
            <button className="btn btn-danger btn-sm" onClick={deleteClient}>
                <FaTrash />
            </button>
        </td>
    </tr>
  )
}
