export const requiredFieldValidator = (value) => {
    return value ? undefined : "Field is required";
};

export const maxLengthValidator = (maxLength) => (value) => {
    return value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;
};
