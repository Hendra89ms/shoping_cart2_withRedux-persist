import React from "react";

function Coba() {
  const data = [
    {
      id: 1,
      name: "data1",
      qty: 1,
    },
    {
      id: 2,
      name: "data2",
      qty: 2,
    },
    {
      id: 3,
      name: "data3",
      qty: 3,
    },
  ];

  const totalQty = data.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  console.log(totalQty)

  return (
    <div className="mt-40">
      <h1>Coba Page</h1>
    </div>
  );
}

export default Coba;
