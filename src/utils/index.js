const utilities = {};

/**
 * Retrieves an object from session storage.
 * If the item does not exist in session storage, or if there is a parsing error,
 * the default value is returned.
 * @param {string} key - The key of the item to retrieve from session storage.
 * @param {*} defaultValue - The value to return if the item does not exist in session storage.
 * @returns {*} The retrieved object or the default value.
 */
utilities.getsessionStorageObject = (key, defaultValue) => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
};

/**
 * Removes all diacritical marks from a given string.
 * @param {string} str - The string to remove diacritical marks from
 * @returns {string} - The string without diacritical marks
 */
utilities.removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

utilities.columnTranslate = (array) => {
  const columnTranslations = {
    participant_id: "ID",
    first_name: "Nombre",
    last_name: "Apellido",
    preferred_name: "Nombre preferido",
    dob: "Fecha de nacimiento",
    sex: "Sexo",
    mobile_number: "Número móvil",
    email: "Correo electrónico",
    age: "Edad",
    shirt_size: "Talla de camiseta",
    member_of_church: "Miembro de la iglesia",
    stake: "Estaca",
    ward: "Barrio",
    blood_type: "Tipo de sangre",
    allergies: "Alergias",
    treatment: "Tratamiento",
    diabetic_or_asthathic: "Diabético o asmático",
    health_insurance: "Seguro médico",
    covid_vaccine_doses: "Dosis de vacuna COVID",
    payment: "Pago",
    early_retirement: "Retiro anticipado",
    attendace: "Asistencia", // Probable typo: "attendance"
    is_counselor: "Es consejero",
    company_id: "ID de compañía",
  };

  const translatedArray = array.map(
    (column) => columnTranslations[column] || column
  );
  return translatedArray;
};

utilities.normalizeString = (str) => {
  str.replace("_", " ");
  str.charAt(0).toUpperCase() + str.slice(1);
  return str;
};

utilities.showPassword = ()  => {
  let x = document.getElementById("account_password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

export default utilities;
