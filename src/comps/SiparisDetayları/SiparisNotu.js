import React from 'react'
import './css/SiparisNotu.css'
const SiparisNotu = ({siparisNotu, setSiparisNotu}) => {

  const siparisNotunuGuncelle = (event) => {
      setSiparisNotu(event.target.value);
  }

  return (
      <div id='SiparisNotu'>
            <div id='SiparisNotuText'><label>Sipariş Notu</label></div>
            <div id='SiparisNotuİnput'><textarea placeholder="Siparişine eklemek istediğin bir not var mı?" type="text" value={siparisNotu} onChange={siparisNotunuGuncelle} /></div>
      </div>
  )
}
export default SiparisNotu;
