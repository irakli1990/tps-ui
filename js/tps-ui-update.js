"use strict";

//COPANY CONSTS
const COMPANY_NAME_ID = "tps_create_stub_companyProfile_name";
const COMPANY_NAME_LABEL_HTML = `<div>
  <span class="tps-theme--wl__star">*</span
  ><span class="tps-theme--wl__content">Company Name</span>
</div>
`;

// STREED ADDRESS CONSTS
const SRTEET_ADRESS_ID = "tps_create_stub_companyProfile_address_streetAddress";
const SRTEET_ADRESS_LABEL_HTML = `<div>
  <span class="tps-theme--wl__star">*</span
  ><span class="tps-theme--wl__content">Street Adress</span>
</div>
`;

// CITY ADDRESS CONSTS
const CITY_NAME_ID = "tps_create_stub_companyProfile_address_city";
const CITY_NAME_LABEL_HTML = `<div>
  <span class="tps-theme--wl__star">*</span
  ><span class="tps-theme--wl__content">City</span>
</div>
`;

// ZIP CONSTS
const ZIP_ID = "tps_create_stub_companyProfile_address_zipCode";
const ZIP_LABEL_HTML = `<div>
  <span class="tps-theme--wl__star">*</span
  ><span class="tps-theme--wl__content">Zip Code</span>
</div>
`;

// STATE CONSTS
const STATE_ID = "tps_create_stub_companyProfile_address_state";

// APT
const APT_ID = "tps_create_stub_companyProfile_address_apartmentNumber";

// COMPANY LOGO CONSTS
const COMPANU_LOGO_ID = "tps_create_stub_companyProfile_logo";

// EXT. NO
const EXT_NO_ID = "tps_create_stub_companyProfile_phoneNumberExt";

// PHONE NUMBER CONSTS
const PHONE_NUMBER_ID = "tps_create_stub_companyProfile_phoneNumber";
const PHONE_NUMBER_PLACEHOLDER = "( __ ) ____ - ____";

//EIN CONSTS
const EIN_ID = "tps_create_stub_companyProfile_employerIdentificationNumber";
const EIN_PLACEHOLDER = "__ - _______";
const EIN_LABEL_TEXT = "Company EIN";

// EMPLOYEE CONSTS
const EMPLOYEE_FULL_NAME_ID = "tps_create_stub_employeeProfile_name";
const EMPLOYEE_FULL_NAME_HTML = `<div>
  <span class="tps-theme--wl__star">*</span
  ><span class="tps-theme--wl__content">Employee Full Name</span>
</div>
`;

// SOCIAL SECURITY NUMBER
const SOCIAL_SECURITY_NUMBER_ID =
  "tps_create_stub_employeeProfile_socialSecurityNumber";
const SOCIAL_SECURITY_NUMBER_HTML = `<div>
  <span class="tps-theme--wl__star">*</span
  ><span class="tps-theme--wl__content"
    >Last 4 Digits of employee Social Security Number</span
  >
</div>
`;

const SOCIAL_SECURITY_INPUT_HTML = `
  <div class="form-block">
    <label
      for="tps_create_stub_employeeProfile_socialSecurityNumber"
      class="form-block__label tps-theme--wl"
    >
      <div>
        <span class="tps-theme--wl__star">*</span>
        <span class="tps-theme--wl__content">
          Last 4 Digits of employee Social Security Number
        </span>
      </div>
    </label>
    <div class="form-block__notice">
      This data is stored securely and never shared with any third party. It is
      only used to generate your paystub.
    </div>
    <div class="form-block form-block--inline-label fm-pristine fm-valid fm-untouched fm-empty">
      <div class="form-block form-block--inline-label fm-pristine fm-valid fm-not-empty fm-touched">
        <label
          for="tps_create_stub_employeeProfile_socialSecurityNumber_1"
          class="form-block__label tps-theme--ssn__label"
        >
          XXX-XX-
        </label>
        <input
          type="text"
          autocomplete="no"
          maxlength="4"
          id="tps_create_stub_employeeProfile_socialSecurityNumber_1"
          class="form-block--inline-label tps-theme--ssn check-number form-input fm-pristine fm-valid fm-not-empty fm-touched"
          error_message="This field is required"
          data-formify-ptarget="1"
        />
        <div class="form-block__error">This field is required</div>
      </div>
      <div class="form-block__error">This field is required</div>
    </div>
    <div class="form-block__error">
      This social security number is invalid. Please fill at least the last 4
      digits of the SSN.
    </div>
  </div>`;
// EXT
const EXT_ID = "tps_create_stub_companyProfile_phoneNumberExt";

// EMPLOYEE STREET ADDRESS
const EMPLOYEE_STREET_ADRESS_ID =
  "tps_create_stub_employeeProfile_address_streetAddress";
const EMPLOYEE_STREET_ADRESS_HTML = `<div>
  <span class="tps-theme--wl__star">*</span
  ><span class="tps-theme--wl__content">Employee Address</span>
</div>
`;

const EMPLOYEE_ADDRES_CITY_ID = "tps_create_stub_employeeProfile_address_city";
const EMPLOYEE_ADDRES_ZIP_CODE_ID =
  "tps_create_stub_employeeProfile_address_zipCode";
const EMPLOYEE_ADDRES_CITY_HTML = `<div>
  <span class="tps-theme--wl__star">*</span
  ><span class="tps-theme--wl__content">City</span>
</div>
`;

const EMPLOYEE_ADDRES_ZIP_CODE_HTML = `<div>
  <span class="tps-theme--wl__star">*</span
  ><span class="tps-theme--wl__content">Zip Code</span>
</div>
`;
const EMPLOYEE_ADDITIONAL_CLICK_LABEL_HTML = `<span class="form-rest__cta">Show Optional Employee Information</span
><span class="form-rest__cta"
  >(ID, Federal Filing Status, State Filing Status)</span
>
`;
const EMPLOYEE_SOME_ID = "tps_create_stub_employeeProfile_employeeID";
const EMPLOYEE_APT_ID =
  "tps_create_stub_employeeProfile_address_apartmentNumber";

// HOURLY RATE CONST
const HOURLY_RATE_ID = "tps_create_stub_salaryProfile_hourlyRate";
const HOURTL_RATE_HTML = `<div class="form-block">
  <label
    for="tps_create_stub_salaryProfile_hourlyRate"
    class="form-block__label tps-theme--wl"
  >
    <div>
      <span class="tps-theme--wl__star">*</span
      ><span class="tps-theme--wl__content">Hourly Rate</span>
    </div></label
  >
  <div
    class="form-block form-block--inline-label fm-pristine fm-valid fm-untouched fm-empty"
  >
    <div
      class="form-block form-block--inline-label fm-pristine fm-valid fm-not-empty fm-touched"
    >
      <label
        for="tps_create_stub_salaryProfile_hourlyRate_1"
        class="form-block__label tps-theme--hr__label"
        >$</label
      >
      <input
        type="text"
        autocomplete="no"
        placeholder="0.00"
        id="tps_create_stub_salaryProfile_hourlyRate_1"
        class="form-block--inline-label tps-theme--hr check-number form-input fm-pristine fm-valid fm-not-empty fm-touched"
        error_message="This field is required"
        data-formify-ptarget="1"
      />
    </div>
  </div>
</div>
`;

// ADD EMPLOYEE HIRE DATE CHECK BOX CONSTS
const ADD_EMPLOYEE_HIRE_DATE_ID = "tps_create_stub_salaryProfile_isNewHire";

// W4 CONSTS
const W4_ID = "tps_create_stub_employeeProfile_isW4FormBefore2020";

// ADVABSED PAY DATE CONSTS
const ADVANSED_PAY_DATE_ID = "tps_create_stub_salaryProfile_isAdvancedPayDates";

/**
 * company name actions
 */
const companyName = document.getElementById(COMPANY_NAME_ID);
const companyeNameLabel = companyName.parentElement.querySelector("label");
companyeNameLabel.classList.add("tps-theme--wl");
companyeNameLabel.innerHTML = COMPANY_NAME_LABEL_HTML;
companyName.removeAttribute("placeholder");

/**
 * street address actions
 */
const streetAddress = document.getElementById(SRTEET_ADRESS_ID);
const streetAddressLabel = streetAddress.parentElement.querySelector("label");
streetAddressLabel.classList.add("tps-theme--wl");
streetAddressLabel.innerHTML = SRTEET_ADRESS_LABEL_HTML;
streetAddress.removeAttribute("placeholder");

/**
 * city adrtess block
 */
const city = document.getElementById(CITY_NAME_ID);
const cityLabel = city.parentElement.querySelector("label");
cityLabel.classList.add("tps-theme--wl");
cityLabel.innerHTML = CITY_NAME_LABEL_HTML;
city.removeAttribute("placeholder");

// zip code
const zip = document.getElementById(ZIP_ID);
const zipLabel = zip.parentElement.querySelector("label");
zipLabel.classList.add("tps-theme--wl");
zipLabel.innerHTML = ZIP_LABEL_HTML;
zip.removeAttribute("placeholder");

// state
const state = document.getElementById(STATE_ID);
const stateLabel = state.parentElement.querySelector("label");
stateLabel.innerText = "State";

// APT
const apt = document.getElementById(APT_ID);
apt.removeAttribute("placeholder");

// company logo
const companyLogo = document.getElementById(COMPANU_LOGO_ID);
const companyLoagoLabel = companyLogo.parentElement.querySelector("label");
companyLoagoLabel.classList.add("tps-theme--cl");
companyLogo.closest("div .form-rest").classList.add("form-rest--show");
companyLogo.removeAttribute("placeholder");

// ext
const ext = document.getElementById(EXT_NO_ID);
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
employeeFullName.removeAttribute("placeholder");

// Social security number
const socialSecurityNumber = document.getElementById(SOCIAL_SECURITY_NUMBER_ID);
if (socialSecurityNumber) {
  const parentElement = socialSecurityNumber.parentElement;
  parentElement.outerHTML = SOCIAL_SECURITY_INPUT_HTML;
}

document.querySelector(".tps-address__block").classList.remove("u-hidden");

// employ address
const employeeStreetAddress = document.getElementById(
  EMPLOYEE_STREET_ADRESS_ID
);
const emStreetAddressLabel =
  employeeStreetAddress.parentElement.querySelector("label");
emStreetAddressLabel.classList.add("tps-theme--cl");
emStreetAddressLabel.innerHTML = EMPLOYEE_STREET_ADRESS_HTML;
employeeStreetAddress.removeAttribute("placeholder");

const employeeAddressCity = document.getElementById(EMPLOYEE_ADDRES_CITY_ID);
const employeeAddressCityLabel =
  employeeAddressCity.parentElement.querySelector("label");
employeeAddressCityLabel.classList.add("tps-theme--cl");
employeeAddressCityLabel.innerHTML = EMPLOYEE_ADDRES_CITY_HTML;
employeeAddressCity.removeAttribute("placeholder");

const employeeAddressZipCode = document.getElementById(
  EMPLOYEE_ADDRES_ZIP_CODE_ID
);
const employeeAddressZipCodeLabel =
  employeeAddressZipCode.parentElement.querySelector("label");
employeeAddressZipCodeLabel.classList.add("tps-theme--cl");
employeeAddressZipCodeLabel.innerHTML = EMPLOYEE_ADDRES_ZIP_CODE_HTML;
employeeAddressZipCode.removeAttribute("placeholder");

const employeeApt = document.getElementById(EMPLOYEE_APT_ID);
employeeApt.removeAttribute("placeholder");

const hiddenElements = document.querySelectorAll("div .tps-address__block");
const hiddenDetails = employeeStreetAddress.closest("div .form-rest");
if (hiddenElements && hiddenDetails) {
  hiddenDetails.classList.add("form-rest--show");
}

let parentForHiddenElement;
for (let i = 0; i < hiddenElements.length; i++) {
  if (hiddenElements[i].classList.contains("u-hidden")) {
    hiddenElements[i].classList.remove("u-hidden");
    if (hiddenElements[i].closest("div .form-rest__content")) {
      parentForHiddenElement = hiddenElements[i].closest(
        "div .form-rest__content"
      );
    }
  }
}
// cons

for (let i = 0; i < parentForHiddenElement.children.length; i++) {
  if (i == 0) continue;
  parentForHiddenElement.children[i].classList.add("u-hidden");
}

let employeeAdditionalClickLabel = document.createElement("div");
employeeAdditionalClickLabel.innerHTML = EMPLOYEE_ADDITIONAL_CLICK_LABEL_HTML;
employeeAdditionalClickLabel.style.cursor = "pointer";
employeeAdditionalClickLabel.style.paddingBottom = "8px";
let elementToInsertBefor = document.getElementById(EMPLOYEE_SOME_ID);
parentForHiddenElement.insertBefore(
  employeeAdditionalClickLabel,
  elementToInsertBefor.parentNode
);

employeeAdditionalClickLabel.onclick = () => {
  for (let i = 0; i < parentForHiddenElement.children.length; i++) {
    if (i == 0) continue;
    if (i == 1) continue;
    if (parentForHiddenElement.children[i].classList.contains("u-hidden")) {
      parentForHiddenElement.children[i].classList.remove("u-hidden");
    } else {
      parentForHiddenElement.children[i].classList.add("u-hidden");
    }
  }
};

const hourlyRate = document.getElementById(HOURLY_RATE_ID);
if (hourlyRate) {
  const parentElement = hourlyRate.parentElement;
  parentElement.outerHTML = HOURTL_RATE_HTML;
}

const w4 = document.getElementById(W4_ID);
w4.className = "";
w4.parentElement.querySelector("label").remove();
const w4Label = document.createElement("label");
w4Label.innerText = "Add employee hire date";
w4Label.setAttribute("for", ADD_EMPLOYEE_HIRE_DATE_ID);
w4Label.classList.add("form-block__label");
w4.parentElement.style.display = "flex";
w4.parentElement.style.width = "100%";
w4.parentElement.style.flexDirection = "row";
w4.parentElement.style.gap = "5px";

w4.parentElement.parentElement.querySelector("div .form-block__label").remove();

w4.parentElement.insertBefore(w4Label, w4.nextSibling);

const addHireDate = document.getElementById(ADD_EMPLOYEE_HIRE_DATE_ID);
addHireDate.className = "";
addHireDate.parentElement.querySelector("label").remove();
const addHireDateLabel = document.createElement("label");
addHireDateLabel.innerText = "Using a W4 from 2020 or beyond";
addHireDateLabel.setAttribute("for", ADD_EMPLOYEE_HIRE_DATE_ID);
addHireDateLabel.classList.add("form-block__label");
addHireDate.parentElement.style.display = "flex";
addHireDate.parentElement.style.width = "100%";
addHireDate.parentElement.style.flexDirection = "row";
addHireDate.parentElement.style.gap = "5px";

addHireDate.parentElement.parentElement
  .querySelector("div .form-block__label")
  .remove();

addHireDate.parentElement.insertBefore(
  addHireDateLabel,
  addHireDate.nextSibling
);

const advancedPayDate = document.getElementById(ADVANSED_PAY_DATE_ID);
advancedPayDate.className = "";
advancedPayDate.parentElement.querySelector("label").remove();
const advancedPayDateLabel = document.createElement("label");
advancedPayDateLabel.innerText = "Show Advanced Pay Date Fields";
advancedPayDateLabel.style.color = "black";
advancedPayDateLabel.setAttribute("for", ADVANSED_PAY_DATE_ID);
advancedPayDateLabel.classList.add("form-block__label");
advancedPayDate.parentElement.style.display = "flex";
advancedPayDate.parentElement.style.width = "100%";
advancedPayDate.parentElement.style.flexDirection = "row";
advancedPayDate.parentElement.style.gap = "5px";

advancedPayDate.parentElement.parentElement.classList.remove("alternative");
advancedPayDate.parentElement.parentElement
  .querySelector("div .form-block__label")
  .remove();

advancedPayDate.parentElement.insertBefore(
  advancedPayDateLabel,
  advancedPayDate.nextSibling
);
