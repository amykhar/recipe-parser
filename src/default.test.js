const RecipeParser = require('./default')
const { testAsset } = require('../test/')

describe('default', () => {
  const importer = RecipeParser

  describe('www.wholelivinglauren.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'www.wholelivinglauren.com/creamy-vegan-pumpkin-soup.html'
      )
      result = await importer(source)
    })

    test('title', () => {
      expect(result.title).toEqual('Creamy Vegan Pumpkin Soup')
    })

    test('description', () => {
      expect(result.description).toEqual(
        `Boy oh boy do I have something tasty (and super easy) for you today. I've said it before and I'll say it again. Soup is my jam. It's one of my absolute favorite foods. And this time of year there is nothing better than a piping hot bowl of creamy, comforting soup. Add pumpkin to the mix and WHOA...c`
      )
    })

    test('image_url', () => {
      expect(result.image_url).toEqual(
        'http://static1.squarespace.com/static/530e90a4e4b0340ce5266903/530e97a4e4b0fe3537f031c0/5817fd93c534a52382cccd35/1534429575718/fullsizeoutput_47b.jpeg?format=1500w'
      )
    })

    test('yield', () => {
      expect(result.yield).toEqual('4-5')
    })

    test('duration', () => {
      expect(result.duration).toBeUndefined()
    })

    test('ingredient_lists', () => {
      expect(result.ingredient_lists).toEqual([
        {
          lines: [
            {
              name: 'olive oil',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tbsp'
            },
            {
              name: 'medium yellow onion, chopped',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'cloves garlic, minced',
              quantity_numerator: 3,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'cans 100% pumpkin puree (not pumpkin pie mix)',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'low sodium vegetable stock',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'can lite coconut milk',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'maple syrup',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tbsp'
            },
            {
              name: 'ground ginger',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'cinnamon',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'ground nutmeg',
              quantity_numerator: 1,
              quantity_denominator: 4,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'sea salt',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'pinch of cayenne pepper',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: undefined,
              optional: true,
              unit: undefined
            }
          ]
        }
      ])
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            {
              text:
                'Heat olive oil in a large pot over medium-high heat and add onion and garlic. Cook for about 3-5 minutes, until onions become translucent. '
            },
            {
              text:
                'Carefully stir in the pumpkin, vegetable stock, coconut milk, maple syrup, ginger, cinnamon, nutmeg, salt, and cayenne (if using). '
            },
            {
              text:
                'Bring to a boil, then turn the heat to low and simmer for about 20 minutes, until the soup has reduced and thickened slightly.'
            },
            {
              text:
                'Puree with an immersion blender or in a stand blender until very smooth. Garnish with pepitas, cashew cream, and hot sauce. '
            },
            { text: 'Enjoy!' }
          ]
        }
      ])
    })
  })

  describe('paleogrubs.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'paleogrubs.com/best-paleo-brownie-recipe.html'
      )
      result = await importer(source)
    })

    test('title', () => {
      expect(result.title).toEqual(
        'The Best Fudgy Paleo Brownies Ever – Easy and Flourless Brownie Recipe'
      )
    })

    test('ingredient_lists', () => {
      expect(result.ingredient_lists).toEqual([
        {
          lines: [
            {
              name: 'almond butter',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'grade-A maple syrup',
              quantity_numerator: 1,
              quantity_denominator: 3,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'egg',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'ghee',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tbsp'
            },
            {
              name: 'vanilla',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'cocoa powder',
              quantity_numerator: 1,
              quantity_denominator: 3,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'pure baking soda',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            }
          ]
        }
      ])
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            {
              text:
                'Preheat the oven to 325 degrees F. In a large bowl, whisk together the almond butter, syrup, egg, ghee, and vanilla. Stir in the cocoa powder and baking soda.'
            },
            {
              text:
                'Pour the batter into a 9-inch baking pan. Bake for 20-23 minutes, until the brownie is done, but still soft in the middle.'
            }
          ]
        }
      ])
    })
  })

  describe('kitchen.benburwell.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset('kitchen.benburwell.com/palak-paneer.html')
      result = await importer(source)
    })

    test('title', () => {
      expect(result.title).toEqual('Palak Paneer')
    })

    test('ingredient_lists', () => {
      expect(result.ingredient_lists).toEqual([
        {
          lines: [
            {
              name: 'turmeric',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'salt',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'canola oil',
              quantity_numerator: 6,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tbsp'
            },
            {
              name: 'paneer, cut into 1/2 inch cubes',
              quantity_numerator: 24,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'oz'
            },
            {
              name: 'spinach, pureed',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'lb'
            },
            {
              name: 'medium white onion, finely diced',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'fresh ginger, minced',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'in'
            },
            {
              name: 'garlic cloves, minced',
              quantity_numerator: 8,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'garam masala',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'ground coriander',
              quantity_numerator: 4,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'ground cumin',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'plain yogurt',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'rice, cooked',
              quantity_numerator: 3,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'c'
            }
          ]
        }
      ])
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            {
              text:
                'Whisk the turmeric, salt, and canola oil together. Add the paneer cubes, toss, and marinate while prepping other ingredients.'
            },
            {
              text:
                'In a large skillet, brown the paneer cubes on all sides over medium heat and remove from pan.'
            },
            {
              text:
                'Add the onion, ginger, and garlic to the pan and saute until toffee colored. This will take a solid 30 minutes, maybe more.'
            },
            {
              text:
                'Add the garam masala, ground coriander, and ground cumin and cook for another 3-5 minutes.'
            },
            {
              text:
                'Incorporate the spinach and season with salt. Cook for 10 minutes, adding water as needed.'
            },
            {
              text:
                'Reduce heat to low. Slowly stir in yogurt. Mix in browned paneer and cover to warm, about 5 minutes.'
            },
            {
              text: 'Serve over rice.'
            }
          ]
        }
      ])
    })
  })

  describe('detoxinista.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'detoxinista.com/ingredient-peanut-butter-cookies.html'
      )
      result = await importer(source)
    })

    test('title', () => {
      expect(result.title).toEqual('4-Ingredient Peanut Butter Cookies')
    })

    test('ingredient_lists', () => {
      expect(result.ingredient_lists).toEqual([
        {
          lines: [
            {
              name: 'peanut butter',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'coconut sugar',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'egg (or a flax egg',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: 'see notes)',
              optional: false,
              unit: undefined
            },
            {
              name: 'baking soda',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            }
          ]
        }
      ])
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            {
              text:
                'Preheat the oven to 350ºF and line a baking sheet with parchment paper.'
            },
            {
              text:
                'In a large bowl, combine the peanut butter, coconut sugar, egg, and baking soda. Add a pinch of salt, if desired. (If using unsalted peanut butter, add at least 1/4 to 1/2 teaspoon of fine salt to compensate.)'
            },
            {
              text:
                'Drop the cookie dough by the tablespoon onto the lined baking sheet, then use a fork to flatten them in a criss-cross shape. Once all of the cookies have been flattened, bake them until lightly golden, about 10 to 12 minutes at 350ºF.'
            },
            {
              text:
                'Let the cookies cool on the pan for 10 minutes, then transfer them to a wire rack to cool completely. These cookies can be served at room temperature, or place them in the freezer to firm up even more. My husband likes to eat them straight from the freezer for a crispy texture.'
            },
            {
              text:
                'Store the cookies at room temperature for up to 3 days, or in the fridge or freezer for up to 3 months in an airtight container.'
            }
          ]
        }
      ])
    })
  })

  describe('avocadopesto.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'avocadopesto.com/roasted-cauliflower-soup.html'
      )
      result = await importer(source)
    })

    test('ingredient_lists', () => {
      expect(result.ingredient_lists).toEqual([
        {
          lines: [
            {
              name: 'head cauliflower chopped into florets',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'head garlic',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'extra virgin olive oil divided',
              quantity_numerator: 3,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tbsp'
            },
            {
              name: 'carrot peeled and diced',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'stalk celery diced',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'small yellow onion diced',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'smoked paprika optional',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'hot smoked paprika optional',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'vegetable broth',
              quantity_numerator: 4,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name:
                'can coconut milk (optional, use almond flour instead if sensitive to the taste of coconut milk)',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'nutritional yeast',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tbsp'
            },
            {
              name: 'For garnish:',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'handful chopped parsley',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: undefined,
              optional: false,
              unit: undefined
            }
          ]
        }
      ])
    })
  })

  describe('kblog.lunchboxbunch.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'kblog.lunchboxbunch.com/easy-sweet-potato-veggie-burgers-with.html'
      )
      result = await importer(source)
    })

    test('ingredient_lists', () => {
      expect(result.ingredient_lists).toEqual([
        {
          lines: [
            {
              name: 'medium sweet potato, baked and peeled',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'oz. cooked white beans (canned, drained and rinsed)',
              quantity_numerator: 16,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'white onion, chopped',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: '-3 Tbsp tahini',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'apple cider vinegar',
              quantity_numerator: 3,
              quantity_denominator: 4,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'garlic powder',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name:
                '- 1 tsp chipotle powder (or cajun spice) (use more for spicier burgers)',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'salt',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'black pepper (add more for more bite!)',
              quantity_numerator: 1,
              quantity_denominator: 4,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'nutritional yeast OR any flour (try oat flour)',
              quantity_numerator: 1,
              quantity_denominator: 3,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: '- 1 cup finely chopped greens (kale, spinach, parsley)',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'toppings: avocado, tomato, vegenaise, burger buns, greens',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name:
                'skillet: 1 Tbsp oil ( extra virgin olive oil, coconut oil, or other)',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'optional: Panko bread crumbs for crispy coating',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'medium sweet potato, baked and peeled',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'oz. cooked white beans (canned, drained and rinsed)',
              quantity_numerator: 16,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'white onion, chopped',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: '-3 Tbsp tahini',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'apple cider vinegar',
              quantity_numerator: 3,
              quantity_denominator: 4,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'garlic powder',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name:
                '- 1 tsp chipotle powder (or cajun spice) (use more for spicier burgers)',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'salt',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'black pepper (add more for more bite!)',
              quantity_numerator: 1,
              quantity_denominator: 4,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'nutritional yeast OR any flour (try oat flour)',
              quantity_numerator: 1,
              quantity_denominator: 3,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: '- 1 cup finely chopped greens (kale, spinach, parsley)',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'toppings: avocado, tomato, vegenaise, burger buns, greens',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name:
                'skillet: 1 Tbsp oil ( extra virgin olive oil, coconut oil, or other)',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'optional: Panko bread crumbs for crispy coating',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: undefined,
              optional: false,
              unit: undefined
            }
          ]
        }
      ])
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            {
              text:
                'Bake your sweet potato in a 400 degree oven for 40-60 minutes or until tender. If in a hurry, you could use the microwave, but oven-baked yields a bit more flavor.'
            },
            {
              text:
                'Add the potato and beans to a large mixing bowl. Using a large fork, mash well. Fold in the onion and keep mashing. Add all the remaining burger ingredients and mash, mash, mash well until thickened and mashed well. Tip! Rinse your beans in hot water before adding to bowl, this heats them, making them easier to mash.'
            },
            { text: 'Warm oven to 400 degrees.' },
            { text: 'Warm a skillet over high heat and add the oil.' },
            {
              text:
                'Using hands, form the burger mixture into large patties.  Place patties in the hot skillet. Note: If using Panko bread crumbs, before placing burgers in skillet, roll patties in Panko to coat well. In skillet: Cook 1-3 minutes on each side, until lightly browned. Repeat until all the burger mixture has been used. Optional: Before forming patties, place mixture in the fridge for a half hour or longer.'
            },
            {
              text:
                'Place the skillet-cooked patties on a baking sheet and bake for 10-15 minutes, until cooked through. Note: YES you could skip the skillet part and just bake the veggie burgers, but the flavor is better with those crispy oil-seared edges. If just baking, the baking time will be around 20 minutes, depending on patty size.'
            },
            {
              text:
                'Slice up all your burger toppings and toast the buns. Sprouted grain were used! Add vegan mayo or spicy mustard and the patty and toppings. Serve warm!'
            },
            {
              text:
                'Store leftover burgers, sealed, in the fridge for up to a day, or freeze and consume within a few weeks for best flavor and texture. To reheat: warm in a 400 degree oven until warmed through, about 12 minutes, depending on burger thickness.'
            },
            {
              text:
                'Bake your sweet potato in a 400 degree oven for 40-60 minutes or until tender. If in a hurry, you could use the microwave, but oven-baked yields a bit more flavor.'
            },
            {
              text:
                'Add the potato and beans to a large mixing bowl. Using a large fork, mash well. Fold in the onion and keep mashing. Add all the remaining burger ingredients and mash, mash, mash well until thickened and mashed well. Tip! Rinse your beans in hot water before adding to bowl, this heats them, making them easier to mash.'
            },
            { text: 'Warm oven to 400 degrees.' },
            { text: 'Warm a skillet over high heat and add the oil.' },
            {
              text:
                'Using hands, form the burger mixture into large patties.  Place patties in the hot skillet. Note: If using Panko bread crumbs, before placing burgers in skillet, roll patties in Panko to coat well. In skillet: Cook 1-3 minutes on each side, until lightly browned. Repeat until all the burger mixture has been used. Optional: Before forming patties, place mixture in the fridge for a half hour or longer.'
            },
            {
              text:
                'Place the skillet-cooked patties on a baking sheet and bake for 10-15 minutes, until cooked through. Note: YES you could skip the skillet part and just bake the veggie burgers, but the flavor is better with those crispy oil-seared edges. If just baking, the baking time will be around 20 minutes, depending on patty size.'
            },
            {
              text:
                'Slice up all your burger toppings and toast the buns. Sprouted grain were used! Add vegan mayo or spicy mustard and the patty and toppings. Serve warm!'
            },
            {
              text:
                'Store leftover burgers, sealed, in the fridge for up to a day, or freeze and consume within a few weeks for best flavor and texture. To reheat: warm in a 400 degree oven until warmed through, about 12 minutes, depending on burger thickness.'
            }
          ]
        }
      ])
    })
  })

  describe('joyfoodsunshine.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'joyfoodsunshine.com/paleo-banana-bread.html'
      )
      result = await importer(source)
    })

    test('ingredient_lists', () => {
      expect(result.ingredient_lists).toEqual([
        {
          lines: [
            {
              name: 'large overripe bananas\nabout 1 cup, mashed',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'coconut oil',
              quantity_numerator: 1,
              quantity_denominator: 4,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'creamy almond butter',
              quantity_numerator: 1,
              quantity_denominator: 4,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'TBS\npure maple syrup',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'vanilla extract',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'eggs\nlightly beaten',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'of coconut flour',
              quantity_numerator: 1,
              quantity_denominator: 4,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'almond flour',
              quantity_numerator: 1,
              quantity_denominator: 4,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'baking powder',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'baking soda',
              quantity_numerator: 1,
              quantity_denominator: 4,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'sea salt',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'cinnamon',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'chocolate chips',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'c'
            }
          ]
        }
      ])
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            {
              text:
                'Preheat oven to 350 degrees F. Line an 8x4” baking pan (you can use a 9x5” pan but your loaf will be thinner and baking time will be less) with parchment paper and grease. Set aside.'
            },
            {
              text:
                'In a small bowl combine coconut flour, almond flour, baking powder, baking soda, salt and cinnamon). Set aside.'
            },
            {
              text:
                'In a large, glass mixing bowl melt together coconut oil and almond butter (for about 1 minute on high), stir until combined.'
            },
            {
              text:
                'Add mashed banana, maple syrup and vanilla extract and mix.'
            },
            { text: 'Add eggs and stir until smooth.' },
            {
              text:
                'Add dry ingredients to wet ingredients and mix until completely combined.'
            },
            { text: 'Gently mix in chocolate chips.' },
            {
              text:
                'Pour batter into prepared pan and bake for 30-40 minutes, until top is set and a toothpick inserted in the center comes out clean.'
            },
            {
              text:
                'Let cool in the pan for 5 minutes before gently removing the loaf from the pan to a wire rack to cool.'
            },
            { text: 'Enjoy!' }
          ]
        }
      ])
    })
  })

  describe('www.ambitiouskitchen.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'www.ambitiouskitchen.com/chocolate-chip-coconut-flour-pumpkin-bars.html'
      )
      result = await importer(source)
    })

    test('title', () => {
      expect(result.title).toEqual(
        'Chocolate Chip Coconut Flour Pumpkin Bars | Ambitious Kitchen'
      )
    })

    test('description', () => {
      expect(result.description).toEqual(
        'Incredible paleo chocolate chip coconut flour pumpkin bars that taste like pumpkin pie. Healthy enjoy to enjoy as a snack but indulgent like a dessert.'
      )
    })

    test('image_url', () => {
      expect(result.image_url).toEqual(
        'https://www.ambitiouskitchen.com/wp-content/uploads/2015/09/Chocolate-Pumpkin-Bars-2.jpg'
      )
    })

    test('yield', () => {
      expect(result.yield).toEqual('12 bars')
    })

    test.skip('duration', () => {
      expect(result.duration).toEqual(1800)
    })

    test('ingredient_lists', () => {
      expect(result.ingredient_lists).toEqual([
        {
          lines: [
            {
              name: 'canned pumpkin puree',
              optional: false,
              preparation: undefined,
              quantity_denominator: 1,
              quantity_numerator: 1,
              unit: 'c'
            },
            {
              name: 'pure maple syrup',
              optional: false,
              preparation: undefined,
              quantity_denominator: 4,
              quantity_numerator: 1,
              unit: 'c'
            },
            {
              name: 'vanilla extract',
              optional: false,
              preparation: undefined,
              quantity_denominator: 1,
              quantity_numerator: 1,
              unit: 'tsp'
            },
            {
              name: 'almond butter (or nut butter of choice)',
              optional: false,
              preparation: undefined,
              quantity_denominator: 4,
              quantity_numerator: 1,
              unit: 'c'
            },
            {
              name: 'unsweetened almond milk',
              optional: false,
              preparation: undefined,
              quantity_denominator: 1,
              quantity_numerator: 1,
              unit: 'tbsp'
            },
            {
              name: 'eggs',
              optional: false,
              preparation: undefined,
              quantity_denominator: 1,
              quantity_numerator: 2,
              unit: undefined
            },
            {
              name: 'coconut flour',
              optional: false,
              preparation: undefined,
              quantity_denominator: 2,
              quantity_numerator: 1,
              unit: 'c'
            },
            {
              name: 'baking soda',
              optional: false,
              preparation: undefined,
              quantity_denominator: 4,
              quantity_numerator: 3,
              unit: 'tsp'
            },
            {
              name: 'salt',
              optional: false,
              preparation: undefined,
              quantity_denominator: 8,
              quantity_numerator: 1,
              unit: 'tsp'
            },
            {
              name: 'cinnamon',
              optional: false,
              preparation: undefined,
              quantity_denominator: 1,
              quantity_numerator: 1,
              unit: 'tsp'
            },
            {
              name: 'ginger',
              optional: false,
              preparation: undefined,
              quantity_denominator: 2,
              quantity_numerator: 1,
              unit: 'tsp'
            },
            {
              name: 'nutmeg',
              optional: false,
              preparation: undefined,
              quantity_denominator: 4,
              quantity_numerator: 1,
              unit: 'tsp'
            },
            {
              name: 'ground cloves',
              optional: false,
              preparation: undefined,
              quantity_denominator: 8,
              quantity_numerator: 1,
              unit: 'tsp'
            },
            {
              name: 'dark chocolate chips, divided',
              optional: false,
              preparation: undefined,
              quantity_denominator: 2,
              quantity_numerator: 1,
              unit: 'c'
            }
          ]
        }
      ])
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            {
              text:
                'Preheat oven to 350 degrees F. Line an 8x8 inch baking pan with parchment paper and spray with nonstick cooking spray.'
            },
            {
              text:
                'Add pumpkin puree, maple syrup, vanilla extract, almond butter, almond milk and eggs to a large bowl and mix until well combined, smooth and creamy.'
            },
            {
              text:
                'Add in coconut flour, baking soda, salt and the remaining spices. Gently fold in 1/3 cup of chocolate chips into the batter. Spread batter evenly in prepared pan. Bake for 20-25 minutes or until toothpick comes out clean in the middle. Transfer pan to a wire rack to cool.'
            },
            {
              text:
                "Melt remaining 1/4 cup of chocolate chip in a small saucepan over low heat. Once completely melted, drizzle the chocolate over the bars. Another option is to sprinkle the remaining chocolate over the top of the bars right when they come out of the oven. It's up to you! Cut into 12 bars. Enjoy!"
            }
          ]
        }
      ])
    })
  })

  describe('www.becomingness.com.au', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'www.becomingness.com.au/slow-cooker-butter-chicken.html'
      )
      result = await importer(source)
    })

    test('title', () => {
      expect(result.title).toEqual('Slow Cooker Butter Chicken')
    })

    test('description', () => {
      expect(result.description).toEqual(
        'My healthy slow cooker butter chicken is one of the tastiest slow cooker meals ever. It is so easy to prepare too.'
      )
    })

    test('image_url', () => {
      expect(result.image_url).toEqual(
        'https://www.becomingness.com.au/wp-content/uploads/2018/06/Slow-cooker-butter-chicken-4.jpg'
      )
    })

    test('yield', () => {
      expect(result.yield).toEqual('4-6')
    })

    test('duration', () => {
      expect(result.duration).toBeUndefined()
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            {
              text: 'Heat coconut oil in a large saucepan on medium high heat'
            },
            {
              text:
                'Add onion and garlic, cook, stirring frequently for approximately 3 minutes or until the onions have become translucent.'
            },
            {
              text:
                'Add coconut milk, tomato paste, tapioca flour, garam masala, curry powder, chili powder and ginger powder, stirring until well combined and the sauce has started to thicken. Season with salt and pepper.'
            },
            {
              text:
                'Add chicken to the slow cooker, then add the sauce and mix through the chicken'
            },
            {
              text: 'Cover and cook on low heat for 5 hours.'
            },
            {
              text:
                'Serve with the coriander and your favourite sides (mine with quinoa).'
            }
          ]
        }
      ])
    })
  })

  describe('paleoleap.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'paleoleap.com/flourless-banana-pancakes.html'
      )
      result = await importer(source)
    })

    test('ingredient_lists', () => {
      expect(result.ingredient_lists).toEqual([
        {
          lines: [
            {
              name: 'large ripe bananas;',
              quantity_numerator: 3,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'eggs;',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'vanilla extract;',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'ground cinnamon;',
              quantity_numerator: 1,
              quantity_denominator: 4,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'baking powder;',
              quantity_numerator: 1,
              quantity_denominator: 8,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'Maple syrup',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: '',
              optional: true,
              unit: undefined
            },
            {
              name: 'Fresh fruits',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: '',
              optional: true,
              unit: undefined
            }
          ]
        }
      ])
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            { text: 'Crack the eggs in a bowl and whisk them.' },
            {
              text:
                'In another bowl, lightly mash the bananas with a potato masher or a fork.'
            },
            {
              text:
                'Add the egg, the baking powder,  the vanilla, and the cinnamon to the mashed bananas and stir to combine.'
            },
            {
              text:
                'Pour about 2 tablespoons of the batter at a time onto a skillet placed over a medium-low heat and cook until the bottom appears set (1 to 2 minutes). Flip with a spatula and cook another minute.'
            },
            {
              text:
                'Serve immediately, topped with fresh fruit and maple syrup (if you like).'
            }
          ]
        }
      ])
    })
  })

  describe('www.wellplated.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'www.wellplated.com/no-bake-protein-balls.html'
      )
      result = await importer(source)
    })

    test('title', () => {
      expect(result.title).toEqual('No Bake Cookie Dough Protein Balls')
    })

    test('description', () => {
      expect(result.description).toEqual(
        `If you’ve ever wondered why chocolate chip cookies have to contain calories (can’t we delegate that task to celery sticks?), these Cookie Dough No Bake Protein Balls are for you! Clean-eating approved, low carb, and protein-packed, these healthy energy bites taste like chocolate chip cookie dough but are made entirely from wholesome, good-for-you ingredients. Translation: with this protein ball recipe, cookie dough is a health food. Celery, consider yourself replaced. As someone who mutates into Oscar the Grouch when she’s hungry, I’m constantly looking for easy, healthy snack ideas. Call it hanger-management. These Cookie Dough Protein Balls are everything I`
      )
    })

    test('image_url', () => {
      expect(result.image_url).toEqual(
        'https://www.wellplated.com/wp-content/uploads/2016/07/Protein-Balls.jpg'
      )
    })

    test('yield', () => {
      expect(result.yield).toBeUndefined()
    })

    test('duration', () => {
      expect(result.duration).toBeUndefined()
    })

    test('ingredient_lists', () => {
      expect(result.ingredient_lists).toEqual([
        {
          lines: [
            {
              name: 'natural almond butter',
              optional: false,
              preparation: undefined,
              quantity_denominator: 2,
              quantity_numerator: 1,
              unit: 'c'
            },
            {
              name: 'vanilla whey protein powder',
              optional: false,
              preparation:
                'about 2 scoops—use plant-based protein powder to make dairy free',
              quantity_denominator: 2,
              quantity_numerator: 1,
              unit: 'c'
            },
            {
              name: 'coconut flour*',
              optional: false,
              preparation: 'plus 1-2 tablespoons additional as needed',
              quantity_denominator: 3,
              quantity_numerator: 1,
              unit: 'c'
            },
            {
              name: 'honey',
              optional: false,
              preparation: 'or pure maple syrup',
              quantity_denominator: 2,
              quantity_numerator: 3,
              unit: 'tbsp'
            },
            {
              name: 'pure vanilla extract',
              optional: false,
              preparation: undefined,
              quantity_denominator: 1,
              quantity_numerator: 1,
              unit: 'tsp'
            },
            {
              name: 'cinnamon',
              optional: false,
              preparation: undefined,
              quantity_denominator: 4,
              quantity_numerator: 1,
              unit: 'tsp'
            },
            {
              name:
                '-4\ntablespoons\nAlmond Breeze Unsweetened Vanilla Almondmilk',
              optional: false,
              preparation: undefined,
              quantity_denominator: 1,
              quantity_numerator: 2,
              unit: undefined
            },
            {
              name: 'dark chocolate chips',
              optional: false,
              preparation: 'dairy free if needed',
              quantity_denominator: 1,
              quantity_numerator: 2,
              unit: 'tbsp'
            }
          ]
        }
      ])
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            {
              text:
                'In a large bowl, stir together the almond butter, protein powder, 1/3 cup coconut flour, honey, vanilla extract, cinnamon, and 2 tablespoons almondmilk. Stir until the mixture forms a dough that is soft enough to roll into balls, but not overly sticky. Add additional coconut flour or almondmilk as needed to make the mixture more or less dry. Stir in the chocolate chips.'
            },
            {
              text:
                'Roll into 12 balls. Enjoy immediately or store in the refrigerator for later.'
            }
          ]
        }
      ])
    })
  })

  describe('therealfoodrds.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'therealfoodrds.com/cauliflower-buffalo-bites.html'
      )
      result = await importer(source)
    })

    test('ingredient_lists', () => {
      expect(result.ingredient_lists).toEqual([
        {
          lines: [
            {
              name: 'large head of cauliflower, stems removed (or 2',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: '10 oz. bag cauliflower florets)',
              optional: false,
              unit: undefined
            },
            {
              name: 'Frank’s Red Hot Sauce',
              quantity_numerator: 1,
              quantity_denominator: 3,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'ghee',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tbsp'
            },
            {
              name: 'coconut aminos',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tbsp'
            },
            {
              name: 'apple cider vinegar',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'garlic powder',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'cayenne pepper',
              quantity_numerator: 1,
              quantity_denominator: 4,
              preparation: undefined,
              optional: true,
              unit: 'tsp'
            },
            {
              name: 'Ranch for dipping (Homemade Ranch or Whole30 Compliant)',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'Parsley or green onions, chopped',
              quantity_numerator: undefined,
              quantity_denominator: undefined,
              preparation: undefined,
              optional: true,
              unit: undefined
            }
          ]
        }
      ])
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            {
              text:
                'Preheat oven to 425 degrees. Line baking sheet with parchment.'
            },
            {
              text:
                'Make buffalo sauce by placing small saucepan over medium heat and adding the hot sauce, ghee, coconut aminos, apple cider vinegar, garlic powder and optional cayenne. Once ghee is melted, whisk well to combine or transfer to small food processor or blender and process until smooth.'
            },
            {
              text:
                'In a large bowl combine the cauliflower florets and 1/4-1/3 cup of the buffalo sauce. Toss to coat.'
            },
            {
              text:
                'Transfer cauliflower to the sheet pan and bake for 15-17 min tossing 1/2 through baking time.'
            },
            {
              text:
                'When done, remove from oven, transfer to serving dish and drizzle with remaining buffalo sauce. Top with green onions and/or parsley and serve with ranch for dipping.'
            }
          ]
        }
      ])
    })
  })

  describe('whatmollymade.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'whatmollymade.com/fudgy-paleo-brownies.html'
      )
      result = await importer(source)
    })

    test('ingredient_lists', () => {
      expect(result.ingredient_lists).toEqual([
        {
          lines: [
            {
              name: 'creamy almond butter',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'coconut sugar',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'pure maple syrup',
              quantity_numerator: 1,
              quantity_denominator: 3,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'vanilla extract',
              quantity_numerator: 1,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'eggs + 1 egg yolk',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: undefined
            },
            {
              name: 'unsweetened cocoa powder',
              quantity_numerator: 1,
              quantity_denominator: 3,
              preparation: undefined,
              optional: false,
              unit: 'c'
            },
            {
              name: 'coconut flour',
              quantity_numerator: 2,
              quantity_denominator: 1,
              preparation: undefined,
              optional: false,
              unit: 'tbsp'
            },
            {
              name: 'baking soda',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'salt',
              quantity_numerator: 1,
              quantity_denominator: 2,
              preparation: undefined,
              optional: false,
              unit: 'tsp'
            },
            {
              name: 'dark chocolate baking bar chopped',
              quantity_numerator: 1,
              quantity_denominator: 3,
              preparation: undefined,
              optional: false,
              unit: undefined
            }
          ]
        }
      ])
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            {
              text:
                'Preheat oven to 350°F. Line and grease a square baking pan (8x8 or 9x9 inch) with parchment paper nonstick cooking spray. Set aside.'
            },
            {
              text:
                'In a large bowl, combine the almond butter, coconut sugar, maple syrup, vanilla extract, eggs and egg yolk until smooth and well combined. Gently fold in cocoa powder, coconut flour, salt and baking soda until there are no clumps. Fold in 1/3 cup chocolate chips or chopped chocolate into the batter. The batter will be thick.'
            },
            {
              text:
                'Pour and spread batter evenly into the prepared baking pan. Bake for 25-30 minutes or until knife inserted into the middle comes out mostly clean (some crumbs are okay). Be careful not to overbake!'
            },
            {
              text:
                'Remove and cool on a wire rack for 10-15 minutes. Grab parchment paper on the sides and lift the brownies out of the pan to cool completely.'
            }
          ]
        }
      ])
    })
  })

  describe('blog.nuts.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'blog.nuts.com/gluten-free-almond-cake-recipe.html'
      )
      result = await importer(source)
    })

    test('image_url', () => {
      expect(result.image_url).toEqual(
        'https://blog.nuts.com/wp-content/uploads/2015/02/gluten-free-almond-cake-slice-feature.jpg'
      )
    })
  })

  describe('littlespicejar.com', () => {
    let result
    beforeAll(async () => {
      const source = await testAsset(
        'littlespicejar.com/caramelized-onion-feta-spinach-pizza-with-white-sauce.html'
      )
      result = await importer(source)
    })

    test('procedure_lists', () => {
      expect(result.procedure_lists).toEqual([
        {
          lines: [
            {
              text:
                'Heat a tablespoon of olive oil in a medium skillet over medium heat. Add the baby spinach and saute until just wilted. Transfer the spinach to a strainer and using the bottom of a glass, press out some of the excess liquid from the spinach, set aside.'
            },
            {
              text:
                'Add another tablespoon of olive oil to the same skillet and saute the mushrooms for 3-4 minutes or until they brown just barely. Season with a little salt and pepper, remove to a plate.'
            },
            {
              text:
                'Add the last tablespoon of olive oil to the skillet set over medium heat. Add the onions and season them with a small pinch of salt. Allow the onions to cook down for 10 minutes, stirring as necessary. Do not allow the onions to brown. Add the sugar and stir to coat evenly. Allow the onions to cook for another 10 minutes. When the onions have cooked down, add the balsamic vinegar and stir to combine, set aside.'
            },
            {
              text:
                'Position a rack in the center of the oven and preheat the oven to 475ºF. Flatten the pizza dough into a 12-inch circle. Create a lip or rim by thickening the dough around the crust portion. This keeps the sauce in instead of running over the sides. Transfer dough carefully to a parchment lined baking sheet. Let dough rest for 10-15 minutes.'
            },
            {
              text:
                'In a small saucepan, melt the butter and add the flour and garlic and allow to cook for 1-2 minutes. Do not let the flour brown. Continue to whisk as you add in the warm milk. Add the parmesan cheese, and a small pinch of nutmeg if desired. Season with salt and pepper to taste. When the sauce just barely reaches a boil, remove from heat.'
            },
            {
              text:
                'Top the prepared pizza dough with sauce, leaving the ‘lip’ sauceless. Sprinkle on three-quarters of the mozzarella cheese, followed by the mushrooms, spinach, and caramelized onions, and finish with the remaining mozzarella and feta cheese. Allow the pizza to bake for 10-15 minutes. You can turn the broiler on for the last minute of cooking if you’d like your edges and cheese to be a little browner.'
            }
          ]
        }
      ])
    })
  })
})
