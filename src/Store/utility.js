const updateObject = (oldObject, updatedValues) => {
    console.log("Hola")
    console.log(updatedValues)

    return {
        ...oldObject,
        ...updatedValues
    }
};
export default updateObject;

