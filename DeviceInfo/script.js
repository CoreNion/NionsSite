'use strict';

let downloadArea = document.getElementById("DownloadArea");
let MainDownloadButton = document.createElement("a");
let guideElement = document.createElement("span");

function setDownloadArea() { 
    while (downloadArea.firstChild) {
        downloadArea.removeChild(downloadArea.firstChild);
    }

    let selectOS = document.getElementById('selectOS').value;
    
    if (selectOS == "iOS"){
        selectiOS();
    } else if (selectOS == "Android"){
        selectAndroid();
    } else if (selectOS == "macOS") {
        selectMacOS();
    } else if (selectOS == "Windows") {
        //
    }
}

function selectiOS() {
    guideElement.innerHTML = 'iOSは、基本はAltStoreを利用してインストールができます。\nまた、脱獄している場合は、<a href="../repo/index.html" style="color: red;">CoreNionのリポジトリを追加</a>し、インストールすることもできます。<br> <br>';

    MainDownloadButton.setAttribute("href","altstore://install?url=https://corenion.github.io/DeviceInfo/0.9.1/DeviceInfo.ipa");
    MainDownloadButton.setAttribute("class","altDownload");
    MainDownloadButton.innerText = "install via altStore";

    
    const ipaDownloadButton = document.createElement("a");
    ipaDownloadButton.setAttribute("href","https://corenion.github.io/DeviceInfo/0.9.1/DeviceInfo.ipa");
    ipaDownloadButton.setAttribute("class","ipaDownload");
    ipaDownloadButton.innerText = "Downlaod ipa";

    downloadArea.appendChild(guideElement);
    downloadArea.appendChild(MainDownloadButton);   
    downloadArea.appendChild(ipaDownloadButton);    
}

function selectAndroid() {
    guideElement.innerText = "セキュリティの警告が出てインストール出来ない場合、設定で提供元不明なアプリのインストールを許可をしてください。\n\n";

    MainDownloadButton.setAttribute("href","https://corenion.github.io/DeviceInfo/0.9.1/com.CoreNion.DeviceInfo.apk");
    MainDownloadButton.setAttribute("class","DroidDownload");
    MainDownloadButton.innerText = "Download apk";

    downloadArea.appendChild(guideElement);
    downloadArea.appendChild(MainDownloadButton);   
}

function selectMacOS() {
    guideElement.innerText = "セキュリティの警告が出てDeviceInfoを開けない場合、FinderでDeviceInfoのあるフォルダー(標準ではアプリケーションフォルダー)にアクセスし、controlキーを押しながらDeviceinfoを開いてください。\n\n";
    
    MainDownloadButton.setAttribute("href","https://corenion.github.io/DeviceInfo/0.9.1/DeviceInfo%200.9.1.dmg");
    MainDownloadButton.setAttribute("class","macDownload");
    MainDownloadButton.innerText = "Download";

    downloadArea.appendChild(guideElement);
    downloadArea.appendChild(MainDownloadButton);   
}