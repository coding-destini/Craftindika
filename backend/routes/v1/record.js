const router = require('express').Router();
const RecordController =  require('../../controllers/RecordController')


//get all record
router.get('/getall',RecordController.getAllRecords);

// add record
router.post('/add', RecordController.addRecord);

// delete record
router.delete('/:id',RecordController.deleteRecord);

//get salary summary 
router.get('/salary-summary',RecordController.getSalaryStatics);

//get contract summary 
router.get('/contract-summary',RecordController.getContractStatics);

//get departmental salary
router.get('/department-summary',RecordController.getDepartmentalSalary);

//get detailed salary 
router.get('/detailed-department-summary',RecordController.getDepartmentalSalaryDetailed);

module.exports = router;