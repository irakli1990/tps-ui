/**
 * company name actions
 */
const tps_create_stub_companyProfile_name = document.getElementById(
  "tps_create_stub_companyProfile_name"
);

tps_create_stub_companyProfile_name.parentElement.querySelector(
  "label"
).innerText = "* Company Name";

tps_create_stub_companyProfile_name.parentElement.querySelector(
  "label"
).innerText = "* Company Name";

/**
 * company address actions
 */
const tps_create_stub_companyProfile_address_streetAddress =
  document.getElementById(
    "tps_create_stub_companyProfile_address_streetAddress"
  );

tps_create_stub_companyProfile_address_streetAddress.parentElement.querySelector(
  "label"
).innerText = "* Company Address";

tps_create_stub_companyProfile_address_streetAddress.parentElement.querySelector(
  "label"
).innerText = "* Street Address";

/**
 * street adrtess block
 */

document.querySelector(".tps-address__block").classList.remove("u-hidden");
/**
 * hourly rate
 */
const tps_create_stub_salaryProfile_hourlyRate = document.getElementById(
  "tps_create_stub_salaryProfile_hourlyRate"
);

tps_create_stub_salaryProfile_hourlyRate.classList.remove("form-input--money");

const tps_create_stub_employeeProfile_socialSecurityNumber =
  document.getElementById(
    "tps_create_stub_employeeProfile_socialSecurityNumber"
  );

// maxlength="4"   pattern="^0[1-9]|[1-9]\d$

tps_create_stub_employeeProfile_socialSecurityNumber.setAttribute(
  "maxlength",
  "4"
);

tps_create_stub_employeeProfile_socialSecurityNumber.setAttribute(
  "pattern",
  "^0[1-9]|[1-9]d$"
);

const ssnInlineLabel = `<label
  for="tps_create_stub_employeeProfile_socialSecurityNumber"
  class="form-block__label"
>
  Check No.{" "}
</label>`;

tps_create_stub_employeeProfile_socialSecurityNumber.classList.add(
  "tps-theme--ssn"
);

tps_create_stub_employeeProfile_socialSecurityNumber.classList.add(
  "form-block--inline-label"
);

// how ofen paid

const tps_create_stub_salaryProfile_payFrequency = document.getElementById(
  "tps_create_stub_salaryProfile_payFrequency"
);

tps_create_stub_salaryProfile_payFrequency.classList.add("tps-theme--hop");

// company logo

const tps_create_stub_companyProfile_logo = document.getElementById(
  "tps_create_stub_companyProfile_logo"
);

tps_create_stub_companyProfile_logo.parentElement
  .querySelector("label")
  .classList.add("tps-theme--cl");

// Phone number
const tps_create_stub_companyProfile_phoneNumber = document.getElementById(
  "tps_create_stub_companyProfile_phoneNumber"
);

tps_create_stub_companyProfile_phoneNumber.setAttribute(
  "placeholder",
  "( __ ) ____ - ____"
);

// EIN
const tps_create_stub_companyProfile_employerIdentificationNumber =
  document.getElementById(
    "tps_create_stub_companyProfile_employerIdentificationNumber"
  );

tps_create_stub_companyProfile_employerIdentificationNumber.setAttribute(
  "placeholder",
  "__ - _______"
);

tps_create_stub_companyProfile_employerIdentificationNumber.parentElement.querySelector(
  "label"
).innerText = "Company EIN";

//EXT. no
const tps_create_stub_companyProfile_phoneNumberExt = document.getElementById(
  "tps_create_stub_companyProfile_phoneNumberExt"
);

tps_create_stub_companyProfile_phoneNumberExt.removeAttribute("placeholder");
