import React, { useState, useEffect, useCallback } from 'react'
import './styles.css'

export const ImagesList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImages()
  }, [])

  const loadImages = useCallback(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/publications`)
      .then(response => response.json())
      .then(setImages)
  }, [])

  const deleteImage = useCallback((id) => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/publications`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
      .then(() => {
        loadImages()
      })
  }, [])

  return (
    <>
      <h1 className='titleList'>Listado de objetos</h1>

      <ul className='orderList'>
        {images.map(({ _id, image, description }) => (
          <li className="card" key={_id}>
            <figure className='figureCard'>
              <img className="imageCard" src={image} alt={description} width="400px" />

              <figcaption>{description}</figcaption>

              <button className="btn btn-primary" type="button" onClick={() => deleteImage(_id)}>Delete</button>
            </figure>
          </li>
        ))}
      </ul>
    </>
  )
}
