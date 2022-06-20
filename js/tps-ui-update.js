"use strict";

/**
 * remove form section title
 */
document.querySelector(".form-section__text").remove();

/**
 * company name actions
 */
const COMPANY_NAME_ID = "tps_create_stub_companyProfile_name";
const COMPANY_NAME_LABEL_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Company Name</span>
</div>
`;
const companyName = document.getElementById(COMPANY_NAME_ID);
const companyeNameLabel = companyName.parentElement.querySelector("label");
companyeNameLabel.innerHTML = COMPANY_NAME_LABEL_HTML;
companyName.removeAttribute("placeholder");

/**
 * street address actions
 */
const SRTEET_ADRESS_ID = "tps_create_stub_companyProfile_address_streetAddress";
const SRTEET_ADRESS_LABEL_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Street Adress</span>
</div>`;
const streetAddress = document.getElementById(SRTEET_ADRESS_ID);
const streetAddressLabel = streetAddress.parentElement.querySelector("label");
streetAddressLabel.innerHTML = SRTEET_ADRESS_LABEL_HTML;
streetAddress.removeAttribute("placeholder");

/**
 * city address block
 */
const CITY_NAME_ID = "tps_create_stub_companyProfile_address_city";
const CITY_NAME_LABEL_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">City</span>
</div>`;
const city = document.getElementById(CITY_NAME_ID);
const cityLabel = city.parentElement.querySelector("label");
cityLabel.innerHTML = CITY_NAME_LABEL_HTML;
city.removeAttribute("placeholder");

// zip code
// ZIP CONSTS
const ZIP_ID = "tps_create_stub_companyProfile_address_zipCode";
const ZIP_LABEL_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Zip Code</span>
</div>
`;
const zip = document.getElementById(ZIP_ID);
const zipLabel = zip.parentElement.querySelector("label");
zipLabel.innerHTML = ZIP_LABEL_HTML;
zip.removeAttribute("placeholder");

// state
const STATE_ID = "tps_create_stub_companyProfile_address_state";
const state = document.getElementById(STATE_ID);
const stateLabel = state.parentElement.querySelector("label");
stateLabel.innerText = "State";

// APT
const APT_ID = "tps_create_stub_companyProfile_address_apartmentNumber";
const apt = document.getElementById(APT_ID);
apt.removeAttribute("placeholder");

// company logo
const COMPANU_LOGO_ID = "tps_create_stub_companyProfile_logo";
const companyLogo = document.getElementById(COMPANU_LOGO_ID);
const companyLoagoLabel = companyLogo.parentElement.querySelector("label");
companyLoagoLabel.classList.add("tps-theme--cl");
companyLogo.closest("div .form-rest").classList.add("form-rest--show");
companyLogo.removeAttribute("placeholder");

// ext
const EXT_NO_ID = "tps_create_stub_companyProfile_phoneNumberExt";
const ext = document.getElementById(EXT_NO_ID);
ext.removeAttribute("placeholder");

// Phone number
const PHONE_NUMBER_ID = "tps_create_stub_companyProfile_phoneNumber";
const PHONE_NUMBER_PLACEHOLDER = "( __ ) ____ - ____";
const phoneNimber = document.getElementById(PHONE_NUMBER_ID);
phoneNimber.setAttribute("placeholder", PHONE_NUMBER_PLACEHOLDER);

// EIN
const EIN_ID = "tps_create_stub_companyProfile_employerIdentificationNumber";
const EIN_PLACEHOLDER = "__ - _______";
const EIN_LABEL_TEXT = "Company EIN";
const ein = document.getElementById(EIN_ID);
const einLabel = ein.parentElement.querySelector("label");
einLabel.innerText = EIN_LABEL_TEXT;
ein.setAttribute("placeholder", EIN_PLACEHOLDER);

// Employee full name
const EMPLOYEE_FULL_NAME_ID = "tps_create_stub_employeeProfile_name";
const EMPLOYEE_FULL_NAME_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Employee Full Name</span>
</div>
`;
const employeeFullName = document.getElementById(EMPLOYEE_FULL_NAME_ID);
const employeeFNLabel = employeeFullName.parentElement.querySelector("label");
employeeFNLabel.innerHTML = EMPLOYEE_FULL_NAME_HTML;
employeeFullName.removeAttribute("placeholder");

// Social security number
const SOCIAL_SECURITY_NUMBER_ID =
  "tps_create_stub_employeeProfile_socialSecurityNumber";
const SOCIAL_SECURITY_NUMBER_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content"
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
        <span class="tps-theme--required__star">*</span>
        <span class="tps-theme--required__content">
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
          class="form-block__label tps-theme--social-security-number__label"
        >
          XXX-XX-
        </label>
        <input
          type="text"
          autocomplete="no"
          maxlength="4"
          id="tps_create_stub_employeeProfile_socialSecurityNumber_1"
          class="form-block--inline-label tps-theme--social-security-number check-number form-input fm-pristine fm-valid fm-not-empty fm-touched"
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
const socialSecurityNumber = document.getElementById(SOCIAL_SECURITY_NUMBER_ID);
if (socialSecurityNumber) {
  const parentElement = socialSecurityNumber.parentElement;
  parentElement.outerHTML = SOCIAL_SECURITY_INPUT_HTML;
}

document.querySelector(".tps-address__block").classList.remove("u-hidden");

// employ address
const EMPLOYEE_STREET_ADRESS_ID =
  "tps_create_stub_employeeProfile_address_streetAddress";
const EMPLOYEE_STREET_ADRESS_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Employee Address</span>
</div>
`;

const EMPLOYEE_ADDRES_CITY_ID = "tps_create_stub_employeeProfile_address_city";
const EMPLOYEE_ADDRES_ZIP_CODE_ID =
  "tps_create_stub_employeeProfile_address_zipCode";
const EMPLOYEE_ADDRES_CITY_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">City</span>
</div>
`;

const EMPLOYEE_ADDRES_ZIP_CODE_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Zip Code</span>
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

if (parentForHiddenElement) {
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
}

// Hourly rate
const HOURLY_RATE_ID = "tps_create_stub_salaryProfile_hourlyRate";
const HOURTL_RATE_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Hourly Rate</span>
</div>
`;
const hourlyRate = document.getElementById(HOURLY_RATE_ID);
const hourlyRateLabel = hourlyRate.parentElement.querySelector("label");
hourlyRateLabel.innerHTML = HOURTL_RATE_HTML;
hourlyRate.style.width = 181 + "px";

// // if (hourlyRate) {
// //   const parentElement = hourlyRate.parentElement;
// //   parentElement.outerHTML = HOURTL_RATE_HTML;
// // }

// W4
const W4_ID = "tps_create_stub_employeeProfile_isW4FormBefore2020";
const w4 = document.getElementById(W4_ID);
w4.className = "";
w4.parentElement.querySelector("label").remove();
const w4Label = document.createElement("label");
w4Label.innerText = "Using a W4 from 2020 or beyond";
w4Label.setAttribute("for", W4_ID);
w4Label.classList.add("form-block__label");
w4.parentElement.style.display = "flex";
w4.parentElement.style.width = "100%";
// w4.parentElement.style.justifyContent = "center";
w4.parentElement.style.alignItems = "center";
w4.parentElement.style.flexDirection = "row";
w4.parentElement.style.gap = "5px";

w4.parentElement.parentElement.querySelector("div .form-block__label").remove();

w4.parentElement.insertBefore(w4Label, w4.nextSibling);

// Hire date
const ADD_EMPLOYEE_HIRE_DATE_ID = "tps_create_stub_salaryProfile_isNewHire";
const addHireDate = document.getElementById(ADD_EMPLOYEE_HIRE_DATE_ID);
addHireDate.className = "";
addHireDate.parentElement.querySelector("label").remove();
const addHireDateLabel = document.createElement("label");
addHireDateLabel.innerText = "Add employee hire date";
addHireDateLabel.setAttribute("for", ADD_EMPLOYEE_HIRE_DATE_ID);
addHireDateLabel.classList.add("form-block__label");
addHireDate.parentElement.style.display = "flex";
addHireDate.parentElement.style.width = "100%";
addHireDate.parentElement.style.flexDirection = "row";
addHireDate.parentElement.style.gap = "5px";
w4.parentElement.style.alignItems = "center";
w4.parentElement.style.flexDirection = "row";
w4.parentElement.style.gap = "5px";

addHireDate.parentElement.parentElement
  .querySelector("div .form-block__label")
  .remove();

addHireDate.parentElement.insertBefore(
  addHireDateLabel,
  addHireDate.nextSibling
);

// show advanced pay dates
const ADVANSED_PAY_DATE_ID = "tps_create_stub_salaryProfile_isAdvancedPayDates";
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

// Pay date container remove hr
const payDateCollection = document.querySelector(
  ".paydates-collection--hourly"
);
console.log(payDateCollection);
const dividerToRemove = payDateCollection.querySelector("hr");
// not WORKING have no idea why
// dividerToRemove.remove();

// pay date 1
document.querySelector(".year-tag-container").remove();
const payDateContent = document.querySelector(".paydates__content");
console.log(payDateContent);
const payDateLine = payDateContent.querySelector(".paydates-line");
const payDateIndex = payDateContent.querySelector(".paydates-index-wrapper");
const paydateDeleteIcon = payDateContent.querySelector(
  ".paydates-collection__remove"
);
paydateDeleteIcon.style.display = "none";
payDateLine.style.display = "none";
payDateIndex.classList.replace("paydates-index-wrapper", "tps-theme--pay-date");
const PAY_DATE_EMPLOYEE_ID = "tps_create_stub_salaryProfile_payDates_0_payDate";
const PAY_DATE_EMPLOYEE_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Employee Pay Date</span>
</div>
`;
const paydatesEmployee = document.getElementById(PAY_DATE_EMPLOYEE_ID);
const paydatesEmployeeLabel =
  paydatesEmployee.parentElement.querySelector("label");
paydatesEmployeeLabel.innerHTML = PAY_DATE_EMPLOYEE_HTML;
////////////////////////////////////////////////////////
const PAY_DATE_HOURS_ID =
  "tps_create_stub_salaryProfile_payDates_0_hoursWorked";
const PAY_DATE_HOURS_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Hours Worked</span>
</div>`;
const paydatesHours = document.getElementById(PAY_DATE_HOURS_ID);
const paydatesHoursLabel = paydatesHours.parentElement.querySelector("label");
paydatesHoursLabel.innerHTML = PAY_DATE_HOURS_HTML;
///////////////////////////////////////////////////////

const PAY_DATE_START_ID = "tps_create_stub_salaryProfile_payDates_0_startDate";
const PAY_DATE_START_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Start Date</span>
</div>`;
const paydatesStart = document.getElementById(PAY_DATE_START_ID);
const paydatesStartLabel = paydatesStart.parentElement.querySelector("label");
paydatesStartLabel.innerHTML = PAY_DATE_START_HTML;
/////////////////////////////////////////////////////////

const PAY_DATE_END_ID = "tps_create_stub_salaryProfile_payDates_0_endDate";
const PAY_DATE_END_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">End Date</span>
</div>`;

const paydatesEnd = document.getElementById(PAY_DATE_END_ID);
const paydatesEndLabel = paydatesEnd.parentElement.querySelector("label");
paydatesEndLabel.innerHTML = PAY_DATE_END_HTML;

//////////////////////////////////////////////////////////////

const PAY_DATES_NUMBER_OF_ID =
  "tps_create_stub_salaryProfile_payDates_0_payPeriodYTD";
const PAY_DATES_NUMBER_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Number of Previous <br> Pay Dates this year</span>
</div>`;
const paydatesNumberOf = document.getElementById(PAY_DATES_NUMBER_OF_ID);
const paydatesNumberOfLabel =
  paydatesNumberOf.parentElement.querySelector("label");
paydatesNumberOfLabel.innerHTML = PAY_DATES_NUMBER_HTML;

////////////////////////////////////////////////////////

const PAY_DATES_SUM_OF_ID =
  "tps_create_stub_salaryProfile_payDates_0_grossPayYTD";
const PAY_DATES_SUM_OF_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Sum of previous <br>  basic wages this year</span>
</div>`;
const paydatesSumOf = document.getElementById(PAY_DATES_SUM_OF_ID);
const paydatesSumOfLabel = paydatesSumOf.parentElement.querySelector("label");
paydatesSumOfLabel.innerHTML = PAY_DATES_SUM_OF_HTML;

console.log(paydatesSumOf.parentElement.parentElement);

const flexdiv = document.createElement("div");
flexdiv.classList.add("tps-theme--flex");

payDateContent.insertBefore(
  flexdiv,
  paydatesNumberOf.parentElement.parentElement
);
const p1 = paydatesNumberOf.parentElement.parentElement;
const p2 = paydatesSumOf.parentElement.parentElement;
p1.classList.add("tps-theme--flex__item");
p2.classList.add("tps-theme--flex__item");
flexdiv.appendChild(p2);
flexdiv.appendChild(p1);

//
const PAY_DATE_CHECK_ID = `tps_create_stub_salaryProfile_payDates_0_checkNumber`;
const PAY_CKECK_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Check Number</span>
</div>`;
const payDateCheck = document.getElementById(PAY_DATE_CHECK_ID);
payDateCheck.parentElement.classList.remove("form-block--inline-label");
payDateCheck.classList.remove("form-block--inline-label");

payDateCheck.style.width = 181 + "px";
payDateCheck.removeAttribute("value");
payDateCheck.removeAttribute("placeholder");

//deduction
const deduction = document.querySelector(".js-add-addition-deduction");
deduction.querySelector("i").remove();
deduction.querySelector("span").remove();
deduction.classList.add("tps-theme--add-deductions");
deduction.innerText = "+ Add Additions and/or Deductions";

// TAX
const formExemptions = document.querySelector(".form__exemptions");
const optionalTitle = document.querySelector(".optional__title");
optionalTitle.style.color = "black";
optionalTitle.style.textTransform = "capitalize";
optionalTitle.innerText = "Special Tax Exemptions";
const optionalSubtitle = document.createElement("span");
optionalSubtitle.innerText = "Is the employee exempt from any taxes?";
optionalSubtitle.classList.add("tps-theme--special-tax-subtitle");
formExemptions.insertBefore(optionalSubtitle, optionalTitle.nextSibling);
const TAX_ID = `tps_create_stub_salaryProfile_isExempt`;
const tax = document.getElementById(TAX_ID);
tax.className = "";
const taxLabelToRemove = tax.parentElement.parentElement.querySelector(
  "div .form-block__label"
);
taxLabelToRemove.remove();
tax.parentElement.querySelector("label").remove();
console.log(taxLabelToRemove);
const taxLabel = document.createElement("label");
taxLabel.innerText = "+ Add Special Tax Exemptions";
taxLabel.style.marginTop = 50 + "px";
taxLabel.style.textDecoration = "underline";
taxLabel.style.color = "black";
taxLabel.setAttribute("for", TAX_ID);
taxLabel.classList.add("form-block__label");
tax.parentElement.style.display = "flex";
tax.parentElement.style.width = "100%";
tax.parentElement.style.flexDirection = "row";
tax.parentElement.style.gap = "5px";
taxLabel.style.cursor = "pointer";
taxLabel.style.color = "#0078c2";
tax.style.display = "none";
tax.parentElement.insertBefore(taxLabel, tax.nextSibling);

// add prev date
const addPrevDate = document.querySelector(".paydates-collection__add");
addPrevDate.querySelector("i").remove();
addPrevDate.innerText = "+ Add Previous Pay Date";
// addPrevDate.className
addPrevDate.classList.add("tps-theme--add-prev-date");

// tax checkboxs
const taxCheckboxesContainer = document.querySelector(".js-exemptions");
var checkboxes = taxCheckboxesContainer.querySelectorAll(
  ".form-block-checkbox.regular"
);
for (var checkbox of checkboxes) {
  // checkbox.classList.remove("regular");
  checkbox.classList.add("tps-theme--regular_checkbox");
}

// email
const EMAIL_ID = "tps_create_stub_email";
const email = document.getElementById(EMAIL_ID);
const EMAIL_HTML = `<div>
  <span class="tps-theme--required__star">*</span
  ><span class="tps-theme--required__content">Your Email Address</span>
</div>`;
const emailLabel = email.parentElement.querySelector("label");
emailLabel.innerHTML = EMAIL_HTML;
