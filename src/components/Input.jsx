import { useState } from "react";
import Button from "./Button";

const Input = ({name, password, setName, setPassword}) => {
  const [boton, setBoton] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(false);

  const showButton = (e) => {
    if (e.target.value === "252525") {
      setBoton(true);
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Validar datos */

    if (name === "") {
      setError(true);
      return;
    }
    setData(true);
  };

  const handleReset = () => {
    setName("");
    setPassword("");
    setBoton(false);
    setData(false);
    setError(false);
  };

  return (
    <div>
      {error && <h2 className="text-danger">Debe ingresar un Nombre</h2>}
      <form
        className="d-flex flex-column form-control w-100"
        action=""
        onChange={showButton}
        onSubmit={handleSubmit}
      >
        <label htmlFor="" className="form-label">
          Nombre:
        </label>
        <input
          type="text"
          name="name"
          placeholder="Ingrese Nombre"
          id="inptName"
          className="form-control"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="" className="form-label">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="inptPass"
          className="form-control"
          placeholder="Ingrese Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="reset"
          className="my-2 btn btn-warning"
          onClick={handleReset}
        >
          Limpiar
        </button>
        {boton && <Button />}
      </form>
      {data && (
        <h2 className="text-success">
          Los datos ingresados son: Nombre-{name} y Password-
          {password}
        </h2>
      )}
    </div>
  );
};

export default Input;
