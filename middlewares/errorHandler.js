const errorHandler = (err, req, res, next) => {
    err.message = err.message || 'Something went wrong'; 
    err.status = err.status || 500; 

    console.log(err);
    //TODO: Add page to render

    res.status(err.status).render('index', {error: err});
}

module.exports = errorHandler;