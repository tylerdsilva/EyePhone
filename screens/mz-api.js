fetch('name', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    diameter: "diameter",
    units: "mm",
    constriction_velocity: "constriction_velocity",
    units: "mm/s",
  })
});