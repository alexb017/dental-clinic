const services = [
  {
    label: 'Professional teeth cleaning',
    content:
      'We offer professional teeth cleaning services to help you maintain your oral health. Our team of dental hygienists will remove plaque and tartar from your teeth, leaving them clean and healthy.',
    price: 100,
    state: 'per session',
  },
  {
    label: 'Oral exam',
    content:
      'We offer comprehensive oral exams to help you maintain your oral health. Our team of dentists will examine your teeth and gums, looking for signs of decay, gum disease, and other oral health issues.',
    price: 50,
    state: 'per session',
  },
  {
    label: 'Dental X-rays',
    content:
      'We offer dental X-rays to help us diagnose and treat oral health issues. X-rays allow us to see inside your teeth and gums, helping us identify problems that are not visible to the naked eye.',
    price: 150,
    state: 'one set',
  },
  {
    label: 'Cavity fillings',
    content:
      "We offer dental fillings to repair teeth that have been damaged by decay. Our team of dentists will remove the decayed portion of the tooth and fill it with a durable material, restoring the tooth's structure and function.",
    price: 200,
    state: 'per tooth',
  },
  {
    label: 'Tooth extraction',
    content:
      'We offer tooth extraction services to remove teeth that are damaged or decayed beyond repair. Our team of dentists will carefully remove the tooth, ensuring that you are comfortable and pain-free throughout the procedure.',
    price: 250,
    state: 'per tooth',
  },
  {
    label: 'Root canal therapy',
    content:
      'We offer root canal therapy to treat teeth that have become infected or inflamed. Our team of dentists will remove the infected tissue from the tooth, clean and disinfect the root canal, and fill it with a sealer to prevent further infection.',
    price: 500,
    state: 'per tooth',
  },
  {
    label: 'Dental crowns',
    content:
      'We offer dental crowns to restore teeth that have been damaged by decay or injury. Our team of dentists will place a custom-made crown over the tooth, restoring its shape, size, and function.',
    price: 800,
    state: 'per crown',
  },
  {
    label: 'Dental bridges',
    content:
      'We offer dental bridges to replace missing teeth and restore your smile. Our team of dentists will place a custom-made bridge over the gap left by the missing tooth, restoring your ability to chew and speak normally.',
    price: 1000,
    state: 'per bridge',
  },
];

const pricing = [
  { label: 'Professional teeth cleaning', price: 100, state: 'per session' },
  { label: 'Oral exam', price: 50, state: 'per session' },
  { label: 'Dental X-rays', price: 150, state: 'one set' },
  { label: 'Cavity fillings', price: 200, state: 'per tooth' },
  { label: 'Tooth extraction', price: 250, state: 'per tooth' },
  { label: 'Root canal therapy', price: 500, state: 'per tooth' },
  { label: 'Dental crowns', price: 800, state: 'per crown' },
  { label: 'Dental bridges', price: 1000, state: 'per bridge' },
];

const vipPlan = [
  {
    period: '1 year membership',
    periodType: 'Fixed-term',
    label: "VIP Dental Plan's Fee Anually",
    labelContent:
      'VIP Plan Membership provides you with the following benefits:',
    price: 695,
    content:
      'Our VIP Membership includes two professional teeth cleanings, two oral exams, and one set of dental X-rays per year. This plan is perfect for patients who want to maintain their oral health and save money on dental care.',
    discount: '10% discount on all other dental services.',
  },
];

const images = [
  {
    alt: 'Dental office 1',
    url: '/images/2969.jpg',
  },
  {
    alt: 'Dental office 2',
    url: '/images/2151042891.jpg',
  },
  {
    alt: 'Dental office 3',
    url: '/images/2985.jpg',
  },
  {
    alt: 'Dental office 4',
    url: '/images/2147905829.jpg',
  },
  {
    alt: 'Dental office 5',
    url: '/images/2151042897.jpg',
  },
  {
    alt: 'Dental office 6',
    url: '/images/2993.jpg',
  },
];

const reviews = [
  {
    name: 'John Doe',
    nickname: 'johndoe123',
    avatar: '/avatars/avatar-1.jpg',
    review:
      'I had a great experience at the dental office. The staff was friendly and professional, and the office was clean and modern. I would highly recommend this dental office to anyone in need of dental care.',
  },
  {
    name: 'Jane Smith',
    nickname: 'janesmith456',
    avatar: '/avatars/avatar-2.jpg',
    review:
      'I have been a patient at the dental office for several years, and I have always been impressed with the level of care and service I receive. The staff is friendly and professional, and the office is clean and modern. I would highly recommend this dental office to anyone in need of dental care.',
  },
  {
    name: 'Alice Johnson',
    nickname: 'alicejohnson789',
    avatar: '/avatars/avatar-3.jpg',
    review:
      'I recently visited the dental office for a routine check-up, and I was very impressed with the level of care and service I received. The staff was friendly and professional, and the office was clean and modern. I would highly recommend this dental office to anyone in need of dental care.',
  },
  {
    name: 'Mary Davis',
    nickname: 'marydavis202',
    avatar: '/avatars/avatar-4.jpg',
    review:
      'I recently visited the dental office for a routine check-up, and I was very impressed with the level of care and service I received. The staff was friendly and professional, and the office was clean and modern. I would highly recommend this dental office to anyone in need of dental care.',
  },
  {
    name: 'Bob Brown',
    nickname: 'bobbrown101',
    avatar: '/avatars/avatar-5.jpg',
    review:
      'I have been a patient at the dental office for several years, and I have always been impressed with the level of care and service I receive. The staff is friendly and professional, and the office is clean and modern. I would highly recommend this dental office to anyone in need of dental care.',
  },
  {
    name: 'Sara Miller',
    nickname: 'saramiller404',
    avatar: '/avatars/avatar-6.jpg',
    review:
      'I recently visited the dental office for a routine check-up, and I was very impressed with the level of care and service I received. The staff was friendly and professional, and the office was clean and modern. I would highly recommend this dental office to anyone in need of dental care.',
  },
  {
    name: 'Tom Wilson',
    nickname: 'tomwilson303',
    avatar: '/avatars/avatar-7.jpg',
    review:
      'I have been a patient at the dental office for several years, and I have always been impressed with the level of care and service I receive. The staff is friendly and professional, and the office is clean and modern. I would highly recommend this dental office to anyone in need of dental care.',
  },
  {
    name: 'Emily Taylor',
    nickname: 'emilytaylor606',
    avatar: '/avatars/avatar-8.jpg',
    review:
      'I recently visited the dental office for a routine check-up, and I was very impressed with the level of care and service I received. The staff was friendly and professional, and the office was clean and modern. I would highly recommend this dental office to anyone in need of dental care.',
  },
  {
    name: 'Alex Lee',
    nickname: 'alexlee707',
    avatar: '/avatars/avatar-9.jpg',
    review:
      'I have been a patient at the dental office for several years, and I have always been impressed with the level of care and service I receive. The staff is friendly and professional, and the office is clean and modern.',
  },
];

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/services',
    label: 'Services',
  },
  {
    href: '/pricing',
    label: 'Pricing',
  },
  {
    href: '/about',
    label: 'About Us',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

const headerImages = [
  {
    alt: 'Header image 1',
    url: '/images/2149164286.jpg',
  },
  {
    alt: 'Header image 2',
    url: '/images/2149164292.jpg',
  },
  {
    alt: 'Header image 3',
    url: '/images/2149164306.jpg',
  },
];

module.exports = {
  services,
  pricing,
  vipPlan,
  images,
  reviews,
  links,
  headerImages,
};
