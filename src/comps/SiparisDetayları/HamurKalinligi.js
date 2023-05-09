import React from 'react'

const HamurKalinligi = ({seciliHamur,setSeciliHamur}) => {

  const hamurSeciminiDegistir = (event) => {
    setSeciliHamur(event.target.value);
  }

  return (
    <div>
      <label htmlFor="hamur-kalinligi">Hamur Kalınlığı:</label>
      <select name="hamur-kalinligi" id="hamur-kalinigi" value={seciliHamur} onChange={hamurSeciminiDegistir}>
        <option value="İnce">İnce</option>
        <option value="Normal">Normal</option>
        <option value="Kalın">Kalın</option>
      </select>
      <p>Seçilen hamur kalınlığı: {seciliHamur}</p>
    </div>
  )
}

export default HamurKalinligi
