var submit = document.getElementById('submitButton');
submit.onclick = showImage;     //Submit 버튼 클릭시 이미지 보여주기

function showImage() {
    var newImage = document.getElementById('image-show').lastElementChild;
    newImage.style.visibility = "visible";
    
    document.getElementById('image-upload').style.visibility = 'hidden';

    document.getElementById('fileName').textContent = null;     //기존 파일 이름 지우기
};


function loadFile(input) {
    var file = input.files[0];

    var name = document.getElementById('fileName');
    name.textContent = file.name;

    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    newImage.src = URL.createObjectURL(file);   

    newImage.style.width = "30%";
    newImage.style.height = "30%";
    newImage.style.visibility = "hidden";   //버튼을 누르기 전까지는 이미지 숨기기
    newImage.style.objectFit = "contain";

    var container = document.getElementById('image-show');
    container.appendChild(newImage);
};

const container = document.getElementById('fontContainer');

        for (let i = 0; i < 6; i++) {
            const imageUploadDiv = document.createElement('div');
            imageUploadDiv.classList.add('image-upload');

            const form = document.createElement('form');
            form.method = 'post';
            form.enctype = 'multipart/form-data';

            const buttonDiv = document.createElement('div');
            buttonDiv.classList.add('button');

            const label = document.createElement('label');
            label.htmlFor = `chooseFile-${i}`;
            label.textContent = '파일 선택';

            buttonDiv.appendChild(label);
            form.appendChild(buttonDiv);

            const inputFile = document.createElement('input');
            inputFile.type = 'file';
            inputFile.id = `chooseFile-${i}`;
            inputFile.name = 'chooseFile';
            inputFile.accept = 'image/*';
            inputFile.onchange = function() { loadFile(this); };

            form.appendChild(inputFile);

            const fileContainerDiv = document.createElement('div');
            fileContainerDiv.classList.add('fileContainer');

            const fileInputDiv = document.createElement('div');
            fileInputDiv.classList.add('fileInput');

            const fileNameP = document.createElement('p');
            fileNameP.textContent = 'FILE NAME: ';

            const fileNameDisplayP = document.createElement('p');
            fileNameDisplayP.id = `fileName-${i}`;

            fileInputDiv.appendChild(fileNameP);
            fileInputDiv.appendChild(fileNameDisplayP);
            fileContainerDiv.appendChild(fileInputDiv);

            const buttonContainerDiv = document.createElement('div');
            buttonContainerDiv.classList.add('buttonContainer');

            const submitButtonDiv = document.createElement('div');
            submitButtonDiv.classList.add('submitButton');
            submitButtonDiv.textContent = 'SUBMIT';

            buttonContainerDiv.appendChild(submitButtonDiv);
            fileContainerDiv.appendChild(buttonContainerDiv);

            imageUploadDiv.appendChild(form);
            imageUploadDiv.appendChild(fileContainerDiv);

            container.appendChild(imageUploadDiv);
        }