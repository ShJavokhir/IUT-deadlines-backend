const LOGGING_ENABLED = true;

const log = (message)=>{
    if(!LOGGING_ENABLED) return;
    console.log('\x1b[34m', message);
}

const info = (message)=>{
    if(!LOGGING_ENABLED) return;
    console.log('\x1b[36m%s\x1b[0m', message);
}

const error = (message)=>{
    if(!LOGGING_ENABLED) return;
    console.error('\x1b[31m', message);
}

const warn = (message)=>{
    if(!LOGGING_ENABLED) return;
    console.log('\x1b[33m%s\x1b[0m', message); 

}

export {
    log,
    info,
    error,
    warn
}