let menuSchema = {
  id : 'number',
  menu : {
    category : [{
      name : 'string',
      subcategory : [{
        name : 'string',
        meal : [{
          name : 'string',
          price : 'number',
          description : 'string',
        }, meal2, meal3, ...]
      }, subcategory2, subcategory3, ...]
    }, category2, category3, ...]
  }
}