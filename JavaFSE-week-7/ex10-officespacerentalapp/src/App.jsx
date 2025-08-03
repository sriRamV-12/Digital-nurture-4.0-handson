const officeSpaces = [
  {
    name: "CoWork Zone",
    rent: 50000,
    address: "Bangalore"
  },
  {
    name: "WorkHub",
    rent: 75000,
    address: "Mumbai"
  },
  {
    name: "StartupNest",
    rent: 60000,
    address: "Hyderabad"
  },
  {
    name: "OfficePlus",
    rent: 90000,
    address: "Chennai"
  }
];

function App() {
  const headingStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px"
  };

  const imgStyle = {
    display: "block",
    margin: "0 auto",
    width: "200px"
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={headingStyle}>Office Space Rental App</h1>

      <img
        src="https://via.placeholder.com/200x100.png?text=Office+Space"
        alt="Office"
        style={imgStyle}
      />

      <h2 style={{ marginTop: "20px" }}>Available Spaces</h2>

      {officeSpaces.map((office, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <p>
            <strong>Name:</strong> {office.name}
          </p>
          <p>
            <strong>Rent:</strong>{" "}
            <span style={{ color: office.rent < 60000 ? "red" : "green" }}>
              ₹{office.rent}
            </span>
          </p>
          <p>
            <strong>Address:</strong> {office.address}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
