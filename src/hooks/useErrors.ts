import {useState} from 'react';

interface Error {
  field: string;
  message: string;
}

export const useErrors = () => {
  const [errors, setErrors] = useState<Error[]>([]);

  function setError({field, message}: Error) {
    const errorAreadyExists = errors.find(
      (error: {field: string}) => error.field === field,
    );

    if (errorAreadyExists) {
      return;
    }

    setErrors(prevState => [...prevState, {field, message}]);
  }

  function removeError(fieldName: string) {
    setErrors(prevState =>
      prevState.filter((error: {field: string}) => error.field !== fieldName),
    );
  }

  function getErrorMessageByFieldName(fieldName: string) {
    const [errorExists] = errors.filter(
      (error: {field: string}) => error.field === fieldName,
    );

    return errorExists?.message;
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
};

export default useErrors;
