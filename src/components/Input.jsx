import { useState } from "react";
import Button from "./Button";

const Input = (props) => {
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

    if (props.input1 === "") {
      setError(true);
      return;
    }
    setData(true);
  };

  const handleReset = () => {
    props.setState1("");
    props.setState2("");
    setBoton(false);
    setData(false);
    setError(false);
  };

  return (
    <div>
      {error ? <h2 className="text-danger">Debe ingresar un Nombre</h2> : null}
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
          value={props.input1}
          onChange={(e) => {
            props.setState1(e.target.value);
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
          value={props.input2}
          onChange={(e) => {
            props.setState2(e.target.value);
          }}
        />
        <button
          type="reset"
          className="my-2 btn btn-warning"
          onClick={handleReset}
        >
          Limpiar
        </button>
        {boton ? <Button /> : null}
      </form>
      {data ? (
        <h2 className="text-success">
          Los datos ingresados son: Nombre-{props.input1} y Password-
          {props.input2}
        </h2>
      ) : null}
    </div>
  );
};

export default Input;
