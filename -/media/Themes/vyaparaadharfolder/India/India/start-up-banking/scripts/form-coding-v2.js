

jQuery(document).ready(function () {
    jQuery("#nextbtn").css("background-color", "#c2c6d4");
 fnGlblBindStates();
 fnSetQueryParams();
});

 function fnGlblBindStates() {
            var tempglblMasterStateDetails = [];

            glblStateCityBranches.forEach(function(element) {
                if (tempglblMasterStateDetails.indexOf(element._ST) == -1) {
                    tempglblMasterStateDetails.push(element._ST);
                }
            });
            tempglblMasterStateDetails.sort();
            var finalTemplateStateList = "<option value='-1' >Select State *</option>";
            tempglblMasterStateDetails.forEach(function(element) {

                StateListTemplate = `<option value="$$stateid$$" >$$statename$$</option>`;


                finalTemplateStateList += StateListTemplate.replace('$$stateid$$', element)
                    .replace('$$statename$$', element)
                    .replace('$$statecode$$', element);

            });
            //console.log("finalTemplateStateList" + finalTemplateStateList)  ;
            $('#ddlState').html(finalTemplateStateList);
        }
		
		
		jQuery('body').on("change", "#ddlState, #ddlCity", function(e) {


            fnglblReinitializeBranchesDropDown();
            if (jQuery(this).attr("id") == "ddlState") {
                fnglblReinitializeCityDropDown();
                var stateCode = jQuery(this).val();
                if (stateCode != '-1') {
                    fnglblBindCities(stateCode);
                }
            } else if (jQuery(this).attr("id") == "ddlCity") {
                var cityCode = jQuery(this).val();
                var stateCode = jQuery("#ddlState").val();
                console.log("cityCode===" + cityCode + "==== stateCode===" + stateCode);
                if (cityCode != '-1' && stateCode != "-1")
                    fnglblBindBranches(cityCode, stateCode);
            }


        });
		
		
		        //bindBranchesData
        function fnglblBindBranches(cityCode, stateCode) {

            $('#ddlBranch').prop('disabled', false);

            var finalTemplateBranchesList = `<option value="-1" branch-id='-1'>
                                                Select Branch *
                                            </option>`;

            var branchesArrayFiltered = jQuery.grep(glblStateCityBranches, function(element) {
                return element._ST.toLowerCase() === stateCode.toLowerCase().trim() && element._CT.toLowerCase() === cityCode.toLowerCase().trim();
            });
            var tempglblMasterBranchesDetails = [];
            branchesArrayFiltered.forEach(function(element) {
                if (tempglblMasterBranchesDetails.indexOf(element.BR_NM) == -1) {
                    tempglblMasterBranchesDetails.push(element.BR_NM);
                }

            });
            tempglblMasterBranchesDetails.sort();
            tempglblMasterBranchesDetails.forEach(function(cityItem) {


                var branchesListTemplate = `<option value="$$branchValue$$" branch-id='$$branchId$$'>
                                                $$branchName$$
                                            </option>`;


                finalTemplateBranchesList += branchesListTemplate.replace('$$branchId$$', cityItem)
                    .replace('$$branchName$$', cityItem).replace('$$branchValue$$', cityItem);

            });
            jQuery('#ddlBranch').html(finalTemplateBranchesList);
        }

		  function fnglblBindCities(stateCode) {

            $('#ddlCity').prop('disabled', false);

            var finalTemplateCityList = `<option value="-1" city-id='-1'>
                                                Select City *
                                            </option>`;

            var branchArrayStateFiltered = $.grep(glblStateCityBranches, function(element) {
                return element._ST.toLowerCase() === stateCode.toLowerCase().trim();
            });
            var tempglblMasterCityDetails = [];
            branchArrayStateFiltered.forEach(function(element) {
                if (tempglblMasterCityDetails.indexOf(element._CT) == -1) {
                    tempglblMasterCityDetails.push(element._CT);
                }

            });
            tempglblMasterCityDetails.sort();
            tempglblMasterCityDetails.forEach(function(cityItem) {


                var cityListTemplate = `<option value="$$cityValue$$" city-id='$$cityId$$'>
                                                $$cityName$$
                                            </option>`;


                finalTemplateCityList += cityListTemplate.replace('$$cityId$$', cityItem)
                    .replace('$$cityName$$', cityItem).replace('$$cityValue$$', cityItem);

            });
            jQuery('#ddlCity').html(finalTemplateCityList);
        }

		
		function fnglblReinitializeCityDropDown() {
            $('#ddlCity').html(`<option value="-1" city-id="-1" selected="selected">Select City *</option>`);
            //$('#ContentPlaceHolder1_vapa_StartUpReg1_UpdatePanel4 .col6:eq(1) select option[value="-1"]').attr("selected", "selected");

        }
		
		    function fnglblReinitializeBranchesDropDown() {

            //$('#ContentPlaceHolder1_vapa_StartUpReg1_UpdatePanel4 .col6:eq(2) select option[value="-1"]').attr("selected", "selected");
            $('#ddlBranch').html(`<option value="-1" city-id="-1" selected="selected">Select Branch *</option>`);


        }

		
function RemoveError() {
    jQuery(".errorMessage").html('');

}


function FirstFormValidate() {
    jQuery(".errorMessage").html("");
    var formDataFeedbacks = new FormData($('#registernow')[0]);

    jQuery.ajax(
        {
            url: "/handlers/vapa/countrywebsites/india/start-up-banking/start-up-banking.ashx",
            type: 'post',
            data: formDataFeedbacks,
            dataType: 'jsonp',
            processData: false,
            contentType: false,
            success: function (response) {
                response = JSON.parse(response);
                if (response.screenstatus == '2') {

                    $('#nextbtn').hide();
                    $('#enabled_nextbtn').show();
                }
                else {
                    for (var indexError = 0; indexError < response.errorList.length; indexError++) {
                        if (response.screenstatus != '2') {
                            jQuery("#" + response.errorList[0].error_field).val(null);
                            jQuery("#" + response.errorList[0].error_field).focus();
                            var spanval = jQuery("#spanval").val()
                            if (spanval == response.errorList[0].error_field) {
                                jQuery("#err_" + response.errorList[indexError]["error_field"]).html(response.errorList[indexError]["error_message"]);
                            }

                            jQuery("#spanval").val(response.errorList[0].error_field);
                            jQuery('#nextbtn').show();
                            jQuery('#enabled_nextbtn').hide();
                        }
                    }
                }
            },
            error: function (objXHR, objStatus, objError) {
                jQuery("#nextbtn").html("Next");
                alert('There seems to be an issue.  Please try again after some time.');
            }
        });
}

function SecondFormValidate() {
    jQuery(".errorMessage").html("");
    var formDataFeedbacks = new FormData($('#registernow')[0]);
	 var branchArrayZoneRegionFiltered = [];
            if (jQuery("#ddlState").prop('selectedIndex') > 0 && jQuery("#ddlCity").prop('selectedIndex') > 0 && jQuery("#ddlBranch").prop('selectedIndex') > 0) {
                branchArrayZoneRegionFiltered = $.grep(glblStateCityBranches, function (element) {
                    return element._ST.toLowerCase().trim() === jQuery("#ddlState").val().trim().toLowerCase() && element._CT.toLowerCase().trim() === jQuery("#ddlCity").val().trim().toLowerCase() &&
                        element.BR_NM.toLowerCase().trim() === jQuery("#ddlBranch").val().trim().toLowerCase();
                });
            }
            formDataFeedbacks.append("hdnZone", branchArrayZoneRegionFiltered[0]._ZN);
            formDataFeedbacks.append("hdnRegion", branchArrayZoneRegionFiltered[0]._RGN);
            

    var glblGetErrorMessageByKeyName;
    jQuery.ajax(
        {
            url: "/handlers/vapa/countrywebsites/india/start-up-banking/start-up-banking.ashx",
            type: 'post',
            data: formDataFeedbacks,
            dataType: 'jsonp',
            processData: false,
            contentType: false,
            success: function (response) {
                response = JSON.parse(response);
                if (response.errorList == null) {
                    jQuery("#registernow").html('');
                    jQuery("#registernow").html('We have successfully received your application.Our executive will contact you soon.');
                    jQuery("#registernow").css("color", "green");

                }
                else {
                    for (var indexError = 0; indexError < response.errorList.length; indexError++) {
                        jQuery("#err_" + response.errorList[indexError]["error_field"]).html(response.errorList[indexError]["error_message"]);
                        jQuery("#" + response.errorList[0].error_field).val(null);
                        jQuery("#" + response.errorList[0].error_field).focus();

                    }

                }
            },
            error: function (objXHR, objStatus, objError) {
                jQuery("#btnSubmit").html("Submit");
                alert('There seems to be an issue.  Please try again after some time.');
            }
        });
}

function hideSuccessMsg() {
    jQuery('#successMsg').hide();
    jQuery("#btnSubmit").html("Get Started");
}



jQuery(function () {
    jQuery("#captchaImage").on("click", function (e) {
        fnRefreshCaptcha();
        e.preventDefault()
    });
});



function fnRefreshCaptcha() {
    var date = new Date();
    var unixTimeStamp = Math.floor(date.getTime() / 1000);
    jQuery("#img_captcha").attr("src", "/handlers/vapa/countrywebsites/india/CaptchaGenerator.ashx?v=" + unixTimeStamp);
}



        function fnSetQueryParams() {
            document.getElementById("hdn_utm_source").value = getParameterByName('utm_source');
            document.getElementById("hdn_utm_medium").value = getParameterByName('utm_medium');
            document.getElementById("hdn_utm_campaign").value = getParameterByName('utm_campaign');
            document.getElementById("hdn_utm_term").value = getParameterByName('utm_term');
            document.getElementById("hdn_utm_content").value = getParameterByName('utm_content');
        }

        function getParameterByName(name, url = window.location.href) {
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }
