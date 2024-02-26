const Record = require('../models/record');
const calculateMean = require('../config/getMeanSalary')


//get All Records
module.exports.getAllRecords = async(req,res)=>{
  try {
    const allRecords = await Record.find();

    // Send the fetched records as a response
    return res.status(200).json({
      message: "Records fetched successfully",
      records: allRecords,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in fetching records",
      error: error.message,
    });
  }
}

// API for Adding a Record
module.exports.addRecord = async (req, res) => {
  try {
    const newRecord = new Record(req.body);
    //Create Record
    const savedRecord = await Record.create(newRecord);
    // send success status
    return res.status(201).json({
      message: "Record created Sucessfully",
      Record: savedRecord,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in Creating Record",
    });
  }
};


//Delete Record
module.exports.deleteRecord = async (req, res) => {
  try {
    const RecordId = req.params.id;

    const DeletedRecord = await Record.findByIdAndDelete(RecordId);

    //return success
    return res.status(200).json({
      message: "Record Deleted Successfully",
      Deleted_Record: DeletedRecord,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in Deleting Record",
    });
  }
};

//Api for salary summary statics
module.exports.getSalaryStatics = async (req, res) => {
  try {
    const salaries = await Record.find({}, 'salary');

    if (salaries.length === 0) {
      return res.status(404).send("No salary records found.");
    }

    const salary = salaries.map(record => record.salary);

    const mean = calculateMean(salary);
    const min = Math.min(...salary);
    const max = Math.max(...salary);

    res.send({
      meanSalary: mean,
      minSalary: min,
      maxSalary: max
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};


// get Contract-based Salary SS
module.exports.getContractStatics = async (req, res) => {
  try {
    const salaries = await Record.find({ on_contract: true }, 'salary');
    if (salaries.length === 0) {
      return res.status(404).send("No salary records found.");
    }

    const salary = salaries.map(record => record.salary);

    const mean = calculateMean(salary);
    const min = Math.min(...salary);
    const max = Math.max(...salary);

    res.send({
      meanSalary: mean,
      minSalary: min,
      maxSalary: max
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

//get Departmental salary 
module.exports.getDepartmentalSalary = async (req, res) => {
  try {
    //get unique department in department field using distinct
    const departments = await Record.distinct('department');
    const departmentSalary = [];

    for (let department of departments) {
      const salaries = await Record.find({ department }, 'salary');
      // console.log("My salary",salaries);
      const salary = salaries.map(record => record.salary);

      const mean = calculateMean(salary);
      const min = Math.min(...salary);
      const max = Math.max(...salary);

      departmentSalary.push({
        department,
        meanSalary: mean,
        minSalary: min,
        maxSalary: max
      });
    }

    res.send(departmentSalary);
  } catch (err) {
    res.status(500).send(err);
  }
}

//get API for Detailed Departmental Salary SS
module.exports.getDepartmentalSalaryDetailed = async (req, res) => {
  try {
    const departments = await Record.distinct('department');
    const detailedDepartment = [];

    for (let department of departments) {
      const subDepartments = await Record.distinct('sub_department', { department });
      const SalaryData = {
        department,
        sub_departments: []
      };

      for (let sub_department of subDepartments) {
        const salaries = await Record.find({ department, sub_department }, 'salary');
        const salary = salaries.map(record => record.salary);
      
        const mean = calculateMean(salary);
        const min = Math.min(...salary);
        const max = Math.max(...salary);
      
        const subDepartmentData = {
          sub_department,
          meanSalary: mean,
          minSalary: min,
          maxSalary: max
        };
      
        SalaryData.sub_departments.push(subDepartmentData);
      }
      

      detailedDepartment.push(SalaryData);
    }

    res.send(detailedDepartment);
  } catch (err) {
    res.status(500).send(err);
  }
}