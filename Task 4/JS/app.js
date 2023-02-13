let metric = prompt('m or cm?');
let km = prompt('enter km count: ', '0');

function getMetric(metric, km, m, cm){
    if(metric === 'm'){
        return m = `${km}km = ${KmToM(km)} m`;
    }else if(metric === 'cm'){
        return cm = `${km}km = ${KmToCm(km)} cm`;
    }else{
        return 'Please, refresh page and write rigth symbols.';
    }
};

function KmToM(km){
    return km * 1000;
};
function KmToCm(km){
    return km * 100000;
};

alert(getMetric(metric, km, KmToM, KmToCm));