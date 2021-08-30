const main = {
  title: 'Our Missions are Beyond Mars',

  // about_our_lab: migrated to THU-MARS-Web/about_our_lab.vue

  banner: [
    'banner3.jpg',
    'banner1.jpg',
    'banner2.jpg',
  ],

  overview_of_research_directions: [
    {
      title: 'Multimedia Computing',
      content: 'We train AI models that learn from multi-modal Internet data such as images, audios, videos and text.',
      image: 'multimedia.png'
    },
    {
      title: 'Autonomous Driving',
      content: 'We develop the next-generation autonomous driving software stack: perception, prediction and planning.',
      image: 'autonomous_vehicles.png'
    },
    {
      title: 'Robotics',
      content: 'We make robots that learn from multiple sensory inputs to interact with the environment.',
      image: 'robotics.png'
    },
    {
      title: 'Sensors',
      content: 'We devise novel sensors together with AI models to enable brand-new perception applications.',
      image: 'sensors.png'
    },
  ],

  about_our_leader: [
    'Dr. Hang Zhao (赵行) is an Assistant Professor at IIIS, Tsinghua University. His research interests include multi-modal machine learning, computer vision and autonomous driving.',
    'Dr. Zhao was a Research Scientist at Waymo (known as Google\'s self-driving project). Before that, he got his Ph.D. degree at MIT under Professor Antonio Torralba.'
  ],

  graduate_students: [
    {
      name: 'Chenzhuang Du 杜晨壮',
      website: '',
      content: 'Chenzhuang Du is a PhD student starting from 2020. He is interested in the fundamentals and applications of multi-modal learning.',
      image: 'chenzhuang.jpg',
    },
    {
      name: 'Wenxiao Wang 汪文潇',
      website: '',
      content: 'Wenxiao Wang is a MS student starting from 2020. He is interested in self-supervised learning.',
      image: 'kenan.jpeg',
    },
    {
      name: 'Yichen Liu 刘奕辰',
      website: '',
      content: 'Yichen Liu is a MS student starting from 2020. He is interested in the fundamentals and applications of multi-modal learning.',
      image: 'kenan.jpeg',
    },
    {
      name: 'Junru Gu 辜俊儒',
      website: 'https://github.com/GentleSmile',
      content: 'Junru Gu is a fourth year undergraduate student at Tsinghua University, and an incoming PhD student in the fall of 2021.',
      image: 'gujunru.png',
    },
    {
      name: 'Chenxu Hu 胡晨旭',
      website: '',
      content: 'Chenxu Hu is a fourth year undergraduate student at Zhejiang University, and an incoming PhD student in the fall of 2021.',
      image: 'chenxu.jpg',
    },
  ],

  research_assistants: [
    {
      name: 'Zihui Xue 薛子慧',
      website: '',
      content: 'Zihui Xue is a research assistant in the lab. She is interested in the fundamentals and applications of multi-modal learning.',
      image: 'kenan.jpeg',
    },
    {
      name: 'Tingle Li 黎庭乐',
      website: 'https://tinglok.netlify.app/',
      content: 'Tingle Li is a research assistant in the lab. He is interested in audio-visual learning.',
      image: 'tingle.jpg',
    },
    {
      name: 'Tianyu Hua 华天羽',
      website: 'https://patrickhua.github.io/',
      content: 'Tianyu Hua is a research assistant in the lab. He is interested in representation learning.',
      image: 'tianyu.jpg',
    },
    {
      name: 'Ziwen Zhuang 庄子文',
      website: 'https://sites.google.com/view/ziwenzhuang',
      content: 'Ziwen Zhuang is a research assistant in the lab. He is interested in robotics.',
      image: 'ziwen.jpg',
    },
    {
      name: 'Tianyuan Zhang 张天远',
      website: 'http://tianyuanzhang.com/',
      content: 'Tianyuan Zhang is a research assistant in the lab. He is interested in computer vision and autonomous driving.',
      image: 'tianyuan.jpg',
    },
    {
      name: 'Xiaojie Xu 徐啸捷',
      website: '',
      content: 'Xiaojie Xu is a research assistant in the lab. He is interested in computer vision and autonomous driving.',
      image: 'kenan.jpeg',
    },
  ],
  
  alumni: [],

  projects: [
    {
      title: 'HDMapNet: An Online HD Map Construction and Evaluation Framework',
      publisher: 'CVPR 2021 Workshop (best paper nominee)',
      authors: 'Qi Li, Yue Wang, Yilun Wang, Hang Zhao',
      description: '"HD map sensing from onboard sensors!"',
      paper_link: 'https://arxiv.org/abs/2107.06307',
      project_link: 'https://tsinghua-mars-lab.github.io/HDMapNet/',
      image: 'hdmapnet_demo.gif',
      tags: [
        'hot',
      ],
    },
    {
      title: 'On Feature Decorrelation in Self-Supervised Learning',
      publisher: 'ICCV 2021 Oral',
      authors: 'Tianyu Hua, Wenxiao Wang, Zihui Xue, Yue Wang, Sucheng Ren, Hang Zhao',
      description: '"It reveals the connection between model collapse and feature correlations!"',
      paper_link: 'https://arxiv.org/abs/2105.00470',
      project_link: 'https://tsinghua-mars-lab.github.io/decorr/',
      image: 'decorrelation.jpg',
      tags: [
        'hot',
      ],
    },
	  {
      title: 'Large Scale Interactive Motion Forecasting for Autonomous Driving: The Waymo Open Motion Dataset',
      publisher: 'ICCV 2021 Oral',
      authors: 'Scott Ettinger, Shuyang Cheng, Benjamin Caine, Chenxi Liu, Hang Zhao, Sabeek Pradhan, Yuning Chai, Ben Sapp, Charles Qi, Yin Zhou, Zoey Yang, Aurelien Chouard, Pei Sun, Jiquan Ngiam, Vijay Vasudevan, Alexander McCauley, Jonathon Shlens, Dragomir Anguelov',
	  // description: '"A high-quality interactive motion prediction dataset for autonomous driving!"',
      paper_link: 'https://arxiv.org/abs/2104.10133',
      project_link: 'https://blog.waymo.com/2021/03/expanding-waymo-open-dataset-with-interactive-scenario-data-and-new-challenges.html',
      image: 'waymo_motion.gif',
      tags: [
        'hot',
      ],
    },
    {
      title: 'Multimodal Knowledge Expansion',
      publisher: 'ICCV 2021',
      authors: 'Zihui Xue, Sucheng Ren, Zhengqi Gao, Hang Zhao',
      description: '"Multimodal data brings knowledge for free!"',
      paper_link: 'https://arxiv.org/abs/2103.14431',
      project_link: 'https://tsinghua-mars-lab.github.io/MKE/',
      image: 'mke.png',
    },    
    {
      title: 'DenseTNT: End-to-end Trajectory Prediction from Dense Goal Sets',
      publisher: 'ICCV 2021, Waymo Motion Prediction Challenge Winner',
      authors: 'Junru Gu, Chen Sun, Hang Zhao',
      description: '"A SOTA anchor-free and end-to-end multi-trajectory prediction model"',
      paper_link: 'https://arxiv.org/abs/2108.09640',
      project_link: 'https://tsinghua-mars-lab.github.io/DenseTNT/',
      extra_link: [
        {
          name: 'Challenge Report',
  	      link: 'https://arxiv.org/abs/2106.14160',
        },
      ],
      image: 'densetnt.png',
      tags: [
        'hot',
      ],
    },
    {
      title: 'CVC: Contrastive Learning for Non-parallel Voice Conversion',
      publisher: 'Interspeech 2021 (ISCA travel grant award)',
      authors: 'Tingle Li, Yichen Liu, Chenxu Hu, Hang Zhao',
      description: '"It only requires one-way GAN training for non-parallel voice conversion"',
      paper_link: 'https://arxiv.org/abs/2011.00782',
      project_link: 'https://tinglok.netlify.app/files/cvc/',
      image: 'CVC.jpg',
    },
    {
      title: 'HDMapGen: A Hierarchical Graph Generative Model of High Definition Maps',
      publisher: 'CVPR 2021',
      authors: 'Lu Mi, Hang Zhao, Charlie Nash, Xiaohan Jin, Jiyang Gao, Chen Sun, Cordelia Schmid, Nir Shavit, Yuning Chai, Dragomir Anguelov',
      paper_link: 'https://openaccess.thecvf.com/content/CVPR2021/html/Mi_HDMapGen_A_Hierarchical_Graph_Generative_Model_of_High_Definition_Maps_CVPR_2021_paper.html',
      image: 'HDMapGen.jpg',
    },
    {
      title: 'SEMI: Self-supervised Exploration via Multisensory Incongruity',
      publisher: 'Preprint',
      authors: 'Jianren Wang*, Ziwen Zhuang*, Hang Zhao',
      description: '"Multi-sensory incongruity incentizes RL agents to explore!"',
      paper_link: 'https://arxiv.org/abs/2009.12494',
      project_link: '',
      image: 'SEMI.jpeg',
    }, 
    {
      title: 'TNT: Target-driveN Trajectory Prediction',
      publisher: 'CoRL 2020',
      authors: 'Hang Zhao*, Jiyang Gao*, Tian Lan, Chen Sun, Benjamin Sapp, Balakrishnan Varadarajan, Yue Shen, Yi Shen, Yuning Chai, Cordelia Schmid, Congcong Li, Dragomir Anguelov',
      description: '"A new learning-based framework for multi-trajectory prediction!"',
      paper_link: 'https://arxiv.org/abs/2008.08294',
      project_link: '',
      image: 'tnt.png',
      tags: [
        'hot',
      ],
    },
    {
      title: 'VectorNet: Encoding HD Maps and Agent Dynamics from Vectorized Representation',
      publisher: 'CVPR 2020',
      authors: 'Jiyang Gao, Chen Sun, Hang Zhao, Yi Shen, Dragomir Anguelov, Congcong Li, Cordelia Schmid',
      description: '"A graphical representation of HD maps."',
      paper_link: 'https://openaccess.thecvf.com/content_CVPR_2020/papers/Gao_VectorNet_Encoding_HD_Maps_and_Agent_Dynamics_From_Vectorized_Representation_CVPR_2020_paper.pdf',
      project_link: 'https://blog.waymo.com/2020/05/vectornet.html',
      image: 'vectornet.gif',
      tags: [
        'hot',
      ],
    },
    {
      title: 'Scalability in Perception for Autonomous Driving: Waymo Open Dataset',
      publisher: 'CVPR 2020',
      authors: 'Pei Sun, Henrik Kretzschmar, Xerxes Dotiwalla, Aurelien Chouard, Vijaysai Patnaik, Paul Tsui, James Guo, Yin Zhou, Yuning Chai, Benjamin Caine, Vijay Vasudevan, Wei Han, Jiquan Ngiam, Hang Zhao, Aleksei Timofeev, Scott Ettinger, Maxim Krivokon, Amy Gao, Aditya Joshi, Sheng Zhao, Shuyang Cheng, Yu Zhang, Jonathon Shlens, Zhifeng Chen, Dragomir Anguelov',
      // description: '"One of the largest and most diverse autonomous driving datasets ever released!"',
      paper_link: 'https://arxiv.org/abs/1912.04838',
      project_link: 'https://waymo.com/open/',
      image: 'waymo_od_challenge.jpeg',
      tags: [
        'hot',
      ],
    },
    {
      title: 'The Sound of Motions',
      publisher: 'ICCV 2019',
      authors: 'Hang Zhao, Chuang Gan, Wei-Chiu Ma, Antonio Torralba',
      description: '"Listen to the sound of motions!"',
      paper_link: 'https://arxiv.org/abs/1904.05979',
      project_link: '',
      image: 'sound_of_motions.png',
    },
    {
      title: 'Self-supervised Moving Vehicle Tracking with Stereo Sound',
      publisher: 'ICCV 2019',
      authors: 'Chuang Gan, Hang Zhao, Peihao Chen, David Cox, Antonio Torralba',
      description: '',
      paper_link: 'http://openaccess.thecvf.com/content_ICCV_2019/html/Gan_Self-Supervised_Moving_Vehicle_Tracking_With_Stereo_Sound_ICCV_2019_paper.html',
      project_link: '',
      image: 'stereo_tracking.jpeg',
    }, 
    {
      title: 'Through-Wall Human Mesh Recovery Using Radio Signals',
      publisher: 'ICCV 2019',
      authors: 'Mingmin Zhao, Yingcheng Liu, Aniruddh Raghu, Hang Zhao, Tianhong Li, Antonio Torralba, Dina Katabi',
      description: '',
      paper_link: 'http://openaccess.thecvf.com/content_ICCV_2019/html/Zhao_Through-Wall_Human_Mesh_Recovery_Using_Radio_Signals_ICCV_2019_paper.html',
      project_link: '',
      image: 'rfavatar.gif',
    }, 
    {
      title: 'HACS: Human Action Clips and Segments Dataset for Recognition and Temporal Localization',
      publisher: 'ICCV 2019',
      authors: 'Hang Zhao, Zhicheng Yan, Lorenzo Torresani, Antonio Torralba',
      description: '"A large-scale dataset for temporal action localization and recognition."',
      paper_link: 'https://arxiv.org/abs/1712.09374',
      project_link: 'http://hacs.csail.mit.edu/',
      image: 'slac.jpeg',
    }, 
    {
      title: 'The Sound of Pixels',
      publisher: 'ECCV 2018',
      authors: 'Hang Zhao, Chuang Gan, Andrew Rouditchenko, Carl Vondrick, Josh McDermott, Antonio Torralba',
      description: '"Listen to the sound of pixels!"',
      paper_link: 'https://arxiv.org/abs/1804.03160',
      project_link: 'http://sound-of-pixels.csail.mit.edu/',
      image: 'sound_of_pixels.png',
      tags: [
        'hot',
      ],
    }, 
    {
      title: 'RF-Based 3D Skeletons',
      publisher: 'SIGCOMM 2018',
      authors: 'Mingmin Zhao, Yonglong Tian, Hang Zhao, Mohammad Alsheikh, Tianhong Li, Rumen Hristov, Zachary Kabelac, Dina Katabi, Antonio Torralba',
      description: '',
      paper_link: 'https://dl.acm.org/citation.cfm?id=3230579',
      project_link: 'http://news.mit.edu/2018/artificial-intelligence-senses-people-through-walls-0612',
      image: 'rf-pose-3d.png',
    }, 
    {
      title: 'Through-Wall Human Pose Estimation Using Radio Signals',
      publisher: 'CVPR 2018',
      authors: 'Mingmin Zhao, Tianhong Li, Mohammad Alsheikh, Yonglong Tian, Hang Zhao, Antonio Torralba, Dina Katabi',
      description: '',
      paper_link: '',
      project_link: 'http://rfpose.csail.mit.edu/',
      image: 'rf-pose.png',
      tags: [
        'hot',
      ],
    },
    {
      title: 'Open Vocabulary Scene Parsing',
      publisher: 'ICCV 2017',
      authors: 'Hang Zhao, Xavier Puig, Bolei Zhou, Sanja Fidler, Antonio Torralba',
      description: '',
      paper_link: 'http://openaccess.thecvf.com/content_ICCV_2017/papers/Zhao_Open_Vocabulary_Scene_ICCV_2017_paper.pdf',
      project_link: 'http://sceneparsing.csail.mit.edu/openvoc/',
      image: 'openvoc.png',
    }, 
    {
      title: 'Scene Parsing through ADE20K Dataset',
      publisher: 'CVPR 2017',
      authors: 'Bolei Zhou, Hang Zhao, Xavier Puig, Sanja Fidler, Adela Barriuso, Antonio Torralba',
      description: '"The most widely used scene parsing dataset."',
      paper_link: 'http://people.csail.mit.edu/bzhou/publication/scene-parse-camera-ready.pdf',
      project_link: 'http://groups.csail.mit.edu/vision/datasets/ADE20K/',
      code_link: 'https://github.com/CSAILVision/semantic-segmentation-pytorch',
      extra_link: [
        {
          name: 'Scene Parsing Benchmark',
          link: 'http://sceneparsing.csail.mit.edu/',
        },
        {
          name: 'Toolkit',
          link: 'https://github.com/CSAILVision/sceneparsing',
        },
        {
          name: 'Paper (IJCV 2018)',
          link: 'https://link.springer.com/article/10.1007/s11263-018-1140-0',
        },
      ],
      image: 'sceneparsing_cvpr2017.png',
      tags: [
        'hot',
      ],
    }, 
    {
      title: 'Loss Functions for Neural Networks for Image Processing',
      publisher: 'IEEE TCI 2017',
      authors: 'Hang Zhao, Orazio Gallo, Iuri Frosio and Jan Kautz',
      description: '',
      paper_link: 'http://ieeexplore.ieee.org/iel7/6745852/6960042/07797130.pdf',
      project_link: 'http://research.nvidia.com/publication/loss-functions-image-restoration-neural-networks',
      image: 'lossNN.png',
      tags: [
        'hot',
      ],
    }, 
    {
      title: 'Duckietown: an Open, Inexpensive and Flexible Platform for Autonomy Education and Research',
      publisher: 'ICRA 2017',
      authors: '',
      description: '"We are building an open-source education and research platform for autonomous driving."',
      paper_link: 'http://people.csail.mit.edu/hangzhao/papers/duckietown.pdf',
      project_link: 'https://duckietown.mit.edu/',
      image: 'duckietown.png',
    }, 
    {
      title: 'Unbounded High Dynamic Range Photography using a Modulo Camera',
      publisher: 'ICCP 2015 Best Paper Runner-up',
      authors: 'Hang Zhao, Boxin Shi, Christy Fernandez-Cull, Sai-Kit Yeung and Ramesh Raskar',
      description: '',
      paper_link: 'http://people.csail.mit.edu/hangzhao/papers/moduloUHDR.pdf',
      project_link: 'http://web.media.mit.edu/~hangzhao/modulo.html',
      image: 'moduloHDR.png',
      tags: [
        'hot',
      ],
    }, 
    // {
    //   title: '',
    //   publisher: '',
    //   authors: '',
    //   description: '',
    //   paper_link: '',
    //   project_link: '',
    //   image: '',
    // }, 
  ],
  
  publications: [
    {
      title: 'HDMapNet: An Online HD Map Construction and Evaluation Framework',
      publisher: 'CVPR 2021 Workshop (best paper nominee)',
      authors: 'Qi Li, Yue Wang, Yilun Wang, Hang Zhao',
      paper_link: 'https://arxiv.org/abs/2107.06307',
    },
    {
      title: 'On Feature Decorrelation in Self-Supervised Learning',
      publisher: 'ICCV 2021 Oral',
      authors: 'Tianyu Hua, Wenxiao Wang, Zihui Xue, Yue Wang, Sucheng Ren, Hang Zhao',
      paper_link: 'https://arxiv.org/abs/2105.00470',
    },
	{
      title: 'Large Scale Interactive Motion Forecasting for Autonomous Driving: The Waymo Open Motion Dataset',
      publisher: 'ICCV 2021 Oral',
      authors: 'Scott Ettinger, Shuyang Cheng, Benjamin Caine, Chenxi Liu, Hang Zhao, Sabeek Pradhan, Yuning Chai, Ben Sapp, Charles Qi, Yin Zhou, Zoey Yang, Aurelien Chouard, Pei Sun, Jiquan Ngiam, Vijay Vasudevan, Alexander McCauley, Jonathon Shlens, Dragomir Anguelov',
      paper_link: 'https://arxiv.org/abs/2104.10133',
    },
    {
      title: 'Multimodal Knowledge Expansion',
      publisher: 'ICCV 2021',
      authors: 'Zihui Xue, Sucheng Ren, Zhengqi Gao, Hang Zhao',
      paper_link: 'https://arxiv.org/abs/2103.14431',
    },
    {
      title: 'DenseTNT: End-to-end Trajectory Prediction from Dense Goal Sets',
      publisher: 'ICCV 2021',
      authors: 'Junru Gu, Chen Sun, Hang Zhao',
      paper_link: 'https://arxiv.org/abs/2108.09640',
    },
    {
      title: 'DenseTNT: Waymo Open Dataset Motion Prediction Challenge 1st Place Solution',
      publisher: 'CVPR 2021 Workshop, Waymo Open Dataset Challenge Winner',
      authors: 'Junru Gu, Qiao Sun, Hang Zhao',
      paper_link: 'https://arxiv.org/abs/2106.14160',
    },
    {
      title: 'CVC: Contrastive Learning for Non-parallel Voice Conversion',
      publisher: 'Interspeech 2021 (ISCA travel grant award)',
      authors: 'Tingle Li, Yichen Liu, Chenxu Hu, Hang Zhao',
      paper_link: 'https://arxiv.org/abs/2011.00782',
    },
    {
      title: 'HDMapGen: A Hierarchical Graph Generative Model of High Definition Maps',
      publisher: 'CVPR 2021',
      authors: 'Lu Mi, Hang Zhao, Charlie Nash, Xiaohan Jin, Jiyang Gao, Chen Sun, Cordelia Schmid, Nir Shavit, Yuning Chai, Dragomir Anguelov',
      paper_link: 'https://openaccess.thecvf.com/content/CVPR2021/html/Mi_HDMapGen_A_Hierarchical_Graph_Generative_Model_of_High_Definition_Maps_CVPR_2021_paper.html',
    },
    {
      title: 'TNT: Target-driveN Trajectory Prediction',
      publisher: 'CoRL 2020',
      authors: 'Hang Zhao*, Jiyang Gao*, Tian Lan, Chen Sun, Benjamin Sapp, Balakrishnan Varadarajan, Yue Shen, Yi Shen, Yuning Chai, Cordelia Schmid, Congcong Li, Dragomir Anguelov',
      paper_link: 'https://arxiv.org/abs/2008.08294',
    },
    {
      title: 'SEMI: Self-supervised Exploration via Multisensory Incongruity',
      publisher: 'Preprint',
      authors: 'Jianren Wang*, Ziwen Zhuang*, Hang Zhao',
      paper_link: 'https://arxiv.org/abs/2009.12494',
    }, 
    {
      title: 'CLOUD: Contrastive Learning of Unsupervised Dynamics',
      publisher: 'CoRL 2020',
      authors: 'Jianren Wang, Yujie Lu, Hang Zhao',
      paper_link: 'https://arxiv.org/abs/2010.12488',
    }, 
    {
      title: 'Unsupervised Monocular Depth Learning in Dynamic Scenes',
      publisher: 'CoRL 2020',
      authors: 'Hanhan Li, Ariel Gordon, Hang Zhao, Vincent Casser, Anelia Angelova',
      paper_link: 'https://arxiv.org/abs/2010.16404',
    }, 
    {
      title: 'UnModNet: Learning to Unwrap a Modulo Image for High Dynamic Range Imaging',
      publisher: 'NeuRIPS 2020',
      authors: 'Chu Zhou, Hang Zhao, Jin Han, Chang Xu, Chao Xu, Tiejun Huang, Boxin Shi',
      paper_link: 'https://proceedings.neurips.cc/paper/2020/hash/1102a326d5f7c9e04fc3c89d0ede88c9-Abstract.html',
    },
    {
      title: 'VectorNet: Encoding HD Maps and Agent Dynamics from Vectorized Representation',
      publisher: 'CVPR 2020',
      authors: 'Jiyang Gao, Chen Sun, Hang Zhao, Yi Shen, Dragomir Anguelov, Congcong Li, Cordelia Schmid',
      paper_link: 'https://openaccess.thecvf.com/content_CVPR_2020/papers/Gao_VectorNet_Encoding_HD_Maps_and_Agent_Dynamics_From_Vectorized_Representation_CVPR_2020_paper.pdf',
    },
    {
      title: 'Scalability in Perception for Autonomous Driving: Waymo Open Dataset',
      publisher: 'CVPR 2020',
      authors: 'Pei Sun, Henrik Kretzschmar, Xerxes Dotiwalla, Aurelien Chouard, Vijaysai Patnaik, Paul Tsui, James Guo, Yin Zhou, Yuning Chai, Benjamin Caine, Vijay Vasudevan, Wei Han, Jiquan Ngiam, Hang Zhao, Aleksei Timofeev, Scott Ettinger, Maxim Krivokon, Amy Gao, Aditya Joshi, Sheng Zhao, Shuyang Cheng, Yu Zhang, Jonathon Shlens, Zhifeng Chen, Dragomir Anguelov',
      paper_link: 'https://arxiv.org/abs/1912.04838',
    },
    {
      title: 'The Sound of Motions',
      publisher: 'ICCV 2019',
      authors: 'Hang Zhao, Chuang Gan, Wei-Chiu Ma, Antonio Torralba',
      paper_link: 'https://arxiv.org/abs/1904.05979',
    },
    {
      title: 'Self-supervised Moving Vehicle Tracking with Stereo Sound',
      publisher: 'ICCV 2019',
      authors: 'Chuang Gan, Hang Zhao, Peihao Chen, David Cox, Antonio Torralba',
      paper_link: 'http://openaccess.thecvf.com/content_ICCV_2019/html/Gan_Self-Supervised_Moving_Vehicle_Tracking_With_Stereo_Sound_ICCV_2019_paper.html',
    }, 
    {
      title: 'Through-Wall Human Mesh Recovery Using Radio Signals',
      publisher: 'ICCV 2019',
      authors: 'Mingmin Zhao, Yingcheng Liu, Aniruddh Raghu, Hang Zhao, Tianhong Li, Antonio Torralba, Dina Katabi',
      paper_link: 'http://openaccess.thecvf.com/content_ICCV_2019/html/Zhao_Through-Wall_Human_Mesh_Recovery_Using_Radio_Signals_ICCV_2019_paper.html',
    }, 
    {
      title: 'HACS: Human Action Clips and Segments Dataset for Recognition and Temporal Localization',
      publisher: 'ICCV 2019',
      authors: 'Hang Zhao, Zhicheng Yan, Lorenzo Torresani, Antonio Torralba',
      paper_link: 'https://arxiv.org/abs/1712.09374',
    }, 
    {
      title: 'Self-Supervised Audio-visual Co-segmentation',
      publisher: 'ICASSP 2019',
      authors: 'Andrew Rouditchenko*, Hang Zhao*, Chuang Gan, Josh McDermott, Antonio Torralba',
      paper_link: 'https://arxiv.org/abs/1904.09013',
    }, 
    {
      title: 'The Sound of Pixels',
      publisher: 'ECCV 2018',
      authors: 'Hang Zhao, Chuang Gan, Andrew Rouditchenko, Carl Vondrick, Josh McDermott, Antonio Torralba',
      paper_link: 'https://arxiv.org/abs/1804.03160',
    }, 
    {
      title: 'RF-Based 3D Skeletons',
      publisher: 'SIGCOMM 2018',
      authors: 'Mingmin Zhao, Yonglong Tian, Hang Zhao, Mohammad Alsheikh, Tianhong Li, Rumen Hristov, Zachary Kabelac, Dina Katabi, Antonio Torralba',
      paper_link: 'https://dl.acm.org/citation.cfm?id=3230579',
    }, 
    {
      title: 'Through-Wall Human Pose Estimation Using Radio Signals',
      publisher: 'CVPR 2018',
      authors: 'Mingmin Zhao, Tianhong Li, Mohammad Alsheikh, Yonglong Tian, Hang Zhao, Antonio Torralba, Dina Katabi',
      paper_link: '',
    },
    {
      title: 'Semantic Understanding of Scenes through the ADE20K Dataset',
      publisher: 'IJCV 2018',
      authors: 'Bolei Zhou, Hang Zhao, Xavier Puig, Tete Xiao, Sanja Fidler, Adela Barriuso, Antonio Torralba',
      paper_link: 'https://link.springer.com/article/10.1007/s11263-018-1140-0',
    }, 
    {
      title: 'Open Vocabulary Scene Parsing',
      publisher: 'ICCV 2017',
      authors: 'Hang Zhao, Xavier Puig, Bolei Zhou, Sanja Fidler, Antonio Torralba',
      paper_link: 'http://openaccess.thecvf.com/content_ICCV_2017/papers/Zhao_Open_Vocabulary_Scene_ICCV_2017_paper.pdf',
    }, 
    {
      title: 'Scene Parsing through ADE20K Dataset',
      publisher: 'CVPR 2017',
      authors: 'Bolei Zhou, Hang Zhao, Xavier Puig, Sanja Fidler, Adela Barriuso, Antonio Torralba',
      paper_link: 'http://people.csail.mit.edu/bzhou/publication/scene-parse-camera-ready.pdf',
    }, 
    {
      title: 'Loss Functions for Neural Networks for Image Processing',
      publisher: 'IEEE TCI 2017',
      authors: 'Hang Zhao, Orazio Gallo, Iuri Frosio and Jan Kautz',
      paper_link: 'http://ieeexplore.ieee.org/iel7/6745852/6960042/07797130.pdf',
    }, 
    {
      title: 'Duckietown: an Open, Inexpensive and Flexible Platform for Autonomy Education and Research',
      publisher: 'ICRA 2017',
      authors: 'Liam Paul, et al.',
      paper_link: 'http://people.csail.mit.edu/hangzhao/papers/duckietown.pdf',
    }, 
    {
      title: 'Unbounded High Dynamic Range Photography using a Modulo Camera',
      publisher: 'ICCP 2015 Best Paper Runner-up',
      authors: 'Hang Zhao, Boxin Shi, Christy Fernandez-Cull, Sai-Kit Yeung and Ramesh Raskar',
      paper_link: 'http://people.csail.mit.edu/hangzhao/papers/moduloUHDR.pdf',
    }, 
    {
      title: 'Snapshot on-chip HDR ROIC architectures',
      publisher: 'COSI 2015',
      authors: 'Christy Fernandez-Cull, Hang Zhao, Boxin Shi, Brian M. Tyrrell, Joseph Lin and Ramesh Raskar',
      paper_link: '',
    }, 
    {	
      title: 'Occluded imaging with time of flight sensors',
      publisher: 'ACM Transactions on Graphics 2015',
      authors: 'Achuta Kadambi, Hang Zhao, Boxin Shi and Ramesh Raskar',
      paper_link: '',
    }, 
    {
      title: 'Sub-pixel layout for super-resolution with images in an octic group',
      publisher: 'ECCV 2014',
      authors: 'Boxin Shi, Hang Zhao, Moshe Ben-Ezra, Sai-Kit Yeung, Christy Fernandez-Cull, R. Hamilton Shepard, Christopher Barsi, Ramesh Raskar',
      paper_link: 'https://link.springer.com/chapter/10.1007/978-3-319-10590-1_17',
    }, 
    // {
    //   title: '',
    //   publisher: '',
    //   authors: '',
    //   paper_link: '',
    // }, 
  ],
  
  join_us: {
    title: 'We are globally hiring top talents to join us.',
    content: [
      {
        agent_type: 'PostDoc/PhD/BS Students',
        description: 'If you would like to join our lab as a student. Please directly send your resume and transcript to Prof. Hang Zhao.',
      },
      {
        agent_type: 'Research Assistants',
        description: 'If you want to spend your gap year as a full-time (paid) research assistant in our lab. Please directly send your resume and transcript to Prof. Hang Zhao.',
      },
      {
        agent_type: 'Engineers',
        description: 'We have full-time engineer positions in our lab, related to autonomous driving and robotics. Please directly send your resume to Prof. Hang Zhao.',
      },
    ],
  },
}

export default main
