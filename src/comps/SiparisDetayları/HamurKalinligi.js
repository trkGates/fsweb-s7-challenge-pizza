import React from 'react'
import './css/HamurKalinligi.css'
const HamurKalinligi = ({seciliHamur,setSeciliHamur}) => {

  const hamurSeciminiDegistir = (event) => {
    setSeciliHamur(event.target.value);
  }

  return (
    <div id='HamurKalinligi-Main'>
      <div>
      <label htmlFor="hamur-kalinligi">Hamur Seç</label>
      </div>
      <div>
      <select name="hamur-kalinligi" id="hamur-kalinigi" value={seciliHamur} onChange={hamurSeciminiDegistir}>
        <option value="İnce">İnce</option>
        <option value="Normal">Normal</option>
        <option value="Kalın">Kalın</option>
      </select>
      </div>
    </div>
  )
}

export default HamurKalinligi
