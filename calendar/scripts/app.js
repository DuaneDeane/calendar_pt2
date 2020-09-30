
var visible = false;
var important = false;
var showIcon = '<i class="fas fa-eye"></i>'
var hideIcon = '<i class="fas fa-eye-slash"></i>'
var UI = {};
var taskList = [];

function showDetails() {
    console.log("btn clicked!");

    if(!visible) {
        UI.secForm.removeClass("invisible");
        UI.backRight.addClass("split right");
        UI.btnShow.html(hideIcon + "Hide details");
        visible = true;
    }
    else {
        UI.secForm.addClass("invisible");
        UI.backRight.removeClass("split right");
        UI.btnShow.html(showIcon + "Show details");
        visible = false;
    }
}

function toggleImportant() {
    if(!important) {
        UI.btnImportant.removeClass('far');
        UI.btnImportant.addClass("fas active");
        important = true;
    }
    else {
        UI.btnImportant.removeClass("fas active");
        UI.btnImportant.addClass("far");
        important = false;
    }
}

function saveTask() {
    var title = UI.txtTitle.val()
    var date = UI.txtDate.val()
    var description = UI.txtDescription.val()
    var alert = UI.txtAlert.val()
    var location = UI.txtLocation.val()

    var task = new Task(title,important,date,description,alert,location)
    taskList.push(task);
    clearForm();

    console.log(taskList);
}

function clearForm() {
   $(".control").val('');
   UI.btnImportant.removeClass("fas active");
   UI.btnImportant.addClass("far");
}

function init() {
    console.log("main page");

    UI = {
        btnShow: $("#btnShow"),
        btnImportant: $("#btnImportant"),
        secForm: $("#secForm"),
        backRight: $("#backRight"),
        btnSave: $("#btnSave"),
        txtTitle: $("#txtTitle"),
        txtDate: $("#txtDate"),
        txtDescription: $("#txtDescription"),
        txtAlert: $("#txtAlert"),
        txtLocation: $("#txtLocation")
    };

    // get data from servers
    // hook events
    UI.btnShow.click(showDetails);
    UI.btnImportant.click(toggleImportant);
    UI.btnSave.click(saveTask);
}


window.onload = init;