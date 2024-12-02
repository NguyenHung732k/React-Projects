const elements = [
    { number: 1, symbol: 'H', name: 'Hydrogen', type: 'Reactive Non-metal', atomicWeight: 1.008 },
    { number: 2, symbol: 'He', name: 'Helium', type: 'Noble Gas', atomicWeight: 4.0026 },
    { number: 3, symbol: 'Li', name: 'Lithium', type: 'Alkali Metal', atomicWeight: 6.94 },
    { number: 4, symbol: 'Be', name: 'Beryllium', type: 'Alkaline Earth Metal', atomicWeight: 9.0122 },
    { number: 5, symbol: 'B', name: 'Boron', type: 'Metalloid', atomicWeight: 10.81 },
    { number: 6, symbol: 'C', name: 'Carbon', type: 'Reactive Non-metal', atomicWeight: 12.011 },
    { number: 7, symbol: 'N', name: 'Nitrogen', type: 'Reactive Non-metal', atomicWeight: 14.007 },
    { number: 8, symbol: 'O', name: 'Oxygen', type: 'Reactive Non-metal', atomicWeight: 15.999 },
    { number: 9, symbol: 'F', name: 'Fluorine', type: 'Reactive Non-metal', atomicWeight: 18.998 },
    { number: 10, symbol: 'Ne', name: 'Neon', type: 'Noble Gas', atomicWeight: 20.180 },
    { number: 11, symbol: 'Na', name: 'Sodium', type: 'Alkali Metal', atomicWeight: 22.990 },
    { number: 12, symbol: 'Mg', name: 'Magnesium', type: 'Alkaline Earth Metal', atomicWeight: 24.305 },
    { number: 13, symbol: 'Al', name: 'Aluminum', type: 'Post-transition Metal', atomicWeight: 26.982 },
    { number: 14, symbol: 'Si', name: 'Silicon', type: 'Metalloid', atomicWeight: 28.085 },
    { number: 15, symbol: 'P', name: 'Phosphorus', type: 'Reactive Non-metal', atomicWeight: 30.974 },
    { number: 16, symbol: 'S', name: 'Sulfur', type: 'Reactive Non-metal', atomicWeight: 32.06 },
    { number: 17, symbol: 'Cl', name: 'Chlorine', type: 'Reactive Non-metal', atomicWeight: 35.45 },
    { number: 18, symbol: 'Ar', name: 'Argon', type: 'Noble Gas', atomicWeight: 39.948 },
    { number: 19, symbol: 'K', name: 'Potassium', type: 'Alkali Metal', atomicWeight: 39.098 },
    { number: 20, symbol: 'Ca', name: 'Calcium', type: 'Alkaline Earth Metal', atomicWeight: 40.078 },
    { number: 21, symbol: 'Sc', name: 'Scandium', type: 'Transition Metal', atomicWeight: 44.956 },
    { number: 22, symbol: 'Ti', name: 'Titanium', type: 'Transition Metal', atomicWeight: 47.867 },
    { number: 23, symbol: 'V', name: 'Vanadium', type: 'Transition Metal', atomicWeight: 50.942 },
    { number: 24, symbol: 'Cr', name: 'Chromium', type: 'Transition Metal', atomicWeight: 52.03 },
    { number: 25, symbol: 'Mn', name: 'Manganese', type: 'Transition Metal', atomicWeight: 54.938 },
    { number: 26, symbol: 'Fe', name: 'Iron', type: 'Transition Metal', atomicWeight: 55.845 },
    { number: 27, symbol: 'Co', name: 'Cobalt', type: 'Transition Metal', atomicWeight: 58.933 },
    { number: 28, symbol: 'Ni', name: 'Nickel', type: 'Transition Metal', atomicWeight: 58.693 },
    { number: 29, symbol: 'Cu', name: 'Copper', type: 'Transition Metal', atomicWeight: 63.546 },
    { number: 30, symbol: 'Zn', name: 'Zinc', type: 'Transition Metal', atomicWeight: 65.38 },
    { number: 31, symbol: 'Ga', name: 'Gallium', type: 'Post-transition Metal', atomicWeight: 69.723 },
    { number: 32, symbol: 'Ge', name: 'Germanium', type: 'Metalloid', atomicWeight: 72.63 },
    { number: 33, symbol: 'As', name: 'Arsenic', type: 'Metalloid', atomicWeight: 74.922 },
    { number: 34, symbol: 'Se', name: 'Selenium', type: 'Reactive Non-metal', atomicWeight: 78.971 },
    { number: 35, symbol: 'Br', name: 'Bromine', type: 'Reactive Non-metal', atomicWeight: 79.904 },
    { number: 36, symbol: 'Kr', name: 'Krypton', type: 'Noble Gas', atomicWeight: 83.798 },
    { number: 37, symbol: 'Rb', name: 'Rubidium', type: 'Alkali Metal', atomicWeight: 85.468 },
    { number: 38, symbol: 'Sr', name: 'Strontium', type: 'Alkaline Earth Metal', atomicWeight: 87.62 },
    { number: 39, symbol: 'Y', name: 'Yttrium', type: 'Transition Metal', atomicWeight: 88.906 },
    { number: 40, symbol: 'Zr', name: 'Zirconium', type: 'Transition Metal', atomicWeight: 91.224 },
    { number: 41, symbol: 'Nb', name: 'Niobium', type: 'Transition Metal', atomicWeight: 92.906 },
    { number: 42, symbol: 'Mo', name: 'Molybdenum', type: 'Transition Metal', atomicWeight: 95.95 },
    { number: 43, symbol: 'Tc', name: 'Technetium', type: 'Transition Metal', atomicWeight: 98 },
    { number: 44, symbol: 'Ru', name: 'Ruthenium', type: 'Transition Metal', atomicWeight: 101.07 },
    { number: 45, symbol: 'Rh', name: 'Rhodium', type: 'Transition Metal', atomicWeight: 102.91 },
    { number: 46, symbol: 'Pd', name: 'Palladium', type: 'Transition Metal', atomicWeight: 106.42 },
    { number: 47, symbol: 'Ag', name: 'Silver', type: 'Transition Metal', atomicWeight: 107.8682 },
    { number: 48, symbol: 'Cd', name: 'Cadmium', type: 'Transition Metal', atomicWeight: 112.414 },
    { number: 49, symbol: 'In', name: 'Indium', type: 'Post-transition Metal', atomicWeight: 114.818 },
    { number: 50, symbol: 'Sn', name: 'Tin', type: 'Post-transition Metal', atomicWeight: 118.71 },
    { number: 51, symbol: 'Sb', name: 'Antimony', type: 'Metalloid', atomicWeight: 121.76 },
    { number: 52, symbol: 'Te', name: 'Teluri', type: 'Metalloid', atomicWeight: 127.60 },
    { number: 53, symbol: 'I', name: 'Iodine', type: 'Reactive Non-metal', atomicWeight: 126.904 },
    { number: 54, symbol: 'Xe', name: 'Xenon', type: 'Noble Gas', atomicWeight: 131.293 },
    { number: 55, symbol: 'Cs', name: 'Cesium', type: 'Alkali Metal', atomicWeight: 132.905 },
    { number: 56, symbol: 'Ba', name: 'Barium', type: 'Alkaline Earth Metal', atomicWeight: 137.33 },
    { number: 57, symbol: 'La', name: 'Lanthanum', type: 'Lanthanoids', atomicWeight: 138.905 },
    { number: 58, symbol: 'Ce', name: 'Cerium', type: 'Lanthanoids', atomicWeight: 140.116 },
    { number: 59, symbol: 'Pr', name: 'Praseodymium', type: 'Lanthanoids', atomicWeight: 140.907 },
    { number: 60, symbol: 'Nd', name: 'Neodymium', type: 'Lanthanoids', atomicWeight: 144.242 },
    { number: 61, symbol: 'Pm', name: 'Promethium', type: 'Lanthanoids', atomicWeight: 145 },
    { number: 62, symbol: 'Sm', name: 'Samarium', type: 'Lanthanoids', atomicWeight: 150.36 },
    { number: 63, symbol: 'Eu', name: 'Europium', type: 'Lanthanoids', atomicWeight: 151.98 },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', type: 'Lanthanoids', atomicWeight: 157.25 },
    { number: 65, symbol: 'Tb', name: 'Terbium', type: 'Lanthanoids', atomicWeight: 158.925 },
    { number: 66, symbol: 'Dy', name: 'Dysprosium', type: 'Lanthanoids', atomicWeight: 162.5 },
    { number: 67, symbol: 'Ho', name: 'Holmium', type: 'Lanthanoids', atomicWeight: 164.930 },
    { number: 68, symbol: 'Er', name: 'Erbium', type: 'Lanthanoids', atomicWeight: 167.259 },
    { number: 69, symbol: 'Tm', name: 'Thulium', type: 'Lanthanoids', atomicWeight: 168.934 },
    { number: 70, symbol: 'Yb', name: 'Ytterbium', type: 'Lanthanoids', atomicWeight: 173.04 },
    { number: 71, symbol: 'Lu', name: 'Lutetium', type: 'Lanthanoids', atomicWeight: 174.966 },
    { number: 72, symbol: 'Hf', name: 'Hafnium', type: 'Transition Metal', atomicWeight: 178.49 },
    { number: 73, symbol: 'Ta', name: 'Tantalum', type: 'Transition Metal', atomicWeight: 180.947 },
    { number: 74, symbol: 'W', name: 'Tungsten', type: 'Transition Metal', atomicWeight: 183.84 },
    { number: 75, symbol: 'Re', name: 'Rhenium', type: 'Transition Metal', atomicWeight: 186.207 },
    { number: 76, symbol: 'Os', name: 'Osmium', type: 'Transition Metal', atomicWeight: 190.23 },
    { number: 77, symbol: 'Ir', name: 'Iridium', type: 'Transition Metal', atomicWeight: 192.217 },
    { number: 78, symbol: 'Pt', name: 'Platinum', type: 'Transition Metal', atomicWeight: 195.084 },
    { number: 79, symbol: 'Au', name: 'Gold', type: 'Transition Metal', atomicWeight: 196.967 },
    { number: 80, symbol: 'Hg', name: 'Mercury', type: 'Transition Metal', atomicWeight: 200.59 },
    { number: 81, symbol: 'Tl', name: 'Thallium', type: 'Post-transition Metal', atomicWeight: 204.38 },
    { number: 82, symbol: 'Pb', name: 'Lead', type: 'Post-transition Metal', atomicWeight: 207.2 },
    { number: 83, symbol: 'Bi', name: 'Bismuth', type: 'Post-transition Metal', atomicWeight: 208.980 },
    { number: 84, symbol: 'Po', name: 'Polonium', type: 'Post-transition Metal', atomicWeight: 209 },
    { number: 85, symbol: 'At', name: 'Astatine', type: 'Post-transition Metal', atomicWeight: 210 },
    { number: 86, symbol: 'Rn', name: 'Radon', type: 'Noble Gas', atomicWeight: 222 },
    { number: 87, symbol: 'Fr', name: 'Francium', type: 'Alkali Metal', atomicWeight: 223 },
    { number: 88, symbol: 'Ra', name: 'Radium', type: 'Alkaline Earth Metal', atomicWeight: 226 },
    { number: 89, symbol: 'Ac', name: 'Actinium', type: 'Actinoids', atomicWeight: 227 },
    { number: 90, symbol: 'Th', name: 'Thorium', type: 'Actinoids', atomicWeight: 232.038 },
    { number: 91, symbol: 'Pa', name: 'Protactinium', type: 'Actinoids', atomicWeight: 231.035 },
    { number: 92, symbol: 'U', name: 'Uranium', type: 'Actinoids', atomicWeight: 238.028 },
    { number: 93, symbol: 'Np', name: 'Neptunium', type: 'Actinoids', atomicWeight: 237 },
    { number: 94, symbol: 'Pu', name: 'Plutonium', type: 'Actinoids', atomicWeight: 244 },
    { number: 95, symbol: 'Am', name: 'Americium', type: 'Actinoids', atomicWeight: 243 },
    { number: 96, symbol: 'Cm', name: 'Curium', type: 'Actinoids', atomicWeight: 247 },
    { number: 97, symbol: 'Bk', name: 'Berkelium', type: 'Actinoids', atomicWeight: 247 },
    { number: 98, symbol: 'Cf', name: 'Californium', type: 'Actinoids', atomicWeight: 251 },
    { number: 99, symbol: 'Es', name: 'Einsteinium', type: 'Actinoids', atomicWeight: 252 },
    { number: 100, symbol: 'Fm', name: 'Fermium', type: 'Actinoids', atomicWeight: 257 },
    { number: 101, symbol: 'Md', name: 'Mendelevium', type: 'Actinoids', atomicWeight: 258 },
    { number: 102, symbol: 'No', name: 'Nobelium', type: 'Actinoids', atomicWeight: 259 },
    { number: 103, symbol: 'Lr', name: 'Lawrencium', type: 'Actinoids', atomicWeight: 262 },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', type: 'Transition Metal', atomicWeight: 267 },
    { number: 105, symbol: 'Db', name: 'Dubnium', type: 'Transition Metal', atomicWeight: 270 },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', type: 'Transition Metal', atomicWeight: 271 },
    { number: 107, symbol: 'Bh', name: 'Bohrium', type: 'Transition Metal', atomicWeight: 270 },
    { number: 108, symbol: 'Hs', name: 'Hassium', type: 'Transition Metal', atomicWeight: 277 },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', type: 'Unknown', atomicWeight: 276 },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', type: 'Unknown', atomicWeight: 281 },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', type: 'Unknown', atomicWeight: 280 },
    { number: 112, symbol: 'Cn', name: 'Copernicium', type: 'Unknown', atomicWeight: 285 },
    { number: 113, symbol: 'Nh', name: 'Nihonium', type: 'Unknown', atomicWeight: 284 },
    { number: 114, symbol: 'Fl', name: 'Flerovium', type: 'Unknown', atomicWeight: 289 },
    { number: 115, symbol: 'Mc', name: 'Moscovium', type: 'Unknown', atomicWeight: 288 },
    { number: 116, symbol: 'Lv', name: 'Livermorium', type: 'Unknown', atomicWeight: 293 },
    { number: 117, symbol: 'Ts', name: 'Tennessine', type: 'Unknown', atomicWeight: 294 },
    { number: 118, symbol: 'Og', name: 'Oganesson', type: 'Unknown', atomicWeight: 294 }
];

export const elementPositions = {
    1: [0, 0],    // Hydrogen
    2: [0, 17],   // Helium
    3: [1, 0],    // Lithium
    4: [1, 1],    // Beryllium
    5: [1, 12],   // Boron
    6: [1, 13],   // Carbon
    7: [1, 14],   // Nitrogen
    8: [1, 15],   // Oxygen
    9: [1, 16],   // Fluorine
    10: [1, 17],  // Neon
    11: [2, 0],   // Sodium
    12: [2, 1],   // Magnesium
    13: [2, 12],  // Aluminum
    14: [2, 13],  // Silicon
    15: [2, 14],  // Phosphorus
    16: [2, 15],  // Sulfur
    17: [2, 16],  // Chlorine
    18: [2, 17],  // Argon
    19: [3, 0],   // Potassium
    20: [3, 1],   // Calcium
    21: [3, 2],   // Scandium
    22: [3, 3],   // Titanium
    23: [3, 4],   // Vanadium
    24: [3, 5],   // Chromium
    25: [3, 6],   // Manganese
    26: [3, 7],   // Iron
    27: [3, 8],   // Cobalt
    28: [3, 9],   // Nickel
    29: [3, 10],  // Copper
    30: [3, 11],  // Zinc
    31: [3, 12],   // Gallium
    32: [3, 13],   // Germanium
    33: [3, 14],   // Arsenic
    34: [3, 15],   // Selenium
    35: [3, 16],   // Bromine
    36: [3, 17],   // Krypton
    37: [4, 0],   // Rubidium
    38: [4, 1],   // Strontium
    39: [4, 2],   // Yttrium
    40: [4, 3],   // Zirconium
    41: [4, 4],   // Niobium
    42: [4, 5],   // Molybdenum
    43: [4, 6],   // Technetium
    44: [4, 7],   // Ruthenium
    45: [4, 8],   // Rhodium
    46: [4, 9],   // Palladium
    47: [4, 10],  // Silver
    48: [4, 11],  // Cadmium
    49: [4, 12],   // Indium
    50: [4, 13],   // Tin
    51: [4, 14],   // Antimony
    52: [4, 15],    // Teluri
    53: [4, 16],   // Iodine
    54: [4, 17],   // Xenon
    55: [5, 0],   // Cesium
    56: [5, 1],   // Barium
    57: [5, 2],   // Lanthanum
    72: [5, 3],  // Hafnium
    73: [5, 4],  // Tantalum
    74: [5, 5],  // Tungsten
    75: [5, 6],  // Rhenium
    76: [5, 7],   // Osmium
    77: [5, 8],   // Iridium
    78: [5, 9],   // Platinum
    79: [5, 10],   // Gold
    80: [5, 11],   // Mercury
    81: [5, 12],   // Thallium
    82: [5, 13],   // Lead
    83: [5, 14],   // Bismuth
    84: [5, 15],   // Polonium
    85: [5, 16],   // Astatine
    86: [5, 17],  // Radon
    87: [6, 0],   // Francium
    88: [6, 1],   // Radium
    89: [6, 2],   // Actinium
    104: [6, 3], // Rutherfordium
    105: [6, 4], // Dubni
    106: [6, 5], // Seaborgium
    107: [6, 6], // Bohrium
    108: [6, 7], // Hassium
    109: [6, 8], // Meitnerium
    110: [6, 9], // Darmstadtium
    111: [6, 10], // Roentgenium
    112: [6, 11], // Copernicium
    113: [6, 12], // Nihonium
    114: [6, 13], // Flerovium
    115: [6, 14], // Moscovium
    116: [6, 15], // Livermorium
    117: [6, 16], // Tennessine
    118: [6, 17], // Oganesson
    58: [9, 3],   // Cerium
    59: [9, 4],   // Praseodymium
    60: [9, 5],   // Neodymium
    61: [9, 6],   // Promethium
    62: [9, 7],   // Samarium
    63: [9, 8],   // Europium
    64: [9, 9],   // Gadolinium
    65: [9, 10],   // Terbium
    66: [9, 11],   // Dysprosium
    67: [9, 12],  // Holmium
    68: [9, 13],  // Erbium
    69: [9, 14],  // Thulium
    70: [9, 15],  // Ytterbium
    71: [9, 16],  // Lutetium
    90: [10, 3],   // Thorium
    91: [10, 4],   // Protactinium
    92: [10, 5],   // Uranium
    93: [10, 6],   // Neptunium
    94: [10, 7],   // Plutonium
    95: [10, 8],   // Americium
    96: [10, 9],   // Curium
    97: [10, 10],  // Berkelium
    98: [10, 11],  // Californium
    99: [10, 12],  // Einsteinium
    100: [10, 13],  // Fermium
    101: [10, 14], // Mendelevium
    102: [10, 15], // Nobelium
    103: [10, 16], // Lawrencium
};

export default elements