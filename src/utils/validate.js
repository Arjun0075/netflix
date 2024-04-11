const checkData = (email, password, name = null) => {
    const data = {
        isValid: false,
        message: "",
    };

    const checkEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const checkPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if (!checkEmail && !checkPassword) {
        data.message = "Email and Password both are not valid";
        return data;
    }

    if (!checkEmail) {
        data.message = "Email is not valid";
        return data;
    }

    if (!checkPassword) {
        data.message = "Password is not valid";
        return data;
    }

    data.isValid = true;
    data.message = "Valid";
    return data;
};

export default checkData;
