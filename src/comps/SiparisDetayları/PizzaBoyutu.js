import React from 'react';

const HamurBoyutu = ({ secilenBoyut, setSecilenBoyut }) => {
  const sizeOptions = [
    { name: "S", value: "Küçük Boy (S)" },
    { name: "M", value: "Orta Boy (M)" },
    { name: "L", value: "Büyük Boy (L)" },
  ];

  const handleSizeSelection = (value) => {
    setSecilenBoyut(prevSize => prevSize === value ? '' : value);
  };

  return (
    <div>
      {sizeOptions.map((option) => (
        <input
          key={option.value}
          onClick={() => handleSizeSelection(option.value)}
          style={{
            backgroundColor: secilenBoyut === option.value ? "red" : "",
          }}
          type="button"
          value={option.name}
        />
      ))}
    </div>
  );
};

export default HamurBoyutu;