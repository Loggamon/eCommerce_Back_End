const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const TagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if(!TagData) {
      res.status(404).json({message: "No category that matches that id!"})
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => {
      if (req.body.productIds.length) {
        const taggedProductIdArr = req.body.productIds.map((product_id) => {
          return {
            tag_id: tag.id,
            product_id
          }
        })
      }
    })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      //id: req.body.id,
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    })
    .then((tag) => {
      return ProductTag.findAll({ where: { tag_id: req.params.id } });
    })
    .then((taggedProducts) => {
      const taggedProductIds = taggedProducts.map(({ product_id }) => product_id);
      const NewTaggedProducts = req.body.productIds
        .filter((product_id) => !taggedProductIds.includes(product_id))
        .map(({ product_id }) => {
          return {
            tag_id: req.params.id,
            product_id,
          };
        });
      const taggedProductsToRemove = taggedProducts
        .filter(({ product_id }) => !req.body.productIds.includes(product_id))
        .map(({ id }) => id);

      return Promise.all([
        ProductTag.destroy({ where: { id: taggedProductsToRemove } }),
        ProductTag.bulkCreate(NewTaggedProducts),
      ]);
    })
    .then((updatedTaggedProducts) => res.status(200).json(updatedTaggedProducts))
    .catch((err) => {
      res.status(400).json(err)
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
