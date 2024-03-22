function distanceFromHqInBlocks(someValue) {
    var ScuberHQ = 42;
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    var distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return 2.56;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
}
