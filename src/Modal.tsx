import * as dayjs from 'dayjs';
import Close from './assets/Close.svg';
import Views from './assets/Views.svg'
import Users from './assets/Users.svg'
import Timezone from './assets/Timezone.svg'
import './Modal.css';
import type { LocationsData } from '.';

function Modal({ modalData, opened, closeModal }: { modalData: LocationsData, opened: boolean, closeModal: () => void}) {

  return (
    <div className={opened ? 'active' : ''}>
      <div className='modal-back'>
        <div className='modal-wrapper'>
          <img src={Close} alt="Close" className='close-btn' onClick={closeModal}></img>
          <div className='name'>{modalData.name}</div>
          <div className='text-wrapper m-t-15'>
          <img src={Users} alt="Users" className='icon'></img>
            <span>{modalData.userCount} users</span>
          </div>
          <div className='text-wrapper'>
            <img src={Timezone} alt="Timezone" className='icon'></img>
            <span>{dayjs(modalData.createdAt).format('h:mma ([GMT] Z)')}</span>
          </div>
          <div className='text-wrapper'>
            <img src={Views} alt="Views" className='icon'></img>
            <span>{modalData.views} {modalData.views === 1 ? 'view' : 'views'}</span>
          </div>
          <div>
            <span className='desc-title'>Description</span>
            <p className='desc'>{modalData.description}</p>
          </div>
          <button type='button' className='btn' onClick={closeModal}>Done</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;
