import { useEffect, useState } from 'react'
import Header from './Header.tsx'
import Card from './Card.tsx'
import Modal from './Modal.tsx'
import './App.css'
import type { RawLocationsData, LocationsData } from '.';


function App() {
  const [data, setData] = useState([])
  const [modalData, setModalData] = useState({} as LocationsData)
  const [openModal, setOpenModal] = useState(false)

  const cardToApp = (cardData: LocationsData) => {
    setModalData(cardData);
  }

  const closeModal = () => {
    setOpenModal(() => false)
  }

  const listItems = data.map((item: RawLocationsData) => 
    <li key={item.id} onClick={() => setOpenModal(() => true)}>
      <Card
        data={item}
        cardToApp={cardToApp}
      >
      </Card>
    </li>
  );

  useEffect(() => {
    fetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      <Header></Header>
      <Modal modalData={modalData} opened={openModal} closeModal={closeModal}></Modal>
      <ul className="list">
        {listItems}
      </ul>
    </>
  )
}

export default App;
