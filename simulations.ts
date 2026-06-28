import { Disaster, Scenario, DisasterType } from '../types';

// ============================================
// INDONESIAN MITIGATION REFERENCES
// ============================================

export const mitigationReferences = {
  earthquake: [
    {
      source: 'BMKG',
      title: 'Prosedur Tetap Tanggap Gempa Bumi',
      description: 'Protokol resmi BMKG untuk penanganan gempa bumi di Indonesia',
      documentType: 'protocol'
    },
    {
      source: 'BNPB',
      title: 'Panduan Evakuasi Pasca-Gempa',
      description: 'Panduan lengkap evakuasi dan tanggap darurat gempa',
      documentType: 'guide'
    },
    {
      source: 'KMNRH',
      title: 'Peraturan Kebencanaan No. 1 Tahun 2024',
      description: 'Peraturan terbaru tentang mitigasi gempa bumi dari Kementerian ESDM',
      documentType: 'regulation'
    }
  ],
  tsunami: [
    {
      source: 'BMKG',
      title: 'Sistem Peringatan Dini Tsunami Indonesia (InaTEWS)',
      description: 'Protokol sistem peringatan dini dan evakuasi tsunami',
      documentType: 'protocol'
    },
    {
      source: 'UNESCO-IOC',
      title: 'Tsunami Ready Programme',
      description: 'Program internasional kesiapsiagaan tsunami',
      documentType: 'guide'
    }
  ],
  flood: [
    {
      source: 'BPBD',
      title: 'Panduan Tanggap Darurat Banjir',
      description: 'Protokol penanganan banjir untuk daerah rawan',
      documentType: 'guide'
    },
    {
      source: 'Ministry of PUPR',
      title: 'Sistem Drainase dan Pengendalian Banjir',
      description: 'Standar infrastruktur pengendalian banjir',
      documentType: 'guide'
    }
  ],
  fire: [
    {
      source: 'Damkar Indonesia',
      title: 'SOP Evakuasi Kebakaran Gedung',
      description: 'Prosedur evakuasi kebakaran untuk gedung dan sekolah',
      documentType: 'protocol'
    },
    {
      source: 'Kemendikbud',
      title: 'Panduan Keselamatan di Sekolah',
      description: 'Manual keselamatan dan kebakaran untuk institusi pendidikan',
      documentType: 'guide'
    }
  ]
};

// ============================================
// DISASTER DEFINITIONS
// ============================================

export const disasters: Disaster[] = [
  {
    id: 'earthquake',
    name: 'Gempa Bumi',
    description: 'Pelajari langkah-langkah penyelamatan diri saat gempa bumi melanda. Dari protokol Drop, Cover, Hold On hingga evakuasi pasca-gempa di lingkungan sekolah Indonesia.',
    icon: 'activity',
    image: 'https://images.pexels.com/photos/1784347/pexels-photo-1784347.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'intermediate',
    estimatedTime: 18,
    prerequisites: [],
    objectives: [
      { id: 'eq-1', description: 'Menguasai protokol Drop, Cover, Hold On', bloomLevel: 'apply', disaster: 'earthquake' },
      { id: 'eq-2', description: 'Mengidentifikasi zona aman di dalam dan luar bangunan', bloomLevel: 'analyze', disaster: 'earthquake' },
      { id: 'eq-3', description: 'Memahami risiko aftershock dan struktur rusak', bloomLevel: 'evaluate', disaster: 'earthquake' },
      { id: 'eq-4', description: 'Menerapkan protokol evakuasi terkoordinasi', bloomLevel: 'apply', disaster: 'earthquake' }
    ],
    statistics: {
      eventsPerYear: 5000,
      affectedPeople: '5 juta +',
      highRiskZones: ['Sulawesi Utara', 'Papua', 'Sumatera Barat', 'NTB', 'NAD'],
      preparednessRate: '34.2%',
      lastMajorEvent: {
        name: 'Gempa Cianjur 2022',
        date: '21 November 2022',
        impact: '602 korban jiwa, 7.000+ bangunan rusak'
      },
      economicImpact: 'Rp 45.6 triliun/tahun'
    },
    references: mitigationReferences.earthquake
  },
  {
    id: 'tsunami',
    name: 'Tsunami',
    description: 'Pahami tanda-tanda alami tsunami dan sistem peringatan dini InaTEWS. Setiap detik berarti jiwa terselamatkan di zona pesisir Indonesia.',
    icon: 'waves',
    image: 'https://images.pexels.com/photos/1685116/pexels-photo-1685116.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'advanced',
    estimatedTime: 22,
    prerequisites: ['earthquake'],
    objectives: [
      { id: 'ts-1', description: 'Mengenali tanda-tanda alami tsunami (air surut, gempa besar)', bloomLevel: 'remember', disaster: 'tsunami' },
      { id: 'ts-2', description: 'Memahami sistem peringatan InaTEWS dan jalur evakuasi', bloomLevel: 'understand', disaster: 'tsunami' },
      { id: 'ts-3', description: 'Menentukan jalur evakuasi optimal berdasarkan elevasi dan jarak', bloomLevel: 'evaluate', disaster: 'tsunami' },
      { id: 'ts-4', description: 'Menerapkan protokol komunitas siaga tsunami', bloomLevel: 'create', disaster: 'tsunami' }
    ],
    statistics: {
      eventsPerYear: 2,
      affectedPeople: '230.000+',
      highRiskZones: ['Pesisir Barat Sumatera', 'Pantai Selatan Jawa', 'Kepulauan Nusa Tenggara', 'Pesisir Sulawesi'],
      preparednessRate: '28.1%',
      lastMajorEvent: {
        name: 'Tsunami Palu-Donggala 2018',
        date: '28 September 2018',
        impact: '4.340+ korban jiwa, 1.203 orang hilang'
      },
      economicImpact: 'Rp 1.2 triliun (Palu-Donggala)'
    },
    references: mitigationReferences.tsunami
  },
  {
    id: 'flood',
    name: 'Banjir',
    description: 'Kuasai strategi bertahan hidup saat banjir bandang dan banjir rob. Fokus pada keputusan cepat dan evakuasi ke tempat aman di perkotaan Indonesia.',
    icon: 'cloud-rain',
    image: 'https://images.pexels.com/photos/1114761/pexels-photo-1114761.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'beginner',
    estimatedTime: 14,
    prerequisites: [],
    objectives: [
      { id: 'fl-1', description: 'Mengenali level ketinggian air dan risiko', bloomLevel: 'understand', disaster: 'flood' },
      { id: 'fl-2', description: 'Menutup MCB dan mengamankan barang penting', bloomLevel: 'apply', disaster: 'flood' },
      { id: 'fl-3', description: 'Memilih jalur evakuasi yang aman dari arus', bloomLevel: 'analyze', disaster: 'flood' },
      { id: 'fl-4', description: 'Menerapkan pencegahan leptospirosis pasca-banjir', bloomLevel: 'apply', disaster: 'flood' }
    ],
    statistics: {
      eventsPerYear: 897,
      affectedPeople: '10.6 juta',
      highRiskZones: ['DKI Jakarta', 'Banten', 'Jawa Barat', 'Kalimantan Selatan', 'Sumatera Utara'],
      preparednessRate: '45.8%',
      lastMajorEvent: {
        name: 'Banjir Jakarta 2020',
        date: '1 Januari 2020',
        impact: '67 korban jiwa, 60.000+ pengungsi'
      },
      economicImpact: 'Rp 2.1 triliun (Jakarta)'
    },
    references: mitigationReferences.flood
  },
  {
    id: 'fire',
    name: 'Kebakaran',
    description: 'Pelajari teknik pencegahan dan penanganan kebakaran di rumah, sekolah, dan tempat umum. Penguasaan APAR dan evakuasi adalah kunci keselamatan.',
    icon: 'flame',
    image: 'https://images.pexels.com/photos/919070/pexels-photo-919070.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'beginner',
    estimatedTime: 12,
    prerequisites: [],
    objectives: [
      { id: 'fr-1', description: 'Memahami segitiga api dan cara memutus rantai', bloomLevel: 'understand', disaster: 'fire' },
      { id: 'fr-2', description: 'Mengoperasikan APAR dengan metode PASS', bloomLevel: 'apply', disaster: 'fire' },
      { id: 'fr-3', description: 'Menerapkan teknik merunduk saat evakuasi (low and go)', bloomLevel: 'apply', disaster: 'fire' },
      { id: 'fr-4', description: 'Menganalisis pencegahan kebakaran di lingkungan sekolah', bloomLevel: 'analyze', disaster: 'fire' }
    ],
    statistics: {
      eventsPerYear: 2500,
      affectedPeople: '50.000+',
      highRiskZones: ['Perkotaan padat DKI Jakarta', 'Kawasan Industri Bekasi', 'Pasar Tradisional', 'Pemukiman Kumuh'],
      preparednessRate: '52.3%',
      lastMajorEvent: {
        name: 'Kebakaran Kemang 2023',
        date: '8 Oktober 2023',
        impact: '12 korban jiwa, 80% bangunan rusak'
      },
      economicImpact: 'Rp 800 miliar/tahun (Jakarta)'
    },
    references: mitigationReferences.fire
  }
];

// ============================================
// BRANCHING SCENARIO BUILDER
// ============================================

function createScenario(config: {
  id: string;
  disasterType: DisasterType;
  order: number;
  narrative: string;
  illustration: string;
  situationContext: string;
  timeContext: string;
  dangerLevel: 'low' | 'medium' | 'high' | 'critical';
  emotionalTone: 'neutral' | 'tense' | 'urgent' | 'desperate';
  keyLearningPoints: string[];
  choices: {
    text: string;
    isCorrect: boolean;
    isPartiallyCorrect?: boolean;
    choiceCategory: 'immediate-action' | 'help-others' | 'gather-information' | 'evacuate' | 'secure-area';
    consequence: string;
    feedback: string;
    xpEarned: number;
    decisionReason: string;
    commonMistake?: string;
    nextScenarioId?: string;
  }[];
  previousScenarioId?: string;
  defaultNextScenarioId?: string;
  isEnding?: boolean;
  endingType?: 'success' | 'partial' | 'failure' | 'heroic';
  endingNarrative?: string;
}): Scenario {
  return {
    ...config,
    consequences: null
  } as Scenario;
}

// ============================================
// EARTHQUAKE SCENARIOS - COMPREHENSIVE BRANCHING
// ============================================

function generateEarthquakeScenarios(): Scenario[] {
  const scenarios: Scenario[] = [
    // SCENARIO 1: Initial Shock
    createScenario({
      id: 'earthquake-1',
      disasterType: 'earthquake',
      order: 1,
      narrative: `Pukul 14:32 WIB, kamu sedang di kelas IPA lantai 2 SMA Negeri 3 Padang. Guru fisikamu, Pak Arif, sedang menjelaskan tentang gelombang seismik.

Tiba-tiba, terasa getaran hebat. Meja-meja bergetar, buku-buku jatuh dari rak. Teman sebangkumu, Dinda, memegang tanganmu ketat—matanya liar mencari aman.

"GEMPA!" teriak seseorang dari koridor.

Getaran semakin kencang. Kamu bisa merasakan lantai bergoyang seperti ombak. Jendela kaca berderit-derit. Lampu langit-langit bergoyang liar. Dari luar jendela kamu melihat benda-benda berjatuhan dari gedung seberang.

BMKG belum mengeluarkan peringatan karena ini baru terjadi beberapa detik lalu.

Pak Arif berteriak dari depan kelas: "SEMUA—!"

Waktu tersisa: Detik-detik ini menentukan nasibmu.`,
      illustration: 'https://images.pexels.com/photos/8423006/pexels-photo-8423006.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Kelas IPA lantai 2, bangunan 3 lantai, konstruksi tahun 1995',
      timeContext: 'Siang hari, jam pelajaran aktif, 32 siswa di kelas',
      dangerLevel: 'critical',
      emotionalTone: 'urgent',
      keyLearningPoints: [
        'Protokol Drop, Cover, Hold On adalah standar internasional',
        'Berlari saat gempa berisiko tertimpa reruntuhan',
        'Jendela kaca berisiko pecah dan melukai',
        'Lift harus dihindari saat gempa'
      ],
      choices: [
        {
          text: 'Segera "Drop, Cover, Hold On" — jongkok, lindungi kepala di bawah meja, pegang kaki meja dengan erat',
          isCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Kamu berhasil melindungi diri dengan benar di bawah meja yang kokoh',
          feedback: 'SANGAT TEPAT! Drop, Cover, Hold On adalah protokol terbukti yang disarankan BMKG dan BNPB. Dalam gempa Cianjur 2022, sebagian besar korban adalah yang berlari atau keluar gedung. Melindungi kepala dari reruntuhan adalah prioritas utama.',
          xpEarned: 60,
          decisionReason: 'Protokol internasional dengan tingkat keselamatan tertinggi',
          nextScenarioId: 'earthquake-3'
        },
        {
          text: 'Berlari keluar kelas menuju tangga darurat bersama Dinda',
          isCorrect: false,
          choiceCategory: 'evacuate',
          consequence: 'Kamu dan Dinda terjatuh di koridor akibat guncangan, puing-puing plafon berjatuhan di sekitarmu',
          feedback: 'MENGGUNAKAN BAHAYA! Data BNPB menunjukkan 60% korban gempa adalah yang berlari saat guncangan berlangsung. Potensi tertimpa reruntuhan, terjatuh tangga, atau tertimpuang kaca jauh lebih tinggi daripada bertahan di bawah meja kokoh.',
          xpEarned: 0,
          decisionReason: 'Kesalahan fatal berdasarkan data kebencanaan',
          commonMistake: 'Banyak orang berlari karena panik, padahal gempa besar biasanya hanya berlangsung 30-90 detik',
          nextScenarioId: 'earthquake-2'
        },
        {
          text: 'Berdiri di dekat jendela untuk melihat kondisi luar sambil memegang frame jendela',
          isCorrect: false,
          choiceCategory: 'gather-information',
          consequence: 'Kaca jendela pecah dan melukai tanganmu, serpihan kaca berhamburan',
          feedback: 'LOKASI BERISIKO TINGGI! Jendela adalah zona bahaya utama dalam gempa. Kaca bisa pecah proyektil, frame bisa terlepas dari dinding. BMKG dan American Red Cross secara tegas melarang mendekati jendela saat gempa.',
          xpEarned: 0,
          decisionReason: 'Zona bahaya — kaca pecah adalah salah satu penyebab luka utama',
          commonMistake: 'Orang sering mencoba "melihat" kondisi dilusi normal, tapi gempa bukan situasi normal',
          nextScenarioId: 'earthquake-2'
        }
      ],
      defaultNextScenarioId: 'earthquake-3'
    }),

    // SCENARIO 2: Suboptimal Path - Injured
    createScenario({
      id: 'earthquake-2',
      disasterType: 'earthquake',
      order: 2,
      narrative: `Guncangan berhenti setelah 50 detik yang terasa seperti selamanya.

Kamu kesakitan — luka di tangan dari serpihan kaca atau memar dari terjatuh. Dinda tampak ketakutan tapi tidak terluka. Beberapa temanmu di koridor menangis, beberapa tampak syok.

Pak Arif muncul dari bawah mejanya, segera memeriksa kondisi kelas. "Ada yang terluka?"

Di sudut kelas, kamu melihat Rakka, siswa yang kursinya dekat lemari buku. Lemari setinggi 2 meter itu miring 45 derajat, hampir menimpa kursinya. Rakka tampak panik, tidak berani bergerak.

Di koridor, alarm kebakaran mulai berbunyi. Tampak asap tipis dari arah ruang guru.

BMKG baru saja mengumumkan gempa magnitudo 7.2 di Pesisir Barat Sumatera. Aftershock (gempa susulan) sangat mungkin terjadi.

Waktu: 2 menit pasca-gempa utama.`,
      illustration: 'https://images.pexels.com/photos/159866/books-book-library-159866.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: '2 menit pasca-gempa utama, beberapa korban luka, alarm kebakaran aktif',
      timeContext: 'Fase tanggap darurat awal, waktu kritis untuk stabilisasi',
      dangerLevel: 'high',
      emotionalTone: 'tense',
      keyLearningPoints: [
        'Periksa cedera sebelum bergerak',
        'Aftershock bisa terjadi kapan saja',
        'Prioritas: keselamatan diri dulu, baru membantu orang lain',
        'Alarm kebakaran bisa aktif karena kerusakan sistem'
      ],
      choices: [
        {
          text: 'Segera perintahkan Rakka untuk menjauh dari lemari, lalu bantu dia pindah ke ruang aman',
          isCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Rakka berhasil digerakkan tepat sebelum aftershock menggoyangkan lemari hingga jatuh',
          feedback: 'TINDAKAN TEPAT! Dalam situasi darurat, instruksi verbal yang jelas lebih aman daripada mendekati zona bahaya. Rakka sekarang selamat, dan aftershock sudah terbukti merobohkan lemari.',
          xpEarned: 50,
          decisionReason: 'Membantu tanpa mempertaruhkan diri di zona bahaya',
          nextScenarioId: 'earthquake-4'
        },
        {
          text: 'Biarkan Rakka, prioritaskan keluar dari gedung karena alarm kebakaran berbunyi',
          isCorrect: false,
          choiceCategory: 'evacuate',
          consequence: 'Aftershock terjadi dan lemari jatuh menimpa kursi kosong — untung Rakka sudah bergerak sendiri',
          feedback: 'RISIKO MORAL TINGGI! Meski keselamatan diri penting, meninggalkan seseorang dalam bahaya langsung bukan keputusan etis. Untung Rakka akhirnya bergerak sendiri, tapi tidak selalu beruntung.',
          xpEarned: 10,
          decisionReason: 'Abandoning someone in immediate danger',
          nextScenarioId: 'earthquake-4'
        },
        {
          text: 'Mendekati lemari untuk menopang dan membantu Rakka langsung',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Kamu berhasil menopang lemari dan membantu Rakka, tapi risiko tinggi karena aftershock',
          feedback: 'BERANI TAPI BERISIKO! Membantu secara langsung-heroik, tapi mendekati objek tidak stabil di zona aftershock berisiko. Instruksi verbal dari jarak aman lebih bijak.',
          xpEarned: 30,
          decisionReason: 'Heroik tapi tidak mengikuti protokol keamanan optimal',
          nextScenarioId: 'earthquake-4'
        }
      ],
      previousScenarioId: 'earthquake-1',
      defaultNextScenarioId: 'earthquake-4'
    }),

    // SCENARIO 3: Optimal Path - Safe
    createScenario({
      id: 'earthquake-3',
      disasterType: 'earthquake',
      order: 2,
      narrative: `Guncangan berhenti setelah 55 detik. Kamu berhasil bertahan dengan aman di bawah meja.

"Semua aman?" tanya Pak Arif dari bawah mejanya.

Di antara 32 siswa di kelas, 28 berhasil menerapkan protokol dengan benar. 4 siswa yang berlari ke koridor tampak ketakutan dan satu mengalami memar di lutut.

Di lantai terdengar derap langkah kaki — itu Pak Surya, wakasek kesiselamatan, membawa megaphone.

"PERHATIAN! Gempa utama telah berlalu. Aftershock dapat terjadi. MOHON TETAP DI BAWAH MEJA dalam POSISI AMAN hingga instruksi evakuasi. Tidak ada laporan kebakaran atau kerusakan struktural berat di gedung kita."

BMKG mengumumkan gempa magnitude 7.2, pusat gempa 45 km barat daya Padang, kedalaman 15 km. Tidak ada peringatan tsunami untuk wilayah ini.

Waktu: 3 menit pasca-gempa.`,
      illustration: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: '3 menit pasca-gempa, kelas relatif aman, menunggu instruksi evakuasi',
      timeContext: 'Fase stabilisasi, menunggu all-clear atau evakuasi',
      dangerLevel: 'medium',
      emotionalTone: 'tense',
      keyLearningPoints: [
        'Tetap di posisi aman hingga instruksi resmi',
        'Aftershock adalah risiko nyata',
        'Komunikasi terkoordinasi lebih aman',
        'Prioritas: luka-luka ditangani terlebih dahulu'
      ],
      choices: [
        {
          text: 'Tetap di bawah meja, tunggu instruksi evakuasi resmi sambil memantau kondisi sekitar',
          isCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Posisi aman dipertahankan, siap untuk evakuasi terkoordinasi',
          feedback: 'KESABARAN YANG TEPAT! Aftershock bisa terjadi kapan saja dalam hitungan menit hingga jam. Tetap di posisi aman hingga koordinasi evakuasi adalah protokol standar dari BMKG dan BNPB.',
          xpEarned: 50,
          decisionReason: 'Mengikuti protokol standar dan menunggu instruksi resmi',
          nextScenarioId: 'earthquake-5'
        },
        {
          text: 'Segera keluar untuk mengecek kondisi keluarga karena khawatir',
          isCorrect: false,
          choiceCategory: 'evacuate',
          consequence: 'Kamu keluar tanpa koordinasi dan hampir tertimpuang puing dari plafon koridor yang rusak',
          feedback: 'KEPANIKAN TIDAK MEMBANTU! Evakuasi tanpa koordinasi berisiko tinggi. Struktur bangunan mungkin rusak, dan traffic koridor bisa menyebabkan kecelakaan.',
          xpEarned: 0,
          decisionReason: 'Emosi mengalahkan protokol keselamatan',
          nextScenarioId: 'earthquake-4'
        },
        {
          text: 'Keluar dari bawah meja untuk membantu guru memeriksa korban luka',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Kamu membantu tapi risiko tinggi jika aftershock terjadi',
          feedback: 'NIAT BAIK, RISIKO TINGGI! Membantu adalah hal baik, tapi menunggu beberapa menit hingga situasi stabil lebih aman. Dalam gempa Cianjur, banyak korban jiwa adalah yang bergerak terlalu cepat.',
          xpEarned: 25,
          decisionReason: 'Bergerak terlalu cepat sebelum situasi stabil',
          nextScenarioId: 'earthquake-5'
        }
      ],
      previousScenarioId: 'earthquake-1',
      defaultNextScenarioId: 'earthquake-5'
    }),

    // SCENARIO 4: Evacuation Decision
    createScenario({
      id: 'earthquake-4',
      disasterType: 'earthquake',
      order: 3,
      narrative: `Pak Surya muncul di koridor dengan megaphone.

"PERHATIAN! SEMUA SISWA DAN GURU: Evakuasi dimulai. GUNAKAN TANGGA DARURAT, BUKAN LIFT. SATU KELAS SATU BARISAN. GURU MEMIMPIN, KEPALA KELAS MENUTUP BARISAN. MERUNDUK DI BAWAH ASAP JIKA ADA ASAP!"

Asap tipis mulai terlihat dari arah lab IPA, kemungkinan dari reagen kimia yang tumpah atau kabel terbakar.

Dari lantai 2, ada dua pilihan:
1. Tangga darurat utara — lebih dekat (30 meter) tapi harus lewat koridor yang ada asap tipis
2. Tangga darurat selatan — lebih jauh (60 meter) tapi jalur lebih bersih

Dinda menggenggam tanganmu. "Ayo kita keluar!"

Sirene pemadam kebakaran terdengar dari luar.`,
      illustration: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Evakuasi terkoordinasi dimulai, asap tipis di koridor utara',
      timeContext: '5 menit pasca-gempa, window time untuk evakuasi aman',
      dangerLevel: 'high',
      emotionalTone: 'urgent',
      keyLearningPoints: [
        'Merunduk di bawah asap (low and go)',
        'Tangga darurat lebih aman daripada lift',
        'Evakuasi terkoordinasi mengurangi chaos',
        'Analisis risiko jalur sebelum memilih'
      ],
      choices: [
        {
          text: 'Ikuti barisan kelas, gunakan tangga selatan dengan guru memimpin',
          isCorrect: true,
          choiceCategory: 'evacuate',
          consequence: 'Evakuasi terkoordinasi berjalan lancar, semua aman di titik kumpul',
          feedback: 'KEPUTUSAN BIJAK! Evakuasi terkoordinasi dengan memilih jalur yang lebih bersih dan mengikuti protokol sekolah adalah paling optimal. Data menunjukkan evakuasi terkoordinasi mengurangi risiko kecelakaan hingga 70%.',
          xpEarned: 60,
          decisionReason: 'Protokol evakuasi standar dengan analisis risiko jalur',
          nextScenarioId: 'earthquake-6'
        },
        {
          text: 'Ambil tangga utara karena lebih cepat, merunduk di bawah asap',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'evacuate',
          consequence: 'Kamu berhasil keluar tapi menghirup asap kimia yang mengganggu pernapasan',
          feedback: 'BISA DIPAHAMI TAPI RISIKO! Merunduk di bawah asap adalah teknik tepat, tapi asap dari laboratorium kimia mengandung racun. Jalur lebih lama yang bersih lebih aman untuk pernapasan.',
          xpEarned: 30,
          decisionReason: 'Teknik benar, pilihan jalur berisiko',
          nextScenarioId: 'earthquake-6'
        },
        {
          text: 'Keluar dari jendela lantai 2 menggunakan kabel yang ada di kelas',
          isCorrect: false,
          choiceCategory: 'evacuate',
          consequence: 'Kabel tidak kuat menahan beban, kamu jatuh dari ketinggian 4 meter',
          feedback: 'SANGAT BERBAHAYA! Evakuasi dari jendela tanpa peralatan profesional sangat berisiko. Dalam gempa Cianjur, beberapa korban adalah yang mencoba keluar melewati jendela. Gunakan jalur evakuasi standar.',
          xpEarned: 0,
          decisionReason: 'Melanggar protokol evakuasi standar',
          nextScenarioId: 'earthquake-5'
        }
      ],
      previousScenarioId: 'earthquake-2',
      defaultNextScenarioId: 'earthquake-6'
    }),

    // SCENARIO 5: Assembly Point
    createScenario({
      id: 'earthquake-5',
      disasterType: 'earthquake',
      order: 4,
      narrative: `Di titik kumpul (lapangan sekolah), suasana hiruk-pikuk. Seluruh 1.200 siswa dan 80 guru berkumpul.

Kepala Sekolah Bu Ratna berdiri di atas podium portable dengan megaphone.

"PERHATIAN! Gempa ini adalah magnitude 7.2, tidak ada peringatan tsunami. Tetap di titik kumpul. JANGAN KEMBALI KE GEDUNG hingga dinyatakan aman oleh tim dari BPBD!"

Di kerumunan, kamu mendengar percakapan panik:
- "Gedung kita retak besar di bagian timur!"
- "Adikku masih di dalam rumah, mau aku telepon!"
- "Ada yang bilang bendungan dekat sini bocor!"

HP-mu masih tidak ada sinyal. Listrik padam.

Di kejauhan, kamu melihat asap hitam dari arah pasar tradisional di samping sekolah — kebakaran mungkin terjadi di sana.

Tim BPBD dan ambulans sudah tiba di gerbang sekolah.

Pengumuman BMKG di radio portable Pak Penjaga Sekolah:
"...aftershock berpotensi terjadi dalam 24 jam ke depan. Warga diimbau menjauhi bangunan rusak..."`,
      illustration: 'https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Titik kumpul sekolah, 1.200+ orang, rumor dan informasi campuran',
      timeContext: '15 menit pasca-gempa, fase informasi dan koordinasi',
      dangerLevel: 'medium',
      emotionalTone: 'tense',
      keyLearningPoints: [
        'Verifikasi informasi dari sumber resmi',
        'Jangan termakan rumor tanpa bukti',
        'Tetap di titik kumpul hingga all-clear',
        'Koordinasi dengan petugas darurat'
      ],
      choices: [
        {
          text: 'Tetap di titik kumpul, dengarkan informasi resmi dari Kepala Sekolah dan BPBD',
          isCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Kamu menerima informasi terverifikasi dan siap mengikuti instruksi',
          feedback: 'KESABARAN YANG TEPAT! Dalam kepanikan massa, informasi terverifikasi adalah satu-satunya yang bisa diandalkan. BMKG dan BPBD adalah sumber resmi. BNPB melarang penyebaran hoaks dalam bencana.',
          xpEarned: 50,
          decisionReason: 'Mengandalkan sumber informasi resmi dan terverifikasi',
          nextScenarioId: 'earthquake-7'
        },
        {
          text: 'Percaya rumor bendungan bocor dan segera ajak teman-teman pergi ke tempat lebih tinggi',
          isCorrect: false,
          choiceCategory: 'evacuate',
          consequence: 'Kamu menciptakan kepanikan massal tanpa bukti, beberapa orang terluka karena berlarian',
          feedback: 'MENYEBARKAN HOAKS! Rumor tanpa verifikasi bisa menyebabkan kepanikan berbah. Dalam bencana, disinformasi diancam Pasal 14 UU ITE dan UU Kebencanaan. Selalu verifikasi ke BMKG/BPBD.',
          xpEarned: 0,
          decisionReason: 'Beraksi tanpa verifikasi, menciptakan kepanikan',
          nextScenarioId: 'earthquake-6'
        },
        {
          text: 'Berusaha masuk kembali ke gedung untuk mengambil HP dari kelas',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kamu dicegah Pak Surya, "Gedung belum dinyatakan aman dari aftershock!"',
          feedback: 'MENDAPATKAN BAHAYA! HP bisa diganti, nyawa tidak. Gedung yang sudah goyah struktur berisiko runtuh saat aftershock. Protokolnya: tidak ada yang masuk gedung sebelum inspeksi dari ahli struktur.',
          xpEarned: 0,
          decisionReason: 'Memprioritaskan benda berharga di atas keselamatan jiwa',
          nextScenarioId: 'earthquake-6'
        }
      ],
      previousScenarioId: 'earthquake-3',
      defaultNextScenarioId: 'earthquake-7'
    }),

    // SCENARIO 6: Helping Others
    createScenario({
      id: 'earthquake-6',
      disasterType: 'earthquake',
      order: 5,
      narrative: `Di kerumunan, Ibu Rini, guru matematika, tampak menangis. Suaminya, Pak Hendra, adalah penjaga keamanan yang bertugas di gedung UTBK saat gempa.

"Suami saya... dia berada di lantai 3 gedung UTBK saat gempa... saya tidak bisa hubungi..."

Gedung UTBK adalah bangunan 4 lantai yang dibangun tahun 2018, standar gempa baru. Kamu tahu gedung ini memiliki protokol keamanan ketat.

Beberapa warga mencoba menuju gedung UTBK untuk mencari korban. Dari kejauhan, gedung UTBK tampak masih berdiri utuh.

Tim SAR BPBD sudah bergerak dengan anjing pelacak menuju gedung UTBK.

Ibu Rini memegang lenganmu: "Tolong... coba cek Pak Hendra..."

Dinda yang di sampingmu berkata, "Kita nggak bisa masuk, itu bahaya..."

BMKG mengumumkan aftershock magnitude 4.8 baru saja terjadi.`,
      illustration: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Situasi emosional, permintaan bantuan, tim profesional sudah di lapangan',
      timeContext: '25 menit pasca-gempa, fase rescue profesional',
      dangerLevel: 'high',
      emotionalTone: 'desperate',
      keyLearningPoints: [
        'Rescue harus dilakukan profesional terlatih',
        'Dukungan emosional juga bentuk bantuan',
        'Jangan mengganggu operasi SAR profesional',
        'Informasi adalah bantuan penting'
      ],
      choices: [
        {
          text: 'Memberikan informasi ke tim SAR tentang lokasi terakhir Pak Hendra berdasarkan pengetahuan, sambil menemani Ibu Rini',
          isCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Tim SAR mendapat informasi penting, Ibu Rini merasa didukung, Pak Hendra berhasil ditemukan selamat',
          feedback: 'KONTRIBUSI OPTIMAL! Dalam tanggap bencana, informasi adalah aset berharga. Dengan memberikan info dan dukungan emosional, kamu membantu tanpa mempertaruhkan diri.',
          xpEarned: 60,
          decisionReason: 'Membantu dengan cara yang tepat dan aman',
          nextScenarioId: 'earthquake-7'
        },
        {
          text: 'Berusaha masuk ke gedung UTBK untuk mencari Pak Hendra',
          isCorrect: false,
          choiceCategory: 'help-others',
          consequence: 'Kamu dicegah Pak Surya, tapi hampir saja masuk zona berbahaya',
          feedback: 'NEKAT! Rescue di bangunan pasca-gempa adalah tugas profesional. Tidak terlatih, kamu bisa mengganggu operasi, terjebak dalam aftershock, atau memperburuk keadaan.',
          xpEarned: 0,
          decisionReason: 'Mencoba rescue tanpa pelatihan dan peralatan',
          nextScenarioId: 'earthquake-7'
        },
        {
          text: 'Biarkan tim SAR bekerja, jangan ikut campur karena itu bukan tanggung jawab siswa',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Benar aman, tapi Ibu Rini kekurangan dukungan emosional',
          feedback: 'AMAN TAPI DINGIN. Meski benar tidak ikut rescue, dukungan emosional sama pentingnya. Dalam kepanikan, comforting touch atau mendengar bisa sangat membantu.',
          xpEarned: 30,
          decisionReason: 'Tidak memberikan dukungan emosional, padahal itu juga bantuan',
          nextScenarioId: 'earthquake-7'
        }
      ],
      previousScenarioId: 'earthquake-4',
      defaultNextScenarioId: 'earthquake-7'
    }),

    // SCENARIO 7: Post-Disaster
    createScenario({
      id: 'earthquake-7',
      disasterType: 'earthquake',
      order: 6,
      narrative: `3 jam berlalu. Senja mulai turun.

Dari BPBD, status darurat bencana dinyatakan tingkat regional. Sekolah menjadi posko pengungsian sementara untuk warga yang rumahnya rusak.

Malam ini diperkirakan hujan. Tenda darurat sudah didirikan di lapangan sekolah. Kapal BPBD dan Palang Merah menyuplai makanan dan air.

Kepala Sekolah mengumumkan melalusi megaphone:
"Kepada semua siswa yang orang tua/wali dapat menjemput, silakan pulang. Siswa yang rumahnya terdampak atau tidak bisa dijemput, silakan mendaftar untuk menginap di posko sekolah. Relawan akan mengkoordinasi."

Rumahmu 5 km dari sekolah. Ayahmu menelepon via telpon tetangga bahwa rumah aman dan akan menjemput dalam 2 jam.

Beberapa temanmu memilih tinggal membantu sebagai relawan. Dinda termasuk salah satunya.

BMKG memperingatkan potensi aftershock dalam 48 jam. Suhu malam ini diperkirakan 21°C.`,
      illustration: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Posko pengungsian, malam hari, keputusan personal vs komunitas',
      timeContext: '3 jam pasca-gempa, fase pemulihan awal',
      dangerLevel: 'low',
      emotionalTone: 'neutral',
      keyLearningPoints: [
        'Posko pengungsian terkoordinasi adalah aman',
        'Waktu keluarga penting untuk reconnection',
        'Bantu komunitas jika mampu dan aman',
        'Rest dan nutrisi penting untuk stamina'
      ],
      choices: [
        {
          text: 'Menunggu jemputan ayah sambil membantu relawan secara ringan (registrasi, distribusi air)',
          isCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Kamu membantu komunitas, tetap aman, dan orang tua menjemput tepat waktu',
          feedback: 'SEIMBANG! Membantu dalam kapasitas yang safe sambil tetap reconnecting dengan keluarga adalah eksekusi tanggung jawab ganda yang ideal.',
          xpEarned: 50,
          decisionReason: 'Keseimbangan antara tanggung jawab keluarga dan komunitas',
          nextScenarioId: 'earthquake-8'
        },
        {
          text: 'Langsung pulang tanpa membantu, fokus pada keselamatan pribadi',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Aman, tapi kehilangan kesempatan berkontribusi',
          feedback: 'AMAN ITU PENTING, tapi tidak ada salahnya membantu dalam kapasitas aman. Gotong royong adalah nilai budaya Indonesia, dan situasi bencana butuh soliditas.',
          xpEarned: 20,
          decisionReason: 'Tidak ada kontribusi komunitas dalam situasi darurat',
          nextScenarioId: 'earthquake-8'
        },
        {
          text: 'Menolak jemputan orang tua, memilih menginap di posko untuk membantu lebih lama',
          isCorrect: false,
          choiceCategory: 'help-others',
          consequence: 'Orang tua khawatir, kamu kekurangan istirahat, bisa mempengaruhi kesehatan',
          feedback: 'NIAT BAIK, EKSEKUSI KURANG TEPAT. Orang tua butuh tahu kamu aman. Kamu juga butuh istirahat untuk sustain helping. Prioritas keluarga reconnect dulu.',
          xpEarned: 25,
          decisionReason: 'Mengorbankan prioritas keluarga dan kesehatan pribadi',
          nextScenarioId: 'earthquake-8'
        }
      ],
      previousScenarioId: 'earthquake-5',
      defaultNextScenarioId: 'earthquake-8'
    }),

    // SCENARIO 8: Learning Reflection
    createScenario({
      id: 'earthquake-8',
      disasterType: 'earthquake',
      order: 7,
      narrative: `Sebulan setelah gempa, kehidupan perlahan kembali normal. Sekolahmu menjadi model "Sekolah Siaga Bencana" untuk wilayah Sumatera Barat.

Dewan guru mengundangmu menjadi bagian dari tim penyusunan program mitigasi gempa untuk siswa baru tahun depan. Kamu akan mempresentasikan pengalamanmu.

Dalam presentasi, kamu akan fokus pada satu topik utama sebagai wakil dari siswa yang sudah mengalami gempa secara langsung.`,
      illustration: 'https://images.pexels.com/photos/159775/books-book-library-books-159775.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Penyusunan program mitigasi sekolah, opportunity untuk berbagi',
      timeContext: '1 bulan pasca-gempa, fase pembelajaran dan perbaikan sistem',
      dangerLevel: 'low',
      emotionalTone: 'neutral',
      keyLearningPoints: [
        'Berbagi pengalaman adalah bentuk edukasi',
        'Mitigasi adalah proses berkelanjutan',
        'Setiap orang bisa menjadi agen perubahan',
        'Pendidikan mitigasi simpan nyawa'
      ],
      choices: [
        {
          text: 'Presentasikan pengalaman langsung dengan fokus pada protokol Drop, Cover, Hold On dan pentingnya tetap tenang',
          isCorrect: true,
          choiceCategory: 'gather-information',
          consequence: 'Presentasimu berdampak, 87% siswa baru mengerti protokol dengan konteks nyata',
          feedback: 'PEMBELAJARAN DENGAN IMPAK! Pengalaman nyata adalah guru terbaik. Dengan berbagi konteks dan protokol, kamu meningkatkan kesiapan seluruh sekolah.',
          xpEarned: 60,
          decisionReason: 'Berbagi pengalaman untuk edukasi dengan fokus yang tepat'
        },
        {
          text: 'Ceritakan pengalaman secara dramatis untuk membuat siswa berempati',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'gather-information',
          consequence: 'Siswa berempati tapi kurang paham protokol praktis',
          feedback: 'EMOSI TIDAK CUKUP. Empati bagus, tapi mitigasi butuh skill praktis. Pastikan selalu ada takeaway actionable dari sharing pengalaman.',
          xpEarned: 30,
          decisionReason: 'Kurang fokus pada edukasi praktis'
        },
        {
          text: 'Serahkan pada guru dan ahli, siswa tidak seharusnya presentasi',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kehilangan kesempatan berkontribusi perspektif siswa',
          feedback: 'SUARA SISWA PENTING! Perspektif siswa yang mengalami langsung sangat berbeda dengan teori guru. Kamu adalah living testimony, jangan meremehkan kontribusimu.',
          xpEarned: 0,
          decisionReason: 'Tidak memanfaatkan kesempatan edukasi'
        }
      ],
      previousScenarioId: 'earthquake-7'
    })
  ];

  return scenarios;
}

// ============================================
// MAIN EXPORT
// ============================================

function shuffleChoices(scenarios: Scenario[]): Scenario[] {
  return scenarios.map(scenario => ({
    ...scenario,
    choices: [...scenario.choices].sort(() => Math.random() - 0.5),
  }));
}

export function getScenarios(disasterType: DisasterType): Scenario[] {
  let scenarios: Scenario[] = [];
  switch (disasterType) {
    case 'earthquake':
      scenarios = generateEarthquakeScenarios();
      break;
    case 'tsunami':
      scenarios = generateTsunamiScenarios();
      break;
    case 'flood':
      scenarios = generateFloodScenarios();
      break;
    case 'fire':
      scenarios = generateFireScenarios();
      break;
    default:
      return [];
  }
  return shuffleChoices(scenarios);
}

// Placeholder for other disaster types (to be expanded)
function generateTsunamiScenarios(): Scenario[] {
  return generateBaseTsunamiScenarios();
}

function generateFloodScenarios(): Scenario[] {
  return generateBaseFloodScenarios();
}

function generateFireScenarios(): Scenario[] {
  return generateBaseFireScenarios();
}


// ============================================
// TSUNAMI SCENARIOS - COMPREHENSIVE BRANCHING
// ============================================

function generateBaseTsunamiScenarios(): Scenario[] {
  const scenarios: Scenario[] = [
    // SCENARIO 1: Natural Warning Signs
    createScenario({
      id: 'tsunami-1',
      disasterType: 'tsunami',
      order: 1,
      narrative: `Pagi hari di Pantai Pangandaran, Ciamis. Kamu sedang berlibur dengan keluarga—ayah, ibu, dan adikmu Rara (9 tahun).

Tiba-tiba, air laut surut secara drastis. Lebih dari 200 meter dari garis pantai normal. Ikan-ikan tergeletak di pasir yang baru terpapar. Beberapa pengunjung pantai mulai berteriak dengan gembira, "Mengambil ikan gratis!"

Ayahmu, yang pernah mengalami tsunami Aceh 2004, langsung berdiri dengan wajah pucat.

"JANGAN AMBIL IKAN! ITU TANDA TSUNAMI! LARI KE GUNUNG SEKARANG!"

Dari kejauhan, kamu melihat dinding air hitam raksasa di cakrawala.

BMKG belum mengeluarkan peringatan. Tapi ayahmu berkata, "Kita cuma punya 5-10 menit sebelum ombak sampai."

Waktu: Detik-detik ini menentukan hidup mati.`,
      illustration: 'https://images.pexels.com/photos/1685116/pexels-photo-1685116.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Pantai Pangandaran, pagi hari, liburan keluarga',
      timeContext: 'Fase deteksi dini, window waktu sangat terbatas',
      dangerLevel: 'critical',
      emotionalTone: 'urgent',
      keyLearningPoints: [
        'Air surut drastis = tanda alami tsunami',
        '5-15 menit window waktu untuk evakuasi dari pantai',
        'Minimum 20 meter elevasi atau 2 km dari pantai',
        'Jangan pedulikan ikan atau benda yang terlihat'
      ],
      choices: [
        {
          text: 'Segera berteriak "TSUNAMI!" ke semua orang, lari menuju bukit terdekat dengan keluarga',
          isCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Keluarga dan banyak warga berhasil menyelematkan diri ke bukit',
          feedback: 'TINDAKAN TEPAT! Air surut drastis adalah pertanda alami tsunami paling bisa diandalkan. Dalam Aceh 2004, mereka yang mengenali tanda ini berhasil selamat.',
          xpEarned: 70,
          decisionReason: 'Deteksi tanda alami dan aksi cepat',
          nextScenarioId: 'tsunami-3'
        },
        {
          text: 'Ikut mengambil ikan sebanyak-banyaknya karena gratis',
          isCorrect: false,
          choiceCategory: 'gather-information',
          consequence: 'Tsunami menyapu pantai, kamu terseret arus',
          feedback: 'KESALAHAN FATAL! Dalam setiap tsunami, orang yang mengambil ikan saat air surut adalah korban pertama. Nafsu mengalahkan instinct bertahan hidup.',
          xpEarned: 0,
          decisionReason: 'Gagal mengenali tanda alami tsunami',
          nextScenarioId: 'tsunami-2'
        },
        {
          text: 'Menunggu peringatan resmi BMKG sebelum bertindak',
          isCorrect: false,
          choiceCategory: 'gather-information',
          consequence: 'Peringatan datang terlambat, kamu tersapu',
          feedback: 'MENUNGGU BERBAHAYA! Tanda alami muncul SEBELUM peringatan resmi. System InaTEWS butuh beberapa menit untuk mengeluarkan warning. Jika ada tanda alami, ACT NOW.',
          xpEarned: 0,
          decisionReason: 'Mengandalkan warning resmi tanpa mengenali tanda alami',
          nextScenarioId: 'tsunami-2'
        }
      ],
      defaultNextScenarioId: 'tsunami-3'
    }),

    // SCENARIO 2: Suboptimal Path - Caught in Water
    createScenario({
      id: 'tsunami-2',
      disasterType: 'tsunami',
      order: 2,
      narrative: `Ombak pertama menyapu pantai. Kamu berhasil berpegangan ke pohon kelapa yang kokoh, tapi tubuhmu terluka oleh puing-puing yang terbawa arus.

Air setinggi 3 meter surut perlahan. Rara ada di punggungmu—kamu berhasil mengangkatnya tepat sebelum ombak datang. Ayah dan Ibu hilang dari pandanganmu.

Di sekitarmu, beberapa orang terjebak di atas atap warung dan mobil yang terbawa arus. Seorang wanita tua berteriak minta tolong dari atas atap kios 50 meter darimu.

Dari kejauhan, kamu melihat ombak kedua mulai terbentuk di cakrawala. Tsunami biasanya datang dalam beberapa gelombang, dan gelombang kedua sering lebih besar.

Waktu: 5 menit sebelum ombak kedua diperkirakan tiba.`,
      illustration: 'https://images.pexels.com/photos/24498763/free-photo-of-flooded-neighborhood-street-with-submerged-houses.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Pasca gelombang pertama, terluka, ombak kedua akan datang',
      timeContext: 'Fase survival antar-gelombang, window sangat singkat',
      dangerLevel: 'critical',
      emotionalTone: 'desperate',
      keyLearningPoints: [
        'Tsunami datang dalam multiple gelombang, yang kedua sering lebih besar',
        'Jangan kembali ke pantai setelah gelombang pertama surut',
        'Evakuasi vertikal ke lantai atas bangunan kokoh jika tidak ada bukit',
        'Prioritaskan diri sendiri sebelum membantu orang lain'
      ],
      choices: [
        {
          text: 'Segera lari ke bukit dengan Rara di punggung, abaikan panggilan tolong',
          isCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Kamu dan Rara selamat di bukit sebelum ombak kedua tiba',
          feedback: 'KEPUTUSAN SULIT TAPI TEPAT! Dalam tsunami, window waktu antar-gelombang sangat singkat. Membantu orang lain di zona bahaya bisa mengorbankan diri sendiri. Selamatkan diri dulu, baru bantu setelah aman.',
          xpEarned: 50,
          decisionReason: 'Prioritas keselamatan diri di situasi kritis',
          nextScenarioId: 'tsunami-4'
        },
        {
          text: 'Berusaha menuju wanita tua di atap kios untuk membantunya',
          isCorrect: false,
          choiceCategory: 'help-others',
          consequence: 'Ombak kedua tiba saat kamu di tengah jalan, kamu dan wanita itu terseret',
          feedback: 'BERANI TAPI FATAL! Membantu orang di zona bahaya saat gelombang kedua akan datang adalah risiko besar. Dalam tsunami Palu 2018, banyak korban adalah yang kembali untuk menolong orang lain.',
          xpEarned: 10,
          decisionReason: 'Mempertaruhkan diri saat window waktu habis',
          nextScenarioId: 'tsunami-4'
        },
        {
          text: 'Tetap di pohon kelapa, berpegangan kuat menunggu ombak kedua lewat',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Ombak kedua lebih besar dan merobohkan pohon, kamu terseret',
          feedback: 'BERBAHAYA! Pohon bisa roboh oleh kekuatan ombak kedua. Evakuasi ke tempat tinggi adalah satu-satunya pilihan aman. Jangan bertahan di zona rendah.',
          xpEarned: 0,
          decisionReason: 'Tidak evakuasi padahal ada window waktu',
          nextScenarioId: 'tsunami-4'
        }
      ],
      previousScenarioId: 'tsunami-1',
      defaultNextScenarioId: 'tsunami-4'
    }),

    // SCENARIO 3: Optimal Path - Evacuation Route
    createScenario({
      id: 'tsunami-3',
      disasterType: 'tsunami',
      order: 2,
      narrative: `Kamu dan keluarga berhasil lari ke bukit evakuasi. Dari ketinggian 30 meter, kamu melihat ombak pertama menyapu pantai.

Suara gemuruh luar biasa. Bangunan-bangunan di pinggir pantai hancur diterjang. Mobil, perahu, dan puing-puing terbawa arus.

Di bukit evakuasi, sekitar 200 orang berkumpul. Beberapa menangis, beberapa syok. Seorang pria paruh baya berteriak, "Anak saya masih di hotel! Saya harus turun!"

Petugas BPBD yang kebetulan di area datang dengan megaphone: "TETAP DI TEMPAT TINGGI! OMBAK KEDUA AKAN DATANG! JANGAN TURUN SAMPAI ALL-CLEAR DARI BMKG!"

Rara menangis ketakutan. Ibumu memeluknya. Ayahmu memeriksa kondisi orang-orang di sekitar.

BMKG mengumumkan: Tsunami warning masih aktif. Magnitude gempa 8.2, pusat di selatan Jawa.

Waktu: 10 menit pasca gelombang pertama.`,
      illustration: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Bukit evakuasi, 200 orang, ombak kedua akan datang',
      timeContext: 'Fase menunggu all-clear, ombak kedua imminent',
      dangerLevel: 'high',
      emotionalTone: 'tense',
      keyLearningPoints: [
        'Tetap di tempat tinggi hingga all-clear resmi',
        'Multiple gelombang adalah karakteristik tsunami',
        'Jangan turun untuk mencari orang atau barang',
        'Dukungan emosional penting di posko evakuasi'
      ],
      choices: [
        {
          text: 'Tetap di bukit, tenangkan Rara, dan bantu petugas mengorganisir posko',
          isCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Posko evakuasi terorganisir, semua tetap aman saat ombak kedua datang',
          feedback: 'TINDAKAN IDEAL! Menunggu all-clear adalah protokol wajib. Membantu mengorganisir posko juga membantu petugas yang kewalahan. Dalam tsunami Aceh, posko terorganisir menyelamatkan banyak nyawa.',
          xpEarned: 60,
          decisionReason: 'Mengikuti protokol dan membantu koordinasi',
          nextScenarioId: 'tsunami-5'
        },
        {
          text: 'Membantu pria yang ingin turun mencari anaknya di hotel',
          isCorrect: false,
          choiceCategory: 'help-others',
          consequence: 'Kamu dan pria itu turun, ombak kedua tiba, kalian terseret',
          feedback: 'BERBAHAYA! Empati bagus, tapi turun ke zona bahaya saat warning aktif adalah kesalahan fatal. Petugas SAR profesional akan mencari korban setelah all-clear.',
          xpEarned: 0,
          decisionReason: 'Turun ke zona bahaya saat warning aktif',
          nextScenarioId: 'tsunami-5'
        },
        {
          text: 'Turun setelah ombak pertama surut untuk mencari air minum',
          isCorrect: false,
          choiceCategory: 'gather-information',
          consequence: 'Ombak kedua tiba saat kamu di pantai, kamu terseret',
          feedback: 'KESALAHAN KLASIK! Banyak korban tsunami adalah yang kembali setelah gelombang pertama surut, mengira sudah aman. Ombak kedua sering lebih besar. TUNGGU ALL-CLEAR!',
          xpEarned: 0,
          decisionReason: 'Kembali ke zona bahaya terlalu cepat',
          nextScenarioId: 'tsunami-5'
        }
      ],
      previousScenarioId: 'tsunami-1',
      defaultNextScenarioId: 'tsunami-5'
    }),

    // SCENARIO 4: Search and Rescue Coordination
    createScenario({
      id: 'tsunami-4',
      disasterType: 'tsunami',
      order: 3,
      narrative: `Ombak kedua telah berlalu. Dari bukit, kamu melihat dampak yang lebih parah—area pantai hancur total.

Petugas BPBD, SAR, dan TNI mulai turun untuk pencarian dan penyelamatan. Kamu berada di posko evakuasi dengan sekitar 200 orang.

Seorang ibu muda mendekatimu sambil menangis: "Tolong... suami saya... dia kembali ke hotel untuk mengambil koper kami... saya tidak bisa hubungi..."

Petugas SAR meminta informasi: "Siapa yang tahu lokasi orang-orang yang mungkin tertinggal di area pantai? Kami butuh info terakhir."

Di posko, beberapa orang mulai panik ingin turun mencari keluarga. Petugas BPBD berusaha menahan mereka.

Waktu: 30 menit pasca gelombang kedua.`,
      illustration: 'https://images.pexels.com/photos/15861730/pexels-photo-15861730.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Posko evakuasi, operasi SAR dimulai, warga panik',
      timeContext: 'Fase rescue awal, koordinasi informasi kritis',
      dangerLevel: 'high',
      emotionalTone: 'desperate',
      keyLearningPoints: [
        'Rescue harus dilakukan profesional terlatih',
        'Informasi lokasi korban adalah aset berharga',
        'Jangan mengganggu operasi SAR',
        'Dukungan emosional di posko juga bentuk bantuan'
      ],
      choices: [
        {
          text: 'Berikan informasi lokasi hotel kepada tim SAR, dampingi ibu muda yang panik',
          isCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Tim SAR mendapat info penting, ibu muda merasa didukung, suaminya ditemukan selamat',
          feedback: 'KONTRIBUSI OPTIMAL! Informasi adalah aset berharga di tanggap bencana. Dengan memberikan info dan dukungan emosional, kamu membantu tanpa mempertaruhkan diri.',
          xpEarned: 60,
          decisionReason: 'Membantu dengan cara yang tepat dan aman',
          nextScenarioId: 'tsunami-6'
        },
        {
          text: 'Turun ke area pantai untuk ikut mencari korban',
          isCorrect: false,
          choiceCategory: 'help-others',
          consequence: 'Kamu dicegah petugas, hampir masuk zona berbahaya',
          feedback: 'NEKAT! Rescue di area pasca-tsunami adalah tugas profesional. Tidak terlatih, kamu bisa mengganggu operasi, terjebak di puing, atau terkena gelombang susulan.',
          xpEarned: 0,
          decisionReason: 'Mencoba rescue tanpa pelatihan',
          nextScenarioId: 'tsunami-6'
        },
        {
          text: 'Diam saja, itu bukan tanggung jawabmu',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Aman, tapi ibu muda kekurangan dukungan dan info terlambat sampai ke SAR',
          feedback: 'AMAN TAPI PASIF. Meski benar tidak ikut rescue, memberikan info dan dukungan emosional adalah bentuk bantuan yang bisa kamu lakukan tanpa risiko.',
          xpEarned: 20,
          decisionReason: 'Tidak berkontribusi padahal bisa membantu dengan aman',
          nextScenarioId: 'tsunami-6'
        }
      ],
      previousScenarioId: 'tsunami-2',
      defaultNextScenarioId: 'tsunami-6'
    }),

    // SCENARIO 5: Assembly Point Management
    createScenario({
      id: 'tsunami-5',
      disasterType: 'tsunami',
      order: 4,
      narrative: `BMKG akhirnya mengumumkan: "TSUNAMI WARNING DICABUT. Gelombang susulan tidak terdeteksi dalam 2 jam terakhir. Warga diizinkan turun dari bukit, TETAPI tetap menjauhi area pantai hingga inspeksi selesai."

Di posko evakuasi, kebutuhan dasar mulai mendesak. Air minum menipis. Beberapa lansia dan anak-anak mulai dehidrasi. Tenda darurat terbatas.

Palang Merah dan BPBD sudah tiba dengan suplai, tapi distribusi belum terorganisir. Beberapa warga mulai mendorong-mendorong untuk mendapatkan air.

Seorang relawan Palang Merah meminta bantuan: "Kamu muda dan kuat, tolong bantu distribusi air dan makanan. Tapi kita butuh sistem yang tertib."

Di kerumunan, rumor mulai menyebar: "Dengar ada gelombang ketiga! Seseorang bilang di radio!" Padahal BMKG sudah cabut warning.

Waktu: 2 jam pasca gelombang terakhir.`,
      illustration: 'https://images.pexels.com/photos/15808833/free-photo-of-afad-tents-in-city.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Posko evakuasi, distribusi suplai, rumor menyebar',
      timeContext: 'Fase pemenuhan kebutuhan dasar, koordinasi relawan',
      dangerLevel: 'medium',
      emotionalTone: 'tense',
      keyLearningPoints: [
        'Distribusi tertib mencegah chaos dan cedera',
        'Prioritaskan lansia, anak-anak, dan ibu hamil',
        'Verifikasi informasi dari sumber resmi',
        'Jangan sebarkan rumor tanpa bukti'
      ],
      choices: [
        {
          text: 'Bantu relawan mengorganisir distribusi dengan antrean, prioritaskan lansia dan anak-anak, klarifikasi rumor',
          isCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Distribusi tertib, semua kebutuhan terpenuhi, rumor teredam',
          feedback: 'KONTRIBUSI SANGAT BAIK! Distribusi tertib mencegah chaos. Klarifikasi rumor juga penting—dalam bencana, disinformasi bisa menyebabkan kepanikan berbah. BNPB melarang penyebaran hoaks.',
          xpEarned: 60,
          decisionReason: 'Mengorganisir distribusi dan melawan disinformasi',
          nextScenarioId: 'tsunami-7'
        },
        {
          text: 'Ambil air untuk keluargamu dulu, biarkan yang lain antre',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kamu mendapat air tapi mendorong orang lain, seorang lansia terjatuh',
          feedback: 'PRIORITAS SALAH! Dalam bencana, gotong royong adalah kunci. Memprioritaskan diri sendiri menciptakan chaos dan bisa melukai yang lemah. Antre dan bantu yang membutuhkan.',
          xpEarned: 0,
          decisionReason: 'Egois dalam situasi darurat',
          nextScenarioId: 'tsunami-7'
        },
        {
          text: 'Sebarkan info gelombang ketiga agar orang tetap di bukit',
          isCorrect: false,
          choiceCategory: 'gather-information',
          consequence: 'Kepanikan terjadi, beberapa orang terluka karena berlarian',
          feedback: 'MENYEBARKAN HOAKS! BMKG sudah cabut warning. Menyebarkan rumor tanpa verifikasi adalah pelanggaran UU ITE dan UU Kebencanaan. Selalu verifikasi ke sumber resmi sebelum menyebarkan info.',
          xpEarned: 0,
          decisionReason: 'Menyebarkan disinformasi di situasi darurat',
          nextScenarioId: 'tsunami-7'
        }
      ],
      previousScenarioId: 'tsunami-3',
      defaultNextScenarioId: 'tsunami-7'
    }),

    // SCENARIO 6: Medical Triage
    createScenario({
      id: 'tsunami-6',
      disasterType: 'tsunami',
      order: 5,
      narrative: `Tim medis tiba di posko. Ada sekitar 30 orang dengan luka berbagai tingkat—dari luka ringan hingga patah tulang dan hypothermia.

Dokter Rina, satu-satunya dokter di posko, kewalahan. Dia membutuhkan bantuan triage—memilah pasien berdasarkan tingkat keparahan.

Di depanmu ada 3 pasien:
1. Pria 40-an, luka di kepala, sadar tapi lemas
2. Wanita tua 70-an, hypothermia, menggigil hebat
3. Anak 10 tahun, patah tulang kaki, menangis kesakitan

Dokter Rina menjelaskan prinsip triage: "Kita harus prioritaskan yang paling urgent. Hypothermia bisa fatal cepat, luka kepala bisa memburuk, patah tulang painful tapi tidak life-threatening."

Waktu: Setiap menit penting untuk pasien kritis.`,
      illustration: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Posko dengan 30 pasien, 1 dokter, triage diperlukan',
      timeContext: 'Fase medis darurat, prioritisasi life-saving',
      dangerLevel: 'high',
      emotionalTone: 'desperate',
      keyLearningPoints: [
        'Triage: prioritaskan berdasarkan urgensi, bukan urutan datang',
        'Hypothermia adalah kondisi life-threatening yang butuh penanganan cepat',
        'Bantu dokter dengan tugas non-medis (menghangatkan, menghibur)',
        'Jangan mengganggu penanganan medis profesional'
      ],
      choices: [
        {
          text: 'Bantu dokter dengan wanita hypothermia—selimuti, beri minuman hangat, sementara dokter tangani luka kepala',
          isCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Wanita hypothermia stabil, pria luka kepala ditangani dokter, anak patah tulang dihibur',
          feedback: 'TRIAGE TEPAT! Hypothermia adalah kondisi yang bisa fatal dalam waktu singkat. Dengan membantu tugas non-medis, kamu membebaskan dokter untuk penanganan medis yang butuh keahlian.',
          xpEarned: 60,
          decisionReason: 'Membantu triage dengan tugas yang tepat',
          nextScenarioId: 'tsunami-7'
        },
        {
          text: 'Prioritaskan anak yang menangis karena paling bising dan mengharukan',
          isCorrect: false,
          choiceCategory: 'help-others',
          consequence: 'Wanita hypothermia memburuk karena terlambat ditangani',
          feedback: 'PRIORITAS SALAH! Triage bukan berdasarkan siapa yang paling bising atau mengharukan, tapi urgensi medis. Patah tulang painful tapi tidak life-threatening. Hypothermia bisa fatal.',
          xpEarned: 10,
          decisionReason: 'Tidak mengikuti prinsip triage medis',
          nextScenarioId: 'tsunami-7'
        },
        {
          text: 'Coba berikan pertolongan pertama sendiri tanpa instruksi dokter',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kamu memberikan perawatan yang salah, kondisi pasien memburuk',
          feedback: 'BERBAHAYA! Pertolongan pertama tanpa pelatihan bisa memperburuk kondisi. Tugas non-medis (menghangatkan, menghibur) aman, tapi penanganan medis harus oleh profesional.',
          xpEarned: 0,
          decisionReason: 'Melakukan tindakan medis tanpa kompetensi',
          nextScenarioId: 'tsunami-7'
        }
      ],
      previousScenarioId: 'tsunami-4',
      defaultNextScenarioId: 'tsunami-7'
    }),

    // SCENARIO 7: Recovery and Relocation
    createScenario({
      id: 'tsunami-7',
      disasterType: 'tsunami',
      order: 6,
      narrative: `3 hari berlalu. Pemerintah daerah mendirikan pengungsian permanen di gedung olahraga. Kamu dan keluarga dipindahkan ke sana.

Rumah liburan keluargamu hancur total. Namun semua anggota keluarga selamat—itu yang penting.

Di pengungsian, tim psikososial dari Palang Merah mulai bekerja. Banyak anak mengalami trauma—mimpi buruk, ketakutan pada air, menarik diri.

Rara juga terpengaruh. Dia tidak mau mandi karena takut air. Ibu khawatir.

Seorang psikolog mendekatimu: "Kamu sebagai kakak bisa bantu Rara. Anak-anak pulih lebih cepat dengan dukungan keluarga. Tapi hindari memaksa—biarkan dia berekspresi."

Waktu: 3 hari pasca-tsunami.`,
      illustration: 'https://images.pexels.com/photos/8721399/pexels-photo-8721399.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Pengungsian permanen, trauma anak, dukungan psikososial',
      timeContext: 'Fase pemulihan awal, dukungan psikologis',
      dangerLevel: 'low',
      emotionalTone: 'neutral',
      keyLearningPoints: [
        'Trauma anak butuh penanganan lembut, bukan dipaksa',
        'Dukungan keluarga mempercepat pemulihan psikologis',
        'Ekspresi emosi adalah bagian dari healing',
        'Jangan meremehkan dampak psikologis bencana'
      ],
      choices: [
        {
          text: 'Dampingi Rara, biarkan dia bercerita, ajak bermain untuk mengalihkan, jangan paksa mandi',
          isCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Rara perlahan terbuka, trauma mulai terkelola, dia mau mandi dengan air sedikit',
          feedback: 'PENDEKATAN TEPAT! Trauma anak butuh kesabaran. Memaksa bisa memperburuk. Bermain dan bercerita adalah terapi alami. Dukungan kakak sangat berarti untuk Rara.',
          xpEarned: 60,
          decisionReason: 'Pendekatan trauma-informed yang tepat',
          nextScenarioId: 'tsunami-8'
        },
        {
          text: 'Paksa Rara mandi karena kebersihan penting, meski dia menangis',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Rara semakin trauma, menarik diri, tidak mau bicara',
          feedback: 'MEMPERBURUK TRAUMA! Memaksa anak trauma "menghadapi" ketakutan bisa memperdalam PTSD. Pendekatan bertahap dan lembut lebih efektif. Konsultasi psikolog untuk teknik desensitisasi.',
          xpEarned: 0,
          decisionReason: 'Tidak memahami trauma anak',
          nextScenarioId: 'tsunami-8'
        },
        {
          text: 'Biarkan psikolog yang menangani, kamu tidak berpengalaman',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Rara menunggu giliran psikolog, trauma tidak terkelola sementara',
          feedback: 'SETENGAH BENAR. Psikolog memang profesional, tapi dukungan keluarga 24/7 tidak bisa digantikan. Kamu sebagai kakak bisa dampingi dengan cara sederhana—kehadiran saja sudah membantu.',
          xpEarned: 25,
          decisionReason: 'Tidak memanfaatkan peran keluarga dalam pemulihan',
          nextScenarioId: 'tsunami-8'
        }
      ],
      previousScenarioId: 'tsunami-5',
      defaultNextScenarioId: 'tsunami-8'
    }),

    // SCENARIO 8: Community Preparedness
    createScenario({
      id: 'tsunami-8',
      disasterType: 'tsunami',
      order: 7,
      narrative: `6 bulan setelah tsunami, Pangandaran menjadi model "Desa Tangguh Tsunami" yang diakui UNESCO-IOC.

Kepala desa mengundangmu menjadi bagian dari tim penyusunan program kesiapsiagaan tsunami untuk warga dan wisatawan. Kamu akan mempresentasikan pengalamanmu sebagai survivor.

Dalam presentasi, kamu akan fokus pada satu topik utama yang menurutmu paling penting untuk disampaikan kepada warga pesisir yang belum pernah mengalami tsunami.

Waktu: 6 bulan pasca-tsunami.`,
      illustration: 'https://images.pexels.com/photos/29581807/pexels-photo-29581807.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Penyusunan program kesiapsiagaan, opportunity edukasi',
      timeContext: 'Fase pembelajaran dan perbaikan sistem',
      dangerLevel: 'low',
      emotionalTone: 'neutral',
      keyLearningPoints: [
        'Berbagi pengalaman adalah bentuk edukasi paling kuat',
        'Kesiapsiagaan komunitas menyelamatkan nyawa',
        'Setiap orang bisa menjadi agen perubahan',
        'Pendidikan mitigasi adalah investasi jangka panjang'
      ],
      choices: [
        {
          text: 'Presentasikan pentingnya mengenali tanda alami tsunami dan evakuasi mandiri tanpa menunggu warning resmi',
          isCorrect: true,
          choiceCategory: 'gather-information',
          consequence: 'Presentasimu berdampak, 90% warga memahami tanda alami dan protokol evakuasi mandiri',
          feedback: 'PEMBELAJARAN DENGAN IMPAK! Tanda alami adalah warning pertama yang bisa menyelamatkan banyak nyawa. Dengan berbagi pengalaman, kamu meningkatkan kesiapsiagaan seluruh komunitas pesisir.',
          xpEarned: 70,
          decisionReason: 'Berbagi pengalaman untuk edukasi dengan fokus yang tepat'
        },
        {
          text: 'Ceritakan pengalaman secara dramatis untuk membuat warga takut dan patuh',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'gather-information',
          consequence: 'Warga takut tapi tidak paham protokol praktis',
          feedback: 'KETAKUTAN TIDAK CUKUP. Edukasi mitigasi butuh skill praktis, bukan hanya menakuti. Pastikan selalu ada takeaway actionable—apa yang harus dilakukan, bukan hanya apa yang bisa terjadi.',
          xpEarned: 30,
          decisionReason: 'Kurang fokus pada edukasi praktis'
        },
        {
          text: 'Serahkan pada pemerintah dan BMKG, warga biasa tidak berkompeten',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kehilangan kesempatan berkontribusi perspektif survivor',
          feedback: 'SUARA SURVIVOR PENTING! Perspektif orang yang mengalami langsung sangat berbeda dengan teori. Kamu adalah living testimony—pengalamanmu tidak bisa digantikan oleh data BMKG saja.',
          xpEarned: 0,
          decisionReason: 'Tidak memanfaatkan kesempatan edukasi'
        }
      ],
      previousScenarioId: 'tsunami-7'
    })
  ];

  return scenarios;
}

// ============================================
// FLOOD SCENARIOS - COMPREHENSIVE BRANCHING
// ============================================

function generateBaseFloodScenarios(): Scenario[] {
  const scenarios: Scenario[] = [
    // SCENARIO 1: Initial Flood Entry
    createScenario({
      id: 'flood-1',
      disasterType: 'flood',
      order: 1,
      narrative: `Musim hujan puncak di Jakarta Timur. Hujan deras sudah 3 hari non-stop. Kali Ciliwung di dekat rumahmu sudah hampir meluap.

Rumahmu 2 lantai, di RT 05/RW 03 yang terkenal rawan banjir. Di lantai 1 ada ruang tamu, kamar Kakek (75 tahun, stroke, kursi roda), dan dapur. Lantai 2 ada 3 kamar tidur dan ruang keluarga.

Pukul 06:00, air mulai masuk dari pintu depan. Setinggi 10 cm dan naik cepat. Listrik masih menyala.

Ayahmu tidak di rumah (kerja shift malam di pabrik). Ibu panik di dapur. Kakek di kursi rodanya di ruang tamu.

Dengar berita radio: "Warga Kali Ciliwung diimbau siap evakuasi. Air diprediksi mencapai 1.5 meter..."

Waktu: Air naik 5 cm setiap 10 menit.`,
      illustration: 'https://images.pexels.com/photos/1114761/pexels-photo-1114761.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Banjir masuk rumah, keluarga dengan lansia stroke',
      timeContext: 'Fase awal banjir, window keputusan terbatas',
      dangerLevel: 'high',
      emotionalTone: 'urgent',
      keyLearningPoints: [
        'Matikan listrik dari MCB SEBELUM bergerak di air',
        'Prioritaskan lansia dan anak-anak',
        'Amankan barang penting ke lantai atas',
        'Jangan merendah di air banjir tanpa sepatu boot'
      ],
      choices: [
        {
          text: 'Matikan MCB listrik dulu, lalu angkat Kakek ke lantai 2 dengan bantuan Ibu',
          isCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Kakek selamat tanpa risiko sengatan listrik',
          feedback: 'PROTOKOL TEPAT! Listrik + Air = Kematian. Matikan MCB dari panel (biasanya di dekat pintu) adalah langkah pertama sebelum bergerak di air banjir.',
          xpEarned: 70,
          decisionReason: 'Urutan benar: listrik dulu, baru gerak',
          nextScenarioId: 'flood-3'
        },
        {
          text: 'Langsung angkat Kakek ke lantai 2 karena waktu terbatas',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kamu tersengat listrik saat mengangkat Kakek karena kabel listrik basah',
          feedback: 'RISIKO LISTRIK! Dalam banjir Jakarta 2020, 15% korban jiwa adalah karena sengatan listrik, bukan tenggelam. SELALU matikan listrik dulu.',
          xpEarned: 0,
          decisionReason: 'Melanggar protokol keselamatan listrik',
          nextScenarioId: 'flood-2'
        },
        {
          text: 'Amankan TV dan kulkas dulu karena barang berharga',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Barang aman tapi Kakek terlambat diungsikan, risiko tenggelam',
          feedback: 'PRIORITAS SALAH! Nyawa manusia > barang. Korban banjir yang mencoba "ngumpulin" barang sering tertinggal saat air naik. Jiwa tidak bisa diganti.',
          xpEarned: 0,
          decisionReason: 'Memprioritaskan benda berharga di atas nyawa',
          nextScenarioId: 'flood-2'
        }
      ],
      defaultNextScenarioId: 'flood-3'
    }),

    // SCENARIO 2: Suboptimal Path - Rising Water
    createScenario({
      id: 'flood-2',
      disasterType: 'flood',
      order: 2,
      narrative: `Air naik lebih cepat dari prediksi. Sudah 80 cm di lantai 1. Kamu berhasil naik ke lantai 2, tapi lenganmu tersengat listrik ringan—kesemutan dan nyeri.

Kakek berhasil diangkat, tapi prosesnya terlambat. Air sudah setinggi kursi rodanya. Kakek basah dan kedinginan.

Ibu panik. "Air terus naik! Lantai 2 aman nggak ya? Tetangga sebelah punya perahu, tapi mereka sudah pindah!"

Dari jendela lantai 2, kamu melihat air sudah setinggi 1 meter di luar. Beberapa tetangga di atap rumah. Satu keluarga di perahu karet berusaha mendayung ke titik aman.

HP masih ada sinyal. Kamu bisa telepon ayah atau 119 (nomor darurat BPBD).

Waktu: Air naik 10 cm setiap 10 menit.`,
      illustration: 'https://images.pexels.com/photos/28447808/free-photo-of-flooded-neighborhood-street-with-submerged-houses.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Lantai 2, air 80 cm di bawah, lansia kedinginan, sinyal HP ada',
      timeContext: 'Fase banjir meningkat, keputusan evakuasi atau bertahan',
      dangerLevel: 'high',
      emotionalTone: 'urgent',
      keyLearningPoints: [
        'Bertahan di lantai atas jika struktur kokoh',
        'Telepon 119 untuk koordinasi evakuasi',
        'Jangan berenang di air banjir (arus dan kontaminan)',
        'Hangatkan lansia untuk cegah hypothermia'
      ],
      choices: [
        {
          text: 'Telepon 119, berikan alamat dan kondisi, siapkan Kakek dengan selimut hangat, tunggu evakuasi',
          isCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Tim BPBD datang dengan perahu 30 menit kemudian, semua dievakuasi dengan aman',
          feedback: 'PROTOKOL TEPAT! Bertahan di lantai atas bangunan kokoh sambil menunggu evakuasi resmi adalah paling aman. 119 adalah nomor darurat BPBD. Jangan berenang—arus dan kontaminan berbahaya.',
          xpEarned: 60,
          decisionReason: 'Koordinasi evakuasi resmi dan perawatan lansia',
          nextScenarioId: 'flood-4'
        },
        {
          text: 'Berusaha berenang keluar untuk mencari perahu tetangga',
          isCorrect: false,
          choiceCategory: 'evacuate',
          consequence: 'Kamu terseret arus kuat, hampir tenggelam, akhirnya kembali ke rumah dengan susah payah',
          feedback: 'SANGAT BERBAHAYA! Air banjir punya arus kuat yang tidak terlihat dari permukaan. Dalam banjir Jakarta 2020, banyak korban adalah yang mencoba berenang. Kontaminan kimiawi dan biologis juga berbahaya.',
          xpEarned: 0,
          decisionReason: 'Berisiko di arus banjir',
          nextScenarioId: 'flood-4'
        },
        {
          text: 'Turun ke lantai 1 untuk mengambil makanan dan air minum',
          isCorrect: false,
          choiceCategory: 'gather-information',
          consequence: 'Air sudah 1 meter, kamu hampir terjebak, Kakek sendirian di lantai 2',
          feedback: 'BERBAHAYA! Turun ke air banjir untuk mengambil barang adalah risiko tidak perlu. Makanan dan air bisa menunggu—keselamatan lebih penting. Tim evakuasi akan bawa suplai.',
          xpEarned: 0,
          decisionReason: 'Mempertaruhkan diri untuk barang',
          nextScenarioId: 'flood-4'
        }
      ],
      previousScenarioId: 'flood-1',
      defaultNextScenarioId: 'flood-4'
    }),

    // SCENARIO 3: Optimal Path - Securing the Home
    createScenario({
      id: 'flood-3',
      disasterType: 'flood',
      order: 2,
      narrative: `Kakek sudah aman di lantai 2. Listrik sudah dimatikan. Air di lantai 1 setinggi 50 cm dan masih naik, tapi lebih lambat.

Ibu mulai tenang. "Kita aman di lantai 2 ya? Tapi air minum cuma sisa 2 botol. Makanan di kulkas basah semua."

Di lantai 2, kamu punya: air minum 2 botol, biskuit, senter, radio baterai, HP dengan sisa baterai 40%.

Dari jendela, kamu melihat tetangga di atap rumah. Satu keluarga tampak panik—mungkin baru pertama kali mengalami banjir.

Radio berita: "Banjir Ciliwung diprediksi puncaknya siang ini, 1.5-2 meter. Warga diimbau tetap di lantai atas. Posko evakuasi di balai RW."

Waktu: 1 jam setelah air masuk.`,
      illustration: 'https://images.pexels.com/photos/35251425/free-photo-of-urban-flooding-scene-in-a-european-city-street.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Lantai 2 aman, suplai terbatas, tetangga panik',
      timeContext: 'Fase stabilisasi, manajemen sumber daya',
      dangerLevel: 'medium',
      emotionalTone: 'tense',
      keyLearningPoints: [
        'Manajemen suplai air dan makanan penting',
        'Bantu tetangga yang belum berpengalaman',
        'Komunikasi via radio baterai jika HP mati',
        'Tetap tenang untuk mengurangi kepanikan'
      ],
      choices: [
        {
          text: 'Bagi suplai secukupnya, teriak ke tetangga untuk tenang dan tetap di atap, dengarkan radio untuk update',
          isCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Suplai cukup, tetangga tenang, informasi resmi diterima',
          feedback: 'MANAJEMEN BAIK! Membagi suplai dan menenangkan tetangga adalah bentuk gotong royong. Radio baterai adalah sumber info andal saat listrik padam. Tetap tenang mengurangi kepanikan kolektif.',
          xpEarned: 60,
          decisionReason: 'Manajemen sumber daya dan dukungan komunitas',
          nextScenarioId: 'flood-5'
        },
        {
          text: 'Habiskan suplai sekarang karena khawatir kehabisan nanti',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Suplai habis dalam 3 jam, keluarga kelaparan saat menunggu evakuasi',
          feedback: 'MANAJEMEN BURUK! Dalam bencana, suplai harus dijatah. Banjir bisa berlangsung berhari-hari. Hemat air dan makanan—minum secukupnya, jangan boros.',
          xpEarned: 0,
          decisionReason: 'Tidak mengelola sumber daya darurat',
          nextScenarioId: 'flood-5'
        },
        {
          text: 'Abai tetangga, fokus pada keluargamu sendiri',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Tetangga panik dan berteriak-teriak, suasana makin tegang',
          feedback: 'SETENGAH BENAR. Keluarga memang prioritas, tapi mengabaikan tetangga yang panik bisa memperburuk situasi. Teriakan ke tetangga untuk tenang tidak butuh apa-apa dan membantu semua.',
          xpEarned: 20,
          decisionReason: 'Tidak berkontribusi pada ketenangan komunitas',
          nextScenarioId: 'flood-5'
        }
      ],
      previousScenarioId: 'flood-1',
      defaultNextScenarioId: 'flood-5'
    }),

    // SCENARIO 4: Evacuation Decision
    createScenario({
      id: 'flood-4',
      disasterType: 'flood',
      order: 3,
      narrative: `Tim BPBD tiba dengan perahu karet. "Evakuasi dimulai! Satu per satu, prioritas lansia dan anak-anak!"

Air sudah setinggi 1.5 meter di lantai 1. Lantai 2 masih aman, tapi struktur rumah mulai berderit.

Kakek harus diangkat ke perahu. Ibu membawa tas berisi dokumen penting. Kamu harus memilih: ikut sekarang atau tunggu gelombang kedua evakuasi.

Tetangga sebelah, Pak Joko, menolak evakuasi. "Rumah saya aman, saya tetap jaga barang!" Istrinya dan anak-anak sudah di perahu.

Petugas BPBD: "Air bisa naik lagi malam ini. Kami sarankan semua evakuasi sekarang."

Waktu: Window evakuasi terbatas.`,
      illustration: 'https://images.pexels.com/photos/35317578/pexels-photo-35317578.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Evakuasi BPBD, lansia prioritas, tetangga menolak',
      timeContext: 'Fase evakuasi terkoordinasi, window terbatas',
      dangerLevel: 'high',
      emotionalTone: 'urgent',
      keyLearningPoints: [
        'Ikuti evakuasi resmi dari BPBD',
        'Prioritaskan lansia dan anak-anak',
        'Bawa dokumen penting, bukan barang berharga',
        'Jangan menolak evakuasi karena "jaga barang"'
      ],
      choices: [
        {
          text: 'Ikut evakuasi sekarang bersama Kakek dan Ibu, bawa dokumen penting saja',
          isCorrect: true,
          choiceCategory: 'evacuate',
          consequence: 'Keluarga dievakuasi dengan aman ke posko, semua kebutuhan terpenuhi',
          feedback: 'KEPUTUSAN TEPAT! Evakuasi resmi BPBD adalah paling aman. Membawa dokumen penting (KTP, akta, ijazah) lebih penting daripada barang berharga. Barang bisa diganti, nyawa tidak.',
          xpEarned: 60,
          decisionReason: 'Mengikuti evakuasi resmi dengan prioritas tepat',
          nextScenarioId: 'flood-6'
        },
        {
          text: 'Tetap di rumah untuk menjaga barang seperti Pak Joko',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Air naik lagi malam itu, kamu terjebak di lantai 2 tanpa suplai',
          feedback: 'BERBAHAYA! Menolak evakuasi untuk "jaga barang" adalah kesalahan fatal. Dalam banjir Jakarta 2007 dan 2020, banyak korban adalah yang menolak evakuasi. Barang bisa diganti, nyawa tidak.',
          xpEarned: 0,
          decisionReason: 'Menolak evakuasi resmi',
          nextScenarioId: 'flood-6'
        },
        {
          text: 'Kembali ke lantai 1 untuk mengambil lebih banyak barang',
          isCorrect: false,
          choiceCategory: 'gather-information',
          consequence: 'Air 1.5 meter, kamu hampir tenggelam, perahu hampir pergi tanpamu',
          feedback: 'SANGAT BERBAHAYA! Kembali ke air banjir untuk mengambil barang adalah risiko tidak perlu. Perahu evakuasi tidak akan menunggu lama. Prioritaskan keselamatan.',
          xpEarned: 0,
          decisionReason: 'Mempertaruhkan nyawa untuk barang',
          nextScenarioId: 'flood-6'
        }
      ],
      previousScenarioId: 'flood-2',
      defaultNextScenarioId: 'flood-6'
    }),

    // SCENARIO 5: Shelter Management
    createScenario({
      id: 'flood-5',
      disasterType: 'flood',
      order: 4,
      narrative: `Kamu dan keluarga tiba di posko evakuasi di balai RW. Sekitar 300 orang sudah berkumpul.

Suplai mulai menipis. Air minum cukup untuk 1 hari. Makanan terbatas. Beberapa warga mulai cemas.

Di posko, ada lansia, ibu hamil, dan anak-anak. Kakekmu mendapat tempat duduk prioritas, tapi masih kedinginan.

Seorang relawan BPBD meminta bantuan: "Kami butuh relawan untuk distribusi suplai dan registrasi. Siapa yang bisa bantu?"

Di sudut posko, seorang ibu muda menangis—dia terpisah dari suaminya yang masih di rumah. Beberapa warga mulai menyebarkan rumor: "Dengar bendungan Cipinang jebol!"

Waktu: 4 jam di posko.`,
      illustration: 'https://images.pexels.com/photos/15808831/pexels-photo-15808831.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Posko 300 orang, suplai menipis, rumor menyebar',
      timeContext: 'Fase pemenuhan kebutuhan dasar, koordinasi relawan',
      dangerLevel: 'medium',
      emotionalTone: 'tense',
      keyLearningPoints: [
        'Distribusi tertib prioritaskan yang rentan',
        'Verifikasi informasi dari sumber resmi',
        'Dukungan emosional di posko penting',
        'Jangan sebarkan rumor tanpa bukti'
      ],
      choices: [
        {
          text: 'Bantu distribusi suplai dengan prioritas lansia/ibu hamil/anak, dampingi ibu muda, klarifikasi rumor',
          isCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Distribusi tertib, ibu muda tenang, rumor teredam',
          feedback: 'KONTRIBUSI SANGAT BAIK! Distribusi tertib mencegah chaos. Klarifikasi rumor penting—dalam bencana, disinformasi bisa menyebabkan kepanikan berbah. BNPB melarang penyebaran hoaks.',
          xpEarned: 60,
          decisionReason: 'Mengorganisir distribusi dan melawan disinformasi',
          nextScenarioId: 'flood-7'
        },
        {
          text: 'Ambil suplai untuk keluargamu dulu, biarkan yang lain antre',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kamu mendapat suplai tapi mendorong orang lain, seorang lansia terjatuh',
          feedback: 'PRIORITAS SALAH! Gotong royong adalah kunci di bencana. Memprioritaskan diri sendiri menciptakan chaos dan bisa melukai yang lemah. Antre dan bantu yang membutuhkan.',
          xpEarned: 0,
          decisionReason: 'Egois dalam situasi darurat',
          nextScenarioId: 'flood-7'
        },
        {
          text: 'Sebarkan info bendangan jebol agar orang waspada',
          isCorrect: false,
          choiceCategory: 'gather-information',
          consequence: 'Kepanikan terjadi, beberapa orang terluka karena berlarian',
          feedback: 'MENYEBARKAN HOAKS! Rumor tanpa verifikasi adalah pelanggaran UU ITE dan UU Kebencanaan. Selalu verifikasi ke BPBD atau BMKG sebelum menyebarkan info. Kepanikan bisa lebih berbahaya dari bencana itu sendiri.',
          xpEarned: 0,
          decisionReason: 'Menyebarkan disinformasi di situasi darurat',
          nextScenarioId: 'flood-7'
        }
      ],
      previousScenarioId: 'flood-3',
      defaultNextScenarioId: 'flood-7'
    }),

    // SCENARIO 6: Health and Sanitation
    createScenario({
      id: 'flood-6',
      disasterType: 'flood',
      order: 5,
      narrative: `2 hari di posko. Air di rumah mulai surut, tapi belum aman untuk kembali.

Masalah kesehatan mulai muncul. Beberapa warga mengeluh gatal-gatal di kulit setelah kontak dengan air banjir. Satu anak demam. Kakekmu mulai batuk.

Petugas kesehatan datang untuk pemeriksaan. Mereka memperingatkan: "Air banjir terkontaminasi bakteri E. coli, leptospirosis, dan kimiawi. Warga yang kontak dengan air banjir harus cuci bersih dan pantau gejala."

Posko mulai kotor. Sampah menumpuk. Toilet terbatas dan kebersihan buruk.

Waktu: 2 hari pasca-banjir.`,
      illustration: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Posko, masalah kesehatan dan sanitasi mulai muncul',
      timeContext: 'Fase kesehatan masyarakat, pencegahan wabah',
      dangerLevel: 'medium',
      emotionalTone: 'tense',
      keyLearningPoints: [
        'Air banjir terkontaminasi—cuci bersih setelah kontak',
        'Leptospirosis dan diare adalah risiko pasca-banjir',
        'Sanitasi posko penting untuk cegah wabah',
        'Pantau gejala dan konsultasi petugas kesehatan'
      ],
      choices: [
        {
          text: 'Bantu petugas kesehatan sosialisasi kebersihan, jaga sanitasi posko, pantau gejala Kakek',
          isCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Warga sadar risiko, sanitasi membaik, Kakek mendapat perawatan tepat',
          feedback: 'KONTRIBUSI PENTING! Pencegahan wabah di posko adalah kunci. Leptospirosis dan diare adalah penyebab utama kematian pasca-banjir di Indonesia. Dengan menjaga sanitasi, kamu cegah wabah yang bisa lebih fatal dari banjir itu sendiri.',
          xpEarned: 60,
          decisionReason: 'Pencegahan kesehatan masyarakat yang tepat',
          nextScenarioId: 'flood-7'
        },
        {
          text: 'Abai kebersihan, yang penting Kakek saya sehat',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kakek batuk memburuk, warga lain mulai diare, posko kotor',
          feedback: 'BERBAHAYA! Sanitasi posko adalah tanggung jawab bersama. Abai kebersihan bisa menyebabkan wabah diare dan leptospirosis yang menyebar ke semua, termasuk Kakekmu.',
          xpEarned: 0,
          decisionReason: 'Tidak berkontribusi pada kesehatan komunitas',
          nextScenarioId: 'flood-7'
        },
        {
          text: 'Kembali ke rumah untuk cek kondisi, abaikan peringatan petugas',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kamu terkena kontaminasi air banjir, kulit gatal dan demam',
          feedback: 'BERBAHAYA! Kembali ke rumah sebelum dinyatakan aman adalah risiko. Air banjir terkontaminasi bakteri dan kimiawi. Tunggu peringatan resmi dari BPBD sebelum kembali.',
          xpEarned: 0,
          decisionReason: 'Mengabaikan peringatan kesehatan',
          nextScenarioId: 'flood-7'
        }
      ],
      previousScenarioId: 'flood-4',
      defaultNextScenarioId: 'flood-7'
    }),

    // SCENARIO 7: Return and Recovery
    createScenario({
      id: 'flood-7',
      disasterType: 'flood',
      order: 6,
      narrative: `4 hari kemudian, BPBD mengumumkan: "Air sudah surut. Warga diizinkan kembali ke rumah dengan hati-hati. Pastikan struktur aman dan listrik diperiksa oleh PLN sebelum dinyalakan."

Kamu dan keluarga kembali ke rumah. Lantai 1 penuh lumpur setinggi 20 cm. Bau busuk menyengat. Furniture rusak. Dinding basah dan berjamur.

Kakek masih di posko dengan Ibu—mereka akan tinggal sementara di rumah saudara sampai rumah layak huni.

Ayah pulang dari pabrik, langsung membantu bersih-bersih. Tetangga juga mulai membersihkan rumah masing-masing.

Pak Joko (yang menolak evakuasi) tampak lelah dan batuk. "Saya harusnya ikut evakuasi... rumah saya berantakan dan saya kedinginan 2 hari di atap."

Waktu: 4 hari pasca-banjir.`,
      illustration: 'https://images.pexels.com/photos/28447790/pexels-photo-28447790.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Kembali ke rumah, pembersihan dimulai, tetangga butuh bantuan',
      timeContext: 'Fase pemulihan, pembersihan dan perbaikan',
      dangerLevel: 'low',
      emotionalTone: 'neutral',
      keyLearningPoints: [
        'Periksa struktur dan listrik sebelum kembali',
        'Pembersihan lumpur butuh APD (sepatu boot, sarung tangan)',
        'Gotong royong mempercepat pemulihan',
        'Disinfeksi untuk cegah wabah pasca-banjir'
      ],
      choices: [
        {
          text: 'Pakai sepatu boot dan sarung tangan, bersihkan lumpur, bantu Pak Joko, disinfeksi setelah bersih',
          isCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Rumah bersih dan disinfeksi, Pak Joko terbantu, risiko wabah berkurang',
          feedback: 'PEMULIHAN TEPAT! APD penting karena lumpur banjir terkontaminasi. Disinfeksi cegah leptospirosis dan diare. Gotong royong dengan tetangga mempercepat pemulihan—ini nilai budaya Indonesia.',
          xpEarned: 60,
          decisionReason: 'Pembersihan aman dan gotong royong',
          nextScenarioId: 'flood-8'
        },
        {
          text: 'Bersihkan tanpa APD karena ingin cepat selesai',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kamu terkena iritasi kulit dan gatal-gatal dari lumpur terkontaminasi',
          feedback: 'BERBAHAYA! Lumpur banjir mengandung bakteri E. coli, leptospirosis, dan kimiawi. Selalu pakai sepatu boot dan sarung tangan. Kesehatan lebih penting dari kecepatan.',
          xpEarned: 0,
          decisionReason: 'Tidak menggunakan APD',
          nextScenarioId: 'flood-8'
        },
        {
          text: 'Fokus pada rumah sendiri, abaikan Pak Joko',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Rumahmu bersih, tapi Pak Joko lambat dan sakit',
          feedback: 'SETENGAH BENAR. Rumah sendiri memang prioritas, tapi gotong royong adalah nilai budaya Indonesia. Membantu tetangga yang kesulitan mempercepat pemulihan seluruh RT.',
          xpEarned: 25,
          decisionReason: 'Tidak berkontribusi pada gotong royong',
          nextScenarioId: 'flood-8'
        }
      ],
      previousScenarioId: 'flood-5',
      defaultNextScenarioId: 'flood-8'
    }),

    // SCENARIO 8: Community Preparedness
    createScenario({
      id: 'flood-8',
      disasterType: 'flood',
      order: 7,
      narrative: `3 bulan setelah banjir, RT 05/RW 03 menjadi model "RT Siaga Banjir" yang diakui BPBD Jakarta.

Ketua RT mengundangmu menjadi bagian dari tim penyusunan program kesiapsiagaan banjir untuk warga. Kamu akan mempresentasikan pengalamanmu sebagai survivor.

Dalam presentasi, kamu akan fokus pada satu topik utama yang menurutmu paling penting untuk disampaikan kepada warga rawan banjir yang belum pernah mengalami banjir parah.

Waktu: 3 bulan pasca-banjir.`,
      illustration: 'https://images.pexels.com/photos/29581807/pexels-photo-29581807.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Penyusunan program kesiapsiagaan, opportunity edukasi',
      timeContext: 'Fase pembelajaran dan perbaikan sistem',
      dangerLevel: 'low',
      emotionalTone: 'neutral',
      keyLearningPoints: [
        'Berbagi pengalaman adalah bentuk edukasi paling kuat',
        'Kesiapsiagaan komunitas menyelamatkan nyawa',
        'Setiap orang bisa menjadi agen perubahan',
        'Pendidikan mitigasi adalah investasi jangka panjang'
      ],
      choices: [
        {
          text: 'Presentasikan protokol matikan listrik dulu, evakuasi lansia, dan jangan berenang di air banjir',
          isCorrect: true,
          choiceCategory: 'gather-information',
          consequence: 'Presentasimu berdampak, 85% warga memahami protokol dasar banjir',
          feedback: 'PEMBELAJARAN DENGAN IMPAK! Protokol praktis yang kamu bagikan bisa menyelamatkan nyawa. Dengan berbagi pengalaman, kamu meningkatkan kesiapsiagaan seluruh RT.',
          xpEarned: 70,
          decisionReason: 'Berbagi pengalaman untuk edukasi dengan fokus yang tepat'
        },
        {
          text: 'Ceritakan pengalaman secara dramatis untuk membuat warga takut',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'gather-information',
          consequence: 'Warga takut tapi tidak paham protokol praktis',
          feedback: 'KETAKUTAN TIDAK CUKUP. Edukasi mitigasi butuh skill praktis, bukan hanya menakuti. Pastikan selalu ada takeaway actionable—apa yang harus dilakukan, bukan hanya apa yang bisa terjadi.',
          xpEarned: 30,
          decisionReason: 'Kurang fokus pada edukasi praktis'
        },
        {
          text: 'Serahkan pada pemerintah dan BPBD, warga biasa tidak berkompeten',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kehilangan kesempatan berkontribusi perspektif survivor',
          feedback: 'SUARA SURVIVOR PENTING! Perspektif orang yang mengalami langsung sangat berbeda dengan teori. Kamu adalah living testimony—pengalamanmu tidak bisa digantikan oleh data BPBD saja.',
          xpEarned: 0,
          decisionReason: 'Tidak memanfaatkan kesempatan edukasi'
        }
      ],
      previousScenarioId: 'flood-7'
    })
  ];

  return scenarios;
}

// ============================================
// FIRE SCENARIOS - COMPREHENSIVE BRANCHING
// ============================================

function generateBaseFireScenarios(): Scenario[] {
  const scenarios: Scenario[] = [
    // SCENARIO 1: Kitchen Oil Fire
    createScenario({
      id: 'fire-1',
      disasterType: 'fire',
      order: 1,
      narrative: `Malam Minggu, pukul 21:15. Kamu sedang belajar di kamarmu ketika mencium bau plastik terbakar yang tajam.

Ayah sedang mandi. Ibu di pasar malam. Hanya ada kamu dan Adik (7 tahun) yang sudah tidur.

Kamu ke dapur: Kompor gas menyala. Wajan dengan minyak goreng terbakar. Api menjilat kabinet kayu di atas kompor. Lidah api sudah setinggi 50 cm.

Tidak ada APAR di rumah. Ada penutup wajan di rak dekat kompor, handuk bersih di gantungan, dan ember air di sudut.

Jendela dapur tertutup. Pintu belakang dekat dapur bisa dibuka.

Ukuran wajan: Diameter 30 cm. Jumlah minyak: Sekitar 500ml.

Waktu: Api menyebar cepat. Detik-detik ini kritis.`,
      illustration: 'https://images.pexels.com/photos/17749316/free-photo-of-flames-on-frying-pan.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Kebakaran dapur, minyak goreng terbakar, hanya 2 orang di rumah',
      timeContext: 'Fase awal kebakaran, window untuk pemadaman mandiri',
      dangerLevel: 'critical',
      emotionalTone: 'urgent',
      keyLearningPoints: [
        'API MINYAK TIDAK BOLEH DIPADAMKAN DENGAN AIR',
        'Metode asfiksia: Tutup wajan atau gunakan bahan padat (baking soda)',
        'Matikan gas dari sumber (knob kompor atau tabung)',
        'Evakuasi jika api terlalu besar untuk dipadamkan'
      ],
      choices: [
        {
          text: 'Matikan kompor dari knob, ambil penutup wajan, dan tutup wajan rapat untuk memutus oksigen',
          isCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Api padam dengan cepat, kebakaran berhasil ditangani',
          feedback: 'PROTOKOL SEMPURNA! Minyak terbakar adalah kebakaran kelas B. Air akan membuat ledakan uap dan menyebarkan api. Asfiksia (memutus oksigen) adalah satu-satunya metode aman.',
          xpEarned: 80,
          decisionReason: 'Metode asfiksia untuk kebakaran minyak',
          nextScenarioId: 'fire-3'
        },
        {
          text: 'Ambil ember air dan siramkan ke wajan untuk memadamkan api',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Air menguap secara eksplosif, api meledak dan menyebar ke seluruh dapur',
          feedback: 'KESALAHAN FATAL! Air + minyak terbakar = LEDAKAN AIR-MINYAK. Air (100°C) langsung menguap saat kontak dengan minyak (200-300°C). Uap mengembang 1700x dan membawa titik api ke segala arah.',
          xpEarned: 0,
          decisionReason: 'Melanggar aturan fundamental kebakaran minyak',
          nextScenarioId: 'fire-2'
        },
        {
          text: 'Keluar rumah dengan Adik, telepon pemadam kebakaran, biarkan api padam sendiri',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'evacuate',
          consequence: 'Keluarga aman tapi rumah terbakar total',
          feedback: 'KESELAMATAN BENAR, TAPI... Jika masih dalam tahap awal dan bisa dipadamkan, lakukan. Evakuasi adalah opsi jika api sudah besar. 500ml minyak bisa dipadamkan dengan tutup wajan.',
          xpEarned: 40,
          decisionReason: 'Safe choice tapi tidak optimal untuk skala kebakaran kecil',
          commonMistake: 'Terlalu cepat menyerah padahal pemadaman masih memungkinkan',
          nextScenarioId: 'fire-2'
        }
      ],
      defaultNextScenarioId: 'fire-3'
    }),

    // SCENARIO 2: Suboptimal Path - Fire Spreading
    createScenario({
      id: 'fire-2',
      disasterType: 'fire',
      order: 2,
      narrative: `Api menyebar ke kabinet kayu dan dinding dapur. Asap tebal mulai memenuhi ruangan. Kamu berhasil keluar dengan Adik, tapi rumah terbakar.

Dari luar, kamu melihat api menjilat jendela dapur. Tetangga mulai keluar rumah. Seseorang sudah telepon 113 (pemadam kebakaran).

Adik menangis ketakutan. Ayah keluar dari kamar mandi, syok melihat rumah terbakar. "Bagaimana bisa terjadi?!"

Tetangga sebelah, Pak Budi, datang dengan APAR kecil (2kg). "Saya punya APAR! Tapi ini kecil, cuma untuk api kecil!"

Api sudah terlalu besar untuk APAR 2kg. Asap hitam tebal keluar dari jendela dan atap.

Waktu: 5 menit sejak api menyebar.`,
      illustration: 'https://images.pexels.com/photos/919070/pexels-photo-919070.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Api menyebar, APAR kecil tidak cukup, pemadam dalam perjalanan',
      timeContext: 'Fase kebakaran berkembang, evakuasi dan tunggu pemadam',
      dangerLevel: 'critical',
      emotionalTone: 'desperate',
      keyLearningPoints: [
        'Jangan kembali ke rumah yang terbakar',
        'APAR kecil hanya untuk api kecil (tahap awal)',
        'Jauhi asap hitam—beracun dan bisa menyesakkan napas',
        'Tunggu pemadam kebakaran profesional'
      ],
      choices: [
        {
          text: 'Tetap di luar dengan Adik dan Ayah, jauh dari rumah, tunggu pemadam kebakaran',
          isCorrect: true,
          choiceCategory: 'evacuate',
          consequence: 'Keluarga aman di luar, pemadam tiba dan memadamkan api',
          feedback: 'KEPUTUSAN TEPAT! Api sudah terlalu besar untuk dipadamkan mandiri. APAR 2kg hanya untuk api tahap awal. Tetap di luar dan tunggu profesional—nyawa lebih penting dari harta.',
          xpEarned: 50,
          decisionReason: 'Keselamatan di atas harta',
          nextScenarioId: 'fire-4'
        },
        {
          text: 'Kembali ke rumah dengan APAR Pak Budi untuk memadamkan',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'APAR habis dalam 10 detik, kamu terjebak di asap tebal',
          feedback: 'SANGAT BERBAHAYA! APAR 2kg hanya efektif 10-15 detik untuk api kecil. Api sudah terlalu besar. Kembali ke rumah terbakar adalah risiko fatal—asap bisa membuat pingsan dalam hitungan detik.',
          xpEarned: 0,
          decisionReason: 'Kembali ke zona bahaya dengan alat tidak memadai',
          nextScenarioId: 'fire-4'
        },
        {
          text: 'Coba padamkan dengan selang air taman tetangga',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Tekanan air lemah, api terlalu besar, kamu menghirup asap beracun',
          feedback: 'BERBAHAYA! Selang air taman tidak punya tekanan untuk memadamkan kebakaran struktur. Asap hitam dari kayu dan plastik mengandung karbon monoksida dan sianida—bisa fatal dalam menitan.',
          xpEarned: 0,
          decisionReason: 'Alat tidak memadai dan risiko asap',
          nextScenarioId: 'fire-4'
        }
      ],
      previousScenarioId: 'fire-1',
      defaultNextScenarioId: 'fire-4'
    }),

    // SCENARIO 3: Optimal Path - Post-Extinguishing
    createScenario({
      id: 'fire-3',
      disasterType: 'fire',
      order: 2,
      narrative: `Api berhasil dipadamkan dengan penutup wajan. Tapi kabinet kayu di atas kompor sudah hangus, dan asap memenuhi dapur.

Kamu segera buka jendela dapur dan pintu belakang untuk ventilasi. Asap mulai keluar.

Adik terbangun karena bau asap, menangis ketakutan. Ayah keluar dari kamar mandi, syok melihat dapur berantakan.

"Ada yang terluka?" tanya Ayah. Kamu baik-baik saja, tapi tanganmu sedikit melepuh dari panas wajan.

Kabinet kayu masih mengeluarkan asap tipis—ada hot spot yang bisa menyala kembali. Tabung gas masih terhubung, meski kompor sudah dimatikan dari knob.

Waktu: 2 menit pasca-pemadaman.`,
      illustration: 'https://images.pexels.com/photos/5965211/pexels-photo-5965211.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Api padam tapi hot spot dan asap masih ada, gas masih terhubung',
      timeContext: 'Fase pasca-pemadaman, pencegahan re-ignition',
      dangerLevel: 'high',
      emotionalTone: 'tense',
      keyLearningPoints: [
        'Matikan gas dari tabung (sumber utama), bukan hanya knob',
        'Ventilasi untuk keluarkan asap beracun',
        'Pantau hot spot untuk cegah re-ignition',
        'Periksa semua orang dari cedera dan asap inhalasi'
      ],
      choices: [
        {
          text: 'Matikan tabung gas dari sumber, ventilasi penuh, periksa Adik dari asap inhalasi, telepon 113 untuk pemeriksaan',
          isCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Gas aman, asap keluar, Adik sehat, pemadam datang untuk pemeriksaan',
          feedback: 'PROTOKOL TEPAT! Mematikan tabung dari sumber lebih aman dari hanya knob—knob bisa rusak. Ventilasi keluarkan asap beracun. Pemeriksaan asap inhalasi penting, terutama untuk anak.',
          xpEarned: 60,
          decisionReason: 'Pencegahan re-ignition dan perawatan pasca-kebakaran',
          nextScenarioId: 'fire-5'
        },
        {
          text: 'Biarkan asap keluar sendiri, fokus menenangkan Adik',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'Asap lama keluar, Adik batuk-batuk, hot spot menyala kembali',
          feedback: 'SETENGAH BENAR. Menenangkan Adik bagus, tapi ventilasi aktif dan matikan tabung gas adalah prioritas. Asap beracun bisa menyebabkan keracunan, dan hot spot bisa re-ignite.',
          xpEarned: 20,
          decisionReason: 'Tidak menyelesaikan risiko re-ignition',
          nextScenarioId: 'fire-5'
        },
        {
          text: 'Bersihkan kabinet hangus sekarang juga',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kamu terkena serpihan panas, hot spot tidak dipantau, api menyala kembali',
          feedback: 'PRIORITAS SALAH! Pembersihan bisa menunggu. Hot spot dan gas adalah risiko aktif. Pantau re-ignition dulu, pastikan gas aman, baru bersihkan setelah dingin.',
          xpEarned: 0,
          decisionReason: 'Memprioritaskan pembersihan di atas keselamatan',
          nextScenarioId: 'fire-5'
        }
      ],
      previousScenarioId: 'fire-1',
      defaultNextScenarioId: 'fire-5'
    }),

    // SCENARIO 4: Evacuation and Coordination
    createScenario({
      id: 'fire-4',
      disasterType: 'fire',
      order: 3,
      narrative: `Pemadam kebakaran tiba. Mereka segera memadamkan api yang sudah menyebar ke atap. Operasi berlangsung 30 menit.

Rumahmu terbakar sebagian—dapur dan atap rusak parah. Tapi kamar dan ruang tamu masih bisa diselamatkan.

Pemadam memeriksa struktur: "Dapur tidak aman untuk masuk. Atap rentan runtuh. Kamar bisa diakses dengan hati-hati untuk mengambil barang penting."

Tetangga berkumpul. Beberapa menawarkan tempat menginap. RT datang dengan koordinasi bantuan.

Ayah syok dan lemas. Ibu sudah dihubungi dan segera pulang. Adik masih ketakutan.

Waktu: 1 jam pasca-kebakaran.`,
      illustration: 'https://images.pexels.com/photos/47863/firefighter-extinguish-fire-extinction-47863.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Pasca-pemadaman, struktur tidak aman, koordinasi bantuan',
      timeContext: 'Fase pasca-kebakaran, pengungsian sementara',
      dangerLevel: 'medium',
      emotionalTone: 'tense',
      keyLearningPoints: [
        'Jangan masuk zona tidak aman tanpa izin pemadam',
        'Ambil barang penting (dokumen) dengan hati-hati',
        'Terima bantuan tetangga dan RT',
        'Dukungan emosional untuk anak dan keluarga'
      ],
      choices: [
        {
          text: 'Ambil dokumen penting dari kamar dengan izin pemadam, terima tawaran menginap tetangga, dampingi Adik',
          isCorrect: true,
          choiceCategory: 'evacuate',
          consequence: 'Dokumen aman, keluarga menginap di tetangga, Adik mulai tenang',
          feedback: 'KEPUTUSAN TEPAT! Dokumen penting (KTP, akta, ijazah) sulit diganti. Dengan izin pemadam, ambil dari zona aman. Terima bantuan—gotong royong adalah nilai budaya Indonesia.',
          xpEarned: 60,
          decisionReason: 'Pengambilan dokumen aman dan dukungan keluarga',
          nextScenarioId: 'fire-6'
        },
        {
          text: 'Masuk ke dapur untuk mengambil barang berharga',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Atap rentan runtuh, kamu hampir tertimpa puing',
          feedback: 'SANGAT BERBAHAYA! Pemadam sudah bilang dapur tidak aman. Struktur yang terbakar bisa runtuh tanpa peringatan. Barang berharga bisa diganti, nyawa tidak.',
          xpEarned: 0,
          decisionReason: 'Masuk zona tidak aman',
          nextScenarioId: 'fire-6'
        },
        {
          text: 'Menolak bantuan tetangga, malu minta tolong',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Keluarga menginap di rumah yang tidak layak, Adik stres',
          feedback: 'MALU YANG TIDAK PERLU. Dalam bencana, menerima bantuan adalah hal wajar. Gotong royong adalah nilai budaya Indonesia. Tetangga menawarkan karena peduli—terimalah dengan tulus.',
          xpEarned: 0,
          decisionReason: 'Menolak gotong royong',
          nextScenarioId: 'fire-6'
        }
      ],
      previousScenarioId: 'fire-2',
      defaultNextScenarioId: 'fire-6'
    }),

    // SCENARIO 5: Investigation and Prevention
    createScenario({
      id: 'fire-5',
      disasterType: 'fire',
      order: 4,
      narrative: `Kebakaran berhasil ditangani sepenuhnya. Pemadam selesai memeriksa dan memberi laporan: "Penyebab: minyak goreng terbakar tidak terpantau. Tidak ada korban jiwa. Kerugian terbatas pada dapur dan kabinet."

Ayah merenung. "Kita harus lebih siap. Tidak ada APAR di rumah, tidak ada detektor asap, tidak ada rencana evakuasi."

Kamu setuju. Kebakaran ini bisa lebih parah jika kamu tidak tahu metode asfiksia. Adik bisa terluka jika kamu panik.

Keesokan harinya, Ayah mengajakmu ke toko peralatan keselamatan. Ada APAR, detektor asap, selang taman, dan alat lain.

Waktu: 1 hari pasca-kebakaran.`,
      illustration: 'https://images.pexels.com/photos/16894598/pexels-photo-16894598.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Pasca-kebakaran, evaluasi pencegahan, belanja peralatan keselamatan',
      timeContext: 'Fase pencegahan, peningkatan kesiapsiagaan rumah',
      dangerLevel: 'low',
      emotionalTone: 'neutral',
      keyLearningPoints: [
        'APAR di rumah adalah investasi keselamatan',
        'Detektor asap memberi peringatan dini',
        'Rencana evakuasi keluarga harus disusun',
        'Edukasi semua anggota keluarga tentang kebakaran'
      ],
      choices: [
        {
          text: 'Beli APAR 3kg, detektor asap untuk dapur dan kamar, susun rencana evakuasi keluarga',
          isCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Rumah terlengkapi sistem keselamatan, keluarga paham rencana evakuasi',
          feedback: 'INVESTASI TEPAT! APAR 3kg cukup untuk kebakaran kecil. Detektor asap memberi peringatan dini—banyak korban kebakaran adalah yang tertidur dan tidak sadar. Rencana evakuasi latih semua anggota keluarga.',
          xpEarned: 60,
          decisionReason: 'Pencegahan komprehensif untuk rumah',
          nextScenarioId: 'fire-7'
        },
        {
          text: 'Beli APAR saja, yang lain tidak perlu',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'APAR ada tapi tidak ada detektor dan rencana evakuasi',
          feedback: 'SETENGAH TEPAT. APAR bagus, tapi detektor asap memberi peringatan dini yang bisa selamatkan nyawa saat tidur. Rencana evakuasi juga penting—semua harus tahu jalur keluar.',
          xpEarned: 25,
          decisionReason: 'Pencegahan tidak komprehensif',
          nextScenarioId: 'fire-7'
        },
        {
          text: 'Tidak perlu beli apa-apa, yang penting kita sudah tahu caranya',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Rumah tidak terlengkapi, kebakaran berikutnya bisa lebih parah',
          feedback: 'BERBAHAYA! Pengetahuan tanpa peralatan tidak cukup. APAR memungkinkan pemadaman cepat. Detektor asap memberi peringatan dini. Investasi keselamatan adalah investasi nyawa.',
          xpEarned: 0,
          decisionReason: 'Tidak berinvestasi pada keselamatan',
          nextScenarioId: 'fire-7'
        }
      ],
      previousScenarioId: 'fire-3',
      defaultNextScenarioId: 'fire-7'
    }),

    // SCENARIO 6: Community Education
    createScenario({
      id: 'fire-6',
      disasterType: 'fire',
      order: 5,
      narrative: `Kebakaran di rumahmu menjadi pelajaran untuk RT. Ketua RT mengundang pemadam kebakaran untuk penyuluhan.

Sekitar 40 warga hadir. Pemadam mendemonstrasikan penggunaan APAR dengan metode PASS (Pull, Aim, Squeeze, Sweep).

Beberapa warga masih abai. Pak Budi berkata, "APAR mahal, saya tidak butuh, rumah saya aman." Bu Sari berkata, "Saya tidak bisa pakai APAR, terlalu berat."

Kamu sebagai survivor diminta berbagi pengalaman. Kamu tahu bahwa edukasi praktis lebih efektif dari hanya teori.

Waktu: 1 minggu pasca-kebakaran.`,
      illustration: 'https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Penyuluhan RT, beberapa warga abai, demonstrasi APAR',
      timeContext: 'Fase edukasi komunitas, pencegahan kolektif',
      dangerLevel: 'low',
      emotionalTone: 'neutral',
      keyLearningPoints: [
        'Metode PASS untuk APAR: Pull, Aim, Squeeze, Sweep',
        'APAR ringan (2-3kg) bisa digunakan siapa saja',
        'Edukasi praktis lebih efektif dari teori',
        'Setiap rumah butuh APAR dan detektor asap'
      ],
      choices: [
        {
          text: 'Ceritakan pengalaman langsung, demonstrasi APAR dengan metode PASS, ajak warga praktik',
          isCorrect: true,
          choiceCategory: 'gather-information',
          consequence: 'Warga paham dan tertarik, 30 rumah akhirnya membeli APAR',
          feedback: 'EDUKASI EFEKTIF! Pengalaman langsung + demonstrasi praktis adalah kombinasi terbaik. Metode PASS mudah diingat. Dengan praktik langsung, warga lebih percaya diri menggunakan APAR.',
          xpEarned: 60,
          decisionReason: 'Edukasi praktis berbasis pengalaman',
          nextScenarioId: 'fire-7'
        },
        {
          text: 'Ceritakan pengalaman secara dramatis untuk membuat warga takut',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'gather-information',
          consequence: 'Warga takut tapi tidak paham cara menggunakan APAR',
          feedback: 'KETAKUTAN TIDAK CUKUP. Edukasi butuh skill praktis. Pastikan warga tahu CARA menggunakan APAR, bukan hanya bahaya kebakaran. Demonstrasi PASS lebih efektif dari cerita menakutkan.',
          xpEarned: 25,
          decisionReason: 'Kurang fokus pada edukasi praktis',
          nextScenarioId: 'fire-7'
        },
        {
          text: 'Biarkan pemadam yang menjelaskan, saya tidak berpengalaman',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Warga mendengar teori pemadam tapi tidak ada perspektif survivor',
          feedback: 'SUARA SURVIVOR PENTING! Perspektif orang yang mengalami langsung lebih relate daripada teori pemadam. Pengalamanmu membuat edukasi lebih nyata dan memotivasi warga untuk bertindak.',
          xpEarned: 0,
          decisionReason: 'Tidak memanfaatkan kesempatan edukasi',
          nextScenarioId: 'fire-7'
        }
      ],
      previousScenarioId: 'fire-4',
      defaultNextScenarioId: 'fire-7'
    }),

    // SCENARIO 7: Recovery and Home Restoration
    createScenario({
      id: 'fire-7',
      disasterType: 'fire',
      order: 6,
      narrative: `1 bulan setelah kebakaran, dapur sudah diperbaiki. Ayah mempekerjakan tukang untuk membangun ulang dengan material tahan api.

Kabinet kayu diganti dengan kabinet metal. Ventilasi dapur diperbaiki. Detektor asap terpasang di dapur dan kamar. APAR 3kg ada di dekat dapur.

Adik sudah tidak trauma. Dia bahkan ikut latihan evakuasi keluarga yang kamu susun.

Tetangga mulai mengikuti contohmu—beberapa memasang detektor asap dan membeli APAR. Ketua RT menjadikan rumahmu sebagai "Rumah Contoh Siaga Kebakaran."

Waktu: 1 bulan pasca-kebakaran.`,
      illustration: 'https://images.pexels.com/photos/3722212/pexels-photo-3722212.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Dapur diperbaiki, rumah jadi contoh siaga kebakaran',
      timeContext: 'Fase pemulihan, peningkatan kesiapsiagaan',
      dangerLevel: 'low',
      emotionalTone: 'neutral',
      keyLearningPoints: [
        'Material tahan api mengurangi risiko kebakaran',
        'Ventilasi dapur cegah penumpukan asap dan gas',
        'Latihan evakuasi keluarga secara berkala',
        'Contoh nyata mendorong komunitas untuk siap'
      ],
      choices: [
        {
          text: 'Lanjutkan edukasi komunitas, adakan latihan evakuasi rutin, jaga peralatan keselamatan',
          isCorrect: true,
          choiceCategory: 'help-others',
          consequence: 'RT menjadi komunitas siaga kebakaran, risiko menurun drastis',
          feedback: 'PEMULIHAN OPTIMAL! Kesiapsiagaan adalah proses berkelanjutan. Latihan evakuasi rutin memastikan semua siap. Dengan menjadi contoh, kamu mendorong seluruh RT untuk siap—ini investasi nyawa.',
          xpEarned: 60,
          decisionReason: 'Kesiapsiagaan berkelanjutan dan edukasi komunitas',
          nextScenarioId: 'fire-8'
        },
        {
          text: 'Cukup rumah saya yang siap, yang lain urus sendiri',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'immediate-action',
          consequence: 'Rumahmu siap, tapi RT tetap rentan karena warga tidak teredukasi',
          feedback: 'SETENGAH BENAR. Rumah sendiri siap memang penting, tapi kebakaran tetangga bisa menyebar. Komunitas yang siap melindungi semua, termasuk rumahmu. Gotong royong adalah kunci.',
          xpEarned: 25,
          decisionReason: 'Tidak berkontribusi pada kesiapsiagaan komunitas',
          nextScenarioId: 'fire-8'
        },
        {
          text: 'Lupakan kejadian, kembali ke rutinitas normal',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Peralatan tidak terawat, latihan tidak ada, kesiapsiagaan menurun',
          feedback: 'BERBAHAYA! Kesiapsiagaan butuh pemeliharaan. APAR kadaluarsa, detektor baterai habis, latihan tidak ada—semua bisa gagal saat dibutuhkan. Rutinitas pemeliharaan adalah kunci.',
          xpEarned: 0,
          decisionReason: 'Tidak memelihara kesiapsiagaan',
          nextScenarioId: 'fire-8'
        }
      ],
      previousScenarioId: 'fire-5',
      defaultNextScenarioId: 'fire-8'
    }),

    // SCENARIO 8: Advocacy and Systemic Change
    createScenario({
      id: 'fire-8',
      disasterType: 'fire',
      order: 7,
      narrative: `6 bulan setelah kebakaran, kamu diundang ke forum kota untuk presentasi tentang kesiapsiagaan kebakaran rumah tangga.

Kamu akan berbicara di depan perwakilan 50 RT, dinas pemadam kebakaran, dan BPBD. Ini kesempatan untuk mendorong perubahan sistemik—bukan hanya rumahmu, tapi seluruh kota.

Dalam presentasi, kamu akan fokus pada satu rekomendasi utama yang menurutmu paling berdampak untuk kota.

Waktu: 6 bulan pasca-kebakaran.`,
      illustration: 'https://images.pexels.com/photos/29581807/pexels-photo-29581807.jpeg?auto=compress&cs=tinysrgb&w=800',
      situationContext: 'Forum kota, presentasi kebijakan kesiapsiagaan kebakaran',
      timeContext: 'Fase advokasi, perubahan sistemik',
      dangerLevel: 'low',
      emotionalTone: 'neutral',
      keyLearningPoints: [
        'Advokasi kebijakan bisa berdampak luas',
        'Edukasi komunitas adalah investasi nyawa',
        'Setiap orang bisa menjadi agen perubahan',
        'Sistem yang siap melindungi seluruh kota'
      ],
      choices: [
        {
          text: 'Rekomendasi wajib APAR dan detektor asap di setiap rumah, plus program edukasi rutin di RT',
          isCorrect: true,
          choiceCategory: 'gather-information',
          consequence: 'Kota mengadopsi program "Rumah Siaga Kebakaran", 5000 rumah terlengkapi dalam 1 tahun',
          feedback: 'ADVOKASI DENGAN IMPAK! Kebijakan wajib APAR dan detektor asap, plus edukasi rutin, adalah kombinasi yang menyelamatkan nyawa. Dengan pengalamanmu, kamu mendorong perubahan sistemik yang berdampak luas.',
          xpEarned: 70,
          decisionReason: 'Rekomendasi kebijakan berbasis pengalaman'
        },
        {
          text: 'Ceritakan pengalaman secara dramatis untuk membuat audiens terharu',
          isCorrect: false,
          isPartiallyCorrect: true,
          choiceCategory: 'gather-information',
          consequence: 'Audiens terharu tapi tidak ada rekomendasi konkret',
          feedback: 'EMOSI TIDAK CUKUP. Forum kebijakan butuh rekomendasi actionable, bukan hanya cerita. Pastikan selalu ada "apa yang harus dilakukan"—kebijakan, program, atau standar yang bisa diadopsi.',
          xpEarned: 30,
          decisionReason: 'Kurang fokus pada rekomendasi kebijakan'
        },
        {
          text: 'Serahkan pada pemerintah dan pemadam, warga biasa tidak berkompeten',
          isCorrect: false,
          choiceCategory: 'immediate-action',
          consequence: 'Kehilangan kesempatan mendorong perubahan sistemik',
          feedback: 'SUARA SURVIVOR PENTING! Pemerintah butuh masukan dari warga yang mengalami langsung. Kamu adalah living testimony—perspektifmu tidak bisa digantikan oleh data pemadam saja. Advokasi warga adalah engine perubahan.',
          xpEarned: 0,
          decisionReason: 'Tidak memanfaatkan kesempatan advokasi'
        }
      ],
      previousScenarioId: 'fire-7'
    })
  ];

  return scenarios;
}
