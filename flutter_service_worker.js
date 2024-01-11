'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bc9cea7dd28bca6cb3bd8b2d787c89cc",
".git/config": "0a50cd22f50ea1d4c00ed0cf7faf4290",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "21d55609a3fc71a5f9868cb364a11049",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "262ac998cebfb823349587bea917baab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f91d6d1302b9b9cad60b1af7b751882",
".git/logs/refs/heads/main": "cd7cb6301fe2f7a3156230e7319766f8",
".git/logs/refs/heads/master": "fca98de3323a641cd1319801e8424a89",
".git/logs/refs/remotes/origin/main": "c03977793f2ddcd4db8ed93031d6cae0",
".git/objects/00/07d06b8e24d9c84ed574270cfca53c939ca3f4": "1a6520e4aec0fc0e5903fcceefbc9de9",
".git/objects/00/518edd804dff6df28e7c1ce05b4acdbc4fddd1": "e381aebed60995e44555fa5e0f27ee23",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/fc3bf631b1ea1e154ed6b613aa16c0fce71df5": "9206d31bebf37173a7e7f415e64ccb64",
".git/objects/07/15704195bfa407c0131a3db6d25519c07ed850": "90f775b272096d0db8a37878ce50616e",
".git/objects/07/6f0a1efa7d1763bc9d0c14ccf725fae3a61abd": "92b3c2f1f003ebb4ee3351aac4efee5e",
".git/objects/08/36eb2594253258aca733624f1271ddf13b9e7f": "7210030a0effe53d31f72d46af6ebcc4",
".git/objects/09/7a6a78586b454bb4c679ed4ebf0a6b0260d78d": "8065548e1e40215e2aceffedcccb4eaf",
".git/objects/0a/776c8a959f14ee3748201f761a3a8e253e125e": "67ce11c2d6399ca87852d55da5f1b168",
".git/objects/0a/8ec9a15793d16e0ba2ae8626a4b2d26005124c": "d2a76b407a025a718915d7ef5fc65921",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/f06c6f3bae986f66f8e87b7e0ff123ad60650c": "97186b7ff8c0c8ad8ba2035ac5f28c37",
".git/objects/0f/87e1134139e46960ed9e8f70eb4342de501236": "c4f43a25f21ccf72eb2d99f9e30d5517",
".git/objects/10/e47af70366420a5a74dcfd0a312f994e825ebe": "8e0562f079e41387c077f02ecb68d324",
".git/objects/13/b8a94132c855ada9e230aa2e08bad78805b8a9": "a25963c23dd2e2dc574987cbb101e8e7",
".git/objects/17/48f4a85f11509975eb6caabf9d520755c26fbd": "dcd35887a02542b51aa4e8e446b89eb7",
".git/objects/17/c23c5ddff27a700995116d2793c81050717c01": "1122afb8b71ce4f3b22110de7a621c09",
".git/objects/17/da179558e42d1a2697947338dcc62f80a48867": "606998907d8c8525e4c1e0500ecdcc4b",
".git/objects/18/6230c15cd860d7806392fa94342715d0ca3c0f": "c900d4b383a86f4b06dac55f02b91503",
".git/objects/18/8d7f2846f0ff76ba7aee88e04aba8d0bd91982": "403970b35c06a9345b6afb4ac0de57b6",
".git/objects/18/f9bf13122a6d2e6d173ca3126df7fd73e6344b": "39e5ed98a1c7b7cf65418fc194a61313",
".git/objects/19/1de92e7fa54a23540372c5abbea11c06566643": "ac7c85d7c3e06ab3c192df21ae5553b9",
".git/objects/19/7476b15ef2e5391cb048e4639e2e22b5f49ac4": "093add72a287075d9d20d5683b59d24c",
".git/objects/1a/1daa83bb07f924595a1290c2931acb1aac8987": "3dc776c8e716ca7f668f4d30c3417983",
".git/objects/1b/75fedd23ee4f51fdd1de30c2c2f368bfaf383b": "0d739c767525ffe03ab9770edb3da113",
".git/objects/1c/71054c1cb8c2db332c6e5844859f84eedc6d93": "20746f40a29910ddf79028079343e814",
".git/objects/1c/bb659b4721da0cfd25252c92858e1e486d09a9": "bd9ea21e9a9973a57f15f2956cb4bc1a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/4119eb74879f769ed3f6fafffa307094934985": "ae2bbd7869c6f1ba2a924e4744070250",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/53e246be69b7ec31e946d53b9eb971fe6ed2bd": "2a989e072118df34445cff10af60f09c",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/0e0de5185aaa2574ef5b7279cb4a48bbe49632": "f4ca5007cd9f0cd5c9673a860c301903",
".git/objects/21/28bac818d5ab0cb55d7782c5757c8057886457": "1ceed494c115749677ebca8e976ee1bf",
".git/objects/26/1a716f1f0b332829f0f021ab00c144965f6c19": "d2c7943c37942a3241067df46a83d0d3",
".git/objects/28/0c17803f971005f7793b195e0fb3f7e16f537f": "c18f00895385dcdd2fed6e35f947660f",
".git/objects/29/c85e6b5aa03a875433ff680f17a58c0269fd3c": "d265d67483befcf3973c0fee0ee32900",
".git/objects/2b/45bc02116d1588d97fb7a3137d1c76d1c3b04f": "3337a0fcf3803a679dc4b6acdc86b5c4",
".git/objects/2e/bbe2c8ff061728ce3c1ca08f694eafe18c5a54": "af55c3e0b9ad9f1b032a21601076647d",
".git/objects/2f/8caf09c2c8cfe981f4f1aff25e4512e78faba2": "94045c971179a3678ed0017c2ef5fdf3",
".git/objects/2f/d0ea14ade93321701a38eaf88317c614584f29": "4398fe4cedbfd64d8df87f6e17fce57c",
".git/objects/30/ea0081344abaf19402b096810bd69a65436459": "ddf55df2f209660b1120aac34367d8fd",
".git/objects/32/b91241ff06080058079f9ff86b4d478409be9b": "62b6faca7d4001f2a9bceb6b7f354d40",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/422180e8a84bb662a7ce3d3795625f7fdfac5b": "2db8250e4201b31f8bce68b24e0ddb90",
".git/objects/36/7f4425dcee1b241d8f8dac83f948da50feface": "b0e2e1eaf16ab66f15201e882bf55c08",
".git/objects/37/570b1c1f8eed0c3d72a6edbf8e074101b10a03": "b0f6f2611e32367beb7429748dc8a46c",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/dafdd47e4c12e9dcc465841bb1a5cc85bf470c": "cbcfa9f1f2ecc92da0357276d187fcd2",
".git/objects/39/b6c1dcd03c076d40c4f37c0d3ff0bc04fccb54": "f8ab02d563d90d25cd49709d0e59db1c",
".git/objects/3a/5a81cb4bb4ffe5bfa2c235382d7f7d19551b06": "ff7e2711ef0ee174f480a767adcddf92",
".git/objects/3b/aec20b71f948a2ff3f5dbce72893100dd8e670": "727bcbae12063ee2dc6013295f7b63f3",
".git/objects/3f/bd28554317ec8ad1e68d4296dc1e283c97010c": "e0ae51fba604aafcde71b0ad1c60cfd5",
".git/objects/40/ceaf772a2eae7815ce4635b81b421bd72d522f": "5730568d0a428271c4fa45c8adbd0e27",
".git/objects/42/c11d19b4710348448fdf3d1ee1b88fae27179d": "c0eaee828e74292598a6a1bde054a385",
".git/objects/44/eebffd61b603f4daad6cc97aeb046563184cdc": "eed10bbddbd55b79b7558407b698f8fd",
".git/objects/46/4e914956681d5d960da1af7a9cd22492e39376": "ed065aef563df9507eba2898e86a6832",
".git/objects/47/425a57e03a7d80f31f10b07619863cb58952c1": "601e7a205f000664a5f1a54d1092fae8",
".git/objects/48/68d7c247b3cc5f9a85f6a1bcbcc40e1ba330bb": "fb4196bd72132708951fedc342716841",
".git/objects/48/8ec562fcbcb761dbf63091e41f054a43b87c26": "dec68fcc95bfe5a1fda588008dcb6f29",
".git/objects/48/ad582fc2c956691708f9e82ec00e5e287442fd": "951cc76965ecee42f76406186b3040d6",
".git/objects/49/0359034b2e5006042db7c1980ca5cedd0c0379": "20a19f5b211a26524fc173568b31691b",
".git/objects/49/81fc67962644e4d72cab0e35e352afb8d354e0": "d38871d1412de24b73b4e48bbfc8c603",
".git/objects/4c/f82ec065c5ba061e879f3c71ea2d191b9513c3": "80b8de883ddd5c75bebd182ead6ed5d5",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/3fa65159685bceb0e0c2572118f8d272141a9b": "da652cedab3a27843f38d5a7b8a68034",
".git/objects/58/cf0374c732868751a95144e0ab479d5bf96a71": "46d08ac3fb00e4bc4493ca5cdd5a022a",
".git/objects/5a/a050a5b22c0d83b2c3f37501710ca731d14f70": "c3e03a7be1882db4101c61a17b08f1fd",
".git/objects/5d/8205946c17ca01c8e02261e17624c9670aefbc": "9f7d10577d4ad56ca29a179029a21c05",
".git/objects/5f/620d3cd492fe1312b8c47fbb2049efd0d590e9": "d5c915107b49e1faedd96be544790ae7",
".git/objects/60/3406695429c2ef3d031c9ffdeb0685fb440d02": "74c6e0dc162498ba3e28db08108a77c4",
".git/objects/62/6868800a043c4078f3d994488d48627d27129a": "bcf84a67bec5da37829baabd002e9b39",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/d48fb135e513e49aa2c4f430808dcd718738a3": "a60a9a4a72a9dd6e532c3d17844cecb5",
".git/objects/64/c639baa2f74ac54c4d59c72526d66921f1cadc": "16f722488a7bb09a43855a1eb92fddb4",
".git/objects/65/65aec5d6c7d06c2c312a1907403d5485716038": "a79b570ebaa3a21f52344df1181230ff",
".git/objects/69/843bdd61c2212aa335e81e4de3cf3d5df0149a": "ace5ce03a67a960ae9fc86e7472d25bf",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6a/831a2dd2388746d91b5cbaf43cd666febbd5d8": "37327beae9c04ee07995eb583bd8ccd5",
".git/objects/6a/924a9fe66ca9397d66a58f27aa5bc2f6b0af5a": "b6b99bb6a48cb1f206b22ac6c8c76006",
".git/objects/6f/267c6043f856945aaf55ddd6ccf6169dcbc2e2": "3477549ca61d7c4338e96a7b74087d5a",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/6de58de3636212cc3dc4cb47e111971b60d39a": "b69fde63799cf43f91e5075091c76298",
".git/objects/75/8e22f0057e6fe9b5ee6cc5b586a1d289acd8b5": "2013c22d8bdd55da03b09a6531f455b3",
".git/objects/77/7a6d87f5de328998284ce7c4a0df169a6474a2": "4cd54a31c000b67bafe7f54a085e55b8",
".git/objects/77/c483c8232eb26a9ebc5e7d1420ff8dd9d1c851": "d309d03c69b35ca88ff99815f08c2d82",
".git/objects/80/d2ae230b6d0405612c191d71977ca755274fff": "bc5b79bc2033690cebeb8c6963c2aa73",
".git/objects/82/317c0df2bcd04a5a8a9b9758fb16e1bdaea3d2": "7897edae2e85af671fadd8b1aa4bab7f",
".git/objects/83/b0e458e3b02e97eb596f246f3ba4503a2e907b": "60eb9f62d33407b60b9d44b6917efeab",
".git/objects/84/ab204df00b67e662bdbf5f56f7d81d548e880b": "47ad0c1e7986649a3db018c7ee518627",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/e630fb8fd3de509765ec485695663e9de9b98d": "81ccee79e3e611cdae6bb44a6845ed76",
".git/objects/8c/2469789dddcbac97c22a0ab4794dc0165a509c": "816d31613f6ef9d9bfb3044b25582630",
".git/objects/8d/bc59db7de02feba467d36ad731dece14679d4b": "ddc70ee47b8e52ba5860805eac3915e9",
".git/objects/8e/303fc9e9b41269945c3e794c89cbc5bce40b39": "cefa7f8e3b4a978e7577fc72f5429bed",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/04a7a7f412e7af287ed1fb48c1aaf6ea7f094f": "1ee4c097ced5735401c5f115708b24e7",
".git/objects/93/051d9395873d06a7d3fc00773abd864f6117a2": "ed3c9621a7503de121746a629057e940",
".git/objects/95/a3cd9df3e238a6f622f387c98896049f8585b1": "a4e98a15d5931dd7581a720d68facc1e",
".git/objects/97/2e246e87e7ee736e8bd4b7a09fe162b9f118f3": "0cfb894035c29547785c0b30b674b222",
".git/objects/98/318f1e94ef103d05359755a08e7f1739c232d8": "1475e56f5ea1e534ed20cd9760ab83b2",
".git/objects/98/70319d7b9f2ed11d0292f93a71689447389dd6": "668a32f015c435d71982807662d4740f",
".git/objects/9c/cfcb770285cac40e94f6e940917720ecd7e742": "dc2300e1ea2510cd817b4861356ecb7e",
".git/objects/9f/0cc15805354f801afb29687e5cdec8fdebd09f": "e6f8aa776c56c48daf2d8db527a929b8",
".git/objects/a0/3d46341997189bede15ec8146b8417731f4685": "988e9f164d8862ad1307fd4d7b7922f0",
".git/objects/a1/5fca2f07c73500b8cacfdb52406d67a5e26a18": "f3a20386e3d815f423873e05b6b86442",
".git/objects/a2/45d031324677d9c3acd8cf028180b685323cde": "c2f003236f8b462da9650b561acf0b6b",
".git/objects/a2/e254984abb5e8f2cdd46f8987d422f12a47e43": "e35dca85b99db92b945cc99e8f59bed0",
".git/objects/a3/9628e081efebcdd328887ddbcb20e7fd10166e": "57b22d3b216075a5c350b5397edfa9d4",
".git/objects/a7/7157f8f560946e762c9157628fca887bf02b77": "d9293bf952db70e6f96938ab1c6d6d77",
".git/objects/aa/c817784119f53d50f66c35ced612e3e8ab974d": "b645c42c5da1d7c38ade71ddbb116767",
".git/objects/ad/15742218caa8a6209b9d23a7cafeb92517a513": "ce289b5fdb34a43ccf9f4ce493a5f48c",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/72ffe8814e9a32be004a6e892ca1c3a98121b8": "53f72c2889f78bc5c3a6b9406be5958f",
".git/objects/af/5ef8c288171032955d8bde84125403a9d31a6d": "7df59d6bc4576b2227aedbe353105748",
".git/objects/b0/fd888a383c07134442d36d61e1a302d350e274": "8c1dad6b9259776c1c0a21f652e7f8fa",
".git/objects/b1/3217611018eb90f49c4b11869c7b5fb8e23070": "2a74159a1ce2c9f80bcba27c5c7b2145",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/8b86e2f1eb899f127e2045b476849b57735017": "f00201d73be61b8074b109c7b492a158",
".git/objects/b6/6281cdf3ff0e8c35756c203c853affd77a7048": "2e8f34475d3d9d12e36fd533e8e01afd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b681c6d4a3bdd29647f5dc1a6d8a583a7f2320": "78209f23fc76165cdf7fde703af85a85",
".git/objects/b9/196e60915fc5285467aa130e39ba7ed6ff0a3d": "2ddde08cadd041d5cd0501623f3708a7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bf/598eb6c5b0864de51b796a3f686828aa09568d": "85d92914b8c574f2c78b051437cb60ff",
".git/objects/c0/a7bb029a4397b78195293e7cc02c21ad52384e": "677f137921447e075365c1c4f9eacf53",
".git/objects/c1/5b61ef12b37b84c60ea4c2045044727b76d031": "4abb38eb2600dff0f7b8ecc8255bff47",
".git/objects/c1/e98d79fdb4c2c5dac82e35be887132962123b1": "1c2e49d524c756d7e28564403cf935e0",
".git/objects/c6/0a324123eaaeab58c400c139bcabbc6d0d2a9f": "bcef93963028bd2c2f2a85f2f0411fa6",
".git/objects/c6/6e0b3b21089ad1b2e832350ee94786e12983f5": "4c8271c25dddb7994619540d4ab718cc",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/cc/8a5656e3f20be33253ba16d023359cab161ef4": "3bb2a50ab3cbc320259fbde86cb53276",
".git/objects/cd/09834c39317ac577d79de519d4995cf8f95e75": "de1b4f2cb916429fe6337fa82c573768",
".git/objects/cd/50dd2adc76951df4de18f61ca2d83b5a13427f": "d7c5b1316e0c8844cd937e8450bfaa2d",
".git/objects/ce/61735c8f6be2cafb6ad8f5f8f20bb5f14533dc": "f912095ccb5801286226f663743a7a44",
".git/objects/d0/37329204fb99854fcb5d6029a3a82e1f4c7e01": "bff2c7ff290d4d8efa15ddf9ef5da6a8",
".git/objects/d0/63822a0df7481adc79447fb4d7e85f1cd78404": "b9197e586055e29c20dbc383abbd3540",
".git/objects/d2/62efa251144fc390eb2219b0ddc8136734669d": "dd162eea4c0dbc3b4053730f78c12744",
".git/objects/d3/ea9d7b4576c92a072330392f29be62cef1724d": "c09cfbbfba36bb03df73c6ebe73dca5a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/42fe003f2abc3ec65139bba8670a719ef77395": "ecb1d72922627ab694ad05e2d28bde84",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/22959d62745af4bc3b90def1c7f5bc0bbaf0a0": "59af1c5e332834dd3537a42482835276",
".git/objects/d9/b3be772f130775ee55102a7b57a3b9cc59b231": "b3ab39cb76525bcd119f0729c7611f16",
".git/objects/da/49f0bc5c45be6ac3ea1e0cfdd2b80d0fc657d9": "52a88876eb1dff5ee89018204bb18e28",
".git/objects/db/0df7563a407cc30aff56ad2f28aa3f1d5e99a0": "577b8d1591ad28add7ebcc0969841e30",
".git/objects/de/351d8c55f8012ca878807efdadd6abb5d6cfea": "3551b0e68a304e9980090955e5c045e5",
".git/objects/df/2a06e11f452f5bfb5cc6652ec4f32b11d094db": "1485eae46d3a868978edbed4791d0146",
".git/objects/e0/544452bc20b38eb89aaa374aefeaaab59dba08": "27fd8d69ba9b3c69148ec7cf5c9dba59",
".git/objects/e5/03a376a2540d5b339d6ee9479f84d00deaf680": "21426c7d63747c6b2389552ec9e3d277",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/9234e1305aff0f8359be13dcf2c8db4e9fdf99": "ebc2b54559635e766096d90fa8c6a5cc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/09652b54d30e98d81c75bfc3facb66a74304b8": "89bff8c3aff251ba32414cee3ac8db4f",
".git/objects/f1/98134429bd3bbaa2d8c93dc6cc9b147ac2806b": "c3b8466e4495673b7c168eb85dbb8243",
".git/objects/f5/f98c82d4bb0f54c04fb56026bd00ff702d8df8": "f9381706d3486300a317b8161233c1cf",
".git/ORIG_HEAD": "77a60dc622d248c12766fa1df2cd38f5",
".git/refs/heads/main": "d03a7d888ca4a9aee2bc8ca716b26e23",
".git/refs/heads/master": "0f29262496b79cc7f17f8847ac2e1fbf",
".git/refs/remotes/origin/main": "d03a7d888ca4a9aee2bc8ca716b26e23",
"assets/AssetManifest.bin": "fccb32c486833f2da1fc785f4ebd4793",
"assets/AssetManifest.json": "ad23564e6cd17e79e682da4e6931a32c",
"assets/assets/fonts/GOTHIC.ttf": "cfce6abbbff0099b15691345d8b94dcc",
"assets/assets/fonts/GOTHICI.ttf": "89d1d828dd7407e8e5ff6aa83cc5b294",
"assets/assets/images/a1.jpg": "768e759bc4d71a3ce5602f356a1b7e6f",
"assets/assets/images/Addy1.JPG": "b8e8af77b47f99bd03e891d973ff91d9",
"assets/assets/images/Addy2.JPG": "9d2bf121806d1395320d46c2df8bb538",
"assets/assets/images/check.png": "af3572773e2f7b1529a69bccc01d6f38",
"assets/assets/images/dia.png": "afeaa0bc968054bd1e170a327fd60e97",
"assets/assets/images/dia2.png": "494bd7bfd07154bd02598bd22af90853",
"assets/assets/images/dia3.png": "76c17a8baf969cd46861d7515cc4f44f",
"assets/assets/images/dia5.png": "855b5da56c63ab0fb7842962ad8ac10c",
"assets/assets/images/Diamond.png": "32ab44604c47c44a3c630a51dcfd924c",
"assets/assets/images/Diamond_logo.png": "925eb6f41567a82672a1aa4f93f706f5",
"assets/assets/images/Front.JPG": "19c3ad40d4a1ca0b78fdda14f05700e8",
"assets/assets/images/Furn1.jpg": "b8a5d286fede009073bc670575a90571",
"assets/assets/images/Furn2.jpg": "72fb5bc78a05a06281b6058c7da1bea6",
"assets/assets/images/grey_black1.jpg": "21e239db18662c66a75928781784cd52",
"assets/assets/images/logo.JPG": "c1c7f2a0b937d8cb8f6d35a02aecf5a2",
"assets/assets/images/Maite_Christmas.jpg": "7719a0f0ae3c968acfbb082fa1a86f6e",
"assets/assets/images/pexels-andrea-piacquadio-3757055.jpg": "e3beccc19ac20d384eaf306f19b4f326",
"assets/assets/images/pexels-engin-akyurt-1647662.jpg": "8984e2c39119bf72bee80a70f32c18b5",
"assets/assets/images/pexels-max-rahubovskiy-6980665.jpg": "72c5fce76ddadc9c1fceafc0c69da7cb",
"assets/assets/images/pexels-max-rahubovskiy-6980711.jpg": "154ef6a786823b46f9a30210d483aa78",
"assets/assets/images/pexels-max-rahubovskiy-7535044.jpg": "de466e3661b4db010e5e2acba05a26f5",
"assets/assets/images/pexels-max-rahubovskiy-8135266.jpg": "64b1806e0ba2c0545bbcecafc22fe115",
"assets/assets/images/pexels-olena-bohovyk-18468859.jpg": "3b797b20f40f9572045602239c1af9c5",
"assets/assets/images/pexels-pixabay-276528.jpg": "170c38557a19ea9638109d610bdbff2d",
"assets/assets/images/test1.jpg": "1fe64b5ead1bb326bd6f0b3f85edf530",
"assets/FontManifest.json": "2b2c8ac2135a1753f10d85125bdbd0fb",
"assets/fonts/MaterialIcons-Regular.otf": "83008ff73c6a8c3d2593a19fc700b841",
"assets/NOTICES": "17ab0b08371b4aad75d19725f7a79bbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"CNAME": "62741d052218126170ac66c99f581ef9",
"favicon.png": "fac3a6ae0484397ac763192aa14b39a8",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e17ad93e0ae7bdf5f50b8344993f8bd9",
"/": "e17ad93e0ae7bdf5f50b8344993f8bd9",
"main.dart.js": "fb340f9768d0524c76079cfa8c10744e",
"manifest.json": "f4926f6e67daec07b4115b1348c3dac4",
"version.json": "a4ff762358a925c63083de17b7a70691"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
