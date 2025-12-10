// Story configuration
// Replace the imageUrl values with your actual Google Photos direct links
// 
// textPosition options: 'center' (default), 'top', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'
// Use textPosition to move text away from the focal point of your image
// 
// objectPosition: Controls where the image focuses when cropped (optional)
//   - Default: 'center' (shows center of image)
//   - Options: 'left', 'right', 'top', 'bottom', 'center'
//   - Custom: '30% 50%' (horizontal%, vertical%) for precise control
//   - Use this when important subjects are getting cut off on mobile/desktop
// 
// objectFit: Controls how the image fills the screen (optional)
//   - Default: 'contain' (shows full image, black bars as needed)
//   - 'cover': Fills screen completely, crops edges (use if you want no black bars for a specific scene)
const storyScenes = [
  {
    id: 1,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPwJFjr_Zc8IXUZ1BmGNFeZOxUwl2Ft0fluQEPrYhyqW8yUQrS2uASd0pllS4rRO-PzDcid4hwTf6rB1ug5JpRh6TjiXpGJMl7LOsv4Pc7eOWNEPlNT=w1920-h1080',
    text: "2025 was truly a year of significant growth for our family—a year of big moves, major milestones, and a surprise that will change everything!",
    textPosition: 'center'
  },
  {
    id: 2,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOqhd7FreaIWKfOICB9Z5fYZfgspEF0_OyiJaK3qZE9_GE6U0xVFh3sNQNvSIGqRK-zwk5hues2hjdJjU-vGY1jYQcXrTApDl4lhn9Exs8kkhPkR3Sj=w1920-h1080',
    text: "We kicked off the year with a bang: Emi was already showing off her independence, walking around the block of Andover and insisting on her weekly pilgrimage stops at Good Life, Bernal Bakery, and Epicurean. The excitement continued as Scott and Doris took turns flying to Maryland in January to meet our new nephew, Miles. It was a heartwarming start to the year, connecting with family and celebrating new life.",
    textPosition: 'center'
  },
  {
    id: 3,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOZ2YvXb0hNmjQxNsNJlDezeLhZBVnKGCbk9xvvLtN1Jaj-Jd_zCWGP5gQ-azwrZXqjAwP-rEiKAtWVcCU0T0-g5AyQxB7Mxqzt90-dIVQTUxHDpLWM=w1920-h1080',
    text: "February brought a major transition as we made the hard decision to leave our wonderful nanny share and venture out to the warmer East Bay.",
    textPosition: 'center'
  },
  {
    id: 4,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOt7Jm2d0_aPooPDc5EsJgPaRlZb3n8u_hPb-Ytsk2IZQAaodqb4i7_5BGb4PV9T0N7gvbmivT0LjeqKm29v0ii-tejYwQ6RYrp77apQ2FICWgmH7-u=w1920-h1080',
    text: "The house hunt proved challenging, and the next few months were spent temporarily in Walnut Creek.",
    textPosition: 'center'
  },
  {
    id: 5,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOUlPoHdS42ndZNM-16WUQWoJtMAsLuN6Nn3TI_dzHvK2cR27q4w8VxH_oZuxro4q8k1tM6-UsP-aue6WfnVKn-LfhmLsNeeIy-bhof19wgL7gGNqoa=w1920-h1080',
    text: "Looking back, however, the temporary chaos proved to be a precious gift: Emi got dedicated, quality time with both her Popo and Mommom, who graciously tag-teamed watching her.",
    textPosition: 'center'
  },
  {
    id: 6,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczO1tete6vQyY4flVyOqZdDudLNtmepUqTWVdFYG5BvBzFshxJmReL2Rl3n5c5sTihuMdvcFJdPoD1fx5PzQmZvNlrs2fgiHnyRkYUVefhRYLt1i2o3J=w1920-h1080',
    text: "By April, we had finally settled in Moraga—our little 'Boraga'—and we've come to truly appreciate the quiet stability of our new home.",
    textPosition: 'center'
  },
  {
    id: 7,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPPiR7RXkbhJGRKac7kRjetE9YOac-i9tRFVHEaMSJk4MRdKm91N_-Mcl-G6hRpocnrrKAfXGqvslJCSraThsdzmaL2WVsZUTRXqtYDVXRhuiBjGWPV=w1920-h1080',
    text: "Over the following months, we slowly worked on making the new house feel like home. Emi, ever the adaptable spirit, adjusted much quicker than we did! She made fast friends with the new nanny and established her new route: Moraga Commons, the library, and, naturally, almost daily trips to Starbucks.",
    textPosition: 'center'
  },
  {
    id: 8,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNpUn9AgeNAItitj6DbXVryaDMq3GcsjTPM_Ne69QMqFScqWTYxVPwqfFaZTzOlrf19y9XRmmworg12txMg6_IZLQX99GPknSmgJ5OM8nRnb8Fltx9K=w1920-h1080',
    text: "Amidst the decorating and settling, we were lucky enough to host family visits, adding wonderful moments to the early chaos.",
    textPosition: 'center'
  },
  {
    id: 9,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOD44NseNcb1xwoTLc7iySObS78jrznXF052xwJJuWArG29bRBhjMEPhcTtcgIspizISLxKStc_DOZoo3610tkZVGh88SNoT8IOcvCP3GE_ooqbXOUu=w1920-h1080',
    text: "In September, we celebrated a major personal milestone: our first international trip since Emi was born. We celebrated our 10th anniversary in Vienna and then stopped in Macedonia to celebrate Mitko and Katie.",
    textPosition: 'center'
  },
  {
    id: 10,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczP20bVSFr_TbdTGkPcvPRDHzJFpP9EQE8hoO3BIPI_zIrlSpBCqNl-Rzr0wJZPCP10C5yVq0O3uPNZIxK5dwvmFqccRFO-OxvAhbeUwzZNf75uAu7jC=w1920-h1080',
    text: "Emi and Aspen spent a wonderful eight days with her Mommom while we were abroad.",
    textPosition: 'center'
  },
  {
    id: 11,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPBjGRugrHZMAEjIATEbF70gnjbfr5levvGCzfQVhfADHQ4TNSBZNTzNREV-_Fc1rLtj8vXZh-HWHbkprxP3XkkA5Uks8dKYqY3IRKJMJmIau83tx3v=w1920-h1080',
    text: "Just a month later, Emi took her first plane ride as a mobile toddler! Thankfully, it was only a two-hour flight to Arizona where she got to meet her cousin for the first time.",
    textPosition: 'center'
  },
  {
    id: 12,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOQtPo3BuC6aRV2w_Mmpljtvsm57aqdiLEfVi-hkGapaMIzzKB8CJhpuIWWoeY38VDMNaUP97FpOMb8e6hsMPGNIT2g4K4IaKaORSzB9fH6Q5KUqSNl=w1920-h1080',
    text: "We also enjoyed magical local holiday adventures, including a festive trip to Glowfari.",
    textPosition: 'center'
  },
  {
    id: 13,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMIgMzgQEio8GITlBr-n9paQXzMJ4GNyLPGwx_ta0DtrTu1Lep6_BsUOlhC4O0nvrnsn693o28koI-CCxd4UymKToHiXC-SPkt8_v4x4ak06bko42Jj=w1920-h1080',
    text: "The final major shift came when Emi started preschool. After three weeks, it feels like she's completely adjusted, though we are still figuring out the sudden quiet of the house during the day! Aspen, on the other hand, is thrilled to have her space back!",
    textPosition: 'center'
  },
  {
    id: 14,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMIgMzgQEio8GITlBr-n9paQXzMJ4GNyLPGwx_ta0DtrTu1Lep6_BsUOlhC4O0nvrnsn693o28koI-CCxd4UymKToHiXC-SPkt8_v4x4ak06bko42Jj=w1920-h1080',
    text: "We are now closing out the year, cherishing the holiday season with Popo and GongGong.",
    textPosition: 'center'
  },
  {
    id: 15,
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPBjGRugrHZMAEjIATEbF70gnjbfr5levvGCzfQVhfADHQ4TNSBZNTzNREV-_Fc1rLtj8vXZh-HWHbkprxP3XkkA5Uks8dKYqY3IRKJMJmIau83tx3v=w1920-h1080',
    text: "As we look ahead to everything 2026 has in store, we can't forget the biggest and most exciting surprise of the year: Emi is getting a promotion! She's being upgraded to a Big Sister! We are thrilled (and perhaps a little terrified!) to welcome Baby Boy in early 2026.",
    textPosition: 'center'
  }
];

