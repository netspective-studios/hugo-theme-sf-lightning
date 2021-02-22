var ajaxPageServiceCall = {
    serviceCall: function (serviceData) {

        return new Promise((resolve, reject) => {
        $.ajax({
            "url" : serviceData.url,
            "async": true,
            "crossDomain": true,
            "method": serviceData.method,
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "*/*",
                "cache-control": "no-cache"
            },
            "data": {
                "query": serviceData.query
            },
        
        
            success: function (data) {
                //console.log(data);
               // console.log(serviceData.url);
               data.service = serviceData;
                resolve(data);
            },
            error: function (error) {
                console.log(error);
                reject();
            }
        });
    });

    }
}
    