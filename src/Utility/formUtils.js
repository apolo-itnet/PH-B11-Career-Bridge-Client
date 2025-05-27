export const getFormValues = (form, fields) => {
  const value = {};
  fields.forEach(field => {
    value[field] = form[field]?.value() || '';
  
  })
  return value;
}