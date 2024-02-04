import React from 'react';
import Carditem from './Carditem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem src='images/img-9.jpg'
                    text='explore the hidden waterfall depp inside the amazon junglr '
                    label='Adverture'
                    paths='/services'
                    />
                    <Carditem src='images/img-2.jpg'
                    text='Travel through the island of bali '
                    label='Luxury'
                    paths='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <Carditem src='images/img-4.jpg'
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Adventure'
                    paths='/services'
                    />
                    <Carditem src='images/img-3.jpg'
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    paths='/services'
                    />
                    <Carditem src='images/img-8.jpg'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adrenaline'
                    paths='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
