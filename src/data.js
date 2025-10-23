export const GYM = {
  name: 'swiftgym',
  displayName: 'Swift Gym',
  tagline1: 'Small town gym big time results',
  tagline2: 'Push Yourself Harder than Yesterday',
  description: `Experience fitness at its finest with Swift Gym! 💪 From weights to cardio, we’ve got all you need to crush your fitness goals. Join us now and let’s make every workout count!`,
  bullets: [
    '📍 Point Pleasant’s 24/7 gym',
    '💪🏼 Get in, get fit, anytime!',
    '👥 Join our fitness fam today',
    '📞 Call 123-456-7890',
    'Email info@swiftgym.com'
  ],
  address: '2809 Route 88, Point Pleasant, NJ',
  phone: '123-456-7890',
  email: 'info@swiftgym.com',
  socials: {
    facebook: '#',
    instagram: '#'
  }
}

export const IMAGES = [
  'https://i.pinimg.com/1200x/79/8d/64/798d646e8325ace8523995716c048123.jpg',
  'https://i.pinimg.com/1200x/0a/54/4f/0a544f3897c7377cf029791d793662a7.jpg',
  'https://i.pinimg.com/1200x/47/0a/2f/470a2ff5750dc7e72ac89ff818079614.jpg',
  'https://i.pinimg.com/1200x/79/23/a0/7923a02a292883a741bfa115374bacff.jpg',
  'https://i.pinimg.com/1200x/71/35/f9/7135f966bd928e97db9a96506637671f.jpg',
  'https://i.pinimg.com/1200x/b7/aa/2e/b7aa2e55bc020e1104ecbfe71e669cda.jpg',
  'https://i.pinimg.com/1200x/78/6e/45/786e45957891051a14c8bdd7b30a6d38.jpg',
  'https://i.pinimg.com/1200x/dc/28/35/dc28352e357b0b47330c5181b30ee10c.jpg',
  'https://i.pinimg.com/1200x/46/14/17/4614174eeea1ebdc8348cd3691dd07bd.jpg',
  'https://i.pinimg.com/1200x/7d/83/a3/7d83a322269c7f0d5aa3614665740650.jpg',
  'https://i.pinimg.com/1200x/33/2a/61/332a614c0193e7ddf3e6b895855cfa68.jpg',
  'https://i.pinimg.com/1200x/7f/f1/6f/7ff16f492d2acc229a707491f7d046e6.jpg',
  'https://i.pinimg.com/1200x/22/e5/9c/22e59cfe653c35d20f5a49edd761941e.jpg'
]

export const PROGRAMS = [
  { 
    id: 'strength', 
    name: 'Strength Training', 
    category: 'Strength', 
    goal: 'strength', 
    image: IMAGES[0],
    description: 'Build muscle and increase your overall strength with our comprehensive strength training program. Perfect for all fitness levels.'
  },
  { 
    id: 'yoga', 
    name: 'Yoga Flow', 
    category: 'Mind & Body', 
    goal: 'flexibility', 
    image: IMAGES[1],
    description: 'Improve flexibility, balance, and mental clarity through our guided yoga sessions. Suitable for beginners and advanced practitioners.'
  },
  { 
    id: 'hiit', 
    name: 'HIIT Blast', 
    category: 'Cardio', 
    goal: 'weight-loss', 
    image: IMAGES[2],
    description: 'High-intensity interval training designed to burn maximum calories in minimum time. Get ready to push your limits!'
  },
  { 
    id: 'crossfit', 
    name: 'CrossFit', 
    category: 'Functional', 
    goal: 'strength', 
    image: IMAGES[3],
    description: 'Functional movements performed at high intensity. Our CrossFit program will challenge you in new ways every session.'
  },
  { 
    id: 'boxing', 
    name: 'Boxing Fundamentals', 
    category: 'Cardio', 
    goal: 'weight-loss', 
    image: IMAGES[4],
    description: 'Learn boxing techniques while getting an incredible cardio workout. Build coordination and burn calories simultaneously.'
  },
  { 
    id: 'mobility', 
    name: 'Mobility & Stretch', 
    category: 'Mind & Body', 
    goal: 'flexibility', 
    image: IMAGES[5],
    description: 'Focus on improving joint mobility and muscle flexibility. Essential for injury prevention and overall wellness.'
  },
]

export const TRAINERS = [
  { name: 'Alex Rivera', role: 'Strength Coach', certs: 'CSCS, USAW-1', socials: { ig: '#', li: '#', tk: '#' }, avatar: IMAGES[6] },
  { name: 'Maya Chen', role: 'Yoga Instructor', certs: 'RYT-500', socials: { ig: '#', li: '#', tk: '#' }, avatar: IMAGES[7] },
  { name: 'Dante Brooks', role: 'HIIT Specialist', certs: 'NASM-CPT', socials: { ig: '#', li: '#', tk: '#' }, avatar: IMAGES[8] },
  { name: 'Sofia Patel', role: 'Mobility & Stretch', certs: 'FRCms', socials: { ig: '#', li: '#', tk: '#' }, avatar: IMAGES[9] },
]

export const PLANS = [
  { name: 'Basic', price: 29, features: { classes: true, pt: false, sauna: false }, desc: 'Gym access + group classes off-peak' },
  { name: 'Standard', price: 49, features: { classes: true, pt: false, sauna: false }, desc: 'Unlimited access + all classes' },
  { name: 'Best Value', price: 69, popular: true, features: { classes: true, pt: true, sauna: false }, desc: 'Unlimited + 1 PT session/mo' },
  { name: 'Premium', price: 99, features: { classes: true, pt: true, sauna: true }, desc: 'Unlimited + PT + sauna' },
]

export const SCHEDULE = [
  { day: 'Mon', time: '6:30 AM', title: 'HIIT Blast' },
  { day: 'Mon', time: '6:00 PM', title: 'Strength 101' },
  { day: 'Tue', time: '7:00 AM', title: 'Yoga Flow' },
  { day: 'Tue', time: '6:00 PM', title: 'CrossFit' },
  { day: 'Wed', time: '6:30 AM', title: 'Boxing' },
  { day: 'Wed', time: '6:00 PM', title: 'Mobility' },
  { day: 'Thu', time: '7:00 AM', title: 'Strength 101' },
  { day: 'Thu', time: '6:00 PM', title: 'Yoga Flow' },
  { day: 'Fri', time: '6:30 AM', title: 'HIIT Blast' },
  { day: 'Sat', time: '9:00 AM', title: 'CrossFit' },
]

export const TESTIMONIALS = [
  { name: 'Chris P.', quote: 'Lost 20lbs in 3 months. This place is the real deal!', image: IMAGES[10] },
  { name: 'Jenna L.', quote: 'Trainers are top-notch and the vibe is unmatched.', image: IMAGES[11] },
  { name: 'Mike D.', quote: 'Open 24/7 means no excuses. Love it!', image: IMAGES[12] },
]