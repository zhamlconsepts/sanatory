const fs = require('fs');
const path = require('path');

const images = {
  // Hero cards (completely unique to hero)
  'hero_football_card.jpg': 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
  'hero_massage_card.jpg': 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80',
  'hero_fitness_card.jpg': 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
  'hero_sanatorium_card.jpg': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',

  // Treatments section cards (completely unique to treatments)
  'treatment_football.jpg': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
  'treatment_massage.jpg': 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
  'treatment_aquatic.jpg': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
  'treatment_mineral.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  'treatment_salt.jpg': 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80',
  'treatment_mountain.jpg': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',

  // Venues unique files
  'bunyodkor_cover.jpg': 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80',
  'bunyodkor_bench.jpg': 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80',
  'bunyodkor_night.jpg': 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=1200&q=80',

  'zaamin_stadium.jpg': 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=1200&q=80',
  'zaamin_track.jpg': 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80',
  'zaamin_field.jpg': 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1200&q=80',

  'registan_sport.jpg': 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80',
  'registan_indoor.jpg': 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80',
  'registan_court.jpg': 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=1200&q=80',

  'fergana_arena.jpg': 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80',
  'fergana_pitch.jpg': 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80',
  'fergana_stands.jpg': 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1200&q=80',

  'ibn_sino_massage.jpg': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
  'ibn_sino_manual.jpg': 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
  'ibn_sino_kedr.jpg': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',

  'lotus_spa.jpg': 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80',
  'lotus_hammam.jpg': 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80',
  'lotus_jacuzzi.jpg': 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',

  'shifo_nur.jpg': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
  'shifo_nur_acupressure.jpg': 'https://images.unsplash.com/photo-1512290900672-1f4116e0b7b1?auto=format&fit=crop&w=1200&q=80',
  'shifo_nur_stones.jpg': 'https://images.unsplash.com/photo-1519824145371-29a1923e7d4d?auto=format&fit=crop&w=1200&q=80',

  'olimpiya_pool.jpg': 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=1200&q=80',
  'olimpiya_lanes.jpg': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
  'olimpiya_gym.jpg': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',

  'titan_gym.jpg': 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
  'titan_cardio.jpg': 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
  'titan_weights.jpg': 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80',

  'zomin_resort.jpg': 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
  'hero_zaamin.jpg': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
  'zomin_salt_cave.jpg': 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80',

  'chortoq_mineral.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  'chortoq_spring.jpg': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  'chortoq_park_trees.jpg': 'https://images.unsplash.com/photo-1507038772120-7fff76f79d74?auto=format&fit=crop&w=1200&q=80',

  'chinobod_gastro.jpg': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  'chinobod_park.jpg': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  'chinobod_clinic.jpg': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',

  'humson_buloq.jpg': 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
  'humson_river.jpg': 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80',
  'humson_spa_pool.jpg': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',

  'oqtosh_mountain.jpg': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
  'oqtosh_river.jpg': 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
  'oqtosh_alpine_air.jpg': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',

  'xonobod_cardio.jpg': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
  'xonobod_garden.jpg': 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
  'xonobod_clinic_suite.jpg': 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',

  'botanika_park.jpg': 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80',
  'botanika_alleys.jpg': 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
  'botanika_springs.jpg': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',

  'chimyon_mud.jpg': 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
  'chimyon_mud_bath.jpg': 'https://images.unsplash.com/photo-1512290900672-1f4116e0b7b1?auto=format&fit=crop&w=1200&q=80',
  'chimyon_mountain_side.jpg': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',

  'omonxona_spring.jpg': 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
  'omonxona_canyon_stream.jpg': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  'omonxona_healing_baths.jpg': 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=1200&q=80',

  'turon_cardio.jpg': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  'turon_cardio_suite.jpg': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  'turon_physio_park.jpg': 'https://images.unsplash.com/photo-1507038772120-7fff76f79d74?auto=format&fit=crop&w=1200&q=80',

  'sitora_palace.jpg': 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
  'sitora_palace_courtyard.jpg': 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80',
  'sitora_garden_walk.jpg': 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=1200&q=80',

  'umid_guli.jpg': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  'umid_guli_rehab_room.jpg': 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
  'umid_guli_floral_park.jpg': 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',

  'miraki_hisor.jpg': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
  'miraki_reservoir_view.jpg': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
  'miraki_mountain_range.jpg': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
};

const publicDir = path.resolve(__dirname, '../public/assets/images');
const assetsDir = path.resolve(__dirname, '../assets/images');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

async function downloadAll() {
  console.log(`Starting download of ${Object.keys(images).length} image assets...`);
  let count = 0;
  for (const [filename, url] of Object.entries(images)) {
    const pubPath = path.join(publicDir, filename);
    const assetPath = path.join(assetsDir, filename);
    
    if (fs.existsSync(pubPath) && fs.statSync(pubPath).size > 5000) {
      // already exists and valid
      if (!fs.existsSync(assetPath)) fs.copyFileSync(pubPath, assetPath);
      count++;
      continue;
    }

    try {
      console.log(`Fetching ${filename}...`);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(pubPath, buf);
      fs.writeFileSync(assetPath, buf);
      count++;
      console.log(`✓ Saved ${filename} (${buf.length} bytes)`);
    } catch (e) {
      console.error(`✗ Error downloading ${filename}: ${e.message}`);
    }
  }
  console.log(`Finished! Successfully verified/downloaded ${count}/${Object.keys(images).length} images.`);
}

downloadAll();
