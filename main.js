

const hardyName = 'Hardy';

console.log('Stitofi ficko a ', hardyName);

const tulajdonsagok = ['Kicsi','Vagány','Nagy','Hóbortos','Bozontos','Fekete','Büdös','Vasderekú','Kankós','Bánatos','Sith'];

const nevek = ['Radiátor','Vinetú','Kevin','Aranka','Viking','Matilda','Stormtrooper','Chewbacka','Géza','Smöcömdöför','Hardy','Criss'];

const getTulajdonsag = () => {

    const hossz = tulajdonsagok.length

    return tulajdonsagok[getRandomInt(hossz)];

}

const getNev = () => {

    const hossz = nevek.length;

    return nevek[getRandomInt(hossz)];
}

const getRandomInt = (max) => Math.floor(Math.random() * max);

console.log('Az Új Neved : ');

console.log(`${getTulajdonsag()} ${getNev()}`);
