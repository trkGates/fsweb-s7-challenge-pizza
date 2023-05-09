import React from 'react'

const SiparisNotu = ({siparisNotu, setSiparisNotu}) => {

  const siparisNotunuGuncelle = (event) => {
      setSiparisNotu(event.target.value);
  }

  return (
      <div>
          <label>Sipariş Notu:</label>
          <input type="text" value={siparisNotu} onChange={siparisNotunuGuncelle} />
      </div>
  )
}
export default SiparisNotu;
