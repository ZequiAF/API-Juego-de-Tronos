import React from "react";
import { useRouteError } from "react-router-dom";

// PROP TYPES!
import PropTypes from 'prop-types';
// DECLARAMOS LO QUE VA A HACER LA PROPTYPE
const Header1 = ({label}) => <h1>{label}</h1>
const Header2 = ({label}) => <h2>{label}</h2>
const Header3 = ({label}) => <h3>{label}</h3>
const Paragrhafing = ({label}) => <p>{label}</p>
// DECIMOS QUE SEA STRING REQUERIDO
Header1.propTypes = {
  label: PropTypes.string.isRequired
}
Header2.propTypes = {
  label: PropTypes.string.isRequired
}
Header3.propTypes = {
  label: PropTypes.string.isRequired
}
Paragrhafing.propTypes = {
  label: PropTypes.string.isRequired
}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  //ARREGLAR ERROR
  return (
    <div id="error-page">
      <Header1 label="A LA MIERDA!"/>
      <Header2 label="Esto no va"/>
      <Header3 label="Pos haber estudiao"/>
      <Paragrhafing label="Lo sentimos, hiciste algo mal"/>
      <Paragrhafing label="El error es el siguiente: "/>
        <i>{error.statusText || error.message}</i>
    </div>
  );
}