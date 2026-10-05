
// ════════════════════════════════
//  DATA
// ════════════════════════════════
var DEFAULT_SITE_SETTINGS={siteName:'AgaStream',logoMark:'A',pageTitle:'AgasobanuyeStream | Watch Free Movies & Series Online',logoUrl:'',footerYear:'2026',footerAbout:'Your premier platform for watching Agasobanuye movies and series online for free. Entertainment dubbed in Kinyarwanda for everyone.',phone:'+250 715 136 109',email:'agastream250@gmail.com',youtube:'https://www.youtube.com',instagram:'https://www.instagram.com',facebook:'https://www.facebook.com',copyright:'NobleCash Group'};
var siteSettings=Object.assign({},DEFAULT_SITE_SETTINGS);
var customSections=[];
var adminSlides=[];
var SLIDES=[
  {title:'BAHUBALI 2: The Conclusion',desc:"Bhallaladeva conspires against Amarendra, leading to his death at the hands of Kattappa. Years later, Amarendra's son seeks to avenge his father's demise.",genre:'Action',year:'2015',interpreter:'Rocky',img:'slides/BAHUBALI 2 POSTER.jpg',link:'https://agasobanuyenow.com/movies/baahubali-2a:-the-conclusion-by-rocky/watch',type:'movie'},
  {title:'THE BLUFF',desc:'A former female pirate who must protect her family when the mysterious sins of her past catch up to her.',genre:'Action',year:'2026',interpreter:'Rocky',img:'slides/THE BLUFF POSTER.jpg',link:'https://agasobanuyenow.com/movies/the-bluff-a-by-rocky/watch',type:'movie'},
  {title:'SISU 2: Road To Revenge',desc:'Korpi dismantles the house where his family was murdered and loads it on a truck. He soon finds himself in a violent cross-country chase.',genre:'Action',year:'2025',interpreter:'Rocky',img:'slides/SISU 2 POSTER.jpg',link:'https://agasobanuyenow.com/movies/sisu-2:-road-to-revenge-by-rocky/watch',type:'movie'},
  {title:'SHELTER',desc:'A former British government assassin living in isolation off the coast of Scotland is forced back into violent confrontation with his past.',genre:'Action',year:'2026',interpreter:'Rocky',img:'slides/Shelter.jpg',link:'https://agasobanuyenow.com/movies/shelter-by-rocky/watch',type:'movie'},
  {title:'BAAGHI 4',desc:'Plagued by grief, he spirals into self-destruction, haunted by a lost love. Reality bends as a buried truth pulls him into a dangerous game.',genre:'Action',year:'2025',interpreter:'Rocky',img:'slides/BAAGHI 4 POSTER.jpg',link:'https://agasobanuyenow.com/movies/baaghi-4-a-by-rocky/watch',type:'movie'},
  {title:'THE WRECKING CREW',desc:"Private investigator Walter Hale is killed in an apparent hit and run in Hawaii. His sons must uncover the truth.",genre:'Action',year:'2026',interpreter:'Rocky',img:'slides/Wrecking crew poster.jpg',link:'https://agasobanuyenow.com/movies/the-wrecking-crew-a-by-rocky/watch',type:'movie'},
  {title:'THE INTERNSHIP',desc:'A ruthless, highly trained assassin raised from childhood in a top-secret CIA program is ready to dismantle the institution that stole her youth.',genre:'Action',year:'2026',interpreter:'Rocky',img:'slides/INTERNSHIP POSTER.jpg',link:'https://agasobanuyenow.com/movies/the-internship-by-rocky/watch',type:'movie'},
  {title:'BAD INFLUENCER',desc:'A single mother and luxury bag counterfeiter finds herself teaming up with a self-obsessed influencer to sell her bags and scrape her way out of debt.',genre:'Drama',year:'2025',interpreter:'Rocky',img:'slides/BAD INFLUENCER POSTER.jpg',type:'series',episodes:['https://agasobanuyenow.com/watch/tv/bad-influencer-by-rocky/1/1','https://agasobanuyenow.com/watch/tv/bad-influencer-by-rocky/1/2','https://agasobanuyenow.com/watch/tv/bad-influencer-by-rocky/1/3','https://agasobanuyenow.com/watch/tv/bad-influencer-by-rocky/1/4','https://agasobanuyenow.com/watch/tv/bad-influencer-by-rocky/1/5','https://agasobanuyenow.com/watch/tv/bad-influencer-by-rocky/1/6','https://agasobanuyenow.com/watch/tv/bad-influencer-by-rocky/1/7']},
];

var ALL_MOVIES=[

  //NEW FILMS


  {title:'WILD HEART',poster:'posters/wild heart.jpg',meta:'2023 • Drama • Series',voice:'Gaheza',genre:'drama',section:['new','series'],desc:'The life of a young boy named Yaman growing up on the streets, facing challenges of survival.',episodes:['https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/1',
                                                    'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/2',
                                                    'https://agasobanuyenow.com/watch/tv/wild-heart-by-ggaheza/1/3',
                                                      'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/4',
                                                       'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/5',
                                                        'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/6',
                                                         'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/7',
                                                          'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/8',
                                                           'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/9',
                                                            'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/10',
                                                             'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/11',
                                                              'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/12',
                                                               'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/13',
                                                                'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/14',
                                                                 'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/15',
                                                                  'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/16',
                                                                   'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/17',
                                                                    'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/18',
                                                                     'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/19',
                                                                      'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/20',
                                                                       'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/21',
                                                                        'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/22',
                                                                         'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/23',
                                                                          'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/24',
                                                                           'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/25',
                                                                            'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/26',
                                                                             'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/27',
                                                                              'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/28',
                                                                               'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/29',
                                                                                'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/30',
                                                                                 'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/31',
                                                                                  'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/32',
                                                                                   'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/33',
                                                                                    'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/34',
                                                                                     'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/35',
                                                                                      'https://agasobanuyenow.com/watch/tv/wild-heart-by-gaheza/1/36',]},
  {title:'THE INTERNSHIP',poster:'posters/INTERNSHIP POSTER.jpg',meta:'2026 • Action • Movie',voice:'Rocky',genre:'Action',section:['new','action'],desc:'A ruthless, highly trained assassin raised from childhood in a top-secret CIA program.',link:'https://agasobanuyenow.com/movies/the-internship-by-rocky/watch',isNew:true},
  {title:'ONE PIECE S2',poster:'posters/one-piece.jpg',meta:'2026 • Thriller • Series',voice:'Gaheza',genre:'Adventure',section:['new','series','adventure'],desc:'Monkey D. Luffy and the Straw Hat Pirates embark on their journey across the Grand Line.',episodes:['https://agasobanuyenow.com/watch/tv/one-piece-s2-by-gaheza/1/1','https://agasobanuyenow.com/watch/tv/one-piece-s2-by-gaheza/1/2','https://agasobanuyenow.com/watch/tv/one-piece-s2-by-gaheza/1/3','https://agasobanuyenow.com/watch/tv/one-piece-s2-by-gaheza/1/4','https://agasobanuyenow.com/watch/tv/one-piece-s2-by-gaheza/1/5','https://agasobanuyenow.com/watch/tv/one-piece-s2-by-gaheza/1/6','https://agasobanuyenow.com/watch/tv/one-piece-s2-by-gaheza/1/7']},
  {title:'SHELTER',poster:'posters/Shelter poster.jpg',meta:'2026 • Action • Movie',voice:'Rocky',genre:'Action',section:['new','action'],desc:'A former British government assassin forced back into violent confrontation with his past.',link:'https://agasobanuyenow.com/movies/shelter-by-rocky/watch',isNew:true},
  {title:'TAKEN',poster:'posters/TAKEN POSTER.jpg',meta:'2023 • Action • Series',voice:'Rocky',genre:'Action',section:['new','series'],desc:"A former Green Beret, Bryan Mills, deals with a personal tragedy that shakes his world.",episodes:['https://agasobanuyenow.com/watch/tv/taken-by-rocky/1/1','https://agasobanuyenow.com/watch/tv/taken-by-rocky/1/2','https://agasobanuyenow.com/watch/tv/taken-by-rocky/1/3','https://agasobanuyenow.com/watch/tv/taken-by-rocky/1/4','https://agasobanuyenow.com/watch/tv/taken-by-rocky/1/5','https://agasobanuyenow.com/watch/tv/taken-by-rocky/1/6','https://agasobanuyenow.com/watch/tv/taken-by-rocky/1/7']},
  {title:'ALONG WITH THE GODS',poster:'posters/ALONG WITH GOD POSTER.jpg',meta:'2018 • Mystery • Movie',voice:'Rocky',genre:'Thriller',section:['new'],desc:'Three individuals lead Ja-hong into the afterlife where he undergoes a trial to determine reincarnation.',link:'https://agasobanuyenow.com/movies/along-with-the-gods-by-rocky/watch'},
  {title:'GHAJINI',poster:'posters/Ghajini poster.jpg',meta:'2008 • Action • Romance • Movie',voice:'Rocky',genre:'romantic',section:['new','romantic'],desc:"A businessman with short-term memory loss seeks revenge for his girlfriend's murder.",link:'https://agasobanuyenow.com/movies/ghajini-by-rocky/watch'},
  {title:'THE BLUFF',poster:'posters/THE BLUFF POSTER.jpg',meta:'2026 • Action • Movie',voice:'Rocky',genre:'Action',section:['new','action'],desc:'A former female pirate who must protect her family when the mysterious sins of her past catch up to her.',link:'https://agasobanuyenow.com/movies/the-bluff-a-by-rocky/watch',isNew:true},
  {title:'BAAGHI 4',poster:'posters/BAAGHI 4 POSTER.jpg',meta:'2025 • Action • Movie',voice:'Rocky',genre:'Action',section:['new','action'],desc:'Plagued by grief, he spirals into self-destruction, haunted by a lost love.',link:'https://agasobanuyenow.com/movies/baaghi-4-a-by-rocky/watch'},
  {title:'BAHUBALI 2: The Conclusion',poster:'posters/BAHUBALI 2 POSTER.jpg',meta:'2017 • Action • Movie',voice:'Rocky',genre:'Action',section:['new','action'],desc:"Bhallaladeva conspires against Amarendra, leading to his death. Years later, Amarendra's son seeks revenge.",link:'https://agasobanuyenow.com/movies/baahubali-2a:-the-conclusion-by-rocky/watch'},
  {title:'PADMAN',poster:'posters/PADMAN POSTER.jpg',meta:'2018 • Drama • Movie',voice:'Rocky',genre:'Drama',section:['new','drama'],desc:'The true story of Arunachalam Muruganantham, who invented low-cost sanitary pads.',link:'https://agasobanuyenow.com/movies/padman-by-rocky/watch'},
  {title:'BEAUTY IN BLACK S2',poster:'posters/BEAUTY IN THE BLACK POSTER (1).jpg',meta:'2025 • Drama • Crime • Series',voice:'Rocky',genre:'drama',section:['new','series','drama'],desc:'A single mother and luxury bag counterfeiter teaming up with a self-obsessed influencer.',episodes:['https://agasobanuyenow.com/watch/tv/beauty-in-black-s2-by-rocky/1/1','https://agasobanuyenow.com/watch/tv/beauty-in-black-s2-by-rocky/1/2','https://agasobanuyenow.com/watch/tv/beauty-in-black-s2-by-rocky/1/3','https://agasobanuyenow.com/watch/tv/beauty-in-black-s2-by-rocky/1/4','https://agasobanuyenow.com/watch/tv/beauty-in-black-s2-by-rocky/1/5'],isNew:true},
  {title:'HEADS OF STATE',poster:'posters/HEAD OF STATES POSTER.jpg',meta:'2025 • Action • Movie',voice:'Rocky',genre:'Action',section:['new', 'action'],desc:'Two world leaders must put aside their differences to stop a global threat.',link:'https://agasobanuyenow.com/movies/heads-of-states-by-rocky/watch'},
  {title:'THE NAKED GUN',poster:'posters/Naked Gun Poster.jpg',meta:'2025 • Comedy • Action • Movie',voice:'Gaheza',genre:'Comedy',section:['new', 'action', 'comedy'],desc:'A bumbling detective stumbles into a massive conspiracy.',link:'https://agasobanuyenow.com/movies/the-naked-gun-by-gaheza/watch'},
  {title:"BILLIONAIRES' BUNKER",poster:'posters/billionaires bunker poster.jpg',meta:'2025 • Drama • Series',voice:'Rocky',genre:'Drama',section:['new','series','drama'],desc:'Ultra-rich families clash in a luxury underground bunker as civilization crumbles above them.',episodes:['https://agasobanuyenow.com/watch/tv/billionaires-bunker-s1-by-rocky/1/1','https://agasobanuyenow.com/watch/tv/billionaires-bunker-s1-by-rocky/1/2','https://agasobanuyenow.com/watch/tv/billionaires-bunker-s1-by-rocky/1/3','https://agasobanuyenow.com/watch/tv/billionaires-bunker-s1-by-rocky/1/4']},

  // TRENDING SECTION

  {title:'THE MANIPULATED',poster:'posters/manipulated.jpg',meta:'2025 • Drama • Series',voice:'Junior',genre:'drama',section:['trending','series','drama'],desc:'A psychological thriller about a family torn apart by manipulation and deception.',episodes:['https://agasobanuyenow.com/watch/tv/the-manipulated-s1-by-junior/1/1','https://agasobanuyenow.com/watch/tv/the-manipulated-s1-by-junior/1/2','https://agasobanuyenow.com/watch/tv/the-manipulated-s1-by-junior/1/3','https://agasobanuyenow.com/watch/tv/the-manipulated-s1-by-junior/1/4']},
  {title:'MOST DANGEROUS GAME',poster:'posters/MOST DANGEROUS GAME POSTER.jpg',meta:'2020 • Action • Movie',voice:'Rocky',genre:'action',section:['trending','action'],desc:'A man is hunted for sport after making a fateful deal.',link:'https://agasobanuyenow.com/movies/most-dangerous-game-by-rocky/watch'},
  {title:'LOCKED',poster:'posters/Locked poster.jpg',meta:'2025 • Thriller • Movie',voice:'Rocky',genre:'thriller',section:['trending'],desc:'A terrifying thriller where one wrong move means death.',link:'https://agasobanuyenow.com/movies/locked-by-rocky/watch'},
  {title:'GREENLAND 2',poster:'posters/GREEN LAND.jpg',meta:'2026 • Adventure • Movie',voice:'Gaheza',genre:'adventure',section:['trending'],desc:'A family fights for survival as a massive comet heads toward Earth.',link:'https://agasobanuyenow.com/movies/greenland-2-by-gaheza/watch'},
  {title:'READY OR NOT',poster:'posters/READY OR NOT POSTER.jpg',meta:'2025 • Horror • Movie',voice:'Rocky',genre:'horror',section:['trending','horror'],desc:"A bride must survive the night after her in-laws turn on her.",link:'https://agasobanuyenow.com/movies/ready-or-not-by-rocky/watch'},
  {title:'BABY JOHN',poster:'posters/Baby John poster.jpg',meta:'2025 • Action • Movie',voice:'Rocky',genre:'action',section:['trending','action'],desc:'A cop who changes his identity to protect his daughter must resurface.',link:'https://agasobanuyenow.com/movies/baby-john-by-rocky/watch'},
  {title:'AL RAWABI: School For Girls',poster:'posters/alrawabi poster.jpg',meta:'2021 • Drama • Series',voice:'Rocky',genre:'drama',section:['trending','series','drama'],desc:'A bullied student plots revenge against her tormentors at a conservative school.',episodes:['https://agasobanuyenow.com/watch/tv/al-rawabi-by-rocky/1/1','https://agasobanuyenow.com/watch/tv/al-rawabi-by-rocky/1/2','https://agasobanuyenow.com/watch/tv/al-rawabi-by-rocky/1/3']},
  {title:'BAD BOYS: Ride Or Die',poster:'posters/BAD BOYZ RIDE OR DIE POSTER.jpg',meta:'2024 • Action • Movie',voice:'Rocky',genre:'action',section:['trending','action'],desc:'Two Miami detectives must prove their murdered captain was not a traitor.',link:'https://agasobanuyenow.com/movies/bad-boys-ride-or-die-by-rocky/watch'},
  {title:'CITADEL', poster:'posters/CITADEL POSTER.jpg', meta:'2020 • Action • Series', voice:'🎙 Rocky-Dylan', genre:'Action', section:['trending', 'series'], desc:'', episodes:['https://agasobanuyenow.com/watch/tv/citadel-by-rocky/1/1',
                                                    'https://agasobanuyenow.com/watch/tv/citadel-by-rocky/1/2',
                                                     'https://agasobanuyenow.com/watch/tv/acitadel-by-rocky/1/3',
                                                      'https://agasobanuyenow.com/watch/tv/citadel-by-rocky/1/4',
                                                       'https://agasobanuyenow.com/watch/tv/citadel-by-rocky/1/5',
                                                        'https://agasobanuyenow.com/watch/tv/acitadel-by-rocky/1/6']
                                                      },

  {title:'BACK IN ACTION',poster:'posters/Back In Action Poster.png',meta:'2024 • Action • Movie',voice:'Rocky',genre:'Action',section:['trending','action'],desc:'A bullied student plots revenge against her tormentors at a conservative school.',link:''},

 // ACTION
 
  {title:'SISU 2: Road To Revenge',poster:'posters/SISU 2 POSTER.jpg',meta:'2025 • Action • Movie',voice:'Rocky',genre:'action',section:['action'],desc:'Korpi dismantles the house where his family was murdered and loads it on a truck.',link:'https://agasobanuyenow.com/movies/sisu-2:-road-to-revenge-by-rocky/watch'},
  {title:'PUSHPA 2',poster:'posters/PUSHPA 2 POSTER.jpg',meta:'2024 • Action • Movie',voice:'Rocky',genre:'action',section:['action'],desc:"The red sandalwood smuggler Pushpa Raj expands his empire against brutal opposition.",link:'#'},
  {title:'WAR 2',poster:'posters/War_2_official_poster.jpg',meta:'2025 • Action • Movie',voice:'Rocky',genre:'action',section:['action'],desc:"India's top agent goes rogue and must be hunted down by his own protege.",link:'#'},
  {title:'BADE MIYAN CHOTE MIYAN',poster:'posters/BADE MIYAN POSTER.jpg',meta:'2024 • Action • Movie',voice:'Gaheza',genre:'action',section:['action'],desc:'Two military officers team up to stop a catastrophic threat to India.',link:'#'},
  {title:'CANARY BLACK',poster:'posters/CANARY BLACK POSTER.jpg',meta:'2024 • Action • Movie',voice:'Rocky',genre:'action',section:['action'],desc:'A top CIA operative is blackmailed into betraying her country to save her husband.',link:'#'},
  {title:'MISSION IMPOSSIBLE: Dead Reckoning',poster:'posters/Mission impossible poster.jpg',meta:'2024 • Action • Movie',voice:'Rocky',genre:'action',section:['action'],desc:'Ethan Hunt and his IMF team must track down a new terrifying weapon.',link:'#'},
  {title:'KARATE KIDS LEGEND',poster:'posters/KARATE KIDS LEGENDS POSTER.jpg',meta:'2025 • Action • Movie',voice:'Rocky',genre:'action',section:['action'],desc:'A new generation of karate fighters battles in an international tournament.',link:'#'},
  {title:'EXTERRITORIAL',poster:'posters/EXTERRITORIAL POSTER.jpg',meta:'2025 • Action • Movie',voice:'Rocky',genre:'action',section:['action'],desc:'A former operative protects a diplomatic compound under siege.',link:'#'},
 
 // TV SERIES
 
  {title:'COBRA KAI',poster:'posters/Cobra Kai Poster.jpg',meta:'2021 • Action • Series',voice:'Rocky',genre:'action',section:['action','series'],desc:'The continuing rivalry between Johnny Lawrence and Daniel LaRusso reignites.',episodes:['#','#','#','#']},
  {title:'LIONESS',poster:'posters/LIONESS POSTER.jpg',meta:'2022 • Action • Series',voice:'Rocky',genre:'action',section:['action','series'],desc:'A young Marine is recruited to befriend the daughter of a terrorist.',episodes:['#','#','#']},
  {title:'A WORKING MAN',poster:'posters/A WALKINGMAN POSTER.jpg',meta:'2025 • Action • Movie',voice:'Rocky',genre:'action',section:['action'],desc:'A blue-collar worker with a deadly past is forced back into action.',link:'#'},
 
 // DRAMA
 
  {title:'BE HAPPY',poster:'posters/Be heapy poster.jpg',meta:'2025 • Emotional Drama • Movie',voice:'Rocky',genre:'drama',section:['drama'],desc:'An emotionally powerful story about finding joy after devastating loss.',link:'#'},
  {title:'BAD INFLUENCER',poster:'posters/BAD INFLUENCER POSTER.jpg',meta:'2025 • Drama • Crime • Series',voice:'Rocky',genre:'drama',section:['drama'],desc:'A single mother and luxury bag counterfeiter teams up with a self-obsessed influencer.',episodes:['https://agasobanuyenow.com/watch/tv/bad-influencer-by-rocky/1/1','https://agasobanuyenow.com/watch/tv/bad-influencer-by-rocky/1/2','https://agasobanuyenow.com/watch/tv/bad-influencer-by-rocky/1/3']},
  {title:'AUGAST RUSH',poster:'posters/AUGAST RUSH POSTER.jpg',meta:'2007 • Family Drama • Movie',voice:'Rocky',genre:'drama',section:['drama'],desc:'A musical prodigy uses his gift to search for his parents who gave him up for adoption.',link:'#'},
  {title:'BLOOD SISTERS',poster:'posters/Blood sisters poster.jpg',meta:'2025 • Drama • Series',voice:'Savimbi',genre:'drama',section:['drama','series'],desc:'Two best friends are bound together by a terrible secret.',episodes:['#','#','#']},
  {title:'CHILDREN OF SISTER',poster:'posters/Children of Sisters Poster.jpg',meta:'2023 • Drama • Series',voice:'Rocky',genre:'drama',section:['drama','series'],desc:'A family secret threatens to destroy everything a successful woman has built.',episodes:['#','#','#']},
  {title:"SISTERS' FUEDS",poster:'posters/SISTER OF FUEDS POSTER.jpg',meta:'2025 • Drama • Series',voice:'Rocky',genre:'drama',section:['drama','series'],desc:'Two sisters fight for power, love, and revenge in a high-stakes family saga.',episodes:['#','#','#']},
  {title:'DIVORCE IN THE BLACK',poster:'posters/DIVORCE IN THE BLACK POSTER.jpg',meta:'2024 • Drama • Movie',voice:'Rocky',genre:'drama',section:['drama'],desc:'A couple navigates the emotional and legal battles of divorce.',link:'#'},

 // HORROR

  {title:'IT FEEDS',poster:'posters/IT FEEDS POSTER.jpg',meta:'2024 • Horror • Movie',voice:'Gaheza',genre:'horror',section:['horror'],desc:'A terrifying creature preys on a small town.',link:'#'},
  {title:'HOME SWEET HOME',poster:'posters/HOME SWEET HOME POSTER.jpg',meta:'2024 • Horror • Movie',voice:'Savimbi',genre:'horror',section:['horror'],desc:"A family's new home hides a horrifying presence.",link:'#'},
  {title:'ABIGAIL',poster:'posters/ABIGAIL POSTER.jpg',meta:'2024 • Horror • Movie',voice:'Rocky',genre:'horror',section:['horror'],desc:"A group of criminals who kidnap a ballerina discover she's no ordinary girl.",link:'#'},
  {title:'I SPIT ON GRAVE',poster:'posters/I SPIT ON YOUR GRAVE poster.jpg',meta:'2009 • Horror • Movie',voice:'Gaheza',genre:'horror',section:['horror'],desc:'A woman brutalised by criminals takes savage revenge.',link:'#'},
 
 // ROMANITC
 
  

 // COMEDY



 // THRILLER



 // ADVENTURE



 // DOCUMENTARY
 
  {title:'BIG GEORGE FOREMAN',poster:'posters/big-george-foreman.jpg',meta:'2024 • Biography • Movie',voice:'Rocky',genre:'documentary',section:['documentary'],desc:'The inspirational story of boxing legend George Foreman.',link:'#'},
  {title:'ONE LOVE',poster:'posters/ONE LOVE POSTER.jpg',meta:'2024 • Biography • Movie',voice:'Rocky',genre:'documentary',section:['documentary'],desc:'The extraordinary story of Bob Marley and his rise to global superstardom.',link:'#'},
  {title:'Sean Combs: THE RECKONING',poster:'posters/SEAN COMBS POSTER.jpg',meta:'2025 • Documentary • Series',voice:'Rocky',genre:'documentary',section:['documentary'],desc:'An explosive look at the rise and fall of music mogul Sean Combs.',episodes:['#','#','#']},
  {title:'Tupac: ALL EYES ON ME',poster:'posters/All Eyez on me.avif',meta:'2021 • Documentary • Movie',voice:'Rocky',genre:'documentary',section:['documentary'],desc:'The life story of iconic rapper Tupac Shakur.',link:'#'},
  {title:'Biggie: I GOT A STORY TO TELL',poster:'posters/Biggie.webp',meta:'2019 • Documentary • Movie',voice:'Rocky',genre:'documentary',section:['documentary'],desc:'An intimate documentary about the life and legacy of Biggie Smalls.',link:'#'},
  {title:'10000 BC',poster:'posters/10000 BC.avif',meta:'2008 • History • Movie',voice:'Gaheza',genre:'documentary',section:['documentary'],desc:'A young hunter embarks on a mythical journey to free his people.',link:'#'},
  {title:'BLOW',poster:'posters/Blow.webp',meta:'2001 • Biography • Movie',voice:'Rocky',genre:'documentary',section:['documentary'],desc:'The rise and fall of George Jung, one of the most successful drug smugglers.',link:'#'},
  {title:'Nelson Mandela: MADIBA',poster:'posters/Madiba.jpg',meta:'2021 • Biography • Series',voice:'Rocky',genre:'documentary',section:['documentary'],desc:'The incredible life of Nelson Mandela from activist to president.',episodes:['#','#','#']},
  {title:'PELE',poster:'posters/Pele.avif',meta:'2016 • Biography • Movie',voice:'Rocky',genre:'documentary',section:['documentary'],desc:'The remarkable story of Brazilian football legend Pele.',link:'#'},
  {title:'HOTEL MUMBAI',poster:'posters/Hotel Mumbai.jpg',meta:'2019 • Action • Movie',voice:'Rocky',genre:'documentary',section:['documentary'],desc:'The true story of the 2008 Mumbai terror attacks.',link:'#'},
  {title:'MEN OF HONOR',poster:'posters/MEN OF HONOR POSTER.jpg',meta:'2000 • Biography • Movie',voice:'Rocky',genre:'documentary',section:['documentary'],desc:'The story of Carl Brashear, the first African-American US Navy diver.',link:'#'},
 
 // CARTOON
 
  {title:'THE LION KING',poster:'posters/lion king.jpg',meta:'2019 • Cartoon • Movie',voice:'Rocky',genre:'cartoon',section:['cartoon'],desc:'A lion prince flees his kingdom only to learn the true meaning of responsibility.',link:'#'},
  {title:'MUFASA: The Lion King',poster:'posters/mufasa.jpg',meta:'2025 • Cartoon • Movie',voice:'Gaheza',genre:'cartoon',section:['cartoon'],desc:'The origin story of Mufasa, father of Simba.',link:'#',isNew:true},
  {title:'MOANA 2',poster:'posters/moana.jpg',meta:'2025 • Cartoon • Movie',voice:'Fasterman',genre:'cartoon',section:['cartoon'],desc:'Moana embarks on a new voyage across the far seas.',link:'#',isNew:true},
  {title:'BIG FOOT FAMILY',poster:'posters/Big Foot Family master P.avif',meta:'2024 • Cartoon • Movie',voice:'Master P',genre:'cartoon',section:['cartoon'],desc:'A family of Bigfoot creatures goes on an eco-adventure.',link:'#'},
  {title:'FIREHEART',poster:'posters/Fireheart.avif',meta:'2022 • Cartoon • Movie',voice:'Fasterman',genre:'cartoon',section:['cartoon'],desc:'A brave young woman discovers her true calling as a firefighter.',link:'#'},
  {title:'THE BABY BOSS',poster:'posters/the Baby Boss pk.avif',meta:'2017 • Cartoon • Movie',voice:'P.K',genre:'cartoon',section:['cartoon'],desc:'A suit-wearing baby and his brother join forces to stop a puppy conspiracy.',link:'#'},
  {title:'TURNING RED',poster:'posters/Turning Red.jpg',meta:'2022 • Cartoon • Movie',voice:'Fasterman',genre:'cartoon',section:['cartoon'],desc:'A 13-year-old girl turns into a giant red panda when she gets too excited.',link:'#'},
  {title:'WISH',poster:'posters/Wish Perfect.avif',meta:'2023 • Cartoon • Movie',voice:'Perfect',genre:'cartoon',section:['cartoon'],desc:'A young woman named Asha and a magical star work together to protect their kingdom.',link:'#'},
  {title:'ZOOTOPIA 2',poster:'posters/Zootopia master p.avif',meta:'2025 • Cartoon • Movie',voice:'Master P',genre:'cartoon',section:['cartoon'],desc:'Judy Hopps and Nick Wilde return for a new adventure in the animal metropolis.',link:'#',isNew:true},
 ];

var CATEGORIES=[
  {name:'Action',id:'action',color:'#e63946'},
  {name:'Drama',id:'drama',color:'#8338ec'},
  {name:'Horror',id:'horror',color:'#ff4d4d'},
  {name:'Romantic',id:'romantic',color:'#ff6b8a'},
  {name:'Thriller',id:'thriller',color:'#ff9f1c'},
  {name:'Comedy',id:'comedy',color:'#ffd60a'},
  {name:'Adventure',id:'adventure',color:'#06d6a0'},
  {name:'Documentary',id:'documentary',color:'#00aaff'},
  {name:'Cartoon',id:'cartoon',color:'#3a86ff'},
];

var INTERPRETERS=[
  {name:'Rocky',films:'50+ films',abbr:'R',color:'#e63946'},
  {name:'Gaheza',films:'30+ films',abbr:'G',color:'#00aaff'},
  {name:'Savimbi',films:'15+ films',abbr:'S',color:'#06d6a0'},
  {name:'Sankara',films:'10+ films',abbr:'Sa',color:'#ffd60a'},
  {name:'Junior',films:'8+ films',abbr:'J',color:'#8338ec'},
  {name:'Master P',films:'12+ films',abbr:'M',color:'#ff9f1c'},
  {name:'Kim',films:'5+ films',abbr:'K',color:'#ff6b8a'},
  {name:'Fasterman',films:'6+ films',abbr:'Ft',color:'#ef8c28'},
  {name:'Perfect',films:'4+ films',abbr:'P',color:'#3a86ff'},
];

// ════════════════════════════════
//  PAGE NAVIGATION
// ════════════════════════════════
function showMainPage(){
  document.getElementById('main-page').style.display='block';
  document.getElementById('interp-page').style.display='none';
  document.getElementById('cat-page').style.display='none';
  document.getElementById('search-page').style.display='none';
  document.getElementById('all-interp-page').style.display='none';
  document.getElementById('all-cat-page').style.display='none';
  document.getElementById('admin-page').style.display='none';
}
function hidePagesShowBlank(){
  document.getElementById('main-page').style.display='none';
  document.getElementById('interp-page').style.display='none';
  document.getElementById('cat-page').style.display='none';
  document.getElementById('search-page').style.display='none';
  document.getElementById('all-interp-page').style.display='none';
  document.getElementById('all-cat-page').style.display='none';
  document.getElementById('admin-page').style.display='none';
}

// ── INTERPRETER SPOTLIGHT ──
function openInterpPage(name){
  hidePagesShowBlank();
  var interp=INTERPRETERS.filter(function(i){return i.name===name;})[0]||{name:name,abbr:name[0],color:'#00aaff',films:'films'};
  document.getElementById('ip-avatar').textContent=interp.abbr;
  document.getElementById('ip-avatar').style.background='linear-gradient(135deg,'+interp.color+'cc,'+interp.color+'44)';
  document.getElementById('ip-name').textContent='🎙 '+interp.name;
  document.getElementById('ip-meta').textContent=interp.films+' interpreted • Click any title to watch';
  document.getElementById('ip-title-name').textContent='BY '+name.toUpperCase();
  var grid=document.getElementById('ip-grid');
  grid.innerHTML='';
  var films=ALL_MOVIES.filter(function(m){return m.voice===name;});
  if(!films.length){grid.innerHTML='<p style="color:var(--muted);padding:2rem">No films found for this interpreter.</p>';return;}
  films.forEach(function(m){grid.appendChild(makeCard(m));});
  document.getElementById('interp-page').style.display='block';
  window.scrollTo(0,0);
}

function isSeriesMovie(movie){return !!(movie&&(movie.type==='series'||(Array.isArray(movie.episodes)&&movie.episodes.length)));}
function belongsToCategory(movie,catId){var sections=Array.isArray(movie.section)?movie.section:[];return String(movie.genre||'').toLowerCase()===String(catId).toLowerCase()||sections.map(function(item){return String(item).toLowerCase();}).indexOf(String(catId).toLowerCase())>-1;}

// ── CATEGORY SPOTLIGHT ──

function openCatPage(catId){
  var cat=CATEGORIES.filter(function(c){return c.id===catId;})[0]||customSections.filter(function(c){return c.key===catId;})[0]||{id:catId,name:catId};
  hidePagesShowBlank();
  document.getElementById('cp-name').textContent=cat.name.toUpperCase();
  var films=ALL_MOVIES.filter(function(m){return belongsToCategory(m,catId);});
  document.getElementById('cp-meta').textContent=films.length+' titles • '+cat.name+' movies & series';
  document.getElementById('cp-title-name').textContent=cat.name.toUpperCase()+' TITLES';
  var movies=films.filter(function(m){return !isSeriesMovie(m);});
  var series=films.filter(isSeriesMovie);
  var movieGrid=document.getElementById('cp-movies-grid'),seriesGrid=document.getElementById('cp-series-grid');
  movieGrid.innerHTML='';seriesGrid.innerHTML='';
  document.getElementById('cp-movies-count').textContent=movies.length+' title'+(movies.length===1?'':'s');
  document.getElementById('cp-series-count').textContent=series.length+' title'+(series.length===1?'':'s');
  document.getElementById('cp-movies-group').style.display=movies.length?'block':'none';
  document.getElementById('cp-series-group').style.display=series.length?'block':'none';
  if(!films.length){document.getElementById('cp-movies-group').style.display='block';movieGrid.innerHTML='<p style="color:var(--muted);padding:2rem">No movies or series yet in this category.</p>';}
  movies.forEach(function(m){movieGrid.appendChild(makeCard(m));});
  series.forEach(function(m){seriesGrid.appendChild(makeCard(m));});
  document.getElementById('cat-page').style.display='block';
  window.scrollTo(0,0);
}

// ════════════════════════════════
//  HERO SLIDER
// ════════════════════════════════

var curSlide=0, slideInterval, progressInterval;
var SLIDE_DURATION=6000;

function buildHero(){
  var hero=document.getElementById('hero');
  var dots=document.getElementById('slideDots');
  if(!hero||!dots)return;
  clearInterval(slideInterval);clearInterval(progressInterval);curSlide=0;
  hero.querySelectorAll('.slide,.empty-hero').forEach(function(node){node.remove();});
  dots.innerHTML='';
  if(!SLIDES.length){
    hero.insertBefore((function(){var empty=document.createElement('div');empty.className='empty-hero';empty.innerHTML='<span class="empty-hero-kicker">AGASTREAM CATALOG</span><h2>Your next story starts here.</h2><p>Movies and series added by the administrator will appear on this homepage.</p><button class="btn-watch" onclick="openAdminPanel()"><i class="fa fa-lock"></i> Open Admin Studio</button>';return empty;})(),dots);
    return;
  }
  SLIDES.forEach(function(s,i){
    var div=document.createElement('div');
    div.className='slide'+(i===0?' active':'');
    div.innerHTML=
      '<div class="slide-bg"><div class="hero-fallback"><span>'+s.title.split(' ').slice(0,2).join(' ')+'</span><small>'+s.genre+' • '+s.year+'</small></div><img src="'+s.img+'" alt="'+s.title+'" onerror="this.style.display=\'none\'"/></div>'
      +'<div class="slide-glow"></div>'
      +'<div class="slide-content">'
      +'<div class="slide-badge">&#9654; Now Featured</div>'
      +'<div class="slide-meta-row"><span class="rating">&#9733; 8.'+(5+i)+'</span><span>'+s.year+'</span><span class="slide-tag">'+s.genre+'</span><span class="slide-tag">🎙 '+s.interpreter+'</span></div>'
      +'<h2>'+s.title+'</h2>'
      +'<p>'+s.desc+'</p>'
      +'<div class="slide-actions">'
      +'<button class="btn-watch" onclick="openModal(SLIDES['+i+'])">&#9654; Watch Now</button>'
      +'<button class="btn-info" onclick="openModal(SLIDES['+i+'])">&#8505; More Info</button>'
      +'</div></div>';
    hero.insertBefore(div,document.getElementById('slideDots'));
    var dot=document.createElement('button');
    dot.className='slide-dot'+(i===0?' active':'');
    dot.onclick=(function(idx){return function(){goToSlide(idx);resetSlider();};})(i);
    dots.appendChild(dot);
  });
  startSlider();
}

function goToSlide(n){
  var slides=document.querySelectorAll('.slide');
  var dots=document.querySelectorAll('.slide-dot');
  slides[curSlide].classList.remove('active');
  dots[curSlide].classList.remove('active');
  curSlide=(n+SLIDES.length)%SLIDES.length;
  slides[curSlide].classList.add('active');
  dots[curSlide].classList.add('active');
  startProgressBar();
}
function changeSlide(d){goToSlide(curSlide+d);resetSlider();}
function startSlider(){slideInterval=setInterval(function(){goToSlide(curSlide+1);},SLIDE_DURATION);}
function resetSlider(){clearInterval(slideInterval);clearInterval(progressInterval);startSlider();}

function startProgressBar(){
  var fill=document.getElementById('slideProgressFill');
  if(!fill)return;
  fill.style.transition='none';
  fill.style.width='0%';
  clearInterval(progressInterval);
  setTimeout(function(){
    fill.style.transition='width '+SLIDE_DURATION+'ms linear';
    fill.style.width='100%';
  },30);
}

// ════════════════════════════════
//  CARD BUILDER
// ════════════════════════════════
function makeCard(movie){
  var div=document.createElement('div');
  div.className='movie-card';
  var isSeries=isSeriesMovie(movie);
  div.innerHTML=
    (movie.isNew?'<div class="card-new-badge">NEW</div>':'')
    +'<div class="card-type-badge">'+(isSeries?'Series':'Movie')+'</div>'
    +'<div class="poster"><div class="poster-fallback"><strong>'+movie.title.split(' ').slice(0,2).join(' ')+'</strong><span>'+((movie.genre||'Film').toUpperCase())+'</span></div><img src="'+movie.poster+'" alt="'+movie.title+'" loading="lazy" onerror="this.style.display=\'none\'"/>'
    +'<div class="hover-overlay">'
    +'<button class="play-btn">&#9654;</button>'
    +'<button class="hover-more-btn">More Info</button>'
    +'</div></div>'
    +'<div class="movie-info"><h4>'+movie.title+'</h4>'
    +'<div class="movie-meta">'+movie.meta+'</div>'
    +'<div class="voice">🎙 <a onclick="openInterpPage(\''+movie.voice+'\');event.stopPropagation()">'+movie.voice+'</a></div>'
    +'</div>';
  div.querySelector('.play-btn').addEventListener('click',function(e){
    e.stopPropagation();
    if(isSeries&&movie.episodes&&movie.episodes[0]!=='#'){window.open(movie.episodes[0],'_blank');}
    else if(!isSeries&&movie.link&&movie.link!=='#'){window.open(movie.link,'_blank');}
    else{openModal(movie);}
  });
  div.querySelector('.hover-more-btn').addEventListener('click',function(e){e.stopPropagation();routeTo(contentPath(movie));});
  div.addEventListener('click',function(){routeTo(contentPath(movie));});
  return div;
}

function fillRow(id,section){
  var row=document.getElementById(id);
  if(!row)return;
  var matches=ALL_MOVIES.filter(function(m){return m.section.indexOf(section)>-1;});
  var sectionEl=row.closest('.section');
  if(sectionEl)sectionEl.style.display=matches.length?'':'none';
  matches.forEach(function(m){row.appendChild(makeCard(m));});
}

function scrollRow(id,dir){
  var row=document.getElementById(id);
  if(row)row.scrollBy({left:dir*320,behavior:'smooth'});
}

// ════════════════════════════════
//  ALL INTERPRETERS PAGE
// ════════════════════════════════
function openAllInterpretersPage(){
  hidePagesShowBlank();
  var grid=document.getElementById('all-interp-grid');
  if(!grid.hasChildNodes()){
    INTERPRETERS.forEach(function(p){
      var div=document.createElement('div');
      div.className='interp-card';
      div.innerHTML=
        '<div class="interp-avatar" style="background:linear-gradient(135deg,'+p.color+'cc,'+p.color+'55)">'+p.abbr+'</div>'
        +'<div><div class="interp-name">🎙 '+p.name+'</div><div class="interp-meta">'+p.films+' interpreted</div></div>';
      div.onclick=(function(name){return function(){openInterpPage(name);};})(p.name);
      grid.appendChild(div);
    });
  }
  document.getElementById('all-interp-page').style.display='block';
  window.scrollTo(0,0);
}

// ════════════════════════════════
//  ALL CATEGORIES PAGE
// ════════════════════════════════
function openAllCategoriesPage(){
  hidePagesShowBlank();
  var grid=document.getElementById('all-cat-grid');
  if(!grid.hasChildNodes()){
    CATEGORIES.forEach(function(c){
      var count=ALL_MOVIES.filter(function(m){return m.genre===c.id;}).length;
      var div=document.createElement('div');
      div.className='cat-tile';
      div.style.setProperty('--cat-c',c.color||'var(--blue)');
      div.innerHTML='<div class="cat-tile-name">'+c.name+'</div><div class="cat-tile-count">'+count+'+ titles</div>';
      div.onclick=(function(id){return function(){openCatPage(id);};})(c.id);
      grid.appendChild(div);
    });
  }
  document.getElementById('all-cat-page').style.display='block';
  window.scrollTo(0,0);
}


function buildCategories(){
  var grid=document.getElementById('catGrid');
  var dropMenu=document.getElementById('catDropMenu');
  CATEGORIES.forEach(function(c){
    var count=ALL_MOVIES.filter(function(m){return m.genre===c.id;}).length;
    // tile
    var div=document.createElement('div');
    div.className='cat-tile';
    div.style.setProperty('--cat-c',c.color);
    div.innerHTML='<div class="cat-tile-icon">'+(c.icon||'✦')+'</div><div class="cat-tile-name">'+c.name+'</div><div class="cat-tile-count">'+count+'+ titles</div>';
    div.onclick=(function(id){return function(){openCatPage(id);};})(c.id);
    grid.appendChild(div);
    // dropdown item
    var a=document.createElement('a');
    a.href='#';
    a.textContent=('')+c.name;
    a.onclick=(function(id){return function(e){e.preventDefault();openCatPage(id);};})(c.id);
    dropMenu.appendChild(a);
  });
}

// ════════════════════════════════
//  INTERPRETERS
// ════════════════════════════════
function buildInterpreters(){
  var grid=document.getElementById('interpGrid');
  INTERPRETERS.forEach(function(p){
    var div=document.createElement('div');
    div.className='interp-card';
    div.innerHTML=
      '<div class="interp-avatar" style="background:linear-gradient(135deg,'+p.color+'cc,'+p.color+'55)">'+p.abbr+'</div>'
      +'<div><div class="interp-name">🎙 '+p.name+'</div><div class="interp-meta">'+p.films+' interpreted</div></div>';
    div.onclick=(function(name){return function(){openInterpPage(name);};})(p.name);
    grid.appendChild(div);
  });
}

// ════════════════════════════════
//  FULL PLAYER MODAL
// ════════════════════════════════
var _currentMovie=null;

function openModal(movie){
  _currentMovie=movie;
  var isSeries=isSeriesMovie(movie);
  var poster=movie.poster||movie.img||'';
  var title=movie.title||'';
  var year=(movie.year||(movie.meta||'').split('•')[0]||'').toString().trim();
  var genre=movie.genre||'';
  var interp=movie.voice||movie.interpreter||'';
  var selectedEpisode=typeof movie._selectedEpisode==='number'?movie._selectedEpisode:0;
  var link=isSeries?(movie.episodes&&movie.episodes[selectedEpisode]&&movie.episodes[selectedEpisode]!=='#'?movie.episodes[selectedEpisode]:'#'):(movie.link||'#');

  // player area
  document.getElementById('playerBgPoster').src=poster;
  document.getElementById('playerTitleText').textContent=title;
  document.getElementById('playerSubText').textContent=year+(genre?' • '+genre:'')+(interp?' • 🎙 '+interp:'');
  closeLocalVideo();

  // play button wiring
  document.getElementById('playerPlayBtn').onclick=function(){
    if(link!=='#'){window.open(link,'_blank');}
    else{showToast('Coming Soon!');}
  };
  document.getElementById('ctrlPlayBtn').onclick=function(){
    if(link!=='#'){window.open(link,'_blank');}
    else{showToast('Coming Soon!');}
  };

  // trailer button
  document.getElementById('ctrlTrailerBtn').onclick=function(){
    if(movie.trailer){window.open(movie.trailer,'_blank');}else{playLocalTrailer(title);}
  };
  document.getElementById('ctrlDownloadBtn').onclick=function(){
    var downloadLink=movie.download||link;
    if(downloadLink!=='#'){
      var a=document.createElement('a');
      a.href=downloadLink;a.download=title;a.target='_blank';a.click();
    } else {
      showToast('Download not available yet');
    }
  };

  // thumb
  var thumbEl=document.getElementById('modal-thumb-inner');
  if(poster){
    thumbEl.innerHTML='<img src="'+poster+'" alt="'+title+'" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.innerHTML=\'<div class=\\\"modal-thumb-placeholder\\\">🎬</div>\'"/>';
  } else {
    thumbEl.innerHTML='<div class="modal-thumb-placeholder"></div>';
  }

  // info
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-meta').innerHTML=
    '<span style="color:var(--yellow)">&#9733; '+(7.5+Math.random()*1.4).toFixed(1)+'</span>'
    +'<span>'+year+'</span>'
    +(genre?'<span class="modal-tag">'+genre+'</span>':'')
    +(interp?'<span class="modal-tag">🎙 '+interp+'</span>':'')
    +'<span class="modal-tag">'+(isSeries?'Series':'Movie')+'</span>';
  document.getElementById('modal-desc').textContent=movie.desc||'';

  // episodes
  var epWrap=document.getElementById('modal-episodes');
  if(isSeries&&movie.episodes&&movie.episodes.length){
    var items=movie.episodes.map(function(ep,i){
      var hasLink=ep&&ep!=='#';
      return '<div class="ep-item '+(i===selectedEpisode?'active':'')+'">'
        +'<div class="ep-num">'+(i+1)+'</div>'
        +'<div class="ep-link" '+(hasLink?'onclick="playSeriesEpisode(_currentMovie,'+(i)+')"':'')+'>Episode '+(i+1)+'</div>'
        +'<div class="ep-ext">'+(hasLink?'&#8599;':'&mdash;')+'</div>'
        +'</div>';
    }).join('');
    epWrap.innerHTML='<div class="episodes-wrap"><div class="episodes-title">Episodes ('+movie.episodes.length+')</div><div class="ep-list">'+items+'</div></div>';
  } else {
    epWrap.innerHTML='';
  }

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(e){if(e&&e.target===document.getElementById('modal-overlay'))closeModalDirect();}
function closeModalDirect(){
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow='';
  closeLocalVideo();
}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModalDirect();});

// ── LOCAL TRAILER PLAYER ──
function playLocalTrailer(movieTitle){
  var wrap=document.getElementById('local-video-wrap');
  var vid=document.getElementById('localVideoEl');

  // Generate multiple possible filename slugs to try
  var slugs=[
    // exact title lowercased, spaces to hyphens
    movieTitle.toLowerCase().replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,'-'),
    // title with underscores
    movieTitle.toLowerCase().replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,'_'),
    // raw title (original casing, spaces to hyphens)
    movieTitle.replace(/\s+/g,'-'),
    // first word only (short name)
    movieTitle.toLowerCase().split(/\s+/)[0],
  ];
  var extensions=['mp4','webm','mkv','avi','mov'];

  // Build full list of paths to try
  var paths=[];
  slugs.forEach(function(slug){
    extensions.forEach(function(ext){
      paths.push('videos/'+slug+'.'+ext);
      paths.push('videos/'+slug+'-trailer.'+ext);
    });
  });

  var tried=0;
  function tryNext(){
    if(tried>=paths.length){
      // No file found via auto-detect → offer file picker as fallback
      showToast('Trailer not found — please select the video file manually');
      document.getElementById('trailerInput').click();
      return;
    }
    var path=paths[tried++];
    var testReq=new XMLHttpRequest();
    testReq.open('HEAD',path,true);
    testReq.onload=function(){
      if(testReq.status===200||testReq.status===206){
        loadVideoPath(path);
      } else {
        tryNext();
      }
    };
    testReq.onerror=function(){tryNext();};
    testReq.send();
  }

  function loadVideoPath(path){
    if(vid.src&&vid.src.startsWith('blob:'))URL.revokeObjectURL(vid.src);
    vid.src=path;
    wrap.style.display='block';
    vid.load();
    vid.play().catch(function(){/* autoplay blocked — user can press play */});
  }

  tryNext();
}

function loadLocalTrailer(event){
  var file=event.target.files[0];
  if(!file){return;}
  var wrap=document.getElementById('local-video-wrap');
  var vid=document.getElementById('localVideoEl');
  if(vid.src&&vid.src.startsWith('blob:'))URL.revokeObjectURL(vid.src);
  vid.src=URL.createObjectURL(file);
  wrap.style.display='block';
  vid.play();
  event.target.value='';
}
function closeLocalVideo(){
  var wrap=document.getElementById('local-video-wrap');
  var vid=document.getElementById('localVideoEl');
  wrap.style.display='none';
  vid.pause();
  if(vid.src&&vid.src.startsWith('blob:')){URL.revokeObjectURL(vid.src);}
  vid.src='';
}

// ════════════════════════════════
//  SEARCH
// ════════════════════════════════
function handleSearch(q){
  var drop=document.getElementById('searchDropdown');
  q=(q||'').toLowerCase().trim();
  if(!q){drop.classList.remove('visible');return;}
  var results=ALL_MOVIES.filter(function(m){
    return m.title.toLowerCase().indexOf(q)>-1
      ||(m.genre||'').toLowerCase().indexOf(q)>-1
      ||(m.voice||'').toLowerCase().indexOf(q)>-1
      ||(m.meta||'').toLowerCase().indexOf(q)>-1;
  }).slice(0,8);
  if(!results.length){
    drop.innerHTML='<div class="search-no-result">No results for "'+q+'"</div>';
  } else {
    drop.innerHTML=results.map(function(m){
      return '<div class="search-result-item" onclick="openModal(ALL_MOVIES.filter(function(x){return x.title===\''+m.title.replace(/'/g,"\\'")+'\';})[0])">'
        +'<div class="search-result-thumb"><img src="'+m.poster+'" onerror="this.parentElement.textContent=\'\'"/></div>'
        +'<div class="search-result-info"><div class="s-title">'+m.title+'</div><div class="s-meta">'+m.meta+'</div></div>'
        +'</div>';
    }).join('');
    // "See all results" link
    drop.innerHTML+='<div class="search-result-item" style="justify-content:center;color:var(--blue);font-size:.8rem;font-weight:700" onclick="openSearchPage(document.getElementById(\'searchInput\').value)">See all results &rarr;</div>';
  }
  drop.classList.add('visible');
}

function openSearchPage(q){
  q=(q||'').trim();
  if(!q)return;
  document.getElementById('searchDropdown').classList.remove('visible');
  var results=ALL_MOVIES.filter(function(m){
    return m.title.toLowerCase().indexOf(q.toLowerCase())>-1
      ||(m.genre||'').toLowerCase().indexOf(q.toLowerCase())>-1
      ||(m.voice||'').toLowerCase().indexOf(q.toLowerCase())>-1
      ||(m.meta||'').toLowerCase().indexOf(q.toLowerCase())>-1
      ||(m.desc||'').toLowerCase().indexOf(q.toLowerCase())>-1;
  });
  hidePagesShowBlank();
  document.getElementById('sp-title').textContent='Results for "'+q+'"';
  document.getElementById('sp-meta').textContent=results.length+' title'+(results.length!==1?'s':'')+ ' found';
  document.getElementById('sp-query-label').textContent='"'+q+'"';
  var grid=document.getElementById('sp-grid');
  grid.innerHTML='';
  if(!results.length){
    grid.innerHTML='<p style="color:var(--muted);padding:2rem 1.5rem">No titles found for "'+q+'".</p>';
  } else {
    results.forEach(function(m){grid.appendChild(makeCard(m));});
  }
  document.getElementById('search-page').style.display='block';
  window.scrollTo(0,0);
}

document.addEventListener('click',function(e){
  if(!e.target.closest('.nav-search-wrap'))document.getElementById('searchDropdown').classList.remove('visible');
});

// Search on Enter key
document.addEventListener('DOMContentLoaded',function(){
  var inp=document.getElementById('searchInput');
  if(inp){
    inp.addEventListener('keydown',function(e){
      if(e.key==='Enter'){openSearchPage(inp.value);}
    });
  }
  var btn=document.querySelector('.nav-search-btn');
  if(btn){
    btn.addEventListener('click',function(){openSearchPage(document.getElementById('searchInput').value);});
  }
});

// ════════════════════════════════
//  HELPERS
// ════════════════════════════════
function setActive(el){
  document.querySelectorAll('.nav-link').forEach(function(l){l.classList.remove('active');});
  el.classList.add('active');
}
window.addEventListener('scroll',function(){
  document.getElementById('navbar').style.background=window.scrollY>60?'rgba(7,9,15,0.99)':'rgba(7,9,15,0.96)';
  var bt=document.getElementById('back-top');
  if(bt)bt.classList[window.scrollY>400?'add':'remove']('visible');
});
function showToast(msg){
  var t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(function(){t.classList.remove('show');},2600);
}

// ════════════════════════════════
//  INIT
// ════════════════════════════════
loadAdminMovies();
loadSiteSettings();
loadAdminSlides();
initTheme();
buildHero();
startProgressBar();
['new','trending','series','action','drama','horror','romantic','documentary','cartoon'].forEach(function(sec){
  fillRow('row-'+sec,sec);
});
renderCustomSections();
buildCategories();
buildInterpreters();
showMainPage();


// ════════════════════════════════
//  THEME + ADMIN STUDIO
// ════════════════════════════════
var pendingAdminPoster='';

function initTheme(){
  var saved=localStorage.getItem('agastream-theme')||'dark';
  document.documentElement.setAttribute('data-theme',saved);
  updateThemeButton(saved);
}
function updateThemeButton(theme){
  var btn=document.getElementById('themeToggle');
  if(!btn)return;
  btn.innerHTML=theme==='light'?'<i class="fa fa-moon-o"></i><span>Dark</span>':'<i class="fa fa-sun-o"></i><span>Light</span>';
}
function toggleTheme(){
  var next=document.documentElement.getAttribute('data-theme')==='light'?'dark':'light';
  document.documentElement.setAttribute('data-theme',next);
  localStorage.setItem('agastream-theme',next);
  updateThemeButton(next);
}

function loadAdminMovies(){
  ALL_MOVIES.length=0;
  SLIDES.length=0;
  try{
    var overrides=JSON.parse(localStorage.getItem('agastream-movie-overrides')||'{}');
    var deleted=JSON.parse(localStorage.getItem('agastream-deleted-movies')||'[]');
    ALL_MOVIES.forEach(function(movie){movie.catalogKey=movie.catalogKey||('catalog-'+movie.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''));});
    for(var i=ALL_MOVIES.length-1;i>=0;i--){
      var original=ALL_MOVIES[i];
      if(deleted.indexOf(original.catalogKey)>-1){ALL_MOVIES.splice(i,1);continue;}
      if(overrides[original.catalogKey]){ALL_MOVIES[i]=Object.assign({},original,overrides[original.catalogKey],{catalogKey:original.catalogKey});}
    }
    var custom=JSON.parse(localStorage.getItem('agastream-custom-movies')||'[]');
    custom.forEach(function(movie){if(movie&&movie.adminId&&!ALL_MOVIES.some(function(existing){return existing.adminId===movie.adminId;})){ALL_MOVIES.push(movie);}});
  }catch(error){console.warn('Could not load saved catalog entries',error);}
}
function customAdminMovies(){return ALL_MOVIES.filter(function(movie){return !!movie.adminId;});}
function movieManageId(movie){return movie.adminId||movie.catalogKey||('catalog-'+movie.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''));}
function openAdminPanel(){
  hidePagesShowBlank();
  document.getElementById('admin-page').style.display='block';
  var loggedIn=sessionStorage.getItem('agastream-admin')==='true';
  document.getElementById('admin-login').style.display=loggedIn?'none':'block';
  document.getElementById('admin-dashboard').style.display=loggedIn?'block':'none';
  if(loggedIn){renderAdminLibrary();updateAdminMetrics();}
  window.scrollTo(0,0);
}
function adminLogin(event){
  event.preventDefault();
  var username=document.getElementById('admin-username').value.trim();
  var password=document.getElementById('admin-password').value;
  var error=document.getElementById('admin-login-error');
  if(username==='Admin'&&password==='Admin123'){
    sessionStorage.setItem('agastream-admin','true');
    error.textContent='';
    document.getElementById('admin-login').style.display='none';
    document.getElementById('admin-dashboard').style.display='block';
    renderAdminLibrary();updateAdminMetrics();populateSiteSettingsForm();populateAdminSlides();showToast('Welcome back, Admin');
  }else{error.textContent='Incorrect username or password.';}
}
function adminLogout(){
  sessionStorage.removeItem('agastream-admin');
  document.getElementById('admin-dashboard').style.display='none';
  document.getElementById('admin-login').style.display='block';
  document.getElementById('admin-password').value='';
}
function previewAdminPoster(event){
  var file=event.target.files[0];
  if(!file)return;
  var reader=new FileReader();
  reader.onload=function(){
    pendingAdminPoster=reader.result;
    document.getElementById('admin-poster-preview').innerHTML='<img src="'+pendingAdminPoster+'" alt="Poster preview">';
  };
  reader.readAsDataURL(file);
}
function saveAdminMovie(event){
  event.preventDefault();
  var editId=document.getElementById('admin-edit-id').value;
  var editingOriginal=editId&&editId.indexOf('catalog-')===0;
  var poster=document.getElementById('admin-poster').value.trim()||pendingAdminPoster;
  var type=document.getElementById('admin-type').value;
  var genre=document.getElementById('admin-genre').value;
  var sections=(document.getElementById('admin-sections').value||'').split(',').map(function(item){return item.trim().toLowerCase();}).filter(Boolean);
  if(!sections.length)sections=[genre];
  if(type==='series'&&!sections.includes('series'))sections.push('series');
  var movie={
    adminId:editingOriginal?'':(editId||('admin-'+Date.now())),
    catalogKey:editingOriginal?editId:'',
    title:document.getElementById('admin-title').value.trim(),
    poster:poster,
    meta:(document.getElementById('admin-year').value.trim()||'2026')+' • '+genre.charAt(0).toUpperCase()+genre.slice(1)+' • '+(type==='series'?'Series':'Movie'),
    voice:document.getElementById('admin-voice').value.trim()||'AgaStream',
    genre:genre,
    section:sections,
    desc:document.getElementById('admin-description').value.trim()||'A new AgaStream title.',
    link:document.getElementById('admin-watch').value.trim(),
    download:document.getElementById('admin-download').value.trim(),
    trailer:document.getElementById('admin-trailer').value.trim(),
    video:document.getElementById('admin-video').value.trim(),
    type:type,
    isNew:document.getElementById('admin-is-new').checked
  };
  var episodes=document.getElementById('admin-episodes').value.split(/\n+/).map(function(item){return item.trim();}).filter(Boolean);
  if(type==='series')movie.episodes=episodes;
  var existing=customAdminMovies();
  var index=existing.findIndex(function(item){return item.adminId===movie.adminId;});
  if(editingOriginal){
    var overrides=JSON.parse(localStorage.getItem('agastream-movie-overrides')||'{}');
    overrides[editId]=movie;localStorage.setItem('agastream-movie-overrides',JSON.stringify(overrides));
  }else if(index>-1){var allIndex=ALL_MOVIES.indexOf(existing[index]);ALL_MOVIES[allIndex]=movie;existing[index]=movie;localStorage.setItem('agastream-custom-movies',JSON.stringify(existing));}
  else{ALL_MOVIES.push(movie);existing.push(movie);localStorage.setItem('agastream-custom-movies',JSON.stringify(existing));}
  document.getElementById('admin-save-message').textContent='Saved successfully. Refreshing the catalog...';
  setTimeout(function(){location.reload();},450);
}
function resetAdminForm(){
  document.getElementById('movie-admin-form').reset();
  document.getElementById('admin-edit-id').value='';
  document.getElementById('admin-form-title').textContent='Add a movie';
  document.getElementById('admin-poster-preview').innerHTML='';
  document.getElementById('admin-save-message').textContent='';
  pendingAdminPoster='';
}
function editAdminMovie(id){
  var movie=ALL_MOVIES.find(function(item){return movieManageId(item)===id;});
  if(!movie)return;
  document.getElementById('admin-edit-id').value=movie.adminId;
  document.getElementById('admin-title').value=movie.title||'';
  document.getElementById('admin-year').value=(movie.meta||'').split('•')[0].trim();
  document.getElementById('admin-genre').value=movie.genre||'action';
  document.getElementById('admin-type').value=isSeriesMovie(movie)?'series':'movie';
  document.getElementById('admin-voice').value=movie.voice||'';
  document.getElementById('admin-sections').value=(movie.section||[]).join(', ');
  document.getElementById('admin-description').value=movie.desc||'';
  document.getElementById('admin-poster').value=movie.poster&&movie.poster.indexOf('data:')!==0?movie.poster:'';
  document.getElementById('admin-watch').value=movie.link||'';
  document.getElementById('admin-download').value=movie.download||'';
  document.getElementById('admin-trailer').value=movie.trailer||'';
  document.getElementById('admin-video').value=movie.video||'';
  document.getElementById('admin-episodes').value=(movie.episodes||[]).join('\n');
  document.getElementById('admin-is-new').checked=!!movie.isNew;
  pendingAdminPoster=movie.poster&&movie.poster.indexOf('data:')===0?movie.poster:'';
  document.getElementById('admin-form-title').textContent='Edit title';
  document.getElementById('admin-poster-preview').innerHTML=movie.poster?'<img src="'+movie.poster+'" alt="Poster preview">':'';
  document.querySelector('.admin-form').scrollIntoView({behavior:'smooth',block:'start'});
}
function deleteAdminMovie(id){
  if(!window.confirm('Delete this title from your browser catalog? You can restore it later from the catalog reset option.'))return;
  var movie=ALL_MOVIES.find(function(item){return movieManageId(item)===id;});
  if(movie&&movie.adminId){var next=customAdminMovies().filter(function(item){return item.adminId!==id;});localStorage.setItem('agastream-custom-movies',JSON.stringify(next));}
  else{var deleted=JSON.parse(localStorage.getItem('agastream-deleted-movies')||'[]');if(deleted.indexOf(id)<0)deleted.push(id);localStorage.setItem('agastream-deleted-movies',JSON.stringify(deleted));}
  location.reload();
}
function updateAdminMetrics(){
  var total=document.getElementById('admin-total-count');if(!total)return;
  total.textContent=ALL_MOVIES.length;
  document.getElementById('admin-series-count').textContent=ALL_MOVIES.filter(isSeriesMovie).length;
  document.getElementById('admin-custom-count').textContent=customAdminMovies().length;
}
function renderAdminLibrary(filter){
  var list=document.getElementById('admin-library-list');if(!list)return;
  var query=(filter||'').toLowerCase();
  var movies=ALL_MOVIES.filter(function(movie){return !query||movie.title.toLowerCase().includes(query)||(movie.genre||'').toLowerCase().includes(query);}).slice().reverse();
  var custom=customAdminMovies();
  if(!movies.length){list.innerHTML='<div class="admin-empty">No titles match your filter.</div>';return;}
  list.innerHTML=movies.map(function(movie){
    var canEdit=true;var manageId=movieManageId(movie);
    return '<div class="admin-library-row"><div class="admin-library-poster">'+(movie.poster?'<img src="'+movie.poster+'" alt="">':'<span>🎬</span>')+'</div><div class="admin-library-info"><strong>'+movie.title+'</strong><span>'+movie.meta+'</span><small>'+(movie.link?'Watch link ready':'Missing watch link')+(movie.download?' • Download ready':'')+(movie.trailer?' • Trailer ready':'')+'</small></div>'+(canEdit?'<div class="admin-row-actions"><button onclick="editAdminMovie(\''+manageId+'\')" title="Edit"><i class="fa fa-pencil"></i></button><button class="danger" onclick="deleteAdminMovie(\''+manageId+'\')" title="Delete"><i class="fa fa-trash"></i></button></div>':'')+'</div>';
  }).join('');
  updateAdminMetrics();
}


// ════════════════════════════════
//  FULL SITE SETTINGS
// ════════════════════════════════
var pendingAdminLogo='';
var RESERVED_SECTIONS=['new','trending','series','action','drama','horror','romantic','documentary','cartoon'];

function loadSiteSettings(){
  try{siteSettings=Object.assign({},DEFAULT_SITE_SETTINGS,JSON.parse(localStorage.getItem('agastream-site-settings')||'{}'));customSections=JSON.parse(localStorage.getItem('agastream-custom-sections')||'[]');}catch(error){console.warn('Could not load site settings',error);}
  applySiteSettings();
}
function applySiteSettings(){
  var name=siteSettings.siteName||DEFAULT_SITE_SETTINGS.siteName;
  document.title=siteSettings.pageTitle||name;
  var word=document.getElementById('brandWord');
  if(word)word.textContent=name;
  var mark=document.getElementById('brandMark');
  if(mark){
    if(siteSettings.logoUrl){mark.innerHTML='<img src="'+siteSettings.logoUrl+'" alt="'+name+' logo">';mark.classList.add('has-logo');}
    else{mark.textContent=(siteSettings.logoMark||name.charAt(0)).slice(0,2).toUpperCase();mark.classList.remove('has-logo');}
  }
  var about=document.getElementById('footerAbout');if(about)about.textContent=siteSettings.footerAbout;
  var year=document.getElementById('footerYear');if(year)year.textContent=siteSettings.footerYear;
  var copyright=document.getElementById('footerCopyright');if(copyright)copyright.textContent=siteSettings.copyright;
  setFooterLink('footerPhone','tel:'+siteSettings.phone,siteSettings.phone);
  setFooterLink('footerEmail','mailto:'+siteSettings.email,siteSettings.email);
  setFooterLink('footerYoutube',siteSettings.youtube,siteSettings.youtube?'YouTube channel':'YouTube');
  setFooterLink('footerInstagram',siteSettings.instagram,siteSettings.instagram?'Instagram page':'Instagram');
  setFooterLink('footerFacebook',siteSettings.facebook,siteSettings.facebook?'Facebook page':'Facebook');
}
function setFooterLink(id,href,label){var link=document.getElementById(id);if(!link)return;link.href=href||'#';var text=link.querySelector('span');if(text)text.textContent=label;}
function populateSiteSettingsForm(){
  var map={siteName:'setting-site-name',logoMark:'setting-logo-mark',pageTitle:'setting-page-title',footerYear:'setting-footer-year',footerAbout:'setting-footer-about',phone:'setting-phone',email:'setting-email',youtube:'setting-youtube',instagram:'setting-instagram',facebook:'setting-facebook',copyright:'setting-copyright'};
  Object.keys(map).forEach(function(key){var el=document.getElementById(map[key]);if(el)el.value=siteSettings[key]||'';});
  var logoUrlInput=document.getElementById('setting-logo-url');if(logoUrlInput)logoUrlInput.value=siteSettings.logoUrl&&siteSettings.logoUrl.indexOf('data:')!==0?siteSettings.logoUrl:'';
  if(siteSettings.logoUrl){document.getElementById('setting-logo-preview').innerHTML='<img src="'+siteSettings.logoUrl+'" alt="Logo preview">';}
  renderCustomSectionList();
}
function previewAdminLogo(event){var file=event.target.files[0];if(!file)return;var reader=new FileReader();reader.onload=function(){pendingAdminLogo=reader.result;document.getElementById('setting-logo-preview').innerHTML='<img src="'+pendingAdminLogo+'" alt="Logo preview">';};reader.readAsDataURL(file);}
function saveSiteSettings(event){
  event.preventDefault();
  var map={siteName:'setting-site-name',logoMark:'setting-logo-mark',pageTitle:'setting-page-title',footerYear:'setting-footer-year',footerAbout:'setting-footer-about',phone:'setting-phone',email:'setting-email',youtube:'setting-youtube',instagram:'setting-instagram',facebook:'setting-facebook',copyright:'setting-copyright'};
  Object.keys(map).forEach(function(key){var el=document.getElementById(map[key]);if(el)siteSettings[key]=el.value.trim();});
  if(pendingAdminLogo)siteSettings.logoUrl=pendingAdminLogo;else{var logoUrl=document.getElementById('setting-logo-url');if(logoUrl&&logoUrl.value.trim())siteSettings.logoUrl=logoUrl.value.trim();}
  var key=document.getElementById('setting-section-key').value.trim().toLowerCase();
  var sectionName=document.getElementById('setting-section-name').value.trim();
  if(key&&sectionName&&!RESERVED_SECTIONS.includes(key)){
    var existing=customSections.find(function(section){return section.key===key;});
    if(existing)existing.name=sectionName;else customSections.push({key:key,name:sectionName});
    localStorage.setItem('agastream-custom-sections',JSON.stringify(customSections));
    document.getElementById('setting-section-key').value='';document.getElementById('setting-section-name').value='';
  }
  localStorage.setItem('agastream-site-settings',JSON.stringify(siteSettings));
  applySiteSettings();renderCustomSections();populateSiteSettingsForm();
  document.getElementById('settings-save-message').textContent='Site settings saved and applied.';
  showToast('Your site appearance and links were updated');
}
function resetSiteSettings(){
  if(!window.confirm('Reset branding and footer settings to the original defaults?'))return;
  siteSettings=Object.assign({},DEFAULT_SITE_SETTINGS);pendingAdminLogo='';localStorage.setItem('agastream-site-settings',JSON.stringify(siteSettings));applySiteSettings();populateSiteSettingsForm();
}
function renderCustomSections(){
  var mount=document.getElementById('custom-sections');if(!mount)return;mount.innerHTML='';
  customSections.forEach(function(section,index){
    var wrapper=document.createElement('section');wrapper.className='section custom-section';wrapper.id='custom-'+section.key;wrapper.innerHTML='<div class="section-hdr"><div class="section-title">'+section.name+' <span>Films</span></div><button class="see-all-btn" onclick="openCatPage(\''+section.key+'\')">See All</button></div><div class="slider-wrap"><button class="sl-arrow left" onclick="scrollRow(\'row-custom-'+section.key+'\',-1)">&#10094;</button><div class="slider-row" id="row-custom-'+section.key+'"></div><button class="sl-arrow right" onclick="scrollRow(\'row-custom-'+section.key+'\',1)">&#10095;</button></div>';
    mount.appendChild(wrapper);fillRow('row-custom-'+section.key,section.key);
  });
}
function renderCustomSectionList(){
  var list=document.getElementById('custom-section-list');if(!list)return;
  if(!customSections.length){list.innerHTML='<div class="admin-empty">No custom sections yet. Add one above.</div>';return;}
  list.innerHTML='<div class="custom-section-list-title">Your custom sections</div>'+customSections.map(function(section){return '<div class="custom-section-row"><span><strong>'+section.name+'</strong><small>#'+section.key+'</small></span><button type="button" onclick="deleteCustomSection(\''+section.key+'\')"><i class="fa fa-trash"></i></button></div>';}).join('');
}
function deleteCustomSection(key){customSections=customSections.filter(function(section){return section.key!==key;});localStorage.setItem('agastream-custom-sections',JSON.stringify(customSections));renderCustomSections();renderCustomSectionList();showToast('Custom section removed');}
var originalOpenAdminPanel=openAdminPanel;
openAdminPanel=function(){originalOpenAdminPanel();if(sessionStorage.getItem('agastream-admin')==='true'){populateSiteSettingsForm();populateAdminSlides();}};

function restoreDeletedMovies(){
  localStorage.removeItem('agastream-deleted-movies');
  location.reload();
}


// ════════════════════════════════
//  REAL BROWSER ROUTES
// ════════════════════════════════
var routeRendering=false;
function slugify(value){return String(value||'').toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');}
function contentPath(movie){return isSeriesMovie(movie)?'/series/'+slugify(movie.title):'/movie/'+slugify(movie.title);}
function findMovieBySlug(slug,type){return ALL_MOVIES.find(function(movie){return slugify(movie.title)===slug&&(type==='series'?isSeriesMovie(movie):!isSeriesMovie(movie));});}
function openContentRoute(path,type){
  var parts=path.split('/').filter(Boolean),movie=findMovieBySlug(decodeURIComponent(parts[1]||''),type);
  if(!movie){baseShowMainPage();routeTitle('Not Found');showToast('This title is not available in the catalog');return;}
  if(type==='series'&&parts[3]&&parts[3].indexOf('episode-')===0)movie._selectedEpisode=Math.max(0,parseInt(parts[3].replace('episode-',''),10)-1);
  baseShowMainPage();routeTitle(movie.title);window.setTimeout(function(){openModal(movie);},0);
}
function playSeriesEpisode(movie,index){if(!movie||!isSeriesMovie(movie))return;movie._selectedEpisode=index;routeTo(contentPath(movie)+'/season-1/episode-'+(index+1));}
var baseShowMainPage=showMainPage;
var baseOpenAdminPanel=openAdminPanel;
var baseOpenAllCategoriesPage=openAllCategoriesPage;
var baseOpenAllInterpretersPage=openAllInterpretersPage;
var baseOpenCatPage=openCatPage;
var baseOpenInterpPage=openInterpPage;
function routeTitle(title){document.title=(title?title+' | ':'')+(siteSettings.siteName||'AgaStream');}
function routeTo(path,target){history.pushState({},'',path);applyRoute(path,target);}
function openCatalogPage(kind){
  hidePagesShowBlank();
  var isSeries=kind==='series';
  var films=ALL_MOVIES.filter(function(movie){return isSeries?isSeriesMovie(movie):!isSeriesMovie(movie);});
  document.getElementById('cp-name').textContent=isSeries?'TV SERIES':'MOVIES';
  document.getElementById('cp-meta').textContent=films.length+' titles available in the catalog';
  document.getElementById('cp-title-name').textContent=isSeries?'TV SERIES':'MOVIES';
  var movieGroup=document.getElementById('cp-movies-group'),seriesGroup=document.getElementById('cp-series-group');
  var movieGrid=document.getElementById('cp-movies-grid'),seriesGrid=document.getElementById('cp-series-grid');
  movieGrid.innerHTML='';seriesGrid.innerHTML='';
  movieGroup.style.display=isSeries?'none':'block';seriesGroup.style.display=isSeries?'block':'none';
  document.getElementById(isSeries?'cp-series-count':'cp-movies-count').textContent=films.length+' title'+(films.length===1?'':'s');
  if(!films.length)(isSeries?seriesGrid:movieGrid).innerHTML='<p style="color:var(--muted);padding:2rem">No titles have been added yet. Open Admin Studio to publish the first one.</p>';
  films.forEach(function(movie){(isSeries?seriesGrid:movieGrid).appendChild(makeCard(movie));});
  document.getElementById('cat-page').style.display='block';window.scrollTo(0,0);
}
function applyRoute(path,target){
  routeRendering=true;
  if(path==='/admin'){baseOpenAdminPanel();routeTitle('Admin Studio');}
  else if(path==='/categories'){baseOpenAllCategoriesPage();routeTitle('Categories');}
  else if(path==='/interpreters'){baseOpenAllInterpretersPage();routeTitle('Interpreters');}
  else if(path==='/movies'){openCatalogPage('movie');routeTitle('Movies');}
  else if(path==='/tv-series'||path==='/series'){openCatalogPage('series');routeTitle('TV Series');}
  else if(path.indexOf('/movie/')===0){openContentRoute(path,'movie');}
  else if(path.indexOf('/series/')===0){openContentRoute(path,'series');}
  else if(path.indexOf('/category/')===0){baseOpenCatPage(decodeURIComponent(path.slice(9)));routeTitle('Category');}
  else if(path.indexOf('/interpreter/')===0){baseOpenInterpPage(decodeURIComponent(path.slice(13)));routeTitle('Interpreter');}
  else{
    baseShowMainPage();
    routeTitle(path==='/'?'Home':'Home');
    var scrollId=target||(path==='/categories'?'categories-section':'home');
    if(scrollId){window.requestAnimationFrame(function(){var el=document.getElementById(scrollId);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});});}
  }
  routeRendering=false;
}
showMainPage=function(){baseShowMainPage();if(!routeRendering){history.pushState({},'', '/');routeTitle('Home');}};
openAdminPanel=function(){baseOpenAdminPanel();if(!routeRendering){history.pushState({},'', '/admin');routeTitle('Admin Studio');}};
openAllCategoriesPage=function(){baseOpenAllCategoriesPage();if(!routeRendering){history.pushState({},'', '/categories');routeTitle('Categories');}};
openAllInterpretersPage=function(){baseOpenAllInterpretersPage();if(!routeRendering){history.pushState({},'', '/interpreters');routeTitle('Interpreters');}};
openCatPage=function(id){baseOpenCatPage(id);if(!routeRendering){history.pushState({},'', '/category/'+encodeURIComponent(id));routeTitle('Category');}};
openInterpPage=function(name){baseOpenInterpPage(name);if(!routeRendering){history.pushState({},'', '/interpreter/'+encodeURIComponent(name));routeTitle('Interpreter');}};
window.addEventListener('popstate',function(){applyRoute(location.pathname);});
applyRoute(location.pathname||'/');


// ════════════════════════════════
//  ADMIN HERO SLIDESHOW MANAGER
// ════════════════════════════════
function loadAdminSlides(){
  try{adminSlides=JSON.parse(localStorage.getItem('agastream-admin-slides')||'[]');}catch(error){adminSlides=[];}
  SLIDES.length=0;
  adminSlides.forEach(function(slide){SLIDES.push(slide);});
}
function saveAdminSlide(event){
  event.preventDefault();
  var id=document.getElementById('admin-slide-edit-id').value||('slide-'+Date.now());
  var slide={id:id,title:document.getElementById('admin-slide-title').value.trim(),year:document.getElementById('admin-slide-year').value.trim()||'2026',genre:document.getElementById('admin-slide-genre').value.trim()||'Drama',interpreter:document.getElementById('admin-slide-interpreter').value.trim()||'AgaStream',img:document.getElementById('admin-slide-image').value.trim(),link:document.getElementById('admin-slide-link').value.trim(),desc:document.getElementById('admin-slide-description').value.trim()||'Discover this new AgaStream title.',type:document.getElementById('admin-slide-type').value,rating:document.getElementById('admin-slide-rating').value.trim()||'8.6'};
  var index=adminSlides.findIndex(function(item){return item.id===id;});
  if(index>-1)adminSlides[index]=slide;else adminSlides.push(slide);
  localStorage.setItem('agastream-admin-slides',JSON.stringify(adminSlides));
  document.getElementById('slide-save-message').textContent='Slide saved. Refreshing the public hero...';
  setTimeout(function(){location.reload();},450);
}
function resetAdminSlideForm(){
  var form=document.getElementById('slideshow-admin-form');if(form)form.reset();
  document.getElementById('admin-slide-edit-id').value='';
  document.getElementById('slide-form-title').textContent='Add a slideshow slide';
  document.getElementById('slide-save-message').textContent='';
}
function editAdminSlide(id){
  var slide=adminSlides.find(function(item){return item.id===id;});if(!slide)return;
  document.getElementById('admin-slide-edit-id').value=slide.id;
  document.getElementById('admin-slide-title').value=slide.title||'';
  document.getElementById('admin-slide-year').value=slide.year||'';
  document.getElementById('admin-slide-genre').value=slide.genre||'';
  document.getElementById('admin-slide-interpreter').value=slide.interpreter||'';
  document.getElementById('admin-slide-image').value=slide.img||'';
  document.getElementById('admin-slide-link').value=slide.link||'';
  document.getElementById('admin-slide-description').value=slide.desc||'';
  document.getElementById('admin-slide-type').value=slide.type||'movie';
  document.getElementById('admin-slide-rating').value=slide.rating||'8.6';
  document.getElementById('slide-form-title').textContent='Edit slideshow slide';
  document.getElementById('slideshow-admin-form').scrollIntoView({behavior:'smooth',block:'start'});
}
function deleteAdminSlide(id){
  if(!window.confirm('Delete this hero slide from the homepage?'))return;
  adminSlides=adminSlides.filter(function(item){return item.id!==id;});
  localStorage.setItem('agastream-admin-slides',JSON.stringify(adminSlides));
  location.reload();
}
function moveAdminSlide(id,direction){
  var index=adminSlides.findIndex(function(item){return item.id===id;});var next=index+direction;
  if(index<0||next<0||next>=adminSlides.length)return;
  var temp=adminSlides[index];adminSlides[index]=adminSlides[next];adminSlides[next]=temp;
  localStorage.setItem('agastream-admin-slides',JSON.stringify(adminSlides));location.reload();
}
function populateAdminSlides(){
  var list=document.getElementById('admin-slide-list');if(!list)return;
  if(!adminSlides.length){list.innerHTML='<div class="admin-empty">No hero slides yet. Add your first slide above.</div>';return;}
  list.innerHTML='<div class="admin-slide-list-title">Published hero slides</div>'+adminSlides.map(function(slide,index){return '<div class="admin-slide-row"><div class="admin-slide-thumb"><img src="'+slide.img+'" alt="" onerror="this.style.display=\'none\'"></div><div class="admin-slide-info"><strong>'+slide.title+'</strong><span>'+slide.genre+' • '+slide.year+' • '+slide.type+'</span><small>Slide '+(index+1)+' of '+adminSlides.length+'</small></div><div class="admin-slide-actions"><button type="button" onclick="moveAdminSlide(\''+slide.id+'\',-1)" title="Move up">↑</button><button type="button" onclick="moveAdminSlide(\''+slide.id+'\',1)" title="Move down">↓</button><button type="button" onclick="editAdminSlide(\''+slide.id+'\')" title="Edit"><i class="fa fa-pencil"></i></button><button type="button" class="danger" onclick="deleteAdminSlide(\''+slide.id+'\')" title="Delete"><i class="fa fa-trash"></i></button></div></div>';}).join('');
}



// ════════════════════════════════
//  SHARED HOSTED CATALOG
// ════════════════════════════════
var sharedCatalogOnline=false;
var legacyAdminLogin=adminLogin,legacySaveAdminMovie=saveAdminMovie,legacyDeleteAdminMovie=deleteAdminMovie,legacySaveAdminSlide=saveAdminSlide,legacyDeleteAdminSlide=deleteAdminSlide,legacyMoveAdminSlide=moveAdminSlide,legacySaveSiteSettings=saveSiteSettings,legacyDeleteCustomSection=deleteCustomSection,legacyResetSiteSettings=resetSiteSettings;
function sharedToken(){return sessionStorage.getItem('agastream-admin-token')||'';}
async function sharedRequest(url,options){options=options||{};options.headers=Object.assign({'Content-Type':'application/json'},options.headers||{});var t=sharedToken();if(t)options.headers.Authorization='Bearer '+t;var r=await fetch(url,options),d={};try{d=await r.json();}catch(_){}if(!r.ok)throw Error(d.error||('Request failed: '+r.status));return d;}
function refreshSharedUI(){applySiteSettings();buildHero();['new','trending','series','action','drama','horror','romantic','documentary','cartoon'].forEach(function(s){fillRow('row-'+s,s);});renderCustomSections();buildCategories();buildInterpreters();if(typeof applyRoute==='function')applyRoute(location.pathname||'/');}
async function loadSharedCatalog(){try{var d=await sharedRequest('/api/catalog',{cache:'no-store'});sharedCatalogOnline=true;var movieKeys={};ALL_MOVIES.length=0;(d.movies||[]).forEach(function(m){var key=String(m.adminId||m.catalogKey||m.title||'').toLowerCase();if(!key||movieKeys[key])return;movieKeys[key]=true;ALL_MOVIES.push(m);});var slideKeys={};adminSlides=[];(d.slides||[]).forEach(function(s){var key=String(s.id||s.title||'').toLowerCase();if(!key||slideKeys[key])return;slideKeys[key]=true;adminSlides.push(s);});SLIDES.length=0;adminSlides.forEach(function(s){SLIDES.push(s);});siteSettings=Object.assign({},DEFAULT_SITE_SETTINGS,d.settings||{});customSections=Array.isArray(d.customSections)?d.customSections:[];refreshSharedUI();}catch(e){console.warn('Shared catalog unavailable; local preview data retained.',e.message);}}
function apiMovie(){var id=document.getElementById('admin-edit-id').value.trim(),type=document.getElementById('admin-type').value,genre=document.getElementById('admin-genre').value,sections=(document.getElementById('admin-sections').value||'').split(',').map(function(x){return x.trim().toLowerCase();}).filter(Boolean);if(!sections.length)sections=[genre];if(type==='series'&&sections.indexOf('series')<0)sections.push('series');return{adminId:id||'movie-'+Date.now(),title:document.getElementById('admin-title').value.trim(),poster:document.getElementById('admin-poster').value.trim()||pendingAdminPoster,meta:(document.getElementById('admin-year').value.trim()||'2026')+' • '+genre.charAt(0).toUpperCase()+genre.slice(1)+' • '+(type==='series'?'Series':'Movie'),voice:document.getElementById('admin-voice').value.trim()||'AgaStream',genre:genre,section:sections,desc:document.getElementById('admin-description').value.trim()||'A new AgaStream title.',link:document.getElementById('admin-watch').value.trim(),download:document.getElementById('admin-download').value.trim(),trailer:document.getElementById('admin-trailer').value.trim(),video:document.getElementById('admin-video').value.trim(),type:type,isNew:document.getElementById('admin-is-new').checked,episodes:type==='series'?document.getElementById('admin-episodes').value.split(/\n+/).map(function(x){return x.trim();}).filter(Boolean):[]};}
adminLogin=async function(e){e.preventDefault();var err=document.getElementById('admin-login-error');try{var d=await sharedRequest('/api/admin/login',{method:'POST',body:JSON.stringify({username:document.getElementById('admin-username').value.trim(),password:document.getElementById('admin-password').value})});sessionStorage.setItem('agastream-admin-token',d.token);sessionStorage.setItem('agastream-admin','true');err.textContent='';document.getElementById('admin-login').style.display='none';document.getElementById('admin-dashboard').style.display='block';renderAdminLibrary();updateAdminMetrics();populateSiteSettingsForm();populateAdminSlides();showToast('Welcome back, Admin');}catch(x){err.textContent=x.message==='Failed to fetch'?'Shared server unavailable.':'Incorrect username or password.';}};
openAdminPanel=function(){baseOpenAdminPanel();var ok=!!sharedToken()||sessionStorage.getItem('agastream-admin')==='true';document.getElementById('admin-login').style.display=ok?'none':'block';document.getElementById('admin-dashboard').style.display=ok?'block':'none';if(ok){renderAdminLibrary();updateAdminMetrics();populateSiteSettingsForm();populateAdminSlides();}};
adminLogout=function(){sessionStorage.removeItem('agastream-admin-token');sessionStorage.removeItem('agastream-admin');document.getElementById('admin-dashboard').style.display='none';document.getElementById('admin-login').style.display='block';document.getElementById('admin-password').value='';};
saveAdminMovie=async function(e){if(!sharedCatalogOnline)return legacySaveAdminMovie(e);e.preventDefault();try{await sharedRequest('/api/admin/catalog',{method:'POST',body:JSON.stringify(apiMovie())});await loadSharedCatalog();renderAdminLibrary();updateAdminMetrics();resetAdminForm();document.getElementById('admin-save-message').textContent='Saved to the shared catalog. All visitors can now see it.';showToast('Catalog saved for all visitors');}catch(x){document.getElementById('admin-save-message').textContent=x.message;}};
deleteAdminMovie=async function(id){if(!confirm('Delete this title for every visitor?'))return;if(!sharedCatalogOnline)return legacyDeleteAdminMovie(id);try{await sharedRequest('/api/admin/catalog/'+encodeURIComponent(id),{method:'DELETE'});await loadSharedCatalog();renderAdminLibrary();showToast('Title deleted for every visitor');}catch(x){showToast(x.message);}};
saveAdminSlide=async function(e){if(!sharedCatalogOnline)return legacySaveAdminSlide(e);e.preventDefault();var id=document.getElementById('admin-slide-edit-id').value||'slide-'+Date.now(),slide={id:id,title:document.getElementById('admin-slide-title').value.trim(),year:document.getElementById('admin-slide-year').value.trim()||'2026',genre:document.getElementById('admin-slide-genre').value.trim()||'Drama',interpreter:document.getElementById('admin-slide-interpreter').value.trim()||'AgaStream',img:document.getElementById('admin-slide-image').value.trim(),link:document.getElementById('admin-slide-link').value.trim(),desc:document.getElementById('admin-slide-description').value.trim()||'Discover this new AgaStream title.',type:document.getElementById('admin-slide-type').value,rating:document.getElementById('admin-slide-rating').value.trim()||'8.6',position:adminSlides.findIndex(function(s){return s.id===id;})};try{await sharedRequest('/api/admin/slides',{method:'POST',body:JSON.stringify(slide)});await loadSharedCatalog();populateAdminSlides();resetAdminSlideForm();document.getElementById('slide-save-message').textContent='Slide saved for every visitor.';showToast('Homepage slide published');}catch(x){document.getElementById('slide-save-message').textContent=x.message;}};
deleteAdminSlide=async function(id){if(!confirm('Delete this homepage slide for every visitor?'))return;if(!sharedCatalogOnline)return legacyDeleteAdminSlide(id);try{await sharedRequest('/api/admin/slides/'+encodeURIComponent(id),{method:'DELETE'});await loadSharedCatalog();populateAdminSlides();showToast('Homepage slide deleted');}catch(x){showToast(x.message);}};
moveAdminSlide=async function(id,dir){if(!sharedCatalogOnline)return legacyMoveAdminSlide(id,dir);var i=adminSlides.findIndex(function(s){return s.id===id;}),n=i+dir;if(i<0||n<0||n>=adminSlides.length)return;var ids=adminSlides.map(function(s){return s.id;}),tmp=ids[i];ids[i]=ids[n];ids[n]=tmp;try{await sharedRequest('/api/admin/slides/reorder',{method:'POST',body:JSON.stringify({ids:ids})});await loadSharedCatalog();populateAdminSlides();}catch(x){showToast(x.message);}};
function apiSettings(){var map={siteName:'setting-site-name',logoMark:'setting-logo-mark',pageTitle:'setting-page-title',footerYear:'setting-footer-year',footerAbout:'setting-footer-about',phone:'setting-phone',email:'setting-email',youtube:'setting-youtube',instagram:'setting-instagram',facebook:'setting-facebook',copyright:'setting-copyright'},n=Object.assign({},siteSettings);Object.keys(map).forEach(function(k){var e=document.getElementById(map[k]);if(e)n[k]=e.value.trim();});if(pendingAdminLogo)n.logoUrl=pendingAdminLogo;else{var l=document.getElementById('setting-logo-url');if(l&&l.value.trim())n.logoUrl=l.value.trim();}return n;}
saveSiteSettings=async function(e){if(!sharedCatalogOnline)return legacySaveSiteSettings(e);e.preventDefault();var k=document.getElementById('setting-section-key').value.trim().toLowerCase(),n=document.getElementById('setting-section-name').value.trim(),sections=customSections.slice();if(k&&n&&!RESERVED_SECTIONS.includes(k)){var old=sections.find(function(s){return s.key===k;});if(old)old.name=n;else sections.push({key:k,name:n});}try{await sharedRequest('/api/admin/settings',{method:'PUT',body:JSON.stringify({siteSettings:apiSettings(),customSections:sections})});await loadSharedCatalog();populateSiteSettingsForm();document.getElementById('settings-save-message').textContent='Settings saved for every visitor.';showToast('Site settings published');}catch(x){document.getElementById('settings-save-message').textContent=x.message;}};
deleteCustomSection=async function(k){if(!sharedCatalogOnline)return legacyDeleteCustomSection(k);try{await sharedRequest('/api/admin/settings',{method:'PUT',body:JSON.stringify({siteSettings:siteSettings,customSections:customSections.filter(function(s){return s.key!==k;})})});await loadSharedCatalog();populateSiteSettingsForm();}catch(x){showToast(x.message);}};
resetSiteSettings=async function(){if(!confirm('Reset branding and footer settings for every visitor?'))return;if(!sharedCatalogOnline)return legacyResetSiteSettings();try{await sharedRequest('/api/admin/settings',{method:'PUT',body:JSON.stringify({siteSettings:DEFAULT_SITE_SETTINGS,customSections:customSections})});await loadSharedCatalog();populateSiteSettingsForm();}catch(x){showToast(x.message);}};
loadSharedCatalog();


// ════════════════════════════════
//  ADMIN QUICK ACTIONS
// ════════════════════════════════
function ensureAdminQuickActions(){
  var dashboard=document.getElementById('admin-dashboard');
  if(!dashboard||document.getElementById('admin-quick-actions'))return;
  var nav=dashboard.querySelector('.admin-workflow-nav');
  if(!nav)return;
  var panel=document.createElement('div');panel.id='admin-quick-actions';panel.className='admin-quick-actions';
  panel.innerHTML='<div class="admin-quick-heading"><span class="admin-eyebrow">QUICK ADD</span><h2>Publish new content</h2><p>Choose exactly what you want to add. Your saved content will appear for every visitor.</p></div><div class="admin-quick-grid"><button type="button" class="admin-quick-card admin-quick-slide" onclick="focusAdminForm(\'slide\')"><span class="admin-quick-icon"><i class="fa fa-picture-o"></i></span><span><strong>Add homepage slideshow</strong><small>Hero image, title, description and watch link</small></span><b>Open &rarr;</b></button><button type="button" class="admin-quick-card admin-quick-movie" onclick="focusAdminForm(\'movie\')"><span class="admin-quick-icon"><i class="fa fa-film"></i></span><span><strong>Add a movie</strong><small>Poster, watch link, download and trailer</small></span><b>Open &rarr;</b></button><button type="button" class="admin-quick-card admin-quick-series" onclick="focusAdminForm(\'series\')"><span class="admin-quick-icon"><i class="fa fa-list-ol"></i></span><span><strong>Add a TV series</strong><small>Series details plus episode URLs</small></span><b>Open &rarr;</b></button></div>';
  nav.insertAdjacentElement('afterend',panel);
  var note=dashboard.querySelector('.admin-note');
  if(note)note.innerHTML='<i class="fa fa-cloud"></i><span><strong>Shared publishing is active:</strong> movies, series, episodes, slides and settings are saved to the hosted catalog for all browsers.</span>';
}
function focusAdminForm(kind){
  ensureAdminQuickActions();
  if(kind==='slide'){
    if(typeof resetAdminSlideForm==='function')resetAdminSlideForm();
    var slide=document.getElementById('slideshow-admin-form');if(slide)slide.scrollIntoView({behavior:'smooth',block:'start'});
    return;
  }
  if(typeof resetAdminForm==='function')resetAdminForm();
  var type=document.getElementById('admin-type');if(type)type.value=kind==='series'?'series':'movie';
  var title=document.getElementById('admin-form-title');if(title)title.textContent=kind==='series'?'Add a TV series':'Add a movie';
  var episodes=document.getElementById('admin-episodes');if(episodes)episodes.closest('label').classList.toggle('admin-series-required',kind==='series');
  var form=document.getElementById('movie-admin-form');if(form)form.scrollIntoView({behavior:'smooth',block:'start'});
}
var adminOpenWithQuickActions=openAdminPanel;
openAdminPanel=function(){adminOpenWithQuickActions();ensureAdminQuickActions();};
var adminLoginWithQuickActions=adminLogin;
adminLogin=async function(event){var result=await adminLoginWithQuickActions(event);ensureAdminQuickActions();return result;};
ensureAdminQuickActions();
