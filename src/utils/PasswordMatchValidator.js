function PasswordMatchValidator(password, confirmPassword){
    if (!password || !confirmPassword){
        return null;
    }

    if (password !== confirmPassword){
        return false;
    } else {
        return true;
    }
}

export default PasswordMatchValidator;