module.exports = [
  {
    category: "Black & White Copies and Printing",
    breakdown: "Price per page",
    descriptions: ["1 to 49", "50 to 299", "300 to 499", "500 to 1000"],
    products: [
      {
        category: "A4 document printing from stick or email",
        products: [
          { name: "Single sided", prices: [1, 0.9, 0.8, 0.6] },
          { name: "Double sided", prices: [1.2, 1.1, 1, 0.9] }
        ]
      },
      {
        category: "A4 loose sheet scan and copy",
        products: [
          { name: "Single sided", prices: [1, 0.9, 0.8, 0.6] },
          { name: "Double sided", prices: [2, 1.1, 1, 0.0] }
        ]
      },
      {
        category: "",
        products: [
          { name: "A4 scan from book and print", prices: [1.5, 2, 2.5, 3] }
        ]
      }
    ]
  },
  {
    category: "Colour Copies and Printing",
    breakdown: "Price per page",
    descriptions: ["1 to 49", "50 to 299", "300 to 499", "500 to 1000"],
    products: [
      {
        category: "A4 document printing from stick or email",
        products: [
          { name: "Single sided", prices: [7, 6.5, 6, 5.5] },
          { name: "Double sided", prices: [12, 11, 10, 9] }
        ]
      },
      {
        category: "A4 loose sheet scan and copy",
        products: [
          { name: "Single sided", prices: [7, 6.5, 6, 5.5] },
          { name: "Double sided", prices: [12, 11, 10, 9] }
        ]
      },
      {
        category: "",
        products: [
          { name: "A4 scan from book and print", prices: [8.5, 9, 9.5, 10] }
        ]
      }
    ]
  },
  {
    category: "Laminating 75+75 micron",
    breakdown: "Price per page",
    descriptions: ["1 to 49", "50 to 99", "100+"],
    products: [
      {
        category: "",
        products: [
          { name: "A4", prices: [8, 9, 10] },
          { name: "A5", prices: [5, 6, 7] }
        ]
      }
    ]
  },
  {
    category: "Emailing",
    breakdown: "Price per page",
    descriptions: ["Email", "1 to 49 (per page)", "50 to 100 (per page)"],
    products: [
      {
        category: "",
        products: [
          { name: "Send email from stick", prices: [5] },
          { name: "Scan pages and send email", prices: [5, 0.5, 0.45] },
          {
            name: "Receive email and print in black & white",
            prices: [2, 1, 0.9]
          },
          { name: "Receive email and print in colour", prices: [2, 7, 6.5] }
        ]
      }
    ]
  },
  {
    category: "Typing",
    breakdown: "Price per page",
    descriptions: ["1 to 19", "20 to 49", "50 to 100"],
    products: [
      {
        category: "",
        products: [
          {
            name: "Typing documents & excludes printing and emailing",
            prices: [35, 25.5, 24]
          },
          {
            name: "Print typed documents in black & white",
            prices: [1, 1, 0.9]
          },
          { name: "Print typed documents in colour", prices: [7, 7, 6.5] },
          { name: "Email typed documents", prices: [5, 5.5, 6] }
        ]
      }
    ]
  },
  {
    category: "Design",
    breakdown: "Price per hour",
    descriptions: ["1 to 10", "11 to 50", "51+"],
    products: [
      {
        category: "",
        products: [
          {
            name: "Design, layout of letter heads, CVs and documents",
            prices: [350, 340, 330]
          }
        ]
      }
    ]
  }
]
