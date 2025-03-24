//クイズのtype
export type Quiz = {
  id: number;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  description: string;
};

//クイズ配列
const quizList: Quiz[] = [
  {
    id: 1,
    correct_answer: "マロリー",
    incorrect_answers: ["ヒラヤマ", "スミスミ", "ロウロウ"],
    question:
      "「なぜ山に登るのか」と問われ「そこに山があるから」と答えた、有名な登山家は誰でしょう？",
    description:
      "ジョージ・マロリーは、1924年にエベレスト登頂を目指し、行方不明になったことで有名です。",
  },
  {
    id: 2,
    correct_answer: "アンタレス",
    incorrect_answers: ["ウルナイル", "デネボラス", "イルタイル"],
    question:
      "ギリシャ語で「火星に対抗するもの」という意味の名を持つ、さそりの心臓に赤く輝くさそり座のアルファ星は何でしょう？",
    description: "",
  },
  {
    id: 3,
    correct_answer: "ローマじ",
    incorrect_answers: ["かナ", "かンジ", "アルファベット"],
    question:
      "A、B、Cなどのアルファベットを用いて日本語の音を表記したものを何という？",
    description: "ローマ字",
  },
  {
    id: 4,
    correct_answer: "した",
    incorrect_answers: ["しょうちょう", "かんぞう", "たんのう"],
    question: "焼肉の部位で「牛タン」といえば、牛のどの部分の肉？",
    description: "舌",
  },
  {
    id: 5,
    correct_answer: "アップル",
    incorrect_answers: ["インテル", "グーグル", "マイクロソフト"],
    question: "MacBook、iMac、iPhoneといえばどこのメーカーの製品？",
    description: "アップル",
  },
  {
    id: 6,
    correct_answer: "ブラック",
    incorrect_answers: ["ホワイト", "ブルー", "グリーン"],
    question:
      "社員にパワハラをしたり過重労働を強制したりする企業のことを、俗に何企業という？",
    description: "ブラック企業",
  },
  {
    id: 7,
    correct_answer: "だざいおさむ",
    incorrect_answers: ["かわばたやすなり", "みしまゆきお", "なつめそうせき"],
    question: "『斜陽』『人間失格』などの作品を残した作家は？",
    description: "太宰治",
  },
  {
    id: 8,
    correct_answer: "てんしん",
    incorrect_answers: ["ぎょうざ", "はるまき", "チャーハン"],
    question:
      "朝食や間食として食べられる、シューマイやあんまんなどの軽い中華料理のことを何という？",
    description: "点心",
  },
  {
    id: 9,
    correct_answer: "サハラ",
    incorrect_answers: ["ゴビ", "カラハリ", "タクラマカン"],
    question: "アフリカ大陸北部に位置する、世界最大の砂漠は何砂漠？",
    description: "サハラ砂漠",
  },
  {
    id: 10,
    correct_answer: "てつ",
    incorrect_answers: ["きん", "ぎん", "どう"],
    question:
      "イソップ童話の『金の斧』で、きこりが誤って川に落としてしまったのは何で出来た斧？",
    description: "鉄",
  },
  {
    id: 11,
    correct_answer: "ジンベエザメ",
    incorrect_answers: ["サメ", "クジラ", "イルカ"],
    question:
      "学名を「リンコドン・ティプス」という、現存する世界最大の魚類は？",
    description: "ジンベエザメ",
  },
  {
    id: 12,
    correct_answer: "ノミ",
    incorrect_answers: ["アリ", "ハチ", "カ"],
    question:
      "夫よりも妻のほうが体が大きい夫婦のことを指す言葉は「何の夫婦」？",
    description: "ノミ",
  },
  {
    id: 13,
    correct_answer: "しんおう",
    incorrect_answers: ["しんげん", "しんてん", "しんかん"],
    question: "地震の震源の真上にある地表上の点を何という？",
    description: "震央",
  },
  {
    id: 14,
    correct_answer: "すきや",
    incorrect_answers: ["なかう", "まつや", "よしのや"],
    question:
      "ねぎ玉牛丼、おろしぽん酢牛丼、とろ～り3種のチーズ牛丼などのメニューがある牛丼チェーン店は？",
    description: "すき家",
  },
  {
    id: 15,
    correct_answer: "ほうこう",
    incorrect_answers: ["しんこう", "けんこう", "せいこう"],
    question:
      "武士の世界で、主君が家臣に与える「御恩」に対し、家臣が主君に奉仕することを指した言葉は？",
    description: "奉公",
  },
  {
    id: 16,
    correct_answer: "144",
    incorrect_answers: ["100", "200", "300"],
    question: "「鉛筆1グロス」といえば、鉛筆何本のこと？",
    description: "144本",
  },
  {
    id: 17,
    correct_answer: "きい",
    incorrect_answers: ["ちゅうごく", "とうほく", "かんとう"],
    question: "奈良県や和歌山県などを含む、日本の半島は「何半島」？",
    description: "紀伊半島",
  },
  {
    id: 18,
    correct_answer: "ラグビー",
    incorrect_answers: ["サッカー", "バスケットボール", "バレーボール"],
    question: "7人制、10人制、15人制などの種類があるスポーツは？",
    description: "ラグビー",
  },
  {
    id: 19,
    correct_answer: "mm",
    incorrect_answers: ["cm", "m", "km"],
    question: "気象情報において、降水量を表す単位は？",
    description: "mm",
  },
  {
    id: 20,
    correct_answer: "けんぺいりつ",
    incorrect_answers: ["ようせきりつ", "ひようりつ", "けんせつりつ"],
    question: "建物の敷地面積に対する建築面積の割合のことを何という？",
    description: "建蔽率",
  },
  {
    id: 21,
    correct_answer: "けいろうのひ",
    incorrect_answers: ["しゅんぶんのひ", "しゅうぶんのひ", "たいいくのひ"],
    question:
      "発祥地は兵庫県多可郡多可町。現在では9月の第3月曜日にある祝日は？",
    description: "敬老の日",
  },
  {
    id: 22,
    correct_answer: "げんだいぶん",
    incorrect_answers: ["こてん", "えいご", "すうがく"],
    question:
      "タレントとして人気の東進ハイスクール講師・林修が担当している教科は？",
    description: "現代文",
  },
  {
    id: 23,
    correct_answer: "しん",
    incorrect_answers: ["はん", "かん", "とう"],
    question: "紀元前221年に史上初めて中国を統一した王朝は？",
    description: "秦",
  },
  {
    id: 24,
    correct_answer: "マサチューセッツ",
    incorrect_answers: ["ニューヨーク", "カリフォルニア", "テキサス"],
    question: "アメリカの大都市・ボストンがある州は何州？",
    description: "マサチューセッツ州",
  },
  {
    id: 25,
    correct_answer: "せきがいせん",
    incorrect_answers: ["こうせん", "ちょうおんぱ", "しがいせん"],
    question: "アルファベット2文字で「IR」と略される電磁波は？",
    description: "赤外線",
  },
  {
    id: 26,
    correct_answer: "シューベルト",
    incorrect_answers: ["ベートーベン", "モーツァルト", "バッハ"],
    question: "歌曲『魔王』や交響曲『未完成』で知られる作曲家は？",
    description: "シューベルト",
  },
  {
    id: 27,
    correct_answer: "あえん",
    incorrect_answers: ["てつ", "どう", "ぎん"],
    question:
      "鉄板にメッキしたものはトタンになり、銅との合金は黄銅になる金属は？",
    description: "亜鉛",
  },
  {
    id: 28,
    correct_answer: "3",
    incorrect_answers: ["2", "4", "5"],
    question:
      "一般的なトランペットに、音程調節のためのピストンバルブはいくつついている？",
    description: "3つ",
  },
  {
    id: 29,
    correct_answer: "みそしる",
    incorrect_answers: ["すましじる", "おすいもの", "しるもの"],
    question:
      "より丁寧には「御御御付(おみおつけ)」といわれるものを、普通は何という？",
    description: "味噌汁",
  },
  {
    id: 30,
    correct_answer: "おうみじんぐう",
    incorrect_answers: ["いせじんぐう", "かしわじんぐう", "ふしみいなり"],
    question: "毎年競技かるたの名人位・クイーン位決定戦が開催される神社は？",
    description: "近江神宮",
  },
  {
    id: 31,
    correct_answer: "25",
    incorrect_answers: ["20", "30", "40"],
    question: "周囲が100mの円周上に4m間隔で杭を打つとき、必要な杭の本数は？",
    description: "25本",
  },
  {
    id: 32,
    correct_answer: "とわだこ",
    incorrect_answers: ["おおまがりこ", "しんじこ", "びわこ"],
    question: "青森県を流れる奥入瀬川の源流となっている湖は？",
    description: "十和田湖",
  },
  {
    id: 33,
    correct_answer: "いささか",
    incorrect_answers: ["なみへい", "ふぐた", "たらお"],
    question: "アニメ『サザエさん』で、磯野家の隣に住んでいるのは何家？",
    description: "伊佐坂家",
  },
  {
    id: 34,
    correct_answer: "ぜんごうオープン",
    incorrect_answers: [
      "うぃんぶるどん",
      "ふれんちおーぷん",
      "ゆーえすおーぷん",
    ],
    question: "テニス四大大会のうち、1年で最初に行われるのは？",
    description: "全豪オープン",
  },
  {
    id: 35,
    correct_answer: "アブラナ",
    incorrect_answers: ["ナス", "キク", "バラ"],
    question: "茹でて食べる野菜であるカリフラワーとブロッコリーは、共に何科？",
    description: "アブラナ科",
  },
  {
    id: 36,
    correct_answer: "プラド",
    incorrect_answers: ["ルーブル", "メトロポリタン", "ナショナル"],
    question:
      "ベラスケスの『ラス・メニーナス』やゴヤの『裸のマハ』などを収蔵する、スペインの美術館は何美術館？",
    description: "プラド美術館",
  },
  {
    id: 37,
    correct_answer: "20",
    incorrect_answers: ["18", "21", "25"],
    question: "年が若いことを指す「弱冠」とは本来、何歳の男子のこと？",
    description: "20歳",
  },
  {
    id: 38,
    correct_answer: "すし",
    incorrect_answers: ["てんぷら", "そば", "うどん"],
    question:
      "志賀直哉の小説『小僧の神様』で、小僧が議員からおごってもらう食べ物は？",
    description: "寿司",
  },
  {
    id: 39,
    correct_answer: "ピアノ",
    incorrect_answers: ["バイオリン", "フルート", "ギター"],
    question:
      "「ハノン」「チェルニー」「バイエル」といえば、どんな楽器の教則本？",
    description: "ピアノ",
  },
  {
    id: 40,
    correct_answer: "ジェームズ",
    incorrect_answers: ["ジョン", "マイケル", "ウィリアム"],
    question:
      "アメリカ大統領のマディスン、モンロー、ポーク、ブキャナン、ガーフィールドに共通するファーストネームは？",
    description: "ジェームズ",
  },
  {
    id: 41,
    correct_answer: "むなかたしこう",
    incorrect_answers: ["ひらかたしこう", "たなかしこう", "やまかたしこう"],
    question:
      "「わだばゴッホになる」という名言でも知られる、青森県出身の日本を代表する版画家は？",
    description: "棟方志功",
  },
  {
    id: 42,
    correct_answer: "ざっせつ",
    incorrect_answers: ["にじゅうしせっき", "しゅんぶん", "しゅうぶん"],
    question:
      "彼岸や半夏生などのように、二十四節気以外の暦の移り変わりを表す日を何という？",
    description: "雑節",
  },
  {
    id: 43,
    correct_answer: "24",
    incorrect_answers: ["20", "30", "40"],
    question:
      "バスケットボールのルールでは、自チームがボールを取ってから何秒以内にシュートをしなければならない？",
    description: "24秒",
  },
  {
    id: 44,
    correct_answer: "とちぎ",
    incorrect_answers: ["ぐんま", "いばらき", "さいたま"],
    question:
      "川治温泉、塩原温泉、鬼怒川温泉といえば、どこの都道府県にある温泉地？",
    description: "栃木県",
  },
  {
    id: 45,
    correct_answer: "うりざね",
    incorrect_answers: ["まるがん", "しかくがん", "なががん"],
    question: "面長で色白の顔を、ある植物の実に見立てて「何顔」という？",
    description: "瓜実顔",
  },
  {
    id: 46,
    correct_answer: "A6",
    incorrect_answers: ["A4", "A5", "A3"],
    question: "紙の大きさで「文庫本サイズ」ともいわれるサイズは？",
    description: "A6",
  },
  {
    id: 47,
    correct_answer: "あしかがよしのり",
    incorrect_answers: [
      "あしかがたかうじ",
      "あしかがよしみつ",
      "あしかがよしあき",
    ],
    question: "1441年の嘉吉の乱で暗殺された、室町幕府の将軍は？",
    description: "足利義教",
  },
  {
    id: 48,
    correct_answer: "マティーニ",
    incorrect_answers: ["モヒート", "ダイキリ", "マルガリータ"],
    question:
      "ジンとベルモットを混ぜ合わせて作る、「カクテルの王様」とも呼ばれるカクテルは？",
    description: "マティーニ",
  },
  {
    id: 49,
    correct_answer: "KSこう",
    incorrect_answers: ["KSてつ", "KSどう", "KSぎん"],
    question: "1917年に高木弘と本多光太郎によって発明された磁石鋼は？",
    description: "KS鋼",
  },
];

export default quizList;
