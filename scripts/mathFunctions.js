function PI() {
    return Math.PI;
}

function E() {
    return Math.E;
}

function sin(param) {
    return Math.sin(param);
}

function cos(param) {
    return Math.cos(param);
}

function tan(param) {
    return Math.tan(param);
}

function log(param1) {
    return Math.log(10) / Math.log(param1);
}

function ln(param) {
    return Math.log(param);
}

function sqRoot(param) {
    return Math.sqrt(param);
}

function factorial(param) {
    if (param === 0 || param === 1) {
        return 1;
    }

    return param * factorial(param - 1);
}

function mathOperate(func, param) {
    switch (func) {
        case "sin":
            return sin(param);
        case "cos":
            return cos(param);
        case "tan":
            return tan(param);
        case "log":
            return log(param);
        case "ln":
            return ln(param);
        case "√":
            return sqRoot(param);
        case "π":
            return PI();
        case "e":
            return E();
        case "!":
            return factorial(param);
    }
}