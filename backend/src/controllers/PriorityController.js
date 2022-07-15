const Annotations = require('../models/AnnotationData')

module.exports = {
    
    async read(request,response){
        const priority = request.query
        const priorityNotes = await Annotations.find(priority)
        return response.json(priorityNotes)
    },

    async update(request, response){
        const {id} = request.params
        const annotations = await Annotations.findOne({_id:id})
        if(annotations.priority){
            annotations.priority = false
        }
        else{
            annotations.priority = true
        }
        await annotations.save()
        return response.json(annotations)
    }

}