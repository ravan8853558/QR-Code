document.getElementById('generateBtn').addEventListener('click', function () {
    var text = document.getElementById('textInput').value;

    if (text === "") {
        alert("Please enter some text to generate a QR code");
        return;
    }

    // Create QR code
    var qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = "";  // Clear previous QR code
    var qrCode = new QRCode(qrCodeContainer, {
        text: text,
        width: 256,
        height: 256,
        colorDark: "#00bcd4",
        colorLight: "#1e1e1e",
        correctLevel: QRCode.CorrectLevel.H
    });
});
