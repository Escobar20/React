const guid =
    function () {

        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

        return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    };

export const obj = {
    id: 1,
    guid: guid()
};

export const arr = [{
    "guid": "3d11e373-6a5f-4bc3-9aad-02d78ad12bdd",
    "first_name": "Scottie",
    "last_name": "Tredwell"
}, {
    "guid": "c0fed3d5-f339-49d4-a620-bfa39826fc78",
    "first_name": "Lenore",
    "last_name": "Bonnier"
}, {
    "guid": "9d354623-94db-4b14-9782-b928c2c72925",
    "first_name": "Mathilda",
    "last_name": "Delagua"
}, {
    "guid": "fc533120-7f93-4e6a-88a1-081c4973c080",
    "first_name": "Tabbi",
    "last_name": "McQuirter"
}, {
    "guid": "35561189-3a3e-4a42-b0f1-179afb47cae4",
    "first_name": "Isabelita",
    "last_name": "Candish"
}, {
    "guid": "a4430952-7c70-4cc2-9793-483242296887",
    "first_name": "Odie",
    "last_name": "Nestoruk"
}, {
    "guid": "4785902b-629c-4ce5-a0ea-7e53663752c8",
    "first_name": "Cosme",
    "last_name": "Landeg"
}, {
    "guid": "8513ee52-5852-485b-8a89-69a5eabff583",
    "first_name": "Freddy",
    "last_name": "Tungay"
}, {
    "guid": "483d52c4-6849-41cd-97d3-28f73387bb88",
    "first_name": "Tobe",
    "last_name": "Skerm"
}, {
    "guid": "7c243817-c5e5-431e-abc4-940ed663b1fa",
    "first_name": "Beitris",
    "last_name": "Ravelus"
}];

export const str = '';

export const num = Math.PI;

