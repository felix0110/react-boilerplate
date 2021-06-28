import { pick, keys } from 'lodash';
//Sample data
/*
var data = {
    "key3":"table header" ,
    "key1":"table header2"
 }


var model = [{
    "key1": "a", "key2": "b", "key3": "c"
}, {
    "key1": "1", "key2": "2", "key3": "3"
}, {
    "key1": "f", "key2": "c", "key3": "k"
}]

 */

const mapValueWithTable = (data, model) => {
    const dataAfterFilter = filterWithModel(data, model);
    return [model, ...dataAfterFilter]
}

const filterWithModel = (data, model) => {
    return data.map(o => pick(o, keys(model)))
}



export { mapValueWithTable, filterWithModel };
