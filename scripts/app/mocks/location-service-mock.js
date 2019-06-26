(function () {

    if (!angular) {
        return;
    }

    var app = angular.module('app-online-giving');

    app.service('LocationServiceMock', ['$http', 'settings', function ($http, settings) {
        var service = this;
        var _apiBase = settings.serviceBase + 'webapi/';

        var _promiseHelper = function(jsonReturnObject){ 
             var promise = new Promise(function (resolve, reject) {
                resolve(jsonReturnObject);
            });
            return promise;
        };

        service.getCountries = function () {
            var data = [
                {
                    "Id": "8aa51b0c-a3be-4c4a-bba0-f32b6646fe04",
                    "Abbreviation": "AFGHA",
                    "Description": "Afghanistan"
                },
                {
                    "Id": "47de33fd-2f3a-42a1-a5d5-e6fe91133dfb",
                    "Abbreviation": "ALBAN",
                    "Description": "Albania"
                },
                {
                    "Id": "7cd7597c-b881-49c0-9796-911edd415ee0",
                    "Abbreviation": "ALGER",
                    "Description": "Algeria"
                },
                {
                    "Id": "c43ce118-3a24-456f-92ae-62fda29695fb",
                    "Abbreviation": "AMSAM",
                    "Description": "American Samoa"
                },
                {
                    "Id": "de57b26a-3323-4286-be62-1a82bad79b50",
                    "Abbreviation": "ANDOR",
                    "Description": "Andorra"
                },
                {
                    "Id": "b569d0e7-6757-4dbe-987d-6ee1472954dd",
                    "Abbreviation": "ANGOL",
                    "Description": "Angola"
                },
                {
                    "Id": "d7410541-1a38-42fc-8bdd-9f69fe7ada9e",
                    "Abbreviation": "ANGUL",
                    "Description": "Anguilla"
                },
                {
                    "Id": "391ee13e-30c7-4575-9e16-04d620f3ab5a",
                    "Abbreviation": "ANTRC",
                    "Description": "Antarctica"
                },
                {
                    "Id": "516df36d-173f-4141-97a3-b6f7389ea48b",
                    "Abbreviation": "ANTBB",
                    "Description": "Antigua and Barbuda"
                },
                {
                    "Id": "cc8bfb18-1596-483a-81cc-ca3c360cb0f7",
                    "Abbreviation": "ARGEN",
                    "Description": "Argentina"
                },
                {
                    "Id": "f0e5ad4e-584d-4923-b5d8-c08ac96a0080",
                    "Abbreviation": "ARMEN",
                    "Description": "Armenia"
                },
                {
                    "Id": "5a2d9973-3b60-4fa3-bd33-c83f127ddcfa",
                    "Abbreviation": "ARUBA",
                    "Description": "Aruba"
                },
                {
                    "Id": "f189f24c-2538-46a1-8458-1e3f3967b843",
                    "Abbreviation": "AUSTR",
                    "Description": "Australia"
                },
                {
                    "Id": "7f7aa79c-e094-45cd-8218-d01f228228de",
                    "Abbreviation": "AUNSW",
                    "Description": "Australia - New South Wales"
                },
                {
                    "Id": "e1454f13-3b01-45a7-9b4f-55f31e48bec1",
                    "Abbreviation": "AUNTT",
                    "Description": "Australia - Northern Territories"
                },
                {
                    "Id": "3dca3a9b-e387-40ab-a00a-6a0ad217b8d8",
                    "Abbreviation": "AUQNL",
                    "Description": "Australia - Queensland"
                },
                {
                    "Id": "178dd45c-edb8-4662-94ed-8446d1e6cbe3",
                    "Abbreviation": "AUSAL",
                    "Description": "Australia - South Australia"
                },
                {
                    "Id": "453a4c4b-16a1-46a0-9d2e-14f4abb573d2",
                    "Abbreviation": "AUTAS",
                    "Description": "Australia - Tasmania"
                },
                {
                    "Id": "36729a85-736d-4178-b8f7-63d0906f054b",
                    "Abbreviation": "AUVIC",
                    "Description": "Australia - Victoria"
                },
                {
                    "Id": "77d4ec02-bdac-481d-952b-78012c83a6ed",
                    "Abbreviation": "AUWAU",
                    "Description": "Australia - Western Australia"
                },
                {
                    "Id": "28f97fa8-4590-4b53-b81d-a8dd2bd354db",
                    "Abbreviation": "AUCTT",
                    "Description": "Australian Capital Territory,  Australia"
                },
                {
                    "Id": "84e7f4d7-eb4d-483c-a82e-7223f7a3fbda",
                    "Abbreviation": "ASTRI",
                    "Description": "Austria"
                },
                {
                    "Id": "44e2fa41-7ab8-4d1e-a539-2ce54bc09139",
                    "Abbreviation": "AZERB",
                    "Description": "Azerbaijan"
                },
                {
                    "Id": "9830c10c-b893-49b3-95df-9e54967424dc",
                    "Abbreviation": "BAHAM",
                    "Description": "Bahamas"
                },
                {
                    "Id": "b0b9cc10-dd36-4036-af6f-73b26993d7ab",
                    "Abbreviation": "BAHRA",
                    "Description": "Bahrain"
                },
                {
                    "Id": "6e8267f7-c173-4a88-9b44-f0c83719972c",
                    "Abbreviation": "BANGL",
                    "Description": "Bangladesh"
                },
                {
                    "Id": "f47d350d-5177-4219-bc20-0f4c21d1c19f",
                    "Abbreviation": "BARBA",
                    "Description": "Barbados"
                },
                {
                    "Id": "9dcdd528-b02d-4f16-9cf0-81820a040933",
                    "Abbreviation": "BELAR",
                    "Description": "Belarus"
                },
                {
                    "Id": "f33643a5-4791-4d0b-be12-c64d482e97f6",
                    "Abbreviation": "BELGI",
                    "Description": "Belgium"
                },
                {
                    "Id": "9d6681c5-21d9-40a2-b374-ec1267fec0c9",
                    "Abbreviation": "BELIZ",
                    "Description": "Belize"
                },
                {
                    "Id": "157bfe53-db2c-4e16-88e9-5383bfc2e334",
                    "Abbreviation": "BENIN",
                    "Description": "Benin"
                },
                {
                    "Id": "65d914b6-6dc5-4ebd-b5ab-13131d772a01",
                    "Abbreviation": "BERMU",
                    "Description": "Bermuda"
                },
                {
                    "Id": "60322168-fb74-4931-97a1-dee2205c2af2",
                    "Abbreviation": "BHUTA",
                    "Description": "Bhutan"
                },
                {
                    "Id": "5cac986d-bef9-4cae-b7e8-11d15ab50954",
                    "Abbreviation": "BOLIV",
                    "Description": "Bolivia"
                },
                {
                    "Id": "94de9e39-1e77-4690-9263-a560a5bfd03e",
                    "Abbreviation": "BOSNI",
                    "Description": "Bosnia and Herzegovina"
                },
                {
                    "Id": "6061dfd1-4f9b-4394-8e97-eec8bbaf7fcb",
                    "Abbreviation": "BOTSW",
                    "Description": "Botswana"
                },
                {
                    "Id": "755d3263-6de1-4815-8a47-a7b9e083cb51",
                    "Abbreviation": "BRAZI",
                    "Description": "Brazil"
                },
                {
                    "Id": "a4f36247-8a42-44e0-86c8-f17e201341eb",
                    "Abbreviation": "VIRUK",
                    "Description": "British Virgin Islands"
                },
                {
                    "Id": "c96d5d6b-6270-4409-86a6-37007e5d4640",
                    "Abbreviation": "BRUNE",
                    "Description": "Brunei"
                },
                {
                    "Id": "a74c6a02-61e6-463a-85cd-74429a9cb8ca",
                    "Abbreviation": "BULGA",
                    "Description": "Bulgaria"
                },
                {
                    "Id": "90c1cfb5-809f-4b2a-a0db-0b3f2da02654",
                    "Abbreviation": "BURKI",
                    "Description": "Burkina Faso"
                },
                {
                    "Id": "0bf57ca0-165b-43d9-95ac-7fe6fcf5fa28",
                    "Abbreviation": "BURUN",
                    "Description": "Burundi"
                },
                {
                    "Id": "ca176418-32e5-484a-b844-b277464d31fe",
                    "Abbreviation": "CAMBO",
                    "Description": "Cambodia"
                },
                {
                    "Id": "0c6a350a-0741-4bd6-a4e8-1cf9c44ea7ae",
                    "Abbreviation": "CAMER",
                    "Description": "Cameroon"
                },
                {
                    "Id": "d9ee54cd-2183-490c-a3ad-11152b271335",
                    "Abbreviation": "CANA",
                    "Description": "Canada"
                },
                {
                    "Id": "d568968b-f941-458b-8b2e-8bd12ed4fb12",
                    "Abbreviation": "CVERD",
                    "Description": "Cape Verde"
                },
                {
                    "Id": "fec26a98-29f9-4385-b053-65cf77641b6b",
                    "Abbreviation": "CAYMA",
                    "Description": "Cayman Islands"
                },
                {
                    "Id": "e6029fe5-4b4c-4418-b449-de750ad1b55d",
                    "Abbreviation": "CAFRE",
                    "Description": "Central African Rpb"
                },
                {
                    "Id": "d72a9366-acf5-453f-aeba-b0984582ea0f",
                    "Abbreviation": "CHAD",
                    "Description": "Chad"
                },
                {
                    "Id": "408569d0-a4a6-4581-ac3f-3e84dc7a95c2",
                    "Abbreviation": "CHANN",
                    "Description": "Channel Islands"
                },
                {
                    "Id": "e5b2805f-f7ac-4d43-8428-e3524a9f284a",
                    "Abbreviation": "CHECH",
                    "Description": "Chechnya"
                },
                {
                    "Id": "34fc38a0-7894-40c0-a851-c0b15771c6a2",
                    "Abbreviation": "CHILE",
                    "Description": "Chile"
                },
                {
                    "Id": "8303e1fc-6691-4e19-9c40-e20903982cc6",
                    "Abbreviation": "CHINA",
                    "Description": "China"
                },
                {
                    "Id": "950cc907-70ae-4381-95cb-a8d37e996f62",
                    "Abbreviation": "COLOM",
                    "Description": "Colombia"
                },
                {
                    "Id": "ed081f70-60f7-464a-90c0-6c15fd4e6113",
                    "Abbreviation": "COMOR",
                    "Description": "Comoros"
                },
                {
                    "Id": "a9e72d61-a424-4613-89d4-3cb18aa8be5d",
                    "Abbreviation": "WSAMO",
                    "Description": "Cook Islands"
                },
                {
                    "Id": "61559045-037a-4871-8bde-a6c9a77ded27",
                    "Abbreviation": "CORSI",
                    "Description": "Corsica"
                },
                {
                    "Id": "0d3c1a52-199b-48ec-b3cf-2e55f20cdfef",
                    "Abbreviation": "COSTA",
                    "Description": "Costa Rica"
                },
                {
                    "Id": "81dd93e7-b66b-4e48-b417-58e5fa4dc7ba",
                    "Abbreviation": "IVOCO",
                    "Description": "Cote d'Ivoire"
                },
                {
                    "Id": "e69a55bb-56db-4504-8534-2e87c1c5885d",
                    "Abbreviation": "CROAT",
                    "Description": "Croatia"
                },
                {
                    "Id": "b3524571-2f5f-41b9-8449-859a29c53a69",
                    "Abbreviation": "CUBA",
                    "Description": "Cuba"
                },
                {
                    "Id": "ef8bb5fd-31cb-41c2-8686-1a4ea58b2a48",
                    "Abbreviation": "CURAC",
                    "Description": "Curacao"
                },
                {
                    "Id": "f6cb207b-71a0-4b18-9875-c716f5375ca4",
                    "Abbreviation": "CYPRU",
                    "Description": "Cyprus"
                },
                {
                    "Id": "fe94d1aa-1cd3-46c5-bf39-058b6819c746",
                    "Abbreviation": "CZECR",
                    "Description": "Czech Republic"
                },
                {
                    "Id": "17acf7ed-ac4d-46e5-a2e4-53867b1eecde",
                    "Abbreviation": "DENMA",
                    "Description": "Denmark"
                },
                {
                    "Id": "8718f8ca-7658-47f8-9b8c-f0f9a400e230",
                    "Abbreviation": "DJIBO",
                    "Description": "Djibouti"
                },
                {
                    "Id": "970a5a43-deec-44f9-9f09-59604a24df9e",
                    "Abbreviation": "DOMIC",
                    "Description": "Dominica"
                },
                {
                    "Id": "ff65001f-c546-4a1e-ba32-82c0f50992ea",
                    "Abbreviation": "DOMIN",
                    "Description": "Dominican Republic"
                },
                {
                    "Id": "4fba733c-0400-438c-ac83-903237811d85",
                    "Abbreviation": "ECUAD",
                    "Description": "Ecuador"
                },
                {
                    "Id": "0d6ecac5-7b3c-46fb-86f4-ff19df953871",
                    "Abbreviation": "EGYPT",
                    "Description": "Egypt"
                },
                {
                    "Id": "52b73b6c-7f74-4269-81f2-87f2dbe1ad6d",
                    "Abbreviation": "ELSAL",
                    "Description": "El Salvador"
                },
                {
                    "Id": "a2ecc209-3d20-4dda-bc4c-7585c8e2e701",
                    "Abbreviation": "UKENG",
                    "Description": "England"
                },
                {
                    "Id": "30d9123b-c06c-42c9-bb3f-8c8a689383e7",
                    "Abbreviation": "EQGUI",
                    "Description": "Equatorial Guinea"
                },
                {
                    "Id": "1314ceec-6975-468b-ae75-14e060307e21",
                    "Abbreviation": "ERITR",
                    "Description": "Eritrea"
                },
                {
                    "Id": "accf1d11-b467-4c82-bf1c-9592768448e0",
                    "Abbreviation": "ESTON",
                    "Description": "Estonia"
                },
                {
                    "Id": "321d170e-5ac7-4c04-8183-cc2cd4852f1c",
                    "Abbreviation": "ETHIO",
                    "Description": "Ethiopia"
                },
                {
                    "Id": "5bfec497-c49c-4727-ac93-62d290c98452",
                    "Abbreviation": "FAERO",
                    "Description": "Faeroe Islands"
                },
                {
                    "Id": "affa7404-3750-476f-8758-62752728d78e",
                    "Abbreviation": "FALKL",
                    "Description": "Falkland Islands"
                },
                {
                    "Id": "371e80b2-8d90-457a-9c5d-0db5e2f50458",
                    "Abbreviation": "FIJII",
                    "Description": "Fiji"
                },
                {
                    "Id": "0e022dcd-a49a-45ff-ad4c-8f233e1c7599",
                    "Abbreviation": "FINLA",
                    "Description": "Finland"
                },
                {
                    "Id": "4a271ef5-0152-49f4-ab49-d53d7058f3aa",
                    "Abbreviation": "FRANC",
                    "Description": "France"
                },
                {
                    "Id": "86d35e52-2824-4adc-a02c-49bfa662040b",
                    "Abbreviation": "FGUYA",
                    "Description": "French Guyana"
                },
                {
                    "Id": "f14023a4-aff7-4bd5-9758-ed2e9c0191ee",
                    "Abbreviation": "FRPOL",
                    "Description": "French Polynesia"
                },
                {
                    "Id": "c1761789-03ff-4631-aa12-b1735a1ec140",
                    "Abbreviation": "GABON",
                    "Description": "Gabon"
                },
                {
                    "Id": "51a1683b-0aa8-4869-8ccc-6bb3d42fc87a",
                    "Abbreviation": "GAMBI",
                    "Description": "Gambia"
                },
                {
                    "Id": "8817607f-fa25-4180-822c-dfbd4c8b37b0",
                    "Abbreviation": "GEORG",
                    "Description": "Georgia"
                },
                {
                    "Id": "0dfe4484-1410-4f6c-b353-e1da2aea7d40",
                    "Abbreviation": "GERM",
                    "Description": "Germany"
                },
                {
                    "Id": "b177c612-a768-4ba6-84a3-27747e375222",
                    "Abbreviation": "GHANA",
                    "Description": "Ghana"
                },
                {
                    "Id": "e312d052-7344-4f30-b2b8-f04c670517a8",
                    "Abbreviation": "GIBRA",
                    "Description": "Gibraltar"
                },
                {
                    "Id": "2259f5ad-a17e-4b86-8567-904f3b03d48c",
                    "Abbreviation": "GREEC",
                    "Description": "Greece"
                },
                {
                    "Id": "335141c1-9f23-4afe-8927-671d08d8579d",
                    "Abbreviation": "GREEN",
                    "Description": "Greenland"
                },
                {
                    "Id": "633f1afc-0d83-4546-bc57-22f56d83f56b",
                    "Abbreviation": "GRENA",
                    "Description": "Grenada & St. Vincent"
                },
                {
                    "Id": "e6375766-29f1-4a19-917e-6cb96c57c37f",
                    "Abbreviation": "GUADE",
                    "Description": "Guadeloupe"
                },
                {
                    "Id": "ba7d0b39-05fa-4f48-a325-2200df347237",
                    "Abbreviation": "GUATE",
                    "Description": "Guatemala"
                },
                {
                    "Id": "f290141e-c933-42c0-bd49-bdf6b48b4e7b",
                    "Abbreviation": "FRGUI",
                    "Description": "Guinea"
                },
                {
                    "Id": "3a294cf2-0b6e-47ab-b5bb-bb2fd7092301",
                    "Abbreviation": "GUIBI",
                    "Description": "Guinea-Bissau"
                },
                {
                    "Id": "4e70425a-2b08-48c8-8534-5df0e6621f94",
                    "Abbreviation": "GUYAN",
                    "Description": "Guyana"
                },
                {
                    "Id": "77aa5d84-5976-4252-8388-0f58e31204e9",
                    "Abbreviation": "HAITI",
                    "Description": "Haiti"
                },
                {
                    "Id": "6ed39437-7a0e-451d-8280-102dbe9c0725",
                    "Abbreviation": "HONDU",
                    "Description": "Honduras"
                },
                {
                    "Id": "2cc4eb20-b48c-4b1f-9341-3e2c6f03955c",
                    "Abbreviation": "CHHKG",
                    "Description": "Hong Kong"
                },
                {
                    "Id": "4161efe9-c364-4e82-9215-7bba552ed34b",
                    "Abbreviation": "HUNGA",
                    "Description": "Hungary"
                },
                {
                    "Id": "1e095708-4d4a-45f7-b8db-e23c209d18d6",
                    "Abbreviation": "ICELA",
                    "Description": "Iceland"
                },
                {
                    "Id": "1e067591-e7e1-49fe-a000-869898600990",
                    "Abbreviation": "INDIA",
                    "Description": "India"
                },
                {
                    "Id": "6f8d0531-0ff7-4df3-b61c-fe846bc565db",
                    "Abbreviation": "INDON",
                    "Description": "Indonesia"
                },
                {
                    "Id": "d8bf59e4-4767-40e7-892f-63a6418d114c",
                    "Abbreviation": "IRAN",
                    "Description": "Iran"
                },
                {
                    "Id": "5e25d62f-5417-4cbe-a6eb-fb5c0c9f742f",
                    "Abbreviation": "IRAQ",
                    "Description": "Iraq"
                },
                {
                    "Id": "dce8443c-8e95-4661-85d2-143ada7073c6",
                    "Abbreviation": "IRELA",
                    "Description": "Ireland"
                },
                {
                    "Id": "1a13fcd5-3adc-459f-b245-2626fe63547a",
                    "Abbreviation": "ISMAN",
                    "Description": "Isle of Man"
                },
                {
                    "Id": "49b9a657-e296-49bd-88e1-e15e9f3f064b",
                    "Abbreviation": "ISRAE",
                    "Description": "Israel"
                },
                {
                    "Id": "63efad82-3d10-4359-8f20-3c4cb453e267",
                    "Abbreviation": "ITALY",
                    "Description": "Italy"
                },
                {
                    "Id": "54c4f74c-5a49-47d8-adfa-b0dd58f39237",
                    "Abbreviation": "IVORY",
                    "Description": "Ivory Coast"
                },
                {
                    "Id": "e8520875-ce93-4ec2-9e1f-32675c48ca52",
                    "Abbreviation": "JAMAI",
                    "Description": "Jamaica"
                },
                {
                    "Id": "5c0335bc-7895-4632-9f59-55423236ddf1",
                    "Abbreviation": "JAPAN",
                    "Description": "Japan"
                },
                {
                    "Id": "0891c0a9-2c4f-4bfa-aeef-da49925fa542",
                    "Abbreviation": "JORDA",
                    "Description": "Jordan"
                },
                {
                    "Id": "0d572137-0cc5-4f67-8ca7-25572b4bb83d",
                    "Abbreviation": "KAZAK",
                    "Description": "Kazakhstan"
                },
                {
                    "Id": "fec7db63-089f-47aa-8f2c-8195fe0299b4",
                    "Abbreviation": "KENYA",
                    "Description": "Kenya"
                },
                {
                    "Id": "e216c2d4-aec8-47c4-9990-cc24b7bdf4a0",
                    "Abbreviation": "KOSOV",
                    "Description": "Kosovo"
                },
                {
                    "Id": "a0aedc61-cced-467f-8f88-65782148e898",
                    "Abbreviation": "KUWAI",
                    "Description": "Kuwait"
                },
                {
                    "Id": "704c75d0-f37a-4abb-b0e3-95a78c2d180d",
                    "Abbreviation": "KYGYS",
                    "Description": "Kyrgyzstan"
                },
                {
                    "Id": "7353c587-f7d0-461a-bf52-6dbb87a1cd38",
                    "Abbreviation": "LAOS",
                    "Description": "Laos"
                },
                {
                    "Id": "ab0f51b3-2b12-415d-8920-47205374a617",
                    "Abbreviation": "LATVI",
                    "Description": "Latvia"
                },
                {
                    "Id": "02f4497d-55e3-49c2-9c14-90ba6103b32e",
                    "Abbreviation": "LEBAN",
                    "Description": "Lebanon"
                },
                {
                    "Id": "7bc64197-da1f-41c2-9126-1ba7dc946772",
                    "Abbreviation": "LESOT",
                    "Description": "Lesotho"
                },
                {
                    "Id": "5f4a7d6f-1595-4724-bce7-e29a2df97017",
                    "Abbreviation": "LIBER",
                    "Description": "Liberia"
                },
                {
                    "Id": "24679c27-a567-4dab-bb02-88d0b652920d",
                    "Abbreviation": "LIBYA",
                    "Description": "Libya"
                },
                {
                    "Id": "acc64118-133f-4ba7-b0bf-4c0aa1aec33e",
                    "Abbreviation": "LIECH",
                    "Description": "Liechtenstein"
                },
                {
                    "Id": "f101c3fc-0073-4797-adf8-a4fd795a3940",
                    "Abbreviation": "LITHU",
                    "Description": "Lithuania"
                },
                {
                    "Id": "5c982222-1801-4568-b930-489ea816380a",
                    "Abbreviation": "LUXEM",
                    "Description": "Luxembourg"
                },
                {
                    "Id": "2c45a9ab-54fb-4e0c-9831-1e9231f52df0",
                    "Abbreviation": "MACAU",
                    "Description": "Macao"
                },
                {
                    "Id": "45671aa8-2911-4cac-a476-5bdf3ae17219",
                    "Abbreviation": "MACED",
                    "Description": "Macedonia"
                },
                {
                    "Id": "631af01c-9a0d-4c75-803f-77a459519d66",
                    "Abbreviation": "MADAG",
                    "Description": "Madagascar"
                },
                {
                    "Id": "4b0145ea-559e-4d2c-959a-3e88fc9761f9",
                    "Abbreviation": "MALAW",
                    "Description": "Malawi"
                },
                {
                    "Id": "3a0f8af4-4869-4a9d-9d58-455885e7e01b",
                    "Abbreviation": "MALAY",
                    "Description": "Malaysia"
                },
                {
                    "Id": "0238ddbc-0324-44f0-838f-bf66a5eaf446",
                    "Abbreviation": "MALDI",
                    "Description": "Maldives"
                },
                {
                    "Id": "df1f123b-5d11-4935-b5f6-959c9ca68438",
                    "Abbreviation": "MALI",
                    "Description": "Mali"
                },
                {
                    "Id": "9b1844e1-a820-409a-82ce-16c39b857b6d",
                    "Abbreviation": "MALTA",
                    "Description": "Malta"
                },
                {
                    "Id": "1d1dbb7d-e7a1-4a70-b964-c51f5c2ce032",
                    "Abbreviation": "MARIS",
                    "Description": "Marshall Islands"
                },
                {
                    "Id": "16476b61-1129-4b21-94bb-c1ab17124ba0",
                    "Abbreviation": "MAURA",
                    "Description": "Mauritania"
                },
                {
                    "Id": "0b26b612-f90c-412a-893b-644b5831bd7d",
                    "Abbreviation": "MAURS",
                    "Description": "Mauritius"
                },
                {
                    "Id": "2bff9092-6656-4d38-a4e7-9a06351f3cb6",
                    "Abbreviation": "MEXIC",
                    "Description": "Mexico"
                },
                {
                    "Id": "e58db984-9e27-4bb1-88b9-284a87e3e410",
                    "Abbreviation": "MOLDA",
                    "Description": "Moldavia"
                },
                {
                    "Id": "39c43f46-a134-4cb2-8e5f-2bdf0171354d",
                    "Abbreviation": "MONAC",
                    "Description": "Monaco"
                },
                {
                    "Id": "7cf8d04f-d4f9-44e0-b1dd-b8d6231e4f15",
                    "Abbreviation": "MONGO",
                    "Description": "Mongolia"
                },
                {
                    "Id": "bce1bd56-8c73-4580-9234-81dcdec29f32",
                    "Abbreviation": "MONTE",
                    "Description": "Montenegro"
                },
                {
                    "Id": "8d438306-de1c-46e6-b2bc-3553e65f9155",
                    "Abbreviation": "MOROC",
                    "Description": "Morocco"
                },
                {
                    "Id": "600365a3-4888-4f26-a948-9e87ea095e1e",
                    "Abbreviation": "MOZAM",
                    "Description": "Mozambique"
                },
                {
                    "Id": "43dd4e9c-7eea-4480-9a94-8872ad3c17d7",
                    "Abbreviation": "BURMA",
                    "Description": "Myanmar"
                },
                {
                    "Id": "b2957510-079e-4db4-8645-b6c3d5e9eb14",
                    "Abbreviation": "NAMIB",
                    "Description": "Namibia"
                },
                {
                    "Id": "a00ed9e4-e1b5-4626-9cc3-966818296024",
                    "Abbreviation": "NEPAL",
                    "Description": "Nepal"
                },
                {
                    "Id": "5abffb6c-f802-4eb7-b3f0-f44ec5731c52",
                    "Abbreviation": "NETHE",
                    "Description": "Netherlands"
                },
                {
                    "Id": "8edb94a9-04c3-4978-91ea-b438e4346b84",
                    "Abbreviation": "NETHA",
                    "Description": "Netherlands Antilles"
                },
                {
                    "Id": "da42443e-ab81-40ee-a239-91ed699c0801",
                    "Abbreviation": "NEWZE",
                    "Description": "New Zealand"
                },
                {
                    "Id": "0da5462a-cb40-45b8-805e-a7f53cf4fade",
                    "Abbreviation": "NICAR",
                    "Description": "Nicaragua"
                },
                {
                    "Id": "4b24b50b-b195-4960-88fb-78a031ac0ed3",
                    "Abbreviation": "NIGER",
                    "Description": "Niger"
                },
                {
                    "Id": "0ede7da2-194d-4dfd-ab7a-1937933fc499",
                    "Abbreviation": "NIGRA",
                    "Description": "Nigeria"
                },
                {
                    "Id": "aec6af78-1a56-4545-b7d0-22eeba4e3e3f",
                    "Abbreviation": "NOKOR",
                    "Description": "North Korea"
                },
                {
                    "Id": "a95aeaa2-54cc-4826-8878-d543c85f38aa",
                    "Abbreviation": "NIREL",
                    "Description": "Northern Ireland"
                },
                {
                    "Id": "81564bb7-3a7f-4282-b2eb-1cc5a9b9820b",
                    "Abbreviation": "NMARI",
                    "Description": "Northern Mariana Islands"
                },
                {
                    "Id": "6ef73585-796c-4f8e-9248-68b98fb39a04",
                    "Abbreviation": "NORWA",
                    "Description": "Norway"
                },
                {
                    "Id": "66eed60f-9ae6-4352-a66c-3fbe1a88112e",
                    "Abbreviation": "OMAN",
                    "Description": "Oman"
                },
                {
                    "Id": "538c9b09-fa91-4529-8708-9013290a1749",
                    "Abbreviation": "PAKIS",
                    "Description": "Pakistan"
                },
                {
                    "Id": "2b610d1b-6062-412d-9718-b8519eed42ba",
                    "Abbreviation": "PALES",
                    "Description": "Palestine, Gaza Strip"
                },
                {
                    "Id": "f1940638-de4a-443f-8068-4fcc86956923",
                    "Abbreviation": "PALWB",
                    "Description": "Palestine, West Bank"
                },
                {
                    "Id": "6f4a4cca-28a6-4027-beca-f3bbcd23345e",
                    "Abbreviation": "PANAM",
                    "Description": "Panama"
                },
                {
                    "Id": "e104727f-619c-4939-bb90-1fea5f931265",
                    "Abbreviation": "PAPNG",
                    "Description": "Papua New Guinea"
                },
                {
                    "Id": "4dc2ed57-883a-492b-94e8-98917018e23c",
                    "Abbreviation": "PARAG",
                    "Description": "Paraguay"
                },
                {
                    "Id": "e3c1e412-54a8-4873-9a44-4d5975c1b4c5",
                    "Abbreviation": "PERU",
                    "Description": "Peru"
                },
                {
                    "Id": "af23b2c1-b2e4-412e-83b6-4d2030cc32d3",
                    "Abbreviation": "PHILI",
                    "Description": "Philippines"
                },
                {
                    "Id": "0a79b689-084e-4edf-9741-0fc935e2b867",
                    "Abbreviation": "PITCA",
                    "Description": "Pitcairn Island"
                },
                {
                    "Id": "e60418f9-5c6c-472a-ab75-5313ce67438f",
                    "Abbreviation": "POLAN",
                    "Description": "Poland"
                },
                {
                    "Id": "2cac1a2b-bd05-41d0-b76d-c56b936585d0",
                    "Abbreviation": "PORTU",
                    "Description": "Portugal"
                },
                {
                    "Id": "0d02a0d4-d599-45c0-95e1-595b67d6cb21",
                    "Abbreviation": "QATAR",
                    "Description": "Qatar"
                },
                {
                    "Id": "b20198e4-f38f-4f48-9c8e-8ed7f60e023e",
                    "Abbreviation": "SOKOR",
                    "Description": "Republic of Korea"
                },
                {
                    "Id": "a1fdd06f-6c94-46ca-8b3b-0f39cca1f60e",
                    "Abbreviation": "SINGA",
                    "Description": "Republic of Singapore"
                },
                {
                    "Id": "1b8f5136-8098-4eef-83fb-b6c16e42a8be",
                    "Abbreviation": "CONGO",
                    "Description": "Republic of the Congo"
                },
                {
                    "Id": "b8e1d75f-0c1d-4543-a5b3-b77f695b84d7",
                    "Abbreviation": "VIETN",
                    "Description": "Republic of Vietnam"
                },
                {
                    "Id": "ef45e76e-08fd-408d-919c-8987ff8b9b31",
                    "Abbreviation": "ROMAN",
                    "Description": "Romania"
                },
                {
                    "Id": "6147f6a9-d183-435b-886a-24604620979f",
                    "Abbreviation": "RUSSI",
                    "Description": "Russia"
                },
                {
                    "Id": "24b2895a-0b69-47d7-b74a-2d487c84ec15",
                    "Abbreviation": "RWAND",
                    "Description": "Rwanda"
                },
                {
                    "Id": "3126b78d-a8ff-4008-8b57-f0fa9c1e9aef",
                    "Abbreviation": "STKIT",
                    "Description": "Saint Kitts and Nevis"
                },
                {
                    "Id": "ce7ae27d-a8f1-4fad-bc61-e429f0cecc42",
                    "Abbreviation": "STLUC",
                    "Description": "Saint Lucia"
                },
                {
                    "Id": "e81616a8-71f1-43cb-88a6-6dd5b74e4a16",
                    "Abbreviation": "SAMOA",
                    "Description": "Samoa"
                },
                {
                    "Id": "76612195-19ca-4c7a-abb0-57bed25f4b8b",
                    "Abbreviation": "SANMR",
                    "Description": "San Marino"
                },
                {
                    "Id": "b77037aa-f24d-43b2-8147-80397d70d06e",
                    "Abbreviation": "STOPR",
                    "Description": "Sao Tome and Principe"
                },
                {
                    "Id": "81dd08fa-7493-4ecb-a1c0-3a0b3bf9c173",
                    "Abbreviation": "SAUDI",
                    "Description": "Saudi Arabia"
                },
                {
                    "Id": "5b82ecb0-9ac1-4188-8e69-5a995b7cba3f",
                    "Abbreviation": "UKSCO",
                    "Description": "Scotland"
                },
                {
                    "Id": "08b438ee-0590-4322-97af-a23e9aa15166",
                    "Abbreviation": "SENEG",
                    "Description": "Senegal"
                },
                {
                    "Id": "b3effa8c-c240-4e14-bd37-2e9f0c945af4",
                    "Abbreviation": "SERBI",
                    "Description": "Serbia"
                },
                {
                    "Id": "413d2aec-fe18-48b8-9720-94435de6dc19",
                    "Abbreviation": "SEYCH",
                    "Description": "Seychelles"
                },
                {
                    "Id": "45b09324-7fe3-49fe-aff6-6fcf3299f403",
                    "Abbreviation": "SIERR",
                    "Description": "Sierra Leone"
                },
                {
                    "Id": "ff269e27-93d1-41f6-af15-de7b37bb3e6b",
                    "Abbreviation": "STMAR",
                    "Description": "Sint Maarten (Dutch part)"
                },
                {
                    "Id": "b7920df2-04dc-4715-abc3-91642b5f48bc",
                    "Abbreviation": "SLOVA",
                    "Description": "Slovakia"
                },
                {
                    "Id": "02bf4589-fc91-46ef-88f2-76bb0d6eb522",
                    "Abbreviation": "SLOVE",
                    "Description": "Slovenia"
                },
                {
                    "Id": "f982c8c9-65d8-452c-8c99-f553294ca230",
                    "Abbreviation": "SOLOM",
                    "Description": "Solomon Islands, Vanuatu, Kiribati"
                },
                {
                    "Id": "79dc4a3d-ddd0-44b1-ad57-2c0d3b64f4e9",
                    "Abbreviation": "SOMAL",
                    "Description": "Somalia"
                },
                {
                    "Id": "5cb59883-71f5-4aee-a214-8199f19f3709",
                    "Abbreviation": "SOAFR",
                    "Description": "South Africa"
                },
                {
                    "Id": "35b60b0f-936f-4d62-8855-418848366c26",
                    "Abbreviation": "STHEL",
                    "Description": "South Sudan"
                },
                {
                    "Id": "50d86910-efd6-4c6f-8dd2-0345353ad799",
                    "Abbreviation": "SPAIN",
                    "Description": "Spain"
                },
                {
                    "Id": "1caae501-f6d1-49b2-8d05-90d40d693149",
                    "Abbreviation": "SRILA",
                    "Description": "Sri Lanka"
                },
                {
                    "Id": "191f25cf-0fda-4ed5-a800-2aa90d4ee7a4",
                    "Abbreviation": "SUDAN",
                    "Description": "Sudan"
                },
                {
                    "Id": "78d46cb4-b881-4baa-8f6a-c007b9540f86",
                    "Abbreviation": "SOMAN",
                    "Description": "Sultanate of Oman"
                },
                {
                    "Id": "06daaa1b-cace-420e-ac79-df5fdcee80e4",
                    "Abbreviation": "SURIN",
                    "Description": "Suriname"
                },
                {
                    "Id": "8f660dad-2459-4358-9f11-802c2fd38c37",
                    "Abbreviation": "SWAZI",
                    "Description": "Swaziland"
                },
                {
                    "Id": "d1e4cfad-02bf-48ed-9d22-f3af7dd588fc",
                    "Abbreviation": "SWEDE",
                    "Description": "Sweden"
                },
                {
                    "Id": "a96075c3-16f7-4373-b2b5-a3ec322433b0",
                    "Abbreviation": "SWITZ",
                    "Description": "Switzerland"
                },
                {
                    "Id": "291c22b1-98cd-4284-973d-c3eeeca2ec50",
                    "Abbreviation": "SYRIA",
                    "Description": "Syria"
                },
                {
                    "Id": "43bd2934-4639-4989-8ddf-17e8321196f2",
                    "Abbreviation": "TAIWA",
                    "Description": "Taiwan, R.O.C."
                },
                {
                    "Id": "ab65d829-e2cb-4929-875b-29e3ec267f55",
                    "Abbreviation": "TAJIK",
                    "Description": "Tajikistan"
                },
                {
                    "Id": "604e46ed-ce2e-48c6-a0b1-7bafecc51496",
                    "Abbreviation": "TANZA",
                    "Description": "Tanzania"
                },
                {
                    "Id": "c900059e-a549-4079-80cc-4c087cc58301",
                    "Abbreviation": "THAIL",
                    "Description": "Thailand"
                },
                {
                    "Id": "88309510-b1f0-4fac-8d8f-69ac128209ae",
                    "Abbreviation": "TOGO",
                    "Description": "Togo"
                },
                {
                    "Id": "8983b29a-bb77-4696-b2c6-83746f9936b0",
                    "Abbreviation": "TONGA",
                    "Description": "Tonga"
                },
                {
                    "Id": "beb76d16-353c-4cfb-8097-658163735d1e",
                    "Abbreviation": "TRITO",
                    "Description": "Trinidad and Tobago"
                },
                {
                    "Id": "28bf9b80-2934-4586-ad03-9481c76203ab",
                    "Abbreviation": "TUNIS",
                    "Description": "Tunisia"
                },
                {
                    "Id": "1ec01a04-68a7-4153-9fbd-9b168c8ce962",
                    "Abbreviation": "TURKY",
                    "Description": "Turkey"
                },
                {
                    "Id": "c07c9b8d-0c7e-4976-98f0-897ebb5f14b5",
                    "Abbreviation": "TURKM",
                    "Description": "Turkmenistan"
                },
                {
                    "Id": "930066bd-d670-4ecf-bdcd-7b8b8409467e",
                    "Abbreviation": "TURCA",
                    "Description": "Turks and Caicos Islands"
                },
                {
                    "Id": "97d23e8f-1ca7-49ef-a992-5ced57afb706",
                    "Abbreviation": "UGAND",
                    "Description": "Uganda"
                },
                {
                    "Id": "c9daf9c3-b335-4dfc-982d-6340bb18bda8",
                    "Abbreviation": "UKRAI",
                    "Description": "Ukraine"
                },
                {
                    "Id": "8d92e4c5-933a-4339-9e1c-8109ff018bb6",
                    "Abbreviation": "UAEMI",
                    "Description": "United Arab Emirates"
                },
                {
                    "Id": "c636b617-5cca-42e4-a513-85bfd1c0ca72",
                    "Abbreviation": "UK",
                    "Description": "United Kingdom"
                },
                {
                    "Id": "d81cef85-7569-4b2e-8f2e-f7cf998a3342",
                    "Abbreviation": "USA",
                    "Description": "United States"
                },
                {
                    "Id": "c8e736e8-d168-46b2-bf6e-c2244a0ab742",
                    "Abbreviation": "URUGU",
                    "Description": "Uruguay"
                },
                {
                    "Id": "eb76b0a2-2d22-4094-8b78-2d164235fd54",
                    "Abbreviation": "UZBEK",
                    "Description": "Uzbekistan"
                },
                {
                    "Id": "7775d5d3-4a20-44d8-ba65-84f696d39235",
                    "Abbreviation": "VANUA",
                    "Description": "Vanuatu"
                },
                {
                    "Id": "f2c5bf1f-91d0-4dea-93d8-16e1c68ca1a4",
                    "Abbreviation": "VATIC",
                    "Description": "Vatican City"
                },
                {
                    "Id": "1e7e5e3d-aaa0-4425-817d-77e3601d360c",
                    "Abbreviation": "VENEZ",
                    "Description": "Venezuela"
                },
                {
                    "Id": "f91b15f4-a2cb-441d-8f91-1022c1bf187a",
                    "Abbreviation": "UKWAL",
                    "Description": "Wales"
                },
                {
                    "Id": "449d085d-33d2-4c9e-a98b-681f3d4675f1",
                    "Abbreviation": "YEMEN",
                    "Description": "Yemen"
                },
                {
                    "Id": "ca92e989-b54c-431f-8351-02f3728f6d8b",
                    "Abbreviation": "YUGO",
                    "Description": "Yugoslavia"
                },
                {
                    "Id": "75288e58-ae1e-4f74-8f6c-1f76e0bbbdeb",
                    "Abbreviation": "ZAIR",
                    "Description": "Zaire"
                },
                {
                    "Id": "52485e67-9bde-4c67-a21c-efd20049f6ff",
                    "Abbreviation": "ZAMBI",
                    "Description": "Zambia"
                },
                {
                    "Id": "5275c353-a940-46ec-86cd-643a03a92d9c",
                    "Abbreviation": "ZIMBA",
                    "Description": "Zimbabwe"
                }
                ];
            
            
            return _promiseHelper(data);
        };

        service.getStatesForCountry = function (countryId) {
            var data = [
                            {
                                "Id": "5850377a-313f-41f3-aeb1-ed99531fac72",
                                "Abbreviation": "AL",
                                "Description": "Alabama"
                            },
                            {
                                "Id": "e4186600-c7d9-473e-b269-354d3f9470fb",
                                "Abbreviation": "AK",
                                "Description": "Alaska"
                            },
                            {
                                "Id": "0a063513-4101-419c-b15b-b5e62c53b9c2",
                                "Abbreviation": "AS",
                                "Description": "American Samoa"
                            },
                            {
                                "Id": "b7403c3a-84a7-480f-abef-3caffe19b28d",
                                "Abbreviation": "AZ",
                                "Description": "Arizona"
                            },
                            {
                                "Id": "578086b8-3309-47da-9480-b44d72b068e5",
                                "Abbreviation": "AR",
                                "Description": "Arkansas"
                            },
                            {
                                "Id": "ff24417d-b1cf-4186-bf97-35ad67bed24f",
                                "Abbreviation": "AE",
                                "Description": "Armed Forces Africa, Canada, Europe, Middle East"
                            },
                            {
                                "Id": "e1b27932-1f6e-4c0c-903c-c7220ad2da11",
                                "Abbreviation": "AA",
                                "Description": "Armed Forces Americas"
                            },
                            {
                                "Id": "77382119-ecb4-4daf-9015-b9f5ed4df7b5",
                                "Abbreviation": "AP",
                                "Description": "Armed Forces Pacific"
                            },
                            {
                                "Id": "5c72589b-3898-4760-880c-4189cd8c5f7d",
                                "Abbreviation": "CA",
                                "Description": "California"
                            },
                            {
                                "Id": "9ab1b42b-a214-42d6-991d-d64abaa3aac7",
                                "Abbreviation": "CZ",
                                "Description": "Canal Zone"
                            },
                            {
                                "Id": "461f2edd-5a53-4ce4-9beb-53e477c3db24",
                                "Abbreviation": "CO",
                                "Description": "Colorado"
                            },
                            {
                                "Id": "4c537f5e-b578-42e7-82d1-cec5abba4e37",
                                "Abbreviation": "CT",
                                "Description": "Connecticut"
                            },
                            {
                                "Id": "3be01f52-4aa2-408f-8be9-dfa62d226c23",
                                "Abbreviation": "DE",
                                "Description": "Delaware"
                            },
                            {
                                "Id": "2667a33a-e5d1-4d73-838a-786a7b2f7c27",
                                "Abbreviation": "DC",
                                "Description": "District of Columbia"
                            },
                            {
                                "Id": "ddf99251-e5d5-497d-912b-4304b7c7c04f",
                                "Abbreviation": "FM",
                                "Description": "Federated States of Micronesia"
                            },
                            {
                                "Id": "12fdefab-e3a3-4aa2-8004-33949774fbbe",
                                "Abbreviation": "FL",
                                "Description": "Florida"
                            },
                            {
                                "Id": "34205e91-f0fc-45f7-a66d-bc4068c23eb0",
                                "Abbreviation": "GA",
                                "Description": "Georgia"
                            },
                            {
                                "Id": "6780db43-a8ef-4a77-bf36-1b7c27a3f69d",
                                "Abbreviation": "GU",
                                "Description": "Guam"
                            },
                            {
                                "Id": "2bd86ec8-c12c-426d-ae40-5ef5c86c35fc",
                                "Abbreviation": "HI",
                                "Description": "Hawaii"
                            },
                            {
                                "Id": "28e097a4-985f-496c-8fe0-c70ea462adbb",
                                "Abbreviation": "ID",
                                "Description": "Idaho"
                            },
                            {
                                "Id": "36b9d3d9-0979-42f0-b61c-aae41c3211bb",
                                "Abbreviation": "IL",
                                "Description": "Illinois"
                            },
                            {
                                "Id": "d80b3b7f-f34b-4af5-b907-a01422537b20",
                                "Abbreviation": "IN",
                                "Description": "Indiana"
                            },
                            {
                                "Id": "be31667f-4f7a-4daa-a984-f9e8057f4d94",
                                "Abbreviation": "IA",
                                "Description": "Iowa"
                            },
                            {
                                "Id": "91f184ce-bf56-4bea-a104-44473f8e9584",
                                "Abbreviation": "KS",
                                "Description": "Kansas"
                            },
                            {
                                "Id": "77e40b3c-c68c-4022-adc1-a2a135a890cc",
                                "Abbreviation": "KY",
                                "Description": "Kentucky"
                            },
                            {
                                "Id": "dc699652-3a09-47cc-bbbb-2669ee38934b",
                                "Abbreviation": "LA",
                                "Description": "Louisiana"
                            },
                            {
                                "Id": "65e6fded-d4f4-4647-a888-6e96484901c1",
                                "Abbreviation": "ME",
                                "Description": "Maine"
                            },
                            {
                                "Id": "536a61ec-d31b-448d-b673-08634f731fcd",
                                "Abbreviation": "MH",
                                "Description": "Marshall Islands"
                            },
                            {
                                "Id": "0a422e8c-bcad-4fca-9414-ca1e83bbfdcc",
                                "Abbreviation": "MD",
                                "Description": "Maryland"
                            },
                            {
                                "Id": "cfef4a9a-e952-40a3-93bd-95342af5bf40",
                                "Abbreviation": "MA",
                                "Description": "Massachusetts"
                            },
                            {
                                "Id": "96d01c1e-f5c1-42e9-b02c-25814f74527d",
                                "Abbreviation": "MI",
                                "Description": "Michigan"
                            },
                            {
                                "Id": "570db467-e4ff-47cc-b8da-48543499b4e8",
                                "Abbreviation": "MN",
                                "Description": "Minnesota"
                            },
                            {
                                "Id": "c8614a5d-da68-423e-bdc9-a45b48f7ea41",
                                "Abbreviation": "MS",
                                "Description": "Mississippi"
                            },
                            {
                                "Id": "ab7b9e62-70d8-4eb9-ac6c-f9fb6798402e",
                                "Abbreviation": "MO",
                                "Description": "Missouri"
                            },
                            {
                                "Id": "e652e8f2-c189-4d61-8fec-7fe16b85f649",
                                "Abbreviation": "MT",
                                "Description": "Montana"
                            },
                            {
                                "Id": "4c1e6c10-8982-4913-a655-8da5044c3499",
                                "Abbreviation": "NE",
                                "Description": "Nebraska"
                            },
                            {
                                "Id": "61b62128-c968-48b6-8197-43d17689f0dc",
                                "Abbreviation": "NV",
                                "Description": "Nevada"
                            },
                            {
                                "Id": "c4cc8712-74a0-4dcc-9024-f8c0cfb60dc8",
                                "Abbreviation": "NH",
                                "Description": "New Hampshire"
                            },
                            {
                                "Id": "7aeed892-eb83-4963-89e2-725cf770594c",
                                "Abbreviation": "NJ",
                                "Description": "New Jersey"
                            },
                            {
                                "Id": "223b84e3-ca88-4073-8fa9-eda3f598636a",
                                "Abbreviation": "NM",
                                "Description": "New Mexico"
                            },
                            {
                                "Id": "9af5cb72-bfce-4c5e-9025-ebd5127d2fb5",
                                "Abbreviation": "NY",
                                "Description": "New York"
                            },
                            {
                                "Id": "2a5ec21e-2b8f-4c52-95c2-f4b7c3d0b15c",
                                "Abbreviation": "NC",
                                "Description": "North Carolina"
                            },
                            {
                                "Id": "e2b8de07-cfd6-42c1-a390-352fefcb6faf",
                                "Abbreviation": "ND",
                                "Description": "North Dakota"
                            },
                            {
                                "Id": "24f5e37d-fe7e-4ae8-b7ae-ed69fac7974f",
                                "Abbreviation": "MP",
                                "Description": "Northern Mariana Islands"
                            },
                            {
                                "Id": "454a2bad-ead2-4305-ae15-e988d36a05c1",
                                "Abbreviation": "OH",
                                "Description": "Ohio"
                            },
                            {
                                "Id": "458fb737-7927-41b1-b1c3-17f69efe8865",
                                "Abbreviation": "OK",
                                "Description": "Oklahoma"
                            },
                            {
                                "Id": "1cc0674d-6d8a-4f42-942e-030b9e7e9660",
                                "Abbreviation": "OR",
                                "Description": "Oregon"
                            },
                            {
                                "Id": "45d719a0-10f5-439e-8dad-9adea147a91e",
                                "Abbreviation": "PW",
                                "Description": "Palau"
                            },
                            {
                                "Id": "367da171-8980-47d1-abf8-94045a8a97f2",
                                "Abbreviation": "PA",
                                "Description": "Pennsylvania"
                            },
                            {
                                "Id": "a3b8deec-3bb1-4d08-a9ca-b2624e9029de",
                                "Abbreviation": "PR",
                                "Description": "Puerto Rico"
                            },
                            {
                                "Id": "ba9b5958-b1d0-43ed-ba37-5e7c0eddfc78",
                                "Abbreviation": "RI",
                                "Description": "Rhode Island"
                            },
                            {
                                "Id": "5b9eb7fe-2a79-4b14-83a0-9c116a548f02",
                                "Abbreviation": "SC",
                                "Description": "South Carolina"
                            },
                            {
                                "Id": "42d9891b-e53a-43e0-8960-37beeaf13226",
                                "Abbreviation": "SD",
                                "Description": "South Dakota"
                            },
                            {
                                "Id": "cd46eaa2-5a7b-4bb8-b2d4-6fa2f2d6901c",
                                "Abbreviation": "TN",
                                "Description": "Tennessee"
                            },
                            {
                                "Id": "7412f33a-85c5-4837-8a33-0112a171e2dc",
                                "Abbreviation": "TX",
                                "Description": "Texas"
                            },
                            {
                                "Id": "22ce480d-05ec-424d-91c6-6bba6c40ea3e",
                                "Abbreviation": "UT",
                                "Description": "Utah"
                            },
                            {
                                "Id": "2147eae3-cd0b-4541-98a7-c9e1af85ef5f",
                                "Abbreviation": "VT",
                                "Description": "Vermont"
                            },
                            {
                                "Id": "957f4596-66da-4d69-aef1-cd766d4bb60e",
                                "Abbreviation": "VI",
                                "Description": "Virgin Islands"
                            },
                            {
                                "Id": "ed7f7f79-8132-4422-a9cb-28bb5e14cf74",
                                "Abbreviation": "VA",
                                "Description": "Virginia"
                            },
                            {
                                "Id": "d935c8c4-b21b-46bc-ad73-b0e61a4da075",
                                "Abbreviation": "WA",
                                "Description": "Washington"
                            },
                            {
                                "Id": "14ada165-6e0e-4112-b2bc-fbe4c64eb700",
                                "Abbreviation": "WV",
                                "Description": "West Virginia"
                            },
                            {
                                "Id": "6e427425-f441-4b69-979c-078184e67834",
                                "Abbreviation": "WI",
                                "Description": "Wisconsin"
                            },
                            {
                                "Id": "f4fb1988-b2ea-4e7a-b14d-9259afb7e15b",
                                "Abbreviation": "WY",
                                "Description": "Wyoming"
                            }
                            ];
            
            return _promiseHelper(data);
        };
    }]);
})();