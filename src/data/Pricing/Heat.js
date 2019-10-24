module.exports = [
  {
    category: "Heat Transfer Vinyl",
    disclaimer: "Includes the design, setup and heat transfer. Does not include the material such as the shirt, cap, tea towel etc.",
    breakdown: "Price each",
    descriptions: ["1 to 5", "6 to 10", "11 to 20", "20+"],
    products: [
      {
        category: "Flexx designs on caps, shirts, etc",
        products: [
          { name: "One colour", prices: [50,48,46,45] },
          { name: "Per additional colour", prices: [10,9.5,9,8.5] }
        ]
      },
      {
        category: "Flexx flock designs on caps, shirts, etc",
        products: [
          { name: "One colour", prices: [70,67.5,65,62] },
          { name: "Per additional colour", prices: [15,14.5,14,13.5] }
        ]
      },
      {
        category: "Flexx glitter designs on caps, shirts, etc",
        products: [
          { name: "One colour", prices: [60,57.5,55,52] },
          { name: "Per additional colour", prices: [12.5,12,11.5,11] }
        ]
      },
    ]
  },
  {
    category: "A4 Heat Transfer (Forever)",
    disclaimer: "Includes the design, setup and heat transfer. Does not include the material such as the shirt, cap, tea towel etc.",
    breakdown: "Price per page",
    descriptions: ["1 to 5", "6 to 10", "11 to 20", "20+"],
    products: [
      {
        category: "A4 full colour",
        products: [
          { name: "On dark material", prices: [55,53,52,50] },
          { name: "On light material", prices: [55,53,52,50] }
        ]
      }
    ]
  },
  {
    category: "Mugs, Plates & Water Bottles",
    disclaimer: "Includes the design, setup and heat transfer. Does not include the material such as the shirt, cap, tea towel etc.",
    breakdown: "Price per page",
    descriptions: ["1 to 5", "6 to 10", "11 to 20", "21+"],
    products: [
      {
        category: "",
        products: [
          { name: "Mugs", prices: [100, 90, 80, 75] },
          { name: "Plates", prices: [-1,-1,-1,-1] },
          { name: "Water bottles", prices: [120,115,110,110] }
        ]
      }
    ]
  },
  {
    category: "Creative Design",
    breakdown: "Price per hour",
    descriptions: ["1 to 10", "11 to 50", "51+"],
    products: [
      {
        category: "",
        products: [
          {
            name: "Design, layout & setup for complex designs",
            prices: [350, 340, 330]
          }
        ]
      }
    ]
  }
]
