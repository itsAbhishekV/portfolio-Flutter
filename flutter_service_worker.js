'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "878859b7ca68d571dda6638d35c5e217",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"CNAME": "65b421ee228333b6c5cddda981a98e74",
"main.dart.js": "c73f74ac44757e40d288a3790c6c4908",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/ORIG_HEAD": "d1ab35d28812d7e1e9abbab6b7d843bc",
".git/config": "d7cf19043009ac1d577f8830c762d796",
".git/objects/61/a9173b1097b5c6f485804bd52785e5770d65ca": "6eba9d70055e4204eab1119741af1476",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/66/83e39b2d16cede76ff8d58be71d8e3bdeea754": "4042d13dbfb7d5bbff1ab70e0dcea277",
".git/objects/57/32da7a6c05e2da6cb372a36835f9d28814c323": "0a94c46bc59394bf12cea0df62d69e88",
".git/objects/6a/24395822dd2e9eee116863ad951af4877ea0ca": "96ce61f44141183d99d025d503423bb4",
".git/objects/35/b043ec687719e171ba972589cc23af79790edf": "8bc493a53885448e945275bd74318c98",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/56/25c00a7e2bb203a2c8d17326804b00cecd3b0f": "99501b23acd779811abcebf64109c9a7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/6b7346787d7f97f7fa54c931e11829a77665b2": "768080931b1822dd80f8f44e547e1f34",
".git/objects/93/5739823c1a9125feaafd13306b677125dafc40": "c4bd2705daa17c788ddcb28eebef22f5",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9c/82e3c5bcf6793c9eafd6862f02366f90ec209d": "11eeca62efb3a45f67614d9413da8beb",
".git/objects/a3/b18cc21a6b98c0e5156b1b36a31c27ffda6b7f": "34c3bade0a4d4290632b40ec9ff1f574",
".git/objects/b5/54785723a30f66244f3de88f6d2a66e7a9858b": "3abfcff9be4ddbfb0b21d055d1bae878",
".git/objects/b2/7822baea48062bf11617ce763e8d623c3a9769": "c5b9e0f1b9ad3cf97e43c2702903275f",
".git/objects/ad/f7db765e9f4a92d03eb1d9524768fb09621bfa": "f88adbcd7b33c8b910b882e599452e93",
".git/objects/d7/6ca795e346e6e56b562bfb7202f686f706242e": "ed3d6e90c556fac5f26d0e07fe2c14a4",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/2a1f6dd2f92bc86e22644af40a988bf1d375c7": "9a427893f47b6767b99e4536af64394a",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/64377a8ebc764ca8003877af23e64a8074fa17": "ea779206c1ab9c3c83945aa0af51d6de",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/678355663913ec34c1a5a371cf92469e28e777": "86809441e4ba11e5255d783cea74a8b9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/7741f245fc38a2ac516e1785af2304f9ef39ea": "888f0c8182bd06b523083e67a2cfd081",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/1664d0a80e35f89d98a49a8cf5a350131e8766": "746552856ba50645179d8f291a9e877a",
".git/objects/c9/93e82216cd9b62f025c441fb65b7b7ccf2f96e": "9605e075088d634aafdfa3a6e73dda6c",
".git/objects/fc/72038ec83c3c2850a2bc09065596b7aea18808": "6595fb70f5c57e637f7086f5385da4bd",
".git/objects/fd/83614d2ea5365ecc28a0c8f58d37557763cdb4": "70717fd25b14e52447139ec1dca71567",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/0c3e463c1f610ad2eb4401f3c42268dcc3b0ba": "4bba0c679a79d628428be9b57b82afc6",
".git/objects/cf/ab8a5bbcc1a6f8913738b4816b946ac56e35cd": "e1a5691dd46bf8f90a7cfc9749dcf98c",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/23eeb9c93a377d0f4ab003f1f77b555d19b1d1": "3d5a77b3829f7624a7acd6a67a20a19d",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/77243fc7ae5f860243c768fc7bc659839988a5": "3b1c75299f25f48fcfed8983e7d8b1d4",
".git/objects/c6/f0f377a1ab944e2591f1d68b41034d9b68862f": "50daa0351e0be27f07f2b4ff13aee32f",
".git/objects/ec/c7041e23ed1a61574efe48e8bc42441a401d6e": "aac2d0844d4ef275550a63d0347a8a86",
".git/objects/20/8a1fffb7b08c1228d66dc6639d24ecee795de2": "d7a198c91f34b32da7c1afed3f3ad906",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/fda98d02d092a849dc4b666f44f4ec937db1bb": "55f13223e9345ed7776cb6259351e959",
".git/objects/29/0daaa24f05726b8f1849a59e74f9f1fd6d7f05": "f7d4b91d7f7681195ec2f6962d968a54",
".git/objects/29/9d620b82326b6e021cb2af27611bdac950ebe3": "e271ba7f153b9cb08406fa60d0d8a4bc",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/89/02babff73f054f1b3b432b9d288d2a53e23b2b": "dc79c49c416bb0e4ade89a2f76aeb135",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/3d12c9db4e2d973d7ee3bccc867c26511b663f": "8f00b9cce1898269f21fc9067c834865",
".git/objects/73/2be99e1bec5b4476b852ad6737de4ac5d29e75": "111b1d46cfa797ec3bcfea4495ec4734",
".git/objects/87/4b1b0dd7c63f46240530a710ccd503d58d866d": "0da78f91e2108665baeb94f43f846938",
".git/objects/28/5a25785c9e3c88d581bc653f6f5ad1f1c6cdc7": "797afb74ce72d14b445ec0f57b60cc5a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/adca026baca5da814495907a4739716ad33249": "1cb8c81a20acf4c50fb33ab2864b39e7",
".git/objects/4d/494e3803b4f830d15b3704477b7cd3b5bc508e": "260731a20a7f50894f3d773acdd3506c",
".git/objects/4d/e00f05d09a211582308abca1e82b2fefc3fa3b": "9908f8910e891f41d0105abe1c37e368",
".git/objects/75/f30173faeaaca996a322a7d6b0028ee47ada56": "dc6b1f8b9df3a541b79a891149033d3d",
".git/objects/43/03d4567ef3e7495d6272538df76520dd5c72e8": "760795f9f83241f9f7f72ba348258f33",
".git/objects/43/6669f4f567707e8ad9f0bfb7b7de15312b4c84": "25efbacf8f23e92d94cbc4955cc8f851",
".git/objects/43/4a6b21116bb2519ccaf2d7e20d11d5e0cc280e": "4ce4d5c8554316ce6264fba495a5373d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/f56815419842d3ca209c76f3a358a45f9e39bf": "321031169c28d6fed58efbf11800f14b",
".git/objects/36/de954b2f988e2d904c26e401563fb60472951f": "bd91c3368f2118ba95bf62f237977200",
".git/objects/5c/951270bf5897c2b28c302876b927b966220eae": "87a697eab613dea895da2f22316c0e59",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/91/fe85eb2c8781b2f1d2ca9e8cdcfbdf7f45b6cc": "1f3466ed2e45d21604e117d6b4c390f3",
".git/objects/91/5142b580e262c8a39b034989e13e73685f3852": "19dd08414cad2ce8f0e7a57f3740d120",
".git/objects/65/025be91ad00f605495b40fb9b9fafaa924bd93": "2437da2083dd7e31af92b0b205722502",
".git/objects/54/469536f7006f66bcfb989186498becef73030b": "762dc8dc3ea7ef061d39dd71cee6a242",
".git/objects/5e/4851f0ab7e0268da6ce903306e2f871ee19821": "175e3d630946dfb12bef53afeb623eb0",
".git/objects/6d/05ec46680b6a9b44988beaa9a3c7a7e7020817": "0ecabe91a1922f1a4b1056518e6d380e",
".git/objects/06/2beb823d3e665b915a4cb6003e22971d842323": "0a8bbec7734b90eebd02889f8b71a642",
".git/objects/99/9b1ea6bcf66f3d31acecea96da2acdce01c13c": "1e2d1a134761553a0da32be6563ef26b",
".git/objects/97/ea29cc86bc36fd04643e6a66db1121046394cb": "d93baf2633b99caf4d50aaf32bd63076",
".git/objects/63/e6eac606a70aa72f857ff493c30a5928b1de63": "8e86b6b38dd47b929e5f7e382e35d6b6",
".git/objects/0f/b5c527edeea6e2d898d7465c9247ea6f2dbea5": "2238a3392fe26ccbd55ab8e5e3c34cad",
".git/objects/90/ea9e97a9c2d752499f13cb18dce6f9709e2438": "d86808c790370d21ac24624963e36da8",
".git/objects/90/b689b49b8c9c0aa33d9fd8d086dbbcb75ea9b0": "37fcd3b37e8e27f1a6fafb712d7ac7d5",
".git/objects/90/d2c7179ab0604fae58e25241536a3895b036f1": "a2cc909fcc98759105295d4ad16f101c",
".git/objects/bf/ab24794163364c4814e930a88b93cdb1c75eb1": "44e64e266a71d883f391179b11a177af",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/094271b8de97d37078ca171a717dbc4dc91eff": "d941c1a2a3341c171ab169cc9d803630",
".git/objects/a0/1f3777a6fc284b7a720c0f8248a27066389ef9": "1ef5c3c4a04465246d17da73a0924833",
".git/objects/dd/a920c3c65a99d30799c66cb5efd06d16abfb18": "9a9d3d24441d0e840d29e8a63923939c",
".git/objects/dd/a40d68ce5fb48886036b28c27cc27a55bb3e75": "9e3a04f4d2a038de6fd6218c7f730429",
".git/objects/dc/0ace50973ae99cf5805a3edb233e5eab7438b9": "1f2e1499d8c630220ece1a143ddf953f",
".git/objects/dc/8ca15916722447237f5c978360909e3f747a99": "5fab764af2760d081689f38264d49ee1",
".git/objects/d2/7050bafb5270a9fcc236144bc817da5ca679a0": "b1b64b84caa32cf9ad09ed4a7db12fcf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d24bfeafbe493e26e9aa6973068a8045264b5c": "95296dc2b40bdf45a32f2c16529206cd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/d5bd223db415c14ce6c70db0053723f72f3674": "99745299f2b7bf4f3e30dad22b6c70a8",
".git/objects/a1/8a82d14baf508ff727989e5ebc81b43089c84b": "c59845a8f0d1691c6ee5e605a809cfa9",
".git/objects/a1/0d58ae29a8c9ea2320d5ae10b98b3ef96ef21e": "d4bb711cad14a8f63653d589b4a32772",
".git/objects/c4/d3c78b2c17803bc411dadbe6fa53d2a9705106": "40dced88e94b74f714ae57b6e9981117",
".git/objects/c4/4f4e047aecfe7f02f1dba9a10018d61d7d8be3": "2464a74ac172920c4e6a66fe8d4be712",
".git/objects/ea/8164d9173e27ac8fad117e03fa326df351ec8e": "679dad45c54f1988b3f36540f64960e2",
".git/objects/ea/8140bbdeee09c0f2c653f11ed8a2045ed39152": "9641da506d3dc084e85a6cf3d3937c4f",
".git/objects/e6/b3d16df5d4bdf800b48e6d91953e4f14be4060": "2a0421c849c0047f19caa561033a62c2",
".git/objects/f7/0e796526d0e3719dc8dec391ecb78de31c1950": "fd73cc5800ea8fc15ffc5f48dcd7efa8",
".git/objects/fa/9c542d0ff34546845a8ad9e8b855affc292057": "59a76531a5c1a64eddafa92754017bd1",
".git/objects/c5/88a4dc4252cb0df42f804435f0a926bc1a0330": "31a6ca93e098582ea0e863b6b6ee60df",
".git/objects/c2/80508b348c696f367e581b2b093d03e06a45c7": "2f24f68bb61d05bd7961aa44078e23a8",
".git/objects/f1/2799d745e58d90b4da1ac8bc37b73c8f24bb3b": "89ab8c23593fd022f9656479040f7cff",
".git/objects/cb/7e29df3a73b757d862df34053c29066f94edbb": "db06ac6a0bdd121f693f53670a2656f0",
".git/objects/46/ce8acaab6536ce4a9e49f7228a807a2ea05938": "4382acc5a900938b624f1e0256b0104c",
".git/objects/83/965d95a3f3d534af57d8bc1d294b5097540b62": "791a314317855c94afb0d6546a26cf0b",
".git/objects/83/f7494fd0ba1c00c1f7591cb789972ac37c9648": "9a5923019e03f394fbb5bbc238ba4e63",
".git/objects/1e/12d25a619f18e2ad83c1f9058e83c846c12d22": "565189680bff3d527ce9913141857c0c",
".git/objects/24/22cd50319ee3ef2995a929f63d7d1da39b8d69": "68f7160c8053f4e6a4fb62c983857120",
".git/objects/23/20b8a4f71dbe24e4f165e93fdd4fab4474b1d9": "f9f2344f3b6ebaf249c6317e2cbe3afd",
".git/objects/8d/471c40d568267d770cfb7bc103ddc650955327": "eb1dc337d5f41ec5ac8305c9680fb8df",
".git/objects/85/82be850aac59a4ad538cc572d62b2bdda88944": "229c9aedd88bead86da429e494a7cdd9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/91573f59ffb364fa403361453b8c1f82178d6b": "6c44841fce6964c570f04489e46ca474",
".git/objects/71/188f5cb2815547a5fb785f220910324ad8aa65": "4158e15d340e315750b92098952bd603",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/c15e7d4bca4ac9e51094cc40e5de928ca093b8": "d5e0729b6df6bbff22c3b0a39982ded2",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/67ec514eb68532d9ba77f9e42ab538f771fd4a": "6237b27d0f773f420e2a0e083e72fc74",
".git/objects/49/3dc6c109a1c8e5224f2283b9fba51da6aad87a": "a11a1a7d29e18234be9eb6203d7c8573",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/8b/2168f92d250832c555b9ebad029f0ad4a3035c": "b8a762d88da4a28b86f50e810119363e",
".git/objects/14/caa203f0d6b16aeb2895a3fc0bb030d048951e": "5e53e4a7021e5681ad01b1a8f2754743",
".git/objects/8e/6affd16f11d7a0bde8710a7a7e426ec374cac9": "d9dff87cfdebbac2d90ba08ee320fbf5",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "99390a397e22b689bcc9c74318f124a4",
".git/logs/refs/heads/develop": "967cd143802657b7ed8627c5047465cb",
".git/logs/refs/heads/main": "71be24c552ab2351b84a424bfc12414f",
".git/logs/refs/remotes/origin/develop": "795321bbba91e3dc8877d45228da1bad",
".git/logs/refs/remotes/origin/main": "dd132f34567bb0ce6547bfcdd5414a45",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/develop": "a7746ff8dc63036a638c52d775ed7b86",
".git/refs/heads/main": "23e5f04d7fb466591697bdaa654d7fa0",
".git/refs/remotes/origin/develop": "a7746ff8dc63036a638c52d775ed7b86",
".git/refs/remotes/origin/main": "23e5f04d7fb466591697bdaa654d7fa0",
".git/index": "bb7873dab7373cab2443cf1fb2ba802d",
".git/COMMIT_EDITMSG": "e9d0d46127f049fb88f57fb6e7f50946",
".git/FETCH_HEAD": "9781eda75ea50044c73d69f0e6123347",
"assets/AssetManifest.json": "2d7a2c808d2d93d43c473eb776a257e5",
"assets/NOTICES": "d83534a439cc9f46e178c11d0fca80e8",
"assets/FontManifest.json": "55488e682035083d8b922a6ee4a5fca2",
"assets/AssetManifest.bin.json": "6639501dc72fd21def3e95424581cf4a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f0a08f52dd761b5362b64f5f74518853",
"assets/fonts/MaterialIcons-Regular.otf": "8d1f1f0d26a0ac9eb3a8de5d35b32e82",
"assets/assets/video/practice.mp4": "0fb1d6ec05657c59ba53beea9e677cef",
"assets/assets/fonts/Inter/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/Inter/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/fonts/Inter/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Inter/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/Inter/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/Inter/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/Geist/Geist-Regular.ttf": "51351df7cae93bd671992b0e5a0d2b3f",
"assets/assets/fonts/Geist/Geist-Black.ttf": "ce8160788a5a8d31f86f28f6cf73a92b",
"assets/assets/fonts/Geist/Geist-Bold.ttf": "971e82403c789abd5badaef09dd2a025",
"assets/assets/fonts/Geist/Geist-UltraLight.ttf": "8196547bd46cd263c8d9b2502d1b0c8f",
"assets/assets/fonts/Geist/Geist-Thin.ttf": "8d9378079a21eb30da144efa4c3db271",
"assets/assets/fonts/Geist/Geist-Medium.ttf": "bd6e4c43b797315fb03bd441a9983a2c",
"assets/assets/fonts/Geist/Geist-UltraBlack.ttf": "e481d4adff0b3ad5fc444a9c714328f4",
"assets/assets/fonts/Geist/Geist-Light.ttf": "eea5f5e473cac9182c56056f9976550e",
"assets/assets/fonts/Geist/Geist-SemiBold.ttf": "3d13b4772610f7d82558968668543680",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
