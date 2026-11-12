const days = [
  {
    day: 1,
    date: "11/27",
    title: "基督城取車與補給",
    region: "christchurch",
    coords: { x: 80, y: 32 },
    labelCoords: { x: 91, y: 36 },
    highlight: "露營車",
    icon: "🚐",
    stops: ["Maui Christchurch", "PAK'nSAVE Papanui", "Tasman Holiday Parks"],
    routePlaces: [
      "Maui Motorhome Rental Christchurch 159 Orchard Road, New Zealand",
      "PAK'nSAVE Papanui, Christchurch, New Zealand",
      "Tasman Holiday Parks - Christchurch, New Zealand"
    ],
    main: "下午兩點抵達基督城機場，出關後前往租車公司辦理露營車取車手續。隨後直接開車前往市區的大型超市，如 Pak'nSave 或 New World 進行大採買，將車上冰箱塞滿食材。第一天晚上在基督城營地過夜，熟悉露營車的設備與操作。",
    stay: "Tasman Holiday Parks - Christchurch",
    stayType: "已預定住宿",
    alt: "留一至兩人留在超市負責大採買，其他人可以帶著行李在露營車上安頓，或是在露營地附設的遊戲區陪小孩玩耍，放鬆長途飛行的疲勞。",
    image: "../assets/day-01-campervan-paknsave.png",
    primaryItems: [
      {
        title: "抵達基督城國際機場",
        location: "Christchurch International Airport",
        description: "下午抵達後完成入境、領取行李，預留時間處理通關與同行者集合。",
        mapQuery: "Christchurch International Airport New Zealand"
      },
      {
        title: "露營車取車與設備確認",
        location: "基督城機場周邊租車公司",
        description: "辦理取車、檢查車況，熟悉瓦斯、冰箱、電力、清水、灰水與黑水系統。",
        mapQuery: "Christchurch campervan rental airport New Zealand"
      },
      {
        title: "PAK'nSAVE Papanui 大採買",
        location: "PAK'nSAVE Papanui",
        description: "補齊第一段路程的食材、飲水、早餐、零食與基本耗材，讓露營車冰箱先滿血上路。",
        mapQuery: "PAK'nSAVE Papanui Christchurch New Zealand"
      }
    ],
    alternativeItems: [
      {
        title: "分組採買與車上安頓",
        location: "PAK'nSAVE Papanui",
        description: "一組人進超市採買，另一組整理行李、熟悉車內收納與兒童座椅配置。",
        mapQuery: "PAK'nSAVE Papanui Christchurch New Zealand"
      },
      {
        title: "先到營地讓小孩放電",
        location: "Tasman Holiday Parks - Christchurch",
        description: "若長途飛行後需要休息，可以讓部分同行者先到營地使用公共設施、遊戲區或廚房。",
        mapQuery: "Tasman Holiday Parks Christchurch New Zealand"
      },
      {
        title: "機場附近簡單晚餐",
        location: "Christchurch Airport 周邊",
        description: "若取車和採買時間拉長，可以在機場周邊簡單用餐，降低第一天移動壓力。",
        mapQuery: "Christchurch Airport restaurants New Zealand"
      }
    ],
    foodItems: [
      {
        title: "Riverside Market",
        location: "Christchurch CBD",
        description: "第一晚若大家還有體力進市區，這裡適合分頭點餐，口味選擇多，20 人也比較好分流。",
        meta: "彈性晚餐 · vendor 營業時間各自確認",
        mapQuery: "Riverside Market Christchurch"
      },
      {
        title: "Little High Eatery",
        location: "Christchurch CBD",
        description: "多店家共用座位的 casual food hall，適合剛抵達時不想為了餐廳訂位傷腦筋。",
        meta: "備案晚餐 · 適合混合口味",
        mapQuery: "Little High Eatery Christchurch"
      },
      {
        title: "機場周邊簡單用餐",
        location: "Christchurch Airport",
        description: "若取車或採買延誤，直接在機場附近解決晚餐，優先保留第一晚整理車輛的時間。",
        meta: "低壓備案 · 以當日營業為準",
        mapQuery: "Christchurch Airport restaurants New Zealand"
      }
    ],
    supplyItems: [
      {
        title: "PAK'nSAVE Papanui 大採買",
        location: "Papanui",
        description: "第一段重點補給：早餐、飲水、零食、露營車晚餐食材、調味料與清潔耗材一次補齊。",
        meta: "主採買點 · 建議分工採買",
        mapQuery: "PAK'nSAVE Papanui Christchurch New Zealand"
      },
      {
        title: "New World Bishopdale 備用採買",
        location: "Bishopdale Mall",
        description: "若 PAK'nSAVE 人潮太多，可改到住宿與機場區之間的 New World 補齊生鮮和隔天食材。",
        meta: "備案超市 · 07:00–21:00",
        mapQuery: "New World Bishopdale Christchurch"
      },
      {
        title: "確認租車方案與油種",
        location: "Maui Christchurch",
        description: "取車時確認油種、AdBlue、LPG 與 Premium Pack 涵蓋內容；依合約處理，不需預設每次都補滿。",
        meta: "車輛提醒 · 以租車合約為準",
        mapQuery: "Maui Motorhome Rental Christchurch"
      }
    ],
    campItems: [
      {
        title: "Tasman Holiday Parks - Christchurch",
        description: "第一晚已完成預訂。取車與採買後入住，安排時間熟悉露營車設備、整理行李與補給，隔天由基督城出發前往 Lake Tekapo。",
        meta: "11/27 · 基督城",
        status: "已預定",
        mapQuery: "Tasman Holiday Parks Christchurch New Zealand"
      }
    ]
  },
  {
    day: 2,
    date: "11/28",
    title: "基督城自由活動 → 特卡波湖",
    region: "lake",
    coords: { x: 58, y: 43 },
    labelCoords: { x: 72, y: 42 },
    highlight: "牧羊人教堂",
    icon: "⛪",
    stops: ["Tasman Christchurch", "基督城市區", "Fairlie", "Lakes Edge"],
    routePlaces: [
      "Tasman Holiday Parks - Christchurch, New Zealand",
      "Riverside Market Christchurch, New Zealand",
      "Margaret Mahy Playground, Christchurch, New Zealand",
      "Fairlie Bakehouse, Fairlie, New Zealand",
      "Lakes Edge Holiday Park, Lake Tekapo, New Zealand"
    ],
    main: "上午採取自由彈性方案。可以選擇開車進基督城市區，帶小孩去 Riverside Market 享用早午餐，並到 Margaret Mahy 兒童公園盡情放電；或者提早出發前往特卡波湖，提早抵達湖邊散步、欣賞藍色湖水與好牧羊人教堂的午後美景。",
    stay: "Lakes Edge Holiday Park",
    stayType: "已預定住宿",
    alt: "不去兒童公園的旅伴可以安排基督城市區復古觀光電車，或在雅芳河畔咖啡廳享受悠閒時光。若提早抵達特卡波湖，大人們可以預約 Tekapo Springs 泡露天溫泉。",
    image: "../assets/day-02-lake-tekapo-lupins.jpg"
  },
  {
    day: 3,
    date: "11/29",
    title: "特卡波湖 → 庫克山",
    region: "lake",
    coords: { x: 48, y: 40 },
    labelCoords: { x: 49, y: 33 },
    highlight: "雪山直升機",
    icon: "🚁",
    stops: ["Lakes Edge", "普卡基湖遊客中心", "胡克谷步道", "Glentanner"],
    routePlaces: [
      "Lakes Edge Holiday Park, Lake Tekapo, New Zealand",
      "Lake Pukaki Visitor Centre, New Zealand",
      "Hooker Valley Track, Mount Cook National Park, New Zealand",
      "Glentanner Park Centre, New Zealand"
    ],
    main: "早上沿著夢幻的普卡基湖北上開往庫克山。下午挑戰南島最出名的胡克谷步道，單程約 1.5 到 2 小時，沿途地勢平緩，會經過三座吊橋，終點可近距離觀賞冰川湖與庫克山主峰。",
    stay: "Glentanner Park Centre (Mount Cook)",
    stayType: "已預定住宿",
    alt: "若同行長輩或大人不想走太遠，可留在隱士飯店 Hermitage Hotel 的景觀餐廳喝下午茶、遠眺雪山；或者自費報名直升機高空冰河降落體驗。",
    image: "../assets/day-03-mount-cook-helicopter.jpg"
  },
  {
    day: 4,
    date: "11/30",
    title: "庫克山 → 特威澤爾 → 瓦納卡",
    region: "lake",
    coords: { x: 43, y: 56 },
    labelCoords: { x: 58, y: 53 },
    highlight: "Puzzling World",
    icon: "🧩",
    stops: ["Glentanner", "High Country Salmon", "Puzzling World", "Hampshire Wanaka"],
    routePlaces: [
      "Glentanner Park Centre, New Zealand",
      "High Country Salmon, Twizel, New Zealand",
      "Puzzling World, Wanaka, New Zealand",
      "Hampshire Holiday Parks - Wanaka, New Zealand"
    ],
    main: "早上輕鬆離開庫克山，順路在特威澤爾的 High Country Salmon 享用鮭魚早午餐、餵魚。隨後翻越林迪斯山口前往瓦納卡。下午帶小孩前往 Puzzling World，傍晚入住瓦納卡湖畔營地，去拍著名的瓦納卡孤獨樹。",
    stay: "Hampshire Holiday Parks - Wanaka",
    stayType: "已預定住宿",
    alt: "不想去迷宮的大人，可以提早前往瓦納卡湖畔，沿著湖濱步道散步、拍照，或者在鎮上挑一家面對湖景的景觀咖啡廳享用下午茶。",
    image: "../assets/day-04-lake-wanaka-tree.jpg"
  },
  {
    day: 5,
    date: "12/1",
    title: "瓦納卡 → 克倫威爾 → 箭鎮 → 皇后鎮",
    region: "queenstown",
    coords: { x: 35, y: 60 },
    labelCoords: { x: 31, y: 53 },
    highlight: "箭鎮小屋",
    icon: "🏠",
    stops: ["Hampshire Wanaka", "克倫威爾", "箭鎮", "Queenstown Lakeview"],
    routePlaces: [
      "Hampshire Holiday Parks - Wanaka, New Zealand",
      "Cromwell Heritage Precinct, New Zealand",
      "Arrowtown, New Zealand",
      "Hampshire Holiday Parks - Queenstown Lakeview, New Zealand"
    ],
    main: "早上離開瓦納卡，開車前往水果小鎮克倫威爾。中午在當地特色酒莊或精釀啤酒廠喝杯在地啤酒、享用輕食午餐。下午前往箭鎮歷史街區散步，欣賞古老金礦小鎮風情與魔戒取景的編織河道。",
    stay: "Hampshire Holiday Parks - Queenstown Lakeview",
    stayType: "已預定住宿",
    alt: "若不想去箭鎮，可以去皇后鎮市區逛街、漫步瓦卡蒂普湖畔、朝聖 Fergburger；也可以自行前往 Skyline 纜車，在山頂景觀台喝下午茶看卓越山脈大景。",
    image: "../assets/day-05-arrowtown-old-town.jpg"
  },
  {
    day: 6,
    date: "12/2",
    title: "皇后鎮 → Deer Park Heights → 蒂阿瑙",
    region: "fiordland",
    coords: { x: 27, y: 69 },
    labelCoords: { x: 39, y: 67 },
    highlight: "Queenstown 街景",
    icon: "🏙️",
    stops: ["Queenstown Lakeview", "Deer Park Heights", "皇后鎮市區", "Te Anau TOP 10"],
    routePlaces: [
      "Hampshire Holiday Parks - Queenstown Lakeview, New Zealand",
      "Deer Park Heights Queenstown, New Zealand",
      "Queenstown Mall, New Zealand",
      "Te Anau TOP 10 Holiday Park, New Zealand"
    ],
    main: "上午自駕前往 Deer Park Heights，帶小孩在車內沿著山丘穿梭，餵食野生小羊、駝羊、氂牛，並欣賞皇后鎮高空全景。中午回到皇后鎮市區享用午餐，隨後啟程開往蒂阿瑙，晚上參加藍光螢火蟲洞神祕之旅。",
    stay: "Te Anau TOP 10 Holiday Park",
    stayType: "已預定住宿",
    alt: "不想看動物的旅伴，上午可以留在皇后鎮市區慢活。晚上若不參加螢火蟲洞，可以在蒂阿瑙湖畔散步觀賞落日，或前往峽灣電影院看峽灣空拍紀錄片。",
    image: "../assets/day-06-queenstown-main-street.jpg"
  },
  {
    day: 7,
    date: "12/3",
    title: "蒂阿瑙 → 米佛峽灣 → 蒂阿瑙",
    region: "fiordland",
    coords: { x: 17, y: 69 },
    labelCoords: { x: 12, y: 59 },
    highlight: "峽灣船",
    icon: "⛴️",
    stops: ["Te Anau TOP 10", "RealNZ Visitor Centre", "Milford Sound day tour", "Te Anau TOP 10"],
    routePlaces: [
      "Te Anau TOP 10 Holiday Park, New Zealand",
      "RealNZ Visitor Centre 85 Lakefront Drive Te Anau, New Zealand",
      "Milford Sound Visitor Terminal, New Zealand",
      "Te Anau TOP 10 Holiday Park, New Zealand"
    ],
    main: "已預訂 RealNZ 米佛峽灣特色遊船與 Te Anau 巴士往返。12/3 早上 07:10 前到 RealNZ Visitor Centre 前台報到，07:30 出發、15:00 返回；共 12 位成人與 2 位嬰兒，行程包含 14 份午餐盒。",
    stay: "Te Anau TOP 10 Holiday Park（續住）",
    stayType: "已預定住宿",
    alt: "若有同行者不想舟車勞頓，可以留在蒂阿瑙小鎮放空。白天可以沿著 Kepler Track 入口處的平緩森林慢步，或去免費的蒂阿瑙鳥類保護區。",
    image: "../assets/day-07-milford-sound-cruise.jpg"
  },
  {
    day: 8,
    date: "12/4",
    title: "蒂阿瑙 → 達尼丁",
    region: "east",
    coords: { x: 56, y: 77 },
    labelCoords: { x: 76, y: 87 },
    highlight: "Dunedin 老建築",
    icon: "🏛️",
    stops: ["蒂阿瑙營地", "鮑德溫街", "達尼丁火車站", "Dunedin Holiday Park"],
    routePlaces: [
      "Te Anau TOP 10 Holiday Park, New Zealand",
      "Baldwin Street, Dunedin, New Zealand",
      "Dunedin Railway Station, New Zealand",
      "Dunedin Holiday Park & Motels, Dunedin, New Zealand"
    ],
    main: "橫跨南島南部，前往充滿蘇格蘭復古風情的東岸第一大城達尼丁。下午造訪世界最陡的街道 Baldwin Street 拍照打卡，並參觀歷史悠久、極具文藝復興風格的達尼丁火車站。",
    stay: "Dunedin Holiday Park & Motels",
    stayType: "已預定住宿",
    alt: "不愛戶外走動的大人可以參觀奧維斯頓古宅，欣賞百年前的富豪生活；或者前往 Speight's 啤酒廠參加導覽，品嚐在地精釀啤酒。",
    image: "../assets/day-08-dunedin-baldwin-street.jpg"
  },
  {
    day: 9,
    date: "12/5",
    title: "達尼丁：皇家信天翁中心與企鵝中心",
    region: "east",
    coords: { x: 61, y: 73 },
    labelCoords: { x: 91, y: 73 },
    highlight: "信天翁",
    icon: "🪽",
    stops: ["達尼丁營地", "奧塔哥半島", "皇家信天翁中心", "企鵝保護區", "達尼丁營地"],
    routePlaces: [
      "Dunedin Holiday Park & Motels, Dunedin, New Zealand",
      "Royal Albatross Centre, Dunedin, New Zealand",
      "Penguin Place, Dunedin, New Zealand",
      "Dunedin Holiday Park & Motels, Dunedin, New Zealand"
    ],
    main: "開車沿著美麗的奧塔哥半島公路一路開到盡頭，造訪 Royal Albatross Centre 觀賞世界唯一的陸地皇家信天翁生態，接著在傍晚參加企鵝保護中心導覽，近距離觀察野生黃眼企鵝。",
    stay: "Dunedin Holiday Park & Motels（續住）",
    stayType: "已預定住宿",
    alt: "不打算看鳥類和動物的同行大人，可以提早在拉納克城堡下車，參觀英式花園，並在城堡內的優雅宴會廳裡享用正統英式下午茶。",
    image: "../assets/day-09-albatross-centre.jpg"
  },
  {
    day: 10,
    date: "12/6",
    title: "達尼丁 → 奧馬魯 → 基督城",
    region: "christchurch",
    coords: { x: 68, y: 52 },
    labelCoords: { x: 91, y: 55 },
    highlight: "奧瑪魯 steampunk",
    icon: "⚙️",
    stops: ["Dunedin Holiday Park", "摩拉基大圓石", "奧馬魯歷史街區", "Tasman Christchurch"],
    routePlaces: [
      "Dunedin Holiday Park & Motels, Dunedin, New Zealand",
      "Moeraki Boulders, New Zealand",
      "Oamaru Victorian Precinct, New Zealand",
      "Tasman Holiday Parks - Christchurch, New Zealand"
    ],
    main: "今天北返基督城，是一段較長的路程，因此拆成多個停靠點。中途停靠摩拉基大圓石看海灘上的神祕圓石。中午抵達奧馬魯，在維多利亞白石建築街區享用午餐，並帶小孩去蒸汽龐克總部。",
    stay: "Tasman Holiday Parks - Christchurch",
    stayType: "已預定住宿",
    alt: "中停奧馬魯時，同行的大人可以在歷史街區逛古董書店、手工羊毛製品店及文青工藝品店。抵達基督城後，若還有體力，可以去 Riverside Market 吃晚餐。",
    image: "../assets/day-10-oamaru-steampunk.jpg"
  },
  {
    day: 11,
    date: "12/7",
    title: "基督城還車 → LyLo 機場住宿",
    region: "christchurch",
    coords: { x: 77, y: 30 },
    labelCoords: { x: 88, y: 23 },
    highlight: "飛機",
    icon: "✈️",
    stops: ["Tasman Christchurch", "Maui 還車", "LyLo Christchurch Airport"],
    routePlaces: [
      "Tasman Holiday Parks - Christchurch, New Zealand",
      "Maui Motorhome Rental Christchurch 159 Orchard Road, New Zealand",
      "LyLo Christchurch Airport, New Zealand"
    ],
    main: "早上整理露營車並依 Maui 合約確認清潔、廢水、油料、AdBlue 與 LPG 要求，再前往 159 Orchard Road 辦理還車。交車後搭 Maui 接駁車到機場，步行前往 LyLo Christchurch Airport 入住。",
    stay: "LyLo Christchurch Airport",
    stayType: "已預定住宿",
    alt: "若辦理完入住後時間還早，可以步行前往機場旁邊的國際南極中心。裡面有極地風暴模擬、全地形越野車，還能看到小藍企鵝與哈士奇。",
    image: "../assets/day-11-christchurch-tram.jpg"
  }
];

const structuredDays = {
  2: {
    primaryItems: [
      info("基督城市區早午餐", "Riverside Market", "抵達後第一個輕鬆補給點，適合用餐、買咖啡，也方便讓大家慢慢進入旅遊節奏。", "Riverside Market Christchurch New Zealand"),
      info("小孩放電", "Margaret Mahy Playground", "南半球知名大型兒童公園，適合在長途飛行後安排一段戶外活動。", "Margaret Mahy Playground Christchurch New Zealand"),
      info("抵達特卡波湖", "Church of the Good Shepherd", "下午抵達湖區後散步看湖色與好牧羊人教堂，作為南島湖區旅程的開場。", "Church of the Good Shepherd Lake Tekapo New Zealand")
    ],
    alternativeItems: [
      info("基督城復古電車", "Christchurch Tram", "不想去兒童公園的同行者，可以用市區電車輕鬆瀏覽基督城中心。", "Christchurch Tram New Zealand"),
      info("雅芳河畔散步", "Avon River", "安排咖啡、河畔散步或輕量市區活動，適合慢慢調整時差。", "Avon River Christchurch New Zealand"),
      info("Tekapo Springs 溫泉", "Tekapo Springs", "若提早抵達特卡波湖，可以泡溫泉看湖景，讓大人也有放鬆時間。", "Tekapo Springs Lake Tekapo New Zealand")
    ],
    foodItems: [
      info("Riverside Market", "Christchurch CBD", "上午若先留在基督城，可在這裡早午餐、咖啡與小吃分流。", "Riverside Market Christchurch", "早午餐 · vendor 營業時間各自確認"),
      info("Fairlie Bakehouse", "Fairlie", "往 Tekapo 路上經典派店，下午關門風險高，適合中午前後停靠外帶。", "Fairlie Bakehouse New Zealand", "路上點心 · 不要太晚到"),
      info("Kohan Restaurant", "Lake Tekapo", "抵達 Tekapo 後的日式晚餐候選，若全團一起吃建議先訂位。", "Kohan Restaurant Lake Tekapo", "晚餐候選 · 建議確認營業與訂位")
    ],
    supplyItems: [
      info("D1 已採買充足即可直接出發", "Tasman Holiday Parks - Christchurch", "進入 Tekapo / Mt Cook 前應已在 D1 備妥 D2-D4 的早餐、零食、飲水與簡單晚餐。", "Tasman Holiday Parks Christchurch", "補給策略 · 湖區前先備齊"),
      info("PAK'nSAVE Moorhouse 備用補貨", "297 Moorhouse Avenue", "若上午在市區活動後仍有缺項，可在離開基督城前補齊，再往 Fairlie 與 Tekapo。", "PAK'nSAVE Moorhouse Christchurch", "市區備案 · 07:00–22:00"),
      info("Four Square Tekapo 小補給", "22 Rapuwai Lane", "抵達後只補牛奶、飲水或隔天早餐；品項與價格不適合取代基督城大採買。", "Four Square Tekapo", "小補給 · 不做大採買")
    ],
    campItems: [
      bookedStay("Lakes Edge Holiday Park", "湖畔營地已完成預訂，抵達後可步行到湖岸，隔天由此出發前往 Mount Cook。", "Lakes Edge Holiday Park Lake Tekapo", "11/28 · Lake Tekapo")
    ],
    campHeading: "已預定住宿"
  },
  3: {
    primaryItems: [
      info("特卡波湖出發", "Lake Tekapo", "早上從湖區出發，沿著南島經典高山湖泊路線前往庫克山。", "Lake Tekapo New Zealand"),
      info("普卡基湖中停", "Lake Pukaki Visitor Centre", "沿途最適合停靠拍照、看湖色與遠眺庫克山的位置。", "Lake Pukaki Visitor Centre New Zealand"),
      info("胡克谷步道", "Hooker Valley Track", "平緩且景色密度高的庫克山經典步道，終點可看冰川湖與雪山。", "Hooker Valley Track Mount Cook New Zealand")
    ],
    alternativeItems: [
      info("隱士飯店景觀休息", "The Hermitage Hotel", "不想走完整步道的同行者，可以在飯店景觀餐廳遠眺雪山。", "The Hermitage Hotel Mount Cook New Zealand"),
      info("雪山直升機體驗", "Mount Cook Ski Planes & Helicopters", "想用省體力方式看冰河與高山景色，可以查詢直升機或冰河降落行程。", "Mount Cook Ski Planes and Helicopters New Zealand")
    ],
    foodItems: [
      info("自備午餐 / 野餐", "Lake Pukaki / Mount Cook", "這天餐飲選擇少，建議前一天準備三明治、飯糰、零食與熱飲。", "Lake Pukaki picnic area", "主建議 · 不依賴餐廳"),
      info("The Hermitage Hotel", "Mount Cook", "不走完整步道的同行者，可在飯店區域找景觀休息與簡餐。", "The Hermitage Hotel Mount Cook", "備案 · 以當日營業為準")
    ],
    supplyItems: [
      info("Four Square Tekapo 出發前補水", "22 Rapuwai Lane", "離開 Lakes Edge 前把飲用水、熱水、早餐與步道零食準備好。", "Four Square Tekapo", "步道日小補給 · 早上完成"),
      info("Lake Pukaki Visitor Centre", "Lake Pukaki", "可短停上廁所、拍照與確認車上飲水零食。", "Lake Pukaki Visitor Centre", "中停檢查 · 非大採買點"),
      info("Mobil Twizel 油量提醒", "50 Mackenzie Drive", "往 SH80 與 Glentanner 前確認油量；不足時在 Twizel 補油，不要進山區後才處理。", "Mobil Twizel", "加油提醒 · 07:00–21:00")
    ],
    campItems: [
      bookedStay("Glentanner Park Centre (Mount Cook)", "庫克山區住宿已完成預訂，山區採買選擇有限，入住前確認車上飲水與晚餐食材。", "Glentanner Park Centre Mount Cook", "11/29 · Mt. Cook")
    ],
    campHeading: "已預定住宿"
  },
  4: {
    primaryItems: [
      info("庫克山輕鬆出發", "Glentanner Park Centre", "早上不用太趕，從庫克山區域往瓦納卡方向移動。", "Glentanner Park Centre Mount Cook New Zealand"),
      info("鮭魚早午餐", "High Country Salmon", "順路在特威澤爾享用鮭魚餐、餵魚，作為移動日的輕鬆中停。", "High Country Salmon Twizel New Zealand"),
      info("Puzzling World", "Puzzling World Wanaka", "下午安排迷宮與視覺錯覺展，適合小孩放電也適合大人拍照。", "Puzzling World Wanaka New Zealand")
    ],
    alternativeItems: [
      info("瓦納卡湖畔散步", "Lake Wanaka", "不進 Puzzling World 的同行者，可以直接到湖邊散步看景。", "Lake Wanaka New Zealand"),
      info("瓦納卡孤獨樹", "That Wanaka Tree", "傍晚可安排拍照與湖邊放空，是瓦納卡代表性景點。", "That Wanaka Tree New Zealand"),
      info("湖景咖啡廳", "Wanaka town centre", "想更慢一點的人，可以在鎮上找湖景咖啡廳休息。", "Wanaka town centre New Zealand")
    ],
    foodItems: [
      info("High Country Salmon", "Twizel", "鮭魚餐、魚店與餵魚一次完成，是 D4 最穩的午餐/補給點。", "High Country Salmon Twizel", "主推薦 · 官方營業時間已查"),
      info("Big Fig Wanaka", "Wanaka", "Wanaka 鎮上 casual 備案，適合不想正式訂位的晚餐或外帶。", "Big Fig Wanaka", "備案 · 以當日營業為準")
    ],
    supplyItems: [
      info("High Country Salmon 冷藏補貨", "Twizel", "可買鮭魚或簡單食材帶上車，記得確認冰箱空間。", "High Country Salmon Twizel", "食材補給 · 注意冷藏"),
      info("New World Three Parks", "83 Sir Tim Wallis Drive", "由 Lindis Pass 進 Wanaka 時順路補 D5 早餐、零食與晚餐食材，再前往 Brownston Street 住宿。", "New World Three Parks Wanaka", "主要補給 · 07:00–22:00"),
      info("Caltex Wanaka 油量提醒", "19 Ardmore Street", "穿越 Lindis Pass 後確認油量；需要時可在市區補油，亦提供 LPG bottle fill。", "Caltex Wanaka", "加油提醒 · 依油量決定")
    ],
    campItems: [
      bookedStay("Hampshire Holiday Parks - Wanaka", "瓦納卡住宿已完成預訂，距湖岸與鎮中心不遠，適合入住後散步與整理補給。", "Hampshire Holiday Parks Wanaka", "11/30 · Wanaka")
    ],
    campHeading: "已預定住宿"
  },
  5: {
    primaryItems: [
      info("瓦納卡出發", "Wanaka", "早上離開瓦納卡，往水果小鎮與皇后鎮方向前進。", "Wanaka New Zealand"),
      info("克倫威爾午餐", "Cromwell Heritage Precinct", "可安排酒莊、精釀或老街區輕食午餐，作為前往皇后鎮前的中停。", "Cromwell Heritage Precinct New Zealand"),
      info("箭鎮歷史街區", "Arrowtown", "下午散步金礦小鎮街區，看老建築、河道與小店。", "Arrowtown New Zealand")
    ],
    alternativeItems: [
      info("皇后鎮湖畔散步", "Queenstown Bay Beach", "若不去箭鎮，可以提早到皇后鎮湖邊散步或逛街。", "Queenstown Bay Beach New Zealand"),
      info("Fergburger", "Fergburger Queenstown", "想朝聖皇后鎮名店，可以安排外帶或錯峰用餐。", "Fergburger Queenstown New Zealand"),
      info("Skyline 山頂景觀", "Skyline Queenstown", "想看卓越山脈與湖景，可以搭纜車上山頂觀景台。", "Skyline Queenstown New Zealand")
    ],
    foodItems: [
      info("The Stoaker Room Cromwell", "Cromwell", "克倫威爾午餐主選，若全團一起吃建議先訂位。", "The Stoaker Room Cromwell", "午餐主推 · 官方時間已查"),
      info("Hook Wanaka", "Wanaka", "D4 週一休息不適合安排；若 D5 早上想在瓦納卡多留一點，可作為現釣鮭魚與輕食備案，最後租竿 16:30。", "Hook Wanaka", "隔天備案 · 週二可確認"),
      info("Arrowtown Bakery", "Arrowtown", "箭鎮散步時的派與點心備案，適合外帶分食。", "Arrowtown Bakery", "點心備案 · 以當日營業為準"),
      info("Fergburger", "Queenstown", "抵達皇后鎮後的經典外帶選項，建議錯峰或拆小組買。", "Fergburger Queenstown", "晚餐/宵夜 · 排隊預期")
    ],
    supplyItems: [
      info("Cromwell 水果與簡單補給", "Cromwell", "水果鎮適合補水果、點心與隔天路上零食。", "fruit shop Cromwell New Zealand", "路上補給 · 順路即可"),
      info("New World Wānaka 出發前補貨", "20 Dunmore Street", "住宿附近可補當日早餐與路上食物；若車上物資仍充足，留到 D6 再做主要採買。", "New World Wanaka", "住宿附近 · 07:00–22:00"),
      info("PAK'nSAVE Queenstown 留作 D6 主補給", "302 Hawthorne Drive", "Frankton 的大型超市較適合補 Te Anau 與 day tour 前物資，今天可先記下、不必特地折返。", "PAK'nSAVE Queenstown", "隔天主要補給 · 附設 Fuel")
    ],
    campItems: [
      bookedStay("Hampshire Holiday Parks - Queenstown Lakeview", "皇后鎮住宿已完成預訂，距離市中心與湖畔近，可步行安排晚餐與市區活動。", "Hampshire Holiday Parks Queenstown Lakeview", "12/1 · Queenstown")
    ],
    campHeading: "已預定住宿"
  },
  6: {
    primaryItems: [
      info("Deer Park Heights", "Deer Park Heights Queenstown", "自駕上山看皇后鎮全景，並安排餵動物與車內觀景。", "Deer Park Heights Queenstown New Zealand"),
      info("皇后鎮市區午餐", "Queenstown Mall", "回到市區用餐、補給，之後開往蒂阿瑙。", "Queenstown Mall New Zealand"),
      info("蒂阿瑙螢火蟲洞", "Te Anau Glowworm Caves", "晚上參加螢火蟲洞行程，作為峽灣區前一晚的重點活動。", "Te Anau Glowworm Caves New Zealand")
    ],
    alternativeItems: [
      info("皇后鎮市區慢活", "Queenstown town centre", "不想看動物的人，可以留在市區逛街、喝咖啡或湖邊散步。", "Queenstown town centre New Zealand"),
      info("蒂阿瑙湖畔夕陽", "Lake Te Anau", "晚上不進螢火蟲洞的人，可以在湖邊散步看夕陽。", "Lake Te Anau New Zealand"),
      info("峽灣電影", "Fiordland Cinema", "用室內方式先認識峽灣地景，適合天氣不佳或想休息的同行者。", "Fiordland Cinema Te Anau New Zealand")
    ],
    foodItems: [
      info("Fergbaker", "Queenstown", "早上離開皇后鎮前可買麵包、派與路上點心。", "Fergbaker Queenstown", "早餐/外帶 · 排隊預期"),
      info("Flame Bar & Grill", "Queenstown", "若 D5 沒吃到，可作為皇后鎮晚餐備案；20 人建議訂位。", "Flame Bar Grill Queenstown", "備案晚餐 · 建議訂位"),
      info("Redcliff Cafe", "Te Anau", "抵達 Te Anau 後的晚餐候選，若螢火蟲行程前後用餐需先確認時間。", "Redcliff Cafe Te Anau", "晚餐候選 · 先訂位/確認")
    ],
    supplyItems: [
      info("PAK'nSAVE Queenstown 主補給", "302 Hawthorne Drive", "經 Frankton 前往 Te Anau 前，補齊 D6 晚餐、D7 早餐、零食與飲水。", "PAK'nSAVE Queenstown", "重要補給 · 07:00–22:00"),
      info("FreshChoice Te Anau 小補給", "5 Milford Crescent", "抵達後可步行補 day tour 的水、暈車用品、雨具或缺少的輕食。", "FreshChoice Te Anau", "住宿附近 · 07:00–20:00"),
      info("Milford day tour 無需自駕加油", "Te Anau", "隔天由 day tour 巴士往返 Milford；露營車油量只需配合 D8 前往 Dunedin 的安排。", "Te Anau TOP 10 Holiday Park", "加油提醒 · 不為 D7 特別處理")
    ],
    campItems: [
      bookedStay("Te Anau TOP 10 Holiday Park", "蒂阿瑙住宿已完成預訂，位置鄰近 FreshChoice 與鎮中心，隔天參加 Milford Sound day tour。", "Te Anau TOP 10 Holiday Park", "12/2 · Te Anau")
    ],
    campHeading: "已預定住宿"
  },
  7: {
    primaryItems: [
      info("RealNZ Visitor Centre 集合", "85 Lakefront Drive, Te Anau", "請在 07:10 前到 Te Anau Visitor Centre 前台辦理報到，搭乘 07:30 出發的巴士。", "RealNZ Visitor Centre 85 Lakefront Drive Te Anau", "已預訂 · 07:10 前報到"),
      info("米佛公路景觀巴士", "Te Anau → Milford Sound", "由 RealNZ 巴士往返米佛公路，沿途停靠依當天天氣與行程安排。", "Milford Road New Zealand", "07:30 出發 · 不需自駕"),
      info("米佛峽灣特色遊船", "Milford Sound Visitor Terminal", "搭船欣賞峽灣瀑布、峭壁與野生動物，行程預計 15:00 返回 Te Anau。", "Milford Sound Visitor Terminal New Zealand", "已預訂 · 12 位成人＋2 位嬰兒")
    ],
    alternativeItems: [
      info("蒂阿瑙小鎮休息", "Te Anau town centre", "不想長時間拉車的同行者，可以留在鎮上慢慢休息。", "Te Anau town centre New Zealand"),
      info("Kepler Track 平緩段", "Kepler Track car park", "可安排入口附近的平緩森林步道，不需要走完整步道。", "Kepler Track car park Te Anau New Zealand"),
      info("蒂阿瑙鳥類保護區", "Te Anau Bird Sanctuary", "免費且輕鬆的自然景點，適合不進峽灣的人。", "Te Anau Bird Sanctuary New Zealand")
    ],
    foodItems: [
      info("午餐盒已包含", "RealNZ Milford Sound day tour", "訂單包含 14 份午餐盒，不需要另外準備午餐；若有飲食禁忌，依業者期限提前確認。", "RealNZ Visitor Centre Te Anau", "已預訂 · 14 份午餐盒"),
      info("早餐前一晚備妥", "Te Anau", "集合時間早，建議前一晚準備簡單早餐與飲水，不依賴當天早上找餐廳。", "FreshChoice Te Anau", "早出發 · 07:10 前報到"),
      info("船上飲品與小吃", "Milford Sound cruise", "船上可購買飲品與小吃，但只接受刷卡、不收現金。", "Milford Sound Visitor Terminal", "船上消費 · Card only")
    ],
    supplyItems: [
      info("FreshChoice 前一晚備妥", "5 Milford Crescent", "前一晚準備早餐、飲水與個人點心，清晨不必臨時找店。", "FreshChoice Te Anau", "住宿附近 · 07:00–20:00"),
      info("雨具、保暖與暈車用品", "Te Anau", "建議攜帶防滑鞋、防水外套、保暖層、防曬、驅蟲用品與個人藥物；山路與遊船容易暈的人先備藥。", "pharmacy Te Anau", "Tour 補給 · 前一晚完成"),
      info("不安排加油", "Te Anau", "今日搭 day tour，沒有露營車往返 Milford 的加油需求。", "Te Anau", "加油提醒 · 無需特別處理")
    ],
    campItems: [
      bookedStay("Te Anau TOP 10 Holiday Park", "連續住宿第二晚，day tour 回到 Te Anau 後可直接休息，不需移動露營車。", "Te Anau TOP 10 Holiday Park", "12/3 · Te Anau")
    ],
    campHeading: "已預定住宿"
  },
  8: {
    primaryItems: [
      info("蒂阿瑙出發", "Te Anau", "橫跨南島南部前往達尼丁，是車程較長的一天。", "Te Anau New Zealand"),
      info("鮑德溫街", "Baldwin Street Dunedin", "抵達達尼丁後拍照打卡世界知名陡街。", "Baldwin Street Dunedin New Zealand"),
      info("達尼丁火車站", "Dunedin Railway Station", "欣賞文藝復興風格建築與市區歷史氛圍。", "Dunedin Railway Station New Zealand")
    ],
    alternativeItems: [
      info("奧維斯頓古宅", "Olveston Historic Home", "想安排室內歷史文化行程的人，可參觀百年前富豪宅邸。", "Olveston Historic Home Dunedin New Zealand"),
      info("Speight's 啤酒廠", "Speight's Brewery", "想體驗在地啤酒文化，可查詢導覽與品飲。", "Speight's Brewery Dunedin New Zealand")
    ],
    foodItems: [
      info("Emerson's Brewery", "Dunedin", "抵達達尼丁後的晚餐/啤酒候選，官方描述 Tuesday-Sunday，D8 Friday 符合。", "Emerson's Brewery Dunedin", "晚餐候選 · 建議訂位"),
      info("No.7 Balmac", "Dunedin", "正式一點的 bistro 選項，週五營業，20 人建議預約。", "No.7 Balmac Dunedin", "晚餐候選 · 官方週五營業"),
      info("Vogel St Kitchen", "Dunedin", "比較適合早午餐或輕食，若抵達時間較早可列入備案。", "Vogel St Kitchen Dunedin", "備案 · 以當日營業為準")
    ],
    supplyItems: [
      info("FreshChoice Te Anau 出發補給", "5 Milford Crescent", "今天車程長，早餐、咖啡、零食與水最好出發前處理好。", "FreshChoice Te Anau", "長途移動 · 07:00–20:00"),
      info("New World Gore 中途休息", "2–8 Irk Street", "中途可上廁所、補咖啡與少量食材，再繼續前往 Dunedin。", "New World Gore", "路上補給 · 07:30–21:00"),
      info("PAK'nSAVE Dunedin 抵達補貨", "86 Hillside Road", "靠近當晚住宿方向，可補 D9 半島日的早餐、飲水與自備點心。", "PAK'nSAVE Dunedin", "主要補給 · 07:00–22:00")
    ],
    campItems: [
      bookedStay("Dunedin Holiday Park & Motels", "達尼丁住宿已完成預訂，鄰近 St Kilda，隔天可由此往返奧塔哥半島。", "Dunedin Holiday Park & Motels", "12/4 · Dunedin")
    ],
    campHeading: "已預定住宿"
  },
  9: {
    primaryItems: [
      info("奧塔哥半島自駕", "Otago Peninsula", "沿著半島公路前往生態景點，沿途海岸景色很漂亮。", "Otago Peninsula New Zealand"),
      info("皇家信天翁中心", "Royal Albatross Centre", "觀賞世界少見的陸地皇家信天翁棲地與導覽。", "Royal Albatross Centre Dunedin New Zealand"),
      info("企鵝保護區導覽", "Penguin Place", "傍晚參加企鵝保護區導覽，近距離觀察野生黃眼企鵝。", "Penguin Place Dunedin New Zealand")
    ],
    alternativeItems: [
      info("拉納克城堡", "Larnach Castle", "不看鳥類或動物的人，可參觀城堡、花園並安排下午茶。", "Larnach Castle Dunedin New Zealand"),
      info("奧塔哥半島海景咖啡", "Otago Peninsula cafes", "想放慢節奏的人，可在半島找海景咖啡或簡短散步。", "Otago Peninsula cafes New Zealand")
    ],
    foodItems: [
      info("自備點心 / 車上輕食", "Dunedin 出發前準備", "半島行程會被信天翁中心與企鵝導覽時間切得比較碎，中午建議以自備麵包、水果、零食與飲水為主。", "supermarket Dunedin", "半島午餐 · 不依賴餐廳"),
      info("Carey's Bay Historic Hotel", "Careys Bay", "若回程走港灣方向，可作為海鮮/酒館備案。", "Careys Bay Historic Hotel", "晚餐備案 · 建議訂位"),
      info("Emerson's Brewery", "Dunedin", "若 D8 沒去，D9 Saturday 也符合官方 Tuesday-Sunday。", "Emerson's Brewery Dunedin", "Dunedin 晚餐 · 建議訂位")
    ],
    supplyItems: [
      info("PAK'nSAVE Dunedin 自備點心", "86 Hillside Road", "半島景點間距離較長，出發前帶好午間點心、飲水與防風衣物。", "PAK'nSAVE Dunedin", "生態日補給 · 07:00–22:00"),
      info("Portobello 小補給", "Portobello", "半島上可小補給或上廁所，但不適合依賴大採買。", "Portobello Otago Peninsula", "小鎮中停 · 選擇有限"),
      info("Z Andy Bay 油量提醒", "333 Andersons Bay Road", "出發前看油量即可；需要時再加，不必為半島行程固定補滿。", "Z Andy Bay Dunedin", "24 小時 · 依實際油量")
    ],
    campItems: [
      bookedStay("Dunedin Holiday Park & Motels", "連續住宿第二晚，半島生態行程結束後直接返回同一住宿。", "Dunedin Holiday Park & Motels", "12/5 · Dunedin")
    ],
    campHeading: "已預定住宿"
  },
  10: {
    primaryItems: [
      info("摩拉基大圓石", "Moeraki Boulders", "北返途中停靠海灘，看神祕圓石並簡短散步。", "Moeraki Boulders New Zealand"),
      info("奧馬魯歷史街區", "Oamaru Victorian Precinct", "中午在維多利亞白石建築街區用餐與散步。", "Oamaru Victorian Precinct New Zealand"),
      info("Steampunk HQ", "Steampunk HQ Oamaru", "帶小孩看會發光噴煙的蒸汽龐克裝置，增加移動日趣味。", "Steampunk HQ Oamaru New Zealand")
    ],
    alternativeItems: [
      info("奧馬魯古董與工藝小店", "Oamaru Victorian Precinct", "同行大人可逛古董書店、羊毛製品與工藝品店。", "Oamaru Victorian Precinct New Zealand"),
      info("Riverside Market 晚餐", "Riverside Market Christchurch", "若回到基督城仍有體力，可安排較豐富的最後晚餐。", "Riverside Market Christchurch New Zealand")
    ],
    foodItems: [
      info("Riverstone Kitchen", "Oamaru / Waitaki", "Oamaru 附近食物停靠點，D10 是 Sunday，出發前要確認當日營業。", "Riverstone Kitchen Oamaru", "午餐候選 · Sunday 需確認"),
      info("Cucina Oamaru", "Oamaru", "Oamaru 鎮上餐廳候選，若 Sunday 有營業可作為午餐。", "Cucina Oamaru", "備案 · Sunday 需確認"),
      info("Formosa Modern Asian Cuisine", "Ashburton", "回 Christchurch 途中 Ashburton 備案，不是 Oamaru 餐廳。", "Formosa Modern Asian Cuisine Ashburton", "回程備案 · 位置在 Ashburton")
    ],
    supplyItems: [
      info("Z Andy Bay 出發油量確認", "333 Andersons Bay Road", "北返距離較長，先確認油量是否足夠；有需要再補，不要求固定加滿。", "Z Andy Bay Dunedin", "24 小時 · 依實際油量"),
      info("New World Oamaru / Ashburton", "Main South Road, Oamaru", "可在 Oamaru 補咖啡與零食；需要較完整採買時也可留到 Ashburton。", "New World Oamaru", "長途中停 · Oamaru 07:00–21:00"),
      info("PAK'nSAVE Papanui 最後補給", "171 Main North Road", "回到基督城後只買最後一晚食物與隔天早餐，避免還車前留下太多食材。", "PAK'nSAVE Papanui", "住宿附近 · 07:00–22:00")
    ],
    campItems: [
      bookedStay("Tasman Holiday Parks - Christchurch", "返回第一晚的住宿，方便整理露營車、行李與隔天還車用品。", "Tasman Holiday Parks Christchurch", "12/6 · 基督城")
    ],
    campHeading: "已預定住宿"
  },
  11: {
    primaryItems: [
      info("露營車最後整理", "Tasman Holiday Parks - Christchurch", "清理車內並依 Maui 合約處理灰水、黑水、燃油與 LPG；Premium Pack 以合約內容為準。", "Tasman Holiday Parks Christchurch", "還車提醒 · 前一晚可先整理"),
      info("Maui Christchurch Airport 還車", "159 Orchard Road", "預留車況檢查、文件與接駁時間；是否補滿燃油與 LPG 依實際租車方案。", "Maui Christchurch Airport 159 Orchard Road", "還車地點 · 159 Orchard Road"),
      info("入住 LyLo Christchurch Airport", "5 Peter Leeming Road", "搭 Maui 接駁回機場後，步行前往 LyLo 入住並整理行李。", "LyLo Christchurch Airport", "已預定 · 12/7")
    ],
    alternativeItems: [
      info("國際南極中心", "International Antarctic Centre", "若入住後時間還早，可安排機場旁的南極體驗館。", "International Antarctic Centre Christchurch New Zealand"),
      info("機場周邊簡餐", "Christchurch Airport restaurants", "不想再進市區的話，可在機場周邊簡單用餐。", "Christchurch Airport restaurants New Zealand")
    ],
    foodItems: [
      info("Little High Eatery", "Christchurch", "若還車後進市區，適合最後聚餐、分頭點餐。", "Little High Eatery Christchurch", "最後聚餐 · 彈性選擇"),
      info("C1 Espresso", "Christchurch", "還車後有空檔可安排咖啡或早午餐，適合小組行動。", "C1 Espresso Christchurch", "咖啡備案 · 以當日營業為準"),
      info("機場周邊簡餐", "Christchurch Airport", "若隔天飛機時間早，留在機場周邊吃簡單一餐最輕鬆。", "Christchurch Airport restaurants", "低壓備案 · 不再進市區")
    ],
    supplyItems: [
      info("先確認 Maui 合約與 Premium Pack", "Tasman Holiday Parks - Christchurch", "燃油與 LPG 是否需要補滿，以當次租車合約和已購方案為準；不要把補滿當成所有人的固定步驟。", "Maui Christchurch Airport", "還車提醒 · 依方案處理"),
      info("Z Sawyers Arms 備用補給點", "530 Sawyers Arms Road", "只有合約要求或油量需要時才停靠，可處理燃油與 LPG SWAP'n'GO。", "Z Sawyers Arms Christchurch", "24 小時 · 視需要停靠"),
      info("Woolworths Spitfire Square", "1 Spitfire Square", "還車後若需買飲水或隔天早餐，可在 LyLo 附近少量補充，不再做大採買。", "Woolworths Spitfire Square", "住宿附近 · 07:00–22:00")
    ],
    campItems: [
      {
        title: "LyLo Christchurch Airport",
        description: "機場周邊住宿已完成預訂；Maui 還車後可搭接駁回機場，再步行前往 LyLo。",
        mapQuery: "LyLo Christchurch Airport",
        meta: "12/7 · 基督城機場",
        status: "已預定"
      }
    ],
    campHeading: "已預定住宿"
  }
};

const regionNames = {
  christchurch: "基督城",
  lake: "湖區雪山",
  queenstown: "皇后鎮周邊",
  fiordland: "峽灣區",
  east: "東岸城市"
};

function mapsUrl(day) {
  const places = day.routePlaces || day.stops.map((stop) => `${stop}, New Zealand`);
  const [origin, ...remaining] = places;
  const destination = remaining.pop() || origin;
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination,
    travelmode: "driving"
  });

  if (remaining.length) {
    params.set("waypoints", remaining.join("|"));
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function mapSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function dayUrl(day) {
  return `days/day-${String(day.day).padStart(2, "0")}.html`;
}

function renderLandingMap() {
  const dayGrid = document.querySelector("#landingDayGrid");
  if (!dayGrid) return;

  dayGrid.innerHTML = "";

  days.forEach((day) => {
    const card = document.createElement("a");
    card.className = "landing-day-card";
    card.href = dayUrl(day);
    card.innerHTML = `
      <span class="landing-day-photo"><img src="${day.image.replace(/^\.\.\//, "")}" alt="${day.title}" width="1536" height="1024" loading="lazy" decoding="async"></span>
      <span class="landing-day-body"><span class="landing-day-meta">D${day.day} · ${day.date}</span><strong>${day.title}</strong><span class="landing-day-highlight">${day.highlight}</span></span>
    `;
    dayGrid.appendChild(card);
  });
}

function renderDayPage() {
  const page = document.querySelector("[data-day-page]");
  if (!page) return;

  const dayNumber = Number(page.dataset.dayPage);
  const day = days.find((item) => item.day === dayNumber);
  if (!day) return;

  document.title = `Day ${day.day} · ${day.title}`;
  const heroImage = document.querySelector("#dayHeroImage");
  heroImage.src = day.image;
  heroImage.alt = day.title;
  document.querySelector("#detailDate").textContent = `${day.date} · Day ${day.day} · ${regionNames[day.region]}`;
  document.querySelector("#detailTitle").textContent = day.title;
  document.querySelector("#mapsLink").href = mapsUrl(day);

  const primaryList = document.querySelector("#dayPrimaryList");
  if (primaryList) {
    const structuredDay = { ...structuredDays[day.day], ...day };
    document.querySelector("#dayCampHeading").textContent = structuredDay.campHeading || day.stayType || "營地建議";
    renderInfoList(primaryList, structuredDay.primaryItems || []);
    renderInfoList(document.querySelector("#dayAlternativeList"), structuredDay.alternativeItems || []);
    renderInfoList(document.querySelector("#dayFoodList"), structuredDay.foodItems || []);
    renderInfoList(document.querySelector("#daySupplyList"), structuredDay.supplyItems || []);
    toggleOptionalSection("#dayFoodSection", structuredDay.foodItems);
    toggleOptionalSection("#daySupplySection", structuredDay.supplyItems);
    document.querySelectorAll('.section-nav a').forEach((link) => {
      link.hidden = Boolean(document.querySelector(link.getAttribute('href'))?.hidden);
    });
    renderCampList(document.querySelector("#dayCampList"), structuredDay.campItems || []);
  } else {
    document.querySelector("#detailMain").textContent = day.main;
    document.querySelector("#detailStay").textContent = day.stay;
    document.querySelector("#detailAlt").textContent = day.alt;
    document.querySelector("#stayHeading").textContent = day.stayType;
  }

  const routeStrip = document.querySelector("#routeStrip");
  routeStrip.innerHTML = "";
  day.stops.forEach((stop, index) => {
    const chip = document.createElement("a");
    chip.href = mapSearchUrl(day.routePlaces?.[index] || `${stop}, New Zealand`);
    chip.target = "_blank";
    chip.rel = "noreferrer";
    chip.className = "route-stop";
    chip.textContent = stop;
    routeStrip.appendChild(chip);
  });

  const previous = days.find((item) => item.day === day.day - 1);
  const next = days.find((item) => item.day === day.day + 1);
  const pager = document.querySelector("#dayPager");
  pager.innerHTML = `
    <a class="map-button pager-map" href="${mapsUrl(day)}" target="_blank" rel="noreferrer">開啟地圖</a>
    ${previous ? `<a class="ghost-button" href="day-${String(previous.day).padStart(2, "0")}.html">上一天</a>` : `<span class="pager-disabled" aria-disabled="true">上一天</span>`}
    ${next ? `<a class="ghost-button" href="day-${String(next.day).padStart(2, "0")}.html">下一天</a>` : `<a class="ghost-button" href="../index.html">回到首頁</a>`}
  `;
}

function renderInfoList(container, items) {
  if (!container) return;
  container.innerHTML = items.map((item) => `
    <article class="info-item">
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      <a href="${mapSearchUrl(item.mapQuery)}" target="_blank" rel="noreferrer" aria-label="${item.title}：地圖資訊">地圖 ↗</a>
      <span>${item.meta ? `${item.location} · ${item.meta}` : item.location}</span>
    </article>
  `).join("");
}

function toggleOptionalSection(selector, items) {
  const section = document.querySelector(selector);
  if (!section) return;
  section.hidden = !items || items.length === 0;
}

function renderCampList(container, items) {
  if (!container) return;
  container.innerHTML = items.map((item) => `
    <article class="camp-item">
      <div>
        <div class="camp-item__heading">
          <h3>${item.title}</h3>
          ${item.status ? `<span class="booking-status">${item.status}</span>` : ""}
        </div>
        <p>${item.description}</p>
        ${item.meta ? `<span class="camp-item__meta">${item.meta}</span>` : ""}
      </div>
      <a href="${mapSearchUrl(item.mapQuery)}" target="_blank" rel="noreferrer" aria-label="${item.title}：地圖資訊">地圖 ↗</a>
    </article>
  `).join("");
}

function setupItineraryPrint() {
  const button = document.querySelector("#printItinerary");
  const container = document.querySelector("#printItineraryContent");
  if (!button || !container) return;

  function textElement(tag, text, className) {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    return element;
  }

  function mapQr(url, label, isRoute = false) {
    const figure = document.createElement("figure");
    figure.className = isRoute ? "print-qr print-qr--route" : "print-qr";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("aria-label", label);
    const qr = qrcode(0, "M");
    qr.addData(url);
    qr.make();
    // Four modules of quiet space on every side, independent of QR density.
    link.innerHTML = qr.createSvgTag(2, 8);
    figure.append(link, textElement("figcaption", label));
    return figure;
  }

  button.addEventListener("click", () => {
    const fragment = document.createDocumentFragment();
    days.forEach((day) => {
      const structuredDay = { ...structuredDays[day.day], ...day };
      const page = document.createElement("article");
      page.className = "print-day";
      const header = document.createElement("header");
      header.className = "print-day-header";
      const heading = document.createElement("div");
      heading.append(
        textElement("p", `${day.date} · Day ${day.day} · ${regionNames[day.region]}`),
        textElement("h1", day.title),
        textElement("p", day.stops.join(" → "))
      );
      header.append(heading, mapQr(mapsUrl(day), "本日路線", true));
      page.append(header);

      const grid = document.createElement("div");
      grid.className = "print-day-grid";
      const sections = [
        ["主要行程", structuredDay.primaryItems, "print-section--primary"],
        ["其他替代方案", structuredDay.alternativeItems, "print-section--alternative"],
        ["美食", structuredDay.foodItems, "print-section--food"],
        ["採買及加油建議", structuredDay.supplyItems, "print-section--supply"],
        [structuredDay.campHeading || day.stayType || "營地建議", structuredDay.campItems, "print-section--wide"]
      ];
      sections.forEach(([title, items, className]) => {
        if (!items || !items.length) return;
        const section = document.createElement("section");
        section.className = className;
        section.append(textElement("h2", title));
        items.forEach((item) => {
          const row = document.createElement("article");
          row.className = "print-item";
          const copy = document.createElement("div");
          copy.append(textElement("h3", item.title), textElement("p", item.description));
          const details = [item.location, item.meta, item.status].filter(Boolean);
          if (details.length) copy.append(textElement("p", details.join(" · "), "print-item-details"));
          row.append(copy);
          if (item.mapQuery) row.append(mapQr(mapSearchUrl(item.mapQuery), item.location || item.title));
          section.append(row);
        });
        grid.append(section);
      });
      page.append(grid);
      fragment.append(page);
    });
    container.replaceChildren(fragment);
    window.print();
  });
}

renderLandingMap();
renderDayPage();
setupItineraryPrint();

function info(title, location, description, mapQuery, meta) {
  return { title, location, description, mapQuery, meta };
}

function camp(title, description, mapQuery) {
  return { title, description, mapQuery };
}

function bookedStay(title, description, mapQuery, meta) {
  return { title, description, mapQuery, meta, status: "已預定" };
}
