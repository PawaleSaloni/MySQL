//mysql database CRUD operations functionality
//insert, update, delete, etc  


'user strict';
var sql = require('./mysqlconnect');

//define model
var QuestionBank = function(question) {
    this.subjectId = question.subjectId;
    this.title = question.title;
    this.a = question.a;
    this.b = question.b;
    this.c = question.c;
    this.d = question.d;
    this.answerKey = question.answerKey;
    this.evaluationCriteria = question.evaluationCriteria
};

// Get all questions
QuestionBank.getAllQuestions = function (result) {
    sql.query("SELECT * FROM questionbank", function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

/*Task.createTask = function(newTask,result) {
    sql.query("INSERT INTO tasks set ?",newTask, function(err, res) {
        if (err) {
            console.log("error:",err);
            result(err, null);
        }else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};*/

QuestionBank.getQuestionById = function(questionId,result) {
    sql.query("select * from questionbank where id = ?", questionId, function(err, res) {
        if (err) {
            console.log("error:",err);
            result(err, null);
        }else {
            result(null, res);
        }
    });
};

/*Task.updateById= function(id,task,result) {
    sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task,id],
        function(err,res) {
        if (err) {
            console.log("error:",err);
            result(null, err);
        }else {
            result(null, res);
        }
    });
};

Task.remove = function(id,task,result) {
    sql.query("DELETE FROM  tasks WHERE id = ?",[id],function(err,res) {
        if (err) {
            console.log("error:",err);
            result(null, err);
        }else {
            result(null, res);
        }
    });
};*/
module.exports = QuestionBank;