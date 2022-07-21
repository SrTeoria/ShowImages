import { useState } from "react"
import axios from 'axios'
import './styles.css'



export const UserProfile = () => {
  const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData(e.target)

      const data = {
        image: formData.get('image'),
        description: formData.get('description')
      }

      await axios({
        method: 'POST',
        baseURL: import.meta.env.VITE_SERVER_URL,
        url: '/publications',
        data,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(console.log)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="userProfile">
      <h1>User profile</h1>
      <form className="uploadImage" onSubmit={handleSubmit}>
        <label className="inputs" htmlFor="avatar"><strong>Seleccione la foto a subir</strong></label>
        <input
          type="file"
          id="avatar"
          className="inputs"
          name="image"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            const [file] = e.target.files

            if (file) {
              const url = URL.createObjectURL(file)
              setImage(url)
            } else {
              setImage(null)
            }
          }} />
        {image && <img className="inputs" width={400} src={image} alt="image" />}
        <label className="inputs" >
          <strong>Descripcion</strong>
          <input
            className="inputs"
            type="text"
            name="description"
          />
        </label>
        <button type="submit" className="btn btn-primary mt-3">Guardar</button>
      </form>
    </div>
  )
}