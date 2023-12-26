import React from "react";

const contentContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "100px",
};

const listContainerStyle = {
  width: "40%",
};

const imageStyle = {
  width: "30%",
  height: "auto",
  marginBottom: "100px",
};

const Sucursales = () => {
  return (
    <div>
      <div style={contentContainerStyle}>
        <div style={listContainerStyle}>
          <h1>Sucursales</h1>
          <ul>
            <li className="tweet-card">
              <div className="user-info">
                <div>
                  <strong>Chaco/Resistencia</strong>
                  <p style={{ margin: 0 }}>- Direccion: Av. 9 de Julio 302</p>
                  <p style={{ margin: 0 }}>
                    - Horarios:
                    <ul>
                      <li>Lunes de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.</li>
                      <li>
                        Martes de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>
                        Miercoles de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>
                        Jueves de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>
                        Viernes de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>
                        Sabado de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>Domingo cerrado.</li>
                    </ul>
                  </p>
                  <p style={{ margin: 0 }}>
                    - Telefono: (0362) 4427333-4437111-44
                  </p>
                </div>
              </div>
              <p className="tweet-content"></p>
            </li>
            <li className="tweet-card">
              <div className="user-info">
                <div>
                  <strong>Chaco/Resistencia</strong>
                  <p style={{ margin: 0 }}>- Direccion: Av. Sarmiento 2610</p>
                  <p style={{ margin: 0 }}>
                    - Horarios:
                    <ul>
                      <li>Lunes de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.</li>
                      <li>
                        Martes de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>
                        Miercoles de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>
                        Jueves de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>
                        Viernes de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>
                        Sabado de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>Domingo cerrado.</li>
                    </ul>
                  </p>
                  <p style={{ margin: 0 }}>
                    - Telefono: (0362) 4427333-4437111-44
                  </p>
                </div>
              </div>
              <p className="tweet-content"></p>
            </li>
            <li className="tweet-card">
              <div className="user-info">
                <div>
                  <strong>Chaco/Resistencia</strong>
                  <p style={{ margin: 0 }}>
                    - Direccion: Juan Domingo Perón 201
                  </p>
                  <p style={{ margin: 0, marginBottom: "100px" }}>
                    - Horarios:
                    <ul>
                      <li>Lunes de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.</li>
                      <li>
                        Martes de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>
                        Miercoles de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>
                        Jueves de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>
                        Viernes de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>
                        Sabado de 08:00 a 12:30 hs. y de 16:30 a 20:30 hs.
                      </li>
                      <li>Domingo cerrado.</li>
                    </ul>
                    <p style={{ margin: 0 }}>
                      - Telefono: (0362) 4427333-4437111-44
                    </p>
                  </p>
                </div>
              </div>
              <p className="tweet-content"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Sucursales };
