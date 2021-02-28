//I dont know how this is called but anyway I created it with name in my mind;


const success = (res, data) => {
    res.status(200);
    res.send(data);
}

export {
    success
}