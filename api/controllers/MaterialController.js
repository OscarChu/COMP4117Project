/**
 * MaterialController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    materialsearch: async function (req, res) {
        var models = await Material.find().sort([{id:'DESC'}]);
        return res.view('material/materialsearch', { material: models});
    },
  

};

