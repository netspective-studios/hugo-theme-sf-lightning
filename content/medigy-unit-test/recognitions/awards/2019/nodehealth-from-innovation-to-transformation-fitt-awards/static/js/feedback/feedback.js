    $(document).ready(function ($) {
        
        function base64EncodeUnicode(str) {
        // First we escape the string using encodeURIComponent to get the UTF-8 encoding of the characters, 
        // then we convert the percent encodings into raw bytes, and finally feed it to btoa() function.
        utf8Bytes = encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
        });

        return btoa(utf8Bytes);
        }
        
        function recurringCharacterValidate(string) {
        let isEmpty=true;
        var alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
        alphabet.forEach((key,val)=>{
                if(string.indexOf(key) > -1) isEmpty=false;
            });
        
        return isEmpty;
        }
        if (window.html2canvas === undefined) {
            /*** LOAD HTML2CANVAS JS ***/
            var html2canvasJs = document.createElement('script');
            html2canvasJs.setAttribute("type", "text/javascript");
            html2canvasJs.setAttribute("src", "/js/feedback/html2canvas.js");
            document.getElementsByTagName('head')[0].appendChild(html2canvasJs);
        }         
        var spinnerLoader = '<div class="feedback"></div><div class = "clearfix"></div><div  class="d-flex justify-content-center"><div id = "feedbackloading" class="spinner-border" role="status"><span class="sr-only">Loading</span></div></div>';
        var htmlContent = '<div class="feedbackLabel" data-toggle="modal" data-target="#feedbackWidget"><div class="iconholder"></div><div class="labelText">Support &amp; Feedback</div></div>';
        htmlContent = htmlContent + '<div class="modal fade" id="feedbackWidget" role="dialog"><div class="modal-dialog"><div class="modal-content">';
        htmlContent = htmlContent + '<div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button></div>';
        htmlContent = htmlContent + '<div class="modal-body post-login"><form name="feedbackForm" id="feedbackForm" class="feedback-form" onsubmit="return false;"><h2 class="modal-title feedback-title">Support &amp; Feedback</h2>';
        htmlContent = htmlContent + '<div class="feedback-form-group feedback-userLogged"><label class="col  control-label">Email: <font color="red">*</font></label><div class="col col-75"><input type="email" name="userEmail" id="feedbackUserEmail" placeholder="Enter Email" class="form-control input-width-large" required /></div></div><div class="feedback-form-group feedback-userLogged"><label class="col control-label">Name: <font color="red">*</font></label><div class="col col-75 pb-1"><input type="text" name="userName" id="feedbackUserName" placeholder="Enter Your Name" class="form-control" required /></div></div>';
        htmlContent = htmlContent + '<div class="feedback-form-group"><label class="col  control-label">Subject: <font color="red">*</font></label><div class="col col-75"><input type="text" name="feedbackSubject" id="feedbackSubject" placeholder="Enter Subject" class="form-control input-width-large" required /></div></div><div class="feedback-form-group"><label class="col control-label">Description: <font color="red">*</font></label><div class="col col-75 pb-3"><textarea rows="3" cols="5" name="feedbackDesc" id="feedbackDesc" placeholder="Enter Description" class="form-control" required></textarea></div><div class="col col-75 pb-3 feedback-screenShot-captured-outer"><div id="outerFeedbackLoader"><div class = "clearfix"></div><div  class="d-flex justify-content-center"><div id = "feedbackloading" class="spinner-border" role="status"><span class="sr-only">Loading</span></div></div></div><img class="feedback-screenShot-captured" style="display:none"></div></div>';
        htmlContent = htmlContent + '<div class="modal-footer feedback-footer pt-2 pb-1"><div class="alert alert-success feedback-success-message" role="alert" style="display:none">Feedback Submitted</div><button type="button" class="btn btn-default" data-dismiss="modal">Close</button><button class="btn btn-primary feedback-loader" type="button" disabled style="display:none"><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving...</button><input type="submit" class="btn btn-primary" value="Submit" id="feedback-submit-button"></div>';
        htmlContent = htmlContent + '</form></div>';
        htmlContent = htmlContent + '</div></div></div>';
        htmlContent = htmlContent + '</div></div></div><script>$("#feedbackWidget").on("hide.bs.modal",function(){$("#feedbackForm")[0].reset();});</script>';
        $('#feedback-widget-container').html(htmlContent);
        var sessionId = getCookie('sessionId');
        var userEmail = getCookie('userEmail');
        var firstName = getCookie('firstname');
        var lastName = getCookie('lastname');
        var userName = firstName;   
        if (sessionId) {
            $('#feedbackUserEmail').val(userEmail);
            $('#feedbackUserName').val(userName);
            $('.feedback-userLogged').hide();
        }        
        var imageUploadUrl = 'https://attest.cloud/upload/upload.php';
        var graphQlUrl = getGraphQlUrl();
    
        //main();
        $('.feedbackLabel').click(function() {

                main();
            
        });        
    

    function main() {
        $('.feedback-screenShot-captured').hide();
        $('#outerFeedbackLoader').show();

        var attachScreenShot = fetchScreenShot();
        attachScreenShot.then(function (response) {
            $('.feedback-screenShot-captured').attr("src", response);
            $('.feedback-screenShot-captured').show();
            $('#outerFeedbackLoader').hide();
        });
        $("#feedbackForm").submit(function () {
            submitFeedback();
        });
    }
    function fetchScreenShot() {
        return new Promise(function (resolve, reject) {
            html2canvas(document.body, {
                width: 750,
                height: 750
            }).then(function (canvas) {
                var dataUrl = canvas.toDataURL("image/png");
                resolve(dataUrl);
            });
        });
    }

    function submitFeedback() {        
        jQuery('#feedback-submit-button').hide();
        jQuery('.feedback-loader').show();
        var telemetry = getTelemetryData();
        telemetry = JSON.stringify(telemetry);
        telemetry = telemetry.replace(/"/g, '\\"');
        var formData = new FormData();
        var imgData = jQuery('.feedback-screenShot-captured').attr("src");
        var imgContent =imgData.split(',')[1];
        var image = dataURLtoFile(imgData, Date.now() + '_feedback.png');        
        formData.append('file', image);
        //var imageUpload = submitImage(formData);
       // imageUpload.then( (response) => {
           if(!sessionId){
            userEmail = $('#feedbackUserEmail').val();
            userName = $('#feedbackUserName').val();
           }
            var feedbackSubject = jQuery('#feedbackSubject').val();
            var feedbackDesc = jQuery('#feedbackDesc').val();
            var feedbackDesc = jQuery('#feedbackDesc').val();
            if(recurringCharacterValidate(feedbackSubject)==true || recurringCharacterValidate(feedbackDesc)==true)  {
            alert("Please fill up the fields with proper inputs.");
            jQuery('.feedback-loader').hide();
            jQuery('#feedback-submit-button').show();
            return false;
            }
            feedbackDesc = feedbackDesc.replace(/%/g, "percentage");
            feedbackDesc = base64EncodeUnicode(feedbackDesc);
            var postFeedback = {
                "async": true,
                "crossDomain": true,
                "url": graphQlUrl,
                "method": "POST",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "cache-control": "no-cache"
                },
                "data": {
                    "query": " mutation{\n submitNetspectiveFeedback(netspectiveFeedback:{\n name:\"" + userName + "\"\n email:\"" + userEmail + "\"\n subject:\"" + feedbackSubject + "\"\n description:\"" + feedbackDesc + "\"\n image:\""+ imgContent +"\"\n}\n){\n status\n message\n errorCode\n}\n}"
                }
            };
            $.ajax(postFeedback).done(function (feedback) {
                jQuery('.feedback-loader').hide();
                jQuery('#feedback-submit-button').show();
                if (!sessionId) {
                    jQuery('#feedbackUserEmail').val('');
                    jQuery('#feedbackUserName').val('');
                }
                jQuery('#feedbackSubject').val('');
                jQuery('#feedbackDesc').val('');
                jQuery('.feedback-success-message').show();
                jQuery('.feedback-success-message').fadeOut(5000);
            });
            
       // });
    }
    function getTelemetryData() {
        var urlPath = window.location.href;
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browserName = navigator.appName;
        var fullVersion = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // In Opera, the true version is after "Opera" or after "Version"
        if ((verOffset = nAgt.indexOf("Opera")) != -1) {
            browserName = "Opera";
            fullVersion = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
        // In MSIE, the true version is after "MSIE" in userAgent
        else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
            browserName = "Microsoft Internet Explorer";
            fullVersion = nAgt.substring(verOffset + 5);
        }
        // In Chrome, the true version is after "Chrome" 
        else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
            browserName = "Chrome";
            fullVersion = nAgt.substring(verOffset + 7);
        }
        // In Safari, the true version is after "Safari" or after "Version" 
        else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
            browserName = "Safari";
            fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
        // In Firefox, the true version is after "Firefox" 
        else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
            browserName = "Firefox";
            fullVersion = nAgt.substring(verOffset + 8);
        }
        // In most other browsers, "name/version" is at the end of userAgent 
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
            (verOffset = nAgt.lastIndexOf('/'))) {
            browserName = nAgt.substring(nameOffset, verOffset);
            fullVersion = nAgt.substring(verOffset + 1);
            if (browserName.toLowerCase() == browserName.toUpperCase()) {
                browserName = navigator.appName;
            }
        }
        // trim the fullVersion string at semicolon/space if present
        if ((ix = fullVersion.indexOf(";")) != -1)
            fullVersion = fullVersion.substring(0, ix);
        if ((ix = fullVersion.indexOf(" ")) != -1)
            fullVersion = fullVersion.substring(0, ix);

        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }
        var OSName = "Unknown OS";
        if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
        if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
        if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
        if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
        var telemetryData = {
            browserName: browserName,
            fullVersion: fullVersion,
            majorVersion: majorVersion,
            appName: navigator.appName,
            userAgent: navigator.userAgent,
            osName: OSName,
            source: urlPath
        };
        return telemetryData;
    }
    function submitImage(formData) {
        return new Promise( (resolve, reject)=> {
            $.ajax({
                url: imageUploadUrl,
                dataType: 'json',
                cache: false,
                contentType: false,
                processData: false,
                data: formData,
                type: 'post',
                success: function (response) {
                    resolve(response);
                }
            });
        });
    }
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    
});


