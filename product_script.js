var CRM_detail_button = document.getElementById("crm_detail_button");
var ERP_detail_button = document.getElementById("erp_detail_button");
var CMS_detail_button = document.getElementById("cms_detail_button");
var home = document.getElementById("home");
var products = document.getElementById("products");
var trainers = document.getElementById("trainers");
var contact = document.getElementById("contact");
var crm_detail = document.getElementById("crm_detail");
var erp_detail = document.getElementById("erp_detail");
var cms_detail = document.getElementById("cms_detail");

CRM_detail_button.onclick = function () {
    crm_detail.innerHTML = "نظام إلكتروني متكامل لإدارة علاقات الشركة مع العملاء ( زبائن – موردين – موظفين – شركات منافسة – شركات مساعدة )";
}
ERP_detail_button.onclick = function () {
    erp_detail.innerHTML = "نظام إلكتروني متكامل لإدارة العمليات المحاسبية والمستودعية في الشركة";
}
CMS_detail_button.onclick = function () {
    cms_detail.innerHTML = "نظام إلكتروني متكامل لأرشفة عمليات القبض والدفع لقسم الصندوق أو الخزينة في الشركة";
}
home.onmouseover = function () {
    home.style.color = "blue";
}
home.onmouseleave = function () {
    home.style.color = "gray";
}
home.onclick = function () {
    home.style.color = "blue";
}
products.onclick = function () {
    home.style.color = "blue";
}
trainers.onclick = function () {
    home.style.color = "blue";
}
contact.onclick = function () {
    home.style.color = "blue";
}
products.onmouseover = function () {
    products.style.color = "blue";
}
products.onmouseleave = function () {
    products.style.color = "gray";
}
trainers.onmouseover = function () {
    trainers.style.color = "blue";
}
trainers.onmouseleave = function () {
    trainers.style.color = "gray";
}
contact.onmouseover = function () {
    contact.style.color = "blue";
}
contact.onmouseleave = function () {
    contact.style.color = "gray";
}


