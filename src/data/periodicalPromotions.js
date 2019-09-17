export const periodicalPromotions = [
  {
    active: true,
    description:
      "Profitez de cette super promotion pour donner un bon kick aux prix de Noël !",
    id: 1,
    name: "Kick de Noël",
    products: [
      {
        id: 1,
        name: "Ranger Rodéo"
      },
      {
        id: 2,
        name: "Excursion à cheval"
      },
      {
        id: 3,
        name: "Lasso thérapie"
      }
    ],
    reductionAmount: 25,
    reductionType: "PERCENTAGE",
    validatyFrom: "2019-12-10",
    validityTo: "2019-12-26"
  },
  {
    active: true,
    description:
      "N’attendez plus et venez découvrir la tradition du Ranger Rodéo pour un prix qui vous fera tomber à la renverse !",
    id: 2,
    name: "Ranger Rodéo découverte",
    products: [
      {
        id: 1,
        name: "Ranger Rodéo"
      }
    ],
    reductionAmount: 30,
    reductionType: "CURRENCY",
    validatyFrom: "2020-06-05",
    validityTo: "2020-09-01"
  },
  {
    active: true,
    description:
      "L’été dans les ranch texans, c’est des promotions pour toutes les activités qui vous feront découvrir la vie d’un vrai Texan.",
    id: 3,
    name: "Eté promo du ranch texan",
    products: [
      {
        id: 1,
        name: "Ranger Rodéo"
      },
      {
        id: 2,
        name: "Excursion à cheval"
      },
      {
        id: 3,
        name: "Lasso thérapie"
      }
    ],
    reductionAmount: 15,
    reductionType: "PERCENTAGE",
    validatyFrom: "2019-06-21",
    validityTo: "2019-09-22"
  },
  {
    active: false,
    description:
      "Vous souhaitez apprendre à claquer du lasso ? Saisissez cette promotion au vol et devenez un as !",
    id: 4,
    name: "Promo au lasso",
    products: [
      {
        id: 3,
        name: "Lasso thérapie"
      }
    ],
    reductionAmount: 25,
    reductionType: "CURRENCY",
    validatyFrom: "2019-12-10",
    validityTo: "2019-12-26"
  }
];
