const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 76 strictly distinct Unsplash photo IDs for every single image in the app
const imageMap = {
  // --- HERO 4 PILLAR CARDS ---
  'hero_football_card.jpg': 'photo-1579952363873-27f3bade9f55',
  'hero_massage_card.jpg': 'photo-1600334129128-685c5582fd35',
  'hero_fitness_card.jpg': 'photo-1530549387789-4c1017266635',
  'hero_sanatorium_card.jpg': 'photo-1542314831-068cd1dbfeeb',

  // --- 6 TREATMENT CARDS ---
  'treatment_football.jpg': 'photo-1560272564-c83b66b1ad12',
  'treatment_massage.jpg': 'photo-1544717305-2782549b5136',
  'treatment_aquatic.jpg': 'photo-1576610616656-d3aa5d1f4534',
  'treatment_mineral.jpg': 'photo-1507652313519-d4e9174996dd',
  'treatment_salt.jpg': 'photo-1518241353330-0f7941c2d9b5',
  'treatment_mountain.jpg': 'photo-1426604966848-d7adac402bff',

  // --- 1. BUNYODKOR ARENA ---
  'bunyodkor_cover.jpg': 'photo-1529900748604-07564a03e7a6',
  'bunyodkor_bench.jpg': 'photo-1517649763962-0c623266ddc0',
  'bunyodkor_night.jpg': 'photo-1556056504-5c7696c4c28d',

  // --- 2. ZOMIN STADIUM ---
  'zaamin_stadium_cover.jpg': 'photo-1489944440615-453fc2b6a9a9',
  'zaamin_track.jpg': 'photo-1470246973918-29a93221c455',
  'zaamin_field.jpg': 'photo-1575361204480-aadea25e6e68',

  // --- 3. REGISTAN SPORT ---
  'registan_sport_cover.jpg': 'photo-1551958219-acbc608c6377',
  'registan_indoor.jpg': 'photo-1526232761682-d26e03ac148e',
  'registan_court.jpg': 'photo-1577223625816-7546f13df25d',

  // --- 4. FERGANA ARENA ---
  'fergana_arena_cover.jpg': 'photo-1431324155629-1a6deb1dec8d',
  'fergana_pitch.jpg': 'photo-1518091043644-c1d4457512c6',
  'fergana_stands.jpg': 'photo-1518604666860-9ed391f76460',

  // --- 5. IBN SINO MASSAJ ---
  'ibn_sino_cover.jpg': 'photo-1544161515-4ab6ce6db874',
  'ibn_sino_manual.jpg': 'photo-1519823551278-64ac92734fb1',
  'ibn_sino_kedr.jpg': 'photo-1540555700478-4be289fbecef',

  // --- 6. LOTUS SPA ---
  'lotus_spa_cover.jpg': 'photo-1600334089648-b0d9d3028eb2',
  'lotus_hammam.jpg': 'photo-1596178065887-1198b6148b2b',
  'lotus_jacuzzi.jpg': 'photo-1584132967334-10e028bd69f7',

  // --- 7. SHIFO NUR MANUAL ---
  'shifo_nur_cover.jpg': 'photo-1570172619644-dfd03ed5d881',
  'shifo_nur_acupressure.jpg': 'photo-1512290900672-1f4116e0b7b1',
  'shifo_nur_stones.jpg': 'photo-1519824145371-29a1923e7d4d',

  // --- 8. OLIMPIYA POOL ---
  'olimpiya_pool_cover.jpg': 'photo-1519315901367-f34ff9154487',
  'olimpiya_lanes.jpg': 'photo-1576013551627-0cc20b96c2a7',
  'olimpiya_gym.jpg': 'photo-1534438327276-14e5300c3a48',

  // --- 9. TITAN GYM ---
  'titan_gym_cover.jpg': 'photo-1571902943202-507ec2618e8f',
  'titan_cardio.jpg': 'photo-1540497077202-7c8a3999166f',
  'titan_weights.jpg': 'photo-1584735935682-2f2b69dff9d2',

  // --- 10. ZOMIN SANATORIYASI ---
  'zomin_resort_cover.jpg': 'photo-1448375240586-882707db888b',
  'zomin_hero_view.jpg': 'photo-1470071459604-3b5ec3a7fe05',
  'zomin_alpine_path.jpg': 'photo-1434394354979-a235cd36269d',

  // --- 11. CHORTOQ SANATORIYASI ---
  'chortoq_mineral_cover.jpg': 'photo-1507525428034-b723cf961d3e',
  'chortoq_spring.jpg': 'photo-1506744038136-46273834b3fb',
  'chortoq_park_trees.jpg': 'photo-1470770841072-f978cf4d019e',

  // --- 12. CHINOBOD SANATORIYASI ---
  'chinobod_gastro_cover.jpg': 'photo-1566073771259-6a8506099945',
  'chinobod_park.jpg': 'photo-1519494026892-80bbd2d6fd0d',
  'chinobod_clinic.jpg': 'photo-1579684385127-1ef15d508118',

  // --- 13. HUMSON BULOQ RESORT ---
  'humson_buloq_cover.jpg': 'photo-1571896349842-33c89424de2d',
  'humson_river.jpg': 'photo-1445019980597-93fa8acb246c',
  'humson_spa_pool.jpg': 'photo-1582719478250-c89cae4dc85b',

  // --- 14. OQTOSH SANATORIYASI ---
  'oqtosh_mountain_cover.jpg': 'photo-1464822759023-fed622ff2c3b',
  'oqtosh_river.jpg': 'photo-1500534314209-a25ddb2bd429',
  'oqtosh_alpine_air.jpg': 'photo-1501785888041-af3ef285b470',

  // --- 15. XONOBOD SANATORIYASI ---
  'xonobod_cardio_cover.jpg': 'photo-1476514525535-07fb3b4ae5f1',
  'xonobod_garden.jpg': 'photo-1590490360182-c33d57733427',
  'xonobod_clinic_suite.jpg': 'photo-1505751172876-fa1923c5c528',

  // --- 16. BOTANIKA SANATORIYASI ---
  'botanika_park_cover.jpg': 'photo-1507038772120-7fff76f79d74',
  'botanika_alleys.jpg': 'photo-1498855926480-d98e83099315',
  'botanika_springs.jpg': 'photo-1517838277536-f5f99be501cd',

  // --- 17. CHIMYON SANATORIYASI ---
  'chimyon_mud_cover.jpg': 'photo-1515377905703-c4788e51af15',
  'chimyon_mud_bath.jpg': 'photo-1532938911079-1b06ac7ceec7',
  'chimyon_mountain_side.jpg': 'photo-1486870591958-9b9d0d1dda99',

  // --- 18. OMONXONA SANATORIYASI ---
  'omonxona_spring_cover.jpg': 'photo-1519681393784-d120267933ba',
  'omonxona_canyon_stream.jpg': 'photo-1501854140801-50d01698950b',
  'omonxona_healing_baths.jpg': 'photo-1587381420270-3e1a5b9e6904',

  // --- 19. TURON SANATORIYASI ---
  'turon_cardio_cover.jpg': 'photo-1576091160399-112ba8d25d1d',
  'turon_cardio_suite.jpg': 'photo-1486406146926-c627a92ad1ab',
  'turon_physio_park.jpg': 'photo-1510798831971-661eb04b3739',

  // --- 20. SITORA MOHI XOSA SANATORIYASI ---
  'sitora_palace_cover.jpg': 'photo-1527631746610-bca00a040d60',
  'sitora_palace_courtyard.jpg': 'photo-1565008447742-97f6f38c985c',
  'sitora_garden_walk.jpg': 'photo-1512917774080-9991f1c4c750',

  // --- 21. UMID GULI SANATORIYASI ---
  'umid_guli_cover.jpg': 'photo-1505691938895-1758d7feb511',
  'umid_guli_rehab_room.jpg': 'photo-1566665797739-1674de7a421a',
  'umid_guli_floral_park.jpg': 'photo-1506905925346-21bda4d32df4',

  // --- 22. MIRAKI SANATORIYASI ---
  'miraki_hisor_cover.jpg': 'photo-1469854523086-cc02fe5d8800',
  'miraki_reservoir_view.jpg': 'photo-1517466787929-bc90951d0974',
  'miraki_mountain_range.jpg': 'photo-1434648957308-4e6d8400971c'
};

const publicDir = path.resolve(__dirname, '../public/assets/images');
const assetsDir = path.resolve(__dirname, '../assets/images');

async function main() {
  const keys = Object.keys(imageMap);
  const uniqueIds = new Set(Object.values(imageMap));
  console.log(`Checking uniqueness: ${keys.length} files, ${uniqueIds.size} unique IDs.`);
  if (keys.length !== uniqueIds.size) {
    console.error('ERROR: Duplicate IDs found in mapping!');
    process.exit(1);
  }

  for (const [filename, id] of Object.entries(imageMap)) {
    const pubPath = path.join(publicDir, filename);
    const assetPath = path.join(assetsDir, filename);

    const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(pubPath, buf);
      fs.writeFileSync(assetPath, buf);
      console.log(`✓ [${filename}] ${buf.length} bytes`);
    } catch (e) {
      console.error(`✗ Error downloading ${filename} (${id}): ${e.message}`);
    }
  }

  // Verify all SHA256 hashes
  const hashes = {};
  let collisions = 0;
  for (const filename of keys) {
    const pubPath = path.join(publicDir, filename);
    if (!fs.existsSync(pubPath)) {
      console.error(`Missing file: ${filename}`);
      collisions++;
      continue;
    }
    const buf = fs.readFileSync(pubPath);
    const hash = crypto.createHash('sha256').update(buf).digest('hex');
    if (hashes[hash]) {
      console.error(`COLLISION! ${filename} and ${hashes[hash]} have identical hash!`);
      collisions++;
    } else {
      hashes[hash] = filename;
    }
  }

  if (collisions === 0) {
    console.log(`\n🎉 SUCCESS! All ${keys.length} files are 100% UNIQUE with 0 duplicate images!`);
  } else {
    console.error(`\nFailed with ${collisions} collisions.`);
  }
}

main();
