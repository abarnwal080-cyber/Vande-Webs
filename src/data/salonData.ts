import { AwardItem, ServiceCategory, VideoItem, TestimonialItem } from '../types';

export const BUSINESS_INFO = {
  name: "Pooja Makeover and Salon",
  tagline: "Bridal Makeover · Nails & Tattoo Art · Hair & Skincare Specialist",
  owner: "Pooja",
  ownerTitle: "Founder & Lead Artist",
  phone: "9955131867",
  formattedPhone: "+91 99551 31867",
  address: "Near Punjab National Bank, Bank Chowk, Chetnapuri, Sihauta Bazar, Maharajganj, Siwan, Bihar - 841238",
  locationDirectionsUrl: "https://share.google/0eFQZpMuBhssGTnhm",
  instagramUrl: "https://www.instagram.com/puja_makeover_and_salon/",
  instagramHandle: "@puja_makeover_and_salon",
  experienceYears: "5+",
  awardsCount: "3",
  timings: "10:30 AM to 7:00 PM (Open all days of the week)",
  rating: "5.0",
  ratingCount: "250+",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14347.886470390176!2d84.48419616053303!3d26.115852577771746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992f808a901f4c7%3A0xe54d922a944358a5!2sMaharajganj%2C%20Bihar%20841238!5e0!3m2!1sen!2sin!4v1790400000000!5m2!1sen!2sin",
  ownerPhoto: "https://plain-apac-prod-public.komododecks.com/202610/01/8XCRSyXJ5sOXALJYdqbv/image.png",
  salonFrontPhoto: "https://plain-apac-prod-public.komododecks.com/202610/01/5dvG1xvTZuONPVA1ITlz/image.png"
};

export const AWARDS: AwardItem[] = [
  {
    id: "award-1",
    title: "Prestigious Excellence & Artistry Award",
    date: "Maharajganj & Bihar",
    recipient: "Pooja Makeover and Salon",
    badge: "Excellence Honor",
    images: [
      "https://plain-apac-prod-public.komododecks.com/202610/01/EJb3SRUYc36t6NTipki4/image.png"
    ],
    description: "Honored on stage with prestigious state recognition for outstanding artistry, bridal transformations, and professional salon excellence in Maharajganj, Siwan."
  },
  {
    id: "award-2",
    title: "Best Beauty, Nail & Tattoo Studio Award",
    recipient: "Pooja Makeover and Salon",
    badge: "Industry Leadership",
    images: [
      "https://plain-apac-prod-public.komododecks.com/202610/01/3W0w2NltRR6nSVjDwZQM/image.png"
    ],
    description: "Awarded for exceptional mastery in professional nail extensions, hygienic tattoo craftsmanship, and personalized bridal styling."
  },
  {
    id: "award-3",
    title: "Top Rated Bridal Makeover & Styling Trophy",
    recipient: "Pooja Makeover and Salon",
    badge: "5.0 Rated Excellence",
    images: [
      "https://plain-apac-prod-public.komododecks.com/202610/01/ft5igBu3hqJhxcjrNhZ7/image.jpg"
    ],
    description: "Celebrated for supreme client satisfaction, flawless HD bridal makeovers, and hygienic studio atmosphere across Siwan district."
  }
];

export const SERVICES: ServiceCategory[] = [
  {
    id: "bridal-makeup",
    title: "Bridal and Event Makeup",
    hindiTitle: "💄 Bridal and Event Makeup",
    iconName: "Palette",
    intro: "Specialized bridal makeovers, engagement looks, and party styling designed for memorable royal moments.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-S9GLoWMjwCNskhRTsCZodrH9Eun2EsjGEhgAMuoOSA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwG5P6aGH_HiovOjOz_K0OvKaoTXWVlTAvJOao4KgRug&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmLe7pfaAjWWx7mDb2LPaT_3vT3hU2zPcWWRzou2Uuw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwgW6cy2gTeDKvhiWJYYjoSoliZRpeL6BKqtWdCuEcQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LAa_tjgQ-pw2eZKWpIY77ertZBCEHDYiRWjm3w6V1g&s=10"
    ],
    groups: [
      {
        groupName: "Bridal & Celebration Makeup",
        items: [
          "Specialized Royal Bridal Makeovers",
          "HD High-Definition Camera Ready Bridal Makeup",
          "Airbrush Flawless Bridal Artistry",
          "Engagement Looks & Ring Ceremony Glam",
          "Reception Makeover & Cocktail Party Styling",
          "Haldi & Mehendi Vibrant Looks",
          "Natural Glow / Dewy No-Makeup Look"
        ]
      },
      {
        groupName: "Hairstyling & Floral Setting",
        items: [
          "Bridal Designer Buns with Rose & Jasmine Styling",
          "Glam Curls, Hollywood Waves & Textured Ponytails",
          "Traditional & Contemporary Braiding with Accessories",
          "Hairstyling for Short, Medium & Long Hair",
          "Pre-Wedding Hair Consultations & Trials"
        ]
      },
      {
        groupName: "Draping & Complete Finishing",
        items: [
          "Saree Draping (Gujarati, South Indian, Bengali, Modern Pleating)",
          "Lehenga Dupatta Double-Drape & Pinning",
          "Heavy Bridal Jewellery & Maang Tikka Setting",
          "Kamal & Waistband Adjustment",
          "Premium False Eyelash Extension & Setting"
        ]
      }
    ]
  },
  {
    id: "nails-and-tattoos",
    title: "Nails and Tattoos",
    hindiTitle: "💅 Nails and Tattoos Art Studio",
    iconName: "Sparkles",
    intro: "Professional nail art, nail extensions, and permanent or temporary tattoos created with 100% clean & sterilized tools.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnnhSJHCNeDVtD2Wa133dcFei_SgeEVp39gyBlA5ZbA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniiZddqy4X-mj8oUWrKQIEqP-t74gPnkTOnq19dJJXA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_Plx-3IvlF4zaeUhvzNdOwrYuaYLFg13GUmbH0KHAg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0hnWOGkmSzVXEWAyW5o59M7TP863IUDxYRgCU2_zuQ&s=10"
    ],
    groups: [
      {
        groupName: "Professional Tattoo Studio",
        items: [
          "Custom Permanent Tattoos (Name, Script, Sanskrit Shlokas, Feathers)",
          "Artistic & Portrait Tattoos with Precision Needlework",
          "Minimalist Fine-Line Tattoos & Finger Tattoos",
          "Temporary Tattoos & Waterproof Event Body Art",
          "Cover-Up Tattoos & Touch-Ups",
          "100% Hospital-Grade Sanitization & Sterile Fresh Needles",
          "Complete Tattoo Aftercare Consultation"
        ]
      },
      {
        groupName: "Luxury Nail Extensions & Art",
        items: [
          "Acrylic Nail Extensions with High-Gloss Gel Finish",
          "Gel Nail Extensions & Tip Overlays",
          "Designer Bridal Nail Art & Chrome Metallic Accents",
          "French Tips, Ombre Nails & Glitter Inlays",
          "3D Nail Stones, Crystals & Charm Embellishments",
          "Nail Extension Refills, Buffing & Safe Removal",
          "Strengthening Nail Spa & Cuticle Nourishment"
        ]
      }
    ]
  },
  {
    id: "hair-care",
    title: "Hair Care & Styling",
    hindiTitle: "💇‍♀️ Hair Specialist & Stylist",
    iconName: "Scissors",
    intro: "Haircuts, styling, global coloring, keratin, botox, and nourishing treatments for healthy, lustrous hair.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_Plx-3IvlF4zaeUhvzNdOwrYuaYLFg13GUmbH0KHAg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0hnWOGkmSzVXEWAyW5o59M7TP863IUDxYRgCU2_zuQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReR_qPhwhyHIbdcOBc3zVMO9MwnR4Z_y4m8pR4VeUqWg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUmwY7xwBd3Y608aqPcowj1-pVkIRsY_9BPTBzzWdhQ&s=10"
    ],
    groups: [
      {
        groupName: "Hair Cuts & Styling",
        items: [
          "Designer Haircuts (Layered, Feather, Bob, Step Cut, Trims)",
          "Blow Dry & Volume Setting",
          "Hair Styling (Glam Curls, Straight Ironing, Updos)",
          "Wash & Deep Condition"
        ]
      },
      {
        groupName: "Coloring & Highlights",
        items: [
          "Global Hair Color & Ammonia-Free Tones",
          "Root Touch-Up & Grey Coverage",
          "Balayage, Ombre & Highlights",
          "Hair Glossing & Shine Treatment"
        ]
      },
      {
        groupName: "Treatments & Spa",
        items: [
          "Keratin Smooth Therapy",
          "Hair Botox Nourishment Ritual",
          "Permanent Hair Straightening & Rebonding",
          "Luxury Hair Spa & Anti-Dandruff Scalp Treatment",
          "Hot Oil Ayurvedic Head Massage"
        ]
      }
    ]
  },
  {
    id: "skin-care",
    title: "Skincare & Facials",
    hindiTitle: "🧖‍♀️ Skincare & Aesthetic Treatments",
    iconName: "Sparkles",
    intro: "Specialized facials, deep clean-up, bridal glow rituals, and skin health rejuvenation packages.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LPYQh2oz2CTnOO3Hh9dxaCn2d003bD_3m0l7jHszqQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZZQPE9ugBWsNQQyovGmN4hDnOWPNPq-D67Q2H2O2bg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_0AHW-hvvr2BK9imrOdTxbSqYmjawuBLjpQrZh1xGw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq9JnI8HJTg6RDWCn0OmgXT_JYwF1jmoj63Lv02S3KuQ&s=10"
    ],
    groups: [
      {
        groupName: "Facials & Clean-Up",
        items: [
          "Hydrafacial Deep Hydration & Pore Refining",
          "Brightening Diamond & Gold Facial",
          "Acne-Focused Anti-Bacterial Facial",
          "Herbal & Fruit Refreshing Facial",
          "Express Face Clean-Up & Blackhead Removal"
        ]
      },
      {
        groupName: "Grooming & Waxing",
        items: [
          "Threading (Eyebrows, Upper Lip, Chin, Full Face)",
          "Chocolate Waxing, Rica Waxing & Body Waxing",
          "Face Bleach & D-Tan Packs",
          "Body Polishing & Glow Wraps",
          "Under-Eye Dark Circle Therapy"
        ]
      }
    ]
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: "video-1",
    title: "Signature Bridal Glow & Artistry",
    clientType: "Bridal Transformation",
    url: "https://scontent-vie1-1.cdninstagram.com/o1/v/t2/f2/m86/AQMJIsPWjJ7rcdjulPmJ8jeScVdABsDx-cYvlAe7gfaYtAkyK5SrUZQfdu4uRs75BbkxXlQAgBuGGITTs355NagkZsp2LypRjCeUFa0.mp4?_nc_cat=103&_nc_sid=5e9851&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=w5YvPQbZwIgQ7kNvwHiZAlA&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTM1MzY4NDcxMjk0NDYyNywiYXNzZXRfYWdlX2RheXMiOjc4LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MzgsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=98586579d03fc038&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DQTREM0FGQzY1MjczQjNBOUIzRDNEQ0Q0N0ZBMjRCNV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzQxNDQzOEU2QkZCOUZGRURFMDAzMEFDRDFDN0M4NEJBX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACbmz5-H6crnBBUCKAJDMywXQENEOVgQYk4YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=2vrqyFsAgNIUWVeQ1v-WIQ&_nc_ss=72a02&_nc_zt=28&oh=00_AQNRu-hPacmWsYWQUhLTAhONkw3adjQ-ze7bCkEhZSwqMA&oe=6AC010F8"
  },
  {
    id: "video-2",
    title: "Royal Wedding Day Glamour",
    clientType: "Bridal Masterpiece",
    url: "https://scontent-lax3-2.cdninstagram.com/o1/v/t2/f2/m86/AQOpMuwQRMUr_3k-MhiQ-wgpAJd8paR2LBL7GV_U2fUI8PvlfRQ_eD5Ml_ab-9h1BSyZ2VjLmAl7rHm-6LXO6RPGad5lZbR_R_8xAP0.mp4?_nc_cat=106&_nc_sid=5e9851&_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_ohc=ZvN0Y24o6IcQ7kNvwG5QPPd&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTA0ODg3OTQxMTEwNzU3MCwiYXNzZXRfYWdlX2RheXMiOjI3LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjksInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=173051c55c04da29&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CNzQzOEZBQjc3NzE1MkM1Q0M5QzRDMUM5RTA1Q0U4Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0Q0NDhFNDk1QkRBQzkzNjZBNjVCQzU1QjI2RTk2RTg2X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACbk27DL6PzcAxUCKAJDMywXQD2GZmZmZmYYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=rdMfnjJxq7z8lZhQDVvaJg&_nc_ss=70689&_nc_zt=28&oh=00_AQOpb4Pg6gNd1U4I3sbmDeFe9JgBKwwXDCAON3I1GXVFdA&oe=6AC01BD7"
  },
  {
    id: "video-3",
    title: "Flawless HD Makeup & Saree Draping",
    clientType: "Engagement Styling",
    url: "https://scontent-sjc3-1.cdninstagram.com/o1/v/t2/f2/m86/AQOamh1QIagYjbOVocA3CqFwApgksWnP3lyiHpeTmZGnBb6JLn98-d6kFmMPpAfB_ameuknDOxjzz1NT0NJfiIhgLK6Imc0gJpGZqdI.mp4?_nc_cat=103&_nc_sid=5e9851&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_ohc=oUHyppQSS_YQ7kNvwHrLSby&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6OTgwMjQ0MDExNDE4OTE0LCJhc3NldF9hZ2VfZGF5cyI6MTIzLCJ2aV91c2VjYXNlX2lkIjoxMDgyNywiZHVyYXRpb25fcyI6MjMsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=77bd746b16bb60fe&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8wQTQ4QkMwNTk2Q0FBN0UyMDI3NTA3QUQ2N0FCOTBCQ192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzdDNDBDNzIwMDRGNTJCNTNBQjc4MzUzMjg0MjkwMDgyX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACbElMCB2-G9AxUCKAJDMywXQDeAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZZapAQA&_nc_gid=perRzQ9Grj-69dmpwtNv_w&_nc_ss=72a02&_nc_zt=28&oh=00_AQPVEVx2Qd324uGm313LTBrE-w-s-Zljo4RaOCABdrAubg&oe=6AC00F30"
  },
  {
    id: "video-4",
    title: "Nail Extensions & Designer Artistry",
    clientType: "Nails & Tattoo Studio",
    url: "https://scontent-sea5-1.cdninstagram.com/o1/v/t2/f2/m86/AQPYR-QQw3ulgvn_zC6higiT5qclot8jngSY9vKSKKELHs8Ew1sVuCdE-2uORynn8oOCN6adqC6TVaJMcU7wBZQ05TLBceBsENAsisM.mp4?_nc_cat=102&_nc_sid=5e9851&_nc_ht=scontent-sea5-1.cdninstagram.com&_nc_ohc=oysv37a8KvoQ7kNvwHFuY2F&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTY1MTcyNzM2MjYwNzYyOSwiYXNzZXRfYWdlX2RheXMiOjEyOSwidmlfdXNlY2FzZV9pZCI6MTA4MjcsImR1cmF0aW9uX3MiOjM1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=b22496dc25f86469&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9FNTQ2RTAzMDBBQUIzMzJGMDEwMUE5Q0U5MTM5NDg4MV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0M1NDNBNTBEQzhGMTU0NDAxOTdFQUUxMjUwMjZEQkI4X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACaaqLbrl4_vBRUCKAJDMywXQEGmZmZmZmYYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZZapAQA&_nc_gid=d_FEub2k9LZBKQL7YaXuDw&_nc_ss=70a8c&_nc_zt=28&oh=00_AQPC5BL_MlxTC3TnfjV9yGr-SQomIdA90cViJ9tl1AHHHQ&oe=6AC00EA3"
  },
  {
    id: "video-5",
    title: "Hair Styling, Cuts & Salon Highlights",
    clientType: "Salon Specials",
    url: "https://scontent-fra5-1.cdninstagram.com/o1/v/t2/f2/m86/AQPHqMmJhPILpagtksSCht2Nx2qwyySBXmQ6o-w0tmf0If80GsU0VT5yrLRvsIqm4bmP_y1fa5Jawuj8Cw04INIe.mp4?_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent-fra5-1.cdninstagram.com&_nc_ohc=jSlbaljgdXwQ7kNvwGgL8ZW&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzEuMzYwLmRhc2hfYmFzZWxpbmVfM192MSIsInhwdl9hc3NldF9pZCI6MTgwNzYyMTczNDg0MDUzODIsImFzc2V0X2FnZV9kYXlzIjoxOTIsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoxNCwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=143de08b47155007&_nc_vs=HBksFQIYR2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xOTMwNTc3NDQ1MDAxNzMzXzkwMjI2OTU5MzA3NDU4Njk2NDQubXA0FQACyAESABUCGFFpZ194cHZfcGxhY2VtZW50X3Blcm1hbmVudF92Mi8yNTQ5QTNDNjJENUJBNjk2MEMwRTc3NkVBOEQ3NjhBRF9hdWRpb19kYXNoaW5pdC5tcDQVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmjOL5nqqOnEAVAigCQzEsF0AtEOVgQYk3GBJkYXNoX2Jhc2VsaW5lXzNfdjERAHX-B2XmnQEA&_nc_gid=WQYt9ERrBU7DaPxuh6-Rcw&_nc_ss=72a02&_nc_zt=28&oh=00_AQPDS8r4hqK28AGMAmwDilN2fi2VgbUCKNprz8grqa0QEg&oe=6AC003D8"
  },
  {
    id: "video-6",
    title: "Behind The Scenes & Client Radiance",
    clientType: "Studio Transformation",
    url: "https://scontent-lga3-1.cdninstagram.com/o1/v/t2/f2/m86/AQNvB_Is6f0FXgIl9iLHRczmpxlAwBcIHEt7dLj8RyTQEM92tdrNYHD9wi0n2RoVuL9bSODwtK3JvSN67HZfmnzw.mp4?_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=mmopYgw5ZG8Q7kNvwE6bfmw&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuMzYwLmRhc2hfYmFzZWxpbmVfM192MSIsInhwdl9hc3NldF9pZCI6MTgwNzIwNzQyMDc0MDUzODIsImFzc2V0X2FnZV9kYXlzIjoyMjksInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoxMSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=9bae2ee99c720498&_nc_vs=HBksFQIYR2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xNjAwMzA0MzQ0NTA1MzIxXzMyNTA2MzQyODA0OTAyNDI1MzcubXA0FQACyAESABUCGFFpZ194cHZfcGxhY2VtZW50X3Blcm1hbmVudF92Mi80ODRDRDM0NTc1NTc5N0NBNUQ1MjE2NDBEMjE1NjU5Q19hdWRpb19kYXNoaW5pdC5tcDQVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmjJXlt5WdmkAVAigCQzMsF0A1kOVgQYk3GBJkYXNoX2Jhc2VsaW5lXzNfdjERAHX-B2XmnQEA&_nc_gid=49SDi2QZVaariskOPsv8oA&_nc_ss=70a8c&_nc_zt=28&oh=00_AQM7PFdFG6cbBB4ukLKKG4gFjR2ThcwPd-7Xzepe8pX_eA&oe=6ABFFE35"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "5.0 ★ Rated Excellence",
    subtitle: "Highly rated in Maharajganj for clean tattoo work, luxury nail extensions, and bridal makeovers.",
    icon: "Award"
  },
  {
    title: "Sterile & Clean Tattooing",
    subtitle: "100% hygienic procedures, fresh disposable needles, and certified skin-safe pigments.",
    icon: "ShieldCheck"
  },
  {
    title: "High-Quality Nail Extensions",
    subtitle: "Durable acrylics, gel nails, 3D stone art, and bespoke bridal nail designs that last weeks.",
    icon: "Sparkles"
  },
  {
    title: "Specialized Bridal Makeovers",
    subtitle: "Customized HD & airbrush bridal artistry tailored for weddings in Maharajganj, Siwan and Bihar.",
    icon: "Heart"
  },
  {
    title: "Complete Hair & Skincare",
    subtitle: "Hydrafacial, clinical peels, keratin therapy, botox, and comprehensive grooming packages.",
    icon: "Clock"
  },
  {
    title: "Open 7 Days a Week",
    subtitle: "Conveniently located at Bank Chowk, Chetnapuri near Punjab National Bank from 10:30 AM to 7:00 PM.",
    icon: "Trophy"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-1",
    name: "Simran Gupta",
    location: "Maharajganj, Siwan",
    service: "Bridal HD Makeover & Saree Draping",
    rating: 5,
    date: "24 September 2026",
    comment: "Pooja Makeover did my bridal makeup and the look was heavenly! Very professional bridal services in Maharajganj area. The makeup stayed flawless all night!",
    avatarText: "SG"
  },
  {
    id: "review-2",
    name: "Ananya Sharma",
    location: "Sihauta Bazar, Maharajganj",
    service: "Permanent Custom Tattoo",
    rating: 5,
    date: "18 September 2026",
    comment: "Highly rated for clean tattoo work! They used fresh sterile needles, explained aftercare thoroughly, and the tattoo line work came out incredibly sharp and beautiful.",
    avatarText: "AS"
  },
  {
    id: "review-3",
    name: "Ritu Kumari",
    location: "Bank Chowk, Maharajganj",
    service: "Acrylic Nail Extensions & Nail Art",
    rating: 5,
    date: "12 September 2026",
    comment: "Best nail studio in Maharajganj! The high-quality nail extensions and stone work lasted more than a month without chipping. Truly 5-star service!",
    avatarText: "RK"
  },
  {
    id: "review-4",
    name: "Priya Singh",
    location: "Siwan, Bihar",
    service: "Hydrafacial & Keratin Hair Treatment",
    rating: 5,
    date: "05 September 2026",
    comment: "Very polite staff and pristine hygienic environment. My hair felt so soft after keratin and the facial gave an instant festive glow. Highly recommended!",
    avatarText: "PS"
  }
];

export const TICKER_ITEMS = [
  "Pooja Makeover and Salon",
  "Specialized Bridal Makeovers",
  "Professional Nail Extensions",
  "Clean & Sterile Tattoo Work",
  "Permanent & Temporary Tattoos",
  "Keratin & Hair Botox",
  "Hydrafacial & Skin Peels",
  "Engagement & Party Styling",
  "Maharajganj, Siwan, Bihar",
  "5.0 ★ Rated Studio"
];
