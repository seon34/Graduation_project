$uploadDirectory = 'uploads/';

if (!file_exists($uploadDirectory)) {
    mkdir($uploadDirectory, 0777, true);
}

if ($_FILES['chooseFile']['error'] === UPLOAD_ERR_OK) {
    $tempName = $_FILES['chooseFile']['tmp_name'];
    $originalName = basename($_FILES['chooseFile']['name']);
    $targetPath = $uploadDirectory . $originalName;

    if (move_uploaded_file($tempName, $targetPath)) {
        echo 'File uploaded successfully.';
    } else {
        echo 'Error uploading file.';
    }
} else {
    echo 'File upload error: ' . $_FILES['chooseFile']['error'];
}
?>