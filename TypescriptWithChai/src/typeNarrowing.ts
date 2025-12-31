function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Preparing a cup of ${kind} chai.`;
    }
    return `Chai order: ${kind}`;
}

function serveChai(msg?: string) {
    if (msg) {
        return `${msg} Enjoy your drink!`;
    }
    return `serving default Masala chai. Enjoy your drink!`;
}

function orderchai(size: 'small' | 'medium' | 'large' | number  ) {
    if(size === 'small' || size === 'medium' || size === 'large'){
        return `You have ordered a ${size} cup of chai.`;
    }
}