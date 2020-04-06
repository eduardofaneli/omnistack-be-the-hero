const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  index() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      })
    })
  },

  create() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required().min(10),
        value: Joi.number().required(),        
      })
    })
  },

  delete() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
      })
    })
  },

}