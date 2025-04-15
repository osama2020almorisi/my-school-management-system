document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // هنا يمكنك إضافة منطق تسجيل الدخول
    alert('تم تسجيل الدخول بنجاح!');
});


document.getElementById('addEmployeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // هنا يمكنك إضافة منطق إضافة الموظف
    alert('تم إضافة الموظف بنجاح!');
});


document.getElementById('editEmployeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // هنا يمكنك إضافة منطق تعديل بيانات الموظف
    alert('تم تحديث بيانات الموظف بنجاح!');
});


document.getElementById('settingsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // هنا يمكنك إضافة منطق تحديث إعدادات الحساب
    alert('تم تحديث إعدادات الحساب بنجاح!');
});



const employees = [
    { name: "بدر محمد احمد الطبشي", financialId: "609778376903", status: "ثابت ومستمر", job: "مدير مدرسة", school: "14 اكتوبر بيت الحضرمي" },
    { name: "احمد محمد صالح حسين الرقه", financialId: "609772253859", status: "ثابت ومستمر", job: "مدرس", school: "14 اكتوبر بيت الحضرمي" },
    // أضف المزيد من البيانات هنا
];

function loadEmployees() {
    const tableBody = document.getElementById('employeesTable').getElementsByTagName('tbody')[0];
    employees.forEach(employee => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = employee.name;
        row.insertCell(1).innerText = employee.financialId;
        row.insertCell(2).innerText = employee.status;
        row.insertCell(3).innerText = employee.job;
        row.insertCell(4).innerText = employee.school;
        row.insertCell(5).innerHTML = '<button onclick="requestEdit(\'' + employee.financialId + '\')">تعديل</button>';
    });
}

function exportData() {
    // هنا يمكنك استخدام مكتبات مثل jsPDF أو SheetJS لتصدير البيانات إلى PDF أو Excel
    alert('تصدير البيانات الآن...');
}

function requestEdit(financialId) {
    // هنا يمكنك فتح نموذج لتعديل بيانات الموظف
    alert('طلب تعديل البيانات للموظف برقم الهوية: ' + financialId);
}

// تحميل البيانات عند فتح الصفحة
window.onload = loadEmployees;


function exportData() {
    const doc = new jsPDF();
    let content = "اسم الموظف, الرقم المالي, الحالة الوظيفية, الوظيفة, المدرسة\n";
    employees.forEach(employee => {
        content += `${employee.name}, ${employee.financialId}, ${employee.status}, ${employee.job}, ${employee.school}\n`;
    });
    doc.text(content, 10, 10);
    doc.save('employees_report.pdf');
}



const employees = [
    { name: "بدر محمد احمد الطبشي", financialId: "609778376903", status: "ثابت ومستمر", job: "مدير مدرسة", school: "14 اكتوبر بيت الحضرمي" },
    { name: "احمد محمد صالح حسين الرقه", financialId: "609772253859", status: "ثابت ومستمر", job: "مدرس", school: "14 اكتوبر بيت الحضرمي" },
    // أضف المزيد من البيانات هنا...
];

function loadEmployees() {
    const tableBody = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    employees.forEach(employee => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = employee.name;
        row.insertCell(1).innerText = employee.financialId;
        row.insertCell(2).innerText = employee.status;
        row.insertCell(3).innerText = employee.job;
        row.insertCell(4).innerText = employee.school;
    });
}

function searchEmployees() {
    const searchType = document.getElementById('searchType').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const tableBody = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    
    // تنظيف الجدول قبل عرض النتائج
    tableBody.innerHTML = '';

    const filteredEmployees = employees.filter(employee => {
        if (searchType === 'name') {
            return employee.name.toLowerCase().includes(searchInput);
        } else if (searchType === 'financialId') {
            return employee.financialId.includes(searchInput);
        } else if (searchType === 'job') {
            return employee.job.toLowerCase().includes(searchInput);
        } else if (searchType === 'school') {
            return employee.school.toLowerCase().includes(searchInput);
        }
        return false;
    });

    filteredEmployees.forEach(employee => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = employee.name;
        row.insertCell(1).innerText = employee.financialId;
        row.insertCell(2).innerText = employee.status;
        row.insertCell(3).innerText = employee.job;
        row.insertCell(4).innerText = employee.school;
    });

    if (filteredEmployees.length === 0) {
        alert('لا توجد نتائج مطابقة.');
    }
}

// تحميل البيانات عند فتح الصفحة
window.onload = loadEmployees;



const requests = []; // مصفوفة لتخزين الطلبات

function submitRequest() {
    const requestType = document.getElementById('requestType').value;
    const requestDetails = document.getElementById('requestDetails').value;
    const date = new Date().toLocaleDateString(); // الحصول على تاريخ اليوم

    // إضافة الطلب إلى المصفوفة
    requests.push({
        type: requestType,
        details: requestDetails,
        date: date,
        status: 'معلق' // الحالة الافتراضية
    });

    // إعادة تعيين النموذج
    document.getElementById('requestForm').reset();

    // يمكنك هنا إضافة كود لتأكيد رفع الطلب، مثل رسالة تنبيه أو تحديث واجهة المستخدم
    alert('تم رفع الطلب بنجاح!');
}

function exportData() {
    const table = document.getElementById("employeesTable");
    let csvContent = "data:text/csv;charset=utf-8,";
    
    for (let row of table.rows) {
        let rowData = Array.from(row.cells).map(cell => cell.innerText).join(",");
        csvContent += rowData + "\r\n";
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "employees_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function exportData() {
    const table = document.getElementById("resultsTable");
    let csvContent = "data:text/csv;charset=utf-8,";
    
    for (let row of table.rows) {
        let rowData = Array.from(row.cells).map(cell => cell.innerText).join(",");
        csvContent += rowData + "\r\n";
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "employees_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

