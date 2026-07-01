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
    stops: ["基督城機場", "基督城 TOP 10 露營地", "市區超市"],
    main: "下午兩點抵達基督城機場，出關後前往租車公司辦理露營車取車手續。隨後直接開車前往市區的大型超市，如 Pak'nSave 或 New World 進行大採買，將車上冰箱塞滿食材。第一天晚上在基督城營地過夜，熟悉露營車的設備與操作。",
    stay: "Christchurch TOP 10 Holiday Park 或 North South Holiday Park。",
    stayType: "營地建議",
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
        title: "Pak'nSave 大採買",
        location: "PAK'nSAVE Riccarton",
        description: "補齊第一段路程的食材、飲水、早餐、零食與基本耗材，讓露營車冰箱先滿血上路。",
        mapQuery: "PAK'nSAVE Riccarton Christchurch New Zealand"
      }
    ],
    alternativeItems: [
      {
        title: "分組採買與車上安頓",
        location: "PAK'nSAVE Riccarton",
        description: "一組人進超市採買，另一組整理行李、熟悉車內收納與兒童座椅配置。",
        mapQuery: "PAK'nSAVE Riccarton Christchurch New Zealand"
      },
      {
        title: "先到營地讓小孩放電",
        location: "Christchurch TOP 10 Holiday Park",
        description: "若長途飛行後需要休息，可以讓部分同行者先到營地使用公共設施、遊戲區或廚房。",
        mapQuery: "Christchurch TOP 10 Holiday Park New Zealand"
      },
      {
        title: "機場附近簡單晚餐",
        location: "Christchurch Airport 周邊",
        description: "若取車和採買時間拉長，可以在機場周邊簡單用餐，降低第一天移動壓力。",
        mapQuery: "Christchurch Airport restaurants New Zealand"
      }
    ],
    campItems: [
      {
        title: "Christchurch TOP 10 Holiday Park",
        description: "設施完整、適合第一晚熟悉露營車，家庭同行也比較友善。",
        mapQuery: "Christchurch TOP 10 Holiday Park New Zealand"
      },
      {
        title: "North South Holiday Park",
        description: "靠近機場，隔天出發與最後回程整備都方便。",
        mapQuery: "North South Holiday Park Christchurch New Zealand"
      },
      {
        title: "Amber Kiwi Holiday Park",
        description: "位於市區南側，若想離市中心和補給點更近，可以列入備案。",
        mapQuery: "Amber Kiwi Holiday Park Christchurch New Zealand"
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
    stops: ["基督城", "特卡波湖營地"],
    main: "上午採取自由彈性方案。可以選擇開車進基督城市區，帶小孩去 Riverside Market 享用早午餐，並到 Margaret Mahy 兒童公園盡情放電；或者提早出發前往特卡波湖，提早抵達湖邊散步、欣賞藍色湖水與好牧羊人教堂的午後美景。",
    stay: "Lake Tekapo Motels & Holiday Park。",
    stayType: "營地建議",
    alt: "不去兒童公園的旅伴可以安排基督城市區復古觀光電車，或在雅芳河畔咖啡廳享受悠閒時光。若提早抵達特卡波湖，大人們可以預約 Tekapo Springs 泡露天溫泉。",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=82"
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
    stops: ["特卡波湖", "普卡基湖遊客中心", "庫克山胡克谷步道", "Glentanner 露營地"],
    main: "早上沿著夢幻的普卡基湖北上開往庫克山。下午挑戰南島最出名的胡克谷步道，單程約 1.5 到 2 小時，沿途地勢平緩，會經過三座吊橋，終點可近距離觀賞冰川湖與庫克山主峰。",
    stay: "Glentanner Holiday Park Centre，庫克山區域首選的優質充電營地，風景絕佳。",
    stayType: "營地建議",
    alt: "若同行長輩或大人不想走太遠，可留在隱士飯店 Hermitage Hotel 的景觀餐廳喝下午茶、遠眺雪山；或者自費報名直升機高空冰河降落體驗。",
    image: "https://images.unsplash.com/photo-1480497490787-505ec076689f?auto=format&fit=crop&w=1400&q=82"
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
    stops: ["Glentanner 露營地", "High Country Salmon", "瓦納卡 Puzzling World", "瓦納卡營地"],
    main: "早上輕鬆離開庫克山，順路在特威澤爾的 High Country Salmon 享用鮭魚早午餐、餵魚。隨後翻越林迪斯山口前往瓦納卡。下午帶小孩前往 Puzzling World，傍晚入住瓦納卡湖畔營地，去拍著名的瓦納卡孤獨樹。",
    stay: "Hampshire Holiday Parks - Wanaka 或 Wanaka TOP 10 Holiday Park。",
    stayType: "營地建議",
    alt: "不想去迷宮的大人，可以提早前往瓦納卡湖畔，沿著湖濱步道散步、拍照，或者在鎮上挑一家面對湖景的景觀咖啡廳享用下午茶。",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=82"
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
    stops: ["瓦納卡營地", "克倫威爾", "箭鎮", "皇后鎮營地"],
    main: "早上離開瓦納卡，開車前往水果小鎮克倫威爾。中午在當地特色酒莊或精釀啤酒廠喝杯在地啤酒、享用輕食午餐。下午前往箭鎮歷史街區散步，欣賞古老金礦小鎮風情與魔戒取景的編織河道。",
    stay: "Queenstown TOP 10 Holiday Park 或 Creekside Holiday Park。",
    stayType: "營地建議",
    alt: "若不想去箭鎮，可以去皇后鎮市區逛街、漫步瓦卡蒂普湖畔、朝聖 Fergburger；也可以自行前往 Skyline 纜車，在山頂景觀台喝下午茶看卓越山脈大景。",
    image: "https://images.unsplash.com/photo-1512017615494-fdf6146235ff?auto=format&fit=crop&w=1400&q=82"
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
    stops: ["皇后鎮營地", "Deer Park Heights", "皇后鎮市區", "蒂阿瑙 TOP 10 露營地"],
    main: "上午自駕前往 Deer Park Heights，帶小孩在車內沿著山丘穿梭，餵食野生小羊、駝羊、氂牛，並欣賞皇后鎮高空全景。中午回到皇后鎮市區享用午餐，隨後啟程開往蒂阿瑙，晚上參加藍光螢火蟲洞神祕之旅。",
    stay: "Te Anau TOP 10 Holiday Park，地理位置方便，走路即可到達鎮上餐廳與碼頭。",
    stayType: "營地建議",
    alt: "不想看動物的旅伴，上午可以留在皇后鎮市區慢活。晚上若不參加螢火蟲洞，可以在蒂阿瑙湖畔散步觀賞落日，或前往峽灣電影院看峽灣空拍紀錄片。",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=82"
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
    stops: ["蒂阿瑙營地", "米佛峽灣遊船碼頭", "蒂阿瑙營地"],
    main: "清晨出發開往世界奇景米佛峽灣。米佛公路沿途風景震撼，但山路和單向隧道較多，露營車單程建議抓 2.5 到 3 小時。抵達後搭乘巡航船深入峽灣，近距離感受萬年冰川瀑布與尋找海豹。",
    stay: "續住蒂阿瑙付費營地。",
    stayType: "營地建議",
    alt: "若有同行者不想舟車勞頓，可以留在蒂阿瑙小鎮放空。白天可以沿著 Kepler Track 入口處的平緩森林慢步，或去免費的蒂阿瑙鳥類保護區。",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=82"
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
    stops: ["蒂阿瑙營地", "鮑德溫街", "達尼丁火車站", "Dunedin Aaron Lodge 露營地"],
    main: "橫跨南島南部，前往充滿蘇格蘭復古風情的東岸第一大城達尼丁。下午造訪世界最陡的街道 Baldwin Street 拍照打卡，並參觀歷史悠久、極具文藝復興風格的達尼丁火車站。",
    stay: "Dunedin Aaron Lodge TOP 10 Holiday Park。",
    stayType: "營地建議",
    alt: "不愛戶外走動的大人可以參觀奧維斯頓古宅，欣賞百年前的富豪生活；或者前往 Speight's 啤酒廠參加導覽，品嚐在地精釀啤酒。",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=82"
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
    main: "開車沿著美麗的奧塔哥半島公路一路開到盡頭，造訪 Royal Albatross Centre 觀賞世界唯一的陸地皇家信天翁生態，接著在傍晚參加企鵝保護中心導覽，近距離觀察野生黃眼企鵝。",
    stay: "續住達尼丁付費營地。",
    stayType: "營地建議",
    alt: "不打算看鳥類和動物的同行大人，可以提早在拉納克城堡下車，參觀英式花園，並在城堡內的優雅宴會廳裡享用正統英式下午茶。",
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=1400&q=82"
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
    stops: ["達尼丁營地", "摩拉基大圓石", "奧馬魯歷史街區", "基督城 North South 露營地"],
    main: "今天北返基督城，是一段較長的路程，因此拆成多個停靠點。中途停靠摩拉基大圓石看海灘上的神祕圓石。中午抵達奧馬魯，在維多利亞白石建築街區享用午餐，並帶小孩去蒸汽龐克總部。",
    stay: "North South Holiday Park，靠近機場與隔天的還車地點，方便整備。",
    stayType: "營地建議",
    alt: "中停奧馬魯時，同行的大人可以在歷史街區逛古董書店、手工羊毛製品店及文青工藝品店。抵達基督城後，若還有體力，可以去 Riverside Market 吃晚餐。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=82"
  },
  {
    day: 11,
    date: "12/7",
    title: "基督城還車 → 機場接送住宿",
    region: "christchurch",
    coords: { x: 77, y: 30 },
    labelCoords: { x: 88, y: 23 },
    highlight: "飛機",
    icon: "✈️",
    stops: ["基督城 North South 露營地", "租車公司還車點", "Sudima 機場飯店"],
    main: "早上做好露營車的最後清理，排空灰水與黑水、加滿油與瓦斯，隨後前往租車公司指定地點辦理還車手續。交車後搭乘接駁車前往機場附近飯店辦理入住，洗去多日自駕的疲憊。",
    stay: "Sudima Christchurch Airport 或 Commodore Airport Hotel，皆提供免費且密集的機場往返接送服務。",
    stayType: "住宿建議",
    alt: "若辦理完入住後時間還早，可以步行前往機場旁邊的國際南極中心。裡面有極地風暴模擬、全地形越野車，還能看到小藍企鵝與哈士奇。",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=82"
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
    campItems: [
      camp("Lake Tekapo Motels & Holiday Park", "湖邊位置方便，適合散步到湖岸與教堂區域。", "Lake Tekapo Motels & Holiday Park New Zealand"),
      camp("Lakes Edge Holiday Park", "同樣靠近湖邊，旺季可作為備案查詢。", "Lakes Edge Holiday Park Lake Tekapo New Zealand")
    ]
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
    campItems: [
      camp("Glentanner Holiday Park Centre", "庫克山區域露營車友善營地，景色開闊，適合作為充電與補給點。", "Glentanner Holiday Park Centre New Zealand"),
      camp("White Horse Hill Campground", "更靠近步道口，但設施較基本，適合想貼近庫克山的人。", "White Horse Hill Campground Mount Cook New Zealand")
    ]
  },
  4: {
    primaryItems: [
      info("庫克山輕鬆出發", "Glentanner Holiday Park Centre", "早上不用太趕，從庫克山區域往瓦納卡方向移動。", "Glentanner Holiday Park Centre New Zealand"),
      info("鮭魚早午餐", "High Country Salmon", "順路在特威澤爾享用鮭魚餐、餵魚，作為移動日的輕鬆中停。", "High Country Salmon Twizel New Zealand"),
      info("Puzzling World", "Puzzling World Wanaka", "下午安排迷宮與視覺錯覺展，適合小孩放電也適合大人拍照。", "Puzzling World Wanaka New Zealand")
    ],
    alternativeItems: [
      info("瓦納卡湖畔散步", "Lake Wanaka", "不進 Puzzling World 的同行者，可以直接到湖邊散步看景。", "Lake Wanaka New Zealand"),
      info("瓦納卡孤獨樹", "That Wanaka Tree", "傍晚可安排拍照與湖邊放空，是瓦納卡代表性景點。", "That Wanaka Tree New Zealand"),
      info("湖景咖啡廳", "Wanaka town centre", "想更慢一點的人，可以在鎮上找湖景咖啡廳休息。", "Wanaka town centre New Zealand")
    ],
    campItems: [
      camp("Hampshire Holiday Parks - Wanaka", "離湖岸與鎮上近，適合傍晚散步和補給。", "Hampshire Holiday Parks Wanaka New Zealand"),
      camp("Wanaka TOP 10 Holiday Park", "設施完整，露營車友善，是瓦納卡常見選擇。", "Wanaka TOP 10 Holiday Park New Zealand")
    ]
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
    campItems: [
      camp("Queenstown TOP 10 Holiday Park", "皇后鎮周邊設施完整的露營車選項。", "Queenstown TOP 10 Holiday Park New Zealand"),
      camp("Queenstown Creekside Holiday Park", "距離市區較方便，適合想接近餐廳與湖畔的人。", "Queenstown Creekside Holiday Park New Zealand")
    ]
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
    campItems: [
      camp("Te Anau TOP 10 Holiday Park", "位置方便，走路可到鎮上餐廳與碼頭。", "Te Anau TOP 10 Holiday Park New Zealand"),
      camp("Tasman Holiday Parks - Te Anau", "蒂阿瑙另一個常見露營車選項，可作為備案。", "Tasman Holiday Parks Te Anau New Zealand")
    ]
  },
  7: {
    primaryItems: [
      info("清晨前往米佛峽灣", "Te Anau", "早出發，預留米佛公路山路、停靠點與單向隧道時間。", "Te Anau New Zealand"),
      info("米佛公路沿途", "Milford Road", "沿途可視天氣停靠湖泊、山谷和瀑布，但露營車移動要抓寬鬆時間。", "Milford Road New Zealand"),
      info("米佛峽灣遊船", "Milford Sound Visitor Terminal", "搭船深入峽灣看瀑布、峭壁與野生動物，是這天的主力體驗。", "Milford Sound Visitor Terminal New Zealand")
    ],
    alternativeItems: [
      info("蒂阿瑙小鎮休息", "Te Anau town centre", "不想長時間拉車的同行者，可以留在鎮上慢慢休息。", "Te Anau town centre New Zealand"),
      info("Kepler Track 平緩段", "Kepler Track car park", "可安排入口附近的平緩森林步道，不需要走完整步道。", "Kepler Track car park Te Anau New Zealand"),
      info("蒂阿瑙鳥類保護區", "Te Anau Bird Sanctuary", "免費且輕鬆的自然景點，適合不進峽灣的人。", "Te Anau Bird Sanctuary New Zealand")
    ],
    campItems: [
      camp("Te Anau TOP 10 Holiday Park", "續住可減少收車與換營地壓力。", "Te Anau TOP 10 Holiday Park New Zealand"),
      camp("Tasman Holiday Parks - Te Anau", "若前一晚未訂到 TOP 10，可作為備案。", "Tasman Holiday Parks Te Anau New Zealand")
    ]
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
    campItems: [
      camp("Dunedin Aaron Lodge TOP 10 Holiday Park", "原規劃營地，適合達尼丁停留與隔天前往奧塔哥半島。", "Dunedin Aaron Lodge TOP 10 Holiday Park New Zealand"),
      camp("Dunedin Holiday Park", "靠近海岸區的備選營地，可依訂房狀況比較。", "Dunedin Holiday Park New Zealand")
    ]
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
    campItems: [
      camp("Dunedin Aaron Lodge TOP 10 Holiday Park", "續住可減少移動，活動結束後直接回營地休息。", "Dunedin Aaron Lodge TOP 10 Holiday Park New Zealand"),
      camp("Dunedin Holiday Park", "達尼丁市區周邊備案，方便隔天北返。", "Dunedin Holiday Park New Zealand")
    ]
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
    campItems: [
      camp("North South Holiday Park", "靠近機場與隔天還車點，方便整理車輛與行李。", "North South Holiday Park Christchurch New Zealand"),
      camp("Christchurch TOP 10 Holiday Park", "若想設施更完整，也可選擇基督城 TOP 10。", "Christchurch TOP 10 Holiday Park New Zealand")
    ]
  },
  11: {
    primaryItems: [
      info("露營車最後整理", "North South Holiday Park", "清理車內、排空灰水黑水、加滿油與瓦斯，準備還車。", "North South Holiday Park Christchurch New Zealand"),
      info("辦理還車", "Christchurch campervan rental return", "依租車公司指定地點交車，預留檢查、文件與接駁時間。", "Christchurch campervan rental return airport New Zealand"),
      info("入住機場飯店", "Sudima Christchurch Airport", "還車後搭接駁或步行到機場周邊飯店，洗澡休息整理行李。", "Sudima Christchurch Airport New Zealand")
    ],
    alternativeItems: [
      info("國際南極中心", "International Antarctic Centre", "若入住後時間還早，可安排機場旁的南極體驗館。", "International Antarctic Centre Christchurch New Zealand"),
      info("機場周邊簡餐", "Christchurch Airport restaurants", "不想再進市區的話，可在機場周邊簡單用餐。", "Christchurch Airport restaurants New Zealand")
    ],
    campItems: [
      camp("Sudima Christchurch Airport", "機場旁住宿，接駁方便，適合隔天搭機。", "Sudima Christchurch Airport New Zealand"),
      camp("Commodore Airport Hotel", "另一個機場周邊舒適住宿選項，也提供機場接送。", "Commodore Airport Hotel Christchurch New Zealand")
    ],
    campHeading: "住宿建議"
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
  const query = `${day.stops.join(" to ")}, New Zealand`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
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
      <span class="day-card__num">D${day.day}</span>
      <span>
        <strong>${day.title}</strong>
        <span>${day.date} · ${day.highlight}</span>
      </span>
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
  document.querySelector("#dayHeroImage").style.backgroundImage = `linear-gradient(180deg, rgba(22, 33, 31, 0.04), rgba(22, 33, 31, 0.36)), url("${day.image}")`;
  document.querySelector("#detailDate").textContent = `${day.date} · Day ${day.day} · ${regionNames[day.region]}`;
  document.querySelector("#detailTitle").textContent = day.title;
  document.querySelector("#mapsLink").href = mapsUrl(day);

  const primaryList = document.querySelector("#dayPrimaryList");
  if (primaryList) {
    const structuredDay = { ...structuredDays[day.day], ...day };
    document.querySelector("#dayCampHeading").textContent = structuredDay.campHeading || day.stayType || "營地建議";
    renderInfoList(primaryList, structuredDay.primaryItems || []);
    renderInfoList(document.querySelector("#dayAlternativeList"), structuredDay.alternativeItems || []);
    renderCampList(document.querySelector("#dayCampList"), structuredDay.campItems || []);
  } else {
    document.querySelector("#detailMain").textContent = day.main;
    document.querySelector("#detailStay").textContent = day.stay;
    document.querySelector("#detailAlt").textContent = day.alt;
    document.querySelector("#stayHeading").textContent = day.stayType;
  }

  const routeStrip = document.querySelector("#routeStrip");
  routeStrip.innerHTML = "";
  day.stops.forEach((stop) => {
    const chip = document.createElement("span");
    chip.className = "route-stop";
    chip.textContent = stop;
    routeStrip.appendChild(chip);
  });

  const previous = days.find((item) => item.day === day.day - 1);
  const next = days.find((item) => item.day === day.day + 1);
  const pager = document.querySelector("#dayPager");
  pager.innerHTML = `
    ${previous ? `<a class="ghost-button" href="day-${String(previous.day).padStart(2, "0")}.html">上一天</a>` : `<span></span>`}
    ${next ? `<a class="map-button" href="day-${String(next.day).padStart(2, "0")}.html">下一天</a>` : `<a class="map-button" href="../index.html">回到首頁</a>`}
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
      <a href="${mapSearchUrl(item.mapQuery)}" target="_blank" rel="noreferrer">地圖資訊</a>
      <span>${item.location}</span>
    </article>
  `).join("");
}

function renderCampList(container, items) {
  if (!container) return;
  container.innerHTML = items.map((item) => `
    <article class="camp-item">
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      <a href="${mapSearchUrl(item.mapQuery)}" target="_blank" rel="noreferrer">地圖資訊</a>
    </article>
  `).join("");
}

renderLandingMap();
renderDayPage();

function info(title, location, description, mapQuery) {
  return { title, location, description, mapQuery };
}

function camp(title, description, mapQuery) {
  return { title, description, mapQuery };
}
