const Annotations = require('../models/AnnotationData')

module.exports = {
    async update(request,response){
        const {id} = request.params;
        const {notes} = request.body;

        const annotations = await Annotations.findOne({_id:id})
        if(notes){
            annotations.notes = notes
            await annotations.save();

        }
        return response.json(annotations)

    }
}