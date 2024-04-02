
var question_data_string = localStorage.getItem("question_data");

// Chuyển đổi chuỗi JSON thành mảng
var question_data = JSON.parse(question_data_string);
var ele_quizcontainer = document.getElementById("quiz-all");

ele_quizcontainer.innerHTML = '';
for(var i = 0; i < question_data.length; i++){
    if(question_data[i].answer === question_data[i].user_answer){
        var ele_boxcontainer = document.getElementById("box-question");
        ele_boxcontainer.innerHTML +=`<button style="background-color: #99cc99" id="${i+1}" onclick="scrollToDiv('quiz-number${i+1}')">${i+1}</button>`;
        ele_quizcontainer.innerHTML += `
        
        <div class="quiz-1">
            <div id="valid"><i id ="correct_ans" class="fa-solid fa-check"></i></div>
            <p class="quiz-number" id="quiz-number${i+1}">${question_data[i].number}:</p>
            <p id="quiz-content">Bạn nghĩ gì về khái niệm tình yêu đích thực?</p>
            <div class="form-box" id="form-box-${i+1}">
                <label>
                    ${valid_radio_true(i,"1")}
                    <span>"Your only limit is you."</span>
                </label>
                <label>
                    ${valid_radio_true(i,"2")}
                    <span>Believe in yourself</span>
                </label>
                <label>
                    ${valid_radio_true(i,"3")}
                    <span>It's not about how hard you hit</span>
                </label>
                <label>
                    ${valid_radio_true(i,"4")}
                    <span>The only way to achieve the impossible is to believe it is possible</span>
                </label>
            </div>
            <div id="answer">
                        <p id="text-answer">Lời Giải Chi Tiết: Love is a profound emotion that transcends boundaries, rooted in empathy, compassion, and mutual understanding. It fosters a deep connection between individuals, nurturing feelings of care, support, and affection. Love encompasses both selflessness and reciprocity, enriching lives with warmth and joy.</p>
            </div>
        </div>

        `;
    }
    else{
        var ele_boxcontainer = document.getElementById("box-question");
        ele_boxcontainer.innerHTML +=`<button style="background-color: #ff7f7f" id="${i+1}" onclick="scrollToDiv('quiz-number${i+1}')">${i+1}</button>`;
        ele_quizcontainer.innerHTML += `
        
        <div class="quiz-1">
            <div id="valid"><i id="wrong_ans" class="fa-solid fa-circle-xmark"></i></i></div>
            <p class="quiz-number" id="quiz-number${i+1}">${question_data[i].number}:</p>
            <p id="quiz-content">Bạn nghĩ gì về khái niệm tình yêu đích thực?</p>
            <div class="form-box" id="form-box-${i+1}">
            <label>
                ${valid_radio_wrong(i,"1")}
                <span>"Your only limit is you."</span>
            </label>
            <label>
                ${valid_radio_wrong(i,"2")}
                <span>Believe in yourself</span>
            </label>
            <label>
                ${valid_radio_wrong(i,"3")}
                <span>It's not about how hard you hit</span>
            </label>
            <label>
                ${valid_radio_wrong(i,"4")}
                <span>The only way to achieve the impossible is to believe it is possible</span>
            </label>
            </div>
            <div id="answer">
                        <p id="text-answer">Lời Giải Chi Tiết: Love is a profound emotion that transcends boundaries, rooted in empathy, compassion, and mutual understanding. It fosters a deep connection between individuals, nurturing feelings of care, support, and affection. Love encompasses both selflessness and reciprocity, enriching lives with warmth and joy.</p>
            </div>
        </div>

        `;
    }
}


var wrong_cnt = localStorage.getItem('wrong_cnt');
var correct_cnt = localStorage.getItem('correct_cnt');

document.getElementById("correct-container").innerHTML += ` <i class="fa-solid fa-square" id="correct"></i>
<p id="result-content">Số Câu Đúng: <span>${correct_cnt}</span> </p>`;

document.getElementById("wrong-container").innerHTML += ` <i class="fa-solid fa-square" id="wrong"></i>
<p id="result-content">Số Câu Sai: <span>${wrong_cnt}</span> </p>`;

document.getElementById("grade-container").innerHTML += `  <p id="point-content">Điểm: <span id="point">${correct_cnt*1}</span></p>`;


function valid_radio_true(index,value){
    
    if(question_data[index].user_answer === value){
       
        return ` <input type="radio"  value="${value}" checked="true" disabled="true" onclick="changeColor('${i+1}')">
                <div class="circle"></div>`;
    }
    else{
        return ` <input type="radio" value="${value}" disabled="true" onclick="changeColor('${i+1}')">
                <div class="circle"></div>`;
    }

}


function valid_radio_wrong(index,value){
    
    if(question_data[index].user_answer === value){
       
        return ` <input type="radio"  value="${value}" checked="true" disabled="true" onclick="changeColor('${i+1}')">
                <div class="circle-wrong"></div>`;
    }
    if(question_data[index].answer === value){
        return ` <input type="radio"  value="${value}" checked="true" disabled="true" onclick="changeColor('${i+1}')">
        <div class="circle"></div>`;
    }
    else{
        return ` <input type="radio"  value="${value}" disabled="true" onclick="changeColor('${i+1}')">
                <div class="circle"></div>`;
    }

}

function scrollToDiv(id) {
    // Lấy vị trí của div mục tiêu
    var targetDiv = document.getElementById(id);
    var targetDivPosition = targetDiv.offsetTop;

    // Di chuyển đến vị trí của div mục tiêu
    window.scrollTo({
        top: targetDivPosition,
        behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng cuộn mượt
    });
}



function gotoresult(){
    window.location.href = 'student_detail.html';
}
