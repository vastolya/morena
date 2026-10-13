import photos from "./photos.json";

export type Photo = { id: string; src: string; width: number; height: number };

export const categories = {
  shirts: "Рубашки и блузы",
  corsets: "Корсеты и манишки",
  vests: "Жилеты",
  belts: "Пояса",
  dresses: "Платья и пальто",
  other: "Разное",
} as const;

export type Category = keyof typeof categories;

type WorkInput = {
  slug: string;
  title: string;
  category: Category;
  material: string;
  size?: string;
  description: string;
  photos: string[];
};

const raw: WorkInput[] = [
  {
    slug: "izumrudnoe-plate",
    title: "Изумрудное платье",
    category: "dresses",
    material: "Лён",
    description:
      "Длинное платье с завышенной талией и объёмными рукавами на манжетах. Мягкие сборки под грудью и подол в пол.",
    photos: ["012", "013", "014", "016", "010", "011", "015"],
  },
  {
    slug: "hlopkovaya-rubashka-s-zavyazkami",
    title: "Хлопковая рубашка с завязками",
    category: "shirts",
    material: "Хлопок",
    size: "M (46)",
    description:
      "Свободная рубашка с воротником-стойкой, тремя бантами вместо пуговиц и пышной оборкой по низу.",
    photos: ["001", "040", "041", "042", "002", "006", "008"],
  },
  {
    slug: "hlopkovaya-rubashka-s-vorotnikom",
    title: "Хлопковая рубашка с воротником",
    category: "shirts",
    material: "Хлопок",
    size: "M (46)",
    description:
      "Широкий отложной воротник с кружевной отделкой, складки на плечах, рукава-фонарики и оборка по подолу.",
    photos: ["003", "029", "004", "031", "032", "007", "009", "030", "033", "034"],
  },
  {
    slug: "piratskaya-rubaha",
    title: "Пиратская рубаха на шнуровке",
    category: "shirts",
    material: "Хлопок",
    size: "M–L (46–48)",
    description:
      "Белая рубаха-трапеция с воротником на сборке и шнуровкой на груди.",
    photos: ["018", "019", "020"],
  },
  {
    slug: "bluzka-s-shirokimi-rukavami",
    title: "Блузка с широкими рукавами",
    category: "shirts",
    material: "Хлопок",
    size: "L–XL (48–50)",
    description:
      "Горловина на кулиске, широкие длинные рукава и манжеты на завязках.",
    photos: ["021", "022"],
  },
  {
    slug: "ukorochennaya-rubashka",
    title: "Укороченная рубашка",
    category: "shirts",
    material: "Хлопок",
    size: "S–M (44–46)",
    description:
      "Рубашка с высоким воротником, объёмными рукавами и кулиской по низу.",
    photos: ["023", "024", "025"],
  },
  {
    slug: "rubashka-s-zavyazkami",
    title: "Рубашка с завязками",
    category: "shirts",
    material: "Хлопок",
    size: "M–L (46–48)",
    description:
      "Светлая рубашка-трапеция с завязками на полочке и встречной складкой на спинке.",
    photos: ["026", "027", "028"],
  },
  {
    slug: "lnyanaya-rubashka-s-zavyazkami",
    title: "Льняная рубашка с завязками",
    category: "shirts",
    material: "Лён",
    size: "M–L (46–48)",
    description:
      "Просторная рубашка цвета небелёного льна: завязки, кокетка и широкие рукава с бантами.",
    photos: ["035", "036", "037", "038", "039", "005"],
  },
  {
    slug: "rubashka-s-zastezhkami-pankou",
    title: "Рубашка с застёжками панькоу",
    category: "shirts",
    material: "Крапива с хлопком",
    size: "S (44)",
    description:
      "Рубашка с воротником-стойкой, застёжкой на китайские узелки-панькоу и расклешёнными рукавами.",
    photos: ["044", "045", "048", "046", "047"],
  },
  {
    slug: "zelenoe-palto",
    title: "Пальто-халат",
    category: "dresses",
    material: "Лён",
    description: "Длинное пальто оливкового цвета с застёжками-узелками.",
    photos: ["017"],
  },
  {
    slug: "rozovaya-rubashka",
    title: "Розовая рубашка",
    category: "shirts",
    material: "Лён",
    description: "Пыльно-розовая рубашка с воротником-стойкой и завязками на рукавах.",
    photos: ["043"],
  },
  {
    slug: "myagkij-korset-olivkovyj",
    title: "Мягкий корсет на шнуровке",
    category: "corsets",
    material: "Костюмная шерсть, подклад — хлопок",
    size: "S (44), ОГ 88, ОТ 68",
    description:
      "Оливковый корсет с квадратным вырезом, шнуровкой спереди и кружевной тесьмой по краю.",
    photos: ["053", "058", "054", "055", "056", "057"],
  },
  {
    slug: "myagkij-korset-velvet",
    title: "Мягкий корсет из вельвета",
    category: "corsets",
    material: "Вельвет, подклад — хлопок",
    size: "S (44), ОГ 88, ОТ 68",
    description:
      "Корсет из узорного вельвета с фигурным низом и шнуровкой.",
    photos: ["059", "060", "061", "062", "063", "064", "065"],
  },
  {
    slug: "terrakotovye-pantalony",
    title: "Терракотовые панталоны",
    category: "other",
    material: "Лён, хлопковое кружево",
    description: "Широкие брюки на кулиске с многоярусными оборками и кружевом.",
    photos: ["066", "068", "067"],
  },
  {
    slug: "olivkovyj-zhilet",
    title: "Оливковый жилет",
    category: "vests",
    material: "Лён",
    description: "Короткий жилет с воротником-стойкой и застёжкой на узелки.",
    photos: ["069", "070", "071"],
  },
  {
    slug: "manishka-polevye-cvety",
    title: "Манишка «Полевые цветы»",
    category: "corsets",
    material: "Гобелен, подклад — хлопок",
    size: "S/M",
    description:
      "Манишка из гобелена с полевыми цветами, завязки по бокам. Надевается поверх рубашки или платья.",
    photos: ["093", "072", "073", "097"],
  },
  {
    slug: "manishka-v-melkij-cvetok",
    title: "Манишка в мелкий цветок",
    category: "corsets",
    material: "Гобелен, подклад — хлопок",
    size: "S/M",
    description:
      "Двусторонняя манишка: с одной стороны мелкий цветочный узор, с другой — зелёный хлопок.",
    photos: ["127", "124", "125", "126", "130", "131", "128", "129", "074", "075"],
  },
  {
    slug: "muzhskaya-rubashka-v-zelenuyu-kletku",
    title: "Мужская рубашка в зелёную клетку",
    category: "shirts",
    material: "Хлопок",
    size: "L–XL (56–58)",
    description:
      "Свободная рубашка в клетку с нагрудным карманом и контрастными манжетами.",
    photos: ["115", "116", "117", "118", "119", "077", "078"],
  },
  {
    slug: "muzhskaya-rubashka-v-krasnuyu-kletku",
    title: "Мужская рубашка в красную клетку",
    category: "shirts",
    material: "Хлопок",
    size: "L–XL (56–58)",
    description:
      "Рубашка в клетку с нагрудным карманом и манжетами на пуговицах.",
    photos: ["120", "121", "122", "123", "076"],
  },
  {
    slug: "vyshitye-meshochki",
    title: "Вышитые мешочки",
    category: "other",
    material: "Лён, ручная вышивка",
    description: "Мешочки на затяжке с вышивкой гладью.",
    photos: ["079", "080"],
  },
  {
    slug: "korset-na-shnurovke-krasnyj",
    title: "Корсет на шнуровке, красный",
    category: "corsets",
    material: "Крапива, подклад — хлопок",
    size: "S (44)",
    description:
      "Корсет под грудь со шнуровкой спереди.",
    photos: ["081", "082", "083"],
  },
  {
    slug: "korset-na-shnurovke-cvetochnyj",
    title: "Корсет на шнуровке, цветочный",
    category: "corsets",
    material: "Хлопок, подклад — хлопок",
    size: "S (44)",
    description:
      "Корсет в мелкий цветок с отделкой по краю и завязками на плечах.",
    photos: ["085", "084"],
  },
  {
    slug: "korset-na-shnurovke-belyj",
    title: "Корсет на шнуровке, белый",
    category: "corsets",
    material: "Хлопок, подклад — хлопок",
    size: "S (44)",
    description:
      "Светлый корсет со стёжкой и кружевной вставкой.",
    photos: ["086", "087"],
  },
  {
    slug: "korset-na-shnurovke-dzhinsa",
    title: "Корсет на шнуровке, алый",
    category: "corsets",
    material: "Джинса, подклад — хлопок",
    size: "S (44)",
    description:
      "Корсет с косточками и шнуровкой на спине.",
    photos: ["088", "089", "090", "091", "092"],
  },
  {
    slug: "manishka-korichnevaya",
    title: "Манишка коричневая",
    category: "corsets",
    material: "Крапива с хлопком, подклад — хлопок",
    size: "S/M",
    description:
      "Лаконичная манишка с завязками по бокам — носится поверх рубашки.",
    photos: ["094", "095", "096"],
  },
  {
    slug: "manishka-pudrovaya",
    title: "Манишка пудровая",
    category: "corsets",
    material: "Крапива, подклад — хлопок",
    size: "S/M",
    description:
      "Манишка пыльно-розового цвета с круглым вырезом.",
    photos: ["098", "099", "100"],
  },
  {
    slug: "manishka-chernaya",
    title: "Манишка чёрная",
    category: "corsets",
    material: "Гобелен, подклад — хлопок",
    size: "S/M",
    description:
      "Чёрная манишка с фигурным низом и бордовым подкладом.",
    photos: ["101", "103", "104", "105", "102", "106"],
  },
  {
    slug: "zhilet-s-vyshivkoj",
    title: "Жилет с вышивкой",
    category: "vests",
    material: "Хлопок с вышивкой",
    description: "Приталенный жилет на пуговицах с хлястиком на спинке.",
    photos: ["107", "110", "113", "108", "109", "111", "112", "114"],
  },
  {
    slug: "manishka-s-rozami",
    title: "Манишка с розами",
    category: "corsets",
    material: "Гобелен, подклад — хлопок",
    size: "S/M",
    description:
      "Гобеленовая манишка с крупными розами и подкладом цвета хвои.",
    photos: ["134", "132", "133", "135", "136"],
  },
  {
    slug: "manishka-barhatnaya",
    title: "Манишка бархатная",
    category: "corsets",
    material: "Бархат, подклад — рогожка",
    size: "S/M",
    description:
      "Манишка из сливового бархата с тиснёным узором.",
    photos: ["137", "138", "139", "140", "141"],
  },
  {
    slug: "zhilet-v-cvetochek",
    title: "Жилет в цветочек",
    category: "vests",
    material: "Хлопок",
    description: "Жилет на деревянных пуговицах с хлястиком и подкладом.",
    photos: ["146", "147", "148", "149", "150", "151"],
  },
  {
    slug: "korichnevyj-poyas",
    title: "Шерстяной пояс",
    category: "belts",
    material: "Шерсть",
    description: "Пояс-портупея с фигурными «лапками» и шнуровкой сбоку.",
    photos: ["152", "142", "143", "144", "145", "153", "154", "155", "156", "051"],
  },
  {
    slug: "poyas-v-polosku",
    title: "Пояс в полоску",
    category: "belts",
    material: "Костюмная шерсть",
    description: "Пояс-портупея из костюмной ткани в тонкую полоску с завязками.",
    photos: ["157", "158", "159", "160", "050"],
  },
  {
    slug: "pechvork-poyas",
    title: "Пояс «Пэчворк»",
    category: "belts",
    material: "Жаккард",
    description: "Пояс-портупея из узорного жаккарда с атласными лентами.",
    photos: ["161", "162", "163", "164", "049"],
  },
  {
    slug: "poyas-s-pticami",
    title: "Пояс с птицами",
    category: "belts",
    material: "Жаккард",
    description: "Тёмный пояс-портупея с узором из птиц и цветов.",
    photos: ["052"],
  },
];

const byId = new Map((photos as (Photo & { original: string })[]).map((p) => [p.id, p]));

export type Work = Omit<WorkInput, "photos"> & { photos: Photo[]; cover: Photo };

export const works: Work[] = raw.map((w) => {
  const list = w.photos.map((id) => {
    const p = byId.get(id);
    if (!p) throw new Error(`Unknown photo ${id} in ${w.slug}`);
    return { id: p.id, src: p.src, width: p.width, height: p.height };
  });
  return { ...w, photos: list, cover: list[0] };
});

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}

export function photo(id: string): Photo {
  const p = byId.get(id);
  if (!p) throw new Error(`Unknown photo ${id}`);
  return { id: p.id, src: p.src, width: p.width, height: p.height };
}
