
    export function double(mainPile) {
        if (
            mainPile.slice(-2)[1] === undefined
        ) {
            return false;
        } else if (
            mainPile.slice(-2)[0].value === mainPile.slice(-2)[1].value
        ) {
            return true;
        } else {
            return false;
        }
    }

    export function sandwich(mainPile) {
        if (
            mainPile.slice(-3)[2] === undefined
        ) {
            return false;
        } else if (
            mainPile.slice(-3)[0].value === mainPile.slice(-3)[2].value
        ) {
            return true;
        } else {
            return false;
        }

    }


