//this error handler works with joi
const SHOW_FULL_ERROR = true;

const badRequest = (res, error) => {
    res.status(400);
    res.json({
        "status": "fail",
        "error": SHOW_FULL_ERROR?error:null
    });
}

const databaseError = (res, error) => {
    res.status(500);
    res.json({
        "status": "fail",
        "error": SHOW_FULL_ERROR?error:null
    });
}

export {
    badRequest
}