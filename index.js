// Write your solution in this file!

var driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
    const newObj = {...obj };
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    const newObj = {...driver};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}


