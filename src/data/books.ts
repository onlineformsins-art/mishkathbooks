export interface Book {
  id: string;
  code: string;
  title: string;
  titleEn: string;
  author: string;
  language: 'tamil' | 'sinhala' | 'english';
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
  isFeatured?: boolean;
  category?: string;
}

export const books: Book[] = [
  // TAMIL BOOKS
  {
    id: 'b01',
    code: 'B01',
    title: 'ஸகாத்',
    titleEn: 'Zakat - A Practical Guide',
    author: 'Mishkath Research Team',
    language: 'tamil',
    price: 750,
    image: '/books/page_002.png',
    description: 'A comprehensive practical guide on Zakat covering general conditions, sources of Zakatable wealth, distribution guidelines, and institutionalized systems. Essential reference for every Muslim household.',
    isFeatured: true,
    category: 'Islamic Finance',
  },
  {
    id: 'b02',
    code: 'B02',
    title: 'மணிநூயத் தூதர் முஹம்மத் நபி (ஸல்)',
    titleEn: 'The Jewel of Messengers - Prophet Muhammad (PBUH) - Part 1',
    author: 'Mishkath Research Institute',
    language: 'tamil',
    price: 400,
    image: '/books/page_003.png',
    description: 'Part 1 of the noble biography of Prophet Muhammad (PBUH). Covers the true meaning of his life, the methodology of the rightly guided companions, and lessons from his exemplary character.',
    isFeatured: true,
    category: 'Seerah / Biography',
  },
  {
    id: 'b03',
    code: 'B03',
    title: 'அல்குர்ஆன் வன்முறையை தூண்டுகிறதா?',
    titleEn: "Does Al-Qur'an Encourage Violence?",
    author: 'Usthaz M.A.M. Mansoor (Naleemi)',
    language: 'tamil',
    price: 400,
    image: '/books/page_004.png',
    description: 'A scholarly response to misconceptions about the Quran and violence. Examines verses often misquoted, historical context, and the true peaceful message of Islam.',
    isFeatured: true,
    category: 'Contemporary Issues',
  },
  {
    id: 'b04',
    code: 'B04',
    title: 'மத்துகத் துரைத்துல்யும் மது நிர்ணயமும்',
    titleEn: 'Matthukath Thurai Thulyam & Mathu Nirnayam',
    author: 'Mishkath Research Panel',
    language: 'tamil',
    price: 200,
    image: '/books/page_005.png',
    description: 'An in-depth study on the concept of "Riddah" (apostasy) and its proper understanding. Covers historical rulings and scholarly consensus on this important topic.',
    category: 'Islamic Jurisprudence',
  },
  {
    id: 'b05',
    code: 'B05',
    title: 'இஸ்லாமிய சட்ட நிறுவனத்தில் குடும்ப பொருளாதாரப் பராமரிப்பு',
    titleEn: 'Family Financial Support in Islamic Law',
    author: 'Mishkath Research Panel',
    language: 'tamil',
    price: 400,
    image: '/books/page_006.png',
    description: 'Comprehensive guide on blood relationship maintenance, financial support within families, eligible relatives, guidelines for support, social benefits, and a model family financial plan.',
    isFeatured: true,
    category: 'Islamic Finance',
  },
  {
    id: 'b06',
    code: 'B06',
    title: 'ஸுன்னா துலாக் விளக்கவுரை',
    titleEn: 'Sunnah Talaq - Detailed Commentary',
    author: 'Mishkath Research Panel',
    language: 'tamil',
    price: 400,
    image: '/books/page_007.png',
    description: 'A detailed commentary on Sunnah divorce procedures. Covers the proper Islamic method of Talaq, its conditions, and related jurisprudential rulings.',
    category: 'Islamic Jurisprudence',
  },
  {
    id: 'b07',
    code: 'B07',
    title: 'இஸ்லாமிய ஷரீஅத்',
    titleEn: 'Islamic Shariah - Laws and Guidelines',
    author: 'Usthaz M.A.M. Mansoor (Naleemi)',
    language: 'tamil',
    price: 400,
    image: '/books/page_008.png',
    description: 'A comprehensive guide to Islamic Shariah covering its divine origin, relationship with worship, connection between good morals and Shariah, and its role in establishing social justice.',
    isFeatured: true,
    category: 'Islamic Jurisprudence',
  },
  {
    id: 'b13',
    code: 'B13',
    title: 'ஸகாத் - முன்னோக்கும் கூர் பார்வைகள்',
    titleEn: 'Zakat - Forward Looking Perspectives',
    author: 'Mishkath Research Institute',
    language: 'tamil',
    price: 200,
    image: '/books/page_014.png',
    description: 'A focused study on Zakat from contemporary perspectives. Examines modern applications of Zakat principles in today\'s economic context.',
    isNew: true,
    category: 'Islamic Finance',
  },
  {
    id: 'b15',
    code: 'B15',
    title: 'இஸ்லாமிய வாழ்க்கை முறைச் சுட்டி',
    titleEn: 'Islamic Lifestyle Guide',
    author: 'Mishkath Research Institute',
    language: 'tamil',
    price: 400,
    image: '/books/page_016.png',
    description: 'A practical guide to Islamic daily living covering essential practices, moral guidelines, and spiritual development for Muslims in the modern world.',
    isNew: true,
    category: 'Islamic Lifestyle',
  },

  // SINHALA BOOKS
  {
    id: 'b08',
    code: 'B08',
    title: 'අල්-කුර්ආනය ප්‍රචන්ඩත්වයට පොළඹවන්නේද?!',
    titleEn: "Does Al-Qur'an Encourage Violence?",
    author: 'Usthaz M.A.M. Mansoor (Naleemi)',
    language: 'sinhala',
    price: 400,
    image: '/books/page_009.png',
    description: 'Sinhala translation of the scholarly work addressing misconceptions about the Quran and violence. Provides contextual understanding of commonly misquoted verses.',
    isFeatured: true,
    category: 'Contemporary Issues',
  },
  {
    id: 'b09',
    code: 'B09',
    title: 'තව්හීද් නියමය',
    titleEn: 'The Principles of Tawheed',
    author: 'Usthaz M.A.M. Mansoor (Naleemi)',
    language: 'sinhala',
    price: 400,
    image: '/books/page_010.png',
    description: 'A comprehensive Sinhala guide to the Islamic concept of Tawheed (Oneness of Allah). Covers the three categories of Tawheed with clear explanations and evidences.',
    isFeatured: true,
    category: 'Aqeedah / Creed',
  },

  // ENGLISH BOOKS
  {
    id: 'b10',
    code: 'B10',
    title: 'Financial Support within the Family',
    titleEn: 'Financial Support within the Family - An Islamic Perspective',
    author: 'Mishkath Research Panel',
    language: 'english',
    price: 400,
    image: '/books/page_011.png',
    description: 'An Islamic perspective on family financial support. Topics include: importance of blood relationships, financial support guidelines, eligible relatives, social benefits, and a model family plan.',
    isFeatured: true,
    category: 'Islamic Finance',
  },
  {
    id: 'b11',
    code: 'B11',
    title: 'Financial Support within the Family (Second Edition)',
    titleEn: 'Financial Support within the Family - An Islamic Perspective (2nd Ed.)',
    author: 'Mishkath Research Panel',
    language: 'english',
    price: 400,
    image: '/books/page_012.png',
    description: 'Updated second edition covering the noble life of the Prophet, justice in the Prophet\'s constitution, and how the Prophet\'s worship was solving the problems of the people.',
    category: 'Islamic Finance',
  },
  {
    id: 'b12',
    code: 'B12',
    title: "Does Al-Qur'an Encourage Violence?",
    titleEn: "Does Al-Qur'an Encourage Violence? - Revised Edition",
    author: 'Usthaz M.A.M. Mansoor (Naleemi)',
    language: 'english',
    price: 400,
    image: '/books/page_013.png',
    description: 'Revised edition addressing the controversial question with scholarly depth. Examines general conditions, sources, and distribution of Zakatable wealth in the context of Quranic teachings.',
    isNew: true,
    category: 'Contemporary Issues',
  },
  {
    id: 'b14',
    code: 'B14',
    title: 'Zakat - A Practical Guide',
    titleEn: 'Zakat: A Practical Guide',
    author: 'Mishkath Research Team',
    language: 'english',
    price: 750,
    image: '/books/page_015.png',
    description: 'The definitive English guide on Zakat. Covers general conditions, sources of Zakatable wealth, distribution methods, institutionalized systems, and practical Q&A.',
    isFeatured: true,
    isNew: true,
    category: 'Islamic Finance',
  },
];

export const getBooksByLanguage = (lang: 'tamil' | 'sinhala' | 'english') =>
  books.filter((b) => b.language === lang);

export const getNewReleases = () => books.filter((b) => b.isNew);

export const getFeaturedBooks = () => books.filter((b) => b.isFeatured);

export const tamilBooks = getBooksByLanguage('tamil');
export const sinhalaBooks = getBooksByLanguage('sinhala');
export const englishBooks = getBooksByLanguage('english');

export const languageInfo = {
  tamil: {
    label: 'Tamil',
    nativeLabel: 'தமிழ்',
    count: tamilBooks.length,
    gradient: 'from-emerald-900 to-emerald-700',
    iconColor: '#C0973E',
  },
  sinhala: {
    label: 'Sinhala',
    nativeLabel: 'සිංහල',
    count: sinhalaBooks.length,
    gradient: 'from-amber-900 to-amber-700',
    iconColor: '#C0973E',
  },
  english: {
    label: 'English',
    nativeLabel: 'English',
    count: englishBooks.length,
    gradient: 'from-slate-800 to-slate-600',
    iconColor: '#C0973E',
  },
};
