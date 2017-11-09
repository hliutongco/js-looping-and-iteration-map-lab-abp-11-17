
function lowerCaseDrivers(drivers) {
  const newDrivers=drivers.map(function (name){
    return name.toLowerCase();
  })
  return newDrivers;
}


function nameToAttributes(drivers) {
  const newArray=drivers.map(function (name){
    let firstNameString="";
    let lastNameString="";
    let newObject={};
    let i=0;
    while(name[i]!==" "){
      ++i;
    }
    firstNameString=name.slice(0,i);
    lastNameString=name.slice(i+1);
    newObject["firstName"]=firstNameString;
    newObject["lastName"]=lastNameString;
    return newObject;
  })
  return newArray;
}

function attributesToPhrase(drivers){
  const hometownArray=drivers.map(function (object){
    const keysArray=Object.keys(object);
    const name=object[keysArray[0]]
    const hometown=object[keysArray[1]]
    return `${name} is from ${hometown}`
  })
  return hometownArray;
}
