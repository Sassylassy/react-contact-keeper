import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Some Name',
        email: 'sn@test.com',
        phone: '111-111',
        type: 'proffessional'
      },
      {
        id: 2,
        name: 'Some Name2',
        email: 'sn2@test.com',
        phone: '111-111',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Some Name3',
        email: 'sn3@test.com',
        phone: '111-111',
        type: 'proffessional'
      }
    ]
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contact

  // Clear filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
