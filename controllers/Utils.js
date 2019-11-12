exports.randomPos = (length) => {
    return (length > 3 ? parseInt(Math.random()*(length-3)) : 0);
}