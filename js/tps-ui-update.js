//COPANY CONSTS
const COMPANY_NAME_ID = "tps_create_stub_companyProfile_name";
const COMPANY_NAME_LABEL_HTML =
  '<div ><span class="tps-theme--wl__star">*</span><span class="tps-theme--wl__content">Company Name</span></div>';

// STREED ADDRESS CONSTS
const SRTEET_ADRESS_ID = "tps_create_stub_companyProfile_address_streetAddress";
const SRTEET_ADRESS_LABEL_HTML =
  '<div ><span class="tps-theme--wl__star">*</span><span class="tps-theme--wl__content">Street Adress</span></div>';

// CITY ADDRESS CONSTS
const CITY_NAME_ID = "tps_create_stub_companyProfile_address_city";
const CITY_NAME_LABEL_HTML =
  '<div ><span class="tps-theme--wl__star">*</span><span class="tps-theme--wl__content">City</span></div>';

// ZIP CONSTS
const ZIP_ID = "tps_create_stub_companyProfile_address_zipCode";
const ZIP_LABEL_HTML =
  '<div ><span class="tps-theme--wl__star">*</span><span class="tps-theme--wl__content">Zip Code</span></div>';

// STATE CONSTS
const STATE_ID = "tps_create_stub_companyProfile_address_state";

// COMPANY LOGO CONSTS
const COMPANU_LOGO_ID = "tps_create_stub_companyProfile_logo";

// PHONE NUMBER CONSTS
const PHONE_NUMBER_ID = "tps_create_stub_companyProfile_phoneNumber";
const PHONE_NUMBER_PLACEHOLDER = "( __ ) ____ - ____";

//EIN CONSTS
const EIN_ID = "tps_create_stub_companyProfile_employerIdentificationNumber";
const EIN_PLACEHOLDER = "__ - _______";
const EIN_LABEL_TEXT = "Company EIN";

// EMPLOYEE CONSTS
const EMPLOYEE_FULL_NAME_ID = "tps_create_stub_employeeProfile_name";
const EMPLOYEE_FULL_NAME_HTML =
  '<div ><span class="tps-theme--wl__star">*</span><span class="tps-theme--wl__content">Employee Full Name</span></div>';

// SOCIAL SECURITY NUMBER
const SOCIAL_SECURITY_NUMBER_ID =
  "tps_create_stub_employeeProfile_socialSecurityNumber";
const SOCIAL_SECURITY_NUMBER_HTML =
  '<div ><span class="tps-theme--wl__star">*</span><span class="tps-theme--wl__content">Last 4 Digits of employee Social Security Number</span></div>';
const SOCIAL_SECURITY_INPUT_HTML =
  '<div class="form-block form-block--inline-label fm-pristine fm-valid fm-not-empty fm-touched">' +
  '<label for="tps_create_stub_employeeProfile_socialSecurityNumber" class="form-block__label">' +
  'XXX-XX-</label><input type="text" autocomplete="no" id="tps_create_stub_employeeProfile_socialSecurityNumber"' +
  'class="form-block--inline-label check-number form-input fm-pristine fm-valid fm-not-empty fm-touched" error_message="This field is required" data-formify-ptarget="1">' +
  '<div class="form-block__error">This field is required</div></div>';
// EXT
const EXT_ID = "tps_create_stub_companyProfile_phoneNumberExt";

/**
 * company name actions
 */
const companyName = document.getElementById(COMPANY_NAME_ID);
const companyeNameLabel = companyName.parentElement.querySelector("label");
companyeNameLabel.classList.add("tps-theme--wl");
companyeNameLabel.innerHTML = COMPANY_NAME_LABEL_HTML;

/**
 * street address actions
 */
const streetAddress = document.getElementById(SRTEET_ADRESS_ID);
const streetAddressLabel = streetAddress.parentElement.querySelector("label");
streetAddressLabel.classList.add("tps-theme--wl");
streetAddressLabel.innerHTML = SRTEET_ADRESS_LABEL_HTML;

/**
 * city adrtess block
 */
const city = document.getElementById(CITY_NAME_ID);
const cityLabel = city.parentElement.querySelector("label");
cityLabel.classList.add("tps-theme--wl");
cityLabel.innerHTML = CITY_NAME_LABEL_HTML;

// zip code
const zip = document.getElementById(ZIP_ID);
const zipLabel = zip.parentElement.querySelector("label");
zipLabel.classList.add("tps-theme--wl");
zipLabel.innerHTML = ZIP_LABEL_HTML;

// state
const state = document.getElementById(STATE_ID);
const stateLabel = state.parentElement.querySelector("label");
stateLabel.innerText = "State";

// company logo
const companyLogo = document.getElementById(COMPANU_LOGO_ID);
const companyLoagoLabel = companyLogo.parentElement.querySelector("label");
companyLoagoLabel.classList.add("tps-theme--cl");
companyLogo.closest("div .form-rest").classList.add("form-rest--show");

// ext
const ext = document.getElementById(EIN_ID);
ext.removeAttribute("placeholder");

// Phone number
const phoneNimber = document.getElementById(PHONE_NUMBER_ID);
phoneNimber.setAttribute("placeholder", PHONE_NUMBER_PLACEHOLDER);

// EIN
const ein = document.getElementById(EIN_ID);
const einLabel = ein.parentElement.querySelector("label");
einLabel.innerText = EIN_LABEL_TEXT;
ein.setAttribute("placeholder", EIN_PLACEHOLDER);

// Employee full name
const employeeFullName = document.getElementById(EMPLOYEE_FULL_NAME_ID);
const employeeFNLabel = employeeFullName.parentElement.querySelector("label");
employeeFNLabel.classList.add("tps-theme--wl");
employeeFNLabel.innerHTML = EMPLOYEE_FULL_NAME_HTML;

// Social security number
const socialSecurityNumber = document.getElementById(SOCIAL_SECURITY_NUMBER_ID);
const sSNumberLabel = socialSecurityNumber.parentElement.querySelector("label");
sSNumberLabel.classList.add("tps-theme--wl");
sSNumberLabel.innerHTML = SOCIAL_SECURITY_NUMBER_HTML;

if (socialSecurityNumber.outerHTML) {
  socialSecurityNumber.outerHTML = SOCIAL_SECURITY_INPUT_HTML;
  const labels = socialSecurityNumber.parentElement.querySelectorAll("label");
  if (labels.length > 1) {
    labels[0].remove();
    labels[1].classList.add("tps-theme--ssn__label");
    console.log("aa");
  }
  console.log("aa1");

  socialSecurityNumber.classList.add("form-input__ssn");
} else {
  const tmpObj = document.createElement("div");
  tmpObj.innerHTML = SOCIAL_SECURITY_INPUT_HTML;
  const parentObject = socialSecurityNumber.parentElement;
  parentObject.replaceChild(tmpObj, socialSecurityNumber); //here we placing our temporary data instead of our target, so we can find it then and replace it into whatever we want to replace to
  parentObject.innerHTML = parentObject.innerHTML.replace(
    SOCIAL_SECURITY_INPUT_HTML,
    str
  );
  if (labels.length > 1) {
    labels[0].remove();
    labels[1].classList.add("tps-theme--ssn__label");
    console.log("bbb");
  }
  console.log("bb1");

  socialSecurityNumber.classList.add("form-input__ssn");
}

document.querySelector(".tps-address__block").classList.remove("u-hidden");
