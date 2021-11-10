/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["chime.html","fd1e4c96ad7d256068573ab8e086a3e5"],["css/instruments.css","d41ac8622eafaca2fe673a54110f2dd9"],["css/normalize.css","3bc2f546340fb700ab9a155ff6bf45ab"],["css/style.css","5467f7775bab93201598f612a8514cda"],["favicon.ico","1403e5c0fc04423543bfb8c89103058f"],["guitar.html","2abfc82cd48188e33980857a12c3ade8"],["harps.html","848548c9fe6fe6ad09a02da76f6c4d13"],["img/cursors/cursor_dark.cur","bf78804952566fa917d78a96dc47a968"],["img/cursors/cursor_dark.png","04af0e78dbc024449e08f41db83e2b08"],["img/cursors/cursor_light.cur","4abab18aae2450d0c1145beb57f87e2e"],["img/cursors/cursor_light.png","553e9e308b464d3a69122ed00ed08afe"],["img/flaticons_license.pdf","b01d795887750193bf4ca1a0585440fb"],["img/instruments/panflute.svg","8106192d7d6c5e23fb5c34c12a1722c2"],["img/instruments/saxophone.svg","b3e1694d7ee4ac8343708f811e9626ed"],["img/instruments/tuba.svg","e7d1bfeb1437b821b9cd37e70ab92b46"],["img/interaction_dark.svg","f936ed1bef591433832a565448f1e4a8"],["img/interaction_light.svg","ee4b772ccbc73d5eb0bba09a6af3e9ca"],["img/mic.jpg","8ae1dd22676817caab77d79afe04c790"],["img/note.svg","0a7238dfb274cbc48fbe9d31009532c4"],["img/related/AboveBeneath.jpg","e49496688e0de2ce5725f30e236e5b2e"],["img/related/Drums.jpg","77a74114e58b36813c024a73d6d90f44"],["img/related/RecordPlayer.jpg","9a68597e1a44592d6f83e2fe6ecc4012"],["img/violin.jpg","5d54ed00cdf327073fdf647c7020e2aa"],["index-old.html","fc20f4967ef3e8dc44a9856e1b231d2a"],["index.html","14f7020ffa91a59b374a32cf0c955a6e"],["js/anime.min.js","b366bf21d649f3e387e3dfc1a5c32d6e"],["js/chimes.js","80a9f1f42430110eae2274a1ecd9b9ee"],["js/enquire.min.js","c22ea088390ceeb51ae5da21901b9df4"],["js/guitar.js","c347a5514b824e1708f50a56f9f59ac1"],["js/harp.js","319e0b2515c33ea7128adb7c0d81f5c2"],["js/helper.js","6d7904fbf12f415707229fe2e8fec042"],["js/inc/shim/Base64.js","c1a51eedac42ed9a5905e7035a1e4e47"],["js/inc/shim/Base64binary.js","f5554ecd2263937fcf6f86c4a5c8f190"],["js/inc/shim/WebAudioAPI.js","9cec676896e83f20fc1d583380494625"],["js/kalimba.js","fcc0e42baffd825f51bf0b6a66f6ee99"],["js/main.js","cf0e20bc89a2bd25d7869be25366faa6"],["js/mic.js","26ef68a2d8a26a79c600bcc4763d9902"],["js/midi/audioDetect.js","1b9720085d0a71efb4e455883198927c"],["js/midi/gm.js","82298be4118bc5fdff7a7ae85cd60fe5"],["js/midi/loader.js","c01968aba2183ff5e0fe43bfc6aadca2"],["js/midi/plugin.audiotag.js","1ac935c2f49be010d1d1f2f14956d183"],["js/midi/plugin.webaudio.js","51c592297a3b187395db3a785cd11b6b"],["js/midi/plugin.webmidi.js","ee6ff890a2fc3f71e1b4bec59df5ce54"],["js/mousetrap.min.js","e689ff75fb912388ce5a3455f2d046bd"],["js/piano.js","c20735f434b0c5bcfac0d7ca59610272"],["js/siriwave.js","1f7f8decd511c05145b56c3a375182a8"],["js/timpani.js","fecf0107dfe64877018f0d42f4bd504a"],["js/tinyinstrument.js","26f399b00d20fece32c791bff53e98f9"],["js/util/dom_request_xhr.js","4559b8f00bacaabc8bad268cb94af472"],["js/violin.js","4af7cc3872d53d3fbb33ae3242b4140c"],["js/xylophone.js","c07cb2b853110ef7723e2f92a6d2dbe0"],["kalimba.html","47aea48ce10a3bfac8198699530b2d2f"],["manifest.json","7f2167023fe4d50bb16d147dd1af73f2"],["more.html","4c91af88bcb249a9033c26e838e3c85a"],["music.png","5cdcb5110f92c1e7c5b96f18088f2b54"],["piano.html","5b49cbc11506f45f1e942f1c1e0b1d84"],["soundfont/acoustic_grand_piano-mp3.js","e62ae48534a5224a83257a38cdd274db"],["soundfont/acoustic_grand_piano-mp3/A0.mp3","47c7de06133453cb5303200617e80a73"],["soundfont/acoustic_grand_piano-mp3/A1.mp3","c8f1bffa8d302832e3ee197a515c4490"],["soundfont/acoustic_grand_piano-mp3/A2.mp3","ebcf6cace1f2ade8c7b2e1633b1814c7"],["soundfont/acoustic_grand_piano-mp3/A3.mp3","c185c7f537375d4e402a4264a5806af1"],["soundfont/acoustic_grand_piano-mp3/A4.mp3","c2b5c24d50fc8f5fe35d78adf8b96a6a"],["soundfont/acoustic_grand_piano-mp3/A5.mp3","eab1a5579492c7babd5765e23ab475a1"],["soundfont/acoustic_grand_piano-mp3/A6.mp3","1c06ca5469c3931e965ccbcc2f661d2f"],["soundfont/acoustic_grand_piano-mp3/A7.mp3","a1b8979322310952c3da75613cb42946"],["soundfont/acoustic_grand_piano-mp3/Ab1.mp3","d02ce784f647a5ed22ed7b9d9a3d3be5"],["soundfont/acoustic_grand_piano-mp3/Ab2.mp3","c2ee5b74c5b92edd8b318bcd69de740c"],["soundfont/acoustic_grand_piano-mp3/Ab3.mp3","b02877f4275458419f5fa170f0c0f4ed"],["soundfont/acoustic_grand_piano-mp3/Ab4.mp3","b01ba69421396eeae134a11467020c28"],["soundfont/acoustic_grand_piano-mp3/Ab5.mp3","05c5a457848e2df73beadf530ebd099e"],["soundfont/acoustic_grand_piano-mp3/Ab6.mp3","2935528a76e8edbe9f842c241b8e122a"],["soundfont/acoustic_grand_piano-mp3/Ab7.mp3","9e344694194ccaa71f118d8b80918432"],["soundfont/acoustic_grand_piano-mp3/B0.mp3","0947ae03f931f53ae3b0fc4be7f15f4e"],["soundfont/acoustic_grand_piano-mp3/B1.mp3","7e7a0915ffc91a8d2dbe744e1c32d8b7"],["soundfont/acoustic_grand_piano-mp3/B2.mp3","8022bff2bd234caf5afeac297f4be6ed"],["soundfont/acoustic_grand_piano-mp3/B3.mp3","efb9e531b053df8feef95555711e4880"],["soundfont/acoustic_grand_piano-mp3/B4.mp3","86081583c78b94e8b8ba9c3e56fe0ab5"],["soundfont/acoustic_grand_piano-mp3/B5.mp3","140c1bbeca263de6cdee742dd99504a1"],["soundfont/acoustic_grand_piano-mp3/B6.mp3","e6ef87539042a36050300c7b4c333015"],["soundfont/acoustic_grand_piano-mp3/B7.mp3","53ecdb9896504c4aa0b4a74de754ffeb"],["soundfont/acoustic_grand_piano-mp3/Bb0.mp3","f2ca14d4d3751ab6ca0f7bff23e575bb"],["soundfont/acoustic_grand_piano-mp3/Bb1.mp3","4c32f5bee4c8285c04aec2d94e51102d"],["soundfont/acoustic_grand_piano-mp3/Bb2.mp3","65952b67bf4a0dc3bf7ed31322831a9a"],["soundfont/acoustic_grand_piano-mp3/Bb3.mp3","b4aba3ee63d450afce3869f5e11f8259"],["soundfont/acoustic_grand_piano-mp3/Bb4.mp3","044c8fa317b5aca61b43089545bce830"],["soundfont/acoustic_grand_piano-mp3/Bb5.mp3","5287f5a74bf8a2b05f844247ef35a800"],["soundfont/acoustic_grand_piano-mp3/Bb6.mp3","bed0ce5f9cd1f2ba48796cb47262effa"],["soundfont/acoustic_grand_piano-mp3/Bb7.mp3","bc4883ec089b02851c87685760896ced"],["soundfont/acoustic_grand_piano-mp3/C1.mp3","6c058ca7aca2db214812c98dbb4c06bc"],["soundfont/acoustic_grand_piano-mp3/C2.mp3","af98e2570573abf51d05c62f7ea6ebf5"],["soundfont/acoustic_grand_piano-mp3/C3.mp3","471cd26b7430f5157f840e81894bbc33"],["soundfont/acoustic_grand_piano-mp3/C4.mp3","ac4c7ebe61882efd5d65c3bab94faf79"],["soundfont/acoustic_grand_piano-mp3/C5.mp3","7402a37773e53b1abd6a64848945089b"],["soundfont/acoustic_grand_piano-mp3/C6.mp3","23d17ec6b3e70757024cf68413eb1438"],["soundfont/acoustic_grand_piano-mp3/C7.mp3","5e67f6b5b2fe20c12324eb67fedb0db6"],["soundfont/acoustic_grand_piano-mp3/C8.mp3","5aafdeb8995595295d21fce10719f437"],["soundfont/acoustic_grand_piano-mp3/D1.mp3","a11d2ec171c566737fa3ad959d620ebc"],["soundfont/acoustic_grand_piano-mp3/D2.mp3","a05face1816837e47615a5a70cbf79f1"],["soundfont/acoustic_grand_piano-mp3/D3.mp3","c99cd6900c4e8abce8418f6f9a8118a4"],["soundfont/acoustic_grand_piano-mp3/D4.mp3","3079de141d5be44b143906557b3702b3"],["soundfont/acoustic_grand_piano-mp3/D5.mp3","023eb6a47e6440981dc3712288fb743d"],["soundfont/acoustic_grand_piano-mp3/D6.mp3","a548dec43cc226cfda5bec5e0418e030"],["soundfont/acoustic_grand_piano-mp3/D7.mp3","58cea0a00252e8b9f4e3b4266652386d"],["soundfont/acoustic_grand_piano-mp3/Db1.mp3","5f905e8270459e0d97ef532c007fc2a5"],["soundfont/acoustic_grand_piano-mp3/Db2.mp3","7c1dd37d7ff2a8586e2fe317b369d705"],["soundfont/acoustic_grand_piano-mp3/Db3.mp3","802efc8e8344131704b7523c3fd8324f"],["soundfont/acoustic_grand_piano-mp3/Db4.mp3","a56b8f0db6730fdbc08bd88d9541ff5f"],["soundfont/acoustic_grand_piano-mp3/Db5.mp3","2e49aa8899ca3d71afcba3a7a4bfa4fe"],["soundfont/acoustic_grand_piano-mp3/Db6.mp3","bdbf3c0459b7748f30f70a9025f2514e"],["soundfont/acoustic_grand_piano-mp3/Db7.mp3","f97c45bfb73287a1c23cf6b2ec72f96b"],["soundfont/acoustic_grand_piano-mp3/Db8.mp3","ede557db9c48d0ebd39564b3b274bd4f"],["soundfont/acoustic_grand_piano-mp3/E1.mp3","e52c79e9ef7eaa594275105a96f70ed7"],["soundfont/acoustic_grand_piano-mp3/E2.mp3","4fa157a57eca03a16c8cd9367dfb1dea"],["soundfont/acoustic_grand_piano-mp3/E3.mp3","011b742b2c335f4e92301132d27bcd57"],["soundfont/acoustic_grand_piano-mp3/E4.mp3","89abb6b018c823c1d8b97459416f231a"],["soundfont/acoustic_grand_piano-mp3/E5.mp3","969fdc73476010605b44528823d6afa8"],["soundfont/acoustic_grand_piano-mp3/E6.mp3","5ed039f8a313e277e23d2d77661c8649"],["soundfont/acoustic_grand_piano-mp3/E7.mp3","b2e54f2d93ef9f9d571a92565a799e0c"],["soundfont/acoustic_grand_piano-mp3/Eb1.mp3","95bc919646ee9f1e38b0de472aabc2a0"],["soundfont/acoustic_grand_piano-mp3/Eb2.mp3","a109ba1e125c685dd97ce359ba341b67"],["soundfont/acoustic_grand_piano-mp3/Eb3.mp3","952610578516d98047ca69614fbe3c99"],["soundfont/acoustic_grand_piano-mp3/Eb4.mp3","f71eaa96e035a87d6c170e122082b018"],["soundfont/acoustic_grand_piano-mp3/Eb5.mp3","1aec1a770f3d6857a2eb5bd97c7175d1"],["soundfont/acoustic_grand_piano-mp3/Eb6.mp3","8ae47e8691062f860a7aaf05ca7249ab"],["soundfont/acoustic_grand_piano-mp3/Eb7.mp3","b405c08ebf4e4c8b1573fd7bd82ea951"],["soundfont/acoustic_grand_piano-mp3/F1.mp3","647e18ab63c07e8893476337cdc0f342"],["soundfont/acoustic_grand_piano-mp3/F2.mp3","9f35f6e5bd007039c2745b799ece6a21"],["soundfont/acoustic_grand_piano-mp3/F3.mp3","b9be0f70b300fc04d08f433c53129958"],["soundfont/acoustic_grand_piano-mp3/F4.mp3","aefd2a66347cca4955feedb35aaaaba0"],["soundfont/acoustic_grand_piano-mp3/F5.mp3","e6d88012044669af53e56ac9bfcbd0d4"],["soundfont/acoustic_grand_piano-mp3/F6.mp3","f029eb1deba52f9338e3e41a24a440a5"],["soundfont/acoustic_grand_piano-mp3/F7.mp3","e137718277989b652b496e616fff872c"],["soundfont/acoustic_grand_piano-mp3/G1.mp3","7f22a19ab23da2d6629d861683df532d"],["soundfont/acoustic_grand_piano-mp3/G2.mp3","ac790c3f5bb9c38c74fe622111eb77a0"],["soundfont/acoustic_grand_piano-mp3/G3.mp3","e168e14d279600d60eb56ee22b5d7478"],["soundfont/acoustic_grand_piano-mp3/G4.mp3","2d1413fbcc5bb21897ce1c0784afa78b"],["soundfont/acoustic_grand_piano-mp3/G5.mp3","496bf333fd4827282077f84ba4ed03df"],["soundfont/acoustic_grand_piano-mp3/G6.mp3","06c9455cfdadd525ee49adcaf3b0b24e"],["soundfont/acoustic_grand_piano-mp3/G7.mp3","41fe44fcb12a45558866319e88e1920e"],["soundfont/acoustic_grand_piano-mp3/Gb1.mp3","31d3c69d6ce96ae1dcafbdea5d29b95c"],["soundfont/acoustic_grand_piano-mp3/Gb2.mp3","127fee73247db2e2ef76e5b110d5995f"],["soundfont/acoustic_grand_piano-mp3/Gb3.mp3","eb6d56d5f983658eaf47969156209552"],["soundfont/acoustic_grand_piano-mp3/Gb4.mp3","13e3c5a977f3ebfe5c341b07c3fda9a4"],["soundfont/acoustic_grand_piano-mp3/Gb5.mp3","03f700ce80feb6d83bd42328f2b4e535"],["soundfont/acoustic_grand_piano-mp3/Gb6.mp3","2133d62218a864cdb421fde052d8e7a2"],["soundfont/acoustic_grand_piano-mp3/Gb7.mp3","c2f63398290eee8251a5cb1a4431c305"],["soundfont/acoustic_grand_piano-ogg.js","9f08d00005a8951c48b9ba267166fcd8"],["soundfont/acoustic_guitar_nylon-mp3.js","e6dd947d3bacf3d9c4bf22b364ac3c9e"],["soundfont/acoustic_guitar_nylon-mp3/A2.mp3","d1545ef82ac0f6ea07fbadf2be178980"],["soundfont/acoustic_guitar_nylon-mp3/A3.mp3","c9b806ad45bef29752118379eeb4894a"],["soundfont/acoustic_guitar_nylon-mp3/Ab3.mp3","fef64b98dd427d9acdbb646f67cdb012"],["soundfont/acoustic_guitar_nylon-mp3/B2.mp3","19f9a323f38797e9877a44d608bb6bd1"],["soundfont/acoustic_guitar_nylon-mp3/B3.mp3","7622d47a2ec50a68cc6c71b467e98327"],["soundfont/acoustic_guitar_nylon-mp3/Bb2.mp3","1e7cfd493d2fa933c55d9474cd6cb923"],["soundfont/acoustic_guitar_nylon-mp3/Bb3.mp3","9f8a07acb261b5804783544b0ad6d113"],["soundfont/acoustic_guitar_nylon-mp3/C3.mp3","b1d399d072dc91d9dae56ba7026789b4"],["soundfont/acoustic_guitar_nylon-mp3/C4.mp3","456d78e7c70159a8a941f79eaf5bdffc"],["soundfont/acoustic_guitar_nylon-mp3/D3.mp3","9fdcd0c2d4ff19c953b7b9e62ce70bb2"],["soundfont/acoustic_guitar_nylon-mp3/D4.mp3","ce37b5005d58ed183a3105f8c7f278be"],["soundfont/acoustic_guitar_nylon-mp3/Db3.mp3","aca55ee8fe04b6016691e027c7ce1b3b"],["soundfont/acoustic_guitar_nylon-mp3/Db4.mp3","89694cd7e1aecba59d94fe1d671c62da"],["soundfont/acoustic_guitar_nylon-mp3/E2.mp3","512ebd19c22a12dd277f1a7e74eaff6c"],["soundfont/acoustic_guitar_nylon-mp3/E3.mp3","0b8e23a46ed9d1a349791ee6d0407e41"],["soundfont/acoustic_guitar_nylon-mp3/E4.mp3","f671232d21cfd54e473ebd9e86659f45"],["soundfont/acoustic_guitar_nylon-mp3/Eb4.mp3","9cf248a60697643b1d95b7fdd07d406b"],["soundfont/acoustic_guitar_nylon-mp3/F2.mp3","512c6ef2360b9719c22503199de18e64"],["soundfont/acoustic_guitar_nylon-mp3/F3.mp3","21350cd371cbeaa8afe2deec3eac81d0"],["soundfont/acoustic_guitar_nylon-mp3/F4.mp3","a0c341e7f7fb44bec9eb1a1c00dff7ad"],["soundfont/acoustic_guitar_nylon-mp3/G2.mp3","0c1dc3a373ceddd346525ee2c69e91b9"],["soundfont/acoustic_guitar_nylon-mp3/G3.mp3","299ee00bfd32bac2ac6729df4bf052e1"],["soundfont/acoustic_guitar_nylon-mp3/G4.mp3","743106ec2b91d53feeeed6c8482eaa64"],["soundfont/acoustic_guitar_nylon-mp3/Gb2.mp3","c90205c7afc9a2a4d4080086f3a81a58"],["soundfont/acoustic_guitar_nylon-mp3/Gb3.mp3","1e8445fa9de3f82fbce4a6817fb12a6e"],["soundfont/acoustic_guitar_nylon-mp3/Gb4.mp3","88c74a855ff13c494fd14d5436987d25"],["soundfont/acoustic_guitar_nylon-ogg.js","558fde46eab4ec297cc61485f148c158"],["soundfont/alto_sax-mp3.js","d8960af06b90d3b3c0bd212e20863764"],["soundfont/alto_sax-mp3/A3.mp3","396e230440eb193eb190fcd04e559488"],["soundfont/alto_sax-mp3/Ab3.mp3","9aa671a5235a38a3197e24fe3533c3ee"],["soundfont/alto_sax-mp3/C4.mp3","6598eedd73fef3268dd746bf579c29a9"],["soundfont/alto_sax-mp3/Db4.mp3","6d04c4c736db50244953ae89faa7c899"],["soundfont/alto_sax-mp3/F3.mp3","1b2c2f618a2a380ad05f8531bc7a04d6"],["soundfont/alto_sax-mp3/Gb3.mp3","771e168ae68fbd9cf231fdbd677721d8"],["soundfont/alto_sax-ogg.js","45f48492914d2fda30ba48271ce03789"],["soundfont/kalimba-mp3.js","b71521f4ae932f8f2cde51efa44c350c"],["soundfont/kalimba-mp3/A4.mp3","b805b19f15ed5ca53e05dd8f2de7a90e"],["soundfont/kalimba-mp3/B4.mp3","aa16566002b72f7166a0b3d6bd1567a9"],["soundfont/kalimba-mp3/C4.mp3","204fe268b094ff16a3b2a3acda3f4514"],["soundfont/kalimba-mp3/C5.mp3","3266253ee0fe73bb7b7e015d0816c0bd"],["soundfont/kalimba-mp3/D4.mp3","d72a243b6a414a863ec0531cd57a56ed"],["soundfont/kalimba-mp3/E4.mp3","2bfbf085813a0683c4662b4f0542f32a"],["soundfont/kalimba-mp3/F4.mp3","0ed401e0bb4b62cdf867c4ec111e7933"],["soundfont/kalimba-mp3/G4.mp3","9606dc239b5ff18e2d56a31fb9e1622a"],["soundfont/kalimba-ogg.js","71fd7a340d49ef4370021c83486b8c39"],["soundfont/orchestral_harp-mp3.js","637c479abf58e7ee06905041aa8b5958"],["soundfont/orchestral_harp-mp3/A1.mp3","cf6e80c37792da8f9ca4a686bbf2cb5b"],["soundfont/orchestral_harp-mp3/A2.mp3","c6107465dd130f9618f313adff5f0fca"],["soundfont/orchestral_harp-mp3/A3.mp3","2fd402a0e93837ca684dce5b2bff8179"],["soundfont/orchestral_harp-mp3/A4.mp3","6f3e87a2440ed83c61b912c9406bd1d9"],["soundfont/orchestral_harp-mp3/A5.mp3","c4fb436351557d1293d02e643e47d302"],["soundfont/orchestral_harp-mp3/A6.mp3","5e1f80b207d8901956a4e24a1cbca787"],["soundfont/orchestral_harp-mp3/B1.mp3","e86b94b44ba232cc0258ed556f314dc9"],["soundfont/orchestral_harp-mp3/B2.mp3","d68cac709749ca34eaf9aa3696fb0328"],["soundfont/orchestral_harp-mp3/B3.mp3","2d0d850c9ca83ff2bc4ea1a202b0af5e"],["soundfont/orchestral_harp-mp3/B4.mp3","55dbb842899394b1bd7aa87b67e950a7"],["soundfont/orchestral_harp-mp3/B5.mp3","618312af51f4cf5bcda116f4d9d79a8f"],["soundfont/orchestral_harp-mp3/B6.mp3","4926a8dd3a3f63b0ab6f5f81e1b19259"],["soundfont/orchestral_harp-mp3/C1.mp3","66fdafc896ea979a36bba33d9c3e3a23"],["soundfont/orchestral_harp-mp3/C2.mp3","29561a3a0101955bf694ed4d60bbee25"],["soundfont/orchestral_harp-mp3/C3.mp3","ca19ce5a8a7c022a4ae82d4895ee3485"],["soundfont/orchestral_harp-mp3/C4.mp3","db045d15818494bc3daca9def529d059"],["soundfont/orchestral_harp-mp3/C5.mp3","24fe40cd3c67023ea3e7ffc2db6bb359"],["soundfont/orchestral_harp-mp3/C6.mp3","176242aa66b40a1d55280fe6040fca08"],["soundfont/orchestral_harp-mp3/C7.mp3","8cc7a5e0d2be73b6fca08029361d7034"],["soundfont/orchestral_harp-mp3/D1.mp3","8fbb4e4f9285ea68ed53f760eee15a5f"],["soundfont/orchestral_harp-mp3/D2.mp3","c858ce18bc3f83c62aa081c6677106b5"],["soundfont/orchestral_harp-mp3/D3.mp3","d0cbffec5e605321b21b82ee9350bfff"],["soundfont/orchestral_harp-mp3/D4.mp3","fd5c445d9169b7db22f956401816c750"],["soundfont/orchestral_harp-mp3/D5.mp3","9b56c05de81b0787b9a35d9695d5d559"],["soundfont/orchestral_harp-mp3/D6.mp3","586ca339c4581a5e2e8a5c3782097534"],["soundfont/orchestral_harp-mp3/D7.mp3","3bf92ec8f897185a0ed232e646bbb7a8"],["soundfont/orchestral_harp-mp3/E1.mp3","921ce473be0a564746e61cf3ae3b1967"],["soundfont/orchestral_harp-mp3/E2.mp3","57807ba323e841380e38a47edfd0cf89"],["soundfont/orchestral_harp-mp3/E3.mp3","708892426665756c85f05e6f257721ea"],["soundfont/orchestral_harp-mp3/E4.mp3","7ecfd309f2383ed20006ac0f5f64ac3d"],["soundfont/orchestral_harp-mp3/E5.mp3","f6c3b0db7ecad931fb638e5701eacd27"],["soundfont/orchestral_harp-mp3/E6.mp3","1a10c23d82029fc552b794cee4d88908"],["soundfont/orchestral_harp-mp3/E7.mp3","0619add5e65d485b6b98b628a0bb831f"],["soundfont/orchestral_harp-mp3/F1.mp3","a19b11027214bbb19738ffd4df7e841e"],["soundfont/orchestral_harp-mp3/F2.mp3","881a24225d15747628908e36476d44a3"],["soundfont/orchestral_harp-mp3/F3.mp3","b860f1ca5286c44d72868bb7c313042a"],["soundfont/orchestral_harp-mp3/F4.mp3","938e11d520f486c25c378393eae7a7fb"],["soundfont/orchestral_harp-mp3/F5.mp3","1f66bcb0aba7ecd23c080c9809a7eecf"],["soundfont/orchestral_harp-mp3/F6.mp3","c687e091ee65831f405807ed0020c04d"],["soundfont/orchestral_harp-mp3/F7.mp3","1f555b96791096fe64abe0e78cf7d638"],["soundfont/orchestral_harp-mp3/G1.mp3","24f37af3d7c6180d916071ddd8f7b28f"],["soundfont/orchestral_harp-mp3/G2.mp3","f6e014061c0c81ebb0f03464bf49d2a5"],["soundfont/orchestral_harp-mp3/G3.mp3","64d57603d2687b0bb5ac0bcac1d41b1d"],["soundfont/orchestral_harp-mp3/G4.mp3","3ec0b72f971bc1c7a66edddaa368c72b"],["soundfont/orchestral_harp-mp3/G5.mp3","bb0e7913cbc81c934d94275ca1aef8a9"],["soundfont/orchestral_harp-mp3/G6.mp3","666a014dadee0a93def71bbb865556a3"],["soundfont/orchestral_harp-mp3/G7.mp3","c58120d0c3cf7f7295df2085e4ed8c2f"],["soundfont/orchestral_harp-ogg.js","ed2a1696be7708995dfeb318f3ff499f"],["soundfont/pan_flute-mp3.js","d853a93286c9864306d7050c0e5e671c"],["soundfont/pan_flute-mp3/D6.mp3","eb452e87d3661e901152210af962f0eb"],["soundfont/pan_flute-mp3/Db6.mp3","a312d23494aaf8c16d06b05772cec86c"],["soundfont/pan_flute-mp3/E6.mp3","c1834702dcd28f2db377c5393683cf4b"],["soundfont/pan_flute-mp3/Gb6.mp3","4c6b17345844635d7d3fef7619c94d70"],["soundfont/pan_flute-ogg.js","0964efec65f4a88f7ba386080dccd023"],["soundfont/timpani-mp3.js","62e4978fb6c87409d2a9f13522961dac"],["soundfont/timpani-mp3/Bb1.mp3","e25afa80de25b9731da8d269a1638b3b"],["soundfont/timpani-mp3/D2.mp3","114b3630ed84efb8d555be229305926d"],["soundfont/timpani-mp3/F1.mp3","ba30ec0417bc35c75c4006f836cb50e7"],["soundfont/timpani-mp3/F2.mp3","59854519a775109df0e563e13bb69b43"],["soundfont/timpani-ogg.js","d0a168744eb75064d5899fac22234ef5"],["soundfont/tuba-mp3.js","766961a1ea358e2152d421aacdf1822e"],["soundfont/tuba-mp3/A2.mp3","4e7cd7e1df9db063163696339f54959f"],["soundfont/tuba-mp3/Bb1.mp3","1a833fe1b3ce4398a51f7671b79abcfb"],["soundfont/tuba-mp3/Bb2.mp3","f1821909a105794165314c905e24e57f"],["soundfont/tuba-mp3/C2.mp3","01130ca83e434541f7d3ff08c69b3b1a"],["soundfont/tuba-mp3/D2.mp3","08b019999edcf340d27791acf044ffb6"],["soundfont/tuba-mp3/Eb2.mp3","6a19b3282bd9d0ef461246f04f309022"],["soundfont/tuba-mp3/F2.mp3","df6ad94e5ac33dece776d98fa9dce59e"],["soundfont/tuba-mp3/G2.mp3","6517774c201234625c86c4991c2e016c"],["soundfont/tuba-ogg.js","e3944caebd53ea7895b2a86682eb10ce"],["soundfont/tubular_bells-mp3.js","ccc5d241550843d34fc4586e2ef0e587"],["soundfont/tubular_bells-mp3/A5.mp3","8df418e4d9beb4beb8310af3c58d09e8"],["soundfont/tubular_bells-mp3/Ab5.mp3","cb9bb25048a09d41859320dd4ffc3093"],["soundfont/tubular_bells-mp3/B4.mp3","0d28ba492dbd8191b5f7cf5dccc455f4"],["soundfont/tubular_bells-mp3/B5.mp3","3b85d2e51d65f0499c7d6a81b7cb4160"],["soundfont/tubular_bells-mp3/B6.mp3","1cba5fc6466c07cfde26be0fe19c5827"],["soundfont/tubular_bells-mp3/Bb5.mp3","fbb8b228b77a3eca903fc1edb0d4470a"],["soundfont/tubular_bells-mp3/C5.mp3","3f5b3e34cf74021427a59d3de830562d"],["soundfont/tubular_bells-mp3/D5.mp3","bb8051eed06cc4fdb1cfe5f921df61aa"],["soundfont/tubular_bells-mp3/D6.mp3","77b2ffaa296b02be1d64dc86d20f1562"],["soundfont/tubular_bells-mp3/Db5.mp3","6bf7e42fc20e63d58bdd57871a46676e"],["soundfont/tubular_bells-mp3/E5.mp3","575caf97acabcf88e9b288c9502ead8a"],["soundfont/tubular_bells-mp3/E6.mp3","aa52df262cb8b20b4cfa5ac37f9e470e"],["soundfont/tubular_bells-mp3/Eb5.mp3","ef574b1594420b6508362de9903cf500"],["soundfont/tubular_bells-mp3/F5.mp3","de8ea40d867e7013b6ad5c493c7fbae6"],["soundfont/tubular_bells-mp3/G5.mp3","f29e9666ddd580701c00b0fc2b5dfae8"],["soundfont/tubular_bells-mp3/Gb5.mp3","d65d81853d13c5f5f312de75960a8b02"],["soundfont/tubular_bells-mp3/Gb6.mp3","55ac71b77be861b2add169f7f483346d"],["soundfont/tubular_bells-ogg.js","a90ef4c9cef13fff3fe9e6e32a6c5c8d"],["soundfont/violin-mp3.js","5f51ee2351a83bd1be39fd3a6b4b1cc1"],["soundfont/violin-mp3/A2.mp3","6f7c63b34da1c9156d653b0019c474b4"],["soundfont/violin-mp3/A3.mp3","b723544aaa079a6d1e693213af4d014a"],["soundfont/violin-mp3/A4.mp3","f2c1c1d42860fcef29f81b77ec6f25d3"],["soundfont/violin-mp3/B2.mp3","5f4a58cdfe07afdcebfceaaf24effe51"],["soundfont/violin-mp3/B3.mp3","14ac8be12e71787826ed95019d6b187a"],["soundfont/violin-mp3/B4.mp3","f1889b3a6c1f80f286c2215ae6f701df"],["soundfont/violin-mp3/C2.mp3","4c192d0165b289e89409c02f5a162484"],["soundfont/violin-mp3/C3.mp3","5756a263f772b1a553062818d6de447e"],["soundfont/violin-mp3/C4.mp3","7932c95fe07bf8032898375c89fa950e"],["soundfont/violin-mp3/C5.mp3","259c85357cb38e0ffb6c0602b52e96eb"],["soundfont/violin-mp3/D2.mp3","fb08f8a18756d13b6b7c567cc1ed396c"],["soundfont/violin-mp3/D3.mp3","f48539a139c5506c1d9ee41378c61ae1"],["soundfont/violin-mp3/D4.mp3","0348b4109c182eade09521bc039e6d1c"],["soundfont/violin-mp3/E2.mp3","72e3131e1de8786e162444ea205527e7"],["soundfont/violin-mp3/E3.mp3","d009b3f0f9083dec5fb1f69eb84a036c"],["soundfont/violin-mp3/E4.mp3","42fffc455e903cd844351f3eeaf4cf19"],["soundfont/violin-mp3/F2.mp3","a943acd2fc92aac04f835d9320578396"],["soundfont/violin-mp3/F3.mp3","3d0f2a41c73d58aa53422dd71b12dc39"],["soundfont/violin-mp3/F4.mp3","7765622cda6cce6f7f75bfb7c321373f"],["soundfont/violin-mp3/G2.mp3","cf320d5bf59b5871873dd8704a34acac"],["soundfont/violin-mp3/G3.mp3","0b1e0b57479bdffb2332dfb584953f06"],["soundfont/violin-mp3/G4.mp3","6409f1b42c927d4c05e2e377377a2cf6"],["soundfont/violin-ogg.js","597b6d5349776f197dc5e8d77fc6c513"],["soundfont/xylophone-mp3.js","6857c5310a738d028293ee283b9ce87f"],["soundfont/xylophone-mp3/A0.mp3","e09ac280ddd23f321f42cf8630f8592b"],["soundfont/xylophone-mp3/A1.mp3","d5e455337a7a67bb4f327a77a81b3373"],["soundfont/xylophone-mp3/A2.mp3","0b6a9bf963f44205278ed7e16795ff1d"],["soundfont/xylophone-mp3/A3.mp3","59fdb6ec280a8f76ea5ecdd266495f26"],["soundfont/xylophone-mp3/A4.mp3","9a354514bff7374aa6eb8d5b7e56b902"],["soundfont/xylophone-mp3/A5.mp3","42bcb9df46d44d15c344bf2f83baeaaa"],["soundfont/xylophone-mp3/A6.mp3","3eddaa010877ae77de8ac859c48b2a63"],["soundfont/xylophone-mp3/A7.mp3","566d14b7f9fd8bfcfd649b2905ee995c"],["soundfont/xylophone-mp3/Ab1.mp3","d1baec75e6c68a6b993bf4299b75b4d5"],["soundfont/xylophone-mp3/Ab2.mp3","f63378aa33bd9f5c95b1bf6ad0cf4474"],["soundfont/xylophone-mp3/Ab3.mp3","194339b4cd28aae1184c36cb66b437af"],["soundfont/xylophone-mp3/Ab4.mp3","45206d502ec758ca12b7d342b60706f9"],["soundfont/xylophone-mp3/Ab5.mp3","0bc3591015e2ed790efe2ff8ff3038e8"],["soundfont/xylophone-mp3/Ab6.mp3","c712c3a1f2b53e1276d33e64e5db65cc"],["soundfont/xylophone-mp3/Ab7.mp3","4205507399c0849949efacfbd89c0ac3"],["soundfont/xylophone-mp3/B0.mp3","48073aef2caefeef65c7ae3fd3e8a8a3"],["soundfont/xylophone-mp3/B1.mp3","cda4a6f038e7f138a241926354b209cd"],["soundfont/xylophone-mp3/B2.mp3","a0224f1a55ca5ec56cff6301b4ad098f"],["soundfont/xylophone-mp3/B3.mp3","4ae907eb808c33ee4ea5326186c6be9e"],["soundfont/xylophone-mp3/B4.mp3","cd56a6ea923ac8365b397fd2d36225bc"],["soundfont/xylophone-mp3/B5.mp3","9cf11ea93e75e32d681f73b99eb1765e"],["soundfont/xylophone-mp3/B6.mp3","c1490d25e687eff802dd1068aab6b1e0"],["soundfont/xylophone-mp3/B7.mp3","44f25196e7990cadd125caf6e84ccdb5"],["soundfont/xylophone-mp3/Bb0.mp3","52161bd2d08f8c0b32ec1f4734a04abd"],["soundfont/xylophone-mp3/Bb1.mp3","86b35da1e9dc3bad87b18c80ad0f5a7d"],["soundfont/xylophone-mp3/Bb2.mp3","069ab4964727a9b801f9143d6fe3208b"],["soundfont/xylophone-mp3/Bb3.mp3","15b67a61b38bfb497e593e88cd264103"],["soundfont/xylophone-mp3/Bb4.mp3","6bb6cd964b6f7a0c76d0b679e9d13f43"],["soundfont/xylophone-mp3/Bb5.mp3","da30536b50a38a213058341457603479"],["soundfont/xylophone-mp3/Bb6.mp3","8ab531e3db6f2f410250913f69c6258d"],["soundfont/xylophone-mp3/Bb7.mp3","364eacb0613a5d920d6f85ec13d949b1"],["soundfont/xylophone-mp3/C1.mp3","77fe3de2a396065c5e505781ff0dbb9f"],["soundfont/xylophone-mp3/C2.mp3","43c59d105253b6708807f7bf1d4f97cc"],["soundfont/xylophone-mp3/C3.mp3","bdbbd7685fc95ad125b9a060d551415b"],["soundfont/xylophone-mp3/C4.mp3","a74a6552334dbce9dfcf2ca258654fc0"],["soundfont/xylophone-mp3/C5.mp3","e13c67f4162a361c553ee1199d39a520"],["soundfont/xylophone-mp3/C6.mp3","7ff13ba8a41259280ee667ffc285b4f5"],["soundfont/xylophone-mp3/C7.mp3","dba2c679447b6b8ccf05c4c571c40bb4"],["soundfont/xylophone-mp3/C8.mp3","17c00385f76f76aaea3ddd9fe6091189"],["soundfont/xylophone-mp3/D1.mp3","94caf3a3d6f75d7d543f8d6e33211105"],["soundfont/xylophone-mp3/D2.mp3","a3aff878d7fa12ac88d588b4469d6178"],["soundfont/xylophone-mp3/D3.mp3","ff6efe144b8027a8b196130e51e8ef26"],["soundfont/xylophone-mp3/D4.mp3","ffa8d9f978ccc39da1643d503bb389e9"],["soundfont/xylophone-mp3/D5.mp3","0539aabdea267de0e7eb82694fe5cf8c"],["soundfont/xylophone-mp3/D6.mp3","8ac09fe7c6091203b31b0884d2eceeb4"],["soundfont/xylophone-mp3/D7.mp3","796076b68d3fc384f1eee7a916d124c4"],["soundfont/xylophone-mp3/Db1.mp3","0d694429be1d4d3754a96718031b33ad"],["soundfont/xylophone-mp3/Db2.mp3","24a8ad132967ee2acd3bbe645d419e69"],["soundfont/xylophone-mp3/Db3.mp3","30cc51dd5db1ad30d6d30df3f4459c79"],["soundfont/xylophone-mp3/Db4.mp3","a3155c454696a00e1d28acf4565a617d"],["soundfont/xylophone-mp3/Db5.mp3","e4302c4814378c954e29a15c2c2ed924"],["soundfont/xylophone-mp3/Db6.mp3","15aaaa3516f2c9d3e0644fd2ed13a06b"],["soundfont/xylophone-mp3/Db7.mp3","571e08f6a6e604756877c5a6d41ab17c"],["soundfont/xylophone-mp3/E1.mp3","1ada7541d1a0826bfbdeece91da8dd6f"],["soundfont/xylophone-mp3/E2.mp3","39cb82c714ccfdc8303becfeb1078c0f"],["soundfont/xylophone-mp3/E3.mp3","aea8f691aedde40c9015a3399e92562b"],["soundfont/xylophone-mp3/E4.mp3","b279cf07276412127f8e595573d7e68d"],["soundfont/xylophone-mp3/E5.mp3","dfdb23a23cf7ec0d6e34def8e515e238"],["soundfont/xylophone-mp3/E6.mp3","08e88d41b31b91fd9fa34497fab77ff3"],["soundfont/xylophone-mp3/E7.mp3","c478535c7c38c70a4f6bb416839d4661"],["soundfont/xylophone-mp3/Eb1.mp3","47b41a78013b1aaf5275f00635428e02"],["soundfont/xylophone-mp3/Eb2.mp3","8238d08e227d0d45aa01f0e066ac84ae"],["soundfont/xylophone-mp3/Eb3.mp3","70175c375ea7bd8e1437220742ec3dcd"],["soundfont/xylophone-mp3/Eb4.mp3","7de117e22f845b24b950b2af6c537080"],["soundfont/xylophone-mp3/Eb5.mp3","6fc52803a1f4d268d103cd4cc08c6f2e"],["soundfont/xylophone-mp3/Eb6.mp3","e2250db05dfe2e6e9936190f887c4209"],["soundfont/xylophone-mp3/Eb7.mp3","a4ba0ff3ab7f8becdc46acd14aa5fbc8"],["soundfont/xylophone-mp3/F1.mp3","58a442e8cd0d8ce27ea7600df2e09029"],["soundfont/xylophone-mp3/F2.mp3","e43df1ef1002ccf07d23c3fdcaf72520"],["soundfont/xylophone-mp3/F3.mp3","868b58dc0edafb4a190c3efb722ae565"],["soundfont/xylophone-mp3/F4.mp3","042cee046882e46736bcca16a289301f"],["soundfont/xylophone-mp3/F5.mp3","1e5209751331c196d2e1158164c51f11"],["soundfont/xylophone-mp3/F6.mp3","c9a2aa3bcede8889e58ca00cc8ecd32a"],["soundfont/xylophone-mp3/F7.mp3","96b963a2c36a4dba5b632412f0158f9f"],["soundfont/xylophone-mp3/G1.mp3","3da716a4db09b08fe30064db2463ec7b"],["soundfont/xylophone-mp3/G2.mp3","2bb4818d332259659e6c602c0f81f7b7"],["soundfont/xylophone-mp3/G3.mp3","4d15e73ef1dcfabd6b98e5ef61f2a30b"],["soundfont/xylophone-mp3/G4.mp3","1934d5318ee5b6d2a093c1403e5b2e98"],["soundfont/xylophone-mp3/G5.mp3","4e0396e7e284d67b911d1b1a8e15caf1"],["soundfont/xylophone-mp3/G6.mp3","05fb6cc9ec7c8e95bcaa3a043ea7949b"],["soundfont/xylophone-mp3/G7.mp3","2e9d559545e1a18ebe538242af768c4c"],["soundfont/xylophone-mp3/Gb1.mp3","d74300bc7632531a871418bbd6ef0d84"],["soundfont/xylophone-mp3/Gb2.mp3","907a2adb07d04c1e4c09fce8a0173541"],["soundfont/xylophone-mp3/Gb3.mp3","a40743fa63b674a4b0545ee5915a452e"],["soundfont/xylophone-mp3/Gb4.mp3","2e7bac4c9f499969b37b39ce087dab0e"],["soundfont/xylophone-mp3/Gb5.mp3","5c43dd4522cbc04ea421b15f64b3c54d"],["soundfont/xylophone-mp3/Gb6.mp3","c29c534b556b810f7a3dde357b28e690"],["soundfont/xylophone-mp3/Gb7.mp3","78405dad78c0104b734a8f5555f7d82e"],["soundfont/xylophone-ogg.js","d064f838dac3408ed4dec632f7123f06"],["sounds/testingvoice.mp3","fa6652d51b6f246acf8956ad04f22de8"],["timpani.html","637e776c4439811ecf7305bc6227b3d5"],["violin.html","0c3449c3b1d50967da603dda26f7d8c6"],["xylophone.html","30af6f68ee649463a195d57ddb5dc077"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







