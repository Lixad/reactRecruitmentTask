import { useEffect, useState } from 'react';
import * as dayjs from 'dayjs';
import Views from './assets/Views.svg'
import Users from './assets/Users.svg'
import Timezone from './assets/Timezone.svg'
import Edit from './assets/Edit.svg'
import './Card.css'
import type { RawLocationsData, LocationsData } from '.';

function Card({ data, cardToApp }: { data: RawLocationsData, cardToApp: (x: LocationsData) => void }) {
  const [views, setViews] = useState(0);

  const clickHandler = () => setViews(views => views + 1);

  useEffect(() => {
    cardToApp({ ...data, views });
  }, [views])

  return (
    <>
      <div className="wrapper" onClick={clickHandler}>
        <div className='edit-wrapper'>
          <img src={Edit} className='edit-icon'></img>
        </div>
        <h3>{data.name}</h3>
        <div className='text-wrapper'>
          <img src={Users} alt="Users" className='icon'></img>
          <span>{data.userCount} users</span>
        </div>
        <div className='text-wrapper'>
          <img src={Timezone} alt="Timezone" className='icon'></img>
          <span>{dayjs(data.createdAt).format('h:mma ([GMT] Z)')}</span>
        </div>
        <div className='text-wrapper'>
          <img src={Views} alt="Views" className='icon'></img>
          <span>{views} {views === 1 ? 'view' : 'views'}</span>
        </div>
      </div>
    </>
  )
}

export default Card;
