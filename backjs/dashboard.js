
var arrays = [
    {name:"Bài Thi Số 1", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 2", type_test:"Cuối Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 3", type_test:"Giữa Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 1", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 2", type_test:"Cuối Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 3", type_test:"Giữa Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 1", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 2", type_test:"Cuối Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 3", type_test:"Giữa Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 1", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 2", type_test:"Cuối Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 3", type_test:"Giữa Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 1", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 2", type_test:"Cuối Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 3", type_test:"Giữa Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 1", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 2", type_test:"Cuối Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 3", type_test:"Giữa Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 1", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 2", type_test:"Cuối Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 3", type_test:"Giữa Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 1", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 2", type_test:"Cuối Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
    {name:"Bài Thi Số 3", type_test:"Giữa Kỳ", type_class:"test train-type", date:"06/07/2023",date_create:"05/09/2026", cnt_test:"100"},
   
   
   

    

];


for(var i = 0; i < arrays.length; i++){
    var table_test = document.getElementById("table-test");
    table_test.innerHTML += `
    <tr id = "row-${i+1}">
                                <td><input class="checkbox" id="checkbox-${i+1}" type="checkbox"></td>
                                <td><p>${arrays[i].name}</p></td>
                                <td><p>${arrays[i].type_test}</p></td>
                                <td><p>${arrays[i].date}</p></td>
                                <td><p>${arrays[i].date_create}</p></td>
                                <td><p>${arrays[i].cnt_test}</p></td>
    </tr>
    `

};





function select_all(){

    var table_test = document.getElementById("table-test");
    var allcheck = document.querySelectorAll('input[type="checkbox"]');
    
    allcheck.forEach(element => {
        element.checked = true;
    })
}


function un_select_all(){

    var table_test = document.getElementById("table-test");
    var allcheck = document.querySelectorAll('input[type="checkbox"]');
    
    allcheck.forEach(element => {
        element.checked = false;
    })
}


function btn_delete_row(){

    var table_test = document.getElementById("table-test");
    var allcheck = document.querySelectorAll('input[type="checkbox"]');
    
    for(var i = 0; i < allcheck.length; i++){
        if(allcheck[i].checked){
            deleteRow(`row-${i+1}`);
        }
    }
}




function deleteRow(rowid) {
    var row = document.getElementById(rowid);
    
    // Kiểm tra xem hàng có tồn tại không
    if (row) {
        // Nếu tồn tại, thì xóa nó khỏi cấu trúc DOM bằng cách gọi phương thức remove()
        row.remove();
    } else {
        // Nếu không tồn tại, hiển thị một thông báo lỗi
        console.error('Không tìm thấy hàng có ID', rowid);
    }
}



function checkbtn(params,stt){
    for(var i = 1; i<= 4; i++){
        if(params === i.toString()){
            var btn = document.getElementById(`btn${i}-cau-${stt}`)
            btn.style.backgroundColor = '#fa8072';
        }

        else{
            var btn = document.getElementById(`btn${i}-cau-${stt}`)
            btn.style.backgroundColor = '#c6e2ff';
        }
    }
}


function addquestion(){
    var questionDetails = document.querySelectorAll('.question-detail');

    // Khởi tạo biến để lưu tổng số quiz-details
    var totalQuizDetails = 0;

    // Duyệt qua từng phần tử "question-detail"
    questionDetails.forEach(function(questionDetail) {
        // Đếm số lượng phần tử con có lớp là "quiz-detail" bên trong mỗi phần tử "question-detail"
        var quizDetails = questionDetail.querySelectorAll('.quiz-detail');
        totalQuizDetails += quizDetails.length;
    });

    var questionDetails = document.getElementById("question-detail");
    questionDetails.innerHTML += `
    <div class="quiz-detail" id="quiz-detail-${totalQuizDetails+1}">
                            <div class="cauhoi" id="cauhoi-${totalQuizDetails+1}">
                                <p >Câu <input class="input-stt" type="text" placeholder="..."></p>
                                <input id="cau-hoi-${totalQuizDetails+1}" class="input-cauhoi" type="text" placeholder="Hãy Nhập Câu Hỏi.....">
                                <button id="delete" onclick="xoacauhoi('quiz-detail-${totalQuizDetails+1}')">Xóa</button>
                            </div>

                            <div class="dapan">
                                <div class="answer-content">
                                    <p id="answer-content-1">A.</p>
                                    <input type="text" class="ans" id="A-${totalQuizDetails+1}">
                                </div>
                                <div class="answer-content">
                                    <p id="answer-content-1">B.</p>
                                    <input type="text" class="ans" id="B-${totalQuizDetails+1}">
                                </div>
                                <div class="answer-content">
                                    <p id="answer-content-1">C.</p>
                                    <input type="text" class="ans" id="C-${totalQuizDetails+1}">
                                </div>
                                <div class="answer-content">
                                    <p id="answer-content-1">D.</p>
                                    <input type="text" class="ans" id="D-${totalQuizDetails+1}">
                                </div>
                              
                            </div>


                            <div class="choice-correct">
                                <h3>Chọn Đáp Án Đúng</h2>
                                <div class="btn-choice">
                                    <button id="btn1-cau-${totalQuizDetails+1}" onclick="checkbtn('1','${totalQuizDetails+1}')">A</button>
                                    <button id="btn2-cau-${totalQuizDetails+1}" onclick="checkbtn('2','${totalQuizDetails+1}')">B</button>
                                    <button id="btn3-cau-${totalQuizDetails+1}" onclick="checkbtn('3','${totalQuizDetails+1}')">C</button>
                                    <button id="btn4-cau-${totalQuizDetails+1}" onclick="checkbtn('4','${totalQuizDetails+1}')">D</button>
                                </div>
                            </div>

                        </div>
    `
}


function xoacauhoi(params){
    var divToDelete = document.getElementById(params);

// Lấy tham chiếu đến div chứa nó
    var container = document.getElementById('question-detail');

    // Kiểm tra xem div cần xóa có tồn tại trong div chứa không
    if (divToDelete && container) {
        // Sử dụng phương thức removeChild() để xóa div
        container.removeChild(divToDelete);
        // hoặc sử dụng phương thức remove() nếu trình duyệt hỗ trợ ES6
        // divToDelete.remove();
    } else {
        console.log("Không tìm thấy div cần xóa hoặc div chứa nó không tồn tại.");
    }
}


function addquiz(){
    var modal = document.querySelector('.add-container');
    modal.classList.toggle('hide');
}


function exit(){
    var modal = document.querySelector('.add-container');
    modal.classList.toggle('hide');
}

array_saveques = [];

new_add_arrays = [];

function save_question(){
    var questionDetails = document.querySelectorAll('.question-detail');

    // Khởi tạo biến để lưu tổng số quiz-details
    var totalQuizDetails = 0;

    // Duyệt qua từng phần tử "question-detail"
    questionDetails.forEach(function(questionDetail) {
        // Đếm số lượng phần tử con có lớp là "quiz-detail" bên trong mỗi phần tử "question-detail"
        var quizDetails = questionDetail.querySelectorAll('.quiz-detail');
        totalQuizDetails += quizDetails.length;
    });

    var name_test = document.getElementById(`name-test`).value;
    var mota = document.getElementById(`des-test`).value;
    var date_test = document.getElementById(`date-test`).value;

    new_add_arrays.push({name:name_test, type_test:mota, type_class:"test train-type", date:date_test,date_create:"New", cnt_test:"0"})
    var table_test = document.getElementById("table-test");
    table_test.innerHTML += `
    <tr id = "row-1">
                                <td><input class="checkbox" id="checkbox-1" type="checkbox"></td>
                                <td><p>${new_add_arrays[0].name}</p></td>
                                <td><p>${new_add_arrays[0].type_test}</p></td>
                                <td><p>${new_add_arrays[0].date}</p></td>
                                <td><p>${new_add_arrays[0].date_create}</p></td>
                                <td><p>${new_add_arrays[0].cnt_test}</p></td>
    </tr>
    `
    array_temp = []
    for(var i = 1; i <= totalQuizDetails; i++ ){
        
        var content = document.getElementById(`cau-hoi-${i}`).value;
        var dapan_a = document.getElementById(`A-${i}`).value;
        var dapan_b = document.getElementById(`B-${i}`).value;
        var dapan_c = document.getElementById(`C-${i}`).value;
        var dapan_d = document.getElementById(`D-${i}`).value;
        
        array_saveques.push({number:i,content:content,answer_a :dapan_a,answer_b:dapan_b,answer_c:dapan_c,answer_d:dapan_d});
        console.log(array_saveques[0]);
    }
}



function edit_test(){
    var modal = document.querySelector('.add-container');
    modal.classList.toggle('hide');
    var questionDetails = document.querySelectorAll('.question-detail');

    // Khởi tạo biến để lưu tổng số quiz-details
    var totalQuizDetails = 0;

    // Duyệt qua từng phần tử "question-detail"
    questionDetails.forEach(function(questionDetail) {
        // Đếm số lượng phần tử con có lớp là "quiz-detail" bên trong mỗi phần tử "question-detail"
        var quizDetails = questionDetail.querySelectorAll('.quiz-detail');
        totalQuizDetails += quizDetails.length;
    });

    document.getElementById(`name-test`).value = new_add_arrays[new_add_arrays.length-1].name + "ABCHHDHDH";
    document.getElementById(`des-test`).value = new_add_arrays[new_add_arrays.length-1].type_test;
    document.getElementById(`date-test`).value = new_add_arrays[new_add_arrays.length-1].date;
    var questionDetails = document.getElementById("question-detail");
    questionDetails.innerHTML = '';
    console.log(totalQuizDetails);
    for(var i = 1; i <= totalQuizDetails; i++ ){
        
        var questionDetails = document.getElementById("question-detail");
    questionDetails.innerHTML += `
    <div class="quiz-detail" id="quiz-detail-${i}">
                            <div class="cauhoi" id="cauhoi-${i}">
                                <p >Câu <input class="input-stt" value="${i}" type="text" placeholder="..."></p>
                                <input id="cau-hoi-${i}" value="${array_saveques[i-1].content}" class="input-cauhoi" type="text" placeholder="Hãy Nhập Câu Hỏi.....">
                                <button id="delete" onclick="xoacauhoi('quiz-detail-${i}')">Xóa</button>
                            </div>

                            <div class="dapan">
                                <div class="answer-content">
                                    <p id="answer-content-1">A.</p>
                                    <input value = "${array_saveques[i-1].answer_a}" type="text" id="A-${i}">
                                </div>
                                <div class="answer-content">
                                    <p id="answer-content-1">B.</p>
                                    <input value = "${array_saveques[i-1].answer_b}" type="text" id="B-${i}">
                                </div>
                                <div class="answer-content">
                                    <p id="answer-content-1">C.</p>
                                    <input value = "${array_saveques[i-1].answer_c}" type="text" id="C-${i}">
                                </div>
                                <div class="answer-content">
                                    <p id="answer-content-1">D.</p>
                                    <input value = "${array_saveques[i-1].answer_d}" type="text" id="D-${i}">
                                </div>
                              
                            </div>


                            <div class="choice-correct">
                                <h3>Chọn Đáp Án Đúng</h2>
                                <div class="btn-choice">
                                    <button id="btn1-cau-${i}" onclick="checkbtn('1','${i}')">A</button>
                                    <button id="btn2-cau-${i}" onclick="checkbtn('2','${i}')">B</button>
                                    <button id="btn3-cau-${i}" onclick="checkbtn('3','${i}')">C</button>
                                    <button id="btn4-cau-${i}" onclick="checkbtn('4','${i}')">D</button>
                                </div>
                            </div>

                        </div>
    `

    }
}

var input = document.getElementById("fileinput");
input.addEventListener('change', function(event) {
    // Lấy tệp tin đã chọn
    var file = event.target.files[0];

    // Tạo một đối tượng FileReader để đọc tệp Excel
    var reader = new FileReader();
    reader.onload = function(event) {
        // Đọc dữ liệu từ tệp Excel
        var data = new Uint8Array(event.target.result);
        var workbook = XLSX.read(data, { type: 'array' });

        // Lấy dữ liệu từ sheet đầu tiên
        var sheet = workbook.Sheets[workbook.SheetNames[0]];

        // Tạo đối tượng để lưu trữ dữ liệu của từng cột
        var columnData = {};

        // Duyệt qua các ô trong mỗi cột
        for (var cell in sheet) {
            // Lấy chỉ số cột từ tên ô (ví dụ: A1 -> A)
            var col = cell.replace(/[0-9]/g, '');

            // Bỏ qua nếu không phải là tên cột (ví dụ: A1, B1, ...)
            if (col === '') continue;

            // Lấy giá trị của ô
            var cellValue = sheet[cell].v;

            // Kiểm tra xem đã có mảng cho cột này trong columnData chưa
            if (!columnData[col]) {
                // Nếu chưa và cellValue không phải undefined, tạo một mảng mới
                if (cellValue !== undefined) {
                    columnData[col] = [];
                }
            }

            // Nếu mảng dữ liệu của cột tồn tại, thêm giá trị của ô vào
            if (columnData[col]) {
                columnData[col].push(cellValue);
            }
        }
        console.log(Object.keys(columnData).length);
        var i = 1;
        var questionDetails = document.getElementById("question-detail");
        questionDetails.innerHTML = '';
        // In ra dữ liệu của từng cột
        for (var column in columnData) {
            console.log("Column " + column + ": " + columnData[column].join(', '));
            var name = columnData[column][1];
            var dapan_a = columnData[column][2];
            var dapan_b = columnData[column][3];
            var dapan_c = columnData[column][4];
            var dapan_d = columnData[column][5];
            var questionDetails = document.getElementById("question-detail");
            questionDetails.innerHTML += `
                    <div class="quiz-detail" id="quiz-detail-${i}">
                                    <div class="cauhoi" id="cauhoi-${i}">
                                        <p >Câu <input class="input-stt" value="${i}" type="text" placeholder="..."></p>
                                        <input id="cau-hoi-${i}" value="${name}" class="input-cauhoi" type="text" placeholder="Hãy Nhập Câu Hỏi.....">
                                        <button id="delete" onclick="xoacauhoi('quiz-detail-${i}')">Xóa</button>
                                    </div>

                                    <div class="dapan">
                                        <div class="answer-content">
                                            <p id="answer-content-1">A.</p>
                                            <input value = "${dapan_a}" type="text" class="ans" id="A-${i}">
                                        </div>
                                        <div class="answer-content">
                                            <p id="answer-content-1">B.</p>
                                            <input value = "${dapan_b}" type="text" class="ans" id="B-${i}">
                                        </div>
                                        <div class="answer-content">
                                            <p id="answer-content-1">C.</p>
                                            <input value = "${dapan_c}" type="text" class="ans" id="C-${i}">
                                        </div>
                                        <div class="answer-content">
                                            <p id="answer-content-1">D.</p>
                                            <input value = "${dapan_d}" type="text" class="ans" id="D-${i}">
                                        </div>
                                    
                                    </div>


                                    <div class="choice-correct">
                                        <h3>Chọn Đáp Án Đúng</h2>
                                        <div class="btn-choice">
                                            <button id="btn1-cau-${i}" onclick="checkbtn('1','${i}')">A</button>
                                            <button id="btn2-cau-${i}" onclick="checkbtn('2','${i}')">B</button>
                                            <button id="btn3-cau-${i}" onclick="checkbtn('3','${i}')">C</button>
                                            <button id="btn4-cau-${i}" onclick="checkbtn('4','${i}')">D</button>
                                        </div>
                                    </div>

                                </div>
            `
            i += 1;
        }

        
    };

    // Đọc tệp Excel dưới dạng mảng dữ liệu nhị phân
    reader.readAsArrayBuffer(file);
});

