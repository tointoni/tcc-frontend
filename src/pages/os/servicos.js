import React, { useState, useEffect } from "react";

function Service(props) {
  const { onSubmit } = props;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amountPayable, setamountPayable] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        alert('Não foi possível pegar a sua localização, tente novamente.')
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      title,
      description,
      amountPayable,
      latitude,
      longitude
    });
    window.location.reload();

    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="title">Titulo</label>
        <input
          name="title"
          id="title"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="description">Descrição</label>
        <input
          name="description"
          id="description"
          required
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="amountPayable">Valor pretendido a pagar</label>
        <input
          type="number"
          name="amountPayable"
          id="amountPayable"
          value={amountPayable}
          onChange={e => setamountPayable(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            required
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Enviar Solicitação</button>
    </form>
  );
}

export default Service;
