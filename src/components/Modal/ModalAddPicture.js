import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Context } from '../Store'

export const ModalAddPicture = ({ handleShow }) => {
  const { show } = useContext(Context)

  return (
    <Modal show={show} onHide={handleShow} animation={true}>
      <Modal.Body>
        <span className="btn">
          Add Picture
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleShow}>
          Close
          </Button>
        <Button variant="primary" onClick={handleShow}>
          Save Changes
          </Button>
      </Modal.Footer>
    </Modal>
  )
}
