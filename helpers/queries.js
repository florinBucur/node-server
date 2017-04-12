
elemMatch = function(name){
    var elem = {"$elemMatch":{"name":"default"}}
    elem.$elemMatch.name = name;
    return elem;
}

and = function(names){
    var and = {"$and":[]}
    for(var i in names){
        var aux = elemMatch(names[i])
        and.$and.push(aux);
    }
    return and;
}

exports.selectorByDevices = function(names){
    var selector = {"selector": {"rssis":{} }}
    var aux = and(names);
    selector.selector.rssis = aux;
    return selector;
}