const express = require('express');
const router=express.Router();
const TodoController=require('../controllers/todosController.js')

router.get('/',TodoController.getAllDoc)
router.post('/',TodoController.createDoc)
router.put('/:id',TodoController.updateDocById)
router.delete('/:id',TodoController.deleteDocById)

module.exports=router