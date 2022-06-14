// COMPANY SECTION
const COMPANY_SECTION_HTML = `<div class="section-block">
  <h2 class="tps-theme--company-title">1. Company Information</h2>
  <div class="tps-theme--required__title">
    <span class="tps-theme--required__star">*</span
    ><span class="tps-theme--required__content">Indicates a required field</span>
  </div>
  <hr class="tps-theme--divider" />
  <div
    class="form-block fm-pristine fm-invalid fm-empty fm-invalid-value-missing fm-touched"
  >
    <label for="tps_create_stub_companyProfile_name" class="form-block__label">
      <div>
        <span class="tps-theme--required__star">*</span
        ><span class="tps-theme--required__content">Company Name</span>
      </div></label
    ><input
      type="text"
      autocomplete="no"
      id="tps_create_stub_companyProfile_name"
      name="tps_create_stub[companyProfile][name]"
      required="required"
      maxlength="120"
      error_message="Please enter the company's name"
      autofocus="autofocus"
      tooltip="Enter the name of the company"
      data-formify-ptarget="1"
      data-tippy-content="Enter the name of the company"
      class="form-input fm-pristine fm-invalid fm-empty fm-invalid-value-missing fm-touched"
    />
    <div class="form-block__error">Please enter the company's name</div>
  </div>
  <div class="tps-address">
    <div>
      <div class="tps-address__street-address">
        <div
          class="form-block fm-pristine fm-untouched fm-invalid fm-empty fm-invalid-value-missing"
        >
          <label
            for="tps_create_stub_companyProfile_address_streetAddress"
            class="form-block__label"
          >
            <div>
              <span class="tps-theme--required__star">*</span
              ><span class="tps-theme--required__content">Street Adress</span>
            </div> </label
          ><input
            type="text"
            autocomplete="off"
            id="tps_create_stub_companyProfile_address_streetAddress"
            name="tps_create_stub[companyProfile][address][streetAddress]"
            required="required"
            class="js-address form-input fm-pristine fm-untouched fm-invalid fm-empty fm-invalid-value-missing"
            error_message="Please fill out the address"
            data-formify-ptarget="1"
          />
          <div class="form-block__error">Please fill out the address</div>
        </div>
      </div>
      <div class="tps-address__block">
        <div class="tps-address__rows u-flex">
          <div class="tps-address__row">
            <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
              <label
                for="tps_create_stub_companyProfile_address_apartmentNumber"
                class="form-block__label"
              >
                Apt/Ste No. </label
              ><input
                type="text"
                autocomplete="no"
                id="tps_create_stub_companyProfile_address_apartmentNumber"
                name="tps_create_stub[companyProfile][address][apartmentNumber]"
                maxlength="255"
                data-formify-ptarget="1"
                class="form-input fm-pristine fm-untouched fm-valid fm-empty"
              />
            </div>
          </div>
          <div class="tps-address__row">
            <div
              class="form-block fm-pristine fm-untouched fm-invalid fm-empty fm-invalid-value-missing"
            >
              <label
                for="tps_create_stub_companyProfile_address_city"
                class="form-block__label"
              >
                <div>
                  <span class="tps-theme--required__star">*</span
                  ><span class="tps-theme--required__content">City</span>
                </div> </label
              ><input
                type="text"
                autocomplete="no"
                id="tps_create_stub_companyProfile_address_city"
                name="tps_create_stub[companyProfile][address][city]"
                required="required"
                maxlength="255"
                class="js-city form-input fm-pristine fm-untouched fm-invalid fm-empty fm-invalid-value-missing"
                error_message="Please fill out the city"
                data-formify-ptarget="1"
              />
              <div class="form-block__error">Please fill out the city</div>
            </div>
          </div>
        </div>
        <div class="tps-address__rows u-flex">
          <div class="tps-address__row">
            <div
              class="form-block fm-pristine fm-untouched fm-valid fm-not-empty"
            >
              <label
                for="tps_create_stub_companyProfile_address_state"
                class="form-block__label"
              >
                State</label
              ><select
                data-formify-ptarget="1"
                id="tps_create_stub_companyProfile_address_state"
                name="tps_create_stub[companyProfile][address][state]"
                class="js-state form-input form-input--select fm-pristine fm-untouched fm-valid fm-not-empty"
                placeholder="This field is mandatory"
              >
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA" selected="selected">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="DC">DC</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY">WY</option>
              </select>
            </div>
          </div>
          <div class="tps-address__row">
            <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
              <label
                for="tps_create_stub_companyProfile_address_zipCode"
                class="form-block__label"
              >
                <div>
                  <span class="tps-theme--required__star">*</span
                  ><span class="tps-theme--required__content">Zip code</span>
                </div></label
              ><input
                type="text"
                autocomplete="no"
                id="tps_create_stub_companyProfile_address_zipCode"
                name="tps_create_stub[companyProfile][address][zipCode]"
                class="js-zipcode form-input--number form-input fm-pristine fm-untouched fm-valid fm-empty"
                error_message="Please fill out the zip code"
                data-formify-ptarget="1"
              />
              <div class="form-block__error">Please fill out the zip code</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-rest form-rest--show">
  <div class="tps-theme--show-container">
    <span class="form-rest__cta">Show Optional Company Information</span
    >
    <span class="tps-theme--show-container__subtitle"
      >(Logo, Phone Number, EIN/SSN)</span
    >
    </div>
    <div class="form-rest__content">
      <div class="form-logo-upload" data-tooltip="">
        <div class="form-block form-logo">
          <label for="logo-upload" class="form-block__label tps-theme--cl">
            Company Logo </label
          ><input
            type="hidden"
            id="tps_create_stub_companyProfile_logo"
            name="tps_create_stub[companyProfile][logo]"
            placeholder="Optional"
            class="fm-pristine fm-untouched fm-valid fm-empty"
          /><input
            type="file"
            id="logo-upload"
            class="form-input fm-pristine fm-untouched fm-valid fm-empty"
            accept="image/*"
          />
          <div class="form-logo-upload__chosen u-hidden">
            <img src="" class="company-cropped-logo" /><span
              class="company-cropped-logo-name"
            ></span
            ><span class="company-cropped-logo-remove">x</span>
          </div>
        </div>
      </div>
      <div class="form-phone u-flex">
        <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
          <label
            for="tps_create_stub_companyProfile_phoneNumber"
            class="form-block__label"
          >
            Company Phone Number </label
          ><input
            type="text"
            autocomplete="no"
            id="tps_create_stub_companyProfile_phoneNumber"
            name="tps_create_stub[companyProfile][phoneNumber]"
            maxlength="255"
            notice="Your phone number is kept confidential and we never share it with any third party organizations."
            data-mask="(000) 000 - 0000"
            inputmode="numeric"
            error_message="Please enter the company's phone number"
            data-formify-ptarget="1"
            class="form-input fm-pristine fm-untouched fm-valid fm-empty"
            placeholder="( _ _ ) _ _ _ _ _ _ _ _"
          />
          <div class="form-block__error">
            Please enter the company's phone number
          </div>
        </div>
        <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
          <label
            for="tps_create_stub_companyProfile_phoneNumberExt"
            class="form-block__label"
          >
            Ext. No. </label
          ><input
            type="text"
            autocomplete="no"
            id="tps_create_stub_companyProfile_phoneNumberExt"
            name="tps_create_stub[companyProfile][phoneNumberExt]"
            maxlength="255"
            pattern="\d*"
            inputmode="numeric"
            data-formify-ptarget="1"
            class="form-input fm-pristine fm-untouched fm-valid fm-empty"
          />
        </div>
      </div>
      <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
        <label
          for="tps_create_stub_companyProfile_employerIdentificationNumber"
          class="form-block__label"
        >
          Company EIN </label
        ><input
          type="text"
          autocomplete="no"
          id="tps_create_stub_companyProfile_employerIdentificationNumber"
          name="tps_create_stub[companyProfile][employerIdentificationNumber]"
          maxlength="255"
          data-mask="00-0000000"
          inputmode="numeric"
          error_message="Please enter the company's EIN/SSN"
          tooltip="Employer Identification number (EIN), are 9 digits given to any 
                                  business that pays employees also known as a Federal tax 
                                  identification number.
                                  A Social Security number (SSN) is a unique 9 digit code
                                  given to U.S citizens and authorized residents."
          data-formify-ptarget="1"
          placeholder="_ _ _ _ _ _ _ _ _ _"
          data-tippy-content="Employer Identification number (EIN), are 9 digits given to any 
                                  business that pays employees also known as a Federal tax 
                                  identification number.
                                  A Social Security number (SSN) is a unique 9 digit code
                                  given to U.S citizens and authorized residents."
          class="form-input fm-pristine fm-untouched fm-valid fm-empty"
        />
        <div class="form-block__error">Please enter the company's EIN/SSN</div>
      </div>
    </div>
  </div>
</div>
`;

const EMPLOYEE_SECTION_HTML = `<div class="section-block">
  <h2 class="section-block__title js-employee-header">
    2. Employee Information
  </h2>
  <div class="form-block">
    <span class="form-block__label">What is the employees’ status?</span>
    <div
      class="form-block-radio u-flex"
      id="tps_create_stub_employeeProfile_employmentStatus"
    >
      <div class="form-radio fm-pristine fm-untouched fm-valid fm-not-empty">
        <input
          type="radio"
          name="tps_create_stub[employeeProfile][employmentStatus]"
          id="tps_create_stub_employeeProfile_employmentStatus_0"
          value="employee"
          data-formify-ptarget="1"
          required="required"
          checked=""
          class="fm-pristine fm-untouched fm-valid fm-not-empty"
        /><label for="tps_create_stub_employeeProfile_employmentStatus_0"
          ><span class="form-input-check__mark"></span>Employee
        </label>
      </div>
      <div class="form-radio fm-pristine fm-untouched fm-valid fm-empty">
        <input
          type="radio"
          name="tps_create_stub[employeeProfile][employmentStatus]"
          id="tps_create_stub_employeeProfile_employmentStatus_1"
          value="contractor"
          data-formify-ptarget="1"
          required="required"
          class="fm-pristine fm-untouched fm-valid fm-empty"
        /><label for="tps_create_stub_employeeProfile_employmentStatus_1"
          ><span class="form-input-check__mark"></span>Contractor
        </label>
      </div>
    </div>
  </div>
  <div>
    <div
      class="form-block fm-pristine fm-untouched fm-invalid fm-empty fm-invalid-value-missing"
    >
      <label
        for="tps_create_stub_employeeProfile_name"
        class="form-block__label"
      >
        <div>
          <span class="tps-theme--required__star">*</span
          ><span class="tps-theme--required__content">Employee Full Name</span>
        </div> </label
      ><input
        type="text"
        autocomplete="no"
        id="tps_create_stub_employeeProfile_name"
        name="tps_create_stub[employeeProfile][name]"
        required="required"
        maxlength="255"
        class="employee-name form-input fm-pristine fm-untouched fm-invalid fm-empty fm-invalid-value-missing"
        error_message="The employee's full name is required"
        data-formify-ptarget="1"
      />
      <div class="form-block__error">The employee's full name is required</div>
    </div>
    <div
      class="form-block fm-pristine fm-untouched fm-invalid fm-empty fm-invalid-value-missing"
    >
      <label
        for="tps_create_stub_employeeProfile_socialSecurityNumber"
        class="form-block__label"
      >
        <div>
          <span class="tps-theme--required__star">*</span
          ><span class="tps-theme--required__content"
            >Last 4 Digits of employee Social Security Number</span
          >
        </div>
      </label>
      <div class="form-block__notice">
        This data is stored securely and never shared with any third party. It
        is only used to generate your paystub.
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
          placeholder="_ _ _ _"
          id="tps_create_stub_employeeProfile_socialSecurityNumber_1"
          class="form-block--inline-label tps-theme--social-security-number check-number form-input fm-pristine fm-valid fm-not-empty fm-touched"
          data-formify-ptarget="1"
        />
        <div class="form-block__error">This field is required</div>
      </div>
    </div>
    <div class="form-block__error">
      This social security number is invalid. Please fill at least the last 4
      digits of the SSN.
    </div>
  </div>
    </div>
  </div>
  <div class="hide-on-contractor w4-form">
    <div class="u-flex form-block form-block-checkbox">
      <div class="tps-theme--checkbox">
        <input
          type="checkbox"
          id="tps_create_stub_employeeProfile_isW4FormBefore2020"
          name="tps_create_stub[employeeProfile][isW4FormBefore2020]"
          value="1"
        />
         <label
          for="tps_create_stub_employeeProfile_isW4FormBefore2020"
          class="form-block__label"
        >
          Using a W4 from 2020 or beyond 
        </label>
      </div>
     
    </div>
    <div>
      <div class="w4-form__content">
        <div class="u-flex form-block form-block-checkbox">
          <div class="form-block__label">Working multiple jobs?</div>
          <div
            class="tps-theme--checkbox"
            data-tippy-content="Finish this step if you (1) currently have two jobs, or (2) married filing jointly and you and your spouse each have one job. This can be found on form W-4, Step 2 Box (c)."
          >
            <input
              type="checkbox"
              id="tps_create_stub_employeeProfile_hasMultipleJobs"
              name="tps_create_stub[employeeProfile][hasMultipleJobs]"
              tooltip="Finish this step if you (1) currently have two jobs, or (2) married filing jointly and you and your spouse each have one job. This can be found on form W-4, Step 2 Box (c)."
              value="1"
            />
            <label
          for="tps_create_stub_employeeProfile_isW4FormBefore2020"
          class="form-block__label"
        >
          Using a W4 from 2020 or beyond 
        </label>
          </div>
        </div>
        <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
          <label
            for="tps_create_stub_employeeProfile_dependentsAmount"
            class="form-block__label"
          >
            Dependent Total </label
          ><input
            type="text"
            autocomplete="no"
            id="tps_create_stub_employeeProfile_dependentsAmount"
            name="tps_create_stub[employeeProfile][dependentsAmount]"
            tooltip="If individual income will be $200,00 or less or combined income of spouses filing jointly will be $400,000, enter in the field the sum of (1) the number of qualifying children under 17 multiplied by $2,000 and (2) the number of other dependents multiplied by $500. This can be found in for W-4, Step 3."
            inputmode="numeric"
            data-formify-ptarget="1"
            placeholder="Optional"
            data-tippy-content="If individual income will be $200,00 or less or combined income of spouses filing jointly will be $400,000, enter in the field the sum of (1) the number of qualifying children under 17 multiplied by $2,000 and (2) the number of other dependents multiplied by $500. This can be found in for W-4, Step 3."
            class="form-input form-input--money fm-pristine fm-untouched fm-valid fm-empty"
          />
        </div>
        <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
          <label
            for="tps_create_stub_employeeProfile_otherIncomeAmount"
            class="form-block__label"
          >
            Other Income Amount </label
          ><input
            type="text"
            autocomplete="no"
            id="tps_create_stub_employeeProfile_otherIncomeAmount"
            name="tps_create_stub[employeeProfile][otherIncomeAmount]"
            tooltip="If you want to withhold tax for other income you expect this year that do not have withholding, type the amount of other income here. Other income may include interest, dividends, and retirement income. You will be able to find this amount in form W-4, Step 4 Box(a)."
            inputmode="numeric"
            data-formify-ptarget="1"
            placeholder="Optional"
            data-tippy-content="If you want to withhold tax for other income you expect this year that do not have withholding, type the amount of other income here. Other income may include interest, dividends, and retirement income. You will be able to find this amount in form W-4, Step 4 Box(a)."
            class="form-input form-input--money fm-pristine fm-untouched fm-valid fm-empty"
          />
        </div>
        <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
          <label
            for="tps_create_stub_employeeProfile_deductionsAmount"
            class="form-block__label"
          >
            Deduction Amount </label
          ><input
            type="text"
            autocomplete="no"
            id="tps_create_stub_employeeProfile_deductionsAmount"
            name="tps_create_stub[employeeProfile][deductionsAmount]"
            tooltip="Use this field if you want to reduce your withholding by claiming deductions other than the standard deduction. You will be able to find this amount in form W-4, Step 4 Box (b)."
            inputmode="numeric"
            data-formify-ptarget="1"
            placeholder="Optional"
            data-tippy-content="Use this field if you want to reduce your withholding by claiming deductions other than the standard deduction. You will be able to find this amount in form W-4, Step 4 Box (b)."
            class="form-input form-input--money fm-pristine fm-untouched fm-valid fm-empty"
          />
        </div>
      </div>
      <div class="w4-form__content">
        <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
          <label
            for="tps_create_stub_employeeProfile_federalWithholdingAllowances"
            class="form-block__label"
          >
            Number of Federal Allowances </label
          ><input
            type="text"
            autocomplete="no"
            id="tps_create_stub_employeeProfile_federalWithholdingAllowances"
            name="tps_create_stub[employeeProfile][federalWithholdingAllowances]"
            tooltip="The total number of allowances the employee is claiming. This is found in 2019 form W4, Number 5."
            inputmode="numeric"
            data-formify-ptarget="1"
            data-tippy-content="The total number of allowances the employee is claiming. This is found in 2019 form W4, Number 5."
            class="form-input form-input--number fm-pristine fm-untouched fm-valid fm-empty"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="employee-address js-employee-address"></div>
  <div class="form-rest form-rest--show">
    <div class="form-rest__content">
      <div class="contractor-address js-employee-address">
        <div class="tps-address">
          <div>
            <div class="tps-address__street-address">
              <div
                class="form-block fm-pristine fm-untouched fm-empty fm-valid"
              >
                <label
                  for="tps_create_stub_employeeProfile_address_streetAddress"
                  class="form-block__label"
                >
              <div>
                <span class="tps-theme--required__star">*</span
                ><span class="tps-theme--required__content">Employee Address</span>
              </div>
            </label>
                <input
                  type="text"
                  autocomplete="off"
                  id="tps_create_stub_employeeProfile_address_streetAddress"
                  name="tps_create_stub[employeeProfile][address][streetAddress]"
                  class="js-address form-input fm-pristine fm-untouched fm-empty fm-valid"
                  error_message="Please fill out the address"
                  data-formify-ptarget="1"
                />
                <div class="form-block__error">Please fill out the address</div>
              </div>
            </div>
            <div class="tps-address__block">
              <div class="tps-address__rows u-flex">
                <div class="tps-address__row">
                  <div
                    class="form-block fm-pristine fm-untouched fm-valid fm-empty"
                  >
                    <label
                      for="tps_create_stub_employeeProfile_address_apartmentNumber"
                      class="form-block__label"
                    >
                      Apt/Ste No. </label
                    ><input
                      type="text"
                      autocomplete="no"
                      id="tps_create_stub_employeeProfile_address_apartmentNumber"
                      name="tps_create_stub[employeeProfile][address][apartmentNumber]"
                      maxlength="255"
                      data-formify-ptarget="1"
                      class="form-input fm-pristine fm-untouched fm-valid fm-empty"
                    />
                  </div>
                </div>
                <div class="tps-address__row">
                  <div
                    class="form-block fm-pristine fm-untouched fm-empty fm-valid"
                  >
                    <label
                      for="tps_create_stub_employeeProfile_address_city"
                      class="form-block__label"
                    >
                      <div>
                        <span class="tps-theme--required__star">*</span
                        ><span class="tps-theme--required__content">City</span>
                    </div> </label
                    ><input
                      type="text"
                      autocomplete="no"
                      id="tps_create_stub_employeeProfile_address_city"
                      name="tps_create_stub[employeeProfile][address][city]"
                      maxlength="255"
                      class="js-city form-input fm-pristine fm-untouched fm-empty fm-valid"
                      error_message="Please fill out the city"
                      data-formify-ptarget="1"
                    />
                    <div class="form-block__error">
                      Please fill out the city
                    </div>
                  </div>
                </div>
              </div>
              <div class="tps-address__rows u-flex">
                <div class="tps-address__row">
                  <div
                    class="form-block fm-pristine fm-untouched fm-valid fm-not-empty"
                  >
                    <label
                      for="tps_create_stub_employeeProfile_address_state"
                      class="form-block__label"
                    >
                      State </label
                    ><select
                      data-formify-ptarget="1"
                      id="tps_create_stub_employeeProfile_address_state"
                      name="tps_create_stub[employeeProfile][address][state]"
                      class="js-state form-input form-input--select fm-pristine fm-untouched fm-valid fm-not-empty"
                      placeholder="Optional"
                    >
                      <option value="AL">AL</option>
                      <option value="AK">AK</option>
                      <option value="AZ">AZ</option>
                      <option value="AR">AR</option>
                      <option value="CA" selected="selected">CA</option>
                      <option value="CO">CO</option>
                      <option value="CT">CT</option>
                      <option value="DE">DE</option>
                      <option value="DC">DC</option>
                      <option value="FL">FL</option>
                      <option value="GA">GA</option>
                      <option value="HI">HI</option>
                      <option value="ID">ID</option>
                      <option value="IL">IL</option>
                      <option value="IN">IN</option>
                      <option value="IA">IA</option>
                      <option value="KS">KS</option>
                      <option value="KY">KY</option>
                      <option value="LA">LA</option>
                      <option value="ME">ME</option>
                      <option value="MD">MD</option>
                      <option value="MA">MA</option>
                      <option value="MI">MI</option>
                      <option value="MN">MN</option>
                      <option value="MS">MS</option>
                      <option value="MO">MO</option>
                      <option value="MT">MT</option>
                      <option value="NE">NE</option>
                      <option value="NV">NV</option>
                      <option value="NH">NH</option>
                      <option value="NJ">NJ</option>
                      <option value="NM">NM</option>
                      <option value="NY">NY</option>
                      <option value="NC">NC</option>
                      <option value="ND">ND</option>
                      <option value="OH">OH</option>
                      <option value="OK">OK</option>
                      <option value="OR">OR</option>
                      <option value="PA">PA</option>
                      <option value="RI">RI</option>
                      <option value="SC">SC</option>
                      <option value="SD">SD</option>
                      <option value="TN">TN</option>
                      <option value="TX">TX</option>
                      <option value="UT">UT</option>
                      <option value="VT">VT</option>
                      <option value="VA">VA</option>
                      <option value="WA">WA</option>
                      <option value="WV">WV</option>
                      <option value="WI">WI</option>
                      <option value="WY">WY</option>
                    </select>
                  </div>
                </div>
                <div class="tps-address__row">
                  <div
                    class="form-block fm-pristine fm-untouched fm-valid fm-empty"
                  >
                    <label
                      for="tps_create_stub_employeeProfile_address_zipCode"
                      class="form-block__label"
                    >
                      <div>
                      <span class="tps-theme--required__star">*</span
                      ><span class="tps-theme--required__content">Zip Code</span>
                    </div>
                      </label
                    ><input
                      type="text"
                      autocomplete="no"
                      id="tps_create_stub_employeeProfile_address_zipCode"
                      name="tps_create_stub[employeeProfile][address][zipCode]"
                      class="js-zipcode form-input--number form-input fm-pristine fm-untouched fm-valid fm-empty"
                      error_message="Please fill out the zip code"
                      data-formify-ptarget="1"
                    />
                    <div class="form-block__error">
                      Please fill out the zip code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tps-theme--show-container">
        <span class="form-rest__cta">Show Optional Employee Information</span
        ><span class="tps-theme--show-container__subtitle"
          >(ID, Federal Filing Status, State Filing Status)</span
        >
      </div>
      <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
        <label
          for="tps_create_stub_employeeProfile_employeeID"
          class="form-block__label"
        >
          Employee ID </label
        ><input
          type="text"
          autocomplete="no"
          id="tps_create_stub_employeeProfile_employeeID"
          name="tps_create_stub[employeeProfile][employeeID]"
          maxlength="255"
          tooltip="A Employee ID is a code assigned by an employer to uniquely identify their employees."
          data-formify-ptarget="1"
          data-tippy-content="A Employee ID is a code assigned by an employer to uniquely identify their employees."
          class="form-input fm-pristine fm-untouched fm-valid fm-empty"
        />
      </div>
      <div class="hide-on-contractor">
        <div class="form-block fm-pristine fm-untouched fm-valid fm-not-empty">
          <label
            for="tps_create_stub_employeeProfile_federalFilingStatus"
            class="form-block__label"
          >
            Federal Filing Status </label
          ><select
            data-formify-ptarget="1"
            id="tps_create_stub_employeeProfile_federalFilingStatus"
            name="tps_create_stub[employeeProfile][federalFilingStatus]"
            tooltip="Federal Filing Status. For reference, please refer to form W-4, Step 1 Box 3, or in 2019 form W-4, Line 5."
            placeholder="Optional"
            data-tippy-content="Federal Filing Status. For reference, please refer to form W-4, Step 1 Box 3, or in 2019 form W-4, Line 5."
            class="form-input form-input--select fm-pristine fm-untouched fm-valid fm-not-empty"
          >
            <option value="S">Single</option>
            <option value="M">Married</option>
            <option value="H">Head of household</option>
          </select>
        </div>
      </div>
      <div class="state-fields-js hide-on-contractor">
        <div class="form-block fm-pristine fm-untouched fm-valid fm-not-empty">
          <label
            for="tps_create_stub_employeeProfile_stateFilingStatus"
            class="form-block__label"
          >
            State Filing Status </label
          ><select
            data-formify-ptarget="1"
            id="tps_create_stub_employeeProfile_stateFilingStatus"
            name="tps_create_stub[employeeProfile][stateFilingStatus]"
            tooltip="Filing Status options in California State. For reference, please refer to form DE 4, Filing Status Box."
            placeholder="Optional"
            data-tippy-content="Filing Status options in California State. For reference, please refer to form DE 4, Filing Status Box."
            class="form-input form-input--select fm-pristine fm-untouched fm-valid fm-not-empty"
          >
            <option value="S">Single</option>
            <option value="M">Married</option>
            <option value="H">Head Of Household</option>
          </select>
        </div>
        <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
          <label
            for="tps_create_stub_employeeProfile_stateAdditionalAllowances"
            class="form-block__label"
          >
            State Additional Allowance </label
          ><input
            type="text"
            autocomplete="no"
            id="tps_create_stub_employeeProfile_stateAdditionalAllowances"
            name="tps_create_stub[employeeProfile][stateAdditionalAllowances]"
            tooltip="The total additional withholding allowances to be claimed in California State. Refer to form DE 4, Worksheet B, Line 8."
            data-formify-ptarget="1"
            data-tippy-content="The total additional withholding allowances to be claimed in California State. Refer to form DE 4, Worksheet B, Line 8."
            class="form-input form-input--number fm-pristine fm-untouched fm-valid fm-empty"
            inputmode="numeric"
          />
        </div>
        <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
          <label
            for="tps_create_stub_employeeProfile_stateRegularAllowances"
            class="form-block__label"
          >
            State Regular Allowance </label
          ><input
            type="text"
            autocomplete="no"
            id="tps_create_stub_employeeProfile_stateRegularAllowances"
            name="tps_create_stub[employeeProfile][stateRegularAllowances]"
            tooltip="The amount of regular withholding allowance to be claimed in California State. For reference, please refer to form DE 4, Worksheet A, Line (F)"
            data-formify-ptarget="1"
            data-tippy-content="The amount of regular withholding allowance to be claimed in California State. For reference, please refer to form DE 4, Worksheet A, Line (F)"
            class="form-input form-input--number fm-pristine fm-untouched fm-valid fm-empty"
            inputmode="numeric"
          />
        </div>
        <div class="form-block fm-pristine fm-untouched fm-valid fm-empty">
          <label
            for="tps_create_stub_employeeProfile_stateTotalAllowances"
            class="form-block__label"
          >
            State Total Allowance </label
          ><input
            type="text"
            autocomplete="no"
            id="tps_create_stub_employeeProfile_stateTotalAllowances"
            name="tps_create_stub[employeeProfile][stateTotalAllowances]"
            tooltip="The aggregate number of allowances filed in California State. Worksheet A can be used for regular withholding allowance. Other worksheets that can be found in for DE 4 can also be used as applicable, Worksheet A+B. For reference, please refer to form DE 4, Line 1."
            data-formify-ptarget="1"
            data-tippy-content="The aggregate number of allowances filed in California State. Worksheet A can be used for regular withholding allowance. Other worksheets that can be found in for DE 4 can also be used as applicable, Worksheet A+B. For reference, please refer to form DE 4, Line 1."
            class="form-input form-input--number fm-pristine fm-untouched fm-valid fm-empty"
            inputmode="numeric"
          />
        </div>
      </div>
    </div>
  </div>
</div>
`;

const SALARY_SECTION_HTML = `<div class="section-block js-salary-profile profile-hourly">
  <h2 class="section-block__title">3. Salary Information</h2>
  <div class="form-block">
    <label
      for="tps_create_stub_salaryProfile_salaryType"
      class="form-block__label"
    >
      How is this employee paid?
    </label>
    <div
      class="form-block-radio u-flex"
      id="tps_create_stub_salaryProfile_salaryType"
    >
      <div class="form-radio fm-pristine fm-untouched fm-valid fm-not-empty">
        <input
          type="radio"
          name="tps_create_stub[salaryProfile][salaryType]"
          id="tps_create_stub_salaryProfile_salaryType_0"
          value="hourly"
          data-formify-ptarget="1"
          placeholder="Optional"
          class="fm-pristine fm-untouched fm-valid fm-not-empty"
          checked="true"
        /><label for="tps_create_stub_salaryProfile_salaryType_0"
          ><span class="form-input-check__mark"></span>Hourly
        </label>
      </div>
      <div class="form-radio fm-pristine fm-untouched fm-valid fm-empty">
        <input
          type="radio"
          name="tps_create_stub[salaryProfile][salaryType]"
          id="tps_create_stub_salaryProfile_salaryType_1"
          value="salary"
          data-formify-ptarget="1"
          placeholder="Optional"
          class="fm-pristine fm-untouched fm-valid fm-empty"
        /><label for="tps_create_stub_salaryProfile_salaryType_1"
          ><span class="form-input-check__mark"></span>Salary
        </label>
      </div>
    </div>
  </div>
  <div class="form-block fm-pristine fm-untouched fm-valid fm-not-empty">
    <label
      for="tps_create_stub_salaryProfile_payFrequency"
      class="form-block__label"
    >
      How often is this employee paid? </label
    ><select
      data-formify-ptarget="1"
      id="tps_create_stub_salaryProfile_payFrequency"
      name="tps_create_stub[salaryProfile][payFrequency]"
      tooltip="Pay Frequency refers to how often the employee is paid"
      placeholder="Optional"
      data-tippy-content="Pay Frequency refers to how often the employee is paid"
      class="form-input form-input--select fm-pristine fm-untouched fm-valid fm-not-empty"
    >
      <option value="daily">Daily</option>
      <option value="weekly">Weekly (ex: Every Friday)</option>
      <option value="biweekly" selected="selected">
        Bi-Weekly (ex: every other Wednesday)
      </option>
      <option value="semimonthly">Semi-Monthly (ex: 1st and 16th)</option>
      <option value="monthly">Monthly (ex: 1st of month only)</option>
      <option value="quarterly">Quarterly</option>
      <option value="semiannually">Semi-Annually</option>
      <option value="annually">Annually</option>
    </select>
  </div>
  <div class="salary-type">
    <div data-type="hourly">
      <div
        class="form-block fm-pristine fm-untouched fm-invalid fm-empty fm-invalid-value-missing"
      >
        <label
          for="tps_create_stub_salaryProfile_hourlyRate"
          class="form-block__label tps-theme--required"
        >
          <div>
            <span class="tps-theme--required__star">*</span
            ><span class="tps-theme--required__content">Hourly Rate</span>
          </div></label
        >
        <input
          type="text"
          autocomplete="no"
          id="tps_create_stub_salaryProfile_hourlyRate"
          name="tps_create_stub[salaryProfile][hourlyRate]"
          required="required"
          error_message="Please fill out the hourly rate"
          placeholder="0.00"
          data-formify-ptarget="1"
          class="form-input form-input--money fm-pristine fm-untouched fm-invalid fm-empty fm-invalid-value-missing tps-theme--hourly-rate"
          inputmode="numeric"
        />
        <div class="form-block__error">Please fill out the hourly rate</div>
      </div>
    </div>
    <div data-type="salary">
      <div class="form-block fm-pristine fm-untouched fm-valid fm-not-empty">
        <div>
          <span class="tps-theme--required__star">*</span
          ><span class="tps-theme--required__content">Annual Salary </span>
        </div>
        <input
          type="text"
          autocomplete="no"
          id="tps_create_stub_salaryProfile_annualSalary"
          name="tps_create_stub[salaryProfile][annualSalary]"
          required="required"
          error_message="Please fill out your annual salary"
          tooltip="An annual salary is the amount you get paid in an entire year (12 months) in return for the work you perform. It does not include side benefits."
          placeholder="0.00"
          data-formify-ptarget="1"
          data-tippy-content="An annual salary is the amount you get paid in an entire year (12 months) in return for the work you perform. It does not include side benefits."
          class="form-input form-input--money fm-pristine fm-untouched fm-valid fm-not-empty tps-theme--hourly-rate"
          inputmode="numeric"
          value="0.00"
        />
        <div class="form-block__error">Please fill out your annual salary</div>
      </div>
    </div>
  </div>
  <div>
    <div class="u-flex form-block form-block-checkbox">
      <div class="tps-theme--checkbox">
        <input
          type="checkbox"
          id="tps_create_stub_salaryProfile_isNewHire"
          name="tps_create_stub[employeeProfile][isW4FormBefore2020]"
          value="1"
        />
        <label
          for="tps_create_stub_salaryProfile_isNewHire"
          class="form-block__label"
        >
          Add employee hire date
        </label>
      </div>
    </div>
    <hr class="tps-theme--divider" />
    <div class="hire-date-js u-hidden">
      <div class="form-block fm-pristine fm-untouched fm-valid fm-not-empty">
        <label
          for="tps_create_stub_salaryProfile_employeeStartDate"
          class="form-block__label"
        >
          Employee Hire Date </label
        ><input
          type="text"
          autocomplete="no"
          id="tps_create_stub_salaryProfile_employeeStartDate"
          name="tps_create_stub[salaryProfile][employeeStartDate]"
          class="form-input--date form-input fm-pristine fm-untouched fm-valid fm-not-empty"
          readonly="readonly"
          data-formify-ptarget="1"
          placeholder="Optional"
          value="01-01-2022"
        />
      </div>
    </div>
  </div>
  <div data-type="salary" class="hourly-rate-container">
    <hr />
    <div class="u-flex form-block form-block-checkbox">
      <div class="tps-theme--checkbox">
        <input
          type="checkbox"
          id="tps_create_stub_salaryProfile_showHourlyRate"
          name="tps_create_stub[salaryProfile][showHourlyRate]"
          value="1"
        />
        <label
          for="tps_create_stub_salaryProfile_showHourlyRate"
          class="form-block__label"
        >
          Show Advanced Pay Date Fields
        </label>
      </div>
    </div>
    <div class="u-hidden hours-worked-js">
      <div
        class="form-block form-block--hours fm-pristine fm-untouched fm-valid fm-not-empty"
      >
        <label
          for="tps_create_stub_salaryProfile_salaryHoursWorked"
          class="form-block__label"
        >
          Hours Worked Per Period * </label
        ><input
          type="text"
          autocomplete="no"
          id="tps_create_stub_salaryProfile_salaryHoursWorked"
          name="tps_create_stub[salaryProfile][salaryHoursWorked]"
          required="required"
          class="form-block--hours form-input fm-pristine fm-untouched fm-valid fm-not-empty"
          pattern="\d*"
          inputmode="numeric"
          error_message="Please fill out the hours worked per period"
          placeholder="0"
          data-formify-ptarget="1"
        />
        <div class="form-block__error">
          Please fill out the hours worked per period
        </div>
      </div>
    </div>
    <hr />
  </div>
  <div class="suggestion-box">
    <p class="suggestion-box__text">
      <img
        src="/bundles/thepaystubswebsite/images/lightbulb.png"
        alt="suggestion light bulb"
      />
      For proof of income, most institutions require paystubs covering a period
      of the last 3 months. The more pay dates you add the higher your chances
      become!
    </p>
    <span class="suggestion-box__question"
      >Would you like us to add them for you?</span
    >
    <div class="suggestion-box__answers">
      <span class="suggestion-box__yes">Yes, Please</span
      ><span class="suggestion-box__no">No, Thank you</span>
    </div>
  </div>
  <div class="paydates-notice">
    <div class="paydates-notice__title">
      <div>
        <span class="tps-theme--required__star">*</span
        ><span class="tps-theme--required__content paydates-notice__title"
          >Pay Dates Needed</span
        >
      </div>
      <div class="paydates-notice__notice">
        Pay Dates will be added consecutively, and are directly affected by the
        Pay Period Frequency chosen in the above drop-down.
      </div>
    </div>
    <div class="u-flex form-block form-block-checkbox tps-theme--sapf">
      <div class="tps-theme--checkbox">
        <input
          type="checkbox"
          id="tps_create_stub_salaryProfile_isAdvancedPayDates"
          name="tps_create_stub[salaryProfile][isAdvancedPayDates]"
          value="1"
        />
        <label
          for="tps_create_stub_salaryProfile_isAdvancedPayDates"
          class="form-block__label"
        >
          Show Advanced Pay Date Fields
        </label>
      </div>
    </div>
    <div class="paydates-collection paydates-collection--hourly">
      <div class="paydates-collection__container">
        <div class="paydates-collection__blocks">
          <div class="form-block">
            <div
              class="paydates-collection__prototype paydates-collection__prototype collection-items tps_create_stub_salaryProfile_payDates_form_group"
              data-prototype='    <div class="paydates-collection__block u-flex" data-index="__name__">
        <div class="paydates__content">
            <div class="paydates-index-wrapper">
                <span class="paydates-index">PAY DATE 1</span>
                <div class="paydates-line"></div>
                <div class="collection__remove paydates-collection__remove">
                    <i class="tps-icon-trash" data-delete="__name__"></i>
                </div>
            </div>
            <div class="paydates__blocks hours-paydate-container">
                <div class="paydates__block">
                        <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates___name___payDate" class="form-block__label">
                    Employee Pay Date                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates___name___payDate" name="tps_create_stub[salaryProfile][payDates][__name__][payDate]" readonly="readonly" class="form-input--date pay-date form-input" tooltip="The date the employee received payment." data-formify-ptarget="1" placeholder="Optional" data-tippy-content="The date the employee received payment."   /></div>
                </div>
                <div class="paydates__block hours-worked">
                        <div class="form-block  form-block--hours"><label for="tps_create_stub_salaryProfile_payDates___name___hoursWorked" class="form-block__label">
                    Hours Worked *                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates___name___hoursWorked" name="tps_create_stub[salaryProfile][payDates][__name__][hoursWorked]" required="required" class="form-block--hours form-input" placeholder="0" inputmode="numeric" error_message="Please fill out the hours worked" data-formify-ptarget="1" inputmode="numeric"  /><div class="form-block__error">
                    Please fill out the hours worked
                </div></div>
                </div>
            </div>
            <div class="pay-period-block">
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates___name___startDate" class="form-block__label">
                    Pay Period Start Date                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates___name___startDate" name="tps_create_stub[salaryProfile][payDates][__name__][startDate]" class="form-input--date start-period-date form-input" readonly="readonly" tooltip="A pay period is the date range, from start to end, that the employee worked to earn their wages." data-formify-ptarget="1" placeholder="Optional" data-tippy-content="A pay period is the date range, from start to end, that the employee worked to earn their wages."   /></div>
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates___name___endDate" class="form-block__label">
                    Pay Period End Date                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates___name___endDate" name="tps_create_stub[salaryProfile][payDates][__name__][endDate]" class="form-input--date end-period-date form-input" readonly="readonly" tooltip="A pay period is the date range, from start to end, that the employee worked to earn their wages." data-formify-ptarget="1" placeholder="Optional" data-tippy-content="A pay period is the date range, from start to end, that the employee worked to earn their wages."   /></div>
            </div>
            <div class="advanced-mode pp-ytd">
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates___name___payPeriodYTD" class="form-block__label">
                    Number of Previous Pay Dates this year                </label><select data-formify-ptarget="1" id="tps_create_stub_salaryProfile_payDates___name___payPeriodYTD" name="tps_create_stub[salaryProfile][payDates][__name__][payPeriodYTD]" class="pay-period-ytd form-input form-input--select" tooltip="A pay period YTD is how many times the employee has been paid this year, not including the current wage period." data-formify-ptarget="1" placeholder="Optional" data-tippy-content="A pay period YTD is how many times the employee has been paid this year, not including the current wage period."><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="96">96</option><option value="97">97</option><option value="98">98</option><option value="99">99</option><option value="100">100</option><option value="101">101</option><option value="102">102</option><option value="103">103</option><option value="104">104</option><option value="105">105</option><option value="106">106</option><option value="107">107</option><option value="108">108</option><option value="109">109</option><option value="110">110</option><option value="111">111</option><option value="112">112</option><option value="113">113</option><option value="114">114</option><option value="115">115</option><option value="116">116</option><option value="117">117</option><option value="118">118</option><option value="119">119</option><option value="120">120</option><option value="121">121</option><option value="122">122</option><option value="123">123</option><option value="124">124</option><option value="125">125</option><option value="126">126</option><option value="127">127</option><option value="128">128</option><option value="129">129</option><option value="130">130</option><option value="131">131</option><option value="132">132</option><option value="133">133</option><option value="134">134</option><option value="135">135</option><option value="136">136</option><option value="137">137</option><option value="138">138</option><option value="139">139</option><option value="140">140</option><option value="141">141</option><option value="142">142</option><option value="143">143</option><option value="144">144</option><option value="145">145</option><option value="146">146</option><option value="147">147</option><option value="148">148</option><option value="149">149</option><option value="150">150</option><option value="151">151</option><option value="152">152</option><option value="153">153</option><option value="154">154</option><option value="155">155</option><option value="156">156</option><option value="157">157</option><option value="158">158</option><option value="159">159</option><option value="160">160</option><option value="161">161</option><option value="162">162</option><option value="163">163</option><option value="164">164</option><option value="165">165</option><option value="166">166</option><option value="167">167</option><option value="168">168</option><option value="169">169</option><option value="170">170</option><option value="171">171</option><option value="172">172</option><option value="173">173</option><option value="174">174</option><option value="175">175</option><option value="176">176</option><option value="177">177</option><option value="178">178</option><option value="179">179</option><option value="180">180</option><option value="181">181</option><option value="182">182</option><option value="183">183</option><option value="184">184</option><option value="185">185</option><option value="186">186</option><option value="187">187</option><option value="188">188</option><option value="189">189</option><option value="190">190</option><option value="191">191</option><option value="192">192</option><option value="193">193</option><option value="194">194</option><option value="195">195</option><option value="196">196</option><option value="197">197</option><option value="198">198</option><option value="199">199</option><option value="200">200</option><option value="201">201</option><option value="202">202</option><option value="203">203</option><option value="204">204</option><option value="205">205</option><option value="206">206</option><option value="207">207</option><option value="208">208</option><option value="209">209</option><option value="210">210</option><option value="211">211</option><option value="212">212</option><option value="213">213</option><option value="214">214</option><option value="215">215</option><option value="216">216</option><option value="217">217</option><option value="218">218</option><option value="219">219</option><option value="220">220</option><option value="221">221</option><option value="222">222</option><option value="223">223</option><option value="224">224</option><option value="225">225</option><option value="226">226</option><option value="227">227</option><option value="228">228</option><option value="229">229</option><option value="230">230</option><option value="231">231</option><option value="232">232</option><option value="233">233</option><option value="234">234</option><option value="235">235</option><option value="236">236</option><option value="237">237</option><option value="238">238</option><option value="239">239</option><option value="240">240</option><option value="241">241</option><option value="242">242</option><option value="243">243</option><option value="244">244</option><option value="245">245</option><option value="246">246</option><option value="247">247</option><option value="248">248</option><option value="249">249</option><option value="250">250</option><option value="251">251</option><option value="252">252</option><option value="253">253</option><option value="254">254</option><option value="255">255</option><option value="256">256</option><option value="257">257</option><option value="258">258</option><option value="259">259</option><option value="260">260</option><option value="261">261</option><option value="262">262</option><option value="263">263</option><option value="264">264</option><option value="265">265</option><option value="266">266</option><option value="267">267</option><option value="268">268</option><option value="269">269</option><option value="270">270</option><option value="271">271</option><option value="272">272</option><option value="273">273</option><option value="274">274</option><option value="275">275</option><option value="276">276</option><option value="277">277</option><option value="278">278</option><option value="279">279</option><option value="280">280</option><option value="281">281</option><option value="282">282</option><option value="283">283</option><option value="284">284</option><option value="285">285</option><option value="286">286</option><option value="287">287</option><option value="288">288</option><option value="289">289</option><option value="290">290</option><option value="291">291</option><option value="292">292</option><option value="293">293</option><option value="294">294</option><option value="295">295</option><option value="296">296</option><option value="297">297</option><option value="298">298</option><option value="299">299</option><option value="300">300</option><option value="301">301</option><option value="302">302</option><option value="303">303</option><option value="304">304</option><option value="305">305</option><option value="306">306</option><option value="307">307</option><option value="308">308</option><option value="309">309</option><option value="310">310</option><option value="311">311</option><option value="312">312</option><option value="313">313</option><option value="314">314</option><option value="315">315</option><option value="316">316</option><option value="317">317</option><option value="318">318</option><option value="319">319</option><option value="320">320</option><option value="321">321</option><option value="322">322</option><option value="323">323</option><option value="324">324</option><option value="325">325</option><option value="326">326</option><option value="327">327</option><option value="328">328</option><option value="329">329</option><option value="330">330</option><option value="331">331</option><option value="332">332</option><option value="333">333</option><option value="334">334</option><option value="335">335</option><option value="336">336</option><option value="337">337</option><option value="338">338</option><option value="339">339</option><option value="340">340</option><option value="341">341</option><option value="342">342</option><option value="343">343</option><option value="344">344</option><option value="345">345</option><option value="346">346</option><option value="347">347</option><option value="348">348</option><option value="349">349</option><option value="350">350</option><option value="351">351</option><option value="352">352</option><option value="353">353</option><option value="354">354</option><option value="355">355</option><option value="356">356</option><option value="357">357</option><option value="358">358</option><option value="359">359</option><option value="360">360</option><option value="361">361</option><option value="362">362</option><option value="363">363</option><option value="364">364</option></select></div>
            </div>
            <div class="gross-ytd advanced-mode">
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates___name___grossPayYTD" class="form-block__label">
                    Sum of all previous regular wages this year *                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates___name___grossPayYTD" name="tps_create_stub[salaryProfile][payDates][__name__][grossPayYTD]" required="required" placeholder="0.00" inputmode="numeric" data-tooltip-salary="Gross Pay YTD is the amount earned before deductions by an individual from the start of the fiscal year up to this date excluding commissions and bonuses.ThePaystubs.com assumes that the total amount is based on the individual’s annual salary, pay frequency, and selected pay dates. If our computations do not match the actual Gross Pay YTD, feel free to make the necessary changes." data-tooltip-hourly="Gross Pay YTD is the amount earned before deductions by an individual from the start of the fiscal year up to this date excluding commissions and bonuses. ThePaystub.com assumes that the total amount is based on the individual’s Hourly Rate, Hours Worked, Pay Frequency, and Pay Dates. If our computations do not match the actual Gross Pay YTD, feel free to make the necessary changes." data-formify-ptarget="1" class=" form-input form-input--money" inputmode="numeric"   /></div>
            </div>
                <div class="form-block form-block--inline-label "><label for="tps_create_stub_salaryProfile_payDates___name___checkNumber" class="form-block__label">
                    Check No.                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates___name___checkNumber" name="tps_create_stub[salaryProfile][payDates][__name__][checkNumber]" required="required" class="form-block--inline-label check-number form-input" error_message="This field is required" data-formify-ptarget="1" placeholder="This field is mandatory"   /><div class="form-block__error">
                    This field is required
                </div></div>
            <div class="addition-deduction-container">
                    <div class="form-block  "><div  class="row  collection-items tps_create_stub_salaryProfile_payDates___name___additions_form_group" data-prototype="    &amp;lt;div class=&amp;quot;calculation-section form-collection__block&amp;quot;&amp;gt;
        &amp;lt;div class=&amp;quot;calculation-section__title&amp;quot;&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__index&amp;quot;&amp;gt;
                Additions or Benefits/Deductions
                &amp;lt;span class=&amp;quot;js-index&amp;quot;&amp;gt;__index__&amp;lt;/span&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__line&amp;quot;&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__remove js-remove&amp;quot;&amp;gt;
                &amp;lt;i class=&amp;quot;tps-icon-trash&amp;quot;&amp;gt;&amp;lt;/i&amp;gt;
            &amp;lt;/div&amp;gt;
        &amp;lt;/div&amp;gt;
        &amp;lt;div class=&amp;quot;calculation-section__blocks&amp;quot;&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__block is-addition-or-deduction-container&amp;quot;&amp;gt;
                &amp;lt;div class=&amp;quot;form-block&amp;quot;&amp;gt;
                    &amp;lt;label class=&amp;quot;form-block__label&amp;quot;&amp;gt;Type&amp;lt;/label&amp;gt;
                    &amp;lt;select class=&amp;quot;is-addition-or-deduction form-input form-input--select&amp;quot;&amp;gt;
                        &amp;lt;option value=&amp;quot;Addition&amp;quot; selected&amp;gt;Addition&amp;lt;/option&amp;gt;
                        &amp;lt;option value=&amp;quot;Deduction&amp;quot;&amp;gt;Benefit&amp;lt;/option&amp;gt;
                    &amp;lt;/select&amp;gt;
                &amp;lt;/div&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__block calculation-desc&amp;quot;&amp;gt;
                    &amp;lt;div class=&amp;quot;form-block  &amp;quot;&amp;gt;&amp;lt;label for=&amp;quot;tps_create_stub_salaryProfile_payDates___name___additions___name___description&amp;quot; class=&amp;quot;form-block__label&amp;quot;&amp;gt;
                    Description *                &amp;lt;/label&amp;gt;&amp;lt;select data-formify-ptarget=&amp;quot;1&amp;quot; id=&amp;quot;tps_create_stub_salaryProfile_payDates___name___additions___name___description&amp;quot; name=&amp;quot;tps_create_stub[salaryProfile][payDates][__name__][additions][__name__][description]&amp;quot; data-formify-ptarget=&amp;quot;1&amp;quot; placeholder=&amp;quot;This field is mandatory&amp;quot; class=&amp;quot; form-input form-input--select&amp;quot;&amp;gt;&amp;lt;option value=&amp;quot;Overtime&amp;quot;&amp;gt;Overtime&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;OvertimeHourly&amp;quot;&amp;gt;Overtime Hourly&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;Tips&amp;quot;&amp;gt;Tips&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;VacationPay&amp;quot;&amp;gt;Vacation Pay&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;SickPay&amp;quot;&amp;gt;Sick Pay&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;Bonus&amp;quot;&amp;gt;Bonus&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;Commission&amp;quot;&amp;gt;Commission&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;Award&amp;quot;&amp;gt;Award&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;Prize&amp;quot;&amp;gt;Prize&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;Custom&amp;quot;&amp;gt;Custom&amp;lt;/option&amp;gt;&amp;lt;/select&amp;gt;&amp;lt;/div&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__block custom-text&amp;quot;&amp;gt;
                    &amp;lt;div class=&amp;quot;form-block  &amp;quot;&amp;gt;&amp;lt;label for=&amp;quot;tps_create_stub_salaryProfile_payDates___name___additions___name___customDescription&amp;quot; class=&amp;quot;form-block__label&amp;quot;&amp;gt;
                    Custom Description *                &amp;lt;/label&amp;gt;&amp;lt;input type=&amp;quot;text&amp;quot;
           autocomplete=&amp;quot;no&amp;quot; id=&amp;quot;tps_create_stub_salaryProfile_payDates___name___additions___name___customDescription&amp;quot; name=&amp;quot;tps_create_stub[salaryProfile][payDates][__name__][additions][__name__][customDescription]&amp;quot; required=&amp;quot;required&amp;quot; error_message=&amp;quot;Please fill out the type&amp;quot; data-formify-ptarget=&amp;quot;1&amp;quot; placeholder=&amp;quot;This field is mandatory&amp;quot; class=&amp;quot; form-input&amp;quot;   /&amp;gt;&amp;lt;div class=&amp;quot;form-block__error&amp;quot;&amp;gt;
                    Please fill out the type
                &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__block total-hours&amp;quot;&amp;gt;
                    &amp;lt;div class=&amp;quot;form-block  form-block--hours&amp;quot;&amp;gt;&amp;lt;label for=&amp;quot;tps_create_stub_salaryProfile_payDates___name___additions___name___totalHours&amp;quot; class=&amp;quot;form-block__label&amp;quot;&amp;gt;
                    Total Overtime Hours *                &amp;lt;/label&amp;gt;&amp;lt;input type=&amp;quot;text&amp;quot;
           autocomplete=&amp;quot;no&amp;quot; id=&amp;quot;tps_create_stub_salaryProfile_payDates___name___additions___name___totalHours&amp;quot; name=&amp;quot;tps_create_stub[salaryProfile][payDates][__name__][additions][__name__][totalHours]&amp;quot; required=&amp;quot;required&amp;quot; class=&amp;quot;form-block--hours form-input&amp;quot; pattern=&amp;quot;\d*&amp;quot; inputmode=&amp;quot;numeric&amp;quot; data-formify-ptarget=&amp;quot;1&amp;quot; placeholder=&amp;quot;This field is mandatory&amp;quot; inputmode=&amp;quot;numeric&amp;quot;  /&amp;gt;&amp;lt;/div&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__block current-amount&amp;quot;&amp;gt;
                    &amp;lt;div class=&amp;quot;form-block  &amp;quot;&amp;gt;&amp;lt;label for=&amp;quot;tps_create_stub_salaryProfile_payDates___name___additions___name___currentAmount&amp;quot; class=&amp;quot;form-block__label&amp;quot;&amp;gt;
                    Current Amount *                &amp;lt;/label&amp;gt;&amp;lt;input type=&amp;quot;text&amp;quot;
           autocomplete=&amp;quot;no&amp;quot; id=&amp;quot;tps_create_stub_salaryProfile_payDates___name___additions___name___currentAmount&amp;quot; name=&amp;quot;tps_create_stub[salaryProfile][payDates][__name__][additions][__name__][currentAmount]&amp;quot; required=&amp;quot;required&amp;quot; placeholder=&amp;quot;0.00&amp;quot; inputmode=&amp;quot;numeric&amp;quot; error_message=&amp;quot;Please fill out the current amount&amp;quot; data-formify-ptarget=&amp;quot;1&amp;quot; class=&amp;quot; form-input form-input--money&amp;quot; inputmode=&amp;quot;numeric&amp;quot;   /&amp;gt;&amp;lt;div class=&amp;quot;form-block__error&amp;quot;&amp;gt;
                    Please fill out the current amount
                &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__block overtime-rate&amp;quot;&amp;gt;
                    &amp;lt;div class=&amp;quot;form-block  &amp;quot;&amp;gt;&amp;lt;label for=&amp;quot;tps_create_stub_salaryProfile_payDates___name___additions___name___rate&amp;quot; class=&amp;quot;form-block__label&amp;quot;&amp;gt;
                    Overtime rate *                &amp;lt;/label&amp;gt;&amp;lt;input type=&amp;quot;text&amp;quot;
           autocomplete=&amp;quot;no&amp;quot; id=&amp;quot;tps_create_stub_salaryProfile_payDates___name___additions___name___rate&amp;quot; name=&amp;quot;tps_create_stub[salaryProfile][payDates][__name__][additions][__name__][rate]&amp;quot; required=&amp;quot;required&amp;quot; placeholder=&amp;quot;0.00&amp;quot; inputmode=&amp;quot;numeric&amp;quot; error_message=&amp;quot;Please fill out the overtime rate&amp;quot; data-formify-ptarget=&amp;quot;1&amp;quot; class=&amp;quot; form-input form-input--money&amp;quot; inputmode=&amp;quot;numeric&amp;quot;   /&amp;gt;&amp;lt;div class=&amp;quot;form-block__error&amp;quot;&amp;gt;
                    Please fill out the overtime rate
                &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__block ytd-amount&amp;quot;&amp;gt;
                    &amp;lt;div class=&amp;quot;form-block  &amp;quot;&amp;gt;&amp;lt;label for=&amp;quot;tps_create_stub_salaryProfile_payDates___name___additions___name___YTDAmount&amp;quot; class=&amp;quot;form-block__label&amp;quot;&amp;gt;
                    YTD Amount *                &amp;lt;/label&amp;gt;&amp;lt;input type=&amp;quot;text&amp;quot;
           autocomplete=&amp;quot;no&amp;quot; id=&amp;quot;tps_create_stub_salaryProfile_payDates___name___additions___name___YTDAmount&amp;quot; name=&amp;quot;tps_create_stub[salaryProfile][payDates][__name__][additions][__name__][YTDAmount]&amp;quot; required=&amp;quot;required&amp;quot; tooltip=&amp;quot;The YTD Amount is the additional amount that the employee has earned from the beginning of the fiscal year to the present date. The YTD amount will be the YTD amount of the earliest date if you are using the deduction for more than one pay date.&amp;quot; placeholder=&amp;quot;0.00&amp;quot; inputmode=&amp;quot;numeric&amp;quot; error_message=&amp;quot;Please fill out the ytd amount&amp;quot; data-formify-ptarget=&amp;quot;1&amp;quot; data-tippy-content=&amp;quot;The YTD Amount is the additional amount that the employee has earned from the beginning of the fiscal year to the present date. The YTD amount will be the YTD amount of the earliest date if you are using the deduction for more than one pay date.&amp;quot; class=&amp;quot; form-input form-input--money&amp;quot; inputmode=&amp;quot;numeric&amp;quot;   /&amp;gt;&amp;lt;div class=&amp;quot;form-block__error&amp;quot;&amp;gt;
                    Please fill out the ytd amount
                &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;
            &amp;lt;/div&amp;gt;
        &amp;lt;/div&amp;gt;
    &amp;lt;/div&amp;gt;
" data-prototype-name="__name__" data-prototype-label="__name__label__" data-formify-ptarget="1" placeholder="This field is mandatory" id="collectiontps_create_stub_salaryProfile_payDates___name___additions_form_group"></div></div>
                    <div class="form-block  "><div  class="row  collection-items tps_create_stub_salaryProfile_payDates___name___deductions_form_group" data-prototype="
    &amp;lt;div class=&amp;quot;calculation-section form-collection__block&amp;quot;&amp;gt;
        &amp;lt;div class=&amp;quot;calculation-section__title&amp;quot;&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__index&amp;quot;&amp;gt;
                Additions or Benefits/Deductions
                &amp;lt;span class=&amp;quot;js-index&amp;quot;&amp;gt;__index__&amp;lt;/span&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__line&amp;quot;&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__remove js-remove&amp;quot;&amp;gt;
                &amp;lt;i class=&amp;quot;tps-icon-trash&amp;quot;&amp;gt;&amp;lt;/i&amp;gt;
            &amp;lt;/div&amp;gt;
        &amp;lt;/div&amp;gt;
        &amp;lt;div class=&amp;quot;calculation-section__blocks&amp;quot;&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__block is-addition-or-deduction-container&amp;quot;&amp;gt;
                &amp;lt;div class=&amp;quot;form-block&amp;quot;&amp;gt;
                    &amp;lt;label class=&amp;quot;form-block__label&amp;quot;&amp;gt;Type&amp;lt;/label&amp;gt;
                    &amp;lt;select class=&amp;quot;is-addition-or-deduction form-input form-input--select&amp;quot;&amp;gt;
                        &amp;lt;option value=&amp;quot;Addition&amp;quot;&amp;gt;Addition&amp;lt;/option&amp;gt;
                        &amp;lt;option value=&amp;quot;Deduction&amp;quot; selected&amp;gt;Benefit&amp;lt;/option&amp;gt;
                    &amp;lt;/select&amp;gt;
                &amp;lt;/div&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__block calculation-desc&amp;quot;&amp;gt;
                    &amp;lt;div class=&amp;quot;form-block  &amp;quot;&amp;gt;&amp;lt;label for=&amp;quot;tps_create_stub_salaryProfile_payDates___name___deductions___name___description&amp;quot; class=&amp;quot;form-block__label&amp;quot;&amp;gt;
                    Description *                &amp;lt;/label&amp;gt;&amp;lt;select data-formify-ptarget=&amp;quot;1&amp;quot; id=&amp;quot;tps_create_stub_salaryProfile_payDates___name___deductions___name___description&amp;quot; name=&amp;quot;tps_create_stub[salaryProfile][payDates][__name__][deductions][__name__][description]&amp;quot; data-formify-ptarget=&amp;quot;1&amp;quot; placeholder=&amp;quot;This field is mandatory&amp;quot; class=&amp;quot; form-input form-input--select&amp;quot;&amp;gt;&amp;lt;optgroup label=&amp;quot;Medical Benefits&amp;quot;&amp;gt;&amp;lt;option value=&amp;quot;HealthInsurance&amp;quot;&amp;gt;Health Insurance&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;DentalInsurance&amp;quot;&amp;gt;Dental Insurance&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;VisionInsurance&amp;quot;&amp;gt;Vision Insurance&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;FSA&amp;quot;&amp;gt;FSA&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;DependentCareFSA&amp;quot;&amp;gt;Dependent Care FSA&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;IndividualHSA&amp;quot;&amp;gt;Individual HSA&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;FamilyHSA&amp;quot;&amp;gt;Family HSA&amp;lt;/option&amp;gt;&amp;lt;/optgroup&amp;gt;&amp;lt;optgroup label=&amp;quot;Retirement Benefits&amp;quot;&amp;gt;&amp;lt;option value=&amp;quot;401K&amp;quot;&amp;gt;401(k)&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;Roth401K&amp;quot;&amp;gt;Roth 401(k)&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;403B&amp;quot;&amp;gt;403(b)&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;Roth403B&amp;quot;&amp;gt;Roth 403(b)&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;457B&amp;quot;&amp;gt;457(b)&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;Roth457B&amp;quot;&amp;gt;Roth 457(b)&amp;lt;/option&amp;gt;&amp;lt;option value=&amp;quot;SIMPLEIRA&amp;quot;&amp;gt;SIMPLE IRA&amp;lt;/option&amp;gt;&amp;lt;/optgroup&amp;gt;&amp;lt;option value=&amp;quot;Custom&amp;quot;&amp;gt;Custom Benefit/Deduction&amp;lt;/option&amp;gt;&amp;lt;/select&amp;gt;&amp;lt;/div&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__block custom-text&amp;quot;&amp;gt;
                    &amp;lt;div class=&amp;quot;form-block  &amp;quot;&amp;gt;&amp;lt;label for=&amp;quot;tps_create_stub_salaryProfile_payDates___name___deductions___name___customDescription&amp;quot; class=&amp;quot;form-block__label&amp;quot;&amp;gt;
                    Custom Description *                &amp;lt;/label&amp;gt;&amp;lt;input type=&amp;quot;text&amp;quot;
           autocomplete=&amp;quot;no&amp;quot; id=&amp;quot;tps_create_stub_salaryProfile_payDates___name___deductions___name___customDescription&amp;quot; name=&amp;quot;tps_create_stub[salaryProfile][payDates][__name__][deductions][__name__][customDescription]&amp;quot; required=&amp;quot;required&amp;quot; error_message=&amp;quot;Please fill out the type&amp;quot; data-formify-ptarget=&amp;quot;1&amp;quot; placeholder=&amp;quot;This field is mandatory&amp;quot; class=&amp;quot; form-input&amp;quot;   /&amp;gt;&amp;lt;div class=&amp;quot;form-block__error&amp;quot;&amp;gt;
                    Please fill out the type
                &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__block current-amount&amp;quot;&amp;gt;
                    &amp;lt;div class=&amp;quot;form-block  &amp;quot;&amp;gt;&amp;lt;label for=&amp;quot;tps_create_stub_salaryProfile_payDates___name___deductions___name___currentAmount&amp;quot; class=&amp;quot;form-block__label&amp;quot;&amp;gt;
                    Current Amount *                &amp;lt;/label&amp;gt;&amp;lt;input type=&amp;quot;text&amp;quot;
           autocomplete=&amp;quot;no&amp;quot; id=&amp;quot;tps_create_stub_salaryProfile_payDates___name___deductions___name___currentAmount&amp;quot; name=&amp;quot;tps_create_stub[salaryProfile][payDates][__name__][deductions][__name__][currentAmount]&amp;quot; required=&amp;quot;required&amp;quot; placeholder=&amp;quot;0.00&amp;quot; inputmode=&amp;quot;numeric&amp;quot; error_message=&amp;quot;Please fill out the current amount&amp;quot; data-formify-ptarget=&amp;quot;1&amp;quot; class=&amp;quot; form-input form-input--money&amp;quot; inputmode=&amp;quot;numeric&amp;quot;   /&amp;gt;&amp;lt;div class=&amp;quot;form-block__error&amp;quot;&amp;gt;
                    Please fill out the current amount
                &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;
            &amp;lt;/div&amp;gt;
            &amp;lt;div class=&amp;quot;calculation-section__block ytd-amount&amp;quot;&amp;gt;
                    &amp;lt;div class=&amp;quot;form-block  &amp;quot;&amp;gt;&amp;lt;label for=&amp;quot;tps_create_stub_salaryProfile_payDates___name___deductions___name___YTDAmount&amp;quot; class=&amp;quot;form-block__label&amp;quot;&amp;gt;
                    YTD Amount *                &amp;lt;/label&amp;gt;&amp;lt;input type=&amp;quot;text&amp;quot;
           autocomplete=&amp;quot;no&amp;quot; id=&amp;quot;tps_create_stub_salaryProfile_payDates___name___deductions___name___YTDAmount&amp;quot; name=&amp;quot;tps_create_stub[salaryProfile][payDates][__name__][deductions][__name__][YTDAmount]&amp;quot; required=&amp;quot;required&amp;quot; tooltip=&amp;quot;The YTD Amount is the additional amount that the employee has earned from the beginning of the fiscal year to the present date. The YTD amount will be the YTD amount of the earliest date if you are using the deduction for more than one pay date.&amp;quot; placeholder=&amp;quot;0.00&amp;quot; inputmode=&amp;quot;numeric&amp;quot; error_message=&amp;quot;Please fill out the ytd amount&amp;quot; data-formify-ptarget=&amp;quot;1&amp;quot; data-tippy-content=&amp;quot;The YTD Amount is the additional amount that the employee has earned from the beginning of the fiscal year to the present date. The YTD amount will be the YTD amount of the earliest date if you are using the deduction for more than one pay date.&amp;quot; class=&amp;quot; form-input form-input--money&amp;quot; inputmode=&amp;quot;numeric&amp;quot;   /&amp;gt;&amp;lt;div class=&amp;quot;form-block__error&amp;quot;&amp;gt;
                    Please fill out the ytd amount
                &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;
            &amp;lt;/div&amp;gt;
        &amp;lt;/div&amp;gt;
    &amp;lt;/div&amp;gt;
" data-prototype-name="__name__" data-prototype-label="__name__label__" data-formify-ptarget="1" placeholder="This field is mandatory" id="collectiontps_create_stub_salaryProfile_payDates___name___deductions_form_group"></div></div>
                <div class="js-add-addition-deduction">
                    <span class="add-icon"><i class="tps-icon-plus"></i></span>
                    Additions or Benefits/Deductions
                </div>
            </div>
        </div>
    </div>
'
              data-prototype-name="__name__"
              data-prototype-label="__name__label__"
              employmentstatus="employee"
              employment-status="employee"
              data-formify-ptarget="1"
              placeholder="This field is mandatory"
              id="collectiontps_create_stub_salaryProfile_payDates_form_group"
            >
              <div class="paydates-collection__block u-flex" data-index="0">
                <div class="paydates__content">
                  <div class="tps-theme--pay-date">
                    <span class="paydates-index">PAY DATE 1</span>
                  </div>
                  <div class="paydates__blocks hours-paydate-container">
                    <div class="paydates__block">
                      <div
                        class="form-block fm-pristine fm-untouched fm-valid fm-not-empty"
                      >
                        <label
                          for="tps_create_stub_salaryProfile_payDates_0_payDate"
                          class="form-block__label"
                          ><div>
                            <span class="tps-theme--required__star">*</span
                            ><span class="tps-theme--required__content"
                              >Employee Pay Date</span
                            >
                          </div></label
                        >
                        <input
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
                          value="06-13-2022"
                        />
                      </div>
                    </div>
                    <div class="paydates__block hours-worked">
                      <div
                        class="form-block form-block--hours fm-pristine fm-untouched fm-valid fm-not-empty"
                      >
                        <label
                          for="tps_create_stub_salaryProfile_payDates_0_hoursWorked"
                          class="form-block__label"
                          ><div>
                            <span class="tps-theme--required__star">*</span
                            ><span class="tps-theme--required__content"
                              >Hours Worked</span
                            >
                          </div></label
                        >
                        <input
                          type="text"
                          autocomplete="no"
                          id="tps_create_stub_salaryProfile_payDates_0_hoursWorked"
                          name="tps_create_stub[salaryProfile][payDates][0][hoursWorked]"
                          required="required"
                          class="form-block--hours form-input fm-pristine fm-untouched fm-valid fm-not-empty"
                          placeholder="0"
                          inputmode="numeric"
                          error_message="Please fill out the hours worked"
                          data-formify-ptarget="1"
                          value="80"
                        />
                        <div class="form-block__error">
                          Please fill out the hours worked
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pay-period-block">
                    <div
                      class="form-block fm-pristine fm-untouched fm-valid fm-not-empty"
                    >
                      <label
                        for="tps_create_stub_salaryProfile_payDates_0_startDate"
                        class="form-block__label"
                        ><div>
                          <span class="tps-theme--required__star">*</span
                          ><span class="tps-theme--required__content"
                            >Start Date</span
                          >
                        </div></label
                      >
                      <input
                        type="text"
                        autocomplete="no"
                        id="tps_create_stub_salaryProfile_payDates_0_startDate"
                        name="tps_create_stub[salaryProfile][payDates][0][startDate]"
                        class="form-input--date start-period-date form-input fm-pristine fm-untouched fm-valid fm-not-empty"
                        readonly="readonly"
                        tooltip="A pay period is the date range, from start to end, that the employee worked to earn their wages."
                        data-formify-ptarget="1"
                        placeholder="Optional"
                        data-tippy-content="A pay period is the date range, from start to end, that the employee worked to earn their wages."
                        value="05-30-2022"
                      />
                    </div>
                    <div
                      class="form-block fm-pristine fm-untouched fm-valid fm-not-empty"
                    >
                      <label
                        for="tps_create_stub_salaryProfile_payDates_0_endDate"
                        class="form-block__label"
                        ><div>
                          <span class="tps-theme--required__star">*</span
                          ><span class="tps-theme--required__content">End Date</span>
                        </div></label
                      >
                      <input
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
                        value="06-12-2022"
                      />
                    </div>
                  </div>
                  <div class="advanced-mode pp-ytd">
                    <div
                      class="form-block fm-pristine fm-untouched fm-valid fm-not-empty"
                    >
                      <label
                        for="tps_create_stub_salaryProfile_payDates_0_payPeriodYTD"
                        class="form-block__label"
                      >
                        Number of Previous Pay Dates this year </label
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
                  <div class="gross-ytd advanced-mode">
                    <div
                      class="form-block fm-pristine fm-untouched fm-invalid fm-empty fm-invalid-value-missing"
                    >
                      <label
                        for="tps_create_stub_salaryProfile_payDates_0_grossPayYTD"
                        class="form-block__label"
                      >
                        Sum of all previous regular wages this year * </label
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
                        class="form-input form-input--money fm-pristine fm-untouched fm-invalid fm-empty fm-invalid-value-missing"
                      />
                    </div>
                  </div>
                  <div
                    class="form-block fm-pristine fm-untouched fm-valid fm-not-empty"
                  >
                    <label
                      for="tps_create_stub_salaryProfile_payDates_0_checkNumber"
                      class="form-block__label"
                    >
                      Check number</label
                    ><input
                      type="text"
                      autocomplete="no"
                      id="tps_create_stub_salaryProfile_payDates_0_checkNumber"
                      name="tps_create_stub[salaryProfile][payDates][0][checkNumber]"
                      required="required"
                      class="check-number form-input fm-pristine fm-untouched fm-valid fm-not-empty"
                      error_message="This field is required"
                      data-formify-ptarget="1"
                      placeholder="This field is mandatory"
                      value="3114"
                    />
                    <div class="form-block__error">This field is required</div>
                  </div>
                  <div class="addition-deduction-container">
                    <div class="form-block">
                      <div
                        class="row collection-items tps_create_stub_salaryProfile_payDates_0_additions_form_group"
                        data-prototype='    <div class="calculation-section form-collection__block">
        <div class="calculation-section__title">
            <div class="calculation-section__index">
                Additions or Benefits/Deductions
                <span class="js-index">__index__</span>
            </div>
            <div class="calculation-section__line">
            </div>
            <div class="calculation-section__remove js-remove">
                <i class="tps-icon-trash"></i>
            </div>
        </div>
        <div class="calculation-section__blocks">
            <div class="calculation-section__block is-addition-or-deduction-container">
                <div class="form-block">
                    <label class="form-block__label">Type</label>
                    <select class="is-addition-or-deduction form-input form-input--select">
                        <option value="Addition" selected>Addition</option>
                        <option value="Deduction">Benefit</option>
                    </select>
                </div>
            </div>
            <div class="calculation-section__block calculation-desc">
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates_0_additions___name___description" class="form-block__label">
                    Description *                </label><select data-formify-ptarget="1" id="tps_create_stub_salaryProfile_payDates_0_additions___name___description" name="tps_create_stub[salaryProfile][payDates][0][additions][__name__][description]" data-formify-ptarget="1" placeholder="This field is mandatory" class=" form-input form-input--select"><option value="Overtime">Overtime</option><option value="OvertimeHourly">Overtime Hourly</option><option value="Tips">Tips</option><option value="VacationPay">Vacation Pay</option><option value="SickPay">Sick Pay</option><option value="Bonus">Bonus</option><option value="Commission">Commission</option><option value="Award">Award</option><option value="Prize">Prize</option><option value="Custom">Custom</option></select></div>
            </div>
            <div class="calculation-section__block custom-text">
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates_0_additions___name___customDescription" class="form-block__label">
                    Custom Description *                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates_0_additions___name___customDescription" name="tps_create_stub[salaryProfile][payDates][0][additions][__name__][customDescription]" required="required" error_message="Please fill out the type" data-formify-ptarget="1" placeholder="This field is mandatory" class=" form-input"   /><div class="form-block__error">
                    Please fill out the type
                </div></div>
            </div>
            <div class="calculation-section__block total-hours">
                    <div class="form-block  form-block--hours"><label for="tps_create_stub_salaryProfile_payDates_0_additions___name___totalHours" class="form-block__label">
                    Total Overtime Hours *                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates_0_additions___name___totalHours" name="tps_create_stub[salaryProfile][payDates][0][additions][__name__][totalHours]" required="required" class="form-block--hours form-input" pattern="\d*" inputmode="numeric" data-formify-ptarget="1" placeholder="This field is mandatory" inputmode="numeric"  /></div>
            </div>
            <div class="calculation-section__block current-amount">
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates_0_additions___name___currentAmount" class="form-block__label">
                    Current Amount *                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates_0_additions___name___currentAmount" name="tps_create_stub[salaryProfile][payDates][0][additions][__name__][currentAmount]" required="required" placeholder="0.00" inputmode="numeric" error_message="Please fill out the current amount" data-formify-ptarget="1" class=" form-input form-input--money" inputmode="numeric"   /><div class="form-block__error">
                    Please fill out the current amount
                </div></div>
            </div>
            <div class="calculation-section__block overtime-rate">
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates_0_additions___name___rate" class="form-block__label">
                    Overtime rate *                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates_0_additions___name___rate" name="tps_create_stub[salaryProfile][payDates][0][additions][__name__][rate]" required="required" placeholder="0.00" inputmode="numeric" error_message="Please fill out the overtime rate" data-formify-ptarget="1" class=" form-input form-input--money" inputmode="numeric"   /><div class="form-block__error">
                    Please fill out the overtime rate
                </div></div>
            </div>
            <div class="calculation-section__block ytd-amount">
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates_0_additions___name___YTDAmount" class="form-block__label">
                    YTD Amount *                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates_0_additions___name___YTDAmount" name="tps_create_stub[salaryProfile][payDates][0][additions][__name__][YTDAmount]" required="required" tooltip="The YTD Amount is the additional amount that the employee has earned from the beginning of the fiscal year to the present date. The YTD amount will be the YTD amount of the earliest date if you are using the deduction for more than one pay date." placeholder="0.00" inputmode="numeric" error_message="Please fill out the ytd amount" data-formify-ptarget="1" data-tippy-content="The YTD Amount is the additional amount that the employee has earned from the beginning of the fiscal year to the present date. The YTD amount will be the YTD amount of the earliest date if you are using the deduction for more than one pay date." class=" form-input form-input--money" inputmode="numeric"   /><div class="form-block__error">
                    Please fill out the ytd amount
                </div></div>
            </div>
        </div>
    </div>
'
                        data-prototype-name="__name__"
                        data-prototype-label="__name__label__"
                        data-formify-ptarget="1"
                        placeholder="This field is mandatory"
                        id="collectiontps_create_stub_salaryProfile_payDates_0_additions_form_group"
                      ></div>
                    </div>
                    <div class="form-block">
                      <div
                        class="row collection-items tps_create_stub_salaryProfile_payDates_0_deductions_form_group"
                        data-prototype='
    <div class="calculation-section form-collection__block">
        <div class="calculation-section__title">
            <div class="calculation-section__index">
                Additions or Benefits/Deductions
                <span class="js-index">__index__</span>
            </div>
            <div class="calculation-section__line">
            </div>
            <div class="calculation-section__remove js-remove">
                <i class="tps-icon-trash"></i>
            </div>
        </div>
        <div class="calculation-section__blocks">
            <div class="calculation-section__block is-addition-or-deduction-container">
                <div class="form-block">
                    <label class="form-block__label">Type</label>
                    <select class="is-addition-or-deduction form-input form-input--select">
                        <option value="Addition">Addition</option>
                        <option value="Deduction" selected>Benefit</option>
                    </select>
                </div>
            </div>
            <div class="calculation-section__block calculation-desc">
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates_0_deductions___name___description" class="form-block__label">
                    Description *                </label><select data-formify-ptarget="1" id="tps_create_stub_salaryProfile_payDates_0_deductions___name___description" name="tps_create_stub[salaryProfile][payDates][0][deductions][__name__][description]" data-formify-ptarget="1" placeholder="This field is mandatory" class=" form-input form-input--select"><optgroup label="Medical Benefits"><option value="HealthInsurance">Health Insurance</option><option value="DentalInsurance">Dental Insurance</option><option value="VisionInsurance">Vision Insurance</option><option value="FSA">FSA</option><option value="DependentCareFSA">Dependent Care FSA</option><option value="IndividualHSA">Individual HSA</option><option value="FamilyHSA">Family HSA</option></optgroup><optgroup label="Retirement Benefits"><option value="401K">401(k)</option><option value="Roth401K">Roth 401(k)</option><option value="403B">403(b)</option><option value="Roth403B">Roth 403(b)</option><option value="457B">457(b)</option><option value="Roth457B">Roth 457(b)</option><option value="SIMPLEIRA">SIMPLE IRA</option></optgroup><option value="Custom">Custom Benefit/Deduction</option></select></div>
            </div>
            <div class="calculation-section__block custom-text">
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates_0_deductions___name___customDescription" class="form-block__label">
                    Custom Description *                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates_0_deductions___name___customDescription" name="tps_create_stub[salaryProfile][payDates][0][deductions][__name__][customDescription]" required="required" error_message="Please fill out the type" data-formify-ptarget="1" placeholder="This field is mandatory" class=" form-input"   /><div class="form-block__error">
                    Please fill out the type
                </div></div>
            </div>
            <div class="calculation-section__block current-amount">
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates_0_deductions___name___currentAmount" class="form-block__label">
                    Current Amount *                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates_0_deductions___name___currentAmount" name="tps_create_stub[salaryProfile][payDates][0][deductions][__name__][currentAmount]" required="required" placeholder="0.00" inputmode="numeric" error_message="Please fill out the current amount" data-formify-ptarget="1" class=" form-input form-input--money" inputmode="numeric"   /><div class="form-block__error">
                    Please fill out the current amount
                </div></div>
            </div>
            <div class="calculation-section__block ytd-amount">
                    <div class="form-block  "><label for="tps_create_stub_salaryProfile_payDates_0_deductions___name___YTDAmount" class="form-block__label">
                    YTD Amount *                </label><input type="text"
           autocomplete="no" id="tps_create_stub_salaryProfile_payDates_0_deductions___name___YTDAmount" name="tps_create_stub[salaryProfile][payDates][0][deductions][__name__][YTDAmount]" required="required" tooltip="The YTD Amount is the additional amount that the employee has earned from the beginning of the fiscal year to the present date. The YTD amount will be the YTD amount of the earliest date if you are using the deduction for more than one pay date." placeholder="0.00" inputmode="numeric" error_message="Please fill out the ytd amount" data-formify-ptarget="1" data-tippy-content="The YTD Amount is the additional amount that the employee has earned from the beginning of the fiscal year to the present date. The YTD amount will be the YTD amount of the earliest date if you are using the deduction for more than one pay date." class=" form-input form-input--money" inputmode="numeric"   /><div class="form-block__error">
                    Please fill out the ytd amount
                </div></div>
            </div>
        </div>
    </div>
'
                        data-prototype-name="__name__"
                        data-prototype-label="__name__label__"
                        data-formify-ptarget="1"
                        placeholder="This field is mandatory"
                        id="collectiontps_create_stub_salaryProfile_payDates_0_deductions_form_group"
                      ></div>
                    </div>
                    <div class="tps-theme--add-deductions">
                      + Add Additions and/or Deductions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tps-theme--ca collection__add">
        <span class="tps-theme--ca__content">+ Add Previous Pay Date</span>
      </div>
    </div>
    <hr class="tps-theme--divider" />
    <div class="form__exemptions">
      <span class="tps-theme--special-tax-exemptions">Special Tax Exemptions</span>
      <div class="u-flex form-block form-block-checkbox">
        <div>
          Is the employee exempt from any taxes?
        </div>
      </div>
      <div class="tps-theme--add-special-tax">
          + Add Special Tax Exemptions
      </div>
      <div class="js-exemptions">
        <div class="u-flex form-block form-block-checkbox">
          <div class="tps-theme--checkbox">
            <input
              type="checkbox"
              id="tps_create_stub_salaryProfile_exemptions_0"
              name="tps_create_stub[salaryProfile][exemptions][]"
              value="00-000-0000-FIT-000"
              data-gtm-form-interact-field-id="0"
            />
            <label
              for="tps_create_stub_salaryProfile_exemptions_0"
              class="form-block__label"
            >
              Add employee hire date
            </label>
          </div>
        </div>
        <div class="u-flex form-block form-block-checkbox">
          <div class="tps-theme--checkbox">
            <input
              type="checkbox"
              id="tps_create_stub_salaryProfile_exemptions_1"
              name="tps_create_stub[salaryProfile][exemptions][]"
              class="form-block-checkbox--regular fm-pristine fm-untouched fm-valid fm-empty"
              value="00-000-0000-FICA-000"
            />
            <label
              for="tps_create_stub_salaryProfile_exemptions_1"
              class="form-block__label"
            >
              Social Security
            </label>
          </div>
        </div>
        <div class="u-flex form-block form-block-checkbox">
          <div class="tps-theme--checkbox">
            <input
              type="checkbox"
              id="tps_create_stub_salaryProfile_exemptions_2"
              name="tps_create_stub[salaryProfile][exemptions][]"
              class="form-block-checkbox--regular fm-pristine fm-untouched fm-valid fm-empty"
              value="00-000-0000-MEDI-000"
            />
            <label
              for="tps_create_stub_salaryProfile_exemptions_2"
              class="form-block__label"
            >
              Medicare
            </label>
          </div>
        </div>
        <div class="u-flex form-block form-block-checkbox">
          <div class="tps-theme--checkbox">
            <input
              type="checkbox"
              id="tps_create_stub_salaryProfile_exemptions_3"
              name="tps_create_stub[salaryProfile][exemptions][]"
              class="form-block-checkbox--regular fm-pristine fm-untouched fm-valid fm-empty"
              value="00-000-0000-MEDI2-000"
            />
            <label
              for="tps_create_stub_salaryProfile_exemptions_3"
              class="form-block__label"
            >
              Additional Medicare
            </label>
          </div>
        </div>
        <div class="u-flex form-block form-block-checkbox">
          <div class="tps-theme--checkbox">
            <input
              type="checkbox"
              id="tps_create_stub_salaryProfile_exemptions_4"
              name="tps_create_stub[salaryProfile][exemptions][]"
              class="form-block-checkbox--regular fm-pristine fm-untouched fm-valid fm-empty"
              value="06-000-0000-SIT-000"
            />
            <label
              for="tps_create_stub_salaryProfile_exemptions_4"
              class="form-block__label"
            >
              California State Tax
            </label>
          </div>
        </div>
        <div class="u-flex form-block form-block-checkbox">
          <div class="tps-theme--checkbox">
            <input
              type="checkbox"
              id="tps_create_stub_salaryProfile_exemptions_5"
              name="tps_create_stub[salaryProfile][exemptions][]"
              class="form-block-checkbox--regular fm-pristine fm-untouched fm-valid fm-empty"
              value="06-000-0000-SDI-000"
            />
            <label
              for="tps_create_stub_salaryProfile_exemptions_5"
              class="form-block__label"
            >
              California SDI
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

const EMAIL_SECTION_BLOCK = `<div class="section-block email-block">
  <h2 class="section-block__title">4. Email</h2>
  <p>
    Insert the e-mail address to which you want to receive your stub order(s)
  </p>
  <div
    class="form-block fm-pristine fm-invalid fm-empty fm-invalid-value-missing fm-touched"
  >
    <label for="tps_create_stub_email" class="form-block__label">
      <div>
        <span class="tps-theme--required__star">*</span
        ><span class="tps-theme--required__content">Your Email Address</span>
      </div>
    </label>

    <input
      type="email"
      id="tps_create_stub_email"
      name="tps_create_stub[email]"
      required="required"
      error_message="Please enter a valid email address"
      data-formify-ptarget="1"
      placeholder="This field is mandatory"
      class="form-input fm-pristine fm-invalid fm-empty fm-invalid-value-missing fm-touched"
      autocomplete="no"
    />
    <div class="form-block__error">Please enter a valid email address</div>
  </div>
</div>
`;

// remove section text
document.querySelector("div .form-section__text").remove();

// All form sections
const sections = document.querySelectorAll(".section-block");

// 1. Company Information
const companyInformationSection = sections.item(0);
companyInformationSection.outerHTML = COMPANY_SECTION_HTML;

// 2. Employee Information
const employeeInformationSection = sections.item(1);
employeeInformationSection.outerHTML = EMPLOYEE_SECTION_HTML;

// 3. Salary Information
const salaryInformationSection = sections.item(2);
salaryInformationSection.outerHTML = SALARY_SECTION_HTML;

// 4. Email
const elementSection = sections.item(3);
elementSection.outerHTML = EMAIL_SECTION_BLOCK;
