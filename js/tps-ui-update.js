"use strict";

//COPANY CONSTS
const COMPANY_NAME_ID = "tps_create_stub_companyProfile_name";
const COMPANY_NAME_LABEL_HTML = `<div>
  <span class="tps-theme--wl__star">*</span
  ><span class="tps-theme--wl__content">Company Name</span>
</div>
`;
const REQUAIRED_INDICATOR_LABEL_HTML = `<div>
  <span class="tps-theme--wl__star">*</span
  ><span class="tps-theme--wl__content">Indicates a required field</span>
</div>`;

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

// FEDERAL ALLOWNESS
const FEDERALL_ALLOWNESS_ID =
  "tps_create_stub_employeeProfile_federalWithholdingAllowances";

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
const EMPLOYEE_ADDITIONAL_CLICK_LABEL_HTML = `<div class="tps-theme--si">
  <span class="form-rest__cta">Show Optional Employee Information</span
  ><span class="tps-theme--si__it"
    >(ID, Federal Filing Status, State Filing Status)</span
  >
</div>
`;
const EMPLOYEE_ADDITIONAL_CLICK_LABEL_OPENED_HTML = `<div class="tps-theme--si">
  <span class="form-rest__cta">Hide Optional Employee Information</span
  ><span class="tps-theme--si__it"
    >(ID, Federal Filing Status, State Filing Status)</span
  >
</div>
`;
const EMPLOYEE_SOME_ID = "tps_create_stub_employeeProfile_employeeID";
const EMPLOYEE_APT_ID =
  "tps_create_stub_employeeProfile_address_apartmentNumber";

// HOURLY RATE CONST
const HOURLY_RATE_ID = "tps_create_stub_salaryProfile_hourlyRate";
const HOURTL_RATE_HTML = `<div class="form-block fm-pristine fm-valid fm-not-empty fm-touched">
  <label
    for="tps_create_stub_salaryProfile_hourlyRate"
    class="form-block__label tps-theme--wl"
  >
    <div>
      <span class="tps-theme--wl__star">*</span
      ><span class="tps-theme--wl__content">Hourly Rate</span>
    </div></label
  ><input
    type="text"
    autocomplete="no"
    id="tps_create_stub_salaryProfile_hourlyRate"
    name="tps_create_stub[salaryProfile][payDates][1][grossPayYTD]"
    required="required"
    placeholder="0.00"
    inputmode="numeric"
    class="form-input form-input--money fm-pristine fm-valid fm-not-empty fm-touched tps-theme--hr"
  />
</div>
`;

// ADD EMPLOYEE HIRE DATE CHECK BOX CONSTS
const ADD_EMPLOYEE_HIRE_DATE_ID = "tps_create_stub_salaryProfile_isNewHire";

// W4 CONSTS
const W4_ID = "tps_create_stub_employeeProfile_isW4FormBefore2020";

// ADVABSED PAY DATE CONSTS
const ADVANSED_PAY_DATE_ID = "tps_create_stub_salaryProfile_isAdvancedPayDates";

// PAY DATES CONST
const PAY_DATES_NEEDED_HTML = `<div class="paydates-notice">
 <div>
  <span class="tps-theme--wl__star">*</span
  ><span class="tps-theme--wl__content paydates-notice__title">Pay Dates Needed</span>
</div>
  <div class="paydates-notice__notice">
    Pay Dates will be added consecutively, and are directly affected by the Pay
    Period Frequency chosen in the above drop-down.
  </div>
</div>

`;
const PAY_DATES_EMPLOYEE_ID =
  "tps_create_stub_salaryProfile_payDates_0_payDate";
const PAY_DATES_EMPLOYEE_HTML = `<div class="form-block fm-pristine fm-untouched fm-valid fm-not-empty">
  <label
    for="tps_create_stub_salaryProfile_payDates_0_payDate"
    class="form-block__label"
  ><div>
      <span class="tps-theme--wl__star">*</span
      ><span class="tps-theme--wl__content">Employee Pay Date</span>
    </div></label
  ><input
    type="text"
    autocomplete="no"
    id="tps_create_stub_salaryProfile_payDates_0_payDate"
    name="tps_create_stub[salaryProfile][payDates][0][payDate]"
    readonly="readonly"
    class="form-input--date pay-date form-input fm-pristine fm-untouched fm-valid fm-not-empty"
    tooltip="The date the employee received payment."
    data-formify-ptarget="1"
    placeholder="Optional"
    data-tippy-content="The date the employee received payment."
    value="06-12-2022"
  />
</div>
`;

const PAY_DATE_EMPLOYEE_WORKED_ID =
  "tps_create_stub_salaryProfile_payDates_0_hoursWorked";
const PAY_DATE_EMPLOYEE_WORKED_HTML = `<div
  class="form-block form-block--hours fm-pristine fm-valid fm-not-empty fm-touched"
>
  <label
    for="tps_create_stub_salaryProfile_payDates_0_hoursWorked"
    class="form-block__label"
  ><div>
      <span class="tps-theme--wl__star">*</span
      ><span class="tps-theme--wl__content">Hours Worked</span>
    </div></label
  ><input
    type="text"
    autocomplete="no"
    id="tps_create_stub_salaryProfile_payDates_0_hoursWorked"
    name="tps_create_stub[salaryProfile][payDates][0][hoursWorked]"
    required="required"
    class="form-block--hours form-input fm-pristine fm-valid fm-not-empty fm-touched"
    placeholder="0"
    inputmode="numeric"
    error_message="Please fill out the hours worked"
    data-formify-ptarget="1"
    value="80"
  />
  <div class="form-block__error">Please fill out the hours worked</div>
</div>
`;

const PAY_DATE_CHECK_ID =
  "tps_create_stub_salaryProfile_payDates_0_checkNumber";

const PAY_PERIOD_START_DATE_ID =
  "tps_create_stub_salaryProfile_payDates_0_startDate";

const PAY_PERIOD_START_DATE_HTML = `<div class="form-block fm-valid fm-not-empty fm-dirty fm-touched">
  <label
    for="tps_create_stub_salaryProfile_payDates_0_startDate"
    class="form-block__label"
  ><div>
      <span class="tps-theme--wl__star">*</span
      ><span class="tps-theme--wl__content">Start Date</span>
    </div></label
  ><input
    type="text"
    autocomplete="no"
    id="tps_create_stub_salaryProfile_payDates_0_startDate"
    name="tps_create_stub[salaryProfile][payDates][0][startDate]"
    class="form-input--date start-period-date form-input fm-valid fm-not-empty fm-dirty fm-touched"
    readonly="readonly"
    tooltip="A pay period is the date range, from start to end, that the employee worked to earn their wages."
    data-formify-ptarget="1"
    placeholder="Optional"
    data-tippy-content="A pay period is the date range, from start to end, that the employee worked to earn their wages."
    value="05-23-2022"
    data-gtm-form-interact-field-id="1"
  />
</div>
`;

const PAY_PERIOD_END_DATE_ID =
  "tps_create_stub_salaryProfile_payDates_0_endDate";
const PAY_PERIOD_END_DATE_HTML = `<div class="form-block fm-pristine fm-untouched fm-valid fm-not-empty">
  <label
    for="tps_create_stub_salaryProfile_payDates_0_endDate"
    class="form-block__label"
  ><div>
      <span class="tps-theme--wl__star">*</span
      ><span class="tps-theme--wl__content">End Date</span>
    </div> </label
  ><input
    type="text"
    autocomplete="no"
    id="tps_create_stub_salaryProfile_payDates_0_endDate"
    name="tps_create_stub[salaryProfile][payDates][0][endDate]"
    class="form-input--date end-period-date form-input fm-pristine fm-untouched fm-valid fm-not-empty"
    readonly="readonly"
    tooltip="A pay period is the date range, from start to end, that the employee worked to earn their wages."
    data-formify-ptarget="1"
    placeholder="Optional"
    data-tippy-content="A pay period is the date range, from start to end, that the employee worked to earn their wages."
    value="06-05-2022"
  />
</div>
`;

const PAY_DATE_SUM_OF_WAGES_ID =
  "tps_create_stub_salaryProfile_payDates_0_grossPayYTD";

const PAY_DATE_PREVIUYSE_PAY_ID = `tps_create_stub_salaryProfile_payDates_0_payPeriodYTD`;

const PAY_DATE_WAGES_AND_PPAY_HTML = `<div class="tps-theme--flex">
<div class="gross-ytd advanced-mode tps-theme--flex__item">
    <div
      class="form-block fm-pristine fm-invalid fm-empty fm-invalid-value-missing fm-touched"
    >
      <label
        for="tps_create_stub_salaryProfile_payDates_0_grossPayYTD"
        class="form-block__label"
      >
      <div>
        <span class="tps-theme--wl__star">*</span
        ><span class="tps-theme--wl__content">Sum of previous basic wages this year</span>
      </div>  
    </label
      ><input
        type="text"
        autocomplete="no"
        id="tps_create_stub_salaryProfile_payDates_0_grossPayYTD"
        name="tps_create_stub[salaryProfile][payDates][0][grossPayYTD]"
        required="required"
        placeholder="0.00"
        inputmode="numeric"
        data-tooltip-salary="Gross Pay YTD is the amount earned before deductions by an individual from the start of the fiscal year up to this date excluding commissions and bonuses.ThePaystubs.com assumes that the total amount is based on the individual’s annual salary, pay frequency, and selected pay dates. If our computations do not match the actual Gross Pay YTD, feel free to make the necessary changes."
        data-tooltip-hourly="Gross Pay YTD is the amount earned before deductions by an individual from the start of the fiscal year up to this date excluding commissions and bonuses. ThePaystub.com assumes that the total amount is based on the individual’s Hourly Rate, Hours Worked, Pay Frequency, and Pay Dates. If our computations do not match the actual Gross Pay YTD, feel free to make the necessary changes."
        data-formify-ptarget="1"
        class="form-input form-input--money fm-pristine fm-invalid fm-empty fm-invalid-value-missing fm-touched"
      />
    </div>
  </div>
  <div class="advanced-mode pp-ytd tps-theme--flex__item">
    <div class="form-block fm-pristine fm-untouched fm-valid fm-not-empty">
      <label
        for="tps_create_stub_salaryProfile_payDates_0_payPeriodYTD"
        class="form-block__label"
      >
      <div>
        <span class="tps-theme--wl__star">*</span
        ><span class="tps-theme--wl__content">Number of Previous Pay Dates this year</span>
      </div> 
      </label
      ><select
        data-formify-ptarget="1"
        id="tps_create_stub_salaryProfile_payDates_0_payPeriodYTD"
        name="tps_create_stub[salaryProfile][payDates][0][payPeriodYTD]"
        class="pay-period-ytd form-input form-input--select fm-pristine fm-untouched fm-valid fm-not-empty"
        tooltip="A pay period YTD is how many times the employee has been paid this year, not including the current wage period."
        placeholder="Optional"
        data-tippy-content="A pay period YTD is how many times the employee has been paid this year, not including the current wage period."
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
      </select>
    </div>
  </div>
</div>
`;

const ADD_PAY_DATE_BUTTON_HTML = `<div class="tps-theme--ca collection__add">
  <span class="tps-theme--ca__content">+ Add Previous Pay Date</span>
</div>
`;

/**
 * company name actions
 */
const companyName = document.getElementById(COMPANY_NAME_ID);
const companyeNameLabel = companyName.parentElement.querySelector("label");
companyeNameLabel.classList.add("tps-theme--wl");
companyeNameLabel.innerHTML = COMPANY_NAME_LABEL_HTML;
companyName.removeAttribute("placeholder");
const requiredIndicator = document.createElement("div");
requiredIndicator.innerHTML = REQUAIRED_INDICATOR_LABEL_HTML;
const sectionBlock = companyName.parentElement.closest("div .section-block");
const title = sectionBlock.querySelector("h2");
sectionBlock.insertBefore(requiredIndicator, title);
document.querySelector(".form-section__required").remove();
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

// federal allowness
const federalAllowness = document.getElementById(FEDERALL_ALLOWNESS_ID);
federalAllowness.removeAttribute("placeholder");

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

console.log(hiddenElements);

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
if (employeeAdditionalClickLabel) {
  employeeAdditionalClickLabel.onclick = () => {
    for (let i = 0; i < parentForHiddenElement.children.length; i++) {
      if (i == 0) continue;
      if (i == 1) continue;
      if (parentForHiddenElement.children[i].classList.contains("u-hidden")) {
        parentForHiddenElement.children[i].classList.remove("u-hidden");
        employeeAdditionalClickLabel.innerHTML =
          EMPLOYEE_ADDITIONAL_CLICK_LABEL_OPENED_HTML;
      } else {
        parentForHiddenElement.children[i].classList.add("u-hidden");
        employeeAdditionalClickLabel.innerHTML =
          EMPLOYEE_ADDITIONAL_CLICK_LABEL_HTML;
      }
    }
  };
}

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

const payDatesNeeded = document.querySelector("div .paydates-notice");
payDatesNeeded.outerHTML = PAY_DATES_NEEDED_HTML;

//remove year tag container
const yearTagContainer = document.querySelector("div .year-tag-container");
yearTagContainer.style.display = "none";

// Pay dates
const paydate1 = document.querySelector("div .paydates-index-wrapper");
paydate1.className = "";
paydate1.classList.add("tps-theme--pd");
paydate1.parentElement.querySelector("div .paydates-line").remove();
paydate1.parentElement.querySelector("div .collection__remove").remove();

const employeePayDate = document.getElementById(PAY_DATES_EMPLOYEE_ID);
employeePayDate.parentElement.outerHTML = PAY_DATES_EMPLOYEE_HTML;

const employeePayHours = document.getElementById(PAY_DATE_EMPLOYEE_WORKED_ID);
employeePayHours.parentElement.outerHTML = PAY_DATE_EMPLOYEE_WORKED_HTML;

const employeeCheckNo = document.getElementById(PAY_DATE_CHECK_ID);
employeeCheckNo.parentElement.classList.remove("form-block--inline-label");
employeeCheckNo.style.width = "181px";
employeeCheckNo.parentElement.querySelector("label").innerText = "Check Number";
employeeCheckNo.classList.remove("form-block--inline-label");

const employeeStartDate = document.getElementById(PAY_PERIOD_START_DATE_ID);
employeeStartDate.parentElement.outerHTML = PAY_PERIOD_START_DATE_HTML;

const employeeEndDate = document.getElementById(PAY_PERIOD_END_DATE_ID);
employeeEndDate.parentElement.outerHTML = PAY_PERIOD_END_DATE_HTML;

const employSumOfWages = document.getElementById(PAY_DATE_SUM_OF_WAGES_ID);
employSumOfWages.parentElement.remove();

const employeePpay = document.getElementById(PAY_DATE_PREVIUYSE_PAY_ID);
employeePpay.parentElement.outerHTML = PAY_DATE_WAGES_AND_PPAY_HTML;

const deduction = document.querySelector("div .js-add-addition-deduction");
// deduction.className = "";
deduction.querySelector("span").remove();
deduction.innerText = "+ Add Additions and/or Deductions";
deduction.classList.add("tps-theme--ad");

document.querySelector("div .paydates-collection").querySelector("hr").remove();

// document.querySelector("div .collection__add").outerHTML =
//   ADD_PAY_DATE_BUTTON_HTML;
