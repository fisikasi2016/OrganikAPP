export const groupData = [
  {
    title: "Hidrokarburoak",
    items: ["Alkanoak", "Alkenoak", "Alkinoak", "Aromatikoak"]
  },
  {
    title: "Funtzio Oxigenatuak",
    items: [
      "Alkoholak",
      "Eterrak",
      "Aldehidoak",
      "Zetonak",
      "Azido Karboxilikoak",
      "Esterrak"
    ]
  },
  {
    title: "Funtzio Nitrogenatuak",
    items: ["Aminak", "Amidak", "Nitriloak"]
  }
];


export const compounds = [
    // ###ALKANOAK###
    //1
    {
    group: "Alkanoak",
    name: "Butanoa",
    structure: {
      chain: ["CH₃", "CH₂", "CH₂", "CH₃"],
      bonds: ["single", "single", "single"],
      branches: []
    },
    difficulty: 1
    },

    //2
    {
    group: "Alkanoak",
    name: "2-metilpropanoa",
    structure: {
        chain: ["CH₃", "CH", "CH₃"],
        bonds: ["single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 2
    },
    //3
    {
    group: "Alkanoak",
    name: "Ziklopropanoa",
    structure: {
        cyclic: true,
        ring: ["CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single"]
    },
    difficulty: 3
    },

    //4
    {
    group: "Alkanoak",
    name: "Ziklobutanoa",
    structure: {
        cyclic: true,
        ring: ["CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single"]
    },
    difficulty: 4
    },

    //5
    {
    group: "Alkanoak",
    name: "Ziklohexanoa",
    structure: {
        cyclic: true,
        ring: ["CH₂", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"]
    },
    difficulty: 5
    },

    //6
    {
    group: "Alkanoak",
    name: "Metilziklopropanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" }
        ]
    },
  difficulty: 5
    },

    //7
    {
    group: "Alkanoak",
    name: "Metilziklobutanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" }
        ]
    },
    difficulty: 5
    },

    //8
    {
    group: "Alkanoak",
    name: "1,2-dimetilziklopentanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 7
    },

    //9
    {
    group: "Alkanoak",
    name: "1,3-dimetilziklohexanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 8
    },

    // 10
    {
    group: "Alkanoak",
    name: "3,3-dietilpentanoa",
    structure: {
        chain: ["CH₃", "CH₂", "C", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 11
    },

    // 11
    {
    group: "Alkanoak",
    name: "Pentanoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: []
    },
    difficulty: 2
    },

    // 12
    {
    group: "Alkanoak",
    name: "Hexanoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 3
    },

    // 13
    {
    group: "Alkanoak",
    name: "Heptanoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 4
    },

    // 14
    {
    group: "Alkanoak",
    name: "2-metilbutanoa",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "CH₃"],
        bonds: ["single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 3
    },

    // 15
    {
    group: "Alkanoak",
    name: "2,2-dimetilpropanoa",
    structure: {
        chain: ["CH₃","C","CH₃"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 4
    },

    // 16
    {
    group: "Alkanoak",
    name: "3-metilpentanoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 4
    },

    // 17
    {
    group: "Alkanoak",
    name: "2-metilhexanoa",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 5
    },

    // 18
    {
    group: "Alkanoak",
    name: "3-etilhexanoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 6
    },

    // 19
    {
    group: "Alkanoak",
    name: "2,3-dimetilbutanoa",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH₃"],
        bonds: ["single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 5
    },

    // 20
    {
    group: "Alkanoak",
    name: "2,2-dimetilbutanoa",
    structure: {
        chain: ["CH₃", "C", "CH₂", "CH₃"],
        bonds: ["single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 6
    },

    // 21
    {
    group: "Alkanoak",
    name: "2,3-dimetilpentanoa",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 6
    },

    // 22
    {
    group: "Alkanoak",
    name: "3,3-dimetilpentanoa",
    structure: {
        chain: ["CH₃", "CH₂", "C", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 7
    },

    // 23
    {
    group: "Alkanoak",
    name: "2,2,3-trimetilbutanoa",
    structure: {
        chain: ["CH₃", "C", "CH", "CH₃"],
        bonds: ["single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "down"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 8
    },

    // 24
    {
    group: "Alkanoak",
    name: "Ziklopentanoa",
    structure: {
        cyclic: true,
        ring: ["CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single"]
    },
    difficulty: 4
    },

    // 25
    {
    group: "Alkanoak",
    name: "Zikloheptanoa",
    structure: {
        cyclic: true,
        ring: ["CH₂", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single", "single"]
    },
    difficulty: 5
    },

    // 26
    {
    group: "Alkanoak",
    name: "Etilziklopropanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 6
    },

    // 27
    {
    group: "Alkanoak",
    name: "Etilziklobutanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 6
    },

    // 28
    {
    group: "Alkanoak",
    name: "1,1-dimetilziklopropanoa",
    structure: {
        cyclic: true,
        ring: ["C", "CH₂", "CH₂"],
        bonds: ["single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₃"],
            direction: "right"
        },
        {
            at: 0,
            atoms: ["CH₃"],
            direction: "left"
        }
        ]
    },
    difficulty: 7
    },

    // 29
    {
    group: "Alkanoak",
    name: "1,2-dimetilziklobutanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "right"
        }
        ]
    },
    difficulty: 7
    },

    // 30
    {
    group: "Alkanoak",
    name: "1,3-dietilziklobutanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH", "CH₂"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "right"
        }
        ]
    },
    difficulty: 8
    },

    // 31
    {
    group: "Alkanoak",
    name: "1-etil-2-metilziklopentanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        },
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "right"
        }
        ]
    },
    difficulty: 8
    },

    // 32
    {
    group: "Alkanoak",
    name: "1,2,3-trimetilziklopentanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "right"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 9
    },

    // 33
    {
    group: "Alkanoak",
    name: "1,4-dimetilziklohexanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 8
    },

    // 34
    {
    group: "Alkanoak",
    name: "1-etil-3-metilziklohexanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "right"
        }
        ]
    },
    difficulty: 9
    },

    // 35
    {
    group: "Alkanoak",
    name: "1,2,4-trimetilziklohexanoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "right"
        },
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 10
    },

    // 36

    // 37
    {
    group: "Alkanoak",
    name: "2-metilheptanoa",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 6
    },

    // 38
    {
    group: "Alkanoak",
    name: "3-etil-2-metilhexanoa",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 9
    },

    // 39
    {
    group: "Alkanoak",
    name: "2,2,4-trimetilpentanoa",
    aliases: ["Isooctanoa"],
    structure: {
        chain: ["CH₃", "C", "CH₂", "CH", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "down"
        },
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 10
    },

    
    

// ###ALKENOAK###

    // 1
    {
    group: "Alkenoak",
    name: "Etenoa",
    aliases: ["Etileno"],
    structure: {
        chain: ["CH₂", "CH₂"],
        bonds: ["double"],
        branches: []
    },
    difficulty: 1
    },

    // 2
    {
    group: "Alkenoak",
    name: "Propenoa",
    aliases: ["Propileno"],
    structure: {
        chain: ["CH₂", "CH", "CH₃"],
        bonds: ["double", "single"],
        branches: []
    },
    difficulty: 1
    },

    // 3
    {
    group: "Alkenoak",
    name: "But-1-enoa",
    structure: {
        chain: ["CH₂", "CH", "CH₂", "CH₃"],
        bonds: ["double", "single", "single"],
        branches: []
    },
    difficulty: 2
    },

    // 4
    {
    group: "Alkenoak",
    name: "Pent-1-enoa",
    structure: {
        chain: ["CH₂", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["double", "single", "single", "single"],
        branches: []
    },
    difficulty: 2
    },

    // 5
    {
    group: "Alkenoak",
    name: "Pent-2-enoa",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH₂", "CH₃"],
        bonds: ["single", "double", "single", "single"],
        branches: []
    },
    difficulty: 3
    },

    // 6
    {
    group: "Alkenoak",
    name: "Hex-1-enoa",
    structure: {
        chain: ["CH₂", "CH", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["double", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 3
    },

    // 7
    {
    group: "Alkenoak",
    name: "Hex-2-enoa",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "double", "single", "single", "single"],
        branches: []
    },
    difficulty: 4
    },

    // 8
    {
    group: "Alkenoak",
    name: "2-metilpropenoa",
    structure: {
        chain: ["CH₂", "C", "CH₃"],
        bonds: ["double", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 4
    },

    // 9
    {
    group: "Alkenoak",
    name: "3-metilbut-1-enoa",
    structure: {
        chain: ["CH₂", "CH", "CH", "CH₃"],
        bonds: ["double", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 5
    },

    // 10
    {
    group: "Alkenoak",
    name: "2-metilpent-1-enoa",
    structure: {
        chain: ["CH₂", "C", "CH₂", "CH₂", "CH₃"],
        bonds: ["double", "single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 5
    },

    // 11
    {
    group: "Alkenoak",
    name: "3-metilpent-2-enoa",
    structure: {
        chain: ["CH₃", "CH", "C", "CH₂", "CH₃"],
        bonds: ["single", "double", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 6
    },

    // 12
    {
    group: "Alkenoak",
    name: "2,3-dimetilbut-2-enoa",
    structure: {
        chain: ["CH₃", "C", "C", "CH₃"],
        bonds: ["single", "double", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 7
    },

    // 13
    {
    group: "Alkenoak",
    name: "3-etilhex-2-enoa",
    structure: {
        chain: ["CH₃", "CH", "C", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "double", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 8
    },

    // 14
    {
    group: "Alkenoak",
    name: "Hept-2-enoa",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "double", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 5
    },

    // 15
    {
    group: "Alkenoak",
    name: "Oct-1-enoa",
    structure: {
        chain: ["CH₂", "CH", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["double", "single", "single", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 5
    },

    // 16
    {
    group: "Alkenoak",
    name: "Ziklobutenoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂"],
        bonds: ["double", "single", "single", "single"]
    },
    difficulty: 6
    },

    // 17
    {
    group: "Alkenoak",
    name: "Ziklohexenoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["double", "single", "single", "single", "single", "single"]
    },
    difficulty: 6
    },

    // 18
    {
    group: "Alkenoak",
    name: "1-metilziklohex-1-enoa",
    structure: {
        cyclic: true,
        ring: ["C", "CH", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["double", "single", "single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 8
    },

    // 19
    {
    group: "Alkenoak",
    name: "1,2-dimetilziklopent-1-enoa",
    structure: {
        cyclic: true,
        ring: ["C", "C", "CH₂", "CH₂", "CH₂"],
        bonds: ["double", "single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "right"
        }
        ]
    },
    difficulty: 9
    },

    // 20
    {
    group: "Alkenoak",
    name: "2,4-dimetilhex-2-enoa",
    structure: {
        chain: ["CH₃", "C", "CH", "CH", "CH₂", "CH₃"],
        bonds: ["single", "double", "single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 9
    },

    //21
    {
    group: "Alkenoak",
    name: "But-2-enoa",
    structure: {
      chain: ["CH₃", "CH", "CH", "CH₃"],
      bonds: ["single", "double", "single"],
      branches: []
    },
    difficulty: 2
    },

    //22
    {
    group: "Alkenoak",
    name: "2-metilbut-2-enoa",
    structure: {
        chain: ["CH₃", "C", "CH", "CH₃"],
        bonds: ["single", "double", "single"],
        branches: [
        {
            at: 1,
            text: "CH₃",
            direction: "up"
        }
        ]
    },
    difficulty: 4
    },

    //23

    {
    group: "Alkenoak",
    name: "Ziklopentenoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["double", "single", "single", "single", "single"]
    },
    difficulty: 6
    },

    //24
    {
    group: "Alkenoak",
    name: "1-metilziklopent-1-enoa",
    structure: {
        cyclic: true,
        ring: ["C", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["double", "single", "single", "single", "single"],
        branches: [
        { at: 0, text: "CH₃", direction: "up" }
        ]
    },
    difficulty: 8
    },

    // 25
    {
    group: "Alkenoak",
    name: "3,4-dimetilhept-2-enoa",
    structure: {
        chain: ["CH₃", "CH", "C", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "double", "single", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 10
    },

    // 26
    {
    group: "Alkenoak",
    name: "4-etil-3-metilhex-2-enoa",
    structure: {
        chain: ["CH₃", "CH", "C", "CH", "CH₂", "CH₃"],
        bonds: ["single", "double", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 3,
            atoms: ["CH₂", "CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 11
    },

    // 27
    {
    group: "Alkenoak",
    name: "2,3,4-trimetilpent-2-enoa",
    structure: {
        chain: ["CH₃", "C", "C", "CH", "CH₃"],
        bonds: ["single", "double", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "down"
        },
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 11
    },

    // 28
    {
    group: "Alkenoak",
    name: "3-etil-2,4-dimetilhex-2-enoa",
    structure: {
        chain: ["CH₃", "C", "C", "CH", "CH₂", "CH₃"],
        bonds: ["single", "double", "single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "down"
        },
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 12
    },

    // 29
    {
    group: "Alkenoak",
    name: "Nona-2,5-dienoa",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH₂", "CH", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "double", "single", "single", "double", "single", "single", "single"],
        branches: []
    },
    difficulty: 11
    },

    // 30
    {
    group: "Alkenoak",
    name: "2-metilhepta-1,3-dienoa",
    structure: {
        chain: ["CH₂", "C", "CH", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["double", "single", "double", "single", "single", "single"],
        branches: [
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 12
    },

    // 31
    {
    group: "Alkenoak",
    name: "1-etil-3-metilziklohex-1-enoa",
    structure: {
        cyclic: true,
        ring: ["C", "CH", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["double", "single", "single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "right"
        }
        ]
    },
    difficulty: 12
    },

    // 32
    {
    group: "Alkenoak",
    name: "1,3-dimetilziklohex-1-enoa",
    structure: {
        cyclic: true,
        ring: ["C", "CH", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["double", "single", "single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "right"
        }
        ]
    },
    difficulty: 11
    },

    // 33
    {
    group: "Alkenoak",
    name: "1,2,3-trimetilziklohex-1-enoa",
    structure: {
        cyclic: true,
        ring: ["C", "C", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["double", "single", "single", "single", "single", "single"],
        branches: [
        {
            at: 0,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 1,
            atoms: ["CH₃"],
            direction: "right"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 13
    },

    // 34
    {
    group: "Alkenoak",
    name: "3,3-dietilhex-1-enoa",
    structure: {
        chain: ["CH₂", "CH", "C", "CH₂", "CH₂", "CH₃"],
        bonds: ["double", "single", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 13
    },

// ###ALKINOAK###

    // 1
    {
    group: "Alkinoak",
    name: "Etinoa",
    aliases: ["Azetileno"],
    structure: {
        chain: ["CH", "CH"],
        bonds: ["triple"],
        branches: []
    },
    difficulty: 1
    },

    // 2
    {
    group: "Alkinoak",
    name: "Propinoa",
    aliases: ["Metilazetileno"],
    structure: {
        chain: ["CH", "C", "CH₃"],
        bonds: ["triple", "single"],
        branches: []
    },
    difficulty: 2
    },

    // 3
    {
    group: "Alkinoak",
    name: "But-1-inoa",
    structure: {
        chain: ["CH", "C", "CH₂", "CH₃"],
        bonds: ["triple", "single", "single"],
        branches: []
    },
    difficulty: 3
    },

    // 4
    {
    group: "Alkinoak",
    name: "But-2-inoa",
    structure: {
        chain: ["CH₃", "C", "C", "CH₃"],
        bonds: ["single", "triple", "single"],
        branches: []
    },
    difficulty: 3
    },

    // 5
    {
    group: "Alkinoak",
    name: "Pent-1-inoa",
    structure: {
        chain: ["CH", "C", "CH₂", "CH₂", "CH₃"],
        bonds: ["triple", "single", "single", "single"],
        branches: []
    },
    difficulty: 4
    },

    // 6
    {
    group: "Alkinoak",
    name: "Pent-2-inoa",
    structure: {
        chain: ["CH₃", "C", "C", "CH₂", "CH₃"],
        bonds: ["single", "triple", "single", "single"],
        branches: []
    },
    difficulty: 4
    },

    // 7
    {
    group: "Alkinoak",
    name: "Hex-1-inoa",
    structure: {
        chain: ["CH", "C", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["triple", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 5
    },

    // 8
    {
    group: "Alkinoak",
    name: "Hex-2-inoa",
    structure: {
        chain: ["CH₃", "C", "C", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "triple", "single", "single", "single"],
        branches: []
    },
    difficulty: 5
    },

    // 9
    {
    group: "Alkinoak",
    name: "Hex-3-inoa",
    structure: {
        chain: ["CH₃", "CH₂", "C", "C", "CH₂", "CH₃"],
        bonds: ["single", "single", "triple", "single", "single"],
        branches: []
    },
    difficulty: 5
    },

    // 10
    {
    group: "Alkinoak",
    name: "3-metilbut-1-inoa",
    structure: {
        chain: ["CH", "C", "CH", "CH₃"],
        bonds: ["triple", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 6
    },

    // 11
    {
    group: "Alkinoak",
    name: "3-metilpent-1-inoa",
    structure: {
        chain: ["CH", "C", "CH", "CH₂", "CH₃"],
        bonds: ["triple", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 6
    },

    // 12
    {
    group: "Alkinoak",
    name: "4-metilpent-2-inoa",
    structure: {
        chain: ["CH₃", "C", "C", "CH", "CH₃"],
        bonds: ["single", "triple", "single", "single"],
        branches: [
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 7
    },

    // 13
    {
    group: "Alkinoak",
    name: "3,3-dimetilbut-1-inoa",
    structure: {
        chain: ["CH", "C", "C", "CH₃"],
        bonds: ["triple", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 8
    },

    // 14
    {
    group: "Alkinoak",
    name: "4-metilhex-2-inoa",
    structure: {
        chain: ["CH₃", "C", "C", "CH", "CH₂", "CH₃"],
        bonds: ["single", "triple", "single", "single", "single"],
        branches: [
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 8
    },

    // 15
    {
    group: "Alkinoak",
    name: "5-metilhex-1-inoa",
    structure: {
        chain: ["CH", "C", "CH₂", "CH₂", "CH", "CH₃"],
        bonds: ["triple", "single", "single", "single", "single"],
        branches: [
        {
            at: 4,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 8
    },

    // 16
    {
    group: "Alkinoak",
    name: "3-etilpent-1-inoa",
    structure: {
        chain: ["CH", "C", "CH", "CH₂", "CH₃"],
        bonds: ["triple", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 9
    },

    // 17
    {
    group: "Alkinoak",
    name: "3-metilhept-1-inoa",
    structure: {
        chain: ["CH", "C", "CH", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["triple", "single", "single", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 9
    },

    // 18
    {
    group: "Alkinoak",
    name: "5-metilhept-2-inoa",
    structure: {
        chain: ["CH₃", "C", "C", "CH₂", "CH", "CH₂", "CH₃"],
        bonds: ["single", "triple", "single", "single", "single", "single"],
        branches: [
        {
            at: 4,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 9
    },

    // 19
    {
    group: "Alkinoak",
    name: "3,4-dimetilhex-1-inoa",
    structure: {
        chain: ["CH", "C", "CH", "CH", "CH₂", "CH₃"],
        bonds: ["triple", "single", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 10
    },

    // 20
    {
    group: "Alkinoak",
    name: "4-etilhex-2-inoa",
    structure: {
        chain: ["CH₃", "C", "C", "CH", "CH₂", "CH₃"],
        bonds: ["single", "triple", "single", "single", "single"],
        branches: [
        {
            at: 3,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        }
        ]
    },
    difficulty: 10
    },

    // 21
    {
    group: "Alkinoak",
    name: "3,3-dimetilpent-1-inoa",
    structure: {
        chain: ["CH", "C", "C", "CH₂", "CH₃"],
        bonds: ["triple", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 10
    },

    // 22
    {
    group: "Alkinoak",
    name: "4,4-dimetilhex-2-inoa",
    structure: {
        chain: ["CH₃", "C", "C", "C", "CH₂", "CH₃"],
        bonds: ["single", "triple", "single", "single", "single"],
        branches: [
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 11
    },

    // 23
    {
    group: "Alkinoak",
    name: "3-etil-4-metilhex-1-inoa",
    structure: {
        chain: ["CH", "C", "CH", "CH", "CH₂", "CH₃"],
        bonds: ["triple", "single", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        },
        {
            at: 3,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 11
    },

    // 24
    {
    group: "Alkinoak",
    name: "Oct-3-inoa",
    structure: {
        chain: ["CH₃", "CH₂", "C", "C", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "triple", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 8
    },

    // 25
    {
    group: "Alkinoak",
    name: "Non-4-inoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "C", "C", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "triple", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 9
    },

    // 26


    // 27
    {
    group: "Alkinoak",
    name: "3,5-dimetilhept-1-inoa",
    structure: {
        chain: ["CH", "C", "CH", "CH₂", "CH", "CH₂", "CH₃"],
        bonds: ["triple", "single", "single", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 4,
            atoms: ["CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 12
    },

    // 28
    {
    group: "Alkinoak",
    name: "4-etil-3-metilhept-1-inoa",
    structure: {
        chain: ["CH", "C", "CH", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["triple", "single", "single", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₃"],
            direction: "up"
        },
        {
            at: 3,
            atoms: ["CH₂", "CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 13
    },

    // 29
    {
    group: "Alkinoak",
    name: "3,3-dietilhex-1-inoa",
    structure: {
        chain: ["CH", "C", "C", "CH₂", "CH₂", "CH₃"],
        bonds: ["triple", "single", "single", "single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        },
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 13
    },

    // 30
    {
    group: "Alkinoak",
    name: "4,4-dietilokt-2-inoa",
    structure: {
        chain: ["CH₃", "C", "C", "C", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "triple", "single", "single", "single", "single", "single"],
        branches: [
        {
            at: 3,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        },
        {
            at: 3,
            atoms: ["CH₂", "CH₃"],
            direction: "down"
        }
        ]
    },
    difficulty: 14
    },


// ###AROMATIKOAK###

    // 1
    {
    group: "Aromatikoak",
    name: "Bentzenoa",
    structure: {
        aromatic: true,
        ring: ["CH", "CH", "CH", "CH", "CH", "CH"],
        branches: []
    },
    difficulty: 1
    },

    // 2
    {
    group: "Aromatikoak",
    name: "Metilbentzenoa",
    aliases: ["Tolueno"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" }
        ]
    },
    difficulty: 2
    },

    // 3
    {
    group: "Aromatikoak",
    name: "Etilbentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₂", "CH₃"], direction: "up" }
        ]
    },
    difficulty: 3
    },

    // 4
    {
    group: "Aromatikoak",
    name: "Propilbentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₂", "CH₂", "CH₃"], direction: "up" }
        ]
    },
    difficulty: 4
    },

    // 5 (Isopropil)
    {
    group: "Aromatikoak",
    name: "Isopropilbentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, type: "isopropyl", direction: "up" }
        ]
    },
    difficulty: 5
    },

    // 6
    {
    group: ["Aromatikoak", "Alkoholak"],
    name: "Fenola",
    aliases: ["Hidroxibentzenoa"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 5
    },

    // 7
    {
    group: ["Aromatikoak", "Aminak"],
    name: "Aminobentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["NH₂"], direction: "up" }
        ]
    },
    difficulty: 5
    },

    // 8
    {
    group: "Aromatikoak",
    name: "Nitrobentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["NO₂"], direction: "up" }
        ]
    },
    difficulty: 6
    },

    // 9
    {
    group: "Aromatikoak",
    name: "Klorobentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["Cl"], direction: "up" }
        ]
    },
    difficulty: 6
    },

    // 10
    {
    group: "Aromatikoak",
    name: "Bromobentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["Br"], direction: "up" }
        ]
    },
    difficulty: 6
    },

    // 11
    {
    group: "Aromatikoak",
    name: "1,2-dimetilbentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "C", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 7
    },

    // 12
    {
    group: "Aromatikoak",
    name: "1,3-dimetilbentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "C", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 7
    },

    // 13
    {
    group: "Aromatikoak",
    name: "1,4-dimetilbentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" },
        { at: 3, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 7
    },

    // 14
    {
    group: ["Aromatikoak", "Alkoholak"],
    name: "2-metilfenola",
    structure: {
        aromatic: true,
        ring: ["C", "C", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 8
    },

    // 15
    {
    group: ["Aromatikoak", "Alkoholak"],
    name: "3-metilfenola",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "C", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 8
    },

    // 16
    {
    group: ["Aromatikoak", "Alkoholak"],
    name: "4-metilfenola",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 3, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 8
    },

    // 17
    {
    group: "Aromatikoak",
    name: "1-etil-2-metilbentzenoa",
    aliases: ["o-etiltoluenoa"],
    structure: {
        aromatic: true,
        ring: ["C", "C", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₂", "CH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 9
    },

    // 18
    {
    group: "Aromatikoak",
    name: "1-etil-3-metilbentzenoa",
    aliases: ["m-etiltoluenoa"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "C", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₂", "CH₃"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 9
    },

    // 19
    {
    group: "Aromatikoak",
    name: "1-etil-4-metilbentzenoa",
    aliases: ["p-etiltoluenoa"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₂", "CH₃"], direction: "up" },
        { at: 3, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 9
    },

    // 20
    {
    group: "Aromatikoak",
    name: "1,2-diklorobentzenoa",
    aliases: ["o-diklorobentzenoa"],
    structure: {
        aromatic: true,
        ring: ["C", "C", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["Cl"], direction: "up" },
        { at: 1, atoms: ["Cl"], direction: "right" }
        ]
    },
    difficulty: 9
    },

    // 21
    {
    group: "Aromatikoak",
    name: "1,3-diklorobentzenoa",
    aliases: ["m-diklorobentzenoa"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "C", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["Cl"], direction: "up" },
        { at: 2, atoms: ["Cl"], direction: "right" }
        ]
    },
    difficulty: 9
    },

    // 22
    {
    group: "Aromatikoak",
    name: "1,4-diklorobentzenoa",
    aliases: ["p-diklorobentzenoa"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["Cl"], direction: "up" },
        { at: 3, atoms: ["Cl"], direction: "down" }
        ]
    },
    difficulty: 9
    },

    // 23
    {
    group: "Aromatikoak",
    name: "1-bromo-4-metilbentzenoa",
    aliases: ["p-bromotoluenoa"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" },
        { at: 3, atoms: ["Br"], direction: "down" }
        ]
    },
    difficulty: 10
    },

    // 24
    {
    group: "Aromatikoak",
    name: "1-kloro-2-metilbentzenoa",
    aliases: ["o-klorotoluenoa"],
    structure: {
        aromatic: true,
        ring: ["C", "C", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["Cl"], direction: "right" }
        ]
    },
    difficulty: 10
    },

    // 25
    {
    group: "Aromatikoak",
    name: "1-kloro-4-metilbentzenoa",
    aliases: ["p-klorotoluenoa"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" },
        { at: 3, atoms: ["Cl"], direction: "down" }
        ]
    },
    difficulty: 10
    },

    // 26
    {
    group: "Aromatikoak",
    name: "1,2,4-trimetilbentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "C", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" },
        { at: 3, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 11
    },

    // 27
    {
    group: "Aromatikoak",
    name: "1,3,5-trimetilbentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "C", "CH", "C", "CH"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "right" },
        { at: 4, atoms: ["CH₃"], direction: "left" }
        ]
    },
    difficulty: 11
    },

    // 28
    {
    group: "Aromatikoak",
    name: "1-etil-2,4-dimetilbentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "C", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₂", "CH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" },
        { at: 3, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 12
    },

    // 29
    {
    group: "Aromatikoak",
    name: "1-bromo-2-kloro-4-metilbentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "C", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["Cl"], direction: "right" },
        { at: 3, atoms: ["Br"], direction: "down" }
        ]
    },
    difficulty: 13
    },

    // 30 (isopropil)
    {
    group: "Aromatikoak",
    name: "1-etil-3-isopropil-5-metilbentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "C", "CH", "C", "CH"],
        branches: [
        { at: 0, atoms: ["CH₂", "CH₃"], direction: "up" },
        { at: 2, type: "isopropyl", direction: "right" },
        { at: 4, atoms: ["CH₃"], direction: "left" }
        ]
    },
    difficulty: 14
    },

// ###ALKOHOLAK###


    // 1
    {
    group: "Alkoholak",
    name: "Metanola",
    structure: {
        chain: ["CH₃", "OH"],
        bonds: ["single"],
        branches: []
    },
    difficulty: 1
    },

    // 2
    {
    group: "Alkoholak",
    name: "Etanola",
    aliases: ["Alkohol etilikoa"],
    structure: {
        chain: ["CH₃", "CH₂", "OH"],
        bonds: ["single", "single"],
        branches: []
    },
    difficulty: 1
    },

    // 3
    {
    group: "Alkoholak",
    name: "Propan-1-ola",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "OH"],
        bonds: ["single", "single", "single"],
        branches: []
    },
    difficulty: 2
    },

    // 4
    {
    group: "Alkoholak",
    name: "Propan-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH₃"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 3
    },

    // 5
    {
    group: "Alkoholak",
    name: "Butan-1-ola",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂", "OH"],
        bonds: ["single", "single", "single", "single"],
        branches: []
    },
    difficulty: 3
    },

    // 6
    {
    group: "Alkoholak",
    name: "Butan-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "CH₃"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 4
    },

    // 7
    {
    group: "Alkoholak",
    name: "2-metilpropan-1-ola",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "OH"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ]
    },
    difficulty: 5
    },

    // 8
    {
    group: "Alkoholak",
    name: "2-metilpropan-2-ola",
    structure: {
        chain: ["CH₃", "C", "CH₃"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["OH"], direction: "down" }
        ]
    },
    difficulty: 5
    },

    // 9
    {
    group: "Alkoholak",
    name: "Pentan-1-ola",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂", "CH₂", "OH"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 5
    },

    // 10
    {
    group: "Alkoholak",
    name: "Pentan-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 6
    },

    // 11
    {
    group: "Alkoholak",
    name: "Pentan-3-ola",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 2, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 6
    },

    // 12
    // 12
    {
    group: "Alkoholak",
    name: "2-metilbutan-1-ola",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH₂", "OH"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" }
        ]
    },
    difficulty: 7
    },

    // 13
    {
    group: "Alkoholak",
    name: "3-metilbutan-1-ola",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "CH₂", "OH"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 7
    },


    // 14
    {
    group: "Alkoholak",
    name: "3-metilbutan-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH₃"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 8
    },

    // 15
    {
    group: "Alkoholak",
    name: "2-metilbutan-2-ola",
    structure: {
        chain: ["CH₃", "C", "CH₂", "CH₃"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["OH"], direction: "down" }
        ]
    },
    difficulty: 8
    },

    // 16
    {
    group: "Alkoholak",
    name: "Hexan-1-ola",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂", "OH"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 6
    },

    // 17
    {
    group: "Alkoholak",
    name: "Hexan-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 7
    },

    // 18
    {
    group: "Alkoholak",
    name: "Hexan-3-ola",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        { at: 2, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 7
    },

    // 19
    {
    group: "Alkoholak",
    name: "3-metilpentan-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 9
    },

    // 20
    {
    group: "Alkoholak",
    name: "4-metilpentan-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "CH", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" },
        { at: 3, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 9
    },

    // 21
    {
    group: "Alkoholak",
    name: "2,3-dimetilbutan-2-ola",
    structure: {
        chain: ["CH₃", "C", "CH", "CH₃"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "down" },
        { at: 2, atoms: ["CH₃"], direction: "up" }
        ]
    },
    difficulty: 10
    },

    // 22
    {
    group: "Alkoholak",
    name: "3-etilpentan-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" },
        { at: 2, atoms: ["CH₂", "CH₃"], direction: "down" }
        ]
    },
    difficulty: 10
    },

    // 23
    {
    group: "Alkoholak",
    name: "But-2-en-1-ola",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH", "OH"],
        bonds: ["single", "single", "double", "single"],
        branches: []
    },
    difficulty: 10
    },

    // 24
    {
    group: "Alkoholak",
    name: "Hex-3-en-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH", "CH₂", "CH₃"],
        bonds: ["single", "single", "double", "single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 11
    },

    // 25
    {
    group: "Alkoholak",
    name: "Ziklopentanola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 8
    },

    // 26
    {
    group: "Alkoholak",
    name: "Ziklohexanola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 8
    },

    // 27
    {
    group: "Alkoholak",
    name: "2-metilziklohexanola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 11
    },

    // 28
    {
    group: "Alkoholak",
    name: "3-metilziklohexanola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 11
    },

    // 29
    {
    group: "Alkoholak",
    name: "4-metilziklohexanola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 3, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 11
    },

    // 30
    {
    group: "Alkoholak",
    name: "2-etil-3-metilhexan-2-ola",
    structure: {
        chain: ["CH₃", "C", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" },
        { at: 1, atoms: ["CH₂", "CH₃"], direction: "down" },
        { at: 2, atoms: ["CH₃"], direction: "up" }
        ]
    },
    difficulty: 13
    },
    // 31
    {
    group: "Alkoholak",
    name: "Pent-2-en-1-ola",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH", "CH₂", "OH"],
        bonds: ["single", "single", "double", "single", "single"],
        branches: []
    },
    difficulty: 11
    },

    // 32
    {
    group: "Alkoholak",
    name: "Pent-3-en-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH", "CH₃"],
        bonds: ["single", "single", "double", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 12
    },

    // 33
    {
    group: "Alkoholak",
    name: "Hex-4-en-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "CH", "CH", "CH₃"],
        bonds: ["single", "single", "single", "double", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 12
    },

    // 34
    {
    group: "Alkoholak",
    name: "3-metilhex-4-en-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH", "CH", "CH₃"],
        bonds: ["single", "single", "single", "double", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 13
    },

    // 35
    {
    group: "Alkoholak",
    name: "3-etil-4-metilhex-5-en-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH", "CH", "CH₂"],
        bonds: ["single", "single", "single", "single", "double"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" },
        { at: 2, atoms: ["CH₂", "CH₃"], direction: "down" },
        { at: 3, atoms: ["CH₃"], direction: "up" }
        ]
    },
    difficulty: 14
    },

    // 36
    {
    group: "Alkoholak",
    name: "But-3-in-1-ola",
    structure: {
        chain: ["CH₂", "CH₂", "C", "CH"],
        bonds: ["single", "single", "triple"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 12
    },

    // 37
    {
    group: "Alkoholak",
    name: "Pent-4-in-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "C", "CH"],
        bonds: ["single", "single", "single", "triple"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 13
    },

    // 38
    {
    group: "Alkoholak",
    name: "3-metilpent-4-in-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH", "C", "CH"],
        bonds: ["single", "single", "single", "triple"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 14
    },

    // 39
    {
    group: "Alkoholak",
    name: "4-etilhex-5-in-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "CH", "C", "CH"],
        bonds: ["single", "single", "single", "single", "triple"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" },
        { at: 3, atoms: ["CH₂", "CH₃"], direction: "down" }
        ]
    },
    difficulty: 15
    },

    // 40
    {
    group: "Alkoholak",
    name: "Hex-3-en-5-in-2-ola",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH", "C", "CH"],
        bonds: ["single", "single", "double", "single", "triple"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 15
    },

    // 41
    {
    group: "Alkoholak",
    name: "Ziklopropanola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 8
    },

    // 42
    {
    group: "Alkoholak",
    name: "Ziklobutanola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 9
    },

    // 43
    {
    group: "Alkoholak",
    name: "Zikloheptanola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 10
    },

    // 44
    {
    group: "Alkoholak",
    name: "Ziklohex-2-en-1-ola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "double", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" }
        ]
    },
    difficulty: 12
    },

    // 45
    {
    group: "Alkoholak",
    name: "3-metilziklohex-2-en-1-ola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "C", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "double", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 13
    },

    // 46
    {
    group: "Alkoholak",
    name: "4-etilziklohex-2-en-1-ola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH", "CH", "CH₂", "CH₂"],
        bonds: ["single", "double", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 3, atoms: ["CH₂", "CH₃"], direction: "down" }
        ]
    },
    difficulty: 14
    },

    // 47
    {
    group: "Alkoholak",
    name: "2,4-dimetilziklopentanola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH", "CH₂"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" },
        { at: 3, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 13
    },

    // 48
    {
    group: "Alkoholak",
    name: "2-etil-5-metilziklohexanola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂", "CH", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 1, atoms: ["CH₂", "CH₃"], direction: "right" },
        { at: 4, atoms: ["CH₃"], direction: "left" }
        ]
    },
    difficulty: 14
    },

    // 49 (isopropil)
    {
    group: "Alkoholak",
    name: "2-isopropilziklohexanola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 1, type: "isopropyl", direction: "right" }
        ]
    },
    difficulty: 15
    },

    // 50
    {
    group: "Alkoholak",
    name: "4-etil-3-metilzikloheptanola",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "right" },
        { at: 3, atoms: ["CH₂", "CH₃"], direction: "down" }
        ]
    },
    difficulty: 16
    },

// ###ETERRAK###

    // 1
    {
    group: "Eterrak",
    name: "Metoximetanoa",
    aliases: ["Dimetil eterra"],
    structure: {
        chain: ["CH₃", "O", "CH₃"],
        bonds: ["single", "single"],
        branches: []
    },
    difficulty: 1
    },

    // 2
    {
    group: "Eterrak",
    name: "Metoxietanoa",
    aliases: ["Etil metil eterra"],
    structure: {
        chain: ["CH₃", "O", "CH₂", "CH₃"],
        bonds: ["single", "single", "single"],
        branches: []
    },
    difficulty: 2
    },

    // 3
    {
    group: "Eterrak",
    name: "Etoxietanoa",
    aliases: ["Dietil eterra"],
    structure: {
        chain: ["CH₃", "CH₂", "O", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: []
    },
    difficulty: 3
    },

    // 4
    {
    group: "Eterrak",
    name: "Metoxipropanoa",
    aliases: ["Metil propil eterra"],
    structure: {
        chain: ["CH₃", "O", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: []
    },
    difficulty: 3
    },

    // 5
    {
    group: "Eterrak",
    name: "2-metoxipropanoa",
    aliases: ["Isopropil metil eterra"],
    structure: {
        chain: ["CH₃", "CH", "CH₃"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["O", "CH₃"], direction: "up" }
        ]
    },
    difficulty: 4
    },

    // 6
    {
    group: "Eterrak",
    name: "Etoxipropanoa",
    aliases: ["Etil propil eterra"],
    structure: {
        chain: ["CH₃", "CH₂", "O", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 4
    },

    // 7
    {
    group: "Eterrak",
    name: "Metoxibutanoa",
    aliases: ["Butil metil eterra"],
    structure: {
        chain: ["CH₃", "O", "CH₂", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 5
    },

    // 8
    {
    group: "Eterrak",
    name: "2-metoxibutanoa",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "CH₃"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 1, atoms: ["O", "CH₃"], direction: "up" }
        ]
    },
    difficulty: 5
    },

    // 9


    // 10
    {
    group: "Eterrak",
    name: "2-etoxipropanoa",
    aliases: ["Etil isopropil eterra"],
    structure: {
        chain: ["CH₃", "CH", "CH₃"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["O", "CH₂", "CH₃"], direction: "up" }
        ]
    },
    difficulty: 6
    },

    // 11
    {
    group: "Eterrak",
    name: "Propoxipropanoa",
    aliases: ["Dipropil eterra"],
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "O", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: []
    },
    difficulty: 6
    },

    // 12


    // 13
    {
        group: "Eterrak",
        name: "1-metoxi-2-metilpropanoa",
        aliases: ["Metil isobutil eterra"],
        structure: {
            chain: ["CH₃", "CH", "CH₂"],
            bonds: ["single", "single"],
            branches: [
            { at: 1, atoms: ["CH₃"], direction: "up" },
            { at: 2, atoms: ["O", "CH₃"], direction: "down" }
            ]
        },
        difficulty: 7
    },

    // 14
    {
        group: "Eterrak",
        name: "2-etoxibutanoa",
        structure: {
            chain: ["CH₃", "CH", "CH₂", "CH₃"],
            bonds: ["single", "single", "single"],
            branches: [
            { at: 1, atoms: ["O", "CH₂", "CH₃"], direction: "up" }
            ]
        },
        difficulty: 7
    },

    // 15
    {
        group: "Eterrak",
        name: "Metoxipentanoa",
        aliases: ["Metil pentil eterra"],
        structure: {
            chain: ["CH₃", "O", "CH₂", "CH₂", "CH₂", "CH₂", "CH₃"],
            bonds: ["single", "single", "single", "single", "single", "single"],
            branches: []
        },
        difficulty: 6
    },

    // 16
    {
        group: "Eterrak",
        name: "3-metoxipentanoa",
        aliases: ["Metil 3-pentil eterra"],
        structure: {
            chain: ["CH₃", "CH₂", "CH", "CH₂", "CH₃"],
            bonds: ["single", "single", "single", "single"],
            branches: [
            { at: 2, atoms: ["O", "CH₃"], direction: "up" }
            ]
        },
        difficulty: 8
    },

    // 17
    {
        group: "Eterrak",
        name: "3-etoxipentanoa",
        aliases: ["Etil 3-pentil eterra"],
        structure: {
            chain: ["CH₃", "CH₂", "CH", "CH₂", "CH₃"],
            bonds: ["single", "single", "single", "single"],
            branches: [
            { at: 2, atoms: ["O", "CH₂", "CH₃"], direction: "up" }
            ]
        },
        difficulty: 8
    },

    // 18
    {
        group: "Eterrak",
        name: "2-metoxi-3-metilbutanoa",
        aliases: ["Metil 3-metilbutan-2-il eterra"],
        structure: {
            chain: ["CH₃", "CH", "CH", "CH₃"],
            bonds: ["single", "single", "single"],
            branches: [
            { at: 1, atoms: ["O", "CH₃"], direction: "up" },
            { at: 2, atoms: ["CH₃"], direction: "down" }
            ]
        },
        difficulty: 9
    },

    // 19
    {
        group: "Eterrak",
        name: "2-etoxi-3-metilbutanoa",
        aliases: ["Etil 3-metilbutan-2-il eterra"],
        structure: {
            chain: ["CH₃", "CH", "CH", "CH₃"],
            bonds: ["single", "single", "single"],
            branches: [
            { at: 1, atoms: ["O", "CH₂", "CH₃"], direction: "up" },
            { at: 2, atoms: ["CH₃"], direction: "down" }
            ]
        },
        difficulty: 10
    },

    // 20
    {
        group: "Eterrak",
        name: "1-metoxihexanoa",
        aliases: ["Metil hexil eterra"],
        structure: {
            chain: ["CH₃", "O", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂", "CH₃"],
            bonds: ["single", "single", "single", "single", "single", "single", "single"],
            branches: []
        },
        difficulty: 7
    },

    // 21
    {
        group: "Eterrak",
        name: "3-metoxihexanoa",
        aliases: ["Metil hexan-3-il eterra"],
        structure: {
            chain: ["CH₃", "CH₂", "CH", "CH₂", "CH₂", "CH₃"],
            bonds: ["single", "single", "single", "single", "single"],
            branches: [
            { at: 2, atoms: ["O", "CH₃"], direction: "up" }
            ]
        },
        difficulty: 9
    },

    // 22
    {
        group: "Eterrak",
        name: "4-etoxi-2-metilhexanoa",
        aliases: ["Etil 2-metilhexan-4-il eterra"],
        structure: {
            chain: ["CH₃", "CH", "CH₂", "CH", "CH₂", "CH₃"],
            bonds: ["single", "single", "single", "single", "single"],
            branches: [
            { at: 1, atoms: ["CH₃"], direction: "up" },
            { at: 3, atoms: ["O", "CH₂", "CH₃"], direction: "down" }
            ]
        },
        difficulty: 11
    },

    // 23
    {
        group: "Eterrak",
        name: "1-metoxibut-2-enoa",
        aliases: ["Metil but-2-en-1-il eterra"],
        structure: {
            chain: ["CH₃", "CH", "CH", "CH₂"],
            bonds: ["single", "double", "single"],
            branches: [
                { at: 3, atoms: ["O", "CH₃"], direction: "up" }
            ]
        },
        difficulty: 11
    },

    // 24
    {
        group: "Eterrak",
        name: "3-metoxibut-1-enoa",
        aliases: ["Metil but-3-en-2-il eterra"],
        structure: {
            chain: ["CH₂", "CH", "CH", "CH₃"],
            bonds: ["double", "single", "single"],
            branches: [
            { at: 2, atoms: ["O", "CH₃"], direction: "up" }
            ]
        },
        difficulty: 11
    },

    // 25
    {
        group: "Eterrak",
        name: "1-etoxipent-2-enoa",
        aliases: ["Etil pent-2-en-1-il eterra"],
        structure: {
            chain: ["CH₃", "CH", "CH", "CH₂", "CH₂"],
            bonds: ["single", "double", "single", "single"],
            branches: [
                { at: 4, atoms: ["O", "CH₂", "CH₃"], direction: "up" }
            ]
        },
        difficulty: 12
    },

    // 26
    {
        group: "Eterrak",
        name: "1-metoxibut-3-inoa",
        aliases: ["Metil but-3-in-1-il eterra"],
        structure: {
            chain: ["CH", "C", "CH₂", "CH₂"],
            bonds: ["triple", "single", "single"],
            branches: [
            { at: 3, atoms: ["O", "CH₃"], direction: "up" }
            ]
        },
        difficulty: 12
    },

    // 27
    {
        group: "Eterrak",
        name: "3-etoxipent-1-inoa",
        aliases: ["Etil pent-1-in-3-il eterra"],
        structure: {
            chain: ["CH", "C", "CH", "CH₂", "CH₃"],
            bonds: ["triple", "single", "single", "single"],
            branches: [
            { at: 2, atoms: ["O", "CH₂", "CH₃"], direction: "up" }
            ]
        },
        difficulty: 13
    },

    // 28
    {
        group: "Eterrak",
        name: "Metoxiziklohexanoa",
        aliases: ["Metil ziklohexil eterra"],
        structure: {
            cyclic: true,
            ring: ["CH", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
            bonds: ["single", "single", "single", "single", "single", "single"],
            branches: [
            { at: 0, atoms: ["O", "CH₃"], direction: "up" }
            ]
        },
        difficulty: 10
    },

    // 29
    {
        group: "Eterrak",
        name: "Etoxiziklopentanoa",
        aliases: ["Etil ziklopentil eterra"],
        structure: {
            cyclic: true,
            ring: ["CH", "CH₂", "CH₂", "CH₂", "CH₂"],
            bonds: ["single", "single", "single", "single", "single"],
            branches: [
            { at: 0, atoms: ["O", "CH₂", "CH₃"], direction: "up" }
            ]
        },
        difficulty: 11
    },

    // 30
    {
        group: "Eterrak",
        name: "2-metoxi-4-etilhexanoa",
        aliases: ["Metil 4-etilhexan-2-il eterra"],
        structure: {
            chain: ["CH₃", "CH", "CH₂", "CH", "CH₂", "CH₃"],
            bonds: ["single", "single", "single", "single", "single"],
            branches: [
            { at: 1, atoms: ["O", "CH₃"], direction: "up" },
            { at: 3, atoms: ["CH₂", "CH₃"], direction: "down" }
            ]
        },
        difficulty: 13
    },


// ###ALDEHIDOAK###

    // 1
    {
    group: "Aldehidoak",
    name: "Metanala",
    aliases: ["Formaldehidoa"],
    structure: {
        chain: ["H"],
        bonds: [],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 1
    },

    // 2
    {
    group: "Aldehidoak",
    name: "Etanala",
    aliases: ["Azetaldehidoa"],
    structure: {
        chain: ["CH₃"],
        bonds: [],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 2
    },

    // 3
    {
    group: "Aldehidoak",
    name: "Propanala",
    structure: {
        chain: ["CH₃", "CH₂"],
        bonds: ["single"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 3
    },

    // 4
    {
    group: "Aldehidoak",
    name: "Butanala",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂"],
        bonds: ["single", "single"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 4
    },

    // 5
    {
    group: "Aldehidoak",
    name: "Pentanala",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 5
    },

    // 6
    {
    group: "Aldehidoak",
    name: "Hexanala",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 6
    },

    // 7
    {
    group: "Aldehidoak",
    name: "Heptanala",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 7
    },

    // 8
    {
    group: "Aldehidoak",
    name: "2-metilpropanala",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 7
    },

    // 9
    {
    group: "Aldehidoak",
    name: "2-metilbutanala",
    structure: {
        chain: ["CH₃", "CH₂", "CH"],
        bonds: ["single", "single"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 8
    },

    // 10
    {
    group: "Aldehidoak",
    name: "3-metilbutanala",
    structure: {
        chain: ["CH₃", "CH", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 8
    },

    // 11
    {
    group: "Aldehidoak",
    name: "2,2-dimetilpropanala",
    structure: {
        chain: ["CH₃", "C"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "down" }
        ],
        endGroup: "CHO"
    },
    difficulty: 9
    },

    // 12
    {
    group: "Aldehidoak",
    name: "2-etilbutanala",
    structure: {
        chain: ["CH₃", "CH₂", "CH"],
        bonds: ["single", "single"],
        branches: [
        { at: 2, atoms: ["CH₂", "CH₃"], direction: "up", grow: "left" }
        ],
        endGroup: "CHO"
    },
    difficulty: 9
    },

    // 13
    {
    group: "Aldehidoak",
    name: "2,3-dimetilbutanala",
    structure: {
        chain: ["CH₃", "CH", "CH"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "down" }
        ],
        endGroup: "CHO"
    },
    difficulty: 10
    },

    // 14
    {
    group: "Aldehidoak",
    name: "But-2-enala",
    structure: {
        chain: ["CH₃", "CH", "CH"],
        bonds: ["single", "double"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 8
    },

    // 15
    {
    group: "Aldehidoak",
    name: "Prop-2-enala",
    structure: {
        chain: ["CH₂", "CH"],
        bonds: ["double"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 8
    },

    // 16
    {
    group: "Aldehidoak",
    name: "Pent-2-enala",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH"],
        bonds: ["single", "single", "double"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 9
    },

    // 17
    {
    group: "Aldehidoak",
    name: "Hex-2-enala",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH", "CH"],
        bonds: ["single", "single", "single", "double"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 10
    },

    // 18
    {
    group: "Aldehidoak",
    name: "2-metilbut-2-enala",
    structure: {
        chain: ["CH₃", "CH", "C"],
        bonds: ["single", "double"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 10
    },

    // 19
    {
    group: "Aldehidoak",
    name: "3-metilpent-2-enala",
    structure: {
        chain: ["CH₃", "CH₂", "C", "CH"],
        bonds: ["single", "single", "double"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 11
    },

    // 20
    {
    group: "Aldehidoak",
    name: "2,4-dimetilhex-2-enala",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH", "C"],
        bonds: ["single", "single", "single", "double"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" },
        { at: 4, atoms: ["CH₃"], direction: "down" }
        ],
        endGroup: "CHO"
    },
    difficulty: 12
    },

    // 21
    {
    group: "Aldehidoak",
    name: "But-2-inala",
    structure: {
        chain: ["CH₃", "C", "C"],
        bonds: ["single", "triple"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 10
    },

    // 22
    {
    group: "Aldehidoak",
    name: "Pent-2-inala",
    structure: {
        chain: ["CH₃", "CH₂", "C", "C"],
        bonds: ["single", "single", "triple"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 11
    },

    // 23
    {
    group: "Aldehidoak",
    name: "Hex-3-inala",
    structure: {
        chain: ["CH₃", "CH₂", "C", "C", "CH₂"],
        bonds: ["single", "single", "triple", "single"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 12
    },

    // 24
    {
    group: "Aldehidoak",
    name: "4-metilpent-2-inala",
    structure: {
        chain: ["CH₃", "CH", "C", "C"],
        bonds: ["single", "single", "triple"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 13
    },

    // 25
    {
    group: "Aldehidoak",
    name: "4-etilhex-2-inala",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "C", "C"],
        bonds: ["single", "single", "single", "triple"],
        branches: [
        { at: 2, atoms: ["CH₂", "CH₃"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 14
    },

    // 26
    {
    group: "Aldehidoak",
    name: "Hex-2-en-4-inala",
    structure: {
        chain: ["CH₃", "C", "C", "CH", "CH"],
        bonds: ["single", "triple", "single", "double"],
        branches: [],
        endGroup: "CHO"
    },
    difficulty: 14
    },

    // 27
    {
    group: "Aldehidoak",
    name: "2-etil-3-metilpentanala",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "down" },
        { at: 3, atoms: ["CH₂", "CH₃"], direction: "up", grow: "left" }
        ],
        endGroup: "CHO"
    },
    difficulty: 13
    },

    // 28
    {
    group: "Aldehidoak",
    name: "2,2,3-trimetilbutanala",
    structure: {
        chain: ["CH₃", "CH", "C"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "down" }
        ],
        endGroup: "CHO"
    },
    difficulty: 14
    },

    // 29
    {
    group: "Aldehidoak",
    name: "3-etil-2,4-dimetilhexanala",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH", "CH"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" },
        { at: 3, atoms: ["CH₂", "CH₃"], direction: "down" },
        { at: 4, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 15
    },

    // 30
    {
    group: "Aldehidoak",
    name: "2,4-dimetilhept-2-en-5-inala",
    structure: {
        chain: ["CH₃", "C", "C", "CH", "CH", "C"],
        bonds: ["single", "triple", "single", "single", "double"],
        branches: [
        { at: 3, atoms: ["CH₃"], direction: "down" },
        { at: 5, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 16
    },


 // ###ZETONAK###

// 1
{
  group: "Zetonak",
  name: "Propanona",
  aliases: ["Azetona"],
  structure: {
    chain: ["CH₃", "C", "CH₃"],
    bonds: ["single", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 1
},

// 2
{
  group: "Zetonak",
  name: "Butan-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH₂", "CH₃"],
    bonds: ["single", "single", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 2
},

// 3
{
  group: "Zetonak",
  name: "Pentan-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH₂", "CH₂", "CH₃"],
    bonds: ["single", "single", "single", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 3
},

// 4
{
  group: "Zetonak",
  name: "Pentan-3-ona",
  structure: {
    chain: ["CH₃", "CH₂", "C", "CH₂", "CH₃"],
    bonds: ["single", "single", "single", "single"],
    branches: [
      { at: 2, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 3
},

// 5
{
  group: "Zetonak",
  name: "Hexan-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH₂", "CH₂", "CH₂", "CH₃"],
    bonds: ["single", "single", "single", "single", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 4
},

// 6
{
  group: "Zetonak",
  name: "Hexan-3-ona",
  structure: {
    chain: ["CH₃", "CH₂", "C", "CH₂", "CH₂", "CH₃"],
    bonds: ["single", "single", "single", "single", "single"],
    branches: [
      { at: 2, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 4
},

// 7
{
  group: "Zetonak",
  name: "3-metilbutan-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH", "CH₃"],
    bonds: ["single", "single", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" },
      { at: 2, atoms: ["CH₃"], direction: "down" }
    ]
  },
  difficulty: 5
},

// 8
{
  group: "Zetonak",
  name: "4-metilpentan-2-ona",
  aliases: ["MIBK"],
  structure: {
    chain: ["CH₃", "C", "CH₂", "CH", "CH₃"],
    bonds: ["single", "single", "single", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" },
      { at: 3, atoms: ["CH₃"], direction: "down" }
    ]
  },
  difficulty: 6
},

// 9
{
  group: "Zetonak",
  name: "3,3-dimetilbutan-2-ona",
  structure: {
    chain: ["CH₃", "C", "C", "CH₃"],
    bonds: ["single", "single", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" },
      { at: 2, atoms: ["CH₃"], direction: "up" },
      { at: 2, atoms: ["CH₃"], direction: "down" }
    ]
  },
  difficulty: 7
},

// 10
{
  group: "Zetonak",
  name: "3-etilpentan-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH", "CH₂", "CH₃"],
    bonds: ["single", "single", "single", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" },
      { at: 2, atoms: ["CH₂", "CH₃"], direction: "down" }
    ]
  },
  difficulty: 7
},

// 11
{
  group: "Zetonak",
  name: "Hex-3-en-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH", "CH", "CH₂", "CH₃"],
    bonds: ["single", "single", "double", "single", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 8
},

// 12
{
  group: "Zetonak",
  name: "Pent-3-en-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH", "CH", "CH₃"],
    bonds: ["single", "single", "double", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 8
},

// 13
{
  group: "Zetonak",
  name: "3-metilhex-4-en-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH", "CH", "CH", "CH₃"],
    bonds: ["single", "single", "single", "double", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" },
      { at: 2, atoms: ["CH₃"], direction: "down" }
    ]
  },
  difficulty: 9
},

// 14
{
  group: "Zetonak",
  name: "Hex-5-in-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH₂", "CH₂", "C", "CH"],
    bonds: ["single", "single", "single", "single", "triple"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 9
},

// 15
{
  group: "Zetonak",
  name: "Pent-4-in-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH₂", "C", "CH"],
    bonds: ["single", "single", "single", "triple"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 9
},

// 16
{
  group: "Zetonak",
  name: "3-metilpent-4-in-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH", "C", "CH"],
    bonds: ["single", "single", "single", "triple"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" },
      { at: 2, atoms: ["CH₃"], direction: "down" }
    ]
  },
  difficulty: 10
},

// 17
{
  group: "Zetonak",
  name: "Hept-3-en-5-in-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH", "CH", "C", "C", "CH₃"],
    bonds: ["single", "single", "double", "single", "triple", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 11
},

// 18
{
  group: "Zetonak",
  name: "2,4-dimetilhexan-3-ona",
  structure: {
    chain: ["CH₃", "CH", "C", "CH", "CH₂", "CH₃"],
    bonds: ["single", "single", "single", "single", "single"],
    branches: [
      { at: 2, atoms: ["O"], direction: "up", bond: "double" },
      { at: 1, atoms: ["CH₃"], direction: "up" },
      { at: 3, atoms: ["CH₃"], direction: "down" }
    ]
  },
  difficulty: 10
},

// 19
{
  group: "Zetonak",
  name: "3-etil-4-metilhexan-2-ona",
  structure: {
    chain: ["CH₃", "C", "CH", "CH", "CH₂", "CH₃"],
    bonds: ["single", "single", "single", "single", "single"],
    branches: [
      { at: 1, atoms: ["O"], direction: "up", bond: "double" },
      { at: 2, atoms: ["CH₂", "CH₃"], direction: "down" },
      { at: 3, atoms: ["CH₃"], direction: "up" }
    ]
  },
  difficulty: 11
},

// 20
{
  group: "Zetonak",
  name: "Ziklopropanona",
  structure: {
    cyclic: true,
    ring: ["C", "CH₂", "CH₂"],
    bonds: ["single", "single", "single"],
    branches: [
      { at: 0, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 8
},

// 21
{
  group: "Zetonak",
  name: "Ziklobutanona",
  structure: {
    cyclic: true,
    ring: ["C", "CH₂", "CH₂", "CH₂"],
    bonds: ["single", "single", "single", "single"],
    branches: [
      { at: 0, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 8
},

// 22
{
  group: "Zetonak",
  name: "Ziklopentanona",
  structure: {
    cyclic: true,
    ring: ["C", "CH₂", "CH₂", "CH₂", "CH₂"],
    bonds: ["single", "single", "single", "single", "single"],
    branches: [
      { at: 0, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 9
},

// 23
{
  group: "Zetonak",
  name: "Ziklohexanona",
  structure: {
    cyclic: true,
    ring: ["C", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
    bonds: ["single", "single", "single", "single", "single", "single"],
    branches: [
      { at: 0, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 9
},

// 24
{
  group: "Zetonak",
  name: "2-metilziklohexanona",
  structure: {
    cyclic: true,
    ring: ["C", "CH", "CH₂", "CH₂", "CH₂", "CH₂"],
    bonds: ["single", "single", "single", "single", "single", "single"],
    branches: [
      { at: 0, atoms: ["O"], direction: "up", bond: "double" },
      { at: 1, atoms: ["CH₃"], direction: "right" }
    ]
  },
  difficulty: 10
},

// 25
{
  group: "Zetonak",
  name: "3-metilziklohexanona",
  structure: {
    cyclic: true,
    ring: ["C", "CH₂", "CH", "CH₂", "CH₂", "CH₂"],
    bonds: ["single", "single", "single", "single", "single", "single"],
    branches: [
      { at: 0, atoms: ["O"], direction: "up", bond: "double" },
      { at: 2, atoms: ["CH₃"], direction: "right" }
    ]
  },
  difficulty: 10
},

// 26
{
  group: "Zetonak",
  name: "4-etilziklohexanona",
  structure: {
    cyclic: true,
    ring: ["C", "CH₂", "CH₂", "CH", "CH₂", "CH₂"],
    bonds: ["single", "single", "single", "single", "single", "single"],
    branches: [
      { at: 0, atoms: ["O"], direction: "up", bond: "double" },
      { at: 3, atoms: ["CH₂", "CH₃"], direction: "down" }
    ]
  },
  difficulty: 11
},

// 27
{
  group: "Zetonak",
  name: "Ziklohex-2-en-1-ona",
  structure: {
    cyclic: true,
    ring: ["C", "CH", "CH", "CH₂", "CH₂", "CH₂"],
    bonds: ["single", "double", "single", "single", "single", "single"],
    branches: [
      { at: 0, atoms: ["O"], direction: "up", bond: "double" }
    ]
  },
  difficulty: 11
},

// 28
{
  group: "Zetonak",
  name: "3-metilziklohex-2-en-1-ona",
  structure: {
    cyclic: true,
    ring: ["C", "CH", "C", "CH₂", "CH₂", "CH₂"],
    bonds: ["single", "double", "single", "single", "single", "single"],
    branches: [
      { at: 0, atoms: ["O"], direction: "up", bond: "double" },
      { at: 2, atoms: ["CH₃"], direction: "right" }
    ]
  },
  difficulty: 12
},

// 29
{
  group: "Zetonak",
  name: "2,4-dimetilziklopentanona",
  structure: {
    cyclic: true,
    ring: ["C", "CH", "CH₂", "CH", "CH₂"],
    bonds: ["single", "single", "single", "single", "single"],
    branches: [
      { at: 0, atoms: ["O"], direction: "up", bond: "double" },
      { at: 1, atoms: ["CH₃"], direction: "right" },
      { at: 3, atoms: ["CH₃"], direction: "down" }
    ]
  },
  difficulty: 12
},

// 30
{
  group: "Zetonak",
  name: "4-etil-3-metilziklohex-2-en-1-ona",
  structure: {
    cyclic: true,
    ring: ["C", "CH", "C", "CH", "CH₂", "CH₂"],
    bonds: ["single", "double", "single", "single", "single", "single"],
    branches: [
      { at: 0, atoms: ["O"], direction: "up", bond: "double" },
      { at: 2, atoms: ["CH₃"], direction: "right" },
      { at: 3, atoms: ["CH₂", "CH₃"], direction: "down" }
    ]
  },
  difficulty: 14
},

    // ### AZIDO KARBOXILIKOAK ###


    {
    group: "Azido Karboxilikoak",
    name: "Azido etanodioikoa",
    aliases: ["Azido oxalikoa"],
    structure: {
        dicarboxylic: true,
        chain: [],
        bonds: []
    },
    difficulty: 6
    },

    {
    group: "Azido Karboxilikoak",
    name: "Azido butanodioikoa",
    structure: {
        dicarboxylic: true,
        chain: ["CH₂", "CH₂"],
        bonds: ["single"]
    },
    difficulty: 8
    },

    // 1
    {
    group: "Azido Karboxilikoak",
    name: "Azido metanoikoa",
    aliases: ["Azido formikoa"],
    structure: {
        chain: ["H"],
        bonds: [],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 1
    },

    // 2
    {
    group: "Azido Karboxilikoak",
    name: "Azido etanoikoa",
    aliases: ["Azido azetikoa"],
    structure: {
        chain: ["CH₃"],
        bonds: [],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 2
    },

    // 3
    {
    group: "Azido Karboxilikoak",
    name: "Azido propanoikoa",
    structure: {
        chain: ["CH₃", "CH₂"],
        bonds: ["single"],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 3
    },

    // 4
    {
    group: "Azido Karboxilikoak",
    name: "Azido butanoikoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂"],
        bonds: ["single", "single"],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 4
    },

    // 5
    {
    group: "Azido Karboxilikoak",
    name: "Azido pentanoikoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single"],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 5
    },

    // 6
    {
    group: "Azido Karboxilikoak",
    name: "Azido hexanoikoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single"],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 6
    },

    // 7
    {
    group: "Azido Karboxilikoak",
    name: "Azido 2-metilpropanoikoa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "COOH"
    },
    difficulty: 6
    },

    // 8
    {
    group: "Azido Karboxilikoak",
    name: "Azido 3-metilbutanoikoa",
    structure: {
        chain: ["CH₃", "CH", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "COOH"
    },
    difficulty: 7
    },

    // 9
    {
    group: "Azido Karboxilikoak",
    name: "Azido 2,2-dimetilpropanoikoa",
    structure: {
        chain: ["CH₃", "C"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "down" }
        ],
        endGroup: "COOH"
    },
    difficulty: 8
    },

    // 10
    {
    group: "Azido Karboxilikoak",
    name: "Azido 2-etilbutanoikoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH"],
        bonds: ["single", "single"],
        branches: [
        {
            at: 2,
            direction: "up",
            grow: "left",
            atoms: ["CH₂", "CH₃"]
        }
        ],
        endGroup: "COOH"
    },
    difficulty: 8
    },

    // 11
    {
    group: "Azido Karboxilikoak",
    name: "Azido prop-2-enoikoa",
    structure: {
        chain: ["CH₂", "CH"],
        bonds: ["double"],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 8
    },

    // 12
    {
    group: "Azido Karboxilikoak",
    name: "Azido but-2-enoikoa",
    structure: {
        chain: ["CH₃", "CH", "CH"],
        bonds: ["single", "double"],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 9
    },

    // 13
    {
    group: "Azido Karboxilikoak",
    name: "Azido pent-2-enoikoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH"],
        bonds: ["single", "single", "double"],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 9
    },

    // 14
    {
    group: "Azido Karboxilikoak",
    name: "Azido hex-2-enoikoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH", "CH"],
        bonds: ["single", "single", "single", "double"],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 10
    },

    // 15
    {
    group: "Azido Karboxilikoak",
    name: "Azido 2-metilbut-2-enoikoa",
    structure: {
        chain: ["CH₃", "CH", "C"],
        bonds: ["single", "double"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "COOH"
    },
    difficulty: 10
    },

    // 16
    {
    group: "Azido Karboxilikoak",
    name: "Azido 3-metilpent-2-enoikoa",
    structure: {
        chain: ["CH₃", "CH₂", "C", "CH"],
        bonds: ["single", "single", "double"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "COOH"
    },
    difficulty: 11
    },

    // 17
    {
    group: "Azido Karboxilikoak",
    name: "Azido but-2-inoikoa",
    structure: {
        chain: ["CH₃", "C", "C"],
        bonds: ["single", "triple"],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 10
    },

    // 18
    {
    group: "Azido Karboxilikoak",
    name: "Azido pent-2-inoikoa",
    structure: {
        chain: ["CH₃", "CH₂", "C", "C"],
        bonds: ["single", "single", "triple"],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 11
    },

    // 19
    {
    group: "Azido Karboxilikoak",
    name: "Azido hex-3-inoikoa",
    structure: {
        chain: ["CH₃", "CH₂", "C", "C", "CH₂"],
        bonds: ["single", "single", "triple", "single"],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 12
    },

    // 20
    {
    group: "Azido Karboxilikoak",
    name: "Azido 4-metilpent-2-inoikoa",
    structure: {
        chain: ["CH₃", "CH", "C", "C"],
        bonds: ["single", "single", "triple"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "COOH"
    },
    difficulty: 12
    },

    // 21
    {
    group: "Azido Karboxilikoak",
    name: "Azido hex-2-en-4-inoikoa",
    structure: {
        chain: ["CH₃", "C", "C", "CH", "CH"],
        bonds: ["single", "triple", "single", "double"],
        branches: [],
        endGroup: "COOH"
    },
    difficulty: 13
    },

    // 22
    {
    group: "Azido Karboxilikoak",
    name: "Azido 2,4-dimetilhexanoikoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH₂", "CH"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" },
        { at: 4, atoms: ["CH₃"], direction: "down" }
        ],
        endGroup: "COOH"
    },
    difficulty: 12
    },

    // 23
    {
    group: "Azido Karboxilikoak",
    name: "Azido 3-etil-2-metilhexanoikoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH", "CH"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 3, atoms: ["CH₂", "CH₃"], direction: "down" },
        { at: 4, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "COOH"
    },
    difficulty: 13
    },

    // 24
    {
    group: "Azido Karboxilikoak",
    name: "Azido ziklopropanokarboxilikoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOH"], direction: "up" }
        ]
    },
    difficulty: 11
    },

    // 25
    {
    group: "Azido Karboxilikoak",
    name: "Azido ziklobutanokarboxilikoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOH"], direction: "up" }
        ]
    },
    difficulty: 11
    },

    // 26
    {
    group: "Azido Karboxilikoak",
    name: "Azido ziklopentanokarboxilikoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOH"], direction: "up" }
        ]
    },
    difficulty: 12
    },

    // 27
    {
    group: "Azido Karboxilikoak",
    name: "Azido ziklohexanokarboxilikoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOH"], direction: "up" }
        ]
    },
    difficulty: 12
    },

    // 28
    {
    group: "Azido Karboxilikoak",
    name: "Azido 2-metilziklohexanokarboxilikoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOH"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 13
    },

    // 29
    {
    group: "Azido Karboxilikoak",
    name: "Azido 3-etilziklopentanokarboxilikoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOH"], direction: "up" },
        { at: 2, atoms: ["CH₂", "CH₃"], direction: "right" }
        ]
    },
    difficulty: 14
    },

    // 30
    {
    group: "Azido Karboxilikoak",
    name: "Azido 2,4-dimetilziklohex-2-enkarboxilikoa",
    structure: {
        cyclic: true,
        ring: ["CH", "C", "CH", "CH", "CH₂", "CH₂"],
        bonds: ["single", "double", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOH"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" },
        { at: 3, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 16
    },

    // ###ESTERRAK###

    // 1
    {
    group: "Esterrak",
    name: "Metil metanoatoa",
    structure: {
        chain: ["H"],
        bonds: [],
        branches: [],
        endGroup: "COOCH3"
    },
    difficulty: 1
    },

    // 2
    {
    group: "Esterrak",
    name: "Metil etanoatoa",
    aliases: ["Metil azetatoa"],
    structure: {
        chain: ["CH₃"],
        bonds: [],
        branches: [],
        endGroup: "COOCH3"
    },
    difficulty: 2
    },

    // 3
    {
    group: "Esterrak",
    name: "Etil etanoatoa",
    aliases: ["Etil azetatoa"],
    structure: {
        chain: ["CH₃"],
        bonds: [],
        branches: [],
        endGroup: "COOCH2CH3"
    },
    difficulty: 3
    },

    // 4
    {
    group: "Esterrak",
    name: "Metil propanoatoa",
    structure: {
        chain: ["CH₃", "CH₂"],
        bonds: ["single"],
        branches: [],
        endGroup: "COOCH3"
    },
    difficulty: 3
    },

    // 5
    {
    group: "Esterrak",
    name: "Propil etanoatoa",
    aliases: ["Propil azetatoa"],
    structure: {
        chain: ["CH₃"],
        bonds: [],
        branches: [],
        endGroup: "COOCH2CH2CH3"
    },
    difficulty: 4
    },

    // 6
    {
    group: "Esterrak",
    name: "Etil propanoatoa",
    structure: {
        chain: ["CH₃", "CH₂"],
        bonds: ["single"],
        branches: [],
        endGroup: "COOCH2CH3"
    },
    difficulty: 4
    },

    // 7
    {
    group: "Esterrak",
    name: "Metil butanoatoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂"],
        bonds: ["single", "single"],
        branches: [],
        endGroup: "COOCH3"
    },
    difficulty: 5
    },

    // 8
    {
    group: "Esterrak",
    name: "Butil etanoatoa",
    aliases: ["Butil azetatoa"],
    structure: {
        chain: ["CH₃"],
        bonds: [],
        branches: [],
        endGroup: "COOCH2CH2CH2CH3"
    },
    difficulty: 5
    },

    // 9
    {
    group: "Esterrak",
    name: "Metil 2-metilpropanoatoa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "COOCH3"
    },
    difficulty: 6
    },

    // 10
    {
    group: "Esterrak",
    name: "Etil 2-metilpropanoatoa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "COOCH2CH3"
    },
    difficulty: 7
    },

    // 11
    {
    group: "Esterrak",
    name: "Metil 3-metilbutanoatoa",
    structure: {
        chain: ["CH₃", "CH", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "COOCH3"
    },
    difficulty: 7
    },

    // 12
    

    // 13
    {
    group: "Esterrak",
    name: "Etil 2,2-dimetilpropanoatoa",
    structure: {
        chain: ["CH₃","C"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "down" },
        ],
        endGroup: "COOCH2CH3"
    },
    difficulty: 9
    },

    // 14
    {
    group: "Esterrak",
    name: "Metil prop-2-enoatoa",
    structure: {
        chain: ["CH₂", "CH"],
        bonds: ["double"],
        branches: [],
        endGroup: "COOCH3"
    },
    difficulty: 8
    },

    // 15
    {
    group: "Esterrak",
    name: "Etil prop-2-enoatoa",
    structure: {
        chain: ["CH₂", "CH"],
        bonds: ["double"],
        branches: [],
        endGroup: "COOCH2CH3"
    },
    difficulty: 9
    },

   // ESTERRAK 16
    {
    group: "Esterrak",
    name: "Metil but-2-enoatoa",
    structure: {
        chain: ["CH₃", "CH", "CH"],
        bonds: ["single", "double"],
        branches: [],
        endGroup: "COOCH3"
    },
    difficulty: 9
    },

    // ESTERRAK 17
    {
    group: "Esterrak",
    name: "Etil pent-2-enoatoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH"],
        bonds: ["single", "single", "double"],
        branches: [],
        endGroup: "COOCH2CH3"
    },
    difficulty: 10
    },

    // ESTERRAK 18
    {
    group: "Esterrak",
    name: "Metil 2-metilbut-2-enoatoa",
    structure: {
        chain: ["CH₃", "CH", "C"],
        bonds: ["single", "double"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "COOCH3"
    },
    difficulty: 11
    },

    // ESTERRAK 19
    {
    group: "Esterrak",
    name: "Metil but-2-inoatoa",
    structure: {
        chain: ["CH₃", "C", "C"],
        bonds: ["single", "triple"],
        branches: [],
        endGroup: "COOCH3"
    },
    difficulty: 11
    },

    // ESTERRAK 20
    {
    group: "Esterrak",
    name: "Etil pent-2-inoatoa",
    structure: {
        chain: ["CH₃", "CH₂", "C", "C"],
        bonds: ["single", "single", "triple"],
        branches: [],
        endGroup: "COOCH2CH3"
    },
    difficulty: 12
    },

    // ESTERRAK 21
    {
    group: "Esterrak",
    name: "Metil hex-2-en-4-inoatoa",
    structure: {
        chain: ["CH₃", "C", "C", "CH", "CH"],
        bonds: ["single", "triple", "single", "double"],
        branches: [],
        endGroup: "COOCH3"
    },
    difficulty: 13
    },

    // ESTERRAK 22
    {
    group: "Esterrak",
    name: "Etil 2,4-dimetilhexanoatoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH₂", "CH"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" },
        { at: 4, atoms: ["CH₃"], direction: "down" }
        ],
        endGroup: "COOCH2CH3"
    },
    difficulty: 12
    },

    // ESTERRAK 23
    {
    group: "Esterrak",
    name: "Metil 3-etil-2-metilhexanoatoa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH", "CH"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 3, atoms: ["CH₂", "CH₃"], direction: "down" },
        { at: 4, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "COOCH3"
    },
    difficulty: 13
    },

    // ESTERRAK 24
    {
    group: "Esterrak",
    name: "Propil 3-metilpent-2-enoatoa",
    structure: {
        chain: ["CH₃", "CH₂", "C", "CH"],
        bonds: ["single", "single", "double"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "COOCH2CH2CH3"
    },
    difficulty: 13
    },
    // 25
    {
    group: "Esterrak",
    name: "Metil ziklopropanokarboxilatoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOCH₃"], direction: "up" }
        ]
    },
    difficulty: 11
    },

    // 26
    {
    group: "Esterrak",
    name: "Etil ziklobutanokarboxilatoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOCH₂CH₃"], direction: "up" }
        ]
    },
    difficulty: 12
    },

    // 27
    {
    group: "Esterrak",
    name: "Metil ziklopentanokarboxilatoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOCH₃"], direction: "up" }
        ]
    },
    difficulty: 12
    },

    // 28
    {
    group: "Esterrak",
    name: "Etil ziklohexanokarboxilatoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOCH₂CH₃"], direction: "up" }
        ]
    },
    difficulty: 13
    },

    // 29
    {
    group: "Esterrak",
    name: "Metil 2-metilziklohexanokarboxilatoa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOCH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 14
    },

    // 30
    {
    group: "Esterrak",
    name: "Etil 2,4-dimetilziklohex-2-enkarboxilatoa",
    structure: {
        cyclic: true,
        ring: ["CH", "C", "CH", "CH", "CH₂", "CH₂"],
        bonds: ["single", "double", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["COOCH₂CH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" },
        { at: 3, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 16
    },


    // ===============================
    // ###AMINAK###
    // ===============================

    // 1
    {
    group: "Aminak",
    name: "Metanamina",
    aliases: ["Metilamina"],
    structure: {
        chain: ["CH₃"],
        bonds: [],
        branches: [
        { at: 0, atoms: ["NH₂"], direction: "up" }
        ]
    },
    difficulty: 1
    },

    // 2
    {
    group: "Aminak",
    name: "Etanamina",
    aliases: ["Etilamina"],
    structure: {
        chain: ["CH₃", "CH₂"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["NH₂"], direction: "up" }
        ]
    },
    difficulty: 2
    },

    // 3
    {
    group: "Aminak",
    name: "Propan-1-amina",
    aliases: ["Propilamina"],
    structure: {
        chain: ["CH₃", "CH₂", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 2, atoms: ["NH₂"], direction: "up" }
        ]
    },
    difficulty: 3
    },

    // 4
    {
    group: "Aminak",
    name: "Propan-2-amina",
    aliases: ["Isopropilamina"],
    structure: {
        chain: ["CH₃", "CH", "CH₃"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["NH₂"], direction: "up" }
        ]
    },
    difficulty: 4
    },

    // 5
    {
    group: "Aminak",
    name: "Butan-1-amina",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 3, atoms: ["NH₂"], direction: "up" }
        ]
    },
    difficulty: 4
    },

    // 6
    {
    group: "Aminak",
    name: "2-metilpropan-1-amina",
    structure: {
        chain: ["CH₃", "CH", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "down" },
        { at: 2, atoms: ["NH₂"], direction: "up" }
        ]
    },
    difficulty: 5
    },

    // 7
    {
    group: "Aminak",
    name: "2-metilpropan-2-amina",
    structure: {
        chain: ["CH₃", "C", "CH₃"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["NH₂"], direction: "down" }
        ]
    },
    difficulty: 6
    },

    // 8
    {
    group: "Aminak",
    name: "Pentan-2-amina",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 1, atoms: ["NH₂"], direction: "up" }
        ]
    },
    difficulty: 6
    },

    // 9
    {
    group: "Aminak",
    name: "Hexan-3-amina",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH₂", "CH₂", "CH₃"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        { at: 2, atoms: ["NH₂"], direction: "up" }
        ]
    },
    difficulty: 7
    },

    // 10
    {
    group: "Aminak",
    name: "3-metilbutan-2-amina",
    structure: {
        chain: ["CH₃", "CH", "CH", "CH₃"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 1, atoms: ["NH₂"], direction: "up" },
        { at: 2, atoms: ["CH₃"], direction: "down" }
        ]
    },
    difficulty: 8
    },

    // 11
    {
    group: "Aminak",
    name: "Dimetilamina",
    structure: {
        chain: ["CH₃"],
        bonds: [],
        branches: [
        { at: 0, atoms: ["NH", "CH₃"], direction: "up" }
        ]
    },
    difficulty: 7
    },

    // 12
    {
    group: "Aminak",
    name: "Etilmetilamina",
    structure: {
        chain: ["CH₃", "CH₂"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["NH", "CH₃"], direction: "up" }
        ]
    },
    difficulty: 8
    },

    // 13
    {
    group: "Aminak",
    name: "Dietilamina",
    aliases: [""],
    structure: {
        chain: ["CH₃", "CH₂"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["NH", "CH₂", "CH₃"], direction: "up" }
        ]
    },
    difficulty: 9
    },

    // 14
    {
    group: "Aminak",
    name: "N-metilpropan-1-amina",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 2, atoms: ["NH", "CH₃"], direction: "up" }
        ]
    },
    difficulty: 9
    },

    // 15
    {
    group: "Aminak",
    name: "Trimetilamina",
    structure: {
        chain: ["CH₃"],
        bonds: [],
        branches: [
        { at: 0, atoms: ["NH", "CH₃", "CH₃"], direction: "up" }
        ]
    },
    difficulty: 10
    },

    // 16
    

    // 17

    // 18
    {
    group: "Aminak",
    name: "2-metilprop-2-en-1-amina",
    structure: {
        chain: ["CH₂", "C", "CH₂"],
        bonds: ["double", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" },
        { at: 2, atoms: ["NH₂"], direction: "down" }
        ]
    },
    difficulty: 11
    },

    // 19
    {
    group: "Aminak",
    name: "Pent-4-in-2-amina",
    structure: {
        chain: ["CH₃", "CH", "CH₂", "C", "CH"],
        bonds: ["single", "single", "single", "triple"],
        branches: [
        { at: 1, atoms: ["NH₂"], direction: "up" }
        ]
    },
    difficulty: 12
    },

    // 20
    {
    group: "Aminak",
    name: "Ziklohexanamina",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["NH₂"], direction: "up" }
        ]
    },
    difficulty: 12
    },

    // ===============================
    // ###AMIDAK###
    // ===============================

    // 1
    {
    group: "Amidak",
    name: "Metanamida",
    aliases: ["Formamida"],
    structure: {
        chain: ["H"],
        bonds: [],
        branches: [],
        endGroup: "CONH2"
    },
    difficulty: 1
    },

    // 2
    {
    group: "Amidak",
    name: "Etanamida",
    aliases: ["Azetamida"],
    structure: {
        chain: ["CH₃"],
        bonds: [],
        branches: [],
        endGroup: "CONH2"
    },
    difficulty: 2
    },

    // 3
    {
    group: "Amidak",
    name: "Propanamida",
    structure: {
        chain: ["CH₃", "CH₂"],
        bonds: ["single"],
        branches: [],
        endGroup: "CONH2"
    },
    difficulty: 3
    },

    // 4
    {
    group: "Amidak",
    name: "Butanamida",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂"],
        bonds: ["single", "single"],
        branches: [],
        endGroup: "CONH2"
    },
    difficulty: 4
    },

    // 5
    {
    group: "Amidak",
    name: "2-metilpropanamida",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CONH2"
    },
    difficulty: 5
    },

    // 6
    {
    group: "Amidak",
    name: "3-metilbutanamida",
    structure: {
        chain: ["CH₃", "CH", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CONH2"
    },
    difficulty: 6
    },

    // 7
    {
    group: "Amidak",
    name: "2,2-dimetilpropanamida",
    structure: {
        chain: ["CH₃", "C"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "down" }
        ],
        endGroup: "CONH2"
    },
    difficulty: 7
    },

    // 8
    {
    group: "Amidak",
    name: "Prop-2-enamida",
    structure: {
        chain: ["CH₂", "CH"],
        bonds: ["double"],
        branches: [],
        endGroup: "CONH2"
    },
    difficulty: 7
    },

    // 9
    {
    group: "Amidak",
    name: "But-2-enamida",
    structure: {
        chain: ["CH₃", "CH", "CH"],
        bonds: ["single", "double"],
        branches: [],
        endGroup: "CONH2"
    },
    difficulty: 8
    },

    // AMIDAK 10
    {
    group: "Amidak",
    name: "Pent-2-inamida",
    structure: {
        chain: ["CH₃", "CH₂", "C", "C"],
        bonds: ["single", "single", "triple"],
        branches: [],
        endGroup: "CONH2"
    },
    difficulty: 9
    },

    // 11


    // 12
    

    // 13


    // 14


    // 15


    // 16
    {
    group: "Amidak",
    name: "Hexanamida",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single"],
        branches: [],
        endGroup: "CONH2"
    },
    difficulty: 9
    },

    // AMIDAK 17
    {
    group: "Amidak",
    name: "3-etil-2-metilpentanamida",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 2, atoms: ["CH₂", "CH₃"], direction: "down" },
        { at: 3, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CONH2"
    },
    difficulty: 11
    },

    // 18
    {
    group: "Amidak",
    name: "Ziklohexanokarboxamida",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["CONH₂"], direction: "up" }
        ]
    },
    difficulty: 11
    },

    // 19
    {
    group: "Amidak",
    name: "2-metilziklopentanokarboxamida",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["CONH₂"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 12
    },

    // 20


    // ===============================
    // ###NITRILOAK###
    // ===============================

    // 1
    {
    group: "Nitriloak",
    name: "Metanonitriloa",
    structure: {
        chain: ["H"],
        bonds: [],
        branches: [],
        endGroup: "CN"
    },
    difficulty: 1
    },

    // 2
    {
    group: "Nitriloak",
    name: "Etanonitriloa",
    structure: {
        chain: ["CH₃"],
        bonds: [],
        branches: [],
        endGroup: "CN"
    },
    difficulty: 2
    },

    // 3
    {
    group: "Nitriloak",
    name: "Propanonitriloa",
    structure: {
        chain: ["CH₃", "CH₂"],
        bonds: ["single"],
        branches: [],
        endGroup: "CN"
    },
    difficulty: 3
    },

    // 4
    {
    group: "Nitriloak",
    name: "Butanonitriloa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂"],
        bonds: ["single", "single"],
        branches: [],
        endGroup: "CN"
    },
    difficulty: 4
    },

    // 5
    {
    group: "Nitriloak",
    name: "Pentanonitriloa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single"],
        branches: [],
        endGroup: "CN"
    },
    difficulty: 5
    },

    // 6
    {
    group: "Nitriloak",
    name: "2-metilpropanonitriloa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CN"
    },
    difficulty: 6
    },

    // 7
    {
    group: "Nitriloak",
    name: "3-metilbutanonitriloa",
    structure: {
        chain: ["CH₃", "CH", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CN"
    },
    difficulty: 7
    },

    // 8
    {
    group: "Nitriloak",
    name: "2,2-dimetilpropanonitriloa",
    structure: {
        chain: ["CH₃", "C"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "down" }
        ],
        endGroup: "CN"
    },
    difficulty: 8
    },

    // 9
    {
    group: "Nitriloak",
    name: "Prop-2-enenitriloa",
    structure: {
        chain: ["CH₂", "CH"],
        bonds: ["double"],
        branches: [],
        endGroup: "CN"
    },
    difficulty: 8
    },

    // 10
    {
    group: "Nitriloak",
    name: "But-2-enenitriloa",
    structure: {
        chain: ["CH₃", "CH", "CH"],
        bonds: ["single", "double"],
        branches: [],
        endGroup: "CN"
    },
    difficulty: 9
    },

    // NITRILOAK 11
    {
    group: "Nitriloak",
    name: "Pent-2-inenitriloa",
    structure: {
        chain: ["CH₃", "CH₂", "C", "C"],
        bonds: ["single", "single", "triple"],
        branches: [],
        endGroup: "CN"
    },
    difficulty: 10
    },

    // NITRILOAK 12
    {
    group: "Nitriloak",
    name: "Hex-3-inenitriloa",
    structure: {
        chain: ["CH₃", "CH₂", "C", "C", "CH₂"],
        bonds: ["single", "single", "triple", "single"],
        branches: [],
        endGroup: "CN"
    },
    difficulty: 10
    },

    // NITRILOAK 13
    {
    group: "Nitriloak",
    name: "3-metilpent-2-enenitriloa",
    structure: {
        chain: ["CH₃", "CH₂", "C", "CH"],
        bonds: ["single", "single", "double"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CN"
    },
    difficulty: 11
    },

    // 14
    {
    group: "Nitriloak",
    name: "2-etilbutanonitriloa",
    structure: {
        chain: ["CH₃", "CH₂", "CH"],
        bonds: ["single", "single"],
        branches: [
        {
            at: 2,
            atoms: ["CH₂", "CH₃"],
            direction: "up"
        }
        ],
        endGroup: "CN"
    },
    difficulty: 11
    },

    // NITRILOAK 15
    {
    group: "Nitriloak",
    name: "2,4-dimetilhexanonitriloa",
    structure: {
        chain: ["CH₃", "CH₂", "CH", "CH₂", "CH"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 2, atoms: ["CH₃"], direction: "up" },
        { at: 4, atoms: ["CH₃"], direction: "down" }
        ],
        endGroup: "CN"
    },
    difficulty: 12
    },

    // NITRILOAK 16
    {
    group: "Nitriloak",
    name: "3-etil-2-metilhexanonitriloa",
    structure: {
        chain: ["CH₃", "CH₂", "CH₂", "CH", "CH"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 3, atoms: ["CH₂", "CH₃"], direction: "down" },
        { at: 4, atoms: ["CH₃"], direction: "up" }
        ],
        endGroup: "CN"
    },
    difficulty: 13
    },
    

    // 17
    {
    group: "Nitriloak",
    name: "Ziklopropanokarbonitriloa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 0, atoms: ["CN"], direction: "up" }
        ]
    },
    difficulty: 11
    },

    // 18
    {
    group: "Nitriloak",
    name: "Ziklohexanokarbonitriloa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH₂", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["CN"], direction: "up" }
        ]
    },
    difficulty: 12
    },

    // 19
    {
    group: "Nitriloak",
    name: "2-metilziklohexanokarbonitriloa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH₂", "CH₂", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["CN"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" }
        ]
    },
    difficulty: 13
    },

    // 20
    {
    group: "Nitriloak",
    name: "3-etil-2-metilziklopentanokarbonitriloa",
    structure: {
        cyclic: true,
        ring: ["CH", "CH", "CH", "CH₂", "CH₂"],
        bonds: ["single", "single", "single", "single", "single"],
        branches: [
        { at: 0, atoms: ["CN"], direction: "up" },
        { at: 1, atoms: ["CH₃"], direction: "right" },
        { at: 2, atoms: ["CH₂", "CH₃"], direction: "down" }
        ]
    },
    difficulty: 14
    },

    // ###KONPOSATU MISTOAK###

    // 1
    {
    group: ["Aldehidoak", "Alkoholak"],
    name: "2-hidroxipropanala",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 12
    },

    // 2
    {
    group: ["Aldehidoak", "Alkoholak"],
    name: "3-hidroxibutanala",
    structure: {
        chain: ["CH₃", "CH", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 12
    },

    // 3
    {
    group: ["Aldehidoak", "Aminak"],
    name: "2-aminopropanala",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["NH₂"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 13
    },

    // 4
    {
    group: ["Aldehidoak", "Aminak"],
    name: "3-aminobutanala",
    structure: {
        chain: ["CH₃", "CH", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["NH₂"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 13
    },

    // 5
    {
    group: ["Aldehidoak", "Eterrak"],
    name: "2-metoxipropanala",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["O", "CH₃"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 13
    },

    // 6
    {
    group: ["Aldehidoak", "Eterrak"],
    name: "3-metoxibutanala",
    structure: {
        chain: ["CH₃", "CH", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["O", "CH₃"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 14
    },

    // 7
    {
    group: ["Aldehidoak", "Nitriloak"],
    name: "2-zianopropanala",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CN"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 14
    },

    // 8
    {
    group: ["Aldehidoak", "Nitriloak"],
    name: "3-zianobutanala",
    structure: {
        chain: ["CH₃", "CH", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["CN"], direction: "up" }
        ],
        endGroup: "CHO"
    },
    difficulty: 14
    },

    // 9
    {
    group: ["Zetonak", "Alkoholak"],
    name: "4-hidroxipentan-2-ona",
    structure: {
        chain: ["CH₃", "C", "CH₂", "CH", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 1, atoms: ["O"], direction: "up", bond: "double" },
        { at: 3, atoms: ["OH"], direction: "down" }
        ]
    },
    difficulty: 13
    },

    // 10
    {
    group: ["Zetonak", "Alkoholak"],
    name: "3-hidroxibutan-2-ona",
    structure: {
        chain: ["CH₃", "C", "CH", "CH₃"],
        bonds: ["single", "single", "single"],
        branches: [
        { at: 1, atoms: ["O"], direction: "up", bond: "double" },
        { at: 2, atoms: ["OH"], direction: "down" }
        ]
    },
    difficulty: 13
    },

    // 11
    {
    group: ["Zetonak", "Aminak"],
    name: "4-aminopentan-2-ona",
    structure: {
        chain: ["CH₃", "C", "CH₂", "CH", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 1, atoms: ["O"], direction: "up", bond: "double" },
        { at: 3, atoms: ["NH₂"], direction: "down" }
        ]
    },
    difficulty: 14
    },

    // 12
    {
    group: ["Zetonak", "Eterrak"],
    name: "4-metoxipentan-2-ona",
    structure: {
        chain: ["CH₃", "C", "CH₂", "CH", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 1, atoms: ["O"], direction: "up", bond: "double" },
        { at: 3, atoms: ["O", "CH₃"], direction: "down" }
        ]
    },
    difficulty: 14
    },

    // 13
    {
    group: ["Zetonak", "Nitriloak"],
    name: "4-zianopentan-2-ona",
    structure: {
        chain: ["CH₃", "C", "CH₂", "CH", "CH₃"],
        bonds: ["single", "single", "single", "single"],
        branches: [
        { at: 1, atoms: ["O"], direction: "up", bond: "double" },
        { at: 3, atoms: ["CN"], direction: "down" }
        ]
    },
    difficulty: 15
    },

    // 14
    {
    group: ["Azido Karboxilikoak", "Alkoholak"],
    name: "Azido 2-hidroxipropanoikoa",
    aliases: ["Azido laktikoa"],
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ],
        endGroup: "COOH"
    },
    difficulty: 12
    },

    // 15
    {
    group: ["Azido Karboxilikoak", "Alkoholak"],
    name: "Azido 3-hidroxibutanoikoa",
    structure: {
        chain: ["CH₃", "CH", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ],
        endGroup: "COOH"
    },
    difficulty: 13
    },

    // 16
    {
    group: ["Azido Karboxilikoak", "Aminak"],
    name: "Azido 2-aminopropanoikoa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["NH₂"], direction: "up" }
        ],
        endGroup: "COOH"
    },
    difficulty: 13
    },

    // 17
    {
    group: ["Azido Karboxilikoak", "Aminak"],
    name: "Azido 2-aminoetanoikoa",
    structure: {
        chain: ["CH₂"],
        bonds: [],
        branches: [
        { at: 0, atoms: ["NH₂"], direction: "up" }
        ],
        endGroup: "COOH"
    },
    difficulty: 12
    },

    // 18
    {
    group: ["Azido Karboxilikoak", "Zetonak"],
    name: "Azido 3-oxobutanoikoa",
    structure: {
        chain: ["CH₃", "C", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["O"], direction: "up", bond: "double" }
        ],
        endGroup: "COOH"
    },
    difficulty: 14
    },

    // 19
    {
    group: ["Azido Karboxilikoak", "Eterrak"],
    name: "Azido 2-metoxipropanoikoa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["O", "CH₃"], direction: "up" }
        ],
        endGroup: "COOH"
    },
    difficulty: 14
    },

    // 20
    {
    group: ["Azido Karboxilikoak", "Nitriloak"],
    name: "Azido 2-zianopropanoikoa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CN"], direction: "up" }
        ],
        endGroup: "COOH"
    },
    difficulty: 15
    },

    // 21
    {
    group: ["Esterrak", "Alkoholak"],
    name: "Metil 2-hidroxipropanoatoa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ],
        endGroup: "COOCH3"
    },
    difficulty: 13
    },

    // 22
    {
    group: ["Esterrak", "Alkoholak"],
    name: "Etil 3-hidroxibutanoatoa",
    structure: {
        chain: ["CH₃", "CH", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ],
        endGroup: "COOCH2CH3"
    },
    difficulty: 14
    },

    // 23
    {
    group: ["Esterrak", "Aminak"],
    name: "Metil 2-aminopropanoatoa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["NH₂"], direction: "up" }
        ],
        endGroup: "COOCH3"
    },
    difficulty: 14
    },

    // 24
    {
    group: ["Esterrak", "Zetonak"],
    name: "Metil 3-oxobutanoatoa",
    structure: {
        chain: ["CH₃", "C", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["O"], direction: "up", bond: "double" }
        ],
        endGroup: "COOCH3"
    },
    difficulty: 15
    },

    // 25
    {
    group: ["Esterrak", "Eterrak"],
    name: "Metil 2-metoxipropanoatoa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["O", "CH₃"], direction: "up" }
        ],
        endGroup: "COOCH3"
    },
    difficulty: 15
    },

    // 26
    {
    group: ["Esterrak", "Nitriloak"],
    name: "Metil 2-zianopropanoatoa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CN"], direction: "up" }
        ],
        endGroup: "COOCH3"
    },
    difficulty: 15
    },

    // 27
    {
    group: ["Amidak", "Alkoholak"],
    name: "2-hidroxipropanamida",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ],
        endGroup: "CONH2"
    },
    difficulty: 13
    },

    // 28
    {
    group: ["Amidak", "Aminak"],
    name: "2-aminopropanamida",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["NH₂"], direction: "up" }
        ],
        endGroup: "CONH2"
    },
    difficulty: 14
    },

    // 29
    {
    group: ["Amidak", "Zetonak"],
    name: "3-oxobutanamida",
    structure: {
        chain: ["CH₃", "C", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["O"], direction: "up", bond: "double" }
        ],
        endGroup: "CONH2"
    },
    difficulty: 15
    },

    // 30
    {
    group: ["Amidak", "Eterrak"],
    name: "2-metoxipropanamida",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["O", "CH₃"], direction: "up" }
        ],
        endGroup: "CONH2"
    },
    difficulty: 15
    },

    // 31
    {
    group: ["Amidak", "Nitriloak"],
    name: "2-zianopropanamida",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["CN"], direction: "up" }
        ],
        endGroup: "CONH2"
    },
    difficulty: 15
    },

    // 32
    {
    group: ["Nitriloak", "Alkoholak"],
    name: "2-hidroxipropanonitriloa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["OH"], direction: "up" }
        ],
        endGroup: "CN"
    },
    difficulty: 13
    },

    // 33
    {
    group: ["Nitriloak", "Aminak"],
    name: "2-aminopropanonitriloa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["NH₂"], direction: "up" }
        ],
        endGroup: "CN"
    },
    difficulty: 14
    },

    // 34
    {
    group: ["Nitriloak", "Zetonak"],
    name: "3-oxobutanonitriloa",
    structure: {
        chain: ["CH₃", "C", "CH₂"],
        bonds: ["single", "single"],
        branches: [
        { at: 1, atoms: ["O"], direction: "up", bond: "double" }
        ],
        endGroup: "CN"
    },
    difficulty: 15
    },

    // 35
    {
    group: ["Nitriloak", "Eterrak"],
    name: "2-metoxipropanonitriloa",
    structure: {
        chain: ["CH₃", "CH"],
        bonds: ["single"],
        branches: [
        { at: 1, atoms: ["O", "CH₃"], direction: "up" }
        ],
        endGroup: "CN"
    },
    difficulty: 15
    },

    // 36
    {
    group: ["Aromatikoak", "Alkoholak"],
    name: "2-hidroxibentzenola",
    structure: {
        aromatic: true,
        ring: ["C", "C", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 1, atoms: ["OH"], direction: "right" }
        ]
    },
    difficulty: 13
    },

    // 37
    {
    group: ["Aromatikoak", "Aminak"],
    name: "2-aminometilbentzenoa",
    structure: {
        aromatic: true,
        ring: ["C", "C", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CH₃"], direction: "up" },
        { at: 1, atoms: ["NH₂"], direction: "right" }
        ]
    },
    difficulty: 13
    },

    // 38
    {
    group: ["Aromatikoak", "Aldehidoak"],
    name: "Bentzenokarbaldehidoa",
    aliases: ["Benzaldehidoa"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CHO"], direction: "up" }
        ]
    },
    difficulty: 13
    },

    // 39
    {
    group: ["Aromatikoak", "Azido Karboxilikoak"],
    name: "Azido bentzenokarboxilikoa",
    aliases: ["Azido benzoikoa"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["COOH"], direction: "up" }
        ]
    },
    difficulty: 13
    },

    // 40
    {
    group: ["Aromatikoak", "Esterrak"],
    name: "Metil bentzenokarboxilatoa",
    aliases: ["Metil benzoatoa"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["COOCH₃"], direction: "up" }
        ]
    },
    difficulty: 14
    },

    // 41
    {
    group: ["Aromatikoak", "Nitriloak"],
    name: "Bentzenokarbonitriloa",
    aliases: ["Benzonitriloa"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CN"], direction: "up" }
        ]
    },
    difficulty: 14
    },

    // 42
    {
    group: ["Aromatikoak", "Amidak"],
    name: "Bentzenokarboxamida",
    aliases: ["Benzamida"],
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CONH₂"], direction: "up" }
        ]
    },
    difficulty: 14
    },

    // 43
    {
    group: ["Aromatikoak", "Alkoholak", "Aldehidoak"],
    name: "2-hidroxibentzenokarbaldehidoa",
    structure: {
        aromatic: true,
        ring: ["C", "C", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CHO"], direction: "up" },
        { at: 1, atoms: ["OH"], direction: "right" }
        ]
    },
    difficulty: 15
    },

    // 44
    {
    group: ["Aromatikoak", "Alkoholak", "Azido Karboxilikoak"],
    name: "Azido 2-hidroxibentzenokarboxilikoa",
    structure: {
        aromatic: true,
        ring: ["C", "C", "CH", "CH", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["COOH"], direction: "up" },
        { at: 1, atoms: ["OH"], direction: "right" }
        ]
    },
    difficulty: 15
    },

    // 45
    {
    group: ["Aromatikoak", "Aminak", "Azido Karboxilikoak"],
    name: "Azido 4-aminobentzenokarboxilikoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["COOH"], direction: "up" },
        { at: 3, atoms: ["NH₂"], direction: "down" }
        ]
    },
    difficulty: 16
    },

    // 46
    {
    group: ["Aromatikoak", "Aminak", "Aldehidoak"],
    name: "4-aminobentzenokarbaldehidoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CHO"], direction: "up" },
        { at: 3, atoms: ["NH₂"], direction: "down" }
        ]
    },
    difficulty: 16
    },

    // 47
    {
    group: ["Aromatikoak", "Eterrak", "Aldehidoak"],
    name: "4-metoxibentzenokarbaldehidoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["CHO"], direction: "up" },
        { at: 3, atoms: ["O", "CH₃"], direction: "down" }
        ]
    },
    difficulty: 16
    },

    // 48
    {
    group: ["Aromatikoak", "Eterrak", "Azido Karboxilikoak"],
    name: "Azido 4-metoxibentzenokarboxilikoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["COOH"], direction: "up" },
        { at: 3, atoms: ["O", "CH₃"], direction: "down" }
        ]
    },
    difficulty: 16
    },

    // 49
    {
    group: ["Aromatikoak", "Alkoholak", "Aminak"],
    name: "4-aminofenola",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["OH"], direction: "up" },
        { at: 3, atoms: ["NH₂"], direction: "down" }
        ]
    },
    difficulty: 15
    },

    // 50
    {
    group: ["Aromatikoak", "Alkoholak", "Esterrak"],
    name: "Metil 4-hidroxibentzenokarboxilatoa",
    structure: {
        aromatic: true,
        ring: ["C", "CH", "CH", "C", "CH", "CH"],
        branches: [
        { at: 0, atoms: ["COOCH₃"], direction: "up" },
        { at: 3, atoms: ["OH"], direction: "down" }
        ]
    },
    difficulty: 16
    },
];