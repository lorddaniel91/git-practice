

const hardyName = 'Hardy';

console.log('Stitofi ficko a ', hardyName);

const properties = ['Kicsi','Vagány','Nagy','Hóbortos','Bozontos','Fekete','Büdös','Vasderekú','Kankós','Bánatos','Sith'];

const names = ['Radiátor','Vinetú','Kevin','Aranka','Viking','Matilda','Stormtrooper','Chewbacka','Géza','Smöcömdöför','Hardy','Criss'];

const getProperty = () => {

    const propertiesLength = properties.length

    return properties[getRandomInt(propertiesLength)];
}

const getName = () => {

    const namesLength = names.length;

    return names[getRandomInt(namesLength)];
}

const getRandomInt = (max) => Math.floor(Math.random() * max);

console.log('Az Új Neved : ');

console.log(`${getProperty()} ${getName()}`);
