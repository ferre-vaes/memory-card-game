import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import { createClient } from 'pexels'
import './Board.css';
import getImages from '../../images';
import shuffle from '../../utils';

const Board = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      //const client = createClient(process.env.REACT_APP_PEXEL_API_KEY)
      //let query = 'Nature'
      //const {photos} = await client.photos.search({ query, per_page: 8 })
      const photos = getImages()
      let shuffledPhotos = shuffle([...photos, ...photos])
      setImages(shuffledPhotos)
    }

    fetchImages()
  }, [setImages])

  return (
    <div className='board round'>
      {images && images.length && images.map((photo) => (
        <Card imageUrl={photo.src.medium} id={photo.id} />
      ))}
    </div>
  )
}

export default Board
